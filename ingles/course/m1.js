(window.COURSE = window.COURSE || []).push({
  id: "m1", n: 1,
  title: "Base funcional",
  en: "Functional core",
  summary: "Logras llevar una consulta básica en inglés: usar bien los tiempos verbales, preguntar con claridad, evitar los errores clásicos del hispanohablante y decir números, dosis y signos vitales en voz alta sin dudar.",
  lessons: [
    {
      id: "m1l1",
      title: "Tiempos verbales en la consulta",
      minutes: 15,
      goal: "Al terminar podrás contar y preguntar cuánto tiempo lleva un síntoma usando present simple, past simple y present perfect con for/since.",
      intro: "En la consulta casi todo gira en torno a tres tiempos: el present simple para hábitos y enfermedades crónicas, el past simple para cosas con fecha cerrada y el present perfect para síntomas que empezaron antes y siguen ahora. El error típico: decir “I have three days with fever” (calco de “tengo tres días con fiebre”). En inglés se dice “I have had a fever for three days”.",
      vocab: [
        { en: "chest pain", ipa: "/tʃɛst peɪn/", es: "dolor torácico", ex: "He has had chest pain since this morning." },
        { en: "cough", ipa: "/kɔːf/", es: "tos", ex: "She has had a dry cough for two weeks." },
        { en: "fever", ipa: "/ˈfiː.vɚ/", es: "fiebre", ex: "The child had a fever last night." },
        { en: "nausea", ipa: "/ˈnɔː.zi.ə/", es: "náusea", ex: "I feel nausea every time I eat." },
        { en: "to vomit", ipa: "/tə ˈvɑː.mɪt/", es: "vomitar", ex: "He vomited twice after dinner." },
        { en: "dizziness", ipa: "/ˈdɪz.i.nəs/", es: "mareo, sensación de inestabilidad", ex: "She reports dizziness when she stands up." },
        { en: "swelling", ipa: "/ˈswɛl.ɪŋ/", es: "hinchazón, edema", ex: "The swelling in his ankles started last week." },
        { en: "rash", ipa: "/ræʃ/", es: "exantema, sarpullido", ex: "A rash appeared on her arms two days ago." },
        { en: "onset", ipa: "/ˈɑːn.sɛt/", es: "inicio (de los síntomas)", ex: "The onset of the pain was sudden." },
        { en: "to get worse", ipa: "/tə ɡɛt wɝːs/", es: "empeorar", ex: "The headache gets worse at night." },
        { en: "to improve", ipa: "/tə ɪmˈpruːv/", es: "mejorar", ex: "His breathing has improved since yesterday." },
        { en: "to radiate", ipa: "/tə ˈreɪ.di.eɪt/", es: "irradiarse", ex: "The pain radiates to my left arm." }
      ],
      phrases: [
        { en: "What brings you in today?", es: "¿Qué lo trae hoy?", use: "Apertura estándar de la consulta; sustituye al “¿Qué le pasa?”." },
        { en: "How long have you had this pain?", es: "¿Desde cuándo tiene este dolor?", use: "Para duración de un síntoma que sigue presente." },
        { en: "When did it start?", es: "¿Cuándo empezó?", use: "Para el momento exacto de inicio (past simple)." },
        { en: "Have you ever had this before?", es: "¿Ha tenido esto alguna vez?", use: "Para antecedentes de un episodio parecido." },
        { en: "Is it getting better or worse?", es: "¿Está mejorando o empeorando?", use: "Para la evolución actual (present continuous)." },
        { en: "I have had a fever since Monday.", es: "Tengo fiebre desde el lunes.", use: "Respuesta natural del paciente con since." },
        { en: "I take metformin every day.", es: "Tomo metformina todos los días.", use: "Para tratamientos crónicos (present simple)." }
      ],
      text: {
        type: "dialogue",
        title: "A cough that will not go away",
        context: "Primera consulta de un paciente con tos de varias semanas.",
        lines: [
          { who: "Doctor", en: "Good morning, Mr. Ruiz. What brings you in today?" },
          { who: "Patient", en: "I have had a cough for about three weeks." },
          { who: "Doctor", en: "When did it start?" },
          { who: "Patient", en: "It started after a cold. I felt better for a few days, but then it came back." },
          { who: "Doctor", en: "Is it getting better or worse?" },
          { who: "Patient", en: "It is getting worse, especially at night." },
          { who: "Doctor", en: "Have you had a fever?" },
          { who: "Patient", en: "Yes, I have had a fever since Sunday." },
          { who: "Doctor", en: "Do you smoke?" },
          { who: "Patient", en: "I smoke ten cigarettes a day, and I have smoked for twenty years." },
          { who: "Doctor", en: "Are you taking any medication at the moment?" },
          { who: "Patient", en: "I am taking cough syrup, and I take losartan every morning for my blood pressure." },
          { who: "Doctor", en: "Have you ever had pneumonia?" },
          { who: "Patient", en: "No, never. But I had bronchitis two years ago." }
        ]
      },
      grammar: [
        "Present simple = hábitos, rutinas y enfermedades crónicas: “I take metformin every day.” Present continuous = algo temporal o que ocurre ahora: “I am taking antibiotics this week.”",
        "Past simple = acción terminada con momento definido: “It started two days ago.” Con “ago”, “yesterday” o “last week” usa siempre past simple.",
        "Present perfect (have/has + participio) = empezó en el pasado y sigue, o experiencia sin fecha: “I have had a cough for three weeks.” “Have you ever had surgery?”",
        "for = cuánto dura (for three days); since = desde cuándo (since Monday, since 2020). Nunca uses “since” con una cantidad de tiempo."
      ],
      tip: "Para cualquier síntoma que sigue presente, piensa “have had + for/since”. Si dudas entre “I have 3 days with…” y “I have had… for 3 days”, la segunda siempre es la correcta.",
      exercises: [
        { type: "mc", q: "She has had a cough ___ Monday.", options: ["for", "since", "ago", "during"], answer: 1, explain: "“Monday” es un punto de inicio, no una duración; se usa since." },
        { type: "fill", q: "The patient has had a ___ for three days. (fiebre)", answer: ["fever"], explain: "Fiebre = fever. Con una duración (three days) va “for”." },
        { type: "order", q: "Ordena la pregunta", words: ["have", "How", "long", "you", "had", "it"], answer: "How long have you had it", explain: "How long + have + sujeto + participio: “How long have you had it?”" },
        { type: "mc", q: "¿Cuál es la forma correcta para “Tengo dolor desde hace dos días”?", options: ["I have two days with pain.", "I have pain since two days.", "I have had pain for two days.", "I had pain for two days now."], answer: 2, explain: "Síntoma que sigue presente = present perfect + for + duración." },
        { type: "fill", q: "It started two days ___. (hace dos días)", answer: ["ago"], explain: "“Ago” va después de la cantidad de tiempo y exige past simple: “It started two days ago.”" },
        { type: "mc", q: "He ___ metformin every day for his diabetes.", options: ["is taking", "has taken", "took", "takes"], answer: 3, explain: "Es un hábito crónico: present simple, “takes”." }
      ]
    },
    {
      id: "m1l2",
      title: "Hacer buenas preguntas",
      minutes: 15,
      goal: "Al terminar podrás elegir entre preguntas abiertas y cerradas y formular preguntas directas e indirectas corteses para obtener la historia del dolor.",
      intro: "Una buena entrevista empieza con preguntas abiertas (“Tell me about…”) y se afina con preguntas cerradas de sí/no. En inglés la pregunta directa necesita auxiliar (do, does, did, have, is) y el orden cambia; en la pregunta indirecta cortés (“Could you tell me…?”) el orden vuelve a ser el de una afirmación. Error típico: olvidar el auxiliar (“You have pain?” funciona hablado, pero suena brusco) o decir “make a question” en lugar de “ask a question”.",
      vocab: [
        { en: "sharp", ipa: "/ʃɑːrp/", es: "punzante, agudo (dolor)", ex: "It is a sharp pain on the right side." },
        { en: "dull", ipa: "/dʌl/", es: "sordo, opaco (dolor)", ex: "She describes a dull ache in her lower back." },
        { en: "burning", ipa: "/ˈbɝː.nɪŋ/", es: "ardor, urente", ex: "He has a burning feeling in his chest after meals." },
        { en: "throbbing", ipa: "/ˈθrɑː.bɪŋ/", es: "pulsátil, palpitante", ex: "The headache is throbbing on one side." },
        { en: "constant", ipa: "/ˈkɑːn.stənt/", es: "constante", ex: "The pain is constant and does not go away." },
        { en: "intermittent", ipa: "/ˌɪn.tɚˈmɪt.ənt/", es: "intermitente", ex: "The cramps are intermittent, about every ten minutes." },
        { en: "trigger", ipa: "/ˈtrɪɡ.ɚ/", es: "desencadenante", ex: "Stress is a trigger for her migraines." },
        { en: "to relieve", ipa: "/tə rɪˈliːv/", es: "aliviar", ex: "Nothing relieves the pain." },
        { en: "to aggravate", ipa: "/tə ˈæɡ.rə.veɪt/", es: "agravar, empeorar", ex: "Deep breathing aggravates the pain." },
        { en: "severity", ipa: "/səˈvɛr.ə.ti/", es: "intensidad, gravedad", ex: "On a scale of one to ten, how would you rate the severity?" },
        { en: "frequency", ipa: "/ˈfriː.kwən.si/", es: "frecuencia", ex: "The frequency of the attacks has increased." },
        { en: "associated symptoms", ipa: "/əˈsoʊ.si.eɪ.tɪd ˈsɪmp.təmz/", es: "síntomas asociados", ex: "Any associated symptoms, such as nausea or sweating?" }
      ],
      phrases: [
        { en: "Can you tell me more about the pain?", es: "¿Puede contarme más sobre el dolor?", use: "Pregunta abierta para que el paciente describa con sus palabras." },
        { en: "Where exactly does it hurt?", es: "¿Dónde le duele exactamente?", use: "Para localizar el síntoma." },
        { en: "Could you tell me what makes it worse?", es: "¿Podría decirme qué lo empeora?", use: "Pregunta indirecta cortés; fíjate que no lleva auxiliar “does”." },
        { en: "Do you have any allergies?", es: "¿Tiene alguna alergia?", use: "Pregunta cerrada de sí/no, con “do”." },
        { en: "On a scale of one to ten, how bad is the pain?", es: "En una escala del uno al diez, ¿qué tan fuerte es el dolor?", use: "Estándar para medir la intensidad del dolor." },
        { en: "Does anything make it better?", es: "¿Hay algo que lo mejore?", use: "Factores que alivian; con sujeto singular se usa “does”." },
        { en: "I would like to ask you a few questions.", es: "Me gustaría hacerle unas preguntas.", use: "Para abrir la entrevista de forma amable." }
      ],
      text: {
        type: "dialogue",
        title: "Taking a pain history",
        context: "El médico explora un dolor abdominal con preguntas abiertas, cerradas e indirectas.",
        lines: [
          { who: "Doctor", en: "I would like to ask you a few questions about your stomach pain. Can you tell me more about it?" },
          { who: "Patient", en: "It started yesterday. It is here, on the right side, low down." },
          { who: "Doctor", en: "Where exactly does it hurt? Can you point with one finger?" },
          { who: "Patient", en: "Right here. It started around my belly button and then moved." },
          { who: "Doctor", en: "What does it feel like? Is it sharp, dull, or burning?" },
          { who: "Patient", en: "It is sharp, and it gets worse when I walk." },
          { who: "Doctor", en: "On a scale of one to ten, how bad is it?" },
          { who: "Patient", en: "About seven. Last night it was a five." },
          { who: "Doctor", en: "Could you tell me whether you have had nausea or vomiting?" },
          { who: "Patient", en: "I felt nauseous, and I vomited once this morning." },
          { who: "Doctor", en: "Do you have a fever?" },
          { who: "Patient", en: "I think so. I felt hot and sweaty last night." },
          { who: "Doctor", en: "Does anything make it better?" },
          { who: "Patient", en: "Not really. Lying still helps a little." },
          { who: "Doctor", en: "Thank you. I am going to examine your abdomen now." }
        ]
      },
      grammar: [
        "Pregunta directa: auxiliar + sujeto + verbo base. “Do you have a fever?” “Does it hurt when you cough?” “Did you vomit?” El verbo principal no lleva -s ni -ed: la lleva el auxiliar.",
        "Preguntas con wh- (what, where, when, how, why, who): wh- + auxiliar + sujeto + verbo. “Where does it hurt?” “How often do you get it?” Excepción: si wh- es el sujeto, no hay auxiliar: “What makes it worse?”",
        "Pregunta indirecta cortés: frase de cortesía + orden de afirmación, sin auxiliar. “Could you tell me where it hurts?” (no “where does it hurt”). Suena más amable con pacientes ansiosos.",
        "Abiertas (“Tell me about…”, “How would you describe…?”) dan información amplia; cerradas (“Do you…?”) confirman datos concretos. Empieza con abiertas y cierra con cerradas."
      ],
      tip: "En inglés se “ask a question”, nunca “make a question”. Y “How is the pain?” no es natural: pregunta “How bad is the pain?” o “What is the pain like?”.",
      exercises: [
        { type: "mc", q: "Which question is a polite indirect question?", options: ["Where does it hurt?", "Could you tell me where it hurts?", "Could you tell me where does it hurt?", "Where it hurts?"], answer: 1, explain: "En la pregunta indirecta el orden es el de una afirmación: “where it hurts”, sin “does”." },
        { type: "fill", q: "Can I ___ you a few questions? (hacerle)", answer: ["ask"], explain: "Se dice “ask a question”. “Make a question” es un calco del español." },
        { type: "order", q: "Ordena la pregunta", words: ["it", "does", "hurt", "Where"], answer: "Where does it hurt", explain: "wh- + auxiliar + sujeto + verbo base." },
        { type: "mc", q: "¿Cuál es una pregunta abierta?", options: ["Do you have chest pain?", "Is the pain sharp?", "Can you describe the pain?", "Did you vomit?"], answer: 2, explain: "No se contesta con sí/no; invita a describir con detalle." },
        { type: "fill", q: "What ___ the pain worse? (empeora)", answer: ["makes"], explain: "What es el sujeto, así que no lleva auxiliar “does”; el verbo va en tercera persona: “makes”." },
        { type: "order", q: "Ordena la pregunta", words: ["scale", "On", "of", "a", "one", "to", "ten", "how", "bad", "is", "it"], answer: "On a scale of one to ten how bad is it", explain: "Fórmula estándar para medir la intensidad del dolor." }
      ]
    },
    {
      id: "m1l3",
      title: "False friends y errores típicos",
      minutes: 15,
      goal: "Al terminar podrás evitar los falsos amigos y los calcos del español más peligrosos en medicina, y decir correctamente tu edad, tus estudios y tus síntomas.",
      intro: "Muchas palabras médicas en español se parecen a otras en inglés pero significan algo distinto. Algunos errores solo causan risa; otros pueden causar un malentendido clínico serio, como confundir “embarrassed” con “embarazada” o “constipated” con “congestionado”. Aprende los diez falsos amigos de esta lección y los calcos de estructura que delatan a un hispanohablante.",
      vocab: [
        { en: "constipated", ipa: "/ˈkɑːn.stɪ.peɪ.t̬ɪd/", es: "estreñido (NO congestionado; nariz tapada = stuffy nose)", ex: "I have been constipated for four days." },
        { en: "embarrassed", ipa: "/ɪmˈbɛr.əst/", es: "avergonzado (NO embarazada)", ex: "He felt embarrassed to talk about his symptoms." },
        { en: "pregnant", ipa: "/ˈprɛɡ.nənt/", es: "embarazada", ex: "Is there any chance you could be pregnant?" },
        { en: "intoxicated", ipa: "/ɪnˈtɑːk.sɪ.keɪ.t̬ɪd/", es: "ebrio o bajo efectos de una sustancia (intoxicación = poisoning)", ex: "The patient arrived intoxicated and confused." },
        { en: "sensitive", ipa: "/ˈsɛn.sə.t̬ɪv/", es: "sensible (sensible = sensible, sensato)", ex: "Her skin is sensitive to the sun." },
        { en: "sensible", ipa: "/ˈsɛn.sə.bəl/", es: "sensato, razonable (NO sensible)", ex: "Taking a rest is a sensible decision." },
        { en: "to attend", ipa: "/tə əˈtɛnd/", es: "asistir a (NO ayudar)", ex: "I attend rounds every morning." },
        { en: "to assist", ipa: "/tə əˈsɪst/", es: "ayudar, asistir (en una cirugía)", ex: "She assisted in the operation." },
        { en: "actually", ipa: "/ˈæk.tʃu.ə.li/", es: "en realidad (NO actualmente; actualmente = currently)", ex: "Actually, the pain started last week, not yesterday." },
        { en: "currently", ipa: "/ˈkɝː.ənt.li/", es: "actualmente", ex: "He is currently taking two antibiotics." },
        { en: "to molest", ipa: "/tə məˈlɛst/", es: "abusar sexualmente (NO molestar; molestar = to bother)", ex: "Does the pain bother you at night?" },
        { en: "medical school", ipa: "/ˈmɛd.ɪ.kəl skuːl/", es: "facultad de medicina (carrera universitaria; “career” = trayectoria profesional)", ex: "I am in my last year of medical school." }
      ],
      phrases: [
        { en: "I am twenty-five years old.", es: "Tengo 25 años.", use: "Edad: en inglés se usa “be”, no “have”. “I have 25 years” es el error más común." },
        { en: "I have not had a bowel movement in three days.", es: "No he evacuado en tres días.", use: "Forma clara y neutral de describir estreñimiento." },
        { en: "Are you pregnant, or could you be pregnant?", es: "¿Está embarazada, o podría estarlo?", use: "Antes de imágenes, fármacos o procedimientos." },
        { en: "I am currently taking no medication.", es: "Actualmente no tomo ningún medicamento.", use: "Para antecedentes farmacológicos." },
        { en: "May I ask you a question?", es: "¿Puedo hacerle una pregunta?", use: "Correcto: “ask a question”, no “make a question”." },
        { en: "Is it bothering you at night?", es: "¿Le molesta por las noches?", use: "Para síntomas molestos; “molest” nunca." },
        { en: "I am a medical student at UANL.", es: "Soy estudiante de medicina en la UANL.", use: "Para presentarte; “career” no sirve para decir carrera universitaria." }
      ],
      text: {
        type: "reading",
        title: "Lost in translation",
        context: "Una anécdota ficticia sobre errores frecuentes de hispanohablantes en un hospital.",
        paragraphs: [
          "During her first week in a U.S. clinic, Dr. Ana Torres made three mistakes that she will never forget. A patient came in with a stuffy nose and Ana asked, “Are you constipated?” The patient looked confused. She should have said, “Is your nose stuffed up?” Constipated means that someone has trouble moving their bowels.",
          "Later, a young woman looked at the floor while Ana examined her. Ana told her colleague, “She is very embarrassed.” In Spanish she meant “está embarazada”, but in English she was saying that the woman felt ashamed. Pregnant is the word for a woman who is expecting a baby.",
          "At the end of the day, a nurse asked Ana about her studies. “I have 29 years and I finished my career last year,” she answered. The nurse smiled politely. A native speaker would say, “I am 29 years old, and I graduated from medical school last year.”",
          "Ana learned a useful rule: when a word looks too similar to Spanish, check it. She now keeps a small list of false friends in her pocket, and she checks it before every shift. The next day she asked her patients, “Does the pain bother you?” and nobody was confused."
        ]
      },
      grammar: [
        "Edad: “I am 25 years old” (verbo be). Con “have” se expresan posesiones y síntomas (“I have a headache”), no la edad, el hambre ni el miedo: “I am hungry”, “I am afraid”.",
        "“Actually” introduce una corrección o un dato sorprendente: “Actually, it started last week.” Para decir “ahora” usa currently, at the moment o now.",
        "“Attend” = estar presente (rounds, classes, a clinic); “assist” = ayudar, o ser ayudante en un procedimiento. “To attend a patient” existe, pero es formal; en general di “to see a patient” o “to treat a patient”.",
        "“Sensible” = razonable; “sensitive” = que reacciona con facilidad (piel sensible, sensible a la luz). “Intoxicated” suele referirse a alcohol o drogas; para envenenamiento accidental o por alimentos se dice poisoning (food poisoning)."
      ],
      tip: "Antes de usar una palabra médica que “suena igual” en español, pregúntate si podría ser un falso amigo. Si dudas, usa una frase más simple: “I have not had a bowel movement” nunca se malinterpreta.",
      exercises: [
        { type: "mc", q: "A patient says “I am constipated.” What does she mean?", options: ["Her nose is blocked.", "She has trouble moving her bowels.", "She has a cold.", "She is embarrassed."], answer: 1, explain: "Constipated es estreñido; nariz tapada es “stuffy nose” o “congested”." },
        { type: "fill", q: "Is there any chance you could be ___? (embarazada)", answer: ["pregnant"], explain: "Embarazada = pregnant. “Embarrassed” significa avergonzado." },
        { type: "mc", q: "How do you say “Tengo 25 años”?", options: ["I have 25 years.", "I am 25 years.", "I have 25 years old.", "I am 25 years old."], answer: 3, explain: "La edad se expresa con be + years old." },
        { type: "fill", q: "Does the pain ___ you at night? (molestar)", answer: ["bother"], explain: "Molestar = to bother. “To molest” significa abusar sexualmente." },
        { type: "order", q: "Ordena la frase", words: ["currently", "taking", "He", "is", "two", "antibiotics"], answer: "He is currently taking two antibiotics", explain: "“Currently” significa actualmente. “Actually” significaría “en realidad”." },
        { type: "mc", q: "Which sentence is correct?", options: ["Can I make you a question?", "Can I ask you a question?", "Can I do you a question?", "Can I put you a question?"], answer: 1, explain: "En inglés las preguntas se hacen con “ask”." }
      ]
    },
    {
      id: "m1l4",
      title: "Números, fechas, dosis y signos vitales",
      minutes: 15,
      goal: "Al terminar podrás decir en voz alta presión arterial, decimales, dosis, temperaturas, horas y fechas al estilo estadounidense.",
      intro: "Los números son donde más se cuela un error con consecuencias reales. En EE. UU. la fecha va mes/día/año, la temperatura se da en °F, el peso en libras y la presión se dice “120 over 80”. Además, los números terminados en -teen y -ty (fifteen / fifty) se parecen al oído: practica el acento en -TEEN (thir-TEEN) frente a THIR-ty.",
      vocab: [
        { en: "blood pressure", ipa: "/blʌd ˈprɛʃ.ɚ/", es: "presión arterial (120/80 = one-twenty over eighty)", ex: "Her blood pressure is 120 over 80." },
        { en: "heart rate", ipa: "/hɑːrt reɪt/", es: "frecuencia cardiaca", ex: "His heart rate is 88 beats per minute." },
        { en: "respiratory rate", ipa: "/ˈrɛs.pɚ.ə.tɔːr.i reɪt/", es: "frecuencia respiratoria", ex: "Her respiratory rate is 18 breaths per minute." },
        { en: "oxygen saturation", ipa: "/ˈɑːk.sɪ.dʒən ˌsætʃ.əˈreɪ.ʃən/", es: "saturación de oxígeno", ex: "His oxygen saturation is 96 percent on room air." },
        { en: "temperature", ipa: "/ˈtɛm.prə.tʃɚ/", es: "temperatura (98.6 °F = 37 °C)", ex: "Her temperature is 101.2 degrees Fahrenheit." },
        { en: "milligram (mg)", ipa: "/ˈmɪl.ɪ.ɡræm/", es: "miligramo (mg)", ex: "Take 500 milligrams twice a day." },
        { en: "microgram (mcg)", ipa: "/ˈmaɪ.kroʊ.ɡræm/", es: "microgramo (mcg; no se escribe µg en recetas)", ex: "The dose is 50 micrograms once daily." },
        { en: "milliliter (mL)", ipa: "/ˈmɪl.ɪ.liː.tɚ/", es: "mililitro (mL)", ex: "Give 10 milliliters of the syrup." },
        { en: "tablet", ipa: "/ˈtæb.lət/", es: "tableta, comprimido", ex: "Take one tablet by mouth every morning." },
        { en: "twice a day", ipa: "/twaɪs ə deɪ/", es: "dos veces al día (BID)", ex: "Take the antibiotic twice a day with food." },
        { en: "every eight hours", ipa: "/ˈɛv.ri eɪt ˈaʊ.ɚz/", es: "cada ocho horas (q8h)", ex: "Take this medicine every eight hours." },
        { en: "a.m. / p.m.", ipa: "/ˌeɪ ˈɛm/ /ˌpiː ˈɛm/", es: "mañana / tarde-noche (formato de 12 horas)", ex: "Your appointment is at 2:30 p.m." }
      ],
      phrases: [
        { en: "Your blood pressure is one-twenty over eighty.", es: "Su presión es 120/80.", use: "Siempre “over”, nunca “slash” ni “divided by”." },
        { en: "Your temperature is ninety-eight point six degrees.", es: "Su temperatura es 37 °C (98.6 °F).", use: "En EE. UU. se dice en Fahrenheit; el punto decimal se lee “point”." },
        { en: "Take one tablet by mouth twice a day.", es: "Tome una tableta por vía oral dos veces al día.", use: "Instrucción estándar de receta." },
        { en: "Your appointment is on March fourth at two thirty p.m.", es: "Su cita es el 4 de marzo a las 2:30 p. m.", use: "Fechas con ordinal y hora de 12 horas." },
        { en: "The dose is five hundred milligrams every eight hours.", es: "La dosis es 500 mg cada ocho horas.", use: "Para dictar o confirmar una dosis." },
        { en: "Her oxygen saturation is ninety-six percent on room air.", es: "Su saturación es 96 % sin oxígeno suplementario.", use: "En notas y presentaciones de caso." },
        { en: "How much do you weigh in pounds?", es: "¿Cuánto pesa en libras?", use: "En EE. UU. el paciente suele dar su peso en libras." }
      ],
      text: {
        type: "dialogue",
        title: "Vital signs at triage",
        context: "Una enfermera presenta los signos vitales de un paciente al médico de guardia.",
        lines: [
          { who: "Nurse", en: "This is Mr. Collins, sixty-two years old, with chest tightness since eight a.m." },
          { who: "Doctor", en: "Thanks. What are his vitals?" },
          { who: "Nurse", en: "Blood pressure is one-fifty over ninety, heart rate is one hundred and four, and respiratory rate is twenty-two." },
          { who: "Doctor", en: "What is his temperature?" },
          { who: "Nurse", en: "Ninety-nine point one degrees Fahrenheit, so no fever." },
          { who: "Doctor", en: "And his oxygen saturation?" },
          { who: "Nurse", en: "Eighty-nine percent on room air." },
          { who: "Doctor", en: "How much does he weigh?" },
          { who: "Nurse", en: "He says two hundred and ten pounds, so about ninety-five kilograms." },
          { who: "Doctor", en: "Please give him 325 milligrams of aspirin to chew." },
          { who: "Nurse", en: "Three twenty-five milligrams of aspirin, chewed. Anything else?" },
          { who: "Doctor", en: "Yes. Start oxygen at two liters per minute and repeat his vitals in fifteen minutes." },
          { who: "Nurse", en: "Okay. The last dose of his heart medication was at seven fifteen this morning." }
        ]
      },
      grammar: [
        "Presión arterial: “120/80” = “one-twenty over eighty”. Los números se leen por pares: 150 = one-fifty, 104 = one-oh-four, 2000 = two thousand. Los decimales se leen con “point”: 37.5 = thirty-seven point five; 0.5 = zero point five (o point five).",
        "Dosis: mg = milligram(s), mcg = microgram(s) (nunca µg en receta), mL = milliliter(s). “500 mg” = five hundred milligrams. Confundir mg con mcg multiplica la dosis por 1000.",
        "Temperatura: °C = (°F − 32) × 5/9. Referencias útiles: 98.6 °F = 37 °C; 100.4 °F = 38 °C (umbral habitual de fiebre); 102 °F ≈ 39 °C. Peso: 1 kg = 2.2 lb.",
        "Fechas EE. UU.: mes/día/año. 03/04/2026 = March 4, 2026 (en México sería 3 de abril). Se dice “March fourth, twenty twenty-six”. Horas: 12 h con a.m./p.m.; en hospital también 24 h, “fourteen-thirty” = 2:30 p.m."
      ],
      tip: "Cuida el acento: fifTEEN (15) vs FIFty (50). Cuando haya duda, repite el número dígito por dígito: “fifteen, one-five”. En medicamentos, repetir la dosis en voz alta es una medida de seguridad estándar.",
      exercises: [
        { type: "mc", q: "How do you say 120/80 for blood pressure?", options: ["one-twenty slash eighty", "one-twenty over eighty", "one hundred twenty divided eighty", "twelve over eight"], answer: 1, explain: "Se dice “over”: one-twenty over eighty." },
        { type: "fill", q: "The dose is five hundred ___. (miligramos)", answer: ["milligrams", "milligram"], explain: "mg = milligrams. mcg = micrograms, que es mil veces menos." },
        { type: "mc", q: "Which Fahrenheit temperature is closest to 38 °C?", options: ["98.6 °F", "100.4 °F", "104 °F", "95 °F"], answer: 1, explain: "(38 × 9/5) + 32 = 100.4 °F, el umbral habitual de fiebre." },
        { type: "order", q: "Ordena la instrucción", words: ["tablet", "Take", "one", "twice", "a", "day"], answer: "Take one tablet twice a day", explain: "Estructura típica de una receta: verbo + cantidad + forma + frecuencia." },
        { type: "mc", q: "In the United States, 03/04/2026 means:", options: ["April 3, 2026", "March 4, 2026", "March 20, 2004", "April 30, 2026"], answer: 1, explain: "El formato estadounidense es mes/día/año." },
        { type: "fill", q: "Her temperature is 101 degrees ___. (Fahrenheit)", answer: ["fahrenheit"], explain: "En EE. UU. la temperatura corporal se da en grados Fahrenheit." }
      ]
    }
  ]
});
