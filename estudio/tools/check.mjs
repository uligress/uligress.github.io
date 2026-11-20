import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'../..');const load=(p,key)=>{const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,p),'utf8'),c);return c.window[key]};
for(const [id,key]of [['geria','GERIA'],['neumo','NEUMO'],['reuma','REUMA']]){
 const old=load((id==='reuma'?id:id+'/mapa')+'/data.js',key);const data=JSON.parse(fs.readFileSync(path.join(root,'estudio/datos',id+'.json')));const questions=[...data.topics.flatMap(t=>t.questions),...data.exams.filter(e=>e.id.startsWith('banco-')).flatMap(e=>e.questions)];
 assert.equal(questions.length,old.temas.flatMap(t=>t.items).length,'Todas las preguntas del banco deben sobrevivir');
 for(const t of old.temas)for(const q of t.items){const normalized=questions.find(x=>x.id===q.id);assert.ok(normalized,`Falta ${q.id}`);assert.equal(normalized.q,q.q);assert.deepEqual(normalized.o===undefined?undefined:JSON.parse(JSON.stringify(normalized.o)),q.o===undefined?undefined:JSON.parse(JSON.stringify(q.o)))}
 for(const t of data.topics){assert.ok(t.slides.length);for(const q of t.questions){assert.ok(q.answer);assert.ok(q.refs.length);assert.equal(q.topic,t.n)}}
 const sourceIds=new Set(questions.map(q=>q.id));assert.equal(sourceIds.size,questions.length,'IDs únicos dentro del banco');
 for(const e of data.exams)for(const q of e.questions){if(q.o){assert.ok(Number.isInteger(q.k));assert.ok(q.k>=0&&q.k<q.o.length)}}
 for(const entry of [...data.topics.flatMap(t=>[...t.slides,...t.questions]),...data.exams.flatMap(e=>e.questions)]){assert.ok(entry.refs?.length,'Cada diapositiva o pregunta necesita libro en paralelo');for(const ref of entry.refs){assert.ok(data.books.some(b=>b.url===ref.url));assert.ok(Number.isInteger(ref.page)&&ref.page>0);assert.ok(Array.isArray(ref.quotes));assert.ok(['linked','text','context'].includes(ref.basis));}}
 for(const b of data.books){assert.ok(fs.statSync(path.join(root,b.url)).size>1000,`Falta fuente ${b.url}`)}
 console.log(`OK ${id}: ${data.topics.length} temas, ${questions.length} preguntas preservadas, ${data.exams.length} exámenes, ${data.books.length} fuentes`);
}
