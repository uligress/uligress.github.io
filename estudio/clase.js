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
function go(t,i){cierraQ();REP=false;T=t;I=Math.max(0,Math.min(i,D[t].slides.length+1));history.replaceState(null,'','#t'+(T+1)+'/'+I);render();window.scrollTo(0,0)}
document.body.classList.add('lat');
var side=document.createElement('nav');side.className='side';side.id='side';side.setAttribute('aria-label','Temas');
var mainEl=$('m');mainEl.parentNode.insertBefore(side,mainEl);
var tt=document.createElement('button');tt.className='ttog';tt.id='ttog';tt.textContent='▤ Miniaturas';document.body.appendChild(tt);

function qcards(arr,conTema){
  return arr.map(function(q){
    return '<div class="qc">'+(conTema&&q.tema?'<span class="tm">'+esc(q.tema)+'</span>':'')+
      (q.rep>1?'<span class="x">×'+q.rep+'</span>':'')+esc(q.q)+
      '<span class="a">✔ '+esc(q.a)+'</span>'+
      (q.e?'<details><summary>Por qué</summary><p>'+esc(q.e)+'</p></details>':'')+'</div>';
  }).join('');
}

var OCULTA=false;try{OCULTA=localStorage.getItem('clase-min')==='0'}catch(e){}
function ponMin(){document.body.classList.toggle('nomin',OCULTA)}
ponMin();
function lateral(){
  var h='';
  if(!REP){
    var d=D[T],n=total();
    for(var k=0;k<n;k++){
      var tit=k===0?'Portada':k===n-1?'Preguntas':d.slides[k-1].title;
      h+='<button class="th" data-i="'+k+'"'+(k===I?' aria-current="true"':'')+'><span class="script">'+(k+1)+'</span><span class="tt">'+esc(tit)+'</span></button>';
    }
  }
  side.innerHTML=h;
  var o=D.map(function(t,k){return '<option value="'+k+'"'+(!REP&&k===T?' selected':'')+'>'+pad(k+1)+' · '+esc(t.name||t.tab||('Tema '+(k+1)))+'</option>'}).join('')+'<option value="rep"'+(REP?' selected':'')+'>★ Más repetidas</option>';
  $('tabs').innerHTML='<select id="tsel" aria-label="Tema">'+o+'</select><button class="ghost" id="mintog" aria-label="Mostrar u ocultar miniaturas">▤ Miniaturas</button>';
}

function seccion(d,k,n){
  if(k===0)return '<section class="slide cover" data-i="0"><div class="mono">✦ '+esc(M.nombre)+' · '+esc(d.tab||('Tema '+(T+1)))+'</div><h1>'+esc(d.name)+'</h1><p>'+esc(d.intro||'Baja por las diapositivas con lo que más cae en los exámenes. A la derecha, la fuente para que lo busques en contexto.')+'</p><div class="toc">'+
      d.slides.map(function(s,j){return '<button data-i="'+(j+1)+'"><span class="script">('+pad(j+1)+')</span>'+esc(s.title)+'<span class="mono">'+((s.book&&s.book.length)?'libro ✓':'')+'</span></button>'}).join('')+
      '<button data-i="'+(n-1)+'"><span class="script">★</span>Lo más preguntado</button></div></section>';
  if(k===n-1)return '<section class="slide qtop" data-i="'+k+'"><div class="mono">✦ '+esc(d.tab||('Tema '+(T+1)))+' · última diapositiva</div><h2>Lo más preguntado</h2>'+
      ((d.top&&d.top.length)?qcards(d.top):'<div class="qc mono">Sin preguntas repetidas en este tema.</div>')+'</section>';
  var s=d.slides[k-1];
  return '<section class="slide" data-i="'+k+'"><div class="mono">✦ Diapositiva '+(k+1)+' · '+esc(d.tab||('Tema '+(T+1)))+'</div><h2>'+esc(s.title)+'</h2><div class="sbody'+(s.uno?' uno':'')+'">'+s.html+'</div></section>';
}

function render(){
  lateral();
  if(REP){
    var all=[];D.forEach(function(t){(t.top||[]).forEach(function(q){all.push(Object.assign({tema:t.name},q))})});
    all.sort(function(a,b){return (b.rep||0)-(a.rep||0)});
    $('cnt').textContent=all.length+' preguntas';
    $('m').innerHTML='<section class="slide qtop"><div class="mono">✦ '+esc(M.nombre)+' · todas las materias del visor</div><h2>Lo más preguntado</h2>'+
      (all.length?qcards(all,true):'<div class="qc mono">Aún no hay preguntas repetidas cargadas.</div>')+'</section>';
    panel(null,false);return;
  }
  var d=D[T],n=total(),s=(I>0&&I<n-1)?d.slides[I-1]:null;
  $('cnt').textContent=pad(I+1)+' / '+pad(n);
  var nq=(s&&s.q&&s.q.length)||0;
  var h='<div class="sbox"><div class="sfit">'+seccion(d,I,n)+'</div></div>'+
    '<div class="nav"><button class="ghost" id="prev"'+(I?'':' disabled')+'>◁</button><span class="mono">'+(I+1)+' / '+n+'</span><button class="ghost" id="next"'+(I<n-1?'':' disabled')+'>▷</button>'+
    (nq?'<button class="pill" id="qbtn"><span>Preguntas ('+nq+')</span><span class="arr">?</span></button>':'')+'</div>';
  $('m').innerHTML=h;fit();
  var c=side.querySelector('[aria-current]');if(c&&c.scrollIntoView)c.scrollIntoView({block:'nearest'});
  var idx=I<1?1:I>n-2?null:I;
  if(idx!==null){var sl=d.slides[idx-1];if(sl)panel(sl.book||null,true,sl.fuentes||null)}
  else if(I===0&&d.slides[0])panel(d.slides[0].book||null,true,d.slides[0].fuentes||null);
}

function fit(){
  var bx=$('m').querySelector('.sbox'),f=bx&&bx.querySelector('.sfit');if(!f)return;
  f.style.zoom=1;bx.classList.remove('sc');
  var ht=hh();document.documentElement.style.setProperty('--ht',Math.max(ht,0)+'px');
  if(window.innerWidth<=1000)return;
  var cs=getComputedStyle(bx),av=bx.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
  var lo=.38,hi=1.6;
  f.style.zoom=lo;
  if(f.getBoundingClientRect().height>av+1){bx.classList.add('sc');return}
  for(var i=0;i<9;i++){var m=(lo+hi)/2;f.style.zoom=m;if(f.getBoundingClientRect().height<=av-2)lo=m;else hi=m}
  f.style.zoom=lo;
}
window.addEventListener('resize',fit);
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
function preguntas(){
  var d=D[T],sl=d.slides[I-1];if(!sl||!sl.q)return;
  var m=$('qm');if(!m){m=document.createElement('div');m.id='qm';m.className='modal';document.body.appendChild(m)}
  m.innerHTML='<div class="mp" role="dialog" aria-modal="true"><div class="mh"><span class="mono">✦ Lo que preguntan en los exámenes · '+esc(sl.title)+'</span><button class="ghost" id="qx">Cerrar</button></div>'+qcards(sl.q)+'</div>';
  m.hidden=false;
}
function cierraQ(){var m=$('qm');if(m)m.hidden=true}
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
  if(e.target.id==='qm'){cierraQ();return}
  var z=e.target.closest('.bs canvas,.bs img');if(z)return zoom(e,z);
  var t=e.target.closest('button');if(!t)return;
  if(t.dataset.rep){REP=true;history.replaceState(null,'','#rep');render();side.classList.remove('open');return}
  if(t.id==='qbtn')return preguntas();
  if(t.id==='qx')return cierraQ();
  if(t.id==='prev')return go(T,I-1);
  if(t.id==='next')return go(T,I+1);
  if(t.id==='mintog'){OCULTA=!document.body.classList.contains('nomin');ponMin();try{localStorage.setItem('clase-min',OCULTA?'0':'1')}catch(e){}return}
  if(t.dataset.i!=null){side.classList.remove('open');return go(T,+t.dataset.i)}
  if(t.id==='ttog'){side.classList.toggle('open');return}
  if(t.dataset.g!=null){var f=$('g'+t.dataset.g);if(f)f.scrollIntoView({behavior:'smooth',block:'start'});return}
  if(t.dataset.pk!=null){PK=+t.dataset.pk;pdfPanel(FU);return}
  if(t.id==='tog'){$('book').classList.add('open');document.body.classList.add('open')}
  if(t.id==='bx'){$('book').classList.remove('open');document.body.classList.remove('open')}
});
document.addEventListener('keydown',function(e){
  if(e.key==='Escape'){cierraQ();return}
  if(REP||e.target.closest('input,textarea,.bs'))return;
  if(e.key==='ArrowRight'||e.key==='PageDown'&&false){go(T,I+1)}else if(e.key==='ArrowLeft'){go(T,I-1)}
});
document.addEventListener('change',function(e){if(e.target.id!=='tsel')return;var v=e.target.value;if(v==='rep'){REP=true;history.replaceState(null,'','#rep');render();window.scrollTo(0,0)}else go(+v,0)});
window.addEventListener('hashchange',function(){lee();render()});
lee();render();
})();
