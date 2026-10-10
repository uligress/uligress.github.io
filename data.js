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
      teaser: false,
      items: [
        { img: 'photos/amniosim/01.jpg?v=1791629793', caption: 'La aguja y el saco', back: 'Todo empieza con una aguja y un bolsillo de líquido.', date: '' },
        { img: 'photos/amniosim/02.jpg?v=1791629793', caption: 'El bisel', back: 'La punta brilla distinto según su ángulo.', date: '' },
        { img: 'photos/amniosim/03.jpg?v=1791629793', caption: 'El sector', back: 'Aguja y haz, en el mismo plano.', date: '' },
        { img: 'photos/amniosim/04.jpg?v=1791629793', caption: 'La membrana', back: 'A veces se resiste antes de ceder.', date: '' },
        { img: 'photos/amniosim/05.jpg?v=1791629793', caption: 'La sombra', back: 'Lo que bloquea el sonido deja sombra.', date: '' },
        { img: 'photos/amniosim/06.jpg?v=1791629793', caption: 'El eco', back: 'Ruido que se mueve con el tejido.', date: '' },
        { img: 'photos/amniosim/07.jpg?v=1791629793', caption: 'Pieza por pieza', back: 'Cánula, estilete y conector.', date: '' },
      ],
    },
    {
      number: 2,
      name: 'Clip*Sim*',
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
      teaser: false,
      items: [
        { img: 'photos/neurocirugia/01.jpg?v=1791629793', caption: 'El cerebro', back: 'Pliegues donde se esconden los vasos.', date: '' },
        { img: 'photos/neurocirugia/02.jpg?v=1791629793', caption: 'El domo', back: 'Una pared delgada que no perdona.', date: '' },
        { img: 'photos/neurocirugia/03.jpg?v=1791629793', caption: 'El instrumental', back: 'Pinza, disector y aspirador.', date: '' },
        { img: 'photos/neurocirugia/04.jpg?v=1791629793', caption: 'El abordaje', back: 'Una ventana pterional.', date: '' },
        { img: 'photos/neurocirugia/05.jpg?v=1791629793', caption: 'La óptica', back: 'Profundidad a través del microscopio.', date: '' },
        { img: 'photos/neurocirugia/06.jpg?v=1791629793', caption: 'El polígono', back: 'Un punto rojo en el círculo.', date: '' },
        { img: 'photos/neurocirugia/07.jpg?v=1791629793', caption: 'El cierre', back: 'Un clip, un cuello, un milímetro.', date: '' },
      ],
    },
  ],
};
