/*
  Tu contenido. Todo se edita aquí; los textos vacíos ('') no se muestran.
  Palabras entre *asteriscos* salen resaltadas en letra cursiva serif.

  Para agregar fotos de un proyecto:
    1. Pon las fotos en photos/<proyecto>/ (por ejemplo photos/amniosim/02.jpg).
    2. En "items", cambia img: null por la ruta.
  Para agregar un proyecto nuevo: copia un bloque completo y cambia number, name y textos.

  teaser: true  → las fotos se ven borrosas con grano y se revelan al pasar el mouse.
  back          → texto del reverso de la polaroid (se ve al abrirla).
*/
window.UNG = {
  site: {
    headline: 'Construyendo *simuladores* para aprender *medicina*.',  // frase grande del inicio
    subtitle: '',   // frase corta debajo del logo
    about: '',      // texto de la sección "Acerca"
  },
  projects: [
    {
      number: 1,
      name: 'Amnio*Sim*',
      status: 'Teaser',
      kicker: 'Simulador educativo · Medicina materno-fetal',
      description: 'Un simulador web de *amniocentesis guiada por ultrasonido*. Ecografía simulada con sombra acústica, aguja especular y *tenting* de membranas: practicas la punción con la punta siempre visible y recibes retroalimentación de cada error, con su evidencia.',
      facts: [
        ['Tipo', 'Simulador web 3D'],
        ['Contenido', '7 escenarios · 4 modos'],
        ['Retroalimentación', '15 errores con referencias'],
        ['Estado', 'MVP funcional · 2026'],
      ],
      tags: ['Ultrasonido', 'Simulación', 'Three.js'],
      teaser: true,
      items: [
        { img: 'photos/amniosim/01.jpg', caption: '', back: '', date: '' },
        { img: 'photos/amniosim/02.jpg', caption: '', back: '', date: '' },
        { img: 'photos/amniosim/03.jpg', caption: '', back: '', date: '' },
        { img: 'photos/amniosim/04.jpg', caption: '', back: '', date: '' },
        { img: 'photos/amniosim/05.jpg', caption: '', back: '', date: '' },
        { img: 'photos/amniosim/06.jpg', caption: '', back: '', date: '' },
        { img: 'photos/amniosim/07.jpg', caption: '', back: '', date: '' },
      ],
    },
    {
      number: 2,
      name: 'Neuro*cirugía*',
      status: 'En desarrollo',
      kicker: 'Simulador microquirúrgico · Demo educativa',
      description: 'Clipaje microquirúrgico de un *aneurisma de la unión carótida interna–comunicante posterior* por abordaje pterional transilviano, visto como a través del *microscopio quirúrgico*. Avanzas por las etapas con tus instrumentos mientras un mentor te guía y el monitor reacciona a cada movimiento.',
      facts: [
        ['Tipo', 'Simulador 3D en el navegador'],
        ['Procedimiento', '6 etapas · 10 instrumentos'],
        ['Incluye', 'Signos vitales, sangrado, mentor y resumen final'],
        ['Estado', 'En desarrollo'],
      ],
      tags: ['Neurocirugía', 'Microscopio', 'Three.js'],
      teaser: true,
      items: [
        { img: 'photos/neurocirugia/01.jpg', caption: '', back: '', date: '' },
        { img: 'photos/neurocirugia/02.jpg', caption: '', back: '', date: '' },
        { img: 'photos/neurocirugia/03.jpg', caption: '', back: '', date: '' },
        { img: 'photos/neurocirugia/04.jpg', caption: '', back: '', date: '' },
        { img: 'photos/neurocirugia/05.jpg', caption: '', back: '', date: '' },
        { img: 'photos/neurocirugia/06.jpg', caption: '', back: '', date: '' },
        { img: 'photos/neurocirugia/07.jpg', caption: '', back: '', date: '' },
      ],
    },
  ],
};
