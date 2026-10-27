/* Contenido público de uligress.me: simuladores y galerías. */
window.UNG = {
  "site": {
    "headline": "Construyendo simuladores para aprender *medicina*.",
    "subtitle": "",
    "about": ""
  },
  "buzon": {
    "endpoint": "https://script.google.com/macros/s/AKfycbzALUeGcXdZ_50fFCLkqjbDK4L75E2HF4yFKmPrNq3tkP1eVVUXT6qboQXsINhKuWzJ/exec",
    "action": "https://docs.google.com/forms/d/e/1FAIpQLScchGZzSPC2K-Sx9YhpnD2bf3m71x_q3ySYR7zHDVH2xDcwaw/formResponse",
    "entries": {
      "titulo": "entry.346673698",
      "tema": "entry.1464743382",
      "problema": "entry.388895883",
      "simulador": "entry.1535504990",
      "publico": "entry.386402910",
      "referencias": "entry.191798921",
      "nombre": "entry.80540622",
      "correo": "entry.413961433",
      "telefono": "entry.397228987",
      "institucion": "entry.664746345",
      "colaborar": "entry.1694082772",
      "privacidad": "entry.430006936"
    }
  },
  "catalog": {
    "title": "Todo lo *disponible*",
    "intro": "Cinco simuladores para explorar anatomía y practicar procedimientos. Todo funciona en el navegador.",
    "groups": [
      {
        "label": "Simuladores",
        "items": [
          {
            "name": "Bronco*Sim*",
            "area": "Neumología",
            "text": "Árbol bronquial 3D y navegación endoscópica por segmentos. Rotación, flexión y orientación anatómica.",
            "status": "Beta educativa",
            "img": "/photos/broncosim/01.jpg?v=20261027-gallery",
            "link": "/lab/broncosim/"
          },
          {
            "name": "Amnio*Sim*",
            "area": "Medicina materno-fetal",
            "text": "Amniocentesis guiada por ultrasonido, con la punta de la aguja siempre visible.",
            "status": "Disponible",
            "img": "/photos/amniosim/01.jpg?v=20261027-gallery",
            "link": "/lab/amniosim/"
          },
          {
            "name": "Clip*Sim*",
            "area": "Neurocirugía",
            "text": "Clipaje microquirúrgico de un aneurisma, visto a través del microscopio.",
            "status": "Disponible",
            "img": "/photos/neurocirugia/01.jpg?v=20261027-gallery",
            "link": "/lab/clipsim/"
          },
          {
            "name": "Stent*Sim*",
            "area": "Endovascular",
            "text": "Angioplastia y stent ilíaco bajo fluoroscopia simulada.",
            "status": "Beta",
            "img": "/photos/stentsim/01.jpg?v=20261027-gallery",
            "link": "/lab/stentsim/"
          },
          {
            "name": "Hernio*Sim*",
            "area": "Cirugía general",
            "text": "Hernioplastia inguinal laparoscópica (TAPP) con malla y grapas.",
            "status": "Disponible",
            "img": "/photos/herniosim/01.jpg?v=20261027-gallery",
            "link": "/lab/herniosim/"
          }
        ]
      }
    ]
  },
  "projects": [
    {
      "name": "Bronco*Sim*",
      "attribution": {"href": "photos/broncosim/ANATOMY-LICENSE.md", "text": "Modelo BodyParts3D / DBCLS · CC BY-SA 2.1 Japan"},
      "link": "/lab/broncosim/",
      "status": "Beta educativa",
      "kicker": "Simulador educativo · Neumología",
      "description": "Explora un *árbol bronquial 3D* y orienta la cámara por sus segmentos. Avance, retirada, rotación y flexión en una misma pantalla.",
      "tags": [
        "Broncoscopia",
        "Anatomía",
        "Three.js"
      ],
      "facts": [
        [
          "Tipo",
          "Simulador web 3D"
        ],
        [
          "Exploración",
          "Mapa anatómico y cámara endoscópica"
        ],
        [
          "Controles",
          "Avance, rotación y flexión"
        ],
        [
          "Estado",
          "Beta educativa · 2026"
        ]
      ],
      "teaser": false,
      "items": [
        {
          "img": "photos/broncosim/01.jpg?v=20261027-gallery",
          "caption": "Árbol bronquial",
          "back": "Superficie anatómica de la tráquea y los bronquios. Datos BodyParts3D/DBCLS adaptados; licencia CC BY-SA 2.1 Japan.",
          "date": ""
        },
        {
          "img": "photos/broncosim/02.jpg?v=20261027-gallery",
          "caption": "Vista oblicua",
          "back": "La vista oblicua permite apreciar la profundidad y las ramificaciones del mismo modelo anatómico.",
          "date": ""
        },
        {
          "img": "photos/broncosim/03.jpg?v=20261027-gallery",
          "caption": "Perspectiva lateral",
          "back": "El mismo árbol visto desde otro ángulo, para relacionar sus ramas en el espacio.",
          "date": ""
        },
        {
          "img": "photos/broncosim/04.jpg?v=20261027-gallery",
          "caption": "Orientación en la carina",
          "back": "Esquema simplificado de la bifurcación traqueal. La carina separa la entrada a ambos bronquios principales.",
          "date": ""
        }
      ],
      "number": 1
    },
    {
      "number": 2,
      "name": "Amnio*Sim*",
      "status": "Disponible",
      "link": "/lab/amniosim/",
      "kicker": "Simulador educativo · Medicina materno-fetal",
      "description": "Un simulador web de *amniocentesis guiada por ultrasonido*. Ecografía simulada con sombra acústica, aguja especular y *tenting* de membranas: practicas la punción con la punta siempre visible y recibes retroalimentación de cada error, con su evidencia.",
      "facts": [
        [
          "Tipo",
          "Simulador web 3D"
        ],
        [
          "Contenido",
          "7 escenarios · 4 modos"
        ],
        [
          "Retroalimentación",
          "15 errores con referencias"
        ],
        [
          "Estado",
          "Disponible en el lab · 2026"
        ]
      ],
      "tags": [
        "Ultrasonido",
        "Simulación",
        "Three.js"
      ],
      "teaser": false,
      "items": [
        {
          "img": "photos/amniosim/01.jpg?v=20261027-gallery",
          "caption": "Aguja espinal y saco",
          "back": "Aguja frente al saco amniótico. El simulador modela su paso por cada capa hasta el líquido.",
          "date": ""
        },
        {
          "img": "photos/amniosim/02.jpg?v=20261027-gallery",
          "caption": "Bisel de la aguja",
          "back": "El bisel es el reflector más brillante en la eco; su visibilidad cambia con el ángulo del haz.",
          "date": ""
        },
        {
          "img": "photos/amniosim/03.jpg?v=20261027-gallery",
          "caption": "Técnica en plano",
          "back": "Aguja y haz en el mismo plano para ver la punta todo el trayecto. Es la métrica principal.",
          "date": ""
        },
        {
          "img": "photos/amniosim/04.jpg?v=20261027-gallery",
          "caption": "Tenting de membranas",
          "back": "La membrana se deforma antes de perforarse: causa clásica de punción fallida. El simulador la detecta.",
          "date": ""
        },
        {
          "img": "photos/amniosim/05.jpg?v=20261027-gallery",
          "caption": "Sombra acústica",
          "back": "El hueso fetal bloquea el haz. Leer la sombra ayuda a elegir una ventana segura.",
          "date": ""
        },
        {
          "img": "photos/amniosim/06.jpg?v=20261027-gallery",
          "caption": "Speckle ecográfico",
          "back": "Textura fija al tejido: se mueve con la sonda como en un ecógrafo real.",
          "date": ""
        },
        {
          "img": "photos/amniosim/07.jpg?v=20261027-gallery",
          "caption": "Partes de la aguja",
          "back": "Cánula, estilete y conector. Se registran profundidad, ángulo e inserciones.",
          "date": ""
        }
      ]
    },
    {
      "number": 3,
      "name": "Clip*Sim*",
      "status": "Disponible",
      "link": "/lab/clipsim/",
      "kicker": "Simulador microquirúrgico · Demo educativa",
      "description": "Clipaje microquirúrgico de un *aneurisma de la unión carótida interna–comunicante posterior* por abordaje pterional transilviano, visto como a través del *microscopio quirúrgico*. Avanzas por las etapas con tus instrumentos mientras un mentor te guía y el monitor reacciona a cada movimiento.",
      "facts": [
        [
          "Tipo",
          "Simulador 3D en el navegador"
        ],
        [
          "Procedimiento",
          "6 etapas · 10 instrumentos"
        ],
        [
          "Incluye",
          "Signos vitales, sangrado, retracción, mentor e informe final"
        ],
        [
          "Estado",
          "Disponible en el lab · 2026"
        ]
      ],
      "tags": [
        "Neurocirugía",
        "Microscopio",
        "Three.js"
      ],
      "teaser": false,
      "items": [
        {
          "img": "photos/neurocirugia/01.jpg?v=20261027-gallery",
          "caption": "Corteza cerebral",
          "back": "En el abordaje transilviano se separan los lóbulos frontal y temporal para llegar a los vasos.",
          "date": ""
        },
        {
          "img": "photos/neurocirugia/02.jpg?v=20261027-gallery",
          "caption": "Domo del aneurisma",
          "back": "La parte más delgada de la pared y la de mayor riesgo de ruptura.",
          "date": ""
        },
        {
          "img": "photos/neurocirugia/03.jpg?v=20261027-gallery",
          "caption": "Instrumental",
          "back": "Pinza bipolar, disector y aspirador: tres de los 10 instrumentos del simulador.",
          "date": ""
        },
        {
          "img": "photos/neurocirugia/04.jpg?v=20261027-gallery",
          "caption": "Abordaje pterional",
          "back": "Craneotomía frontotemporal: el corredor más corto hacia la carótida interna.",
          "date": ""
        },
        {
          "img": "photos/neurocirugia/05.jpg?v=20261027-gallery",
          "caption": "Microscopio quirúrgico",
          "back": "Aumento y visión estereoscópica. El campo se muestra como a través del microscopio.",
          "date": ""
        },
        {
          "img": "photos/neurocirugia/06.jpg?v=20261027-gallery",
          "caption": "Polígono de Willis",
          "back": "En rojo, la unión carótida interna–comunicante posterior, donde está el aneurisma simulado.",
          "date": ""
        },
        {
          "img": "photos/neurocirugia/07.jpg?v=20261027-gallery",
          "caption": "Clipaje del cuello",
          "back": "El clip excluye el aneurisma sin ocluir la arteria. Es el objetivo de las 6 etapas.",
          "date": ""
        }
      ]
    },
    {
      "number": 4,
      "name": "Stent*Sim*",
      "status": "Beta",
      "link": "/lab/stentsim/",
      "kicker": "Simulador endovascular · Angioplastia ilíaca",
      "description": "Angioplastia y colocación de *stent en la arteria ilíaca* bajo fluoroscopia. Navegas la guía por la bifurcación, mides la lesión, eliges el tamaño y liberas un *stent de nitinol*; el simulador registra fluoroscopia, contraste y estenosis residual.",
      "facts": [
        [
          "Tipo",
          "Simulador web con fluoroscopia simulada"
        ],
        [
          "Contenido",
          "3 escenarios · 18 errores"
        ],
        [
          "Mide",
          "Fluoroscopia, contraste y estenosis residual"
        ],
        [
          "Estado",
          "Beta en el lab · 2026"
        ]
      ],
      "tags": [
        "Endovascular",
        "Nitinol",
        "Fluoroscopia"
      ],
      "teaser": false,
      "items": [
        {
          "img": "photos/stentsim/01.jpg?v=20261027-gallery",
          "caption": "Stent de nitinol",
          "back": "Se autoexpande a temperatura corporal; su fuerza radial abre la placa sin pasar del diámetro nominal.",
          "date": ""
        },
        {
          "img": "photos/stentsim/02.jpg?v=20261027-gallery",
          "caption": "Bifurcación aortoilíaca",
          "back": "Lesión en la ilíaca y el stent que la cubre: el caso base del simulador.",
          "date": ""
        },
        {
          "img": "photos/stentsim/03.jpg?v=20261027-gallery",
          "caption": "Guía de punta angulada",
          "back": "Girar la punta decide en qué rama entra. Es la base de la navegación.",
          "date": ""
        },
        {
          "img": "photos/stentsim/04.jpg?v=20261027-gallery",
          "caption": "Superelasticidad",
          "back": "El nitinol carga y descarga por mesetas distintas: por eso empuja suave y constante.",
          "date": ""
        },
        {
          "img": "photos/stentsim/05.jpg?v=20261027-gallery",
          "caption": "Arco en C",
          "back": "La angulación correcta evita el acortamiento aparente al medir la lesión.",
          "date": ""
        },
        {
          "img": "photos/stentsim/06.jpg?v=20261027-gallery",
          "caption": "Dimensionamiento",
          "back": "Diámetro de referencia y margen por lado: de ahí sale el tamaño del stent.",
          "date": ""
        },
        {
          "img": "photos/stentsim/07.jpg?v=20261027-gallery",
          "caption": "Balón de angioplastia",
          "back": "Predilata lesiones cerradas y posdilata el stent, con presión controlada.",
          "date": ""
        }
      ]
    },
    {
      "name": "Hernio*Sim*",
      "link": "/lab/herniosim/",
      "status": "Disponible",
      "kicker": "Simulador educativo · Cirugía general",
      "description": "Una introducción a la *hernioplastia inguinal laparoscópica*, con exploración del espacio, colocación de malla y fijación.",
      "tags": [
        "Laparoscopia",
        "Malla",
        "Cirugía general"
      ],
      "facts": [
        [
          "Tipo",
          "Simulador web 3D"
        ],
        [
          "Procedimiento",
          "Hernioplastia inguinal"
        ],
        [
          "Material",
          "Malla y fijadores"
        ],
        [
          "Estado",
          "Disponible en el lab · 2026"
        ]
      ],
      "teaser": false,
      "items": [
        {
          "img": "photos/herniosim/01.jpg?v=20261027-gallery",
          "caption": "Malla y fijación",
          "back": "Render conceptual de una malla quirúrgica con fijadores helicoidales.",
          "date": ""
        },
        {
          "img": "photos/herniosim/02.jpg?v=20261027-gallery",
          "caption": "Trama de la malla",
          "back": "La estructura porosa se muestra como una trama de filamentos; ilustración del material protésico.",
          "date": ""
        },
        {
          "img": "photos/herniosim/03.jpg?v=20261027-gallery",
          "caption": "Fijadores helicoidales",
          "back": "Detalle conceptual de los fijadores. Su colocación en el simulador forma parte de la práctica.",
          "date": ""
        },
        {
          "img": "photos/herniosim/04.jpg?v=20261027-gallery",
          "caption": "Cobertura del defecto",
          "back": "Esquema conceptual de cobertura: la malla se extiende alrededor del defecto, señalado en rojo.",
          "date": ""
        }
      ],
      "number": 5
    }
  ]
};
