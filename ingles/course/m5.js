(window.COURSE = window.COURSE || []).push({
  id: "m5", n: 5,
  title: "Comunicación hospitalaria",
  en: "Hospital talk",
  summary: "Aprendes a presentar un paciente en el pase de visita, entregar guardia con SBAR e I-PASS, escribir notas y órdenes sin ambigüedad y pedir ayuda o interconsultas por teléfono.",
  lessons: [
    {
      id: "m5l1",
      title: "Presentar un paciente en el pase de visita",
      minutes: 15,
      goal: "Al terminar podrás presentar un caso en voz alta en inglés con una estructura clara: one-liner, HPI, exploración, estudios y plan por problema.",
      intro: "En Estados Unidos la presentación oral es breve, ordenada y habla de memoria, no se lee el expediente. Empieza siempre con un one-liner (edad, sexo, antecedentes clave y motivo de ingreso) y termina con un plan por problema. El error típico del hispanohablante es contar la historia en orden cronológico sin filtrar: aquí solo se dicen los datos relevantes (pertinent positives y negatives).",
      vocab: [
        { en: "one-liner", ipa: "/ˈwʌn ˌlaɪnər/", es: "resumen de una línea del paciente", ex: "Start with a one-liner: age, sex, key history, and why the patient is here." },
        { en: "chief complaint", ipa: "/tʃiːf kəmˈpleɪnt/", es: "motivo de consulta", ex: "His chief complaint was shortness of breath." },
        { en: "history of present illness (HPI)", ipa: "/ˈhɪstəri əv ˈprɛzənt ˈɪlnəs/", es: "padecimiento actual", ex: "In the HPI, include onset, duration, and what makes it better or worse." },
        { en: "pertinent positives", ipa: "/ˈpɜːrtənənt ˈpɑːzətɪvz/", es: "datos positivos relevantes", ex: "Pertinent positives include orthopnea and leg swelling." },
        { en: "pertinent negatives", ipa: "/ˈpɜːrtənənt ˈnɛɡətɪvz/", es: "datos negativos relevantes", ex: "Pertinent negatives: no fever, no chest pain, no cough." },
        { en: "onset", ipa: "/ˈɑːnsɛt/", es: "inicio (de los síntomas)", ex: "The onset was gradual over three days." },
        { en: "past medical history (PMH)", ipa: "/pæst ˈmɛdɪkəl ˈhɪstəri/", es: "antecedentes personales patológicos", ex: "His PMH is significant for hypertension and diabetes." },
        { en: "vital signs", ipa: "/ˈvaɪtl saɪnz/", es: "signos vitales", ex: "Her vital signs were stable on admission." },
        { en: "on exam", ipa: "/ɑːn ɪɡˈzæm/", es: "a la exploración física", ex: "On exam, he had crackles at both lung bases." },
        { en: "assessment", ipa: "/əˈsɛsmənt/", es: "impresión diagnóstica / valoración", ex: "My assessment is that this is a heart failure exacerbation." },
        { en: "plan by problem", ipa: "/plæn baɪ ˈprɑːbləm/", es: "plan organizado por problema", ex: "I will present the plan by problem, starting with the most urgent one." },
        { en: "rounds", ipa: "/raʊndz/", es: "pase de visita", ex: "We present new patients to the attending on morning rounds." }
      ],
      phrases: [
        { en: "This is a 62-year-old man with hypertension who presented with chest pain.", es: "Es un hombre de 62 años con hipertensión que acudió por dolor torácico.", use: "Apertura estándar: el one-liner." },
        { en: "He denies fever, chills, or weight loss.", es: "Niega fiebre, escalofríos o pérdida de peso.", use: "Para decir los pertinent negatives; denies es más formal que says no." },
        { en: "Symptoms started three days ago and have been getting worse.", es: "Los síntomas empezaron hace tres días y han ido empeorando.", use: "Para dar el inicio y la evolución en el HPI." },
        { en: "On arrival, his vitals were as follows.", es: "A su llegada, sus signos vitales fueron los siguientes.", use: "Para introducir temperatura, FC, TA, FR y saturación." },
        { en: "Labs were notable for a creatinine of 1.3.", es: "Los laboratorios destacaron por una creatinina de 1.3.", use: "Para mencionar solo lo anormal o relevante." },
        { en: "My assessment is that this is most likely a heart failure exacerbation.", es: "Mi impresión es que lo más probable es una exacerbación de insuficiencia cardiaca.", use: "Para abrir el assessment con tu diagnóstico principal." },
        { en: "For problem number one, heart failure, the plan is…", es: "Para el problema número uno, insuficiencia cardiaca, el plan es…", use: "Para ordenar el plan por problemas." }
      ],
      text: {
        type: "dialogue",
        title: "Morning rounds: bed 12",
        context: "Un residente presenta a un paciente nuevo ante el médico adscrito (attending) durante el pase de visita.",
        lines: [
          { who: "Resident", en: "Mr. Reyes is a 62-year-old man with hypertension and type 2 diabetes who presented with three days of worsening shortness of breath and leg swelling." },
          { who: "Attending", en: "Go ahead with the history." },
          { who: "Resident", en: "The dyspnea started three days ago with climbing stairs and is now present at rest. He needs three pillows to sleep, and he gained about four kilograms this week." },
          { who: "Attending", en: "Any chest pain or fever?" },
          { who: "Resident", en: "No chest pain, no fever, and no cough. He admits he ran out of his furosemide two weeks ago." },
          { who: "Attending", en: "What were his vitals and exam?" },
          { who: "Resident", en: "On arrival: heart rate 104, blood pressure 148 over 90, respiratory rate 24, and oxygen saturation 90 percent on room air. On exam, he has elevated JVP, bibasilar crackles, an S3, and 2-plus pitting edema to the knees." },
          { who: "Attending", en: "And the workup?" },
          { who: "Resident", en: "BNP was 1,400. Creatinine is 1.3, close to his baseline. Troponin is negative. The chest x-ray shows pulmonary edema and cardiomegaly." },
          { who: "Attending", en: "Okay. Give me your assessment and plan." },
          { who: "Resident", en: "This is most likely an acute heart failure exacerbation, probably triggered by running out of his diuretic. Problem one, heart failure: IV furosemide 40 milligrams twice daily, strict intake and output, daily weights, and an echocardiogram. Problem two, diabetes: sliding-scale insulin while he is in the hospital." },
          { who: "Attending", en: "Good. What about his access to medications after discharge?" },
          { who: "Resident", en: "I will ask social work to see him and check whether he can afford his medications." }
        ]
      },
      grammar: [
        "Usa el presente simple para el estado actual (“He has crackles”) y el pasado simple para lo ocurrido (“He presented…”, “Labs were…”). No mezcles tiempos dentro de la misma frase.",
        "Para decir que un síntoma NO está, usa denies o no + sustantivo (“no fever”). Evita “he doesn’t have not”; recuerda que en inglés una sola negación basta.",
        "Edad: “a 62-year-old man” lleva guiones y año en singular. Nunca “a 62 years old man”.",
        "Los números se dicen cortos: “blood pressure 148 over 90”, “heart rate 104”, “creatinine 1.3” (one point three)."
      ],
      tip: "Practica tu one-liner de memoria con tres pacientes reales de tu rotación antes de la visita; si el one-liner sale limpio, el resto de la presentación se acomoda sola.",
      exercises: [
        { type: "mc", q: "¿Qué debe incluir un buen one-liner?", options: ["Todos los resultados de laboratorio", "Edad, sexo, antecedentes clave y motivo de ingreso", "Solo el diagnóstico final", "El plan completo de tratamiento"], answer: 1, explain: "El one-liner resume quién es el paciente y por qué está ahí; los laboratorios y el plan van después." },
        { type: "fill", q: "No fever and no chest pain are pertinent ___ (datos negativos relevantes).", answer: ["negatives"], explain: "Pertinent negatives son los síntomas o signos ausentes que ayudan a descartar o apoyar un diagnóstico." },
        { type: "order", q: "Ordena la oración", words: ["worsening", "He", "three", "presented", "days", "with", "of", "dyspnea"], answer: "He presented with three days of worsening dyspnea", explain: "Estructura típica: presented with + duración + síntoma." },
        { type: "mc", q: "¿Cuál es la forma correcta de abrir una presentación?", options: ["He is a man with 62 years old and hypertension.", "A 62 years old man hypertensive.", "This is a 62-year-old man with hypertension who presented with chest pain.", "I have a patient: man, 62, chest pain."], answer: 2, explain: "Se usa “a 62-year-old man” (guiones, sin plural) y se completa con who presented with…" },
        { type: "fill", q: "The patient ___ chest pain, fever, or cough (verbo formal para “niega”).", answer: ["denies"], explain: "Denies es el verbo estándar en una presentación; tercera persona lleva -s." },
        { type: "order", q: "Ordena la oración", words: ["problem", "heart", "For", "one", "failure"], answer: "For problem one heart failure", explain: "Para ordenar el plan por problema se dice “For problem one, …”. En el habla hay una pausa donde iría la coma." }
      ]
    },
    {
      id: "m5l2",
      title: "Entrega de guardia: SBAR e I-PASS",
      minutes: 15,
      goal: "Al terminar podrás entregar un paciente a la guardia siguiente con SBAR o I-PASS y confirmar que el receptor entendió.",
      intro: "La entrega de guardia (handoff o sign-out) es uno de los momentos más riesgosos del hospital, por eso se estructura. SBAR (Situation, Background, Assessment, Recommendation) sirve para comunicar un problema, sobre todo por teléfono. I-PASS es el formato de entrega de guardia: Illness severity, Patient summary, Action list, Situation awareness and contingency planning, Synthesis by receiver. El error típico es contar todo el caso en vez de decir qué hacer esta noche y qué hacer si algo cambia.",
      vocab: [
        { en: "handoff", ipa: "/ˈhændɔːf/", es: "entrega de guardia (de pacientes)", ex: "Handoff is at 7 p.m. in the workroom." },
        { en: "sign-out", ipa: "/ˈsaɪn aʊt/", es: "entrega de pacientes (término coloquial)", ex: "I will give you sign-out on my patients before I leave." },
        { en: "SBAR", ipa: "/ˈɛsbɑːr/", es: "Situación, Antecedentes, Evaluación, Recomendación", ex: "I will use SBAR to tell the attending about the change." },
        { en: "illness severity", ipa: "/ˈɪlnəs səˈvɛrəti/", es: "gravedad de la enfermedad", ex: "Illness severity: stable, watcher, or unstable." },
        { en: "watcher", ipa: "/ˈwɑːtʃər/", es: "paciente que requiere vigilancia (puede empeorar)", ex: "He is a watcher because his oxygen needs are increasing." },
        { en: "action list", ipa: "/ˈækʃn lɪst/", es: "lista de pendientes", ex: "The action list has two items for tonight." },
        { en: "contingency plan", ipa: "/kənˈtɪndʒənsi plæn/", es: "plan de contingencia (si pasa X, haz Y)", ex: "The contingency plan is: if he becomes drowsy, get a blood gas." },
        { en: "read-back", ipa: "/ˈriːd bæk/", es: "repetición de lo recibido para confirmar", ex: "Can I do a read-back to make sure I got it right?" },
        { en: "to cover (patients)", ipa: "/tuː ˈkʌvər/", es: "cubrir a los pacientes (en la guardia)", ex: "I am covering the medicine floor tonight." },
        { en: "overnight", ipa: "/ˌoʊvərˈnaɪt/", es: "durante la noche", ex: "Nothing happened overnight." },
        { en: "code status", ipa: "/koʊd ˈsteɪtəs/", es: "estado de reanimación (full code, DNR)", ex: "His code status is full code." },
        { en: "to follow up on", ipa: "/tuː ˈfɑːloʊ ʌp ɑːn/", es: "dar seguimiento a", ex: "Please follow up on the culture results tomorrow morning." }
      ],
      phrases: [
        { en: "Situation: I’m calling about Mr. Alvarez in bed 5; his oxygen requirement has increased.", es: "Situación: llamo por el Sr. Alvarez de la cama 5; aumentó su necesidad de oxígeno.", use: "Abrir un SBAR diciendo quién es el paciente y qué pasa, en una frase." },
        { en: "Background: he has COPD and was admitted two days ago with an exacerbation.", es: "Antecedentes: tiene EPOC y ingresó hace dos días con una exacerbación.", use: "Segunda parte del SBAR, solo lo esencial." },
        { en: "Illness severity: he’s a watcher.", es: "Gravedad: es un paciente que hay que vigilar.", use: "Primera letra de I-PASS; usa stable, watcher o unstable." },
        { en: "If his saturation drops below 88 percent, get a blood gas and call me.", es: "Si su saturación baja de 88 %, toma una gasometría y llámame.", use: "Plan de contingencia con la estructura if / then." },
        { en: "Can you read that back to me?", es: "¿Me lo puedes repetir para confirmar?", use: "Para confirmar que el receptor entendió." },
        { en: "Any questions before I go?", es: "¿Alguna pregunta antes de irme?", use: "Para cerrar la entrega y dar espacio a dudas." },
        { en: "Recommendation: I would like you to come evaluate him in the next 30 minutes.", es: "Recomendación: quisiera que lo valores en los próximos 30 minutos.", use: "Cierre del SBAR: pide algo concreto y con tiempo." }
      ],
      text: {
        type: "dialogue",
        title: "Evening handoff",
        context: "Un residente de día entrega dos pacientes al residente de guardia usando I-PASS.",
        lines: [
          { who: "Day resident", en: "Let’s start with bed 5, Mr. Alvarez. Illness severity: watcher." },
          { who: "Night resident", en: "Okay, go ahead." },
          { who: "Day resident", en: "Patient summary: he is a 70-year-old man with COPD admitted with an exacerbation. He is on day two of steroids and antibiotics, and he is on two liters of oxygen by nasal cannula. His baseline is room air." },
          { who: "Night resident", en: "How has he been trending?" },
          { who: "Day resident", en: "His oxygen went up this afternoon from one liter to two. Action list: repeat a blood gas at 10 p.m. if he feels more short of breath, and order a chest x-ray for the morning." },
          { who: "Night resident", en: "What should I watch for?" },
          { who: "Day resident", en: "Contingency plan: if his saturation drops below 88 percent or he becomes drowsy, get a gas, call respiratory therapy for BiPAP, and call the ICU team." },
          { who: "Day resident", en: "Next, bed 8, Ms. Chen. Illness severity: stable. She is a 45-year-old woman with cellulitis who is improving on IV antibiotics." },
          { who: "Day resident", en: "Action list: switch to oral antibiotics in the morning if she stays afebrile. If she spikes a fever, draw blood cultures." },
          { who: "Night resident", en: "Got it. Let me read back. Bed 5 is a watcher with COPD; repeat the gas if he gets worse, and call the ICU if his saturation is below 88 or he is drowsy." },
          { who: "Day resident", en: "That’s right. Any questions?" },
          { who: "Night resident", en: "What is Mr. Alvarez’s code status?" },
          { who: "Day resident", en: "Good question. He is full code. Thanks for checking." }
        ]
      },
      grammar: [
        "Los contingency plans usan la estructura if + presente simple, orden en imperativo: “If he spikes a fever, draw blood cultures.” No uses will después de if.",
        "En I-PASS el receptor hace la S final (synthesis): repite lo esencial con sus propias palabras. Es parte de la entrega, no una descortesía.",
        "En inglés se dice “on day two of antibiotics” (en el segundo día), y “for two days” (durante dos días). No confundas on day con since.",
        "Registro: en una entrega se usan frases cortas y verbos directos (get, call, check, repeat). Para pedir algo a un superior añade please o could you."
      ],
      tip: "Termina siempre cada paciente con una frase if / then. Un buen handoff no dice solo qué pasó, dice qué hacer si el paciente cambia durante la noche.",
      exercises: [
        { type: "mc", q: "¿Qué significa la A en I-PASS?", options: ["Assessment", "Attending", "Action list", "Admission"], answer: 2, explain: "I-PASS: Illness severity, Patient summary, Action list, Situation awareness and contingency planning, Synthesis by receiver." },
        { type: "fill", q: "Illness severity can be stable, ___ (vigilar), or unstable.", answer: ["watcher"], explain: "El término es watcher: paciente estable por ahora pero con riesgo de empeorar." },
        { type: "order", q: "Ordena la oración", words: ["call", "If", "a", "spikes", "me", "fever", "he"], answer: "If he spikes a fever call me", explain: "Estructura if + presente simple, luego imperativo. Se pone una coma al escribirla." },
        { type: "mc", q: "¿Qué parte del SBAR contiene la petición concreta (por ejemplo, “evalúalo en 30 minutos”)?", options: ["Situation", "Background", "Assessment", "Recommendation"], answer: 3, explain: "La R de Recommendation es lo que pides o propones hacer." },
        { type: "fill", q: "Can I do a ___ to make sure I understood? (repetición para confirmar)", answer: ["read-back", "readback", "read back"], explain: "Read-back es repetir la información recibida; reduce errores de comunicación." },
        { type: "mc", q: "¿Cuál es la mejor frase de contingencia?", options: ["He will maybe get worse.", "If his saturation drops below 88 percent, get a blood gas and call the ICU.", "Watch him very well.", "Call me for everything."], answer: 1, explain: "Una contingencia útil nombra un umbral concreto y las acciones que siguen." }
      ]
    },
    {
      id: "m5l3",
      title: "Notas SOAP, abreviaturas y órdenes",
      minutes: 15,
      goal: "Al terminar podrás leer y escribir una nota SOAP, entender las abreviaturas de órdenes más comunes y evitar las que causan errores.",
      intro: "La nota SOAP organiza la evolución diaria: Subjective (lo que cuenta el paciente), Objective (signos, exploración, laboratorios), Assessment (qué piensas) y Plan (qué harás). Las órdenes usan abreviaturas latinas heredadas (PRN, BID, q6h) que debes reconocer al instante. Ojo: algunas abreviaturas están prohibidas en Estados Unidos porque se confunden y causan errores; el error típico del estudiante es usar las abreviaturas de México sin saber que allá están en la lista de “do not use”.",
      vocab: [
        { en: "PRN", ipa: "/ˌpiː ɑːr ˈɛn/", es: "según necesidad (pro re nata)", ex: "Acetaminophen 650 mg by mouth every 6 hours PRN pain." },
        { en: "BID", ipa: "/ˌbiː aɪ ˈdiː/", es: "dos veces al día", ex: "Furosemide 40 mg IV BID." },
        { en: "TID", ipa: "/ˌtiː aɪ ˈdiː/", es: "tres veces al día", ex: "Give the antibiotic TID with meals." },
        { en: "QID", ipa: "/ˌkjuː aɪ ˈdiː/", es: "cuatro veces al día", ex: "He takes the inhaler QID." },
        { en: "q6h", ipa: "/ˌkjuː sɪks ˈeɪtʃ/", es: "cada 6 horas", ex: "Check vitals q6h overnight." },
        { en: "NPO", ipa: "/ˌɛn piː ˈoʊ/", es: "nada por vía oral (ayuno)", ex: "Keep him NPO after midnight for the procedure." },
        { en: "PO, IV, IM, SC", ipa: "/ˌpiː ˈoʊ, ˌaɪ ˈviː, ˌaɪ ˈɛm, ˌɛs ˈsiː/", es: "oral, intravenoso, intramuscular, subcutáneo", ex: "Switch from IV to PO antibiotics when she is afebrile." },
        { en: "stat", ipa: "/stæt/", es: "de inmediato (urgente)", ex: "Order a stat chest x-ray." },
        { en: "I&O", ipa: "/ˌaɪ ən ˈoʊ/", es: "ingresos y egresos de líquidos", ex: "Strict I&O and daily weights." },
        { en: "CBC", ipa: "/ˌsiː biː ˈsiː/", es: "biometría hemática completa", ex: "Repeat the CBC in the morning." },
        { en: "BMP / CMP", ipa: "/ˌbiː ɛm ˈpiː, ˌsiː ɛm ˈpiː/", es: "perfil metabólico básico (electrolitos, glucosa, función renal) / completo (añade pruebas hepáticas)", ex: "Order a CMP instead of a BMP because we need liver tests too." }
      ],
      phrases: [
        { en: "Please order a CBC and a BMP for the morning.", es: "Por favor pide una BH y un perfil metabólico básico para la mañana.", use: "Orden de laboratorio rutinaria." },
        { en: "Keep the patient NPO except for medications.", es: "Mantén al paciente en ayuno, excepto medicamentos.", use: "Antes de un procedimiento o por riesgo de aspiración." },
        { en: "Acetaminophen 650 mg PO every 6 hours as needed for fever.", es: "Paracetamol 650 mg vía oral cada 6 horas si hay fiebre.", use: "Escribe as needed o PRN; ambas son aceptadas." },
        { en: "I need a stat portable chest x-ray.", es: "Necesito una radiografía de tórax portátil de inmediato.", use: "Cuando el resultado cambia el manejo ya." },
        { en: "Heparin 5,000 units subcutaneously every 8 hours for DVT prophylaxis.", es: "Heparina 5,000 unidades subcutánea cada 8 horas como profilaxis de TVP.", use: "Escribir subcutaneously completo es más seguro que SQ." },
        { en: "Please record strict I&O and weigh him daily.", es: "Por favor registra ingresos y egresos estrictos y pésalo a diario.", use: "Orden de enfermería en insuficiencia cardiaca o renal." },
        { en: "Write 5 mg, not 5.0 mg, and 0.5 mg, not .5 mg.", es: "Escribe 5 mg, no 5.0 mg, y 0.5 mg, no .5 mg.", use: "Regla de ceros: nunca cero final, siempre cero inicial." }
      ],
      text: {
        type: "reading",
        title: "A SOAP note",
        context: "Nota SOAP ficticia de práctica sobre una paciente con neumonía, escrita como la haría un residente.",
        paragraphs: [
          "S: 58-year-old woman, hospital day 2 for community-acquired pneumonia. She reports less cough and no chest pain, but she still feels weak. She slept poorly because of coughing.",
          "O: T 37.4, HR 92, BP 118/72, RR 20, SpO2 94% on 2 L nasal cannula. Lungs: crackles at the right base, no wheezing. I&O: 1,800 mL in, 1,200 mL out. Labs: WBC 13.2, down from 16.8. BMP is normal, creatinine 0.8.",
          "A: Improving community-acquired pneumonia, likely bacterial, on day 2 of antibiotics. Mild hypoxemia, improving.",
          "P: 1) Continue ceftriaxone 1 g IV q24h and azithromycin 500 mg PO daily. 2) Wean oxygen to keep SpO2 above 92%. 3) Acetaminophen 650 mg PO q6h PRN fever or pain. 4) Heparin 5,000 units SC q8h for DVT prophylaxis. 5) Repeat CBC and BMP in the morning. 6) Regular diet, strict I&O, and daily weights. Reassess tomorrow for transition to oral antibiotics only. Plan explained to the patient, who understands and agrees."
        ]
      },
      grammar: [
        "Abreviaturas “do not use” (Joint Commission): QD se confunde con QID (escribe daily); U se lee como 0 o 4 (escribe units); “MS” o “MSO4” se confunden entre morfina y sulfato de magnesio (escribe morphine o magnesium sulfate).",
        "Cero final: “5.0 mg” puede leerse como 50 mg; escribe 5 mg. Cero inicial: “.5 mg” puede leerse como 5 mg; escribe 0.5 mg. Regla: nunca un cero final, siempre un cero inicial.",
        "El estilo de la nota es telegráfico: sin artículos ni verbos auxiliares (“Improving pneumonia”, no “The pneumonia is improving”). En voz alta sí se dicen frases completas.",
        "q + número + h se lee “every X hours” (q6h = every six hours). BID, TID y QID son horarios aproximados; q8h es un intervalo exacto."
      ],
      tip: "Haz una tarjeta con las cuatro abreviaturas prohibidas (QD, U, cero final, cero omitido) y escribe esas cosas completas desde hoy: unidades como units, dosis como 5 mg y 0.5 mg.",
      exercises: [
        { type: "mc", q: "¿Qué significa “q6h PRN pain”?", options: ["Seis veces al día siempre", "Cada 6 horas si hay dolor", "Una vez cada 6 días", "Antes de dormir si hay dolor"], answer: 1, explain: "q6h es cada 6 horas y PRN es según necesidad; juntos, cada 6 horas si hace falta." },
        { type: "fill", q: "Keep the patient ___ after midnight for the endoscopy. (ayuno)", answer: ["npo"], explain: "NPO viene de nil per os: nada por vía oral." },
        { type: "order", q: "Ordena la oración", words: ["IV", "Continue", "ceftriaxone", "g", "q24h", "1"], answer: "Continue ceftriaxone 1 g IV q24h", explain: "Orden típico: medicamento, dosis, vía y frecuencia." },
        { type: "mc", q: "¿Por qué está prohibido escribir “5.0 mg”?", options: ["Porque se puede leer como 50 mg", "Porque 5 mg no es una dosis válida", "Porque el cero indica que el fármaco es oral", "Porque no existe el punto decimal en órdenes"], answer: 0, explain: "Si no se ve el punto, 5.0 mg se lee como 50 mg: error de diez veces." },
        { type: "fill", q: "Do not write QD; write ___ instead. (cada día, en inglés completo)", answer: ["daily"], explain: "QD se confunde con QID, así que se escribe daily." },
        { type: "mc", q: "¿Cuál es la orden más segura?", options: ["Insulin 10 U SC", "Insulin 10 units QD", "Insulin 10.0 U", "Insulin 10 units subcutaneously"], answer: 3, explain: "Se escribe units completo (U se confunde con 0 o 4) y la vía clara; evita QD y cero final." }
      ]
    },
    {
      id: "m5l4",
      title: "Llamadas, interconsultas y urgencias",
      minutes: 15,
      goal: "Al terminar podrás llamar a un consultor con una pregunta clara, confirmar la información con comunicación de ciclo cerrado y pedir ayuda urgente.",
      intro: "Una interconsulta eficaz tiene una pregunta clara (“Should we start anticoagulation?”), no un simple “please evaluate”. En urgencias se usa closed-loop communication: quien da una orden la dice, quien la recibe la repite y el emisor confirma. El error típico del hispanohablante es sonar demasiado indirecto y no pedir ayuda a tiempo; en los hospitales de EE. UU. se espera que digas “I’m worried” sin pena.",
      vocab: [
        { en: "consult", ipa: "/ˈkɑːnsʌlt/", es: "interconsulta (sustantivo)", ex: "I placed a cardiology consult this morning." },
        { en: "to page", ipa: "/tuː peɪdʒ/", es: "localizar por buscapersonas", ex: "I will page the on-call fellow." },
        { en: "on call", ipa: "/ɑːn kɔːl/", es: "de guardia", ex: "Who is on call for surgery tonight?" },
        { en: "fellow", ipa: "/ˈfɛloʊ/", es: "médico en subespecialidad (después de la residencia)", ex: "The cardiology fellow will see him in 30 minutes." },
        { en: "closed-loop communication", ipa: "/kloʊzd luːp kəˌmjuːnɪˈkeɪʃn/", es: "comunicación de ciclo cerrado (repetir y confirmar)", ex: "We use closed-loop communication during codes." },
        { en: "rapid response team", ipa: "/ˈræpəd rɪˈspɑːns tiːm/", es: "equipo de respuesta rápida", ex: "The nurse called the rapid response team for hypotension." },
        { en: "code blue", ipa: "/koʊd bluː/", es: "paro cardiorrespiratorio (alerta intrahospitalaria)", ex: "Code blue, room 412." },
        { en: "crash cart", ipa: "/ˈkræʃ kɑːrt/", es: "carro de paro", ex: "Bring the crash cart now." },
        { en: "to escalate", ipa: "/tuː ˈɛskəleɪt/", es: "escalar (pasar a un nivel superior)", ex: "If he does not improve, escalate care." },
        { en: "chain of command", ipa: "/tʃeɪn əv kəˈmænd/", es: "cadena de mando", ex: "If you are not sure, go up the chain of command." },
        { en: "to deteriorate", ipa: "/tuː dɪˈtɪriəreɪt/", es: "deteriorar", ex: "The patient deteriorated quickly overnight." },
        { en: "to call back", ipa: "/tuː kɔːl bæk/", es: "devolver la llamada", ex: "Please call me back within 15 minutes." }
      ],
      phrases: [
        { en: "Hi, this is Dr. Rivera, a resident on internal medicine, calling about a patient in bed 9.", es: "Hola, habla el Dr. Rivera, residente de medicina interna, llamo por un paciente de la cama 9.", use: "Apertura de una llamada: quién eres, de qué servicio y de qué paciente." },
        { en: "The question for your team is whether he needs a cardiac catheterization tonight.", es: "La pregunta para su equipo es si necesita cateterismo cardiaco esta noche.", use: "Para formular una pregunta clara en una interconsulta." },
        { en: "Let me repeat that back: aspirin, heparin drip, and cardiology to see him in 30 minutes.", es: "Déjame repetirlo: aspirina, infusión de heparina y cardiología lo ve en 30 minutos.", use: "Cierre del ciclo después de recibir indicaciones." },
        { en: "I’m worried about this patient; his blood pressure is dropping.", es: "Estoy preocupado por este paciente; su presión está bajando.", use: "Frase clara para pedir ayuda sin rodeos." },
        { en: "I need help in room 7 now.", es: "Necesito ayuda ahora en el cuarto 7.", use: "Para emergencias; corta y con ubicación." },
        { en: "Please call a rapid response.", es: "Por favor activa el equipo de respuesta rápida.", use: "Se lo dices a una enfermera o a un colega ante un paciente que se deteriora." },
        { en: "Thank you; please call me back if anything changes.", es: "Gracias; por favor llámame si algo cambia.", use: "Cierre profesional de una llamada." }
      ],
      text: {
        type: "dialogue",
        title: "A consult and a rapid response",
        context: "Un residente llama a cardiología por un paciente con dolor torácico y poco después una enfermera pide ayuda por deterioro.",
        lines: [
          { who: "Resident", en: "Hi, this is Dr. Rivera from internal medicine, calling about Mr. Lopez in bed 9. He is a 65-year-old man with chest pain and new ST depressions." },
          { who: "Fellow", en: "What are his vitals?" },
          { who: "Resident", en: "Blood pressure 100 over 60, heart rate 110, saturation 95 percent on room air. His troponin is rising." },
          { who: "Fellow", en: "What is your question for us?" },
          { who: "Resident", en: "We think this is an NSTEMI. Does he need a cardiac catheterization tonight?" },
          { who: "Fellow", en: "Yes. Give aspirin 325, start a heparin drip, and we will see him in 30 minutes." },
          { who: "Resident", en: "Let me repeat that back: aspirin 325, start a heparin drip, and cardiology will see him in 30 minutes. Is that right?" },
          { who: "Fellow", en: "That’s right. Call me back if his blood pressure drops." },
          { who: "Nurse", en: "Doctor, I’m worried about the patient in bed 14. He is more confused and his blood pressure is 80 over 40." },
          { who: "Resident", en: "Thank you for telling me. Please call a rapid response." },
          { who: "Nurse", en: "Calling a rapid response, room 14." },
          { who: "Resident", en: "I’m going now. Bring the crash cart and start a bolus of normal saline." },
          { who: "Nurse", en: "Starting a bolus of normal saline. The cart is on its way." }
        ]
      },
      grammar: [
        "Para pedir con cortesía en el teléfono: “Could you…?” o “Would you mind…?”; en una emergencia se usa el imperativo directo y corto: “Bring the cart.” No se considera grosero.",
        "Consult es sustantivo (“a cardiology consult”) y verbo informal (“We consulted cardiology”). El verbo más natural para pedir la valoración es “to ask for / request a consult”.",
        "Para dar un umbral usa below / above: “call me if his saturation drops below 90.” No digas “under of 90”.",
        "En closed-loop se repite lo recibido con las mismas cifras: “aspirin 325” (three twenty-five). No se parafrasea la dosis."
      ],
      tip: "Antes de marcar, escribe en una línea: quién eres, qué paciente, qué pasa, y la pregunta exacta. Si no puedes formular la pregunta, aún no estás listo para llamar al consultor.",
      exercises: [
        { type: "mc", q: "¿Qué es lo mejor que puedes decir al inicio de una interconsulta?", options: ["Please see this patient.", "I have a question about everything.", "I’m calling about bed 9; my question is whether he needs a catheterization tonight.", "Nothing is urgent, but maybe someone could come."], answer: 2, explain: "Una interconsulta eficaz identifica al paciente y plantea una pregunta concreta." },
        { type: "fill", q: "Closed-loop communication means repeating the order back to ___ it. (confirmar)", answer: ["confirm"], explain: "Quien recibe repite la orden y el emisor confirma, para evitar malentendidos." },
        { type: "order", q: "Ordena la oración", words: ["worried", "I’m", "this", "about", "patient"], answer: "I’m worried about this patient", explain: "Decir I’m worried es una manera aceptada y directa de pedir ayuda." },
        { type: "mc", q: "¿Qué significa “rapid response team”?", options: ["Equipo que atiende el paro cuando ya ocurrió", "Equipo que se activa ante un paciente que se deteriora", "Equipo de laboratorio", "Equipo de traslado de pacientes"], answer: 1, explain: "El rapid response se activa ante signos de deterioro, antes de un paro." },
        { type: "fill", q: "Call me if his blood pressure drops ___ 90. (por debajo de)", answer: ["below"], explain: "Below indica por debajo de un umbral; above, por arriba." },
        { type: "mc", q: "El fellow dice: “Give aspirin 325 and start a heparin drip.” ¿Qué respuesta cierra el ciclo?", options: ["Okay.", "Thank you, doctor.", "Let me repeat that back: aspirin 325 and a heparin drip. Is that right?", "I will do something."], answer: 2, explain: "Repetir la orden con cifras y pedir confirmación completa el ciclo cerrado." }
      ]
    }
  ]
});
