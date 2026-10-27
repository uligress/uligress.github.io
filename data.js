/*
  Tu contenido. Todo se edita aquí; los textos vacíos ('') no se muestran.
  Palabras entre *asteriscos* salen en caligrafía (Great Vibes); usa una por frase.

  Para agregar fotos de un proyecto:
    1. Pon las fotos en photos/<proyecto>/ (por ejemplo photos/amniosim/02.jpg).
    2. En "items", cambia img: null por la ruta.
  Para agregar un proyecto nuevo: copia un bloque completo y cambia number, name y textos.

  teaser: true  → las fotos se ven borrosas y se revelan al pasar el mouse.
  back          → texto del reverso de la tarjeta (se ve al abrirla y voltearla).
*/
window.UNG = {
  site: {
    headline: 'Construyendo simuladores para aprender *medicina*.',  // frase grande del inicio
    subtitle: '',   // frase corta debajo del logo
    about: '',      // texto de la sección "Acerca"
  },
  // Buzón de ideas: envía al Google Form "Buzón de ideas de simuladores · ung" (las respuestas caen en la hoja "Bandeja").
  buzon: {
    // servicio propio (Apps Script): valida, filtra spam, guarda en la Bandeja vía el Form, avisa por correo y confirma
    endpoint: 'https://script.google.com/macros/s/AKfycbzALUeGcXdZ_50fFCLkqjbDK4L75E2HF4yFKmPrNq3tkP1eVVUXT6qboQXsINhKuWzJ/exec',
    action: 'https://docs.google.com/forms/d/e/1FAIpQLScchGZzSPC2K-Sx9YhpnD2bf3m71x_q3ySYR7zHDVH2xDcwaw/formResponse',
    entries: {    // nombre del campo en el sitio → pregunta del formulario
      titulo: 'entry.346673698', tema: 'entry.1464743382', problema: 'entry.388895883', simulador: 'entry.1535504990',
      publico: 'entry.386402910', referencias: 'entry.191798921', nombre: 'entry.80540622', correo: 'entry.413961433',
      telefono: 'entry.397228987', institucion: 'entry.664746345', colaborar: 'entry.1694082772', privacidad: 'entry.430006936',
    },
  },
  // Todo lo disponible (sección del inicio): simuladores del lab y cursos de idiomas.
  catalog: {
    title: 'Todo lo *disponible*',
    intro: 'Simuladores para practicar procedimientos y cursos para ejercer en otro idioma. Todo funciona en el navegador.',
    groups: [
      {
        label: 'Simuladores',
        items: [
          { name: 'Bronco*Sim*', area: 'Neumología', text: 'Árbol bronquial 3D y navegación endoscópica por segmentos. Rotación, flexión y orientación anatómica.', status: 'Beta educativa', img: '/lab/broncosim/cover.svg?v=20261025-ung', link: '/lab/broncosim/' },
          { name: 'Amnio*Sim*', area: 'Medicina materno-fetal', text: 'Amniocentesis guiada por ultrasonido, con la punta de la aguja siempre visible.', status: 'Disponible', img: '/lab/img/amniosim.jpg', link: '/lab/amniosim/' },
          { name: 'Clip*Sim*', area: 'Neurocirugía', text: 'Clipaje microquirúrgico de un aneurisma, visto a través del microscopio.', status: 'Disponible', img: '/lab/img/neurocirugia.jpg', link: '/lab/clipsim/' },
          { name: 'Stent*Sim*', area: 'Endovascular', text: 'Angioplastia y stent ilíaco bajo fluoroscopia simulada.', status: 'Beta', img: '/lab/img/stentsim.jpg', link: '/lab/stentsim/' },
          { name: 'Hernio*Sim*', area: 'Cirugía general', text: 'Hernioplastia inguinal laparoscópica (TAPP) con malla y grapas.', status: 'Disponible', img: '/lab/img/herniosim.jpg', link: '/lab/herniosim/' },
        ],
      },
      {
        label: 'Cursos de idiomas',
        items: [
          { name: 'Medical *English*', area: 'Inglés médico', text: 'Consulta, hospital y artículos: 24 clases de 15 minutos con audio de voces naturales.', status: 'Disponible', link: '/ingles/' },
          { name: 'Medizinisches *Deutsch*', area: 'Alemán médico', text: 'Anamnesis, Klinikalltag y artículos para rotar o trabajar en Alemania: 24 clases.', status: 'Disponible', link: '/aleman/' },
          { name: 'Français *médical*', area: 'Francés médico', text: 'Interrogatorio, hospital y artículos para rotar o trabajar en Francia: 24 clases.', status: 'Disponible', link: '/frances/' },
        ],
      },
    ],
  },
  projects: [
    {
      number: 1,
      name: 'Amnio*Sim*',
      status: 'Disponible',
      link: '/lab/amniosim/',
      kicker: 'Simulador educativo · Medicina materno-fetal',
      description: 'Un simulador web de *amniocentesis guiada por ultrasonido*. Ecografía simulada con sombra acústica, aguja especular y *tenting* de membranas: practicas la punción con la punta siempre visible y recibes retroalimentación de cada error, con su evidencia.',
      facts: [
        ['Tipo', 'Simulador web 3D'],
        ['Contenido', '7 escenarios · 4 modos'],
        ['Retroalimentación', '15 errores con referencias'],
        ['Estado', 'Disponible en el lab · 2026'],
      ],
      tags: ['Ultrasonido', 'Simulación', 'Three.js'],
      teaser: false,
      items: [
        { img: 'photos/amniosim/01.jpg?v=1792641000', caption: 'Aguja espinal y saco', back: 'Aguja frente al saco amniótico. El simulador modela su paso por cada capa hasta el líquido.', date: '' },
        { img: 'photos/amniosim/02.jpg?v=1792641000', caption: 'Bisel de la aguja', back: 'El bisel es el reflector más brillante en la eco; su visibilidad cambia con el ángulo del haz.', date: '' },
        { img: 'photos/amniosim/03.jpg?v=1792641000', caption: 'Técnica en plano', back: 'Aguja y haz en el mismo plano para ver la punta todo el trayecto. Es la métrica principal.', date: '' },
        { img: 'photos/amniosim/04.jpg?v=1792641000', caption: 'Tenting de membranas', back: 'La membrana se deforma antes de perforarse: causa clásica de punción fallida. El simulador la detecta.', date: '' },
        { img: 'photos/amniosim/05.jpg?v=1792641000', caption: 'Sombra acústica', back: 'El hueso fetal bloquea el haz. Leer la sombra ayuda a elegir una ventana segura.', date: '' },
        { img: 'photos/amniosim/06.jpg?v=1792641000', caption: 'Speckle ecográfico', back: 'Textura fija al tejido: se mueve con la sonda como en un ecógrafo real.', date: '' },
        { img: 'photos/amniosim/07.jpg?v=1792641000', caption: 'Partes de la aguja', back: 'Cánula, estilete y conector. Se registran profundidad, ángulo e inserciones.', date: '' },
      ],
    },
    {
      number: 2,
      name: 'Clip*Sim*',
      status: 'Disponible',
      link: '/lab/clipsim/',
      kicker: 'Simulador microquirúrgico · Demo educativa',
      description: 'Clipaje microquirúrgico de un *aneurisma de la unión carótida interna–comunicante posterior* por abordaje pterional transilviano, visto como a través del *microscopio quirúrgico*. Avanzas por las etapas con tus instrumentos mientras un mentor te guía y el monitor reacciona a cada movimiento.',
      facts: [
        ['Tipo', 'Simulador 3D en el navegador'],
        ['Procedimiento', '6 etapas · 10 instrumentos'],
        ['Incluye', 'Signos vitales, sangrado, retracción, mentor e informe final'],
        ['Estado', 'Disponible en el lab · 2026'],
      ],
      tags: ['Neurocirugía', 'Microscopio', 'Three.js'],
      teaser: false,
      items: [
        { img: 'photos/neurocirugia/01.jpg?v=1792641000', caption: 'Corteza cerebral', back: 'En el abordaje transilviano se separan los lóbulos frontal y temporal para llegar a los vasos.', date: '' },
        { img: 'photos/neurocirugia/02.jpg?v=1792641000', caption: 'Domo del aneurisma', back: 'La parte más delgada de la pared y la de mayor riesgo de ruptura.', date: '' },
        { img: 'photos/neurocirugia/03.jpg?v=1792641000', caption: 'Instrumental', back: 'Pinza bipolar, disector y aspirador: tres de los 10 instrumentos del simulador.', date: '' },
        { img: 'photos/neurocirugia/04.jpg?v=1792641000', caption: 'Abordaje pterional', back: 'Craneotomía frontotemporal: el corredor más corto hacia la carótida interna.', date: '' },
        { img: 'photos/neurocirugia/05.jpg?v=1792641000', caption: 'Microscopio quirúrgico', back: 'Aumento y visión estereoscópica. El campo se muestra como a través del microscopio.', date: '' },
        { img: 'photos/neurocirugia/06.jpg?v=1792641000', caption: 'Polígono de Willis', back: 'En rojo, la unión carótida interna–comunicante posterior, donde está el aneurisma simulado.', date: '' },
        { img: 'photos/neurocirugia/07.jpg?v=1792641000', caption: 'Clipaje del cuello', back: 'El clip excluye el aneurisma sin ocluir la arteria. Es el objetivo de las 6 etapas.', date: '' },
      ],
    },
    {
      number: 3,
      name: 'Stent*Sim*',
      status: 'Beta',
      link: '/lab/stentsim/',
      kicker: 'Simulador endovascular · Angioplastia ilíaca',
      description: 'Angioplastia y colocación de *stent en la arteria ilíaca* bajo fluoroscopia. Navegas la guía por la bifurcación, mides la lesión, eliges el tamaño y liberas un *stent de nitinol*; el simulador registra fluoroscopia, contraste y estenosis residual.',
      facts: [
        ['Tipo', 'Simulador web con fluoroscopia simulada'],
        ['Contenido', '3 escenarios · 18 errores'],
        ['Mide', 'Fluoroscopia, contraste y estenosis residual'],
        ['Estado', 'Beta en el lab · 2026'],
      ],
      tags: ['Endovascular', 'Nitinol', 'Fluoroscopia'],
      teaser: false,
      items: [
        { img: 'photos/stentsim/01.jpg?v=1792641000', caption: 'Stent de nitinol', back: 'Se autoexpande a temperatura corporal; su fuerza radial abre la placa sin pasar del diámetro nominal.', date: '' },
        { img: 'photos/stentsim/02.jpg?v=1792641000', caption: 'Bifurcación aortoilíaca', back: 'Lesión en la ilíaca y el stent que la cubre: el caso base del simulador.', date: '' },
        { img: 'photos/stentsim/03.jpg?v=1792641000', caption: 'Guía de punta angulada', back: 'Girar la punta decide en qué rama entra. Es la base de la navegación.', date: '' },
        { img: 'photos/stentsim/04.jpg?v=1792641000', caption: 'Superelasticidad', back: 'El nitinol carga y descarga por mesetas distintas: por eso empuja suave y constante.', date: '' },
        { img: 'photos/stentsim/05.jpg?v=1792641000', caption: 'Arco en C', back: 'La angulación correcta evita el acortamiento aparente al medir la lesión.', date: '' },
        { img: 'photos/stentsim/06.jpg?v=1792641000', caption: 'Dimensionamiento', back: 'Diámetro de referencia y margen por lado: de ahí sale el tamaño del stent.', date: '' },
        { img: 'photos/stentsim/07.jpg?v=1792641000', caption: 'Balón de angioplastia', back: 'Predilata lesiones cerradas y posdilata el stent, con presión controlada.', date: '' },
      ],
    },
  ],
};
