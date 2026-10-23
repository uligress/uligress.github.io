(window.COURSE = window.COURSE || []).push({
  id: "m4", n: 4,
  title: "Historia clínica y consulta",
  en: "History taking",
  summary: "Aprendes a conducir una consulta completa en inglés: abrir, interrogar el padecimiento y los antecedentes, explorar con instrucciones claras y explicar el plan, incluso con malas noticias.",
  lessons: [
    {
      id: "m4l1",
      title: "Abrir la consulta y padecimiento actual",
      minutes: 15,
      goal: "Al terminar podrás presentarte, obtener el motivo de consulta y caracterizar un dolor con OPQRST o SOCRATES.",
      intro: "En inglés la consulta empieza con una pregunta abierta ('What brings you in today?') y solo después se cierran los detalles. El error típico es empezar con preguntas cerradas o con 'What is your problem?', que suena brusco. Para el dolor se usan dos mnemotecnias: OPQRST (Onset, Provocation/Palliation, Quality, Region/Radiation, Severity, Time) y SOCRATES (Site, Onset, Character, Radiation, Associations, Time course, Exacerbating/relieving factors, Severity).",
      vocab: [
        { en: "chief complaint (CC)", ipa: "/ˈtʃiːf kəmˈpleɪnt/", es: "motivo de consulta; el paciente dice: 'what brings me in'", ex: "Her chief complaint is abdominal pain for two days." },
        { en: "history of present illness (HPI)", ipa: "/ˈhɪs.tər.i əv ˈprɛz.ənt ˈɪl.nəs/", es: "padecimiento actual", ex: "The HPI should include onset, duration, and severity." },
        { en: "onset", ipa: "/ˈɑːn.sɛt/", es: "inicio; 'sudden' = súbito, 'gradual' = gradual", ex: "The onset was sudden, while he was at rest." },
        { en: "quality / character", ipa: "/ˈkwɑː.lə.ti/ /ˈkær.ɪk.tər/", es: "carácter del dolor: sharp, dull, burning, crushing, cramping", ex: "She describes a burning pain, not a sharp one." },
        { en: "to radiate", ipa: "/ˈreɪ.di.eɪt/", es: "irradiarse; el paciente dice: 'it spreads to…'", ex: "The pain radiates to the back." },
        { en: "severity", ipa: "/sɪˈvɛr.ə.ti/", es: "intensidad (escala 0 a 10)", ex: "He rates the pain as eight out of ten." },
        { en: "aggravating factor", ipa: "/ˈæɡ.rə.veɪ.tɪŋ ˈfæk.tər/", es: "factor que empeora; el paciente dice: 'what makes it worse'", ex: "Deep breathing is an aggravating factor." },
        { en: "relieving factor", ipa: "/rɪˈliː.vɪŋ ˈfæk.tər/", es: "factor que alivia; el paciente dice: 'what makes it better'", ex: "Leaning forward is a relieving factor." },
        { en: "associated symptoms", ipa: "/əˈsoʊ.si.eɪ.tɪd ˈsɪmp.təmz/", es: "síntomas asociados", ex: "Any associated symptoms, like fever or nausea?" },
        { en: "constant / intermittent", ipa: "/ˈkɑːn.stənt/ /ˌɪn.tərˈmɪt.ənt/", es: "constante / intermitente; el paciente dice: 'it comes and goes'", ex: "The pain comes and goes, and each episode lasts about ten minutes." },
        { en: "dull / sharp / burning", ipa: "/dʌl/ /ʃɑːrp/ /ˈbɜːr.nɪŋ/", es: "sordo / punzante / ardoroso", ex: "It is a dull ache that gets sharp when I move." },
        { en: "getting worse / better", ipa: "/ˈɡɛt.ɪŋ wɜːrs/", es: "empeorando / mejorando; 'the same' = igual", ex: "The pain has been getting worse over the last two days." }
      ],
      phrases: [
        { en: "Hello, I’m Alex, a medical student. What brings you in today?", es: "Hola, soy Alex, estudiante de medicina. ¿Qué lo trae hoy?", use: "Apertura; di tu nombre y tu rol, y haz una pregunta abierta." },
        { en: "Can you tell me more about that?", es: "¿Puede contarme más sobre eso?", use: "Para invitar a ampliar sin dirigir la respuesta." },
        { en: "When did it start, and was it sudden or gradual?", es: "¿Cuándo empezó y fue súbito o gradual?", use: "Para el inicio." },
        { en: "Does anything make it better or worse?", es: "¿Algo lo mejora o lo empeora?", use: "Factores que alivian o agravan." },
        { en: "On a scale of zero to ten, how bad is the pain?", es: "En una escala de cero a diez, ¿qué tan fuerte es el dolor?", use: "Para la intensidad; 0 es nada, 10 es el peor dolor imaginable." },
        { en: "Does it spread anywhere?", es: "¿Se va hacia algún otro lado?", use: "Irradiación." },
        { en: "Is there anything else bothering you?", es: "¿Algo más le molesta?", use: "Cierre del padecimiento actual; busca más síntomas." }
      ],
      text: {
        type: "dialogue",
        title: "Abdominal pain",
        context: "Un joven de 22 años consulta por dolor de abdomen en urgencias.",
        lines: [
          { who: "Doctor", en: "Hello, I’m Alex, a medical student working with Dr. Reed. What brings you in today?" },
          { who: "Patient", en: "I have a stomach ache that won’t go away." },
          { who: "Doctor", en: "I’m sorry to hear that. When did it start?" },
          { who: "Patient", en: "Yesterday evening. It began around my belly button." },
          { who: "Doctor", en: "And where is it now?" },
          { who: "Patient", en: "It moved to the lower right side." },
          { who: "Doctor", en: "How would you describe the pain? Sharp, dull, cramping?" },
          { who: "Patient", en: "It was dull at first, now it’s sharp." },
          { who: "Doctor", en: "On a scale of zero to ten, how bad is it?" },
          { who: "Patient", en: "About seven. It gets worse when I cough or walk." },
          { who: "Doctor", en: "Does anything make it better?" },
          { who: "Patient", en: "Lying still helps a little." },
          { who: "Doctor", en: "Any nausea, vomiting, or fever?" },
          { who: "Patient", en: "I felt nauseated and threw up once. I haven’t checked my temperature." },
          { who: "Doctor", en: "Thank you. Is there anything else bothering you?" },
          { who: "Patient", en: "No, that’s everything. I just want the pain to stop." }
        ]
      },
      grammar: [
        "Pregunta abierta primero, cerrada después: 'What brings you in?' → 'Is it sharp or dull?'. Evita las preguntas que sugieren la respuesta ('It hurts a lot, right?').",
        "Presentarte: 'I’m Alex, a medical student' o 'I’m the intern'. Nunca te presentes como 'doctor' si no lo eres en ese país: puede ser un problema legal.",
        "Escala del dolor: se dice 'seven out of ten' o 'a seven'. Tiempos: 'It started two days ago', 'It has been getting worse since then' (present perfect continuous para continuidad).",
        "Pide que amplíe con frases cortas: 'Tell me more', 'Go on', 'I see'. Y resume al final: 'So, if I understand correctly, …'."
      ],
      tip: "No digas 'What is your problem?' (suena a regaño): usa 'What brings you in today?' o 'How can I help?'. Otro error común: 'What do you feel?' → 'What are you feeling?' o, mejor, 'How are you feeling?'.",
      exercises: [
        { type: "mc", q: "Which opening question is best for starting a consultation?", options: ["What is your problem?", "Do you have a stomach ache?", "What brings you in today?", "Where does it hurt?"], answer: 2, explain: "Es una pregunta abierta, cortés y deja que el paciente cuente lo principal con sus palabras." },
        { type: "mc", q: "In OPQRST, the letter Q stands for:", options: ["Quality", "Quantity", "Question", "Quickness"], answer: 0, explain: "Q = Quality (carácter del dolor: sharp, dull, burning). Las otras letras: Onset, Provocation/Palliation, Region/Radiation, Severity, Time." },
        { type: "mc", q: "A patient says: 'The pain comes and goes.' In the chart you write that it is:", options: ["Constant", "Radiating", "Intermittent", "Referred"], answer: 2, explain: "'Comes and goes' es intermitente; constant sería sin interrupción." },
        { type: "fill", q: "On a ___ of zero to ten, how bad is the pain? (escala)", answer: ["scale"], explain: "'On a scale of zero to ten' es la forma estándar para pedir intensidad." },
        { type: "fill", q: "The pain ___ to his back. (se irradia, 3.ª persona, presente)", answer: ["radiates", "spreads"], explain: "Radiates es el verbo técnico; 'spreads' es lo que dice el paciente. Ojo con la -s de la tercera persona." },
        { type: "order", q: "Ordena la pregunta", words: ["it", "better", "Does", "make", "anything", "or", "worse"], answer: "Does anything make it better or worse", explain: "Anything funciona como sujeto: Does anything make it better or worse? Cubre factores que alivian y agravan." }
      ]
    },
    {
      id: "m4l2",
      title: "Antecedentes y revisión por sistemas",
      minutes: 15,
      goal: "Al terminar podrás obtener antecedentes personales, familiares y sociales, y presentar un historial en inglés, incluida la historia sexual con tacto.",
      intro: "Los antecedentes tienen un orden fijo: past medical history (PMH), past surgical history (PSH), medications, allergies, family history (FH), social history (SH) y review of systems (ROS). El error típico es traducir 'alergia' sin distinguir una verdadera alergia (rash, hives, anaphylaxis) de un efecto secundario (náuseas con un antibiótico). También conviene saber que en EE. UU. el alcohol se cuenta en 'drinks per week' y el tabaco en 'pack-years'.",
      vocab: [
        { en: "past medical history (PMH)", ipa: "/pæst ˈmɛd.ɪ.kəl ˈhɪs.tər.i/", es: "antecedentes personales patológicos", ex: "His PMH includes hypertension and type 2 diabetes." },
        { en: "past surgical history (PSH)", ipa: "/pæst ˈsɜːr.dʒɪ.kəl ˈhɪs.tər.i/", es: "antecedentes quirúrgicos", ex: "PSH: appendectomy in 2015." },
        { en: "over-the-counter (OTC)", ipa: "/ˌoʊ.vər ðə ˈkaʊn.tər/", es: "de venta libre", ex: "Do you take any over-the-counter medicines or supplements?" },
        { en: "allergy", ipa: "/ˈæl.ər.dʒi/", es: "alergia: reacción inmunológica (rash, hives, swelling, anaphylaxis)", ex: "She is allergic to penicillin and gets hives." },
        { en: "side effect", ipa: "/ˈsaɪd ɪˌfɛkt/", es: "efecto secundario, no alergia", ex: "Nausea with metformin is a side effect, not an allergy." },
        { en: "family history (FH)", ipa: "/ˈfæm.ə.li ˈhɪs.tər.i/", es: "antecedentes heredofamiliares", ex: "His father had a heart attack at 50." },
        { en: "social history (SH)", ipa: "/ˈsoʊ.ʃəl ˈhɪs.tər.i/", es: "historia social: tabaco, alcohol, drogas, ocupación", ex: "Social history includes smoking, alcohol, drugs, and occupation." },
        { en: "pack-year", ipa: "/ˈpæk jɪr/", es: "paquete-año: paquetes al día × años de fumar", ex: "One and a half packs a day for twenty years is thirty pack-years." },
        { en: "drinks per week", ipa: "/ˈdrɪŋks pər ˈwiːk/", es: "bebidas por semana (1 drink = 12 oz de cerveza, 5 oz de vino, 1.5 oz de licor)", ex: "He has about ten drinks per week." },
        { en: "recreational drugs", ipa: "/ˌrɛk.riˈeɪ.ʃə.nəl drʌɡz/", es: "drogas recreativas", ex: "Do you use any recreational drugs, like marijuana or cocaine?" },
        { en: "sexually active", ipa: "/ˈsɛk.ʃu.ə.li ˈæk.tɪv/", es: "sexualmente activo", ex: "Are you currently sexually active?" },
        { en: "review of systems (ROS)", ipa: "/rɪˈvjuː əv ˈsɪs.təmz/", es: "revisión por aparatos y sistemas", ex: "ROS is negative except for fatigue." }
      ],
      phrases: [
        { en: "Do you have any medical conditions, like high blood pressure or diabetes?", es: "¿Tiene alguna enfermedad, como presión alta o diabetes?", use: "Para antecedentes personales." },
        { en: "Are you taking any medications, including over-the-counter ones or vitamins?", es: "¿Toma algún medicamento, incluso de venta libre o vitaminas?", use: "Siempre pregunta por OTC y suplementos." },
        { en: "Are you allergic to any medications? What happens when you take them?", es: "¿Es alérgico a algún medicamento? ¿Qué le pasa cuando lo toma?", use: "Para distinguir alergia de efecto secundario." },
        { en: "Does anyone in your family have heart disease, cancer, or diabetes?", es: "¿Alguien en su familia tiene enfermedad del corazón, cáncer o diabetes?", use: "Antecedentes familiares." },
        { en: "Do you smoke? How many packs a day, and for how many years?", es: "¿Fuma? ¿Cuántas cajetillas al día y durante cuántos años?", use: "Para calcular pack-years." },
        { en: "How many drinks do you have in a typical week?", es: "¿Cuántas bebidas toma en una semana típica?", use: "Pregunta sin juicio, con cifras." },
        { en: "I’m going to ask a few personal questions. They are routine, and everything is confidential.", es: "Voy a hacer algunas preguntas personales. Son de rutina y todo es confidencial.", use: "Antes de la historia sexual; normaliza la pregunta." }
      ],
      text: {
        type: "reading",
        title: "Presenting a history out loud",
        context: "Así presentarías el historial de un paciente a tu residente, en orden.",
        paragraphs: [
          "Mr. Lopez is a 58-year-old man who presents with chest pain for two days. His past medical history includes hypertension and type 2 diabetes. He had an appendectomy in 2005. He takes lisinopril 10 mg daily and metformin 1,000 mg twice a day. He also takes ibuprofen as needed for back pain.",
          "He reports an allergy to penicillin, which causes hives. He says metformin gives him mild stomach upset, but that is a side effect, not an allergy.",
          "His father had a heart attack at fifty-two, and his mother has type 2 diabetes. There is no family history of cancer.",
          "Socially, he is married and works as a truck driver. He smokes one and a half packs a day for twenty years, which is thirty pack-years. He drinks about eight beers per week, which is eight drinks per week. He denies recreational drugs. He is sexually active with his wife only.",
          "On review of systems, he reports some shortness of breath on exertion. He denies fever, weight loss, or leg swelling."
        ]
      },
      grammar: [
        "Orden estándar de la presentación: CC, HPI, PMH, PSH, medications, allergies, FH, SH, ROS. Usa presente para lo actual ('He smokes') y pasado para lo ya ocurrido ('He had an appendectomy').",
        "'Denies' es la palabra del expediente para lo que el paciente niega: 'He denies fever'. Al paciente le dices: 'Have you had any fever?'.",
        "Cantidades: 'a pack a day', 'two drinks per week'. Pack-years = paquetes al día × años (1.5 × 20 = 30). Con 'for' + periodo: 'for twenty years'.",
        "Historia sexual con tacto: pide permiso, explica que es de rutina y usa un lenguaje neutro ('partners', 'men, women, or both') sin suponer nada."
      ],
      tip: "Alergia y efecto secundario no son lo mismo: pregunta 'What happens when you take it?'. Una verdadera alergia suele dar urticaria, hinchazón o dificultad para respirar. Y en inglés se dice 'allergic to' (no 'allergic of' ni 'allergic with').",
      exercises: [
        { type: "mc", q: "A patient says that amoxicillin gives him nausea. In the chart you record:", options: ["Allergy to amoxicillin", "Side effect (nausea) with amoxicillin", "Anaphylaxis", "Contraindication"], answer: 1, explain: "Las náuseas son un efecto secundario; una alergia implicaría reacción inmunológica (urticaria, edema, anafilaxis)." },
        { type: "mc", q: "A patient smoked 2 packs a day for 15 years. How many pack-years is that?", options: ["15", "17", "45", "30"], answer: 3, explain: "Paquetes al día × años: 2 × 15 = 30 pack-years." },
        { type: "mc", q: "Which sentence is the best way to start the sexual history?", options: ["Are you gay?", "Do you cheat on your partner?", "How many people have you slept with?", "I’m going to ask some personal questions; they are routine and confidential."], answer: 3, explain: "Pedir permiso, normalizar la pregunta y asegurar confidencialidad ayuda a que el paciente hable con sinceridad." },
        { type: "fill", q: "He ___ fever, chills, or weight loss. (niega, en la nota)", answer: ["denies"], explain: "'Denies' es el verbo estándar del expediente para síntomas ausentes. Va con -s en tercera persona." },
        { type: "fill", q: "She is allergic ___ penicillin. (a)", answer: ["to"], explain: "La preposición correcta es 'allergic to'." },
        { type: "order", q: "Ordena la pregunta", words: ["how", "you", "packs", "do", "many", "a", "smoke", "day"], answer: "how many packs do you smoke a day", explain: "How many + sustantivo contable + do you + verbo. La respuesta se multiplica por los años para sacar pack-years." }
      ]
    },
    {
      id: "m4l3",
      title: "Exploración física: dar instrucciones",
      minutes: 15,
      goal: "Al terminar podrás dar instrucciones claras y amables durante la exploración y preguntar si algo duele.",
      intro: "En la exploración usas imperativos: 'Take a deep breath', 'Lie back'. En inglés el imperativo es normal, pero se suaviza con 'please', 'for me' o 'I’m going to…' para avisar lo que sigue. El error típico es traducir literal 'Respire profundo' como 'Breathe deep' (usa 'Take a deep breath in') o decir 'palpate' al paciente (usa 'press').",
      vocab: [
        { en: "stethoscope", ipa: "/ˈstɛθ.ə.skoʊp/", es: "estetoscopio", ex: "I’m going to listen to your lungs with the stethoscope." },
        { en: "gown", ipa: "/ɡaʊn/", es: "bata de exploración", ex: "Please undress from the waist up and put on the gown." },
        { en: "deep breath", ipa: "/ˈdiːp ˈbrɛθ/", es: "inspiración profunda", ex: "Take a deep breath in, and let it out slowly." },
        { en: "to lie back / to sit up", ipa: "/laɪ ˈbæk/ /sɪt ˈʌp/", es: "recostarse / sentarse", ex: "Lie back for me and bend your knees." },
        { en: "to follow", ipa: "/ˈfɑː.loʊ/", es: "seguir con la vista", ex: "Follow my finger with your eyes, without moving your head." },
        { en: "to squeeze", ipa: "/skwiːz/", es: "apretar", ex: "Squeeze my hands as hard as you can." },
        { en: "to push / to pull", ipa: "/pʊʃ/ /pʊl/", es: "empujar / jalar", ex: "Push against my hand, and now pull." },
        { en: "tender / tenderness", ipa: "/ˈtɛn.dər/", es: "dolor a la palpación; no es 'tierno'", ex: "There is tenderness in the right lower quadrant." },
        { en: "guarding / rebound", ipa: "/ˈɡɑːr.dɪŋ/ /ˈriː.baʊnd/", es: "defensa muscular / rebote", ex: "No guarding or rebound tenderness." },
        { en: "reflex", ipa: "/ˈriː.flɛks/", es: "reflejo", ex: "I’m going to check your reflexes with this hammer." },
        { en: "to say ‘ahh’", ipa: "/ˈɑː/", es: "decir ‘aah’ (abrir la boca para revisar la garganta)", ex: "Open wide and say ‘ahh’." },
        { en: "to relax", ipa: "/rɪˈlæks/", es: "relajarse", ex: "Try to relax your belly. You’re doing great." }
      ],
      phrases: [
        { en: "I’m going to examine you now. Let me know if anything hurts.", es: "Ahora voy a examinarlo. Avíseme si algo le duele.", use: "Antes de empezar; avisa y da permiso de hablar." },
        { en: "Please take a deep breath in, and breathe out slowly.", es: "Por favor, tome aire profundo y sáquelo despacio.", use: "Auscultación pulmonar." },
        { en: "Lie back for me and relax your belly.", es: "Recuéstese, por favor, y relaje el abdomen.", use: "Exploración abdominal." },
        { en: "Does it hurt when I press here? And when I let go?", es: "¿Le duele cuando presiono aquí? ¿Y cuando suelto?", use: "Palpación y dolor al rebote." },
        { en: "Follow my finger with your eyes, but don’t move your head.", es: "Siga mi dedo con los ojos, sin mover la cabeza.", use: "Movimientos oculares." },
        { en: "Squeeze my hands as hard as you can.", es: "Apriete mis manos lo más fuerte que pueda.", use: "Fuerza de agarre." },
        { en: "Push your foot down against my hand.", es: "Empuje con el pie hacia abajo contra mi mano.", use: "Fuerza de las piernas." }
      ],
      text: {
        type: "dialogue",
        title: "A physical exam",
        context: "Exploración física de un paciente con dolor abdominal y mareo.",
        lines: [
          { who: "Doctor", en: "I’m going to examine you now. Please sit up on the edge of the table." },
          { who: "Patient", en: "Okay." },
          { who: "Doctor", en: "I’ll listen to your heart and lungs. Take a deep breath in… and out." },
          { who: "Patient", en: "Like this?" },
          { who: "Doctor", en: "Perfect. Again, in… and out. Thank you." },
          { who: "Doctor", en: "Now follow my finger with your eyes. Don’t move your head." },
          { who: "Patient", en: "Is that all right?" },
          { who: "Doctor", en: "Yes. Now squeeze my hands as hard as you can." },
          { who: "Patient", en: "Like this?" },
          { who: "Doctor", en: "Great, that’s strong. Now lie back for me and bend your knees." },
          { who: "Doctor", en: "I’m going to press on your belly. Tell me if it hurts." },
          { who: "Patient", en: "Ouch, right there." },
          { who: "Doctor", en: "I’m sorry. Does it hurt more when I press or when I let go?" },
          { who: "Patient", en: "When you let go." },
          { who: "Doctor", en: "Thank you. You can sit up now. You did very well." }
        ]
      },
      grammar: [
        "Imperativo amable: verbo sin sujeto + 'please' o 'for me': 'Lie back for me'. Para avisar, 'I’m going to + verbo': 'I’m going to press on your belly'.",
        "Negativo del imperativo: 'Don’t move' (no 'No move'). 'Try not to move your head' suena más amable que 'Don’t move your head'.",
        "Preposiciones con la exploración: 'press on your belly', 'listen to your heart', 'squeeze my hands', 'push against my hand', 'look at the light'.",
        "Retroalimenta al paciente: 'Good', 'Perfect', 'You’re doing great'. Pregunta antes de tocar y respeta el pudor: 'Is it okay if I lift your shirt?'."
      ],
      tip: "False friend: 'tender' no es 'tierno'; significa doloroso al tocar. Y 'palpate' es para tu nota; al paciente le dices 'press'. Otro: 'Breathe normally' = respire normal; 'Hold your breath' = aguante la respiración.",
      exercises: [
        { type: "mc", q: "How do you ask a patient to breathe in deeply for lung auscultation?", options: ["Breathe deep.", "Take a deep breath in.", "Respire deeply.", "Do a big air."], answer: 1, explain: "La fórmula natural es 'Take a deep breath in' (y luego 'breathe out')." },
        { type: "mc", q: "'There is tenderness in the right lower quadrant' means:", options: ["The area is soft and gentle", "There is pain when the area is pressed", "The patient is sensitive", "There is a tender mass"], answer: 1, explain: "Tenderness es dolor a la palpación. No es 'ternura'." },
        { type: "mc", q: "Which instruction tests grip strength?", options: ["Squeeze my hands as hard as you can.", "Follow my finger.", "Open wide.", "Lie back for me."], answer: 0, explain: "Squeeze = apretar. Se evalúa la fuerza de agarre." },
        { type: "fill", q: "Please ___ back for me and bend your knees. (recuéstese)", answer: ["lie"], explain: "'Lie back' es el verbo para recostarse. 'Lay' es transitivo y se usa para colocar un objeto." },
        { type: "fill", q: "I’m going to ___ on your belly. Tell me if it hurts. (presionar)", answer: ["press"], explain: "'Press on' se usa con el paciente; 'palpate' es un término de la nota." },
        { type: "order", q: "Ordena la instrucción", words: ["eyes", "my", "your", "finger", "with", "Follow"], answer: "Follow my finger with your eyes", explain: "Imperativo + objeto + 'with your eyes'. Añade 'without moving your head' para que sea completo." }
      ]
    },
    {
      id: "m4l4",
      title: "Explicar diagnóstico y plan, consentimiento y malas noticias",
      minutes: 15,
      goal: "Al terminar podrás explicar un diagnóstico sin jerga, verificar con teach-back y dar malas noticias con el protocolo SPIKES.",
      intro: "Explicar bien es tan importante como diagnosticar bien: frases cortas, sin jerga y con una pregunta de verificación. El error típico es decir 'hypertension' o 'myocardial infarction' al paciente y asumir que entendió. Para dar malas noticias se usa SPIKES: Setting (lugar y privacidad), Perception (qué sabe el paciente), Invitation (cuánto quiere saber), Knowledge (dar la información), Emotions (responder con empatía) y Strategy/Summary (plan y resumen).",
      vocab: [
        { en: "diagnosis", ipa: "/ˌdaɪ.əɡˈnoʊ.sɪs/", es: "diagnóstico (plural: diagnoses /ˌdaɪ.əɡˈnoʊ.siːz/)", ex: "We need more tests to confirm the diagnosis." },
        { en: "treatment plan", ipa: "/ˈtriːt.mənt plæn/", es: "plan de tratamiento", ex: "Let’s go over the treatment plan together." },
        { en: "risks and benefits", ipa: "/ˈrɪsks ənd ˈbɛn.ɪ.fɪts/", es: "riesgos y beneficios", ex: "I will explain the risks and benefits of the surgery." },
        { en: "informed consent", ipa: "/ɪnˈfɔːrmd kənˈsɛnt/", es: "consentimiento informado", ex: "The patient gave informed consent before the procedure." },
        { en: "alternatives", ipa: "/ɔːlˈtɜːr.nə.tɪvz/", es: "alternativas (incluida no tratar)", ex: "There are other options, including doing nothing." },
        { en: "teach-back", ipa: "/ˈtiːtʃ bæk/", es: "método de comprobar que entendió: que el paciente lo repita con sus palabras", ex: "I’ll use teach-back: can you tell me the plan in your own words?" },
        { en: "follow-up", ipa: "/ˈfɑː.loʊ ʌp/", es: "seguimiento, cita de control", ex: "Please come back for a follow-up in two weeks." },
        { en: "referral", ipa: "/rɪˈfɜːr.əl/", es: "referencia o derivación a un especialista", ex: "I’m sending a referral to a cardiologist." },
        { en: "test results", ipa: "/ˈtɛst rɪˈzʌlts/", es: "resultados de estudios", ex: "Your test results came back this morning." },
        { en: "bad news", ipa: "/ˈbæd nuːz/", es: "malas noticias", ex: "I’m afraid I have some difficult news." },
        { en: "biopsy", ipa: "/ˈbaɪ.ɑːp.si/", es: "biopsia", ex: "The biopsy showed cancer cells." },
        { en: "prognosis", ipa: "/prɑːɡˈnoʊ.sɪs/", es: "pronóstico", ex: "The prognosis depends on how early we treat it." }
      ],
      phrases: [
        { en: "Do you have any questions? Is there anything I can explain better?", es: "¿Tiene preguntas? ¿Hay algo que pueda explicar mejor?", use: "Al terminar una explicación." },
        { en: "Just to make sure I explained it clearly, can you tell me in your own words what we will do?", es: "Para asegurarme de que me expliqué bien, ¿puede decirme con sus palabras qué vamos a hacer?", use: "Teach-back sin que suene a examen." },
        { en: "Before we talk about the results, what is your understanding of why we did the test?", es: "Antes de hablar de los resultados, ¿qué entiende usted de por qué hicimos el estudio?", use: "SPIKES: Perception." },
        { en: "Would you like me to explain the results in detail?", es: "¿Quiere que le explique los resultados con detalle?", use: "SPIKES: Invitation." },
        { en: "I’m afraid I have some difficult news. The test showed cancer.", es: "Me temo que tengo noticias difíciles. El estudio mostró cáncer.", use: "SPIKES: Knowledge; avisa y luego da la noticia clara." },
        { en: "I wish I had better news. I can see this is hard to hear.", es: "Ojalá tuviera mejores noticias. Veo que es difícil de escuchar.", use: "SPIKES: Emotions; empatía antes que datos." },
        { en: "We will take this one step at a time, and you will not be alone.", es: "Lo haremos paso a paso y usted no estará solo.", use: "SPIKES: Strategy y cierre." }
      ],
      text: {
        type: "dialogue",
        title: "Delivering difficult news",
        context: "Una paciente de 52 años recibe el resultado de una biopsia de mama; usa SPIKES.",
        lines: [
          { who: "Doctor", en: "Mrs. Alvarez, please sit down. Is it okay if we talk privately for a few minutes?" },
          { who: "Patient", en: "Yes, of course." },
          { who: "Doctor", en: "Before I share the results, what is your understanding of why we did the biopsy?" },
          { who: "Patient", en: "I think you wanted to check the lump in my breast." },
          { who: "Doctor", en: "That’s right. Would you like me to explain the results in detail?" },
          { who: "Patient", en: "Yes, please. I want to know everything." },
          { who: "Doctor", en: "I’m afraid I have some difficult news. The biopsy showed that the lump is cancer." },
          { who: "Patient", en: "Oh no. I can’t believe it." },
          { who: "Doctor", en: "I’m so sorry. I wish I had better news. Take all the time you need." },
          { who: "Patient", en: "What happens now?" },
          { who: "Doctor", en: "We will take this one step at a time. First, we will do more tests to see if it has spread, and then plan surgery and other treatment." },
          { who: "Patient", en: "Will I be okay?" },
          { who: "Doctor", en: "Breast cancer found early often responds well to treatment, but I’ll know more after the next tests." },
          { who: "Patient", en: "Okay. Thank you for being honest." },
          { who: "Doctor", en: "Of course. To make sure I explained it clearly, can you tell me in your own words what comes next?" },
          { who: "Patient", en: "More tests, then a plan for surgery. And I will come back next week." }
        ]
      },
      grammar: [
        "Sin jerga: 'high blood pressure' en lugar de hypertension; 'a blockage in a blood vessel' en lugar de thrombosis; 'sugar' o 'diabetes' en lugar de hyperglycemia. Frases cortas, una idea por frase.",
        "Aviso previo: 'I’m afraid I have some difficult news' o 'Unfortunately, the results show…'. Después, silencio. Evita eufemismos que confundan ('We found something'), da la noticia con palabras claras.",
        "Empatía: 'I can see this is hard to hear', 'I wish I had better news', 'This must be very difficult'. No digas 'Don’t worry' ni 'Everything will be fine'.",
        "Para el consentimiento explica con 'will' y 'may': 'The surgery will remove the tumor. You may have pain and bleeding.' Termina con 'Do you agree to go ahead?' o 'Would you like to think about it?'."
      ],
      tip: "No prometas lo que no sabes: 'You will be fine' puede ser falso; di 'We will do everything we can' o 'I will know more after the tests'. Y el teach-back se pide como favor, no como examen: 'I want to be sure I explained well'.",
      exercises: [
        { type: "mc", q: "What does 'teach-back' mean?", options: ["The patient teaches the doctor", "The patient repeats the explanation in their own words", "The doctor repeats the explanation twice", "The doctor writes instructions"], answer: 1, explain: "Teach-back comprueba la comprensión: el paciente explica con sus palabras. Se hace como favor al clínico, no como examen." },
        { type: "mc", q: "In SPIKES, which step comes right after 'Setting'?", options: ["Knowledge", "Strategy", "Emotions", "Perception"], answer: 3, explain: "Setting, Perception, Invitation, Knowledge, Emotions, Strategy/Summary. Después del lugar se explora qué sabe el paciente." },
        { type: "mc", q: "Which sentence is the best response when a patient starts crying?", options: ["Don’t cry, everything will be fine.", "I can see this is hard to hear. Take your time.", "We must continue with the plan now.", "Many people have it worse."], answer: 1, explain: "Reconocer la emoción y dar tiempo es lo recomendado; evita falsas promesas o minimizar." },
        { type: "fill", q: "The patient gave ___ consent before the surgery. (informado)", answer: ["informed"], explain: "'Informed consent' es consentimiento informado: el paciente entiende riesgos, beneficios y alternativas." },
        { type: "fill", q: "I’m ___ I have some difficult news. (me temo)", answer: ["afraid"], explain: "'I’m afraid that…' suaviza una mala noticia. No significa tener miedo aquí." },
        { type: "order", q: "Ordena la oración", words: ["step", "We", "one", "take", "will", "at", "this", "a", "time"], answer: "We will take this one step at a time", explain: "Frase útil de cierre en SPIKES: da seguridad sin prometer el resultado." }
      ]
    }
  ]
});
