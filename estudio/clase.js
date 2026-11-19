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
function go(t,i){REP=false;T=t;I=Math.max(0,Math.min(i,total()-1));history.replaceState(null,'','#t'+(T+1)+'/'+I);render();window.scrollTo(0,0)}

function qcards(arr,conTema){
  return arr.map(function(q){
    return '<div class="qc">'+(conTema&&q.tema?'<span class="tm">'+esc(q.tema)+'</span>':'')+
      (q.rep>1?'<span class="x">×'+q.rep+'</span>':'')+esc(q.q)+
      '<span class="a">✔ '+esc(q.a)+'</span>'+
      (q.e?'<details><summary>Por qué</summary><p>'+esc(q.e)+'</p></details>':'')+'</div>';
  }).join('');
}

function cabecera(){
  var tabs=D.map(function(t,k){return '<button class="tab" role="tab" data-t="'+k+'" aria-selected="'+(!REP&&k===T)+'">'+esc(t.tab||('Tema '+(k+1)))+'</button>'}).join('');
  tabs+='<button class="tab" role="tab" data-rep="1" aria-selected="'+REP+'">★ Más repetidas</button>';
  $('tabs').innerHTML=tabs;
}

function render(){
  cabecera();
  var h='',book=null,show=false;
  if(REP){
    var all=[];D.forEach(function(t){(t.top||[]).forEach(function(q){all.push(Object.assign({tema:t.name},q))})});
    all.sort(function(a,b){return (b.rep||0)-(a.rep||0)});
    $('cnt').textContent=all.length+' preguntas';$('chips').innerHTML='';
    h='<section class="slide qtop"><div class="mono">✦ '+esc(M.nombre)+' · todas las materias del visor</div><h2>Lo más preguntado</h2>'+
      (all.length?qcards(all,true):'<div class="qc mono">Aún no hay preguntas repetidas cargadas.</div>')+'</section>';
    $('m').innerHTML=h;panel(null,false);return;
  }
  var d=D[T],n=total();
  $('cnt').textContent=pad(I+1)+' / '+pad(n);
  var ch='';for(var k=0;k<n;k++)ch+='<button class="chip" data-i="'+k+'"'+(k===I?' aria-current="true"':'')+'>'+(k===0?'★':k===n-1?'?':k)+'</button>';
  $('chips').innerHTML=ch;
  var c=$('chips').querySelector('[aria-current]');if(c&&c.scrollIntoView)c.scrollIntoView({inline:'center',block:'nearest'});
  if(I===0){
    h='<section class="slide cover"><div class="mono">✦ '+esc(M.nombre)+' · '+esc(d.tab||('Tema '+(T+1)))+'</div><h1>'+esc(d.name)+'</h1><p>'+esc(d.intro||'Diapositiva a diapositiva, con lo que más cae en los exámenes. A la derecha, la fuente para que lo busques en contexto.')+'</p><div class="toc">'+
      d.slides.map(function(s,k){return '<button data-i="'+(k+1)+'"><span class="script">('+pad(k+1)+')</span>'+esc(s.title)+'<span class="mono">'+((s.book&&s.book.length)?'libro ✓':'')+'</span></button>'}).join('')+
      '<button data-i="'+(n-1)+'"><span class="script">★</span>Lo más preguntado</button></div></section>';
  }else if(I===n-1){
    h='<section class="slide qtop"><div class="mono">✦ '+esc(d.tab||('Tema '+(T+1)))+' · última diapositiva</div><h2>Lo más preguntado</h2>'+
      ((d.top&&d.top.length)?qcards(d.top):'<div class="qc mono">Sin preguntas repetidas en este tema.</div>')+'</section>';
  }else{
    var s=d.slides[I-1];book=s.book||null;show=true;
    h='<section class="slide"><div class="mono">✦ Diapositiva '+(I+1)+' · '+esc(d.tab||('Tema '+(T+1)))+'</div><h2>'+esc(s.title)+'</h2><div class="sbody'+(s.uno?' uno':'')+'">'+s.html+'</div>'+
      ((s.q&&s.q.length)?'<div class="qs"><h3>✦ Lo que preguntan en los exámenes</h3>'+qcards(s.q)+'</div>':'')+'</section>';
  }
  h+='<div class="nav"><button class="ghost" id="prev"'+(I?'':' disabled')+'>← Anterior</button><button class="pill" id="next"'+(I<n-1?'':' disabled')+'><span>Siguiente</span><span class="arr">→</span></button></div>';
  $('m').innerHTML=h;
  panel(book,show,show&&!REP&&I>0&&I<n-1?d.slides[I-1].fuentes:null);
}

/* ---------- panel de la fuente ---------- */
function panel(book,show,sf){
  var b=$('book');
  var f=sf||(D[T]&&D[T].fuentes)||[];FU=f;
  if(!show){b.hidden=true;document.body.classList.remove('conlibro','open');b.classList.remove('open');$('tog').hidden=true;return}
  b.hidden=false;document.body.classList.add('conlibro');$('tog').hidden=false;
  if(book&&book.length){
    $('bt').textContent=(book[0].fuente||'Cecil')+' · subrayado = lo de la diapositiva';
    $('bchips').innerHTML=book.length>1?book.map(function(x,k){return '<button class="chip" data-g="'+k+'">pág. '+x.pn+'</button>'}).join(''):'<span class="mono">pág. '+book[0].pn+'</span>';
    $('bs').innerHTML=book.map(function(x,k){return '<figure id="g'+k+'"><figcaption>'+esc(x.fuente||'Cecil')+' · pág. '+x.pn+'</figcaption><img loading="lazy" src="'+x.img+'" alt="Página '+x.pn+' con lo subrayado"></figure>'}).join('');
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
  $('bt').textContent='Notas · desde el tema';
  $('bchips').innerHTML=f.map(function(x,k){return '<button class="chip" data-pk="'+k+'"'+(k===PK?' aria-current="true"':'')+'>'+esc(x.nom)+'</button>'}).join('');
  PG=f[PK].page||1;
  $('bs').innerHTML='<div class="mono" style="padding:20px">Cargando '+esc(f[PK].nom)+'…</div>';
  var k=PK,sc=$('bs');
  getDoc(f[k]).then(function(doc){
    if(k!==PK||$('book').hidden)return;
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
      var w=Math.max(300,sc.clientWidth-28),v0=pg.getViewport({scale:1}),sc2=(w/v0.width)*Math.min(window.devicePixelRatio||1,2),v=pg.getViewport({scale:sc2});
      cv.width=v.width;cv.height=v.height;
      return pg.render({canvasContext:cv.getContext('2d'),viewport:v}).promise.then(function(){if(p===(f.page||1)&&f.tg&&f.tg.length)return marca(wr,pg,pg.getViewport({scale:sc2}),f.tg,sc)});
    });
  })(p);
  if(fin<doc.numPages){
    var b=document.createElement('button');b.className='ghost mas';b.textContent='Más páginas →';
    b.onclick=function(){pagina(doc,fin+1,sc,3,f)};sc.appendChild(b);
  }
}

document.addEventListener('click',function(e){
  var t=e.target.closest('button');if(!t)return;
  if(t.dataset.rep){REP=true;history.replaceState(null,'','#rep');render();window.scrollTo(0,0);return}
  if(t.classList.contains('tab')&&t.dataset.t!=null)return go(+t.dataset.t,0);
  if(t.dataset.i!=null)return go(T,+t.dataset.i);
  if(t.id==='prev')return go(T,I-1);
  if(t.id==='next')return go(T,I+1);
  if(t.dataset.g!=null){var f=$('g'+t.dataset.g);if(f)f.scrollIntoView({behavior:'smooth',block:'start'});return}
  if(t.dataset.pk!=null){PK=+t.dataset.pk;pdfPanel(FU);return}
  if(t.id==='tog'){$('book').classList.add('open');document.body.classList.add('open')}
  if(t.id==='bx'){$('book').classList.remove('open');document.body.classList.remove('open')}
});
document.addEventListener('keydown',function(e){
  if(REP)return;
  if(e.key==='ArrowRight')go(T,I+1);else if(e.key==='ArrowLeft')go(T,I-1);
});
window.addEventListener('hashchange',function(){lee();render()});
lee();render();
})();
