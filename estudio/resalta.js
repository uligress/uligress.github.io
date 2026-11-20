/* Concepto de la diapositiva → fragmento del libro (visor PDF). Hover: naranja parpadeante. Clic: naranja fijo + salta a la página. */
(function(){
'use strict';
var CSEL='.dks u.sub,.dks b,.dks strong,.slidecontent .m,.slidecontent .ex';
var HT=0,HC=null,CACHE=new WeakMap(),CC={};
function B(){return window.__book&&window.__book.get()}
function pn(x){return window.__book.norm(x)}
function note(t){var n=document.getElementById('reader-status');if(!n)return;clearTimeout(note.t);var old=note.old||(note.old=n.textContent);n.textContent=t;note.t=setTimeout(function(){n.textContent=note.old;note.old=null},3200)}
var _mc=null;
function medida(it,tc,txt){
  if(!_mc)_mc=document.createElement('canvas').getContext('2d');
  var st=tc.styles&&tc.styles[it.fontName],fam=(st&&st.fontFamily)||'serif';
  _mc.font='100px '+(/sans-serif/.test(fam)&&!/serif,/.test(fam)?'Helvetica, sans-serif':'Georgia, "Times New Roman", serif');
  return _mc.measureText(txt).width;
}
function tramo(it,tc,a,b){var t=it.str,tot=medida(it,tc,t)||1,x0=medida(it,tc,t.slice(0,a))/tot,x1=medida(it,tc,t.slice(0,b+1))/tot;return [x0,x1-x0]}
function fusiona(sheet,cls,bx,vp){
  if(!bx.length)return null;
  bx.sort(function(a,b){return a.y-b.y||a.x-b.x});
  var L=[];bx.forEach(function(b){var l=L[L.length-1];
    if(l&&Math.abs(l.y-b.y)<b.h*.5&&b.x-(l.x+l.w)<b.h*1.6){var r=Math.max(l.x+l.w,b.x+b.w);l.x=Math.min(l.x,b.x);l.w=r-l.x;l.h=Math.max(l.h,b.h)}
    else{var m=null;for(var i=L.length-1;i>=0&&i>L.length-6;i--){var o=L[i];if(Math.abs(o.y-b.y)<b.h*.5&&b.x-(o.x+o.w)<b.h*1.6&&b.x>=o.x-b.h){m=o;break}}
      if(m){var r2=Math.max(m.x+m.w,b.x+b.w);m.x=Math.min(m.x,b.x);m.w=r2-m.x;m.h=Math.max(m.h,b.h)}else L.push({x:b.x,y:b.y,w:b.w,h:b.h})}});
  var ex=[];L.forEach(function(a){var best=null;L.forEach(function(b){if(b===a)return;var dy=b.y-a.y;
    if(dy>a.h*.4&&dy<a.h*2&&b.x<a.x+a.w&&b.x+b.w>a.x&&(!best||dy<best.y-a.y))best=b});
    var g=best?best.y-(a.y+a.h):0;if(best&&g>0)ex.push([a,best,g/2])});
  ex.forEach(function(e){e[0].h+=e[2];e[1].y-=e[2];e[1].h+=e[2]});
  var primero=null;
  L.forEach(function(a){var d=document.createElement('div');d.className=cls;
    d.style.cssText='left:'+(100*a.x/vp.width)+'%;top:'+(100*a.y/vp.height)+'%;width:'+(100*a.w/vp.width)+'%;height:'+(100*a.h/vp.height)+'%';
    sheet.appendChild(d);var f=a.y/vp.height;if(primero===null||f<primero)primero=f});
  return primero;
}
function cajas(o,lib,vp,pick){
  var U=lib.Util,tc=o.tc,seg={},bx=[];
  pick(seg);
  Object.keys(seg).forEach(function(k){
    var it=tc.items[k],tr=U.transform(vp.transform,it.transform),alto=Math.hypot(tr[2],tr[3]),ancho=it.width*vp.scale;
    var tq=tramo(it,tc,seg[k][0],seg[k][1]);
    bx.push({x:tr[4]+ancho*tq[0],w:ancho*tq[1],y:tr[5]-alto*.82,h:alto*1.04});
  });
  return bx;
}
function marcaRango(sheet,o,lib,a,b,cls){
  var vp=o.pg.getViewport({scale:1});
  var bx=cajas(o,lib,vp,function(seg){for(var i=a;i<=b&&i<o.map.length;i++){var k=o.map[i][0],c=o.map[i][1],s=seg[k]||(seg[k]=[c,c]);if(c<s[0])s[0]=c;if(c>s[1])s[1]=c}});
  return fusiona(sheet,cls,bx,vp);
}
function marca(sheet,o,lib,tgs,cls){
  var vp=o.pg.getViewport({scale:1}),bx=[];
  tgs.forEach(function(t){var tn=pn(t),a=tn?o.s.indexOf(tn):-1;if(a<0)return;
    bx=bx.concat(cajas(o,lib,vp,function(seg){for(var i=a;i<a+tn.length;i++){var k=o.map[i][0],c=o.map[i][1],s=seg[k]||(seg[k]=[c,c]);if(c<s[0])s[0]=c;if(c>s[1])s[1]=c}}))});
  return fusiona(sheet,cls,bx,vp);
}
function normPag(doc,p){
  var m=CACHE.get(doc);if(!m){m=CACHE.set(doc,{}),m=CACHE.get(doc)}
  if(m[p])return m[p];
  return m[p]=doc.getPage(p).then(function(pg){return pg.getTextContent().then(function(tc){
    var s='',w=[],se=[],map=[];
    tc.items.forEach(function(it,k){var cur='',st=0,pv='';function fl(){if(cur){w.push({t:cur,a:st,b:s.length-1});pv=cur;cur=''}}
      for(var c=0;c<it.str.length;c++){var ch=it.str[c];if(/\s/.test(ch)){fl();continue}var n=pn(ch);
        if(!n){if((ch==='.'||ch==='?'||ch==='!')&&(c+1>=it.str.length||/\s/.test(it.str[c+1]))){var pw=cur||pv;if(s.length&&pw.length>=3&&!/^(cap|fig|tab|pag|etc|aprox|dr|dra)$/.test(pw))se.push(s.length-1)}continue}
        if(!cur)st=s.length;cur+=n;s+=n;for(var j=0;j<n.length;j++)map.push([k,c])}fl()});
    return {pg:pg,tc:tc,s:s,w:w,se:se,map:map};
  })});
}
function region(line,s,conc){
  var cs={},cw=(conc||line).replace(/\s+/g,' ').trim().split(' ');
  for(var n=1;n<=3;n++)for(var i=0;i+n<=cw.length;i++){var t=pn(cw.slice(i,i+n).join(' '));if(t.length>=(n===1?10:n===2?10:9))cs[t]=1}
  var w=line.replace(/\s+/g,' ').trim().split(' '),an=[],seen={};
  for(var n2=2;n2<=3;n2++)for(var i2=0;i2+n2<=w.length;i2++){
    var t2=pn(w.slice(i2,i2+n2).join(' '));if(t2.length<(n2===2?10:9)||seen[t2])continue;seen[t2]=1;
    var p=-1,c=0;while(c++<12&&(p=s.indexOf(t2,p+1))>=0)an.push({a:p,b:p+t2.length-1,t:t2,w:t2.length,c:!!cs[t2]})}
  if(!an.length)return null;
  an.sort(function(x,y){return x.a-y.a});
  var max=Math.max(pn(line).length*1.6,160),best=null;
  for(var i3=0;i3<an.length;i3++){
    var sc=0,seenT={},b=an[i3].b,hc=false;
    for(var j=i3;j<an.length&&an[j].a-an[i3].a<=max;j++){if(an[j].c)hc=true;if(!seenT[an[j].t]){seenT[an[j].t]=1;sc+=an[j].w}if(an[j].b>b)b=an[j].b}
    if(hc&&(!best||sc>best.sc))best={a:an[i3].a,b:b,sc:sc}
  }
  return best&&best.sc>=16?best:null;
}
var STOP={ella:1,esta:1,este:1,para:1,como:1,pero:1,donde:1,cuando:1,solo:1,sobre:1,entre:1,desde:1,hasta:1,tiene:1,puede:1,cada:1,esto:1,estos:1,otro:1,otra:1,mas:1,muy:1,tambien:1};
function expande(o,a,b){var se=o.se||[],a2=0,b2=o.s.length-1,i;
  for(i=0;i<se.length;i++){if(se[i]<a-1)a2=se[i]+1;else break}
  for(i=0;i<se.length;i++){if(se[i]>=b){b2=se[i];break}}
  return {a:a2,b:Math.min(b2,b+500)}}
function kwRegion(line,o){
  var q={};line.split(/\s+/).forEach(function(x){var n=pn(x);if(n.length>=4&&!STOP[n])q[n.slice(0,5)]=1});
  var qs=Object.keys(q);if(qs.length<2||!o.w)return null;var need=Math.max(2,Math.ceil(qs.length*.6)),best=null,w=o.w;
  for(var i=0;i<w.length;i++){if(!q[w[i].t.slice(0,5)])continue;var seen={},cnt=0,last=i;
    for(var j=i;j<w.length&&j<i+30;j++){var k=w[j].t.slice(0,5);if(q[k]&&!seen[k]){seen[k]=1;cnt++;last=j}}
    if(cnt>=need&&(!best||cnt>best.sc||(cnt===best.sc&&last-i<best.len)))best={a:w[i].a,b:w[last].b,sc:cnt,len:last-i}}
  return best;
}
function variantes(txt){
  var w=txt.replace(/\s+/g,' ').trim().split(' '),vars=[];
  for(var L=w.length;L>=1;L--)for(var i=0;i+L<=w.length;i++){var t=w.slice(i,i+L).join(' '),n=pn(t);if(L>=2&&n.length>=14||L===1&&n.length>=9)vars.push([t,n,L])}
  return vars;
}
function ctxDe(el){var l=el.closest('li,.op,.ex,.qt')||el.closest('.card,.cd,p');var t=(l||el).textContent;return t.length>300?el.textContent:t}
function quita(c){var b=B();if(b&&b.pg)b.pg.sheet.querySelectorAll(c).forEach(function(e){e.remove()})}

/* busca el fragmento en las páginas candidatas del libro abierto; devuelve {p,o,rg|v} */
async function localiza(txt,line,esExamen,tk,ref,doc,cur){
  var n=doc.numPages,pgs=[];
  function add(q){if(q>=1&&q<=n&&pgs.indexOf(q)<0)pgs.push(q)}
  if(cur)add(cur);(ref.pages||[ref.page||1]).forEach(function(p){add(p);add(p+1);add(p-1)});
  var key=ref.url+'|'+line;if(key in CC)return CC[key];
  var L=await Promise.all(pgs.map(function(p){return normPag(doc,p).then(function(o){return {p:p,o:o,r:region(line,o.s,esExamen?line:txt)}})}));
  if(tk!==HT)return null;
  var best=null;L.forEach(function(x){if(x.r&&(!best||x.r.sc>best.r.sc))best=x});
  if(!best&&esExamen)L.forEach(function(x){var r=kwRegion(txt,x.o);if(r&&(!best||r.sc>best.r.sc))best={p:x.p,o:x.o,r:r}});
  if(best){return CC[key]={p:best.p,rg:best.r}}
  // páginas lejanas (±2…20 de la principal)
  var c0=ref.page||1,lej=[];for(var d=2;d<=20;d++){add2(c0+d);add2(c0-d)}
  function add2(q){if(q>=1&&q<=n&&pgs.indexOf(q)<0&&lej.indexOf(q)<0)lej.push(q)}
  for(var i=0;i<lej.length;i++){
    if(tk!==HT)return null;
    var o=await normPag(doc,lej[i]),r=region(line,o.s,esExamen?line:txt);
    if(r&&r.sc>=16)return CC[key]={p:lej[i],rg:r};
  }
  // frase literal corta
  var vars=variantes(txt);
  for(var vi=0;vi<vars.length;vi++){
    for(var pi=0;pi<pgs.length;pi++){
      if(tk!==HT)return null;
      var o2=await normPag(doc,pgs[pi]);
      if(o2.s.indexOf(vars[vi][1])>=0)return CC[key]={p:pgs[pi],v:vars[vi]};
    }
  }
  return CC[key]=null;
}
async function concepto(txt,modo,ctx,esExamen,el){
  var b=B();if(pn(txt).length<3)return;
  var tk=++HT;
  for(var w=0;(!b||!b.pg)&&w<40;w++){await new Promise(function(r){setTimeout(r,200)});if(tk!==HT)return;b=B()}
  if(!b||!b.pg)return;
  var cls=modo==='c'?'hf':'hs',doc=b.pg.doc,line=ctx||txt;
  var orden=[b.state.index];b.refs.forEach(function(r,i){if(orden.indexOf(i)<0)orden.push(i)});
  var loc=el&&el.getAttribute&&el.getAttribute('data-loc'),lk=null,li=-1;
  if(loc){lk=loc.split(':');b.refs.forEach(function(r,i){if(r.key===lk[0])li=i});if(li>=0)orden=[li].concat(orden.filter(function(i){return i!==li}))}
  var hit=null,hi=-1,fr0=el&&el.getAttribute&&el.getAttribute('data-fr');
  if(lk&&li>=0&&fr0){try{
    var dd=li===b.state.index?doc:await window.__book.doc(b.refs[li]);if(tk!==HT)return;
    var oo=await normPag(dd,+lk[1]);if(tk!==HT)return;
    if(oo.s.indexOf(pn(fr0))>=0){hit={p:+lk[1],v:[fr0,pn(fr0)],doc:dd};hi=li}
    else{var vv=variantes(fr0);for(var q=0;q<vv.length;q++)if(oo.s.indexOf(vv[q][1])>=0){hit={p:+lk[1],v:vv[q],doc:dd};hi=li;break}}
  }catch(e){}}
  for(var oi=0;oi<orden.length&&!hit;oi++){
    var i=orden[oi],ref=b.refs[i],d=i===b.state.index?doc:null;
    if(i===li)ref=Object.assign({},ref,{page:+lk[1],pages:[+lk[1]]});
    try{if(!d)d=await window.__book.doc(ref)}catch(e){continue}
    if(tk!==HT)return;
    hit=await localiza(txt,line,esExamen,tk,ref,d,i===b.state.index?b.pg.number:0);
    if(tk!==HT)return;
    if(hit){hi=i;hit.doc=d}
  }
  var b2=B();if(!b2||!b2.pg||b2.pg.doc!==doc)return;
  if(!hit){note('«'+txt.slice(0,40)+'» no aparece igual en estas fuentes');return}
  var otro=hi!==b2.state.index;
  if(otro||hit.p!==b2.pg.number){
    if(modo!=='c'){note('Está en '+(otro?b2.refs[hi].name+' · ':'')+'pág. '+hit.p+' · haz clic para ir');return}
    if(otro)window.__book.select(hi);
    b2.state.page=hit.p;await window.__book.draw();
    if(tk!==HT)return;b2=B();if(!b2||!b2.pg)return;
  }
  var o=await normPag(b2.pg.doc,hit.p);if(tk!==HT)return;
  quita('.hs');if(modo==='c')quita('.hf');
  var sh=b2.pg.sheet,lib=b2.pg.lib,fr;
  if(hit.rg){var e=expande(o,hit.rg.a,hit.rg.b);fr=marcaRango(sh,o,lib,e.a,e.b,cls)}else fr=marca(sh,o,lib,[hit.v[0]],cls);
  if(fr===null||modo!=='c')return;
  var vw=b2.pg.viewer;vw.scrollTop=Math.max(0,fr*sh.offsetHeight-vw.clientHeight/3);
}
document.addEventListener('mouseover',function(e){var cp=e.target.closest&&e.target.closest(CSEL);if(cp&&cp!==HC){HC=cp;concepto(cp.textContent,'h',ctxDe(cp),cp.matches('u.sub,.ex'),cp)}});
document.addEventListener('mouseout',function(e){if(HC&&!(e.relatedTarget&&HC.contains(e.relatedTarget))){HC=null;HT++;quita('.hs')}});
document.addEventListener('click',function(e){var cp=e.target.closest&&e.target.closest(CSEL);if(!cp)return;
  document.querySelectorAll('.slidecontent .sel').forEach(function(x){x.classList.remove('sel')});cp.classList.add('sel');
  quita('.hf');concepto(cp.textContent,'c',ctxDe(cp),cp.matches('u.sub,.ex'),cp)});
})();
