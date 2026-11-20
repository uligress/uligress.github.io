"""Indexa coincidencias literales para el lector; no valida afirmaciones clínicas.
Ejecutar después de build.mjs con un Python que tenga PyMuPDF instalado.
"""
import collections, difflib, html, json, math, re, unicodedata
from pathlib import Path
import pymupdf
ROOT = Path(__file__).resolve().parents[2]
STOP = set('de la el los las un una unos unas que del en con para por al se es son como su sus y o a no lo si más entre sobre puede cual cuál siguiente siguientes paciente caso respuesta pregunta enfermedad tema'.split())
def norm(s):
    return ''.join(c for c in unicodedata.normalize('NFD',s.lower()) if unicodedata.category(c)!='Mn')
def tokens(s): return re.findall(r'[a-z0-9]+',norm(s))
def plain(s):
    s=re.sub(r'<svg\b.*?</svg>',' ',s,flags=re.S)
    return html.unescape(re.sub('<[^>]+>',' ',s)).replace('**','')
def compact(s):return ''.join(tokens(s))
def passages(text, query):
    # Solo secuencias realmente presentes en la página, sin reformular el libro.
    words=list(re.finditer(r'[\w]+',text,flags=re.UNICODE)); ts=[norm(m.group()) for m in words]
    qs=tokens(query); blocks=difflib.SequenceMatcher(None,qs,ts,autojunk=False).get_matching_blocks()
    out=[]
    for b in sorted(blocks,key=lambda x:-x.size):
        if b.size<3:continue
        part=ts[b.b:b.b+b.size]
        if len(set(part)-STOP)<2:continue
        quote=text[words[b.b].start():words[b.b+b.size-1].end()]
        if len(compact(quote))<16:continue
        out.append(quote)
        if len(out)==6:break
    return out
class Book:
    def __init__(self,b):
        self.meta=b
        with pymupdf.open(ROOT/b['url'].lstrip('/')) as pdf:self.pages=[p.get_text(sort=True) for p in pdf]
        self.sets=[set(tokens(p))-STOP for p in self.pages]
        self.df=collections.Counter(w for s in self.sets for w in s)
    def ref(self, query, old=None):
        given=bool(old and old.get('exact'))
        page=max(1,min(len(self.pages),int((old or {}).get('page') or 1)))
        if not given:
            qw=collections.Counter(w for w in tokens(query) if len(w)>2 and w not in STOP)
            scores=[sum((1+math.log((len(self.pages)+1)/(self.df[w]+1)))*min(2,n) for w,n in qw.items() if w in ps) for ps in self.sets]
            candidates=sorted(range(len(scores)),key=lambda i:-scores[i])[:8]
            def rank(i):
                quotes=passages(self.pages[i],query)
                return (sum(min(len(compact(q)),90) for q in quotes),scores[i])
            chosen=max(candidates,key=rank)
            page=chosen+1
        text=self.pages[page-1]; pn=compact(text)
        quoted=[q for q in (old or {}).get('quotes',[]) if compact(q) and compact(q) in pn]
        quoted=list(dict.fromkeys(quoted+passages(text,query)))[:8]
        return {**self.meta,'page':page,'quotes':quoted,'exact':given,'basis':'linked' if given else 'text' if quoted else 'context'}
for course in ['geria','neumo','reuma']:
    p=ROOT/'estudio/datos'/f'{course}.json';data=json.loads(p.read_text());books=[Book(b) for b in data['books']]; byurl={b.meta['url']:b for b in books}
    def refs(query,old=None):
        old=old or [];result=[]
        for b in books:
            prior=next((r for r in old if r['url']==b.meta['url']),None)
            result.append(b.ref(query,prior))
        return sorted(result,key=lambda r:(not(r['exact'] and r['quotes']),not bool(r['quotes']),not r['exact']))
    qmap={}
    for t in data['topics']:
        for q in t['questions']:
            query=' '.join([q.get('qd') or q['q'],q.get('answer',''),q.get('explanation','')])
            q['refs']=refs(query,q.get('refs'));qmap[q['id']]=q;qmap[compact(q['q'])]=q
        for s in t['slides']:
            old=[]
            for f in s.get('fuentes',[]):
                url='/'+course+'/fuente/'+f['url'].split('/')[-1]
                if url in byurl:old.append({'url':url,'page':f.get('page',1),'quotes':f.get('tg',[]),'exact':True})
            for b in s.get('book',[]):
                book=next((x for x in books if norm(x.meta['name'])==norm(b.get('fuente','Cecil'))),None)
                if book:old.append({'url':book.meta['url'],'page':b['k'],'quotes':[],'exact':True})
            query=s['title']+' '+plain(s.get('html',''))
            s['refs']=refs(query,old)
    for e in data['exams']:
        for q in e['questions']:
            prior=qmap.get(q.get('id')) or qmap.get(compact(q['q']))
            if prior:q['refs']=prior['refs'];q['topic']=prior['topic']
            else:
                answer=q.get('answer') or (q['o'][q['k']] if q.get('o') and isinstance(q.get('k'),int) else q.get('a',''))
                q['refs']=refs(' '.join([q['q'],answer,q.get('e','')]),q.get('refs'))
    p.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
    qs=[q for t in data['topics'] for q in t['questions']];slides=[s for t in data['topics'] for s in t['slides']]
    print(course,'preguntas con coincidencias',sum(any(r['quotes'] for r in q['refs']) for q in qs),'/',len(qs),'diapos',sum(any(r['quotes'] for r in s['refs']) for s in slides),'/',len(slides),flush=True)
