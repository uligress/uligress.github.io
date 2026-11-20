import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'../..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const load=(p,key)=>{const ctx={window:{}};vm.runInNewContext(read(p),ctx);return ctx.window[key]};
const courses={geria:{name:'Geriatría',key:'GERIA',books:[['n','Notas','notas'],['b','Bairo','bairo'],['a','Andy','andy'],['d','Diapositivas','diapos']]},neumo:{name:'Neumología',key:'NEUMO',books:[['a','Andy','andy'],['i','Infinity','infinity'],['n','Inter','inter'],['c','Caro','caro'],['k','Cecil','cecil']]},reuma:{name:'Reumatología',key:'REUMA',books:[['n','Notas','notas'],['a','Andy','andy'],['c','Cecil','cecil']]}};
for(const [id,c] of Object.entries(courses)){
 const base=id==='reuma'?id:id+'/mapa';
 const bank=load(base+'/data.js',c.key), compact=load(base+'/clase.js',c.key+'_CLASE');
 const full=id==='reuma'?null:load(id+'/clase/data.js','CLASE');
 const meta=id==='neumo'?load(base+'/ruleta-data.js','NM'):{};
 const exams=JSON.parse(read('estudio/datos/'+id+'-examenes.json'));
 const finalMeta=Object.fromEntries(exams.flatMap(e=>e.questions).map(q=>[q.id,q]));
 const topics=bank.temas.map((t,i)=>{
  const n=t.n||i+1;
  const questions=(t.items||[]).map(q=>{
   const m=id==='neumo'?(meta[q.id]||{}):(q.m||{});
   const refs=c.books.map(([key,name,file])=>{const item=m[key];return {key,name,url:`/${id}/fuente/${file}.pdf`,page:item?.[0]||m._p?.[key]||(id==='geria'?(key==='n'?q.p:t.pm?.[key]):null)||1,quotes:item?.[1]||(key==='n'?q.tg:[])||[],exact:!!item||!!(key==='n'&&q.tg?.length)}});
   const mc=Array.isArray(q.o)&&Number.isInteger(q.k)&&q.k>=0&&q.k<q.o.length;
   return {...q,id:q.id||`${id}-t${n}-${i}`,topic:n,kind:mc?'mc':'recall',answer:mc?q.o[q.k]:q.a,explanation:q.e||q.n||'',case:bank.casos?.[q.c]?.v||q.c||'',rep:q.rep||q.x||finalMeta[q.id]?.rep||0,refs};
  });
  let slides=full?.temas?.[n-1]?.slides||[];
  slides=slides.map(s=>({...s,book:(s.book||[]).map(b=>({...b,img:`/${id}/clase/${b.img}`}))}));
  const cards=compact?.[n]||[];
  if(!slides.length)slides=cards.map(s=>({title:s.t,html:`<p>${String(s.x||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')}</p>`,q:s.q||[]}));
  return {n,name:t.titulo||t.name||t.nombre||`Tema ${n}`,final:!!t.fin,questions,slides,cards,top:full?.temas?.[n-1]?.top||[],page:t.p||1};
 });
 for(const t of topics.filter(t=>t.final))exams.push({id:`banco-${t.n}`,name:t.name,questions:t.questions});
 const result={id,name:c.name,books:c.books.map(([key,name,file])=>({key,name,url:`/${id}/fuente/${file}.pdf`})),topics:topics.filter(t=>!t.final),exams};
 fs.writeFileSync(path.join(root,'estudio/datos',id+'.json'),JSON.stringify(result));
 console.log(id,result.topics.length,result.topics.reduce((n,t)=>n+t.questions.length,0),'preguntas',exams.length,'exámenes');
}
