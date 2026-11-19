/* Estudio · visor de clase: diapositivas a la izquierda, la fuente (libro subrayado o PDF) a la derecha.
   Lee window.MATERIA (nombre, enlaces) y window.CLASE = {temas:[{name, fuentes?, slides:[{title, html, uno?, book?, q}], top}]} */
(function(){
'use strict';
var M=window.MATERIA, D=window.CLASE.temas;
var $=function(i){return document.getElementById(i)};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var T=0, I=0, REP=false;
var CDN='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';
var FU_nom='',pdfLib=null, docs={}, PK=0, PG=0, FU=null;

function pad(n){return ('0'+n).slice(-2)}
function total(){return D[T].slides.length+2}
function hash(){location.hash=REP?'rep':('t'+(T+1)+'/'+I)}
function lee(){
  var h=location.hash;
  if(h==='#rep'){REP=true;return}
  var m=h.match(/t(\d+)\/(\d+)/);
  if(m&&D[+m[1]-1]){T=+m[1]-1;I=+m[2]}
}
var PT=0,ACT=-1,pt=null;
function sec(i){return $('m').querySelector('.slide[data-i="'+i+'"]')}
function hh(){var h=document.querySelector('header.top');return h?h.getBoundingClientRect().bottom:0}
function irA(i,suave){var el=sec(i);if(!el)return;var y=el.getBoundingClientRect().top+window.pageYOffset-Math.max(hh(),0)-14;window.scrollTo({top:Math.max(0,y),behavior:suave?'smooth':'auto'})}
function go(t,i){
  REP=false;i=Math.max(0,Math.min(i,D[t].slides.length+1));
  if(t!==T||!sec(0)){T=t;I=i;ACT=-1;render();return}
  irA(i,true);
}
document.body.classList.add('lat');
var side=document.createElement('nav');side.className='side';side.id='side';side.setAttribute('aria-label','Temas');
var mainEl=$('m');mainEl.parentNode.insertBefore(side,mainEl);
var tt=document.createElement('button');tt.className='ttog';tt.id='ttog';tt.textContent='☰ Temas';document.body.appendChild(tt);

function qcards(arr,conTema){
  return arr.map(function(q){
    return '<div class="qc">'+(conTema&&q.tema?'<span class="tm">'+esc(q.tema)+'</span>':'')+
      (q.rep>1?'<span class="x">×'+q.rep+'</span>':'')+esc(q.q)+
      '<span class="a">✔ '+esc(q.a)+'</span>'+
      (q.e?'<details><summary>Por qué</summary><p>'+esc(q.e)+'</p></details>':'')+'</div>';
  }).join('');
}

function lateral(){
  var h='<div class="sh mono">✦ '+esc(M.nombre)+'</div>';
  D.forEach(function(t,k){
    var on=!REP&&k===T;
    h+='<button class="sit" data-t="'+k+'"'+(on?' aria-current="true"':'')+'><span class="script">('+pad(k+1)+')</span><span class="nm">'+esc(t.name||t.tab||('Tema '+(k+1)))+'</span></button>';
    if(on){
      h+='<div class="subs">'+t.slides.map(function(sl,j){return '<button class="sub" data-i="'+(j+1)+'">'+esc(sl.title)+'</button>'}).join('')+'<button class="sub" data-i="'+(t.slides.length+1)+'">★ Lo más preguntado</button></div>';
    }
  });
  h+='<button class="sit rep" data-rep="1"'+(REP?' aria-current="true"':'')+'><span class="script">★</span><span class="nm">Más repetidas</span></button>';
  side.innerHTML=h;
}
function marcaLat(){
  var c=side.querySelectorAll('.sub');
  for(var j=0;j<c.length;j++){var on=(+c[j].dataset.i===I);if(on)c[j].setAttribute('aria-current','true');else c[j].removeAttribute('aria-current')}
  var a=side.querySelector('.sub[aria-current]');
  if(a&&a.scrollIntoView){var r=a.getBoundingClientRect(),sr=side.getBoundingClientRect();if(r.top<sr.top+30||r.bottom>sr.bottom-30)side.scrollTop+=r.top-sr.top-sr.height/3}
}

function seccion(d,k,n){
  if(k===0)return '<section class="slide cover" data-i="0"><div class="mono">✦ '+esc(M.nombre)+' · '+esc(d.tab||('Tema '+(T+1)))+'</div><h1>'+esc(d.name)+'</h1><p>'+esc(d.intro||'Baja por las diapositivas con lo que más cae en los exámenes. A la derecha, la fuente para que lo busques en contexto.')+'</p><div class="toc">'+
      d.slides.map(function(s,j){return '<button data-i="'+(j+1)+'"><span class="script">('+pad(j+1)+')</span>'+esc(s.title)+'<span class="mono">'+((s.book&&s.book.length)?'libro ✓':'')+'</span></button>'}).join('')+
      '<button data-i="'+(n-1)+'"><span class="script">★</span>Lo más preguntado</button></div></section>';
  if(k===n-1)return '<section class="slide qtop" data-i="'+k+'"><div class="mono">✦ '+esc(d.tab||('Tema '+(T+1)))+' · última diapositiva</div><h2>Lo más preguntado</h2>'+
      ((d.top&&d.top.length)?qcards(d.top):'<div class="qc mono">Sin preguntas repetidas en este tema.</div>')+'</section>';
  var s=d.slides[k-1];
  return '<section class="slide" data-i="'+k+'"><div class="mono">✦ Diapositiva '+(k+1)+' · '+esc(d.tab||('Tema '+(T+1)))+'</div><h2>'+esc(s.title)+'</h2><div class="sbody'+(s.uno?' uno':'')+'">'+s.html+'</div>'+
      ((s.q&&s.q.length)?'<div class="qs"><h3>✦ Lo que preguntan en los exámenes</h3>'+qcards(s.q)+'</div>':'')+'</section>';
}

function render(){
  lateral();
  if(REP){
    var all=[];D.forEach(function(t){(t.top||[]).forEach(function(q){all.push(Object.assign({tema:t.name},q))})});
    all.sort(function(a,b){return (b.rep||0)-(a.rep||0)});
    $('cnt').textContent=all.length+' preguntas';
    $('m').innerHTML='<section class="slide qtop"><div class="mono">✦ '+esc(M.nombre)+' · todas las materias del visor</div><h2>Lo más preguntado</h2>'+
      (all.length?qcards(all,true):'<div class="qc mono">Aún no hay preguntas repetidas cargadas.</div>')+'</section>';
    panel(null,false);window.scrollTo(0,0);return;
  }
  var d=D[T],n=total(),h='';
  for(var k=0;k<n;k++)h+=seccion(d,k,n);
  $('m').innerHTML=h;
  window.scrollTo(0,0);
  if(I>0)irA(I,false);
  act(I,true);
}

/* diapositiva activa al desplazarse: actualiza contador, menú, enlace y fuente */
function act(k,ya){
  if(REP)return;
  var cambio=(k!==ACT);I=k;
  var n=total();
  $('cnt').textContent=pad(I+1)+' / '+pad(n);
  marcaLat();
  if(!cambio)return;ACT=k;
  history.replaceState(null,'','#t'+(T+1)+'/'+I);
  var idx=I<1?1:I>n-2?null:I; /* portada: fuente de la 1.ª; última: deja la que estaba */
  if(idx===null)return;
  var hacer=function(){var s=D[T].slides[idx-1];if(s)panel(s.book||null,true,s.fuentes||null)};
  clearTimeout(pt);if(ya)hacer();else pt=setTimeout(hacer,260);
}
var tick=false;
function alScroll(){
  if(tick||REP)return;tick=true;
  requestAnimationFrame(function(){
    tick=false;var ss=$('m').querySelectorAll('.slide');if(!ss.length)return;
    var linea=Math.max(hh(),0)+window.innerHeight*.28,k=0;
    for(var j=0;j<ss.length;j++){if(ss[j].getBoundingClientRect().top<=linea)k=+ss[j].dataset.i;else break}
    if(window.innerHeight+window.pageYOffset>=document.documentElement.scrollHeight-4)k=ss.length-1;
    act(k,false);
  });
}
window.addEventListener('scroll',alScroll,{passive:true});

/* ---------- panel de la fuente ---------- */
function panel(book,show,sf){
  var b=$('book');PT++;
  var f=sf||(D[T]&&D[T].fuentes)||[];FU=f;
  if(!show){b.hidden=true;document.body.classList.remove('conlibro','open');b.classList.remove('open');$('tog').hidden=true;return}
  b.hidden=false;document.body.classList.add('conlibro');$('tog').hidden=false;
  if(book&&book.length){
    $('bt').textContent=(book[0].fuente||'Cecil')+' · subrayado = lo de la diapositiva · clic = zoom';
    $('bchips').innerHTML=book.length>1?book.map(function(x,k){return '<button class="chip" data-g="'+k+'">pág. '+x.pn+'</button>'}).join(''):'<span class="mono">pág. '+book[0].pn+'</span>';
    $('bs').classList.remove('zoom');$('bs').innerHTML=book.map(function(x,k){return '<figure id="g'+k+'"><figcaption>'+esc(x.fuente||'Cecil')+' · pág. '+x.pn+'</figcaption><img loading="lazy" src="'+x.img+'" alt="Página '+x.pn+' con lo subrayado"></figure>'}).join('');
    $('bs').scrollTop=0;return;
  }
  if(f.length){if(sf&&FU_nom){var j=f.map(function(x){return x.nom}).indexOf(FU_nom);PK=j>=0?j:0}pdfPanel(f);return}
  $('bt').textContent='Fuente · sin contraparte';$('bchips').innerHTML='';
  $('bs').innerHTML='<div class="nolib"><b>Esto no viene en la fuente que subiste</b>La diapositiva sale de tus notas y de los exámenes. La fuente no tiene esta parte (o solo la menciona de pasada), así que no subrayé nada para no inventar contexto.</div>';
}

function lib(){
  if(!pdfLib)pdfLib=new Promise(function(ok,no){
    var s=document.createElement('script');s.src=CDN+'pdf.min.js';s.onerror=no;
    s.onload=function(){window.pdfjsLib.GlobalWorkerOptions.workerSrc=CDN+'pdf.worker.min.js';ok(window.pdfjsLib)};
    document.head.appendChild(s);
  }).catch(function(e){pdfLib=null;throw e});
  return pdfLib;
}
function getDoc(f){
  var u=f.url;
  if(!docs[u])docs[u]=lib().then(function(L){return L.getDocument(f.big?{url:u,disableAutoFetch:true,disableStream:true}:u).promise});
  return docs[u];
}
function pdfPanel(f){
  if(PK>=f.length)PK=0;FU=f;
  $('bt').textContent='Notas · clic en la página = zoom';
  $('bchips').innerHTML=f.map(function(x,k){return '<button class="chip" data-pk="'+k+'"'+(k===PK?' aria-current="true"':'')+'>'+esc(x.nom)+'</button>'}).join('');
  PG=f[PK].page||1;$('bs').classList.remove('zoom');var mi=++PT;
  $('bs').innerHTML='<div class="mono" style="padding:20px">Cargando '+esc(f[PK].nom)+'…</div>';
  var k=PK,sc=$('bs');
  getDoc(f[k]).then(function(doc){
    if(k!==PK||mi!==PT||$('book').hidden)return;
    sc.innerHTML='';sc.scrollTop=0;
    var ini=PG;
    FU_nom=f[k].nom;pagina(doc,ini,sc,3,f[k]);
  },function(){sc.innerHTML='<div class="nolib"><b>No pude abrir el PDF</b>Revisa tu conexión y vuelve a intentar.</div>'});
}
function pn(x){return x.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'')}
function marca(h,pg,vp,tgs,sc){
  return pg.getTextContent().then(function(tc){
    var norm='',map=[],U=window.pdfjsLib.Util,primero=null;
    tc.items.forEach(function(it,k){for(var c=0;c<it.str.length;c++){var n=pn(it.str[c]);for(var j=0;j<n.length;j++){norm+=n[j];map.push([k,c])}}});
    tgs.forEach(function(t){
      var tn=pn(t),a=tn?norm.indexOf(tn):-1;if(a<0)return;var seg={};
      for(var i=a;i<a+tn.length;i++){var k=map[i][0],c=map[i][1],s=seg[k]||(seg[k]=[c,c]);if(c<s[0])s[0]=c;if(c>s[1])s[1]=c}
      Object.keys(seg).forEach(function(k){
        var it=tc.items[k],L=it.str.length||1,tr=U.transform(vp.transform,it.transform),alto=Math.hypot(tr[2],tr[3]),ancho=it.width*vp.scale;
        var x=tr[4]+ancho*seg[k][0]/L,w=ancho*(seg[k][1]+1-seg[k][0])/L,y=tr[5]-alto*.92;
        var d=document.createElement('div');d.className='hl';
        d.style.cssText='left:'+(100*x/vp.width)+'%;top:'+(100*y/vp.height)+'%;width:'+(100*w/vp.width)+'%;height:'+(100*alto*1.2/vp.height)+'%';
        h.appendChild(d);var f=y/vp.height;if(primero===null||f<primero)primero=f;
      });
    });
    if(primero!==null){var r=h.getBoundingClientRect(),sr=sc.getBoundingClientRect();sc.scrollTop=Math.max(0,sc.scrollTop+(r.top-sr.top)+primero*r.height-sc.clientHeight/4)}
  });
}
function pagina(doc,desde,sc,cuantas,f){
  var ant=sc.querySelector('.mas');if(ant)ant.remove();
  var fin=Math.min(doc.numPages,desde+cuantas-1),seq=Promise.resolve();
  for(var p=desde;p<=fin;p++)(function(p){
    var fig=document.createElement('figure');fig.innerHTML='<figcaption>'+esc(f.nom)+' · pág. '+p+'</figcaption>';
    var wr=document.createElement('div');wr.style.position='relative';var cv=document.createElement('canvas');wr.appendChild(cv);fig.appendChild(wr);sc.appendChild(fig);
    seq=seq.then(function(){return doc.getPage(p)}).then(function(pg){
      var w=Math.max(300,Math.min(sc.clientWidth,900)-28),v0=pg.getViewport({scale:1}),sc2=(w/v0.width)*2.2,v=pg.getViewport({scale:sc2});
      cv.width=v.width;cv.height=v.height;
      return pg.render({canvasContext:cv.getContext('2d'),viewport:v}).promise.then(function(){if(p===(f.page||1)&&f.tg&&f.tg.length)return marca(wr,pg,pg.getViewport({scale:sc2}),f.tg,sc)});
    });
  })(p);
  if(fin<doc.numPages){
    var b=document.createElement('button');b.className='ghost mas';b.textContent='Más páginas →';
    b.onclick=function(){pagina(doc,fin+1,sc,3,f)};sc.appendChild(b);
  }
}

function zoom(e,el){
  var sc=$('bs'),fig=el.closest('figure'),r=fig.getBoundingClientRect();
  var fx=(e.clientX-r.left)/r.width,fy=(e.clientY-r.top)/r.height;
  sc.style.scrollBehavior='auto';sc.classList.toggle('zoom');
  var r2=fig.getBoundingClientRect();
  sc.scrollLeft+=r2.left+fx*r2.width-e.clientX;sc.scrollTop+=r2.top+fy*r2.height-e.clientY;
  sc.style.scrollBehavior='';
}
document.addEventListener('click',function(e){
  var z=e.target.closest('.bs canvas,.bs img');if(z)return zoom(e,z);
  var t=e.target.closest('button');if(!t)return;
  if(t.dataset.rep){REP=true;history.replaceState(null,'','#rep');render();side.classList.remove('open');return}
  if(t.dataset.t!=null){side.classList.remove('open');return go(+t.dataset.t,0)}
  if(t.dataset.i!=null){side.classList.remove('open');return go(T,+t.dataset.i)}
  if(t.id==='ttog'){side.classList.toggle('open');return}
  if(t.dataset.g!=null){var f=$('g'+t.dataset.g);if(f)f.scrollIntoView({behavior:'smooth',block:'start'});return}
  if(t.dataset.pk!=null){PK=+t.dataset.pk;pdfPanel(FU);return}
  if(t.id==='tog'){$('book').classList.add('open');document.body.classList.add('open')}
  if(t.id==='bx'){$('book').classList.remove('open');document.body.classList.remove('open')}
});
document.addEventListener('keydown',function(e){
  if(REP||e.target.closest('input,textarea,.bs'))return;
  if(e.key==='ArrowRight'||e.key==='PageDown'&&false){go(T,I+1)}else if(e.key==='ArrowLeft'){go(T,I-1)}
});
window.addEventListener('hashchange',function(){lee();ACT=-1;render()});
lee();render();
})();
