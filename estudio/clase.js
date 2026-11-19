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
var tt=document.createElement('button');tt.className='ttog';tt.id='ttog';tt.setAttribute('aria-label','Miniaturas');tt.innerHTML='<svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4.5h14M2 9h14M2 13.5h14"/></svg>';document.body.appendChild(tt);

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
  var o=D.map(function(t,k){return '<option value="'+k+'"'+(!REP&&k===T?' selected':'')+'>Tema '+(k+1)+' · '+esc(t.name||t.tab||('Tema '+(k+1)))+'</option>'}).join('')+'<option value="rep"'+(REP?' selected':'')+'>★ Más repetidas</option>';
  $('tabs').innerHTML='<button class="ghost" id="mintog" aria-label="Mostrar u ocultar miniaturas" title="Miniaturas"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M2 4.5h14M2 9h14M2 13.5h14"/></svg></button><select id="tsel" aria-label="Tema">'+o+'</select>';
}

function seccion(d,k,n){
  if(k===0)return '<section class="slide cover" data-i="0"><h1>'+esc(d.name)+'</h1><p>'+esc(d.intro||'Baja por las diapositivas con lo que más cae en los exámenes. A la derecha, la fuente para que lo busques en contexto.')+'</p><div class="toc">'+
      d.slides.map(function(s,j){return '<button data-i="'+(j+1)+'"><span class="script">('+pad(j+1)+')</span>'+esc(s.title)+'<span class="mono">'+((s.book&&s.book.length)?'libro ✓':'')+'</span></button>'}).join('')+
      '<button data-i="'+(n-1)+'"><span class="script">★</span>Lo más preguntado</button></div></section>';
  if(k===n-1)return '<section class="slide qtop" data-i="'+k+'"><h2>Lo más preguntado</h2>'+
      ((d.top&&d.top.length)?qcards(d.top):'<div class="qc mono">Sin preguntas repetidas en este tema.</div>')+'</section>';
  var s=d.slides[k-1];
  return '<section class="slide" data-i="'+k+'"><h2>'+esc(s.title)+'</h2><div class="sbody'+(s.uno?' uno':'')+'">'+s.html+'</div></section>';
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
  if(window.innerWidth<=1000){var s0=f.querySelector('.sbody');if(s0)s0.style.columnCount='';return}
  var cs=getComputedStyle(bx),av=bx.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom);
  var sb=f.querySelector('.sbody'),opts=[1];
  if(sb&&!sb.classList.contains('uno')){opts=[1,2];if(bx.clientWidth>1250)opts.push(3)}
  function busca(){var lo=.38,hi=1.6;f.style.zoom=lo;
    if(f.getBoundingClientRect().height>av+1)return 0;
    for(var i=0;i<9;i++){var m=(lo+hi)/2;f.style.zoom=m;if(f.getBoundingClientRect().height<=av-2)lo=m;else hi=m}
    return lo}
  var best=1,bz=-1;
  opts.forEach(function(c){if(sb)sb.style.columnCount=c;var z=busca();if(z>bz*1.04||bz<0){bz=z;best=c}});
  if(sb)sb.style.columnCount=best;
  if(bz<=0){f.style.zoom=.38;bx.classList.add('sc');return}
  f.style.zoom=bz;
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
  if(!show){V=null;navBar(false);b.hidden=true;document.body.classList.remove('conlibro','open');b.classList.remove('open');$('tog').hidden=true;return}
  b.hidden=false;document.body.classList.add('conlibro');$('tog').hidden=false;
  if(book&&book.length&&book[0].k&&!sf){var ks=book.map(function(x){return x.k});f=[{nom:'Cecil',url:'../fuente/cecil.pdf',page:ks[0],ex:ks.slice(1),tg:[],big:1,auto:1}];FU=f;PK=0;FU_nom='';pdfPanel(f);return}
  $('book').classList.remove('nohead');
  if(book&&book.length){
    V=null;navBar(false);
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
var V=null,OBS=null;
function navBar(on){
  var n=$('bnav');
  if(!on){if(n)n.remove();return}
  if(!n){n=document.createElement('div');n.id='bnav';n.className='bnav';$('bs').parentNode.insertBefore(n,$('bs'))}
  n.innerHTML='<button class="ghost" id="bpv" aria-label="Página anterior">◁</button><span class="mono">pág. <input id="bpn" type="number" min="1" inputmode="numeric" aria-label="Ir a la página"> / <b id="bpt"></b></span><button class="ghost" id="bnx" aria-label="Página siguiente">▷</button><span class="mono bmsg" id="bmsg"></span>';
}
function verPag(p,suave){
  if(!V)return;p=Math.max(1,Math.min(V.n,p));var fg=V.figs[p],sc=$('bs');if(!fg)return;
  sc.style.scrollBehavior=suave?'':'auto';
  sc.scrollTop=fg.getBoundingClientRect().top-sc.getBoundingClientRect().top+sc.scrollTop-4;
  sc.style.scrollBehavior='';actual();
}
function actual(){
  if(!V)return;var sc=$('bs'),y=sc.getBoundingClientRect().top+30,cur=1;
  for(var p=1;p<=V.n;p++){if(V.figs[p].getBoundingClientRect().top<=y)cur=p;else break}
  V.cur=cur;var i=$('bpn');if(i&&document.activeElement!==i)i.value=cur;
}
function dibuja(p){
  var V0=V,fg=V0.figs[p];if(fg._r||fg._busy)return;fg._busy=1;
  V0.doc.getPage(p).then(function(pg){
    if(V!==V0)return;
    var sc=$('bs'),w=Math.max(300,Math.min(sc.clientWidth,900)-28),v0=pg.getViewport({scale:1});
    var px=Math.min(3400,Math.round(w*Math.max(window.devicePixelRatio||1,1.5)*2.3)),s2=px/v0.width,v=pg.getViewport({scale:s2});
    var wr=fg.querySelector('.pw');wr.style.aspectRatio=v0.width+'/'+v0.height;
    var cv=document.createElement('canvas');cv.width=v.width;cv.height=v.height;
    return pg.render({canvasContext:cv.getContext('2d'),viewport:v}).promise.then(function(){
      if(V!==V0||!fg._busy)return;var o=wr.querySelector('canvas');if(o)o.remove();wr.insertBefore(cv,wr.firstChild);fg._r=1;fg._busy=0;
      if(!fg._h){fg._h=1;var tg=[];V0.f.forEach(function(x){if(x.nom===V0.nom&&(x.page||1)===p&&x.tg)tg=tg.concat(x.tg)});
        if(tg.length)return marca(wr,pg,pg.getViewport({scale:1}),tg,'hl');if(V0.auto&&V0.auto.indexOf(p)>=0)return autoMarca(p,wr,pg)}
    });
  }).catch(function(){fg._busy=0});
}
function libera(p){var fg=V.figs[p];if(!fg||!fg._r)return;var c=fg.querySelector('canvas');if(c){c.width=0;c.remove()}fg._r=0;fg._busy=0}
function visor(doc,sc,f,k,mi){
  if(OBS)OBS.disconnect();
  V={doc:doc,n:doc.numPages,f:f,nom:f[k].nom,figs:{},cur:1,tx:{},auto:f[k].auto?[f[k].page].concat(f[k].ex||[]):null};var V0=V;
  doc.getPage(1).then(function(pg){
    if(V!==V0)return;var v0=pg.getViewport({scale:1});
    var ratio=v0.width+'/'+v0.height;
    sc.innerHTML='';
    for(var p=1;p<=V0.n;p++){
      var fg=document.createElement('figure');fg.dataset.p=p;
      fg.innerHTML='<div class="pw" style="position:relative;aspect-ratio:'+ratio+'"></div>';
      sc.appendChild(fg);V0.figs[p]=fg;
    }
    navBar(true);$('bpt').textContent=V0.n;
    OBS=new IntersectionObserver(function(es){
      es.forEach(function(en){var p=+en.target.dataset.p;if(en.isIntersecting)dibuja(p);else libera(p)});
    },{root:sc,rootMargin:'700px 0px'});
    for(var q=1;q<=V0.n;q++)OBS.observe(V0.figs[q]);
    verPag(PG);
  });
}
function pdfPanel(f){
  if(PK>=f.length)PK=0;FU=f;
  $('bt').textContent='Notas · clic = zoom · toca un concepto de la diapositiva';
  $('bchips').innerHTML=f.map(function(x,k){return '<button class="chip" data-pk="'+k+'"'+(k===PK?' aria-current="true"':'')+'>'+esc(x.nom)+'</button>'}).join('');
  $('book').classList.toggle('nohead',f.length<2);PG=f[PK].page||1;$('bs').classList.remove('zoom');var mi=++PT;V=null;navBar(false);
  $('bs').innerHTML='<div class="mono" style="padding:20px">Cargando '+esc(f[PK].nom)+'…</div>';
  var k=PK,sc=$('bs');
  getDoc(f[k]).then(function(doc){
    if(k!==PK||mi!==PT||$('book').hidden)return;
    FU_nom=f[k].nom;visor(doc,sc,f,k,mi);
  },function(){sc.innerHTML='<div class="nolib"><b>No pude abrir el PDF</b>Revisa tu conexión y vuelve a intentar.</div>'});
}
function pn(x){return x.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]/g,'')}
function marca(h,pg,vp,tgs,cls){
  return pg.getTextContent().then(function(tc){
    var norm='',map=[],U=window.pdfjsLib.Util,primero=null;
    tc.items.forEach(function(it,k){for(var c=0;c<it.str.length;c++){var n=pn(it.str[c]);for(var j=0;j<n.length;j++){norm+=n[j];map.push([k,c])}}});
    tgs.forEach(function(t){
      var tn=pn(t),a=tn?norm.indexOf(tn):-1;if(a<0)return;var seg={};
      for(var i=a;i<a+tn.length;i++){var k=map[i][0],c=map[i][1],s=seg[k]||(seg[k]=[c,c]);if(c<s[0])s[0]=c;if(c>s[1])s[1]=c}
      Object.keys(seg).forEach(function(k){
        var it=tc.items[k],L=it.str.length||1,tr=U.transform(vp.transform,it.transform),alto=Math.hypot(tr[2],tr[3]),ancho=it.width*vp.scale;
        var x=tr[4]+ancho*seg[k][0]/L,w=ancho*(seg[k][1]+1-seg[k][0])/L,y=tr[5]-alto*.92;
        var d=document.createElement('div');d.className=cls;
        d.style.cssText='left:'+(100*x/vp.width)+'%;top:'+(100*y/vp.height)+'%;width:'+(100*w/vp.width)+'%;height:'+(100*alto*1.2/vp.height)+'%';
        h.appendChild(d);var f=y/vp.height;if(primero===null||f<primero)primero=f;
      });
    });
    return primero;
  });
}

function marcaRango(h,pg,vp,a,b,cls){
  return pg.getTextContent().then(function(tc){
    var map=[],U=window.pdfjsLib.Util,primero=null;
    tc.items.forEach(function(it,k){for(var c=0;c<it.str.length;c++){var n=pn(it.str[c]);for(var j=0;j<n.length;j++)map.push([k,c])}});
    var seg={};
    for(var i=a;i<=b&&i<map.length;i++){var k=map[i][0],c=map[i][1],s=seg[k]||(seg[k]=[c,c]);if(c<s[0])s[0]=c;if(c>s[1])s[1]=c}
    Object.keys(seg).forEach(function(k){
      var it=tc.items[k],L=it.str.length||1,tr=U.transform(vp.transform,it.transform),alto=Math.hypot(tr[2],tr[3]),ancho=it.width*vp.scale;
      var x=tr[4]+ancho*seg[k][0]/L,w=ancho*(seg[k][1]+1-seg[k][0])/L,y=tr[5]-alto*.92;
      var d=document.createElement('div');d.className=cls;
      d.style.cssText='left:'+(100*x/vp.width)+'%;top:'+(100*y/vp.height)+'%;width:'+(100*w/vp.width)+'%;height:'+(100*alto*1.2/vp.height)+'%';
      h.appendChild(d);var f=y/vp.height;if(primero===null||f<primero)primero=f;
    });
    return primero;
  });
}
/* zona del libro que corresponde a toda la línea de la diapositiva */
function region(line,s){
  var w=line.replace(/\s+/g,' ').trim().split(' '),an=[],seen={};
  for(var n=2;n<=3;n++)for(var i=0;i+n<=w.length;i++){
    var t=pn(w.slice(i,i+n).join(' '));if(t.length<(n===2?10:9)||seen[t])continue;seen[t]=1;
    var p=-1,c=0;while(c++<12&&(p=s.indexOf(t,p+1))>=0)an.push({a:p,b:p+t.length-1,t:t,w:t.length})}
  if(!an.length)return null;
  an.sort(function(x,y){return x.a-y.a});
  var max=Math.max(pn(line).length*1.6,160),best=null;
  for(var i=0;i<an.length;i++){
    var sc=0,seenT={},b=an[i].b;
    for(var j=i;j<an.length&&an[j].a-an[i].a<=max;j++){if(!seenT[an[j].t]){seenT[an[j].t]=1;sc+=an[j].w}if(an[j].b>b)b=an[j].b}
    if(!best||sc>best.sc)best={a:an[i].a,b:b,sc:sc}
  }
  return best&&best.sc>=14?best:null;
}
/* concepto tocado en la diapositiva → parpadeo naranja en la fuente */
function normPag(p){
  var V0=V;if(V0.tx[p])return V0.tx[p];
  return V0.tx[p]=V0.doc.getPage(p).then(function(pg){return pg.getTextContent().then(function(tc){
    var s='';tc.items.forEach(function(it){for(var c=0;c<it.str.length;c++)s+=pn(it.str[c])});return {pg:pg,s:s}})});
}
function aviso(t){var m=$('bmsg');if(!m)return;m.textContent=t;clearTimeout(aviso.t);aviso.t=setTimeout(function(){m.textContent=''},3500)}
function variantes(txt){
  var w=txt.replace(/\s+/g,' ').trim().split(' '),vars=[];
  for(var L=w.length;L>=1;L--)for(var i=0;i+L<=w.length;i++){var t=w.slice(i,i+L).join(' '),n=pn(t);if(L>=2?n.length>=6:n.length>=8)vars.push([t,n,L])}
  return vars;
}
function autoMarca(p,wr,pg){
  var els=[].slice.call(document.querySelectorAll(CSEL)),done={};
  return normPag(p).then(function(o){
    var tgs=[];
    els.forEach(function(el){var t=el.textContent;if(done[t])return;done[t]=1;var vs=variantes(t);
      for(var i=0;i<vs.length;i++){if((vs[i][2]>=2||vs[i][1].length>=10)&&o.s.indexOf(vs[i][1])>=0){tgs.push(vs[i][0]);break}}});
    if(tgs.length)return marca(wr,pg,pg.getViewport({scale:1}),tgs,'hl');
  });
}
var HT=0,HC=null,CSEL='.sbody b,.sbody strong,.sbody .ex,.sbody .m,.sbody .m2';
function quitaMarcas(c){if(!V)return;for(var p in V.figs)V.figs[p].querySelectorAll(c).forEach(function(e){e.remove()})}
function ctxDe(el){var l=el.closest('li,.r,.box,p,.cd');return (l||el).textContent}
function concepto(txt,modo,ctx){
  if(!V||$('book').hidden)return;var V0=V,tk=++HT,w=txt.replace(/\s+/g,' ').trim().split(' ');
  if(!w.length||pn(txt).length<3)return;
  var cls=modo==='c'?'hf':'hs';
  function pon(p,o,v){
    if(V!==V0||tk!==HT)return;
    quitaMarcas('.hs');if(modo==='c')quitaMarcas('.hf');
    var wr=V0.figs[p].querySelector('.pw');
    (v.rg?marcaRango(wr,o.pg,o.pg.getViewport({scale:1}),v.rg.a,v.rg.b,cls):marca(wr,o.pg,o.pg.getViewport({scale:1}),[v[0]],cls)).then(function(fr){
      if(V!==V0||tk!==HT){wr.querySelectorAll('.'+cls).forEach(function(e){if(cls==='hs')e.remove()});return}
      if(fr===null)return false;
      verPag(p);dibuja(p);var sc=$('bs'),r=wr.getBoundingClientRect(),sr=sc.getBoundingClientRect();
      sc.scrollTop=Math.max(0,sc.scrollTop+(r.top-sr.top)+fr*r.height-sc.clientHeight/3);actual();
    });
  }
  V0.cc=V0.cc||{};
  if(V0.cc[txt]){var c0=V0.cc[txt];normPag(c0.p).then(function(o){pon(c0.p,o,c0.v)});return}
  var pgs=[];V0.f.forEach(function(x){if(x.nom===V0.nom){var p=x.page||1;[p].concat(x.ex||[],[p+1,p-1]).forEach(function(q){if(q>=1&&q<=V0.n&&pgs.indexOf(q)<0)pgs.push(q)})}});
  if(V0.cur&&pgs.indexOf(V0.cur)<0)pgs.push(V0.cur);
  var line=ctx||txt;
  if(V0.cc['L|'+line]){var c1=V0.cc['L|'+line];normPag(c1.p).then(function(o){pon(c1.p,o,c1.v)});return}
  Promise.all(pgs.map(function(p){return normPag(p).then(function(o){return {p:p,o:o,r:region(line,o.s)}})})).then(function(L){
    if(V!==V0||tk!==HT)return;
    var b=null;L.forEach(function(x){if(x.r&&(!b||x.r.sc>b.r.sc))b=x});
    if(b){var v={rg:b.r};V0.cc['L|'+line]={p:b.p,v:v};pon(b.p,b.o,v);return}
    busca2();
  });
  function busca2(){
  var vars=variantes(txt),vi=0;
  (function sig(){
    if(V!==V0||tk!==HT)return;
    if(vi>=vars.length){aviso('«'+txt.slice(0,40)+'» no aparece igual en esta fuente');return}
    var v=vars[vi++],pi=0;
    (function pag(){
      if(V!==V0||tk!==HT)return;
      if(pi>=pgs.length)return sig();
      var p=pgs[pi++];
      normPag(p).then(function(o){
        if(o.s.indexOf(v[1])<0)return pag();
        V0.cc[txt]={p:p,v:v};pon(p,o,v);
      });
    })();
  })();
  }
}
document.addEventListener('mouseover',function(e){var cp=e.target.closest&&e.target.closest(CSEL);if(cp&&cp!==HC){HC=cp;concepto(cp.textContent,'h',ctxDe(cp))}});
document.addEventListener('mouseout',function(e){if(HC&&!(e.relatedTarget&&HC.contains(e.relatedTarget))){HC=null;HT++;quitaMarcas('.hs')}});
function zoom(e,el){
  var sc=$('bs'),fig=el.closest('figure'),r=fig.getBoundingClientRect();
  var fx=(e.clientX-r.left)/r.width,fy=(e.clientY-r.top)/r.height;
  sc.style.scrollBehavior='auto';sc.classList.toggle('zoom');
  var r2=fig.getBoundingClientRect();
  sc.scrollLeft+=r2.left+fx*r2.width-e.clientX;sc.scrollTop+=r2.top+fy*r2.height-e.clientY;
  sc.style.scrollBehavior='';
}
$('bs').addEventListener('scroll',function(){if(window._ra)return;window._ra=requestAnimationFrame(function(){window._ra=0;actual()})});
document.addEventListener('click',function(e){
  if(e.target.id==='qm'){cierraQ();return}
  var z=e.target.closest('.bs canvas,.bs img');if(z)return zoom(e,z);
  var cp=e.target.closest('.sbody b,.sbody strong,.sbody .ex,.sbody .m,.sbody .m2');if(cp&&!e.target.closest('button')){document.querySelectorAll('.sbody .sel').forEach(function(x){x.classList.remove('sel')});cp.classList.add('sel');quitaMarcas('.hf');concepto(cp.textContent,'c',ctxDe(cp));return}
  if(e.target.id==='bpv'){verPag((V&&V.cur||1)-1,1);return}
  if(e.target.id==='bnx'){verPag((V&&V.cur||1)+1,1);return}
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
document.addEventListener('change',function(e){if(e.target.id==='bpn'){verPag(+e.target.value||1,1);return}if(e.target.id!=='tsel')return;var v=e.target.value;if(v==='rep'){REP=true;history.replaceState(null,'','#rep');render();window.scrollTo(0,0)}else go(+v,0)});
window.addEventListener('hashchange',function(){lee();render()});
lee();render();
})();
