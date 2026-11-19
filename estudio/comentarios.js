(function(){
  var FORM='https://docs.google.com/forms/d/e/1FAIpQLScchGZzSPC2K-Sx9YhpnD2bf3m71x_q3ySYR7zHDVH2xDcwaw/formResponse';
  var EN={titulo:'entry.346673698',problema:'entry.388895883',referencias:'entry.191798921',nombre:'entry.80540622',tema:'entry.1464743382'};
  var hub=document.querySelector('header.shell-top'),top=document.querySelector('header.top'),emb=document.documentElement.classList.contains('emb');
  if(!hub&&(!top||emb))return;
  var b=document.createElement('button');b.className=hub?'mode fbtn':'ghost fbtn';b.type='button';b.innerHTML='<span class="fq" aria-hidden="true">?</span> Solicitud de funciones o errores';
  if(hub){var as=hub.querySelectorAll('a.mode');hub.insertBefore(b,as[as.length-1]||null)}else top.insertBefore(b,document.getElementById('cnt')||null);

  var st=document.createElement('style');st.textContent=".fbtn{margin-left:auto;font-family:'Geist Mono',ui-monospace,monospace;font-size:12px;padding:7px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.14);color:#fff;background:transparent;cursor:pointer}\n#fm{position:fixed;inset:0;z-index:200;background:rgba(5,8,12,.72);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:grid;place-items:center;padding:20px}\n#fm[hidden]{display:none}\n#fm .mp{background:#0b0f14;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:20px;color:#fff;font-family:Geist,system-ui,sans-serif;max-width:460px;width:100%;display:flex;flex-direction:column;gap:12px}\n#fm .mh{display:flex;justify-content:space-between;align-items:center}\n#fm .mono,.fmsg{font-family:'Geist Mono',ui-monospace,monospace;font-size:12px}\n#fm label{display:flex;flex-direction:column;gap:6px;font-size:13px;color:#aaa9ad}\n#fm input,#fm textarea{background:transparent;border:1px solid rgba(255,255,255,.14);border-radius:12px;padding:10px 12px;color:#fff;font:inherit;font-size:15px}\n#fm button{cursor:pointer;color:#fff;border:1px solid rgba(255,255,255,.14);border-radius:999px;background:transparent;padding:8px 16px;font:inherit;font-size:13px}\n#fm .fsend{background:#fff;color:#05080c;align-self:flex-start}\n.fq{display:inline-grid;place-items:center;width:18px;height:18px;border:1px solid currentColor;border-radius:50%;font-size:11px;line-height:1;margin-right:6px}\n.fmsg{color:#aaa9ad;min-height:16px}.fmsg.ok{color:#7fe3a0}.fmsg.err{color:#ff8a3d}";document.head.appendChild(st);
  var m=document.createElement('div');m.className='modal';m.id='fm';m.hidden=true;
  m.innerHTML='<form class="mp fform" novalidate><div class="mh"><span class="mono">? Solicitud de funciones o errores</span><button type="button" class="ghost" id="fx">Cerrar</button></div>'+
   '<label>Tu nombre *<input name="nombre" autocomplete="name" maxlength="80"></label>'+
   '<label>¿Quién te recomendó esta página? *<input name="rec" maxlength="80"></label>'+
   '<label>¿Qué función quieres o qué error encontraste? *<textarea name="cambio" rows="5" maxlength="1500"></textarea></label>'+
   '<input name="sitio" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px">'+
   '<div class="fmsg mono" id="fmsg" role="status"></div><button class="ghost fsend" type="submit">Enviar</button></form>';
  document.body.appendChild(m);
  var t0=Date.now();
  function abre(){m.hidden=false;var i=m.querySelector('input');if(i)i.focus()}
  function cierra(){m.hidden=true}
  b.addEventListener('click',abre);
  m.addEventListener('click',function(e){if(e.target===m||e.target.id==='fx')cierra()});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden)cierra()});
  var f=m.querySelector('form'),msg=m.querySelector('#fmsg');
  f.addEventListener('submit',function(e){
    e.preventDefault();var v=function(n){return f.elements[n].value.trim()};
    if(!v('nombre')||!v('rec')||!v('cambio')){msg.textContent='Llena los tres campos.';msg.className='fmsg mono err';return}
    if(v('sitio')||Date.now()-t0<3000){msg.textContent='Enviado. ¡Gracias!';return}
    var mat=(window.MATERIA&&(window.MATERIA.nombre||window.MATERIA.nom))||document.title;
    var body=new URLSearchParams();
    body.append(EN.titulo,'Solicitud/error · clase '+mat);body.append(EN.nombre,v('nombre'));body.append(EN.referencias,'Recomendó: '+v('rec'));body.append(EN.problema,v('cambio'));body.append(EN.tema,'Clase · '+location.pathname+location.hash);
    var s=f.querySelector('.fsend');s.disabled=true;msg.textContent='Enviando…';msg.className='fmsg mono';
    fetch(FORM,{method:'POST',mode:'no-cors',body:body}).then(function(){
      msg.textContent='¡Gracias! Tu comentario fue enviado.';msg.className='fmsg mono ok';f.reset();t0=Date.now();setTimeout(cierra,1800);
    },function(){msg.textContent='No se pudo enviar. Revisa tu conexión.';msg.className='fmsg mono err'}).then(function(){s.disabled=false});
  });
})();
