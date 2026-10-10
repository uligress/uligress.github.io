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
        { img: 'photos/amniosim/01.jpg?v=1791629793', caption: 'Aguja espinal y saco', back: 'Aguja frente al saco amniótico. El simulador modela su paso por cada capa hasta el líquido.', date: '' },
        { img: 'photos/amniosim/02.jpg?v=1791629793', caption: 'Bisel de la aguja', back: 'El bisel es el reflector más brillante en la eco; su visibilidad cambia con el ángulo del haz.', date: '' },
        { img: 'photos/amniosim/03.jpg?v=1791629793', caption: 'Técnica en plano', back: 'Aguja y haz en el mismo plano para ver la punta todo el trayecto. Es la métrica principal.', date: '' },
        { img: 'photos/amniosim/04.jpg?v=1791629793', caption: 'Tenting de membranas', back: 'La membrana se deforma antes de perforarse: causa clásica de punción fallida. El simulador la detecta.', date: '' },
        { img: 'photos/amniosim/05.jpg?v=1791629793', caption: 'Sombra acústica', back: 'El hueso fetal bloquea el haz. Leer la sombra ayuda a elegir una ventana segura.', date: '' },
        { img: 'photos/amniosim/06.jpg?v=1791629793', caption: 'Speckle ecográfico', back: 'Textura fija al tejido: se mueve con la sonda como en un ecógrafo real.', date: '' },
        { img: 'photos/amniosim/07.jpg?v=1791629793', caption: 'Partes de la aguja', back: 'Cánula, estilete y conector. Se registran profundidad, ángulo e inserciones.', date: '' },
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
        { img: 'photos/neurocirugia/01.jpg?v=1791629793', caption: 'Corteza cerebral', back: 'En el abordaje transilviano se separan los lóbulos frontal y temporal para llegar a los vasos.', date: '' },
        { img: 'photos/neurocirugia/02.jpg?v=1791629793', caption: 'Domo del aneurisma', back: 'La parte más delgada de la pared y la de mayor riesgo de ruptura.', date: '' },
        { img: 'photos/neurocirugia/03.jpg?v=1791629793', caption: 'Instrumental', back: 'Pinza bipolar, disector y aspirador: tres de los 10 instrumentos del simulador.', date: '' },
        { img: 'photos/neurocirugia/04.jpg?v=1791629793', caption: 'Abordaje pterional', back: 'Craneotomía frontotemporal: el corredor más corto hacia la carótida interna.', date: '' },
        { img: 'photos/neurocirugia/05.jpg?v=1791629793', caption: 'Microscopio quirúrgico', back: 'Aumento y visión estereoscópica. El campo se muestra como a través del microscopio.', date: '' },
        { img: 'photos/neurocirugia/06.jpg?v=1791629793', caption: 'Polígono de Willis', back: 'En rojo, la unión carótida interna–comunicante posterior, donde está el aneurisma simulado.', date: '' },
        { img: 'photos/neurocirugia/07.jpg?v=1791629793', caption: 'Clipaje del cuello', back: 'El clip excluye el aneurisma sin ocluir la arteria. Es el objetivo de las 6 etapas.', date: '' },
      ],
    },
  ],
};
