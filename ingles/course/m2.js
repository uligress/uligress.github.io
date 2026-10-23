(window.COURSE = window.COURSE || []).push({
  id: "m2", n: 2,
  title: "Terminología médica",
  en: "Medical terminology",
  summary: "Aprendes a descomponer términos médicos en prefijo, raíz y sufijo, a nombrar la anatomía con precisión y a pronunciar con el acento correcto las palabras que más se confunden.",
  lessons: [
    {
      id: "m2l1",
      title: "Prefijos que abren cualquier término",
      minutes: 15,
      goal: "Al terminar podrás deducir el significado de términos nuevos a partir de sus prefijos más frecuentes (hyper-, hypo-, tachy-, brady-, dys-, a-/an-, poly-, oligo-, hemi-, peri-, endo-, intra-, sub-).",
      intro: "Casi todo el vocabulario médico en inglés viene del griego y el latín, igual que en español, así que ya conoces más de lo que crees. El prefijo cambia el sentido de la raíz: hyper- es “por encima”, hypo- es “por debajo”. El error típico no es de significado sino de pronunciación: hypertension y hypotension suenan casi igual en boca de un hispanohablante, y confundirlas es peligroso.",
      vocab: [
        { en: "hypertension", ipa: "/ˌhaɪ.pɚˈtɛn.ʃən/", es: "hiper- (exceso) + tensión: presión arterial alta", ex: "She has a history of hypertension." },
        { en: "hypotension", ipa: "/ˌhaɪ.poʊˈtɛn.ʃən/", es: "hipo- (defecto) + tensión: presión arterial baja", ex: "The patient became hypotensive after the anesthesia." },
        { en: "tachycardia", ipa: "/ˌtæk.ɪˈkɑːr.di.ə/", es: "tachy- (rápido) + cardia: taquicardia", ex: "His ECG showed sinus tachycardia." },
        { en: "bradycardia", ipa: "/ˌbræd.ɪˈkɑːr.di.ə/", es: "brady- (lento) + cardia: bradicardia", ex: "The medication can cause bradycardia." },
        { en: "dyspnea", ipa: "/ˈdɪsp.ni.ə/", es: "dys- (difícil, anormal) + pnea: disnea", ex: "He reports dyspnea on exertion." },
        { en: "anemia", ipa: "/əˈniː.mi.ə/", es: "a-/an- (sin) + hemia: anemia", ex: "The lab results confirm iron deficiency anemia." },
        { en: "polyuria", ipa: "/ˌpɑː.liˈjʊr.i.ə/", es: "poly- (mucho) + uria: poliuria", ex: "Polyuria and thirst are classic signs of diabetes." },
        { en: "oliguria", ipa: "/ˌɑː.lɪˈɡjʊr.i.ə/", es: "oligo- (poco) + uria: oliguria", ex: "The patient developed oliguria after the surgery." },
        { en: "hemiparesis", ipa: "/ˌhɛm.i.pəˈriː.sɪs/", es: "hemi- (mitad) + paresis: debilidad de un hemicuerpo", ex: "Right hemiparesis suggests a left brain lesion." },
        { en: "pericarditis", ipa: "/ˌpɛr.ɪ.kɑːrˈdaɪ.t̬ɪs/", es: "peri- (alrededor) + carditis: inflamación del pericardio", ex: "Sharp chest pain that improves when leaning forward suggests pericarditis." },
        { en: "intravenous (IV)", ipa: "/ˌɪn.trəˈviː.nəs/", es: "intra- (dentro de) + vena: intravenoso", ex: "She received intravenous fluids in the ER." },
        { en: "subcutaneous", ipa: "/ˌsʌb.kjuːˈteɪ.ni.əs/", es: "sub- (debajo) + cutáneo: subcutáneo", ex: "Insulin is given as a subcutaneous injection." }
      ],
      phrases: [
        { en: "The patient is tachycardic and hypotensive.", es: "El paciente está taquicárdico e hipotenso.", use: "Frase típica de presentación de caso; fíjate que se usa el adjetivo (-ic, -ive)." },
        { en: "No history of hypertension.", es: "Sin antecedentes de hipertensión.", use: "Para los antecedentes en una nota o presentación oral." },
        { en: "He has had polyuria and polydipsia for a week.", es: "Tiene poliuria y polidipsia desde hace una semana.", use: "Para describir síntomas de hiperglucemia." },
        { en: "She has right-sided hemiparesis.", es: "Tiene hemiparesia derecha.", use: "En exploración neurológica." },
        { en: "We are going to start IV fluids.", es: "Vamos a empezar líquidos intravenosos.", use: "Orden o aviso habitual en urgencias." },
        { en: "The injection is subcutaneous, not intramuscular.", es: "La inyección es subcutánea, no intramuscular.", use: "Para confirmar la vía de administración." }
      ],
      text: {
        type: "dialogue",
        title: "Morning rounds",
        context: "Un residente presenta a un paciente ante su adscrito durante la visita matutina.",
        lines: [
          { who: "Resident", en: "This is a sixty-year-old man admitted with dyspnea and swelling in both legs." },
          { who: "Attending", en: "Does he have a history of hypertension?" },
          { who: "Resident", en: "Yes, for ten years. This morning he is tachycardic, with a heart rate of one hundred and ten." },
          { who: "Attending", en: "What about his blood pressure?" },
          { who: "Resident", en: "He is hypotensive, ninety over sixty, which is lower than yesterday." },
          { who: "Attending", en: "Any urine output overnight?" },
          { who: "Resident", en: "He has oliguria. We measured only two hundred milliliters in twelve hours." },
          { who: "Attending", en: "Did you check his hemoglobin?" },
          { who: "Resident", en: "Yes. He has mild anemia, hemoglobin of ten grams per deciliter." },
          { who: "Attending", en: "Is there any neurological deficit?" },
          { who: "Resident", en: "No hemiparesis, and he is alert and oriented." },
          { who: "Attending", en: "Good. Continue the intravenous fluids slowly and order an echocardiogram." }
        ]
      },
      grammar: [
        "Prefijos de cantidad: poly- (mucho), oligo- (poco), hemi- (mitad), a-/an- (sin, falta de). “An-” se usa delante de vocal: anemia, anuria, analgesic.",
        "Prefijos de velocidad y dificultad: tachy- (rápido), brady- (lento), dys- (difícil o anormal). Dyspnea, dysphagia, dysuria, dysplasia.",
        "Prefijos de posición y exceso: hyper- (por encima, exceso), hypo- (por debajo, defecto), peri- (alrededor), endo- (dentro), intra- (dentro de), sub- (debajo). Hyperglycemia, hypoglycemia, pericardium, endocarditis, intravenous, subcutaneous.",
        "Para el adjetivo, el inglés cambia el final: tachycardia → tachycardic; hypotension → hypotensive; anemia → anemic; hypertension → hypertensive."
      ],
      tip: "No confundas hypertension (alta) con hypotension (baja) al hablar: marca bien la sílaba -PER- frente a -PO-. Cuando haya riesgo, di “high blood pressure” o “low blood pressure”.",
      exercises: [
        { type: "mc", q: "What does “bradycardia” mean?", options: ["Fast heart rate", "Slow heart rate", "Irregular heart rhythm", "Heart enlargement"], answer: 1, explain: "Brady- significa lento; tachy- significa rápido." },
        { type: "fill", q: "Low blood pressure is called ___. (hipotensión)", answer: ["hypotension"], explain: "Hypo- = por debajo, tension = presión." },
        { type: "mc", q: "Which term means “too little urine”?", options: ["Polyuria", "Hematuria", "Oliguria", "Dysuria"], answer: 2, explain: "Oligo- = poco. Polyuria es mucha orina, dysuria es dolor al orinar." },
        { type: "order", q: "Ordena la frase", words: ["is", "The", "tachycardic", "patient", "hypotensive", "and"], answer: "The patient is tachycardic and hypotensive", explain: "Se usan los adjetivos tachycardic y hypotensive después de “is”." },
        { type: "mc", q: "An injection under the skin is ___.", options: ["intravenous", "subcutaneous", "intramuscular", "endocardial"], answer: 1, explain: "Sub- = debajo; cutaneous = de la piel." },
        { type: "fill", q: "Difficulty breathing is called ___. (disnea)", answer: ["dyspnea", "dyspnoea"], explain: "Dys- = difícil, pnea = respiración." }
      ]
    },
    {
      id: "m2l2",
      title: "Sufijos: inflamación, cirugía y enfermedad",
      minutes: 15,
      goal: "Al terminar podrás interpretar y construir términos médicos con los sufijos -itis, -ectomy, -otomy, -ostomy, -plasty, -scopy, -emia, -uria, -algia, -pathy, -osis, -megaly y -penia.",
      intro: "El sufijo suele decir qué le pasó al órgano: inflamación (-itis), extirpación (-ectomy), apertura (-ostomy), enfermedad (-pathy) o cantidad anormal en sangre u orina (-emia, -uria). Aprendiendo unos trece sufijos descifras cientos de palabras. Cuidado con el trío -otomy / -ostomy / -ectomy: cortar, abrir de forma permanente y quitar son cosas distintas.",
      vocab: [
        { en: "appendicitis", ipa: "/əˌpɛn.dɪˈsaɪ.t̬ɪs/", es: "-itis (inflamación): inflamación del apéndice", ex: "He was admitted with acute appendicitis." },
        { en: "appendectomy", ipa: "/ˌæp.ənˈdɛk.tə.mi/", es: "-ectomy (extirpación): apendicectomía", ex: "She had an appendectomy yesterday." },
        { en: "tracheostomy", ipa: "/ˌtreɪ.kiˈɑː.stə.mi/", es: "-ostomy (abertura permanente o larga): traqueostomía; -otomy sería solo la incisión", ex: "The patient needed a tracheostomy after prolonged intubation." },
        { en: "angioplasty", ipa: "/ˈæn.dʒi.oʊ.plæs.ti/", es: "-plasty (reparación o reconstrucción): angioplastia", ex: "The patient underwent coronary angioplasty with a stent." },
        { en: "colonoscopy", ipa: "/ˌkoʊ.lənˈɑː.skə.pi/", es: "-scopy (observación con un instrumento): colonoscopia", ex: "A colonoscopy is recommended every ten years after age fifty." },
        { en: "hyperglycemia", ipa: "/ˌhaɪ.pɚ.ɡlaɪˈsiː.mi.ə/", es: "-emia (en la sangre): glucosa alta en sangre", ex: "Hyperglycemia was the first sign of diabetes." },
        { en: "hematuria", ipa: "/ˌhiː.məˈtʊr.i.ə/", es: "-uria (en la orina): sangre en la orina", ex: "Painless hematuria needs further evaluation." },
        { en: "arthralgia", ipa: "/ɑːrˈθræl.dʒə/", es: "-algia (dolor): dolor articular", ex: "She reports arthralgia in both knees." },
        { en: "neuropathy", ipa: "/nʊˈrɑː.pə.θi/", es: "-pathy (enfermedad): enfermedad de un nervio", ex: "Diabetic neuropathy causes numbness in the feet." },
        { en: "fibrosis", ipa: "/faɪˈbroʊ.sɪs/", es: "-osis (proceso o estado anormal): cicatrización excesiva", ex: "Pulmonary fibrosis makes the lungs stiff." },
        { en: "hepatomegaly", ipa: "/ˌhɛp.ə.toʊˈmɛɡ.ə.li/", es: "-megaly (agrandamiento): agrandamiento del hígado", ex: "The exam shows hepatomegaly, with the liver edge 4 cm below the ribs." },
        { en: "neutropenia", ipa: "/ˌnuː.troʊˈpiː.ni.ə/", es: "-penia (disminución): neutrófilos bajos", ex: "Chemotherapy can cause neutropenia and infections." }
      ],
      phrases: [
        { en: "The patient has acute appendicitis and needs an appendectomy.", es: "El paciente tiene apendicitis aguda y necesita una apendicectomía.", use: "Estructura típica diagnóstico + procedimiento." },
        { en: "He has had arthralgia for two weeks.", es: "Tiene artralgia desde hace dos semanas.", use: "Para describir dolor articular en la anamnesis." },
        { en: "We will schedule a colonoscopy.", es: "Programaremos una colonoscopia.", use: "Para explicar un estudio al paciente." },
        { en: "Her labs show neutropenia.", es: "Sus laboratorios muestran neutropenia.", use: "Para reportar resultados de laboratorio." },
        { en: "The liver is enlarged, which is called hepatomegaly.", es: "El hígado está agrandado, lo que se llama hepatomegalia.", use: "Para explicar un hallazgo al paciente o a un colega." },
        { en: "He needs a colostomy after the surgery.", es: "Necesita una colostomía después de la cirugía.", use: "-ostomy: abertura que se crea a propósito." }
      ],
      text: {
        type: "dialogue",
        title: "Explaining a diagnosis",
        context: "Una médica explica a un paciente los términos de su diagnóstico, apoyándose en los sufijos.",
        lines: [
          { who: "Doctor", en: "Your ultrasound shows inflammation of your appendix. We call it appendicitis." },
          { who: "Patient", en: "Does -itis always mean inflammation?" },
          { who: "Doctor", en: "Yes. For example, gastritis is inflammation of the stomach." },
          { who: "Patient", en: "And what is the treatment?" },
          { who: "Doctor", en: "You need an appendectomy. That means removing the appendix." },
          { who: "Patient", en: "I have also had pain in my joints for a month." },
          { who: "Doctor", en: "That is called arthralgia. Algia means pain, so arthralgia is joint pain." },
          { who: "Patient", en: "My father had an operation to open the windpipe. What was it?" },
          { who: "Doctor", en: "It is probably a tracheostomy. Ostomy means creating an opening." },
          { who: "Patient", en: "And what does -emia mean? My blood test says leukemia is not present." },
          { who: "Doctor", en: "It refers to the blood. Anemia means low red cells, and hyperglycemia means high sugar in the blood." },
          { who: "Patient", en: "Thank you, I understand now." },
          { who: "Doctor", en: "Good. We will also do a colonoscopy later to look inside your colon." }
        ]
      },
      grammar: [
        "Inflamación: -itis (gastritis, hepatitis, arthritis). Enfermedad general: -pathy (cardiomyopathy, neuropathy). Estado o proceso anormal: -osis (fibrosis, cirrhosis, thrombosis). Ojo: -osis también se usa en términos como acidosis.",
        "Cirugía: -ectomy = extirpar (appendectomy), -otomy = cortar o hacer una incisión (tracheotomy, thoracotomy), -ostomy = crear una abertura permanente (colostomy, tracheostomy), -plasty = reparar o reconstruir (rhinoplasty, angioplasty). Procedimiento diagnóstico: -scopy (endoscopy, bronchoscopy).",
        "Sangre y orina: -emia = en la sangre (anemia, hyperglycemia, bacteremia); -uria = en la orina (hematuria, glycosuria, proteinuria). Disminución: -penia (leukopenia, thrombocytopenia, neutropenia). Agrandamiento: -megaly (cardiomegaly, splenomegaly).",
        "Dolor: -algia o -dynia (neuralgia, arthralgia). Ejemplo para fijar: gastr- + -itis = gastritis (inflamación del estómago); gastr- + -ectomy = gastrectomy (quitar el estómago); gastr- + -ostomy = gastrostomy (abertura en el estómago)."
      ],
      tip: "Para recordar el trío quirúrgico: -ectomy = “fuera”, -otomy = “corte”, -ostomy = “abertura permanente”. Las dos últimas solo se diferencian por una letra, pero cambian por completo el procedimiento.",
      exercises: [
        { type: "mc", q: "“Hepatomegaly” means:", options: ["Inflammation of the liver", "Pain in the liver", "Enlargement of the liver", "Removal of the liver"], answer: 2, explain: "Hepato- = hígado, -megaly = agrandamiento." },
        { type: "fill", q: "Surgical removal of the appendix is an ___. (apendicectomía)", answer: ["appendectomy"], explain: "-ectomy significa extirpación." },
        { type: "mc", q: "Which suffix means “pain”?", options: ["-penia", "-algia", "-uria", "-plasty"], answer: 1, explain: "-algia = dolor (arthralgia, neuralgia)." },
        { type: "order", q: "Ordena la frase", words: ["has", "arthralgia", "He", "had", "for", "two", "weeks"], answer: "He has had arthralgia for two weeks", explain: "Present perfect con for, como en el módulo 1." },
        { type: "mc", q: "A permanent opening created in the colon is a ___.", options: ["colectomy", "colostomy", "colonoscopy", "colitis"], answer: 1, explain: "-ostomy = crear una abertura; colectomy sería quitar el colon." },
        { type: "fill", q: "Blood in the urine is called ___. (hematuria)", answer: ["hematuria"], explain: "Hemat- = sangre, -uria = en la orina." }
      ]
    },
    {
      id: "m2l3",
      title: "Anatomía, posición y lenguaje del paciente",
      minutes: 15,
      goal: "Al terminar podrás usar los términos de dirección, cuadrantes y posición corporal, y traducir entre el lenguaje cotidiano del paciente y el término técnico.",
      intro: "Un paciente dice “my tummy hurts” y la nota clínica dice “abdominal pain”. Necesitas los dos registros: el técnico para escribir y presentar, el cotidiano para explicar y entender. Además, los términos de dirección (proximal, distal, anterior, posterior) y los cuadrantes del abdomen son el mapa con el que los médicos de cualquier país describen dónde está un hallazgo.",
      vocab: [
        { en: "proximal", ipa: "/ˈprɑːk.sɪ.məl/", es: "proximal (más cerca del tronco o del origen)", ex: "The fracture is in the proximal femur." },
        { en: "distal", ipa: "/ˈdɪs.təl/", es: "distal (más lejos del tronco o del origen)", ex: "Check the pulse distal to the injury." },
        { en: "bilateral", ipa: "/baɪˈlæt.ɚ.əl/", es: "bilateral, en ambos lados", ex: "She has bilateral leg swelling." },
        { en: "medial / lateral", ipa: "/ˈmiː.di.əl/ /ˈlæt.ɚ.əl/", es: "medial (hacia la línea media) / lateral (hacia el lado)", ex: "The pain is on the lateral side of his knee." },
        { en: "anterior / posterior", ipa: "/ænˈtɪr.i.ɚ/ /pɑːˈstɪr.i.ɚ/", es: "anterior (frente) / posterior (atrás)", ex: "The wound is on the posterior chest wall." },
        { en: "right upper quadrant (RUQ)", ipa: "/raɪt ˈʌp.ɚ ˈkwɑː.drənt/", es: "cuadrante superior derecho del abdomen", ex: "Pain in the right upper quadrant may indicate gallbladder disease." },
        { en: "supine", ipa: "/suːˈpaɪn/", es: "decúbito supino (boca arriba)", ex: "Please lie supine on the exam table." },
        { en: "belly / abdomen", ipa: "/ˈbɛl.i/ /ˈæb.də.mən/", es: "barriga, panza (coloquial) / abdomen (técnico). “Tummy” lo usan niños y familias", ex: "Where in your belly do you feel the pain?" },
        { en: "collarbone / clavicle", ipa: "/ˈkɑː.lɚ.boʊn/ /ˈklæv.ɪ.kəl/", es: "clavícula (coloquial / técnico)", ex: "He broke his collarbone in a bike accident." },
        { en: "breastbone / sternum", ipa: "/ˈbrɛst.boʊn/ /ˈstɝː.nəm/", es: "esternón (coloquial / técnico)", ex: "The pain is behind my breastbone." },
        { en: "shoulder blade / scapula", ipa: "/ˈʃoʊl.dɚ bleɪd/ /ˈskæp.jə.lə/", es: "omóplato (coloquial / técnico)", ex: "The pain goes to my shoulder blade." },
        { en: "kneecap / patella", ipa: "/ˈniː.kæp/ /pəˈtɛl.ə/", es: "rótula (coloquial / técnico)", ex: "His kneecap was swollen after the fall." }
      ],
      phrases: [
        { en: "Can you show me where it hurts?", es: "¿Puede mostrarme dónde le duele?", use: "Cuando el paciente usa términos vagos." },
        { en: "Please lie on your back.", es: "Por favor, acuéstese boca arriba.", use: "Para el examen del abdomen o del tórax; supine = on your back." },
        { en: "Is the pain on one side or both sides?", es: "¿El dolor es de un lado o de los dos?", use: "Para saber si es unilateral o bilateral." },
        { en: "Does the pain move anywhere else?", es: "¿El dolor se va a otro lugar?", use: "Para investigar irradiación." },
        { en: "I am going to press on your belly. Tell me if it hurts.", es: "Voy a presionar su abdomen. Dígame si duele.", use: "Antes de palpar." },
        { en: "The pain is in the right upper quadrant.", es: "El dolor está en el cuadrante superior derecho.", use: "Para describir localización en notas y presentaciones." }
      ],
      text: {
        type: "dialogue",
        title: "From tummy to abdomen",
        context: "Una residente interroga a una paciente y traduce al lenguaje técnico para su nota.",
        lines: [
          { who: "Doctor", en: "Good afternoon. Where exactly does it hurt?" },
          { who: "Patient", en: "Here, in my tummy, on the right side under my ribs." },
          { who: "Doctor", en: "Okay, so the right upper part of your abdomen. Does it move anywhere else?" },
          { who: "Patient", en: "Yes, it goes to my shoulder blade, on the back." },
          { who: "Doctor", en: "Does anything make it worse, such as eating fatty food?" },
          { who: "Patient", en: "Yes, it started after a big dinner. It is sharp, and it comes and goes." },
          { who: "Doctor", en: "Please lie on your back, with your knees slightly bent." },
          { who: "Patient", en: "Like this?" },
          { who: "Doctor", en: "Yes, perfect. I am going to press gently on your belly. Tell me if it hurts." },
          { who: "Patient", en: "Ouch. There. Right under my ribs." },
          { who: "Doctor", en: "Thank you. You can sit up. The pain is in the right upper quadrant, and we will order an ultrasound." },
          { who: "Patient", en: "Is it my gallbladder?" },
          { who: "Doctor", en: "It may be. The ultrasound will tell us more." }
        ]
      },
      grammar: [
        "Direcciones: proximal/distal se refieren al origen de un miembro (el hombro es proximal y la mano distal); medial/lateral al plano medio del cuerpo; anterior/posterior al frente y a la espalda; superior/inferior arriba y abajo.",
        "Abdomen en cuadrantes: right upper (RUQ), left upper (LUQ), right lower (RLQ) y left lower (LLQ). Se dice “in the right upper quadrant”. Más detalle: epigastric (arriba, centro), umbilical (alrededor del ombligo), suprapubic (abajo, centro).",
        "Posiciones: supine = boca arriba; prone = boca abajo; lateral decubitus = de lado; sitting/upright = sentado. “On your back” y “on your stomach” son las versiones para el paciente.",
        "Registro: con el paciente usa el término cotidiano o ambos (“your collarbone, the clavicle”); en la nota y en la presentación usa el técnico. El adjetivo para “ambos lados” es bilateral; para un solo lado, unilateral."
      ],
      tip: "“Stomach” en el habla cotidiana significa todo el vientre; en medicina solo el órgano. Cuando el paciente diga “my stomach hurts”, pregunta dónde exactamente: puede ser un dolor de abdomen y no del estómago.",
      exercises: [
        { type: "mc", q: "The wrist is ___ to the elbow.", options: ["proximal", "distal", "medial", "anterior"], answer: 1, explain: "La muñeca está más lejos del tronco que el codo, así que es distal." },
        { type: "fill", q: "The medical term for collarbone is ___. (clavícula)", answer: ["clavicle"], explain: "Collarbone = lenguaje cotidiano; clavicle = término técnico." },
        { type: "mc", q: "A patient lying face up is in the ___ position.", options: ["prone", "lateral", "supine", "upright"], answer: 2, explain: "Supine = boca arriba; prone = boca abajo." },
        { type: "order", q: "Ordena la pregunta", words: ["does", "it", "Where", "hurt", "exactly"], answer: "Where exactly does it hurt", explain: "wh- + adverbio + auxiliar + sujeto + verbo." },
        { type: "mc", q: "“Bilateral leg swelling” means swelling in:", options: ["the right leg only", "the left leg only", "both legs", "the upper leg only"], answer: 2, explain: "Bi- = dos; lateral = lado. Bilateral = en ambos lados." },
        { type: "fill", q: "Pain in the right upper ___ may suggest gallbladder disease. (cuadrante)", answer: ["quadrant"], explain: "Right upper quadrant (RUQ) es el cuadrante donde están el hígado y la vesícula." }
      ]
    },
    {
      id: "m2l4",
      title: "Pronunciación de términos difíciles",
      minutes: 15,
      goal: "Al terminar podrás pronunciar con el acento correcto y sin las letras mudas los términos médicos que más confunden a un hispanohablante.",
      intro: "En inglés médico no se pronuncia como se escribe: pneumonia empieza con /n/, psychiatry con /s/, y diarrhea tiene la rr muda. El acento también cambia respecto al español: ischemia y edema llevan el acento en la segunda sílaba. Dominar unos pocos patrones evita malentendidos con colegas y pacientes, y te da confianza para hablar en reuniones y en urgencias.",
      vocab: [
        { en: "pneumonia", ipa: "/nuːˈmoʊ.ni.ə/", es: "neumonía (la p inicial no suena)", ex: "He was treated for community-acquired pneumonia." },
        { en: "psychiatry", ipa: "/saɪˈkaɪ.ə.tri/", es: "psiquiatría (p muda; ps = s)", ex: "She works in child psychiatry." },
        { en: "sciatica", ipa: "/saɪˈæt.ɪ.kə/", es: "ciática (sc = s; acento en la 2.ª sílaba)", ex: "Sciatica causes pain that radiates down the leg." },
        { en: "diarrhea", ipa: "/ˌdaɪ.əˈriː.ə/", es: "diarrea (acento en -rhe-; rr suena como una r)", ex: "He has had watery diarrhea for two days." },
        { en: "ischemia", ipa: "/ɪˈskiː.mi.ə/", es: "isquemia (ch = k; acento en -che-)", ex: "The ECG shows signs of myocardial ischemia." },
        { en: "edema", ipa: "/ɪˈdiː.mə/", es: "edema (acento en la 2.ª sílaba)", ex: "There is pitting edema in both ankles." },
        { en: "dyspnea", ipa: "/ˈdɪsp.ni.ə/", es: "disnea (acento en la 1.ª sílaba; p suena)", ex: "She had dyspnea at rest." },
        { en: "angina", ipa: "/ænˈdʒaɪ.nə/", es: "angina de pecho (g suave /dʒ/, no /g/)", ex: "He has stable angina when he climbs stairs." },
        { en: "cirrhosis", ipa: "/sɪˈroʊ.sɪs/", es: "cirrosis (acento en la 2.ª sílaba; rrh = r)", ex: "Chronic alcohol use can lead to cirrhosis." },
        { en: "hemorrhage", ipa: "/ˈhɛm.ɚ.ɪdʒ/", es: "hemorragia (acento en la 1.ª sílaba; -rrh- = r; termina en /dʒ/)", ex: "The patient had a brain hemorrhage." },
        { en: "esophagus", ipa: "/ɪˈsɑː.fə.ɡəs/", es: "esófago (acento en la 2.ª sílaba)", ex: "The tube goes through the esophagus into the stomach." },
        { en: "abdomen", ipa: "/ˈæb.də.mən/", es: "abdomen (acento en la 1.ª sílaba)", ex: "The abdomen is soft and not tender." }
      ],
      phrases: [
        { en: "Could you say that again, please?", es: "¿Podría repetirlo, por favor?", use: "Cuando no entiendes un término hablado." },
        { en: "How do you pronounce that word?", es: "¿Cómo se pronuncia esa palabra?", use: "Para pedir ayuda con un término nuevo." },
        { en: "Could you spell that, please?", es: "¿Podría deletrearlo, por favor?", use: "Útil con nombres de fármacos y apellidos." },
        { en: "Did you say hypotension or hypertension?", es: "¿Dijo hipotensión o hipertensión?", use: "Para confirmar términos que suenan parecido y son críticos." },
        { en: "Let me repeat that back to you.", es: "Déjeme repetírselo para confirmar.", use: "Práctica de seguridad en órdenes y dosis." },
        { en: "I am still learning the pronunciation, so please correct me.", es: "Todavía estoy aprendiendo la pronunciación, corríjame por favor.", use: "Mostrar humildad abre la puerta a que te corrijan." }
      ],
      text: {
        type: "reading",
        title: "Five rules for medical pronunciation",
        context: "Reglas breves para pronunciar bien terminología médica en inglés.",
        paragraphs: [
          "English medical words often look different from the way they sound. Here are five rules that will help you.",
          "Rule one: silent first letters. In pneumonia, the p is silent, so we say new-MOH-nee-uh. In psychiatry, the p is silent too: sigh-KY-uh-tree. Compare this with dyspnea, where the p is pronounced.",
          "Rule two: ch is often a k sound in words from Greek, such as ischemia (iss-KEE-mee-uh), chronic and cholesterol. And sc before i or e sounds like s: sciatica (sigh-AT-ih-kuh).",
          "Rule three: rrh and rh are pronounced as a simple r. Diarrhea is dy-uh-REE-uh, and cirrhosis is sih-ROH-sis.",
          "Rule four: stress does not always fall where it does in Spanish. Say isCHEmia, not ISchemia, and ih-DEE-muh for edema, with the stress on the second syllable. Hemorrhage and abdomen are stressed on the first syllable.",
          "Rule five: watch minimal pairs. Hypertension (high) and hypotension (low) differ only in the middle. Palpation (touching the body) is not palpitation (feeling your heart beat). Dysphagia is trouble swallowing, and dysphasia is trouble speaking. The ileum (intestine) and the ilium (hip bone) sound exactly the same, so use context."
        ]
      },
      grammar: [
        "Letras mudas al inicio: pn-, ps-, gn- y kn- (gnat). En pneumonia, pneumothorax y psychiatry no suena la p inicial; en dyspnea sí suena la p porque está en medio de la palabra.",
        "ch = /k/ en términos griegos (ischemia, chronic, cholesterol, psychiatry, stomach); sc antes de e o i suena /s/ (sciatica, scissors); ph = /f/ (esophagus, phlebitis); rrh = /r/ (diarrhea, hemorrhage, cirrhosis).",
        "Acento: no siempre coincide con el español. Edema, ischemia, esophagus, cirrhosis, sciatica y angina llevan el acento en la segunda sílaba; hemorrhage, abdomen y dyspnea, en la primera. Si no estás seguro, consulta un diccionario médico en línea con audio.",
        "Pares mínimos que importan: hypertension / hypotension, palpation / palpitation, dysphagia / dysphasia, ileum / ilium (suenan igual). Para evitar errores clínicos, confirma el término por escrito o con una descripción."
      ],
      tip: "Escucha cada palabra nueva en un diccionario con audio y repítela tres veces en voz alta. Un buen hábito es grabar tu voz y compararla: es la forma más rápida de corregir el acento.",
      exercises: [
        { type: "mc", q: "In “pneumonia” the first sound you hear is:", options: ["/p/", "/n/", "/pn/", "/k/"], answer: 1, explain: "La p inicial es muda: new-MOH-nee-uh." },
        { type: "mc", q: "Where is the stress in “ischemia”?", options: ["First syllable", "Second syllable", "Third syllable", "Last syllable"], answer: 1, explain: "isCHEmia: ch suena como k y el acento cae en la segunda sílaba." },
        { type: "fill", q: "In psychiatry, the first letter ___ is silent. (la letra muda)", answer: ["p"], explain: "Psychiatry empieza con el sonido /s/; la p no se pronuncia." },
        { type: "order", q: "Ordena la pregunta", words: ["do", "How", "pronounce", "you", "word", "that"], answer: "How do you pronounce that word", explain: "Pregunta útil para pedir ayuda con una palabra nueva." },
        { type: "mc", q: "Which pair is NOT pronounced the same way?", options: ["ileum / ilium", "hypertension / hypotension", "to / two", "see / sea"], answer: 1, explain: "Hypertension e hypotension se diferencian en la sílaba central; ileum e ilium suenan igual." },
        { type: "fill", q: "In “diarrhea”, the rrh is pronounced as a simple ___. (letra r)", answer: ["r"], explain: "Diarrhea = dy-uh-REE-uh; rrh suena como una r." }
      ]
    }
  ]
});
