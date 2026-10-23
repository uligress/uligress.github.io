(window.COURSE = window.COURSE || []).push({
  id: "m3", n: 3,
  title: "Inglés por aparatos",
  en: "Clinical systems",
  summary: "Aprendes el vocabulario técnico de cada aparato y, a la vez, cómo lo dice el paciente. Al final podrás preguntar síntomas clave y entender un caso corto en inglés.",
  lessons: [
    {
      id: "m3l1",
      title: "Cardiovascular y respiratorio",
      minutes: 15,
      goal: "Al terminar podrás preguntar por dolor torácico, palpitaciones y disnea, y explicar un infarto o una EPOC en palabras simples.",
      intro: "Con colegas usas el término técnico (myocardial infarction, orthopnea); con el paciente usas su lenguaje (heart attack, trouble breathing lying down). El error típico es decir 'dyspnea' o 'rales' a un paciente, o traducir 'disnea' como 'dysnea'. En inglés se dice 'shortness of breath' (a veces abreviado SOB en el expediente).",
      vocab: [
        { en: "chest pain", ipa: "/ˈtʃɛst peɪn/", es: "dolor torácico", ex: "He came in with chest pain that started an hour ago." },
        { en: "tightness / pressure", ipa: "/ˈtaɪt.nəs/ /ˈprɛʃ.ər/", es: "opresión", ex: "She describes a pressure in the middle of her chest, like a weight." },
        { en: "palpitations", ipa: "/ˌpæl.pɪˈteɪ.ʃənz/", es: "palpitaciones; el paciente dice: 'my heart is racing / fluttering'", ex: "I get palpitations when I drink too much coffee." },
        { en: "shortness of breath", ipa: "/ˈʃɔːrt.nəs əv ˈbrɛθ/", es: "disnea, falta de aire", ex: "He gets short of breath when he climbs one flight of stairs." },
        { en: "orthopnea", ipa: "/ɔːrˈθɒp.ni.ə/", es: "ortopnea; el paciente dice: 'I need extra pillows to sleep'", ex: "She sleeps on three pillows because of orthopnea." },
        { en: "paroxysmal nocturnal dyspnea (PND)", ipa: "/ˌpær.əkˈsɪz.məl nɑːkˈtɜːr.nəl dɪspˈniː.ə/", es: "disnea paroxística nocturna; el paciente dice: 'I wake up gasping for air'", ex: "He wakes up at night gasping for air and has to sit up." },
        { en: "wheezing", ipa: "/ˈwiː.zɪŋ/", es: "sibilancias (silbidos al respirar)", ex: "There is diffuse wheezing on expiration." },
        { en: "crackles (rales)", ipa: "/ˈkræk.əlz/ /reɪlz/", es: "crepitantes", ex: "I hear crackles at both lung bases." },
        { en: "myocardial infarction (MI)", ipa: "/ˌmaɪ.əˈkɑːr.di.əl ɪnˈfɑːrk.ʃən/", es: "infarto agudo de miocardio; al paciente: 'heart attack'", ex: "An MI happens when blood flow to part of the heart is blocked." },
        { en: "heart failure", ipa: "/ˈhɑːrt ˈfeɪl.jər/", es: "insuficiencia cardiaca (no es 'paro cardiaco', eso es cardiac arrest)", ex: "Heart failure means the heart cannot pump enough blood for the body." },
        { en: "COPD", ipa: "/ˌsi.oʊ.piːˈdiː/", es: "EPOC (enfermedad pulmonar obstructiva crónica)", ex: "He has COPD after smoking for thirty years." },
        { en: "syncope", ipa: "/ˈsɪŋ.kə.pi/", es: "síncope; el paciente dice: 'I passed out / fainted'", ex: "She passed out in the kitchen and woke up on the floor." }
      ],
      phrases: [
        { en: "Can you describe the pain? Is it sharp, dull, or pressure-like?", es: "¿Puede describir el dolor? ¿Es punzante, sordo o como presión?", use: "Primera pregunta ante cualquier dolor torácico." },
        { en: "Does the pain spread to your arm, neck, or jaw?", es: "¿El dolor se va al brazo, al cuello o a la mandíbula?", use: "Para preguntar por irradiación." },
        { en: "Do you get short of breath when you lie flat?", es: "¿Le falta el aire cuando se acuesta boca arriba?", use: "Para buscar ortopnea." },
        { en: "How many pillows do you sleep on?", es: "¿Con cuántas almohadas duerme?", use: "Forma sencilla de cuantificar la ortopnea." },
        { en: "Do you ever wake up at night gasping for air?", es: "¿Se despierta de noche con falta de aire?", use: "Para buscar disnea paroxística nocturna." },
        { en: "Do you cough up any phlegm? What color is it?", es: "¿Expectora flemas? ¿De qué color?", use: "Enfermedad respiratoria; phlegm es lo que dice el paciente, sputum lo que escribes." },
        { en: "I’m going to listen to your heart and lungs now.", es: "Ahora voy a escuchar su corazón y sus pulmones.", use: "Antes de auscultar." }
      ],
      text: {
        type: "dialogue",
        title: "Chest pain in the emergency department",
        context: "Un hombre de 58 años llega a urgencias con dolor en el pecho.",
        lines: [
          { who: "Doctor", en: "Good evening, Mr. Davis. What brings you in tonight?" },
          { who: "Patient", en: "I have this pain in my chest. It started about an hour ago." },
          { who: "Doctor", en: "Can you describe it? Is it sharp, or more of a pressure?" },
          { who: "Patient", en: "It feels like someone is sitting on my chest." },
          { who: "Doctor", en: "Does it spread anywhere, like your arm or your jaw?" },
          { who: "Patient", en: "Yes, it goes down my left arm." },
          { who: "Doctor", en: "Are you short of breath or sweating?" },
          { who: "Patient", en: "I’m a little short of breath, and I broke out in a cold sweat." },
          { who: "Doctor", en: "Did the pain start while you were resting or doing something?" },
          { who: "Patient", en: "I was shoveling snow. I sat down and it didn’t go away." },
          { who: "Doctor", en: "Do you have heart problems, high blood pressure, or diabetes?" },
          { who: "Patient", en: "I have high blood pressure. My father had a heart attack at fifty." },
          { who: "Doctor", en: "Thank you. We’ll do an ECG right away and draw some blood tests, because this could be a heart attack." },
          { who: "Patient", en: "Is it serious, doctor?" },
          { who: "Doctor", en: "We take it very seriously, so we are acting quickly. I’ll stay with you." }
        ]
      },
      grammar: [
        "Duración con present perfect: 'I have had this pain for two days' o 'since Monday'. Con for va un periodo (for two days); con since, un punto de inicio (since Monday). No se usa el presente simple ('I have this pain since...') como en español.",
        "'Get' + adjetivo expresa que algo aparece con una situación: 'I get short of breath when I climb stairs'. Es más natural que 'I feel dyspnea'.",
        "Registro: al paciente, 'heart attack' y 'trouble breathing'; en la nota y entre colegas, 'MI' y 'dyspnea'. Cambia de registro según quién escucha.",
        "'Pain' es incontable en general: 'I have chest pain', no 'a chest pain'. Para varios episodios usa 'episodes of chest pain'."
      ],
      tip: "False friend: 'attack' no implica ataque violento; 'heart attack' es el infarto. Y 'cardiac arrest' (paro cardiaco) NO es lo mismo que 'heart failure' (insuficiencia cardiaca): confundirlos en una presentación es un error grave.",
      exercises: [
        { type: "mc", q: "A patient says: 'I wake up at night gasping for air.' Which term describes this?", options: ["Orthopnea", "Paroxysmal nocturnal dyspnea", "Palpitations", "Syncope"], answer: 1, explain: "Despertar con falta de aire es disnea paroxística nocturna (PND). La ortopnea es la falta de aire al acostarse, que mejora al sentarse." },
        { type: "mc", q: "Which sound is a high-pitched whistling, typical of asthma and COPD?", options: ["Crackles", "Murmur", "Pleural rub", "Wheezing"], answer: 3, explain: "Wheezing son las sibilancias. Los crackles son crepitantes (como el roce del cabello entre los dedos), típicos de edema pulmonar o neumonía." },
        { type: "mc", q: "How would you explain 'myocardial infarction' to a patient?", options: ["A heart attack: blood flow to part of the heart is blocked", "A very fast heartbeat", "Water in the lungs", "A noise heard with the stethoscope"], answer: 0, explain: "Al paciente se le dice 'heart attack'; la definición simple es el bloqueo del flujo de sangre a una parte del corazón." },
        { type: "fill", q: "She needs three pillows to sleep because of ___. (ortopnea)", answer: ["orthopnea"], explain: "Orthopnea: falta de aire al estar acostado. Ojo con la ortografía en inglés: orthopnea." },
        { type: "fill", q: "He says his heart is racing and fluttering. He reports ___. (palpitaciones)", answer: ["palpitations"], explain: "Palpitations es el término técnico para la sensación de latido rápido o irregular." },
        { type: "order", q: "Ordena la pregunta", words: ["lie", "Do", "breath", "you", "short", "get", "flat", "when", "of", "you"], answer: "Do you get short of breath when you lie flat", explain: "Estructura: Do you get + adjetivo + when + oración. Es la pregunta estándar para buscar ortopnea." }
      ]
    },
    {
      id: "m3l2",
      title: "Renal, electrolitos y endocrino",
      minutes: 15,
      goal: "Al terminar podrás describir un caso de lesión renal aguda, explicar un potasio alto y preguntar por síntomas urinarios y de diabetes.",
      intro: "En nefrología se habla en cifras: creatinina en mg/dL, potasio y sodio en mEq/L, y se usan verbos como 'rise', 'drop' y 'worsen'. El error típico es decir 'renal failure' siempre; hoy se prefiere 'acute kidney injury (AKI)' y 'chronic kidney disease (CKD)'. Al paciente, diabetes se le dice muchas veces 'sugar' ('Do you have sugar?').",
      vocab: [
        { en: "acute kidney injury (AKI)", ipa: "/əˈkjuːt ˈkɪd.ni ˈɪn.dʒər.i/", es: "lesión renal aguda", ex: "AKI is defined by a rise in creatinine of at least 0.3 mg/dL within 48 hours." },
        { en: "chronic kidney disease (CKD)", ipa: "/ˈkrɑː.nɪk ˈkɪd.ni dɪˈziːz/", es: "enfermedad renal crónica (TFG menor de 60 mL/min durante más de 3 meses)", ex: "He has stage 3 CKD with an eGFR of 45." },
        { en: "dialysis", ipa: "/daɪˈæl.ə.sɪs/", es: "diálisis (hemodiálisis, diálisis peritoneal)", ex: "She goes to dialysis three times a week." },
        { en: "creatinine", ipa: "/kriˈæt.ɪ.niːn/", es: "creatinina", ex: "His creatinine rose from 1.0 to 2.4 mg/dL." },
        { en: "urine output", ipa: "/ˈjʊr.ɪn ˈaʊt.pʊt/", es: "diuresis, gasto urinario; el paciente dice: 'I’m barely peeing'", ex: "Her urine output has dropped since yesterday." },
        { en: "foamy urine", ipa: "/ˈfoʊ.mi ˈjʊr.ɪn/", es: "orina espumosa (sugiere proteinuria)", ex: "He noticed foamy urine for several weeks." },
        { en: "hematuria", ipa: "/ˌhiː.məˈtʊr.i.ə/", es: "hematuria; al paciente: 'blood in your urine'", ex: "Any blood in your urine? Is it pink, red, or like tea?" },
        { en: "edema", ipa: "/ɪˈdiː.mə/", es: "edema; el paciente dice: 'swelling in my legs'", ex: "She has pitting edema up to the knees." },
        { en: "potassium", ipa: "/pəˈtæs.i.əm/", es: "potasio (normal 3.5–5.0 mEq/L); hyperkalemia = hiperpotasemia", ex: "His potassium is 6.1, which is dangerously high." },
        { en: "sodium", ipa: "/ˈsoʊ.di.əm/", es: "sodio (normal 135–145 mEq/L); hyponatremia = hiponatremia", ex: "The sodium is low at 124 mEq/L." },
        { en: "diabetes (‘sugar’)", ipa: "/ˌdaɪ.əˈbiː.tiːz/", es: "diabetes; coloquial: 'sugar'", ex: "Do you have diabetes, or has anyone told you your sugar is high?" },
        { en: "thyroid", ipa: "/ˈθaɪ.rɔɪd/", es: "tiroides (hypothyroidism / hyperthyroidism)", ex: "Her TSH is high, so she has an underactive thyroid." }
      ],
      phrases: [
        { en: "Have you noticed any change in how much you urinate?", es: "¿Ha notado algún cambio en cuánto orina?", use: "Pregunta clave en sospecha de AKI." },
        { en: "Is there any blood in your urine? Does it look foamy?", es: "¿Hay sangre en la orina? ¿Se ve espumosa?", use: "Para buscar hematuria o proteinuria." },
        { en: "Do you get up at night to urinate?", es: "¿Se levanta de noche a orinar?", use: "Para nocturia, en diabetes, próstata o ICC." },
        { en: "Have you been taking painkillers like ibuprofen?", es: "¿Ha estado tomando analgésicos como ibuprofeno?", use: "Los antiinflamatorios son causa frecuente de AKI." },
        { en: "Your kidney function has dropped, but it may recover.", es: "Su función renal ha bajado, pero puede recuperarse.", use: "Para explicar AKI sin alarmar." },
        { en: "Your potassium is high, and that can affect your heart rhythm.", es: "Su potasio está alto y eso puede afectar el ritmo del corazón.", use: "Para explicar hiperpotasemia." },
        { en: "Are you drinking more water than usual, or feeling very thirsty?", es: "¿Toma más agua de lo normal o tiene mucha sed?", use: "Síntomas de hiperglucemia (polidipsia)." }
      ],
      text: {
        type: "reading",
        title: "Acute kidney injury: a case presentation",
        context: "Así presentarías un caso corto de nefrología en inglés.",
        paragraphs: [
          "A 68-year-old man with type 2 diabetes and hypertension comes to the emergency department with three days of vomiting and diarrhea. He has been taking lisinopril and ibuprofen for knee pain. He reports passing very little urine since yesterday.",
          "On examination, his blood pressure is 92/58 mm Hg, his heart rate is 108 beats per minute, and his mucous membranes are dry. He has no peripheral edema. Labs show a creatinine of 2.4 mg/dL; his baseline is 1.0 mg/dL. Potassium is 6.1 mEq/L and bicarbonate is low. The ECG shows peaked T waves. The urinalysis has no blood and only a trace of protein.",
          "The diagnosis is acute kidney injury, most likely prerenal, caused by volume depletion and made worse by an ACE inhibitor and an NSAID. The team stops both drugs, starts intravenous fluids, and treats the hyperkalemia with calcium gluconate to protect the heart, followed by insulin with glucose to move potassium into the cells. Creatinine is rechecked every six hours. If it does not improve, the team will order a renal ultrasound and ask for a nephrology consult."
        ]
      },
      grammar: [
        "Cambios en un valor: 'rose from 1.0 to 2.4' (from … to …) indica el cambio; 'to' sola indica el valor final. Verbos: rise/rose/risen, drop/dropped, worsen, improve, return to baseline.",
        "Cifras y unidades: 2.4 se lee 'two point four'; '92/58' se lee 'ninety-two over fifty-eight'. Las unidades en EE. UU. suelen ser mg/dL (creatinina, glucosa) y mEq/L (electrolitos).",
        "Prefijos: hyper- (alto) y hypo- (bajo) + raíz: hyperkalemia, hypokalemia, hypernatremia, hyponatremia, hyperglycemia, hypoglycemia.",
        "'Kidney' es lo que dice el paciente y se usa en 'kidney function'; 'renal' es el adjetivo técnico (renal ultrasound). Dilo así: 'kidney failure', no 'renal insufficiency' al paciente."
      ],
      tip: "False friend: 'urine' se pronuncia /ˈjʊr.ɪn/, no 'urina'. Y el 'sugar' del paciente puede ser diabetes o glucosa; confirma preguntando: 'Do you take any medicine or insulin for your sugar?'.",
      exercises: [
        { type: "mc", q: "Creatinine goes from 1.0 to 2.4 mg/dL in two days. Which diagnosis fits best?", options: ["Chronic kidney disease", "Acute kidney injury", "Nephrotic syndrome", "Urinary tract infection"], answer: 1, explain: "Un aumento de creatinina de al menos 0.3 mg/dL en 48 horas, o de 1.5 veces la basal, define lesión renal aguda (AKI)." },
        { type: "mc", q: "Which patient phrase suggests proteinuria?", options: ["My urine is foamy.", "My urine burns.", "My urine smells strong.", "I pee very often at night."], answer: 0, explain: "Foamy urine (orina espumosa) sugiere proteinuria; el ardor al orinar es disuria." },
        { type: "mc", q: "Which potassium level is hyperkalemia?", options: ["3.2 mEq/L", "4.1 mEq/L", "4.8 mEq/L", "6.1 mEq/L"], answer: 3, explain: "El rango normal es 3.5–5.0 mEq/L; por encima de 5.0 es hiperpotasemia (hyperkalemia). 6.1 es un valor peligroso." },
        { type: "fill", q: "He has ___ in his legs, so he has pitting edema. (hinchazón)", answer: ["swelling"], explain: "El paciente dice 'swelling'; el término técnico es edema." },
        { type: "fill", q: "Her kidney function has ___ since last week. (ha bajado)", answer: ["dropped", "declined", "worsened"], explain: "Verbos para empeorar un valor: dropped, declined, worsened. Se usan con 'since' + punto en el pasado y present perfect." },
        { type: "order", q: "Ordena la pregunta", words: ["any", "Is", "your", "in", "there", "blood", "urine"], answer: "Is there any blood in your urine", explain: "'Is there any + sustantivo' pregunta por la presencia de algo; 'blood in your urine' es hematuria en palabras del paciente." }
      ]
    },
    {
      id: "m3l3",
      title: "Gastrointestinal e hígado",
      minutes: 15,
      goal: "Al terminar podrás interrogar síntomas digestivos, distinguir melena de hematoquecia y nombrar los datos de cirrosis en inglés.",
      intro: "El vocabulario digestivo es muy personal: el paciente dice 'throwing up', 'poop' o 'stool' según su confianza. Tú debes entender todas las formas y, en la nota, usar 'vomiting' y 'bowel movement'. El error típico es 'constipation': en inglés significa estreñimiento, no 'constipado' (congestión nasal).",
      vocab: [
        { en: "heartburn", ipa: "/ˈhɑːrt.bɜːrn/", es: "agruras, pirosis (acid reflux)", ex: "I get heartburn after big meals, especially at night." },
        { en: "bloating", ipa: "/ˈbloʊ.tɪŋ/", es: "distensión, hinchazón abdominal; el paciente dice: 'I feel bloated'", ex: "She feels bloated and full after eating only a little." },
        { en: "nausea", ipa: "/ˈnɔː.zi.ə/", es: "náusea", ex: "Nausea gets worse in the morning." },
        { en: "vomiting", ipa: "/ˈvɑː.mɪ.tɪŋ/", es: "vómito; el paciente dice: 'throwing up'", ex: "I’ve been throwing up since last night." },
        { en: "melena", ipa: "/məˈliː.nə/", es: "melena: heces negras, pegajosas y fétidas", ex: "He has black, tarry stools, which is melena." },
        { en: "hematochezia", ipa: "/ˌhiː.mə.toʊˈkiː.zi.ə/", es: "hematoquecia: sangre roja fresca por el recto", ex: "Bright red blood on the toilet paper is not melena." },
        { en: "bowel movement", ipa: "/ˈbaʊ.əl ˈmuːv.mənt/", es: "evacuación; coloquial: 'stool', 'poop'", ex: "How often do you have a bowel movement?" },
        { en: "constipation / diarrhea", ipa: "/ˌkɑːn.stɪˈpeɪ.ʃən/ /ˌdaɪ.əˈriː.ə/", es: "estreñimiento / diarrea", ex: "He has had diarrhea for five days." },
        { en: "abdominal pain", ipa: "/æbˈdɑː.mɪ.nəl peɪn/", es: "dolor abdominal; el paciente dice: 'stomach ache'", ex: "The pain is in the upper right side of the abdomen." },
        { en: "jaundice", ipa: "/ˈdʒɔːn.dɪs/", es: "ictericia; el paciente dice: 'my eyes look yellow'", ex: "Jaundice is first visible in the whites of the eyes." },
        { en: "cirrhosis", ipa: "/səˈroʊ.sɪs/", es: "cirrosis (hígado con fibrosis avanzada)", ex: "Alcohol and hepatitis are common causes of cirrhosis." },
        { en: "ascites", ipa: "/əˈsaɪ.tiːz/", es: "ascitis; el paciente dice: 'my belly is swollen / full of fluid'", ex: "His belly is distended with ascites." }
      ],
      phrases: [
        { en: "Where exactly is the pain? Can you point to it?", es: "¿Dónde exactamente le duele? ¿Puede señalarlo?", use: "Localizar dolor abdominal." },
        { en: "Have you been throwing up? Is there any blood in it?", es: "¿Ha estado vomitando? ¿Hay sangre?", use: "Para buscar hematemesis." },
        { en: "What color is your stool? Is it black or bloody?", es: "¿De qué color es su evacuación? ¿Negra o con sangre?", use: "Para buscar melena o hematoquecia." },
        { en: "How many bowel movements do you have per day?", es: "¿Cuántas evacuaciones tiene al día?", use: "Cuantificar diarrea o estreñimiento." },
        { en: "Have you noticed your skin or eyes turning yellow?", es: "¿Ha notado la piel o los ojos amarillos?", use: "Para ictericia." },
        { en: "How much alcohol do you drink in a typical week?", es: "¿Cuánto alcohol bebe en una semana normal?", use: "Imprescindible en enfermedad hepática." },
        { en: "Do you take any painkillers, like ibuprofen or aspirin?", es: "¿Toma analgésicos como ibuprofeno o aspirina?", use: "Causa común de gastritis y úlcera." }
      ],
      text: {
        type: "dialogue",
        title: "Black stools",
        context: "Un hombre de 52 años consulta por evacuaciones negras y debilidad.",
        lines: [
          { who: "Doctor", en: "Hello, Mr. Brooks. What’s been going on?" },
          { who: "Patient", en: "For three days my stool has been black, and I feel very weak." },
          { who: "Doctor", en: "Is the stool sticky and foul-smelling, like tar?" },
          { who: "Patient", en: "Yes, and it smells terrible." },
          { who: "Doctor", en: "Have you been throwing up? Any blood in the vomit?" },
          { who: "Patient", en: "I threw up once yesterday. It looked like coffee grounds." },
          { who: "Doctor", en: "Do you have any stomach pain or heartburn?" },
          { who: "Patient", en: "I’ve had burning pain in my upper stomach for a few weeks." },
          { who: "Doctor", en: "Do you take any pain medicine, like ibuprofen or aspirin?" },
          { who: "Patient", en: "Yes, ibuprofen for my back, about four pills a day." },
          { who: "Doctor", en: "And how much alcohol do you drink in a typical week?" },
          { who: "Patient", en: "About ten beers a week. Not more." },
          { who: "Doctor", en: "Thank you. Black stools and vomit like coffee grounds suggest bleeding in the upper stomach, maybe an ulcer." },
          { who: "Patient", en: "Is it dangerous?" },
          { who: "Doctor", en: "It can be, so we will check your blood count, start fluids, and arrange a camera test of your stomach, an endoscopy." }
        ]
      },
      grammar: [
        "Con síntomas continuos usa present perfect continuous: 'I’ve been throwing up since last night', 'He has been having diarrhea for five days'. Con un hecho puntual, pasado simple: 'I threw up once yesterday'.",
        "'Nauseated' y 'nauseous' se usan ambos al hablar; en la nota se escribe 'nausea'. 'I feel sick to my stomach' es muy natural en EE. UU.",
        "'Stool' puede ser incontable ('blood in the stool') o plural ('black stools'). 'Bowel movement' es lo neutral y profesional; 'poop' solo con niños.",
        "Para frecuencia: 'once a day', 'twice a week', 'three times a day'; para cantidad de alcohol: 'drinks per week'. Pregunta 'How many…?' para contables y 'How much…?' para incontables."
      ],
      tip: "False friend: 'constipation' es estreñimiento, no 'constipado'. Si el paciente tiene la nariz tapada, dices 'stuffy nose' o 'a cold'. Otro: 'stomach' el paciente lo usa para todo el abdomen; confirma el sitio con 'Can you point to it?'.",
      exercises: [
        { type: "mc", q: "Black, tarry, foul-smelling stools are called:", options: ["Hematochezia", "Steatorrhea", "Melena", "Tenesmus"], answer: 2, explain: "Melena: heces negras tipo alquitrán, por sangre digerida; suele ser sangrado digestivo alto. La hematoquecia es sangre roja fresca." },
        { type: "mc", q: "A patient says 'I’ve been throwing up.' In your chart, you write:", options: ["Diarrhea", "Nausea only", "Vomiting", "Bloating"], answer: 2, explain: "Throwing up es lenguaje coloquial; en la nota se escribe vomiting." },
        { type: "mc", q: "Which finding is most typical of cirrhosis with decompensation?", options: ["Ascites", "Heartburn", "Foamy urine", "Wheezing"], answer: 0, explain: "La ascitis (líquido en el abdomen) es una descompensación clásica de la cirrosis; también ictericia y encefalopatía." },
        { type: "fill", q: "Her eyes and skin are yellow. She has ___. (ictericia)", answer: ["jaundice"], explain: "Jaundice: ictericia. Se ve primero en la esclera." },
        { type: "fill", q: "Bright red blood in the stool is called ___. (hematoquecia)", answer: ["hematochezia"], explain: "Hematochezia suele indicar sangrado digestivo bajo (colon o recto), aunque un sangrado alto muy brusco también puede presentarse así." },
        { type: "order", q: "Ordena la pregunta", words: ["have", "bowel", "you", "many", "How", "movements", "do", "a", "day"], answer: "How many bowel movements do you have a day", explain: "'Bowel movement' es contable: How many …? Es la pregunta neutral para cuantificar diarrea o estreñimiento." }
      ]
    },
    {
      id: "m3l4",
      title: "Neurológico, musculoesquelético y reumatología",
      minutes: 15,
      goal: "Al terminar podrás distinguir debilidad de adormecimiento y mareo de vértigo, preguntar por rigidez matutina y presentar un caso reumatológico corto.",
      intro: "Aquí el paciente usa palabras vagas: 'dizzy', 'weak', 'numb'. Tu tarea es precisar con una pregunta ('Do you feel the room spinning?'). En reumatología importan la duración de la rigidez matutina y qué articulaciones se afectan. El error típico es usar 'mareo' como 'dizziness' para todo; en inglés vértigo (vertigo) y mareo (lightheadedness) son distintos.",
      vocab: [
        { en: "stroke", ipa: "/stroʊk/", es: "evento vascular cerebral (EVC); también 'CVA'", ex: "Sudden weakness on one side can mean a stroke." },
        { en: "weakness", ipa: "/ˈwiːk.nəs/", es: "debilidad (pérdida de fuerza real)", ex: "He can’t lift his right arm; it’s weak." },
        { en: "numbness", ipa: "/ˈnʌm.nəs/", es: "adormecimiento, pérdida de sensibilidad; 'tingling' = hormigueo", ex: "She has numbness and tingling in both feet." },
        { en: "seizure", ipa: "/ˈsiː.ʒər/", es: "crisis convulsiva; el paciente dice: 'fit' o 'convulsion'", ex: "Did anyone see the seizure? How long did it last?" },
        { en: "dizziness", ipa: "/ˈdɪz.i.nəs/", es: "mareo, inestabilidad (inespecífico)", ex: "I feel dizzy when I stand up too fast." },
        { en: "vertigo", ipa: "/ˈvɜːr.tɪ.ɡoʊ/", es: "vértigo: sensación de que el entorno gira", ex: "She has vertigo and feels the room spinning." },
        { en: "joint pain", ipa: "/ˈdʒɔɪnt peɪn/", es: "dolor articular (arthralgia)", ex: "He has joint pain in both knees when he walks." },
        { en: "morning stiffness", ipa: "/ˈmɔːr.nɪŋ ˈstɪf.nəs/", es: "rigidez matutina", ex: "My hands are stiff for an hour every morning." },
        { en: "swelling", ipa: "/ˈswɛl.ɪŋ/", es: "hinchazón, tumefacción", ex: "Her knuckles are red and swollen." },
        { en: "lupus (SLE)", ipa: "/ˈluː.pəs/", es: "lupus eritematoso sistémico", ex: "She has a butterfly rash across her cheeks, which suggests lupus." },
        { en: "rheumatoid arthritis (RA)", ipa: "/ˈruː.mə.tɔɪd ɑːrˈθraɪ.tɪs/", es: "artritis reumatoide", ex: "RA usually affects the small joints of the hands on both sides." },
        { en: "gout", ipa: "/ɡaʊt/", es: "gota: artritis por cristales de urato, típicamente el dedo gordo del pie", ex: "He woke up with a red, hot, very painful big toe: classic gout." }
      ],
      phrases: [
        { en: "When did the weakness start? Was it sudden or gradual?", es: "¿Cuándo empezó la debilidad? ¿Fue súbita o gradual?", use: "Clave para distinguir EVC de otras causas." },
        { en: "Is the weakness on one side only?", es: "¿La debilidad es de un solo lado?", use: "Para sospecha de EVC." },
        { en: "Do you feel the room spinning, or do you feel lightheaded?", es: "¿Siente que el cuarto da vueltas o que se va a desmayar?", use: "Separar vértigo de mareo." },
        { en: "Did you lose consciousness during the episode?", es: "¿Perdió el conocimiento durante el episodio?", use: "Crisis o síncope." },
        { en: "How long does the stiffness last in the morning?", es: "¿Cuánto dura la rigidez en la mañana?", use: "Más de una hora sugiere artritis inflamatoria." },
        { en: "Which joints are affected? Are both sides involved?", es: "¿Qué articulaciones le duelen? ¿Ambos lados?", use: "Simetría orienta a artritis reumatoide." },
        { en: "Do you have any rash, mouth sores, or sensitivity to sunlight?", es: "¿Tiene erupción, úlceras en la boca o sensibilidad al sol?", use: "Datos de lupus." }
      ],
      text: {
        type: "reading",
        title: "Painful hands: rheumatoid arthritis or something else?",
        context: "Presentación breve de una paciente con dolor en las manos.",
        paragraphs: [
          "A 34-year-old woman comes to the clinic with three months of pain and swelling in both hands. She says her hands are stiff when she wakes up, and the stiffness lasts about ninety minutes. Doing housework helps a little. She also feels tired, but she has no fever, rash, or mouth sores.",
          "On examination, the metacarpophalangeal and proximal interphalangeal joints are swollen and tender on both sides. The distal joints are normal. Her wrists are warm and painful, and her skin is clear.",
          "Rheumatoid factor and anti-CCP antibodies are positive, and the ESR and CRP are elevated. The pattern points to rheumatoid arthritis: symmetric, small joints, long morning stiffness. Lupus is less likely without a rash or kidney involvement. Gout usually affects one joint at a time, often the big toe, and is not symmetric. She is referred to rheumatology to start a disease-modifying drug, and she is told that early treatment protects the joints."
        ]
      },
      grammar: [
        "Debilidad y adormecimiento son distintos: 'weak' = falta de fuerza; 'numb' = no siente. Pregunta: 'Is it weakness or numbness?' y deja que el paciente describa con sus palabras.",
        "'Dizzy' es lo que dice el paciente para dos cosas: vértigo ('spinning') y casi-síncope ('lightheaded'). Siempre aclara cuál es antes de seguir.",
        "Sufijos: -itis = inflamación (arthritis, tendinitis); -algia = dolor (arthralgia, myalgia). 'Joint pain' es lo que dices al paciente.",
        "'Swollen' (adjetivo) vs 'swelling' (sustantivo): 'My knee is swollen' / 'I have swelling in my knee'. Y 'on both sides' o 'bilateral' para simetría."
      ],
      tip: "Rigidez de más de una hora al despertar sugiere artritis inflamatoria (como AR); menos de 30 minutos sugiere artrosis (osteoarthritis). Y recuerda: 'stroke' es EVC, pero 'a stroke' también puede decirse 'a brain attack' al paciente.",
      exercises: [
        { type: "mc", q: "A patient says: 'The room is spinning.' Which term fits?", options: ["Weakness", "Numbness", "Seizure", "Vertigo"], answer: 3, explain: "La sensación de que el entorno gira es vértigo. Si dice que va a desmayarse, es 'lightheadedness'." },
        { type: "mc", q: "Morning stiffness that lasts 90 minutes in both hands suggests:", options: ["Rheumatoid arthritis", "Gout", "Osteoarthritis", "A muscle strain"], answer: 0, explain: "Rigidez de más de una hora y afección simétrica de pequeñas articulaciones es típica de artritis reumatoide." },
        { type: "mc", q: "A red, hot, painful big toe that appeared overnight is most likely:", options: ["Lupus", "Gout", "Rheumatoid arthritis", "Stroke"], answer: 1, explain: "Es la presentación clásica de gota (podagra)." },
        { type: "fill", q: "He says he has pins and needles in his feet, so he has ___ and tingling. (adormecimiento)", answer: ["numbness"], explain: "Numbness es pérdida de sensibilidad; 'pins and needles' es el hormigueo que describe el paciente." },
        { type: "fill", q: "Sudden weakness on one side of the body can be a ___. (EVC)", answer: ["stroke"], explain: "Stroke es el evento vascular cerebral. Es una urgencia: cada minuto cuenta." },
        { type: "order", q: "Ordena la pregunta", words: ["stiffness", "How", "does", "the", "last", "long", "morning"], answer: "How long does the morning stiffness last", explain: "Estructura: How long does + sujeto + verbo en infinitivo. 'Last' es el verbo (dura)." }
      ]
    }
  ]
});
