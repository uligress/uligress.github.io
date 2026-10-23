(window.COURSE = window.COURSE || []).push({
  id: "m3", n: 3,
  title: "Francés por aparatos",
  en: "Les systèmes",
  summary: "Aprendes el vocabulario técnico y coloquial de cardiología, neumología, nefrología, endocrinología, gastroenterología, neurología y reumatología, con las unidades y los valores que se usan en Francia.",
  lessons: [
    {
      id: "m3l1",
      title: "Corazón y pulmones",
      minutes: 15,
      goal: "Al terminar podrás interrogar a un paciente con dolor torácico o disnea y entender cómo describe sus síntomas cardiorrespiratorios.",
      intro: "En francés el paciente casi nunca dice el término técnico: dice « mon cœur s’emballe » (palpitaciones) o « je manque d’air » (disnea). El error clásico del hispanohablante es traducir « mal al corazón » por « mal au cœur », que en francés significa náuseas, no dolor cardíaco. El dolor torácico se dice « mal à la poitrine ».",
      vocab: [
        { en: "le cœur", ipa: "/lə kœʁ/", es: "corazón (se pronuncia con vocal abierta, como en « sœur »)", ex: "Le cœur bat trop vite depuis ce matin." },
        { en: "les palpitations", ipa: "/le pal.pi.ta.sjɔ̃/", es: "palpitaciones; el paciente dice « mon cœur s’emballe »", ex: "Elle a des palpitations surtout le soir." },
        { en: "la douleur thoracique", ipa: "/la du.lœʁ tɔ.ʁa.sik/", es: "dolor torácico; coloquial: « mal à la poitrine »", ex: "Il consulte pour une douleur thoracique à l’effort." },
        { en: "l’essoufflement", ipa: "/lɛ.su.flə.mɑ̃/", es: "disnea, falta de aire; técnico: la dyspnée; coloquial: « je manque d’air »", ex: "L’essoufflement s’aggrave depuis une semaine." },
        { en: "l’œdème des membres inférieurs", ipa: "/lø.dɛm de mɑ̃bʁ ɛ̃.fe.ʁjœʁ/", es: "edema de miembros inferiores (OMI); coloquial: « j’ai les jambes gonflées »", ex: "Il présente un œdème des membres inférieurs jusqu’aux genoux." },
        { en: "la tension artérielle", ipa: "/la tɑ̃.sjɔ̃ aʁ.te.ʁjɛl/", es: "presión arterial; coloquial: « la tension »; se expresa en mmHg", ex: "La tension artérielle est à 14 sur 8 au repos." },
        { en: "l’insuffisance cardiaque", ipa: "/lɛ̃.sy.fi.zɑ̃s kaʁ.djak/", es: "insuficiencia cardíaca", ex: "Une insuffisance cardiaque est suspectée devant l’essoufflement et les œdèmes." },
        { en: "l’infarctus du myocarde", ipa: "/lɛ̃.faʁk.tys dy mjɔ.kaʁd/", es: "infarto agudo de miocardio; coloquial: « une crise cardiaque »", ex: "L’ECG montre un infarctus du myocarde en cours." },
        { en: "la toux", ipa: "/la tu/", es: "tos; sèche (seca) o grasse (productiva)", ex: "Il a une toux grasse depuis cinq jours." },
        { en: "les crachats", ipa: "/le kʁa.ʃa/", es: "esputo; « cracher du sang » = hemoptisis", ex: "Les crachats sont verdâtres depuis hier." },
        { en: "la pneumonie", ipa: "/la pnø.mɔ.ni/", es: "neumonía (también « la pneumopathie »)", ex: "La radio montre une pneumonie du lobe inférieur droit." },
        { en: "la saturation en oxygène", ipa: "/la sa.ty.ʁa.sjɔ̃ ɑ̃n ɔk.si.ʒɛn/", es: "saturación de oxígeno; se dice « la sat »; « en air ambiant » = sin oxígeno suplementario", ex: "Sa saturation est à 91 % en air ambiant." }
      ],
      phrases: [
        { en: "Avez-vous mal à la poitrine ?", es: "¿Tiene dolor en el pecho?", use: "Primera pregunta ante un posible síndrome coronario." },
        { en: "La douleur irradie-t-elle dans le bras ou la mâchoire ?", es: "¿El dolor se irradia al brazo o a la mandíbula?", use: "Para caracterizar el dolor torácico." },
        { en: "Êtes-vous essoufflé à l’effort ou au repos ?", es: "¿Le falta el aire al esfuerzo o en reposo?", use: "Para graduar la disnea." },
        { en: "Avez-vous des palpitations ?", es: "¿Tiene palpitaciones?", use: "Cuando hay malestar, síncope o arritmia sospechada." },
        { en: "Avez-vous les chevilles gonflées le soir ?", es: "¿Se le hinchan los tobillos por la tarde?", use: "Búsqueda de edemas en insuficiencia cardíaca." },
        { en: "Vous toussez ? Est-ce que vous crachez ?", es: "¿Tose? ¿Expectora?", use: "Interrogatorio respiratorio básico." },
        { en: "Je vais prendre votre tension et vérifier votre saturation.", es: "Voy a tomarle la presión y revisar su saturación.", use: "Para anunciar el examen antes de empezar." }
      ],
      text: {
        type: "dialogue",
        title: "Un patient essoufflé",
        context: "Consulta de un hombre de 68 años con falta de aire y piernas hinchadas.",
        lines: [
          { who: "Médecin", en: "Bonjour monsieur, qu’est-ce qui vous amène aujourd’hui ?" },
          { who: "Patient", en: "Bonjour docteur. Je suis très essoufflé depuis une semaine, même pour monter l’escalier." },
          { who: "Médecin", en: "Vous avez mal à la poitrine ?" },
          { who: "Patient", en: "Non, pas de douleur. Mais mon cœur s’emballe parfois, et j’ai les chevilles gonflées le soir." },
          { who: "Médecin", en: "Vous toussez ? Comment dormez-vous ?" },
          { who: "Patient", en: "Je tousse la nuit, une toux sèche. Et je dors avec trois oreillers, sinon je manque d’air." },
          { who: "Médecin", en: "Asseyez-vous, s’il vous plaît. Je vais prendre votre tension et votre saturation." },
          { who: "Patient", en: "D’accord. C’est grave, docteur ?" },
          { who: "Médecin", en: "Votre tension est à 14 sur 8 et votre saturation à 93 % en air ambiant. Je vois aussi un œdème des deux jambes." },
          { who: "Patient", en: "Qu’est-ce que ça veut dire ?" },
          { who: "Médecin", en: "Je suspecte une insuffisance cardiaque. Je vais faire un électrocardiogramme et une prise de sang avec un BNP, puis une échographie du cœur." },
          { who: "Patient", en: "Très bien, docteur. Merci." }
        ]
      },
      grammar: [
        "Con las partes del cuerpo se usa « avoir mal à » + artículo contracto: mal au dos (à + le), mal à la poitrine, mal à l’estomac, mal aux jambes (à + les).",
        "El género hay que aprenderlo con la palabra: la douleur, la toux, la saturación; pero le cœur, l’infarctus, l’œdème (masculinos).",
        "La tensión se lee en forma corta: « 14 sur 8 » es 140/80 mmHg; « 15 sur 9 » es 150/90. En el informe se escribe « 140/80 mmHg ».",
        "Con « vous » se pregunta por inversión (« Avez-vous mal ? ») o con « est-ce que » (« Est-ce que vous toussez ? »); ambas son correctas en la consulta."
      ],
      tip: "Falso amigo: « avoir mal au cœur » es tener náuseas. Si el paciente tiene dolor en el corazón, dice « j’ai mal à la poitrine » o « j’ai une douleur dans la poitrine ». Antes de seguir, confirma con « Vous avez des nausées ? ».",
      exercises: [
        { type: "mc", q: "Una paciente francesa dice « J’ai mal au cœur ». ¿Qué síntoma describe con más probabilidad?", options: ["Dolor torácico", "Náuseas", "Palpitaciones", "Dolor de espalda"], answer: 1, explain: "« Avoir mal au cœur » significa tener náuseas. El dolor torácico se dice « mal à la poitrine »." },
        { type: "fill", q: "J’ai les jambes ___ le soir. (hinchadas)", answer: ["gonflées", "gonflees"], explain: "« Les jambes gonflées » es la forma coloquial del edema de miembros inferiores." },
        { type: "order", q: "Ordena la oración", words: ["votre", "prendre", "vais", "tension", "Je"], answer: "Je vais prendre votre tension", explain: "Futuro próximo: je vais + infinitivo. Sirve para anunciar cada gesto del examen." },
        { type: "mc", q: "El médico dice « Votre tension est à 15 sur 9 ». ¿Qué valor es?", options: ["150/90 mmHg", "15/9 mmHg", "1,5/0,9 mmHg", "105/90 mmHg"], answer: 0, explain: "En el habla se omite el cero: 15 sur 9 equivale a 150/90 mmHg." },
        { type: "fill", q: "Sa ___ en oxygène est à 91 % en air ambiant. (saturación)", answer: ["saturation"], explain: "« La saturation en oxygène » o « la sat ». « En air ambiant » significa sin oxígeno suplementario." },
        { type: "mc", q: "El paciente dice « Je dors avec trois oreillers, sinon je manque d’air ». ¿Qué signo describe?", options: ["Ortopnea", "Hemoptisis", "Palpitaciones", "Tos productiva"], answer: 0, explain: "Es la orthopnée: disnea al acostarse, que mejora con varias almohadas." }
      ]
    },
    {
      id: "m3l2",
      title: "Riñón, electrolitos y endocrino",
      minutes: 15,
      goal: "Al terminar podrás leer y decir en voz alta valores de creatinina, electrolitos, glucemia y HbA1c con las unidades francesas, y explicar estos resultados a un paciente.",
      intro: "En Francia las unidades no son las mismas que en México. La glucemia se da en g/L (no mg/dL), la creatinina en µmol/L (no mg/dL) y los iones en mmol/L. La coma es el separador decimal: « 1,26 g/L » se lee « un virgule vingt-six ». Un error de unidad cambia un diagnóstico, así que conviene dominar esta clase.",
      vocab: [
        { en: "la créatinine", ipa: "/la kʁe.a.ti.nin/", es: "creatinina; en Francia en µmol/L (1 mg/dL ≈ 88,4 µmol/L)", ex: "Sa créatinine est à 98 micromoles par litre." },
        { en: "le débit de filtration glomérulaire (DFG)", ipa: "/lə de.bi də fil.tʁa.sjɔ̃ glɔ.me.ʁy.lɛʁ/", es: "tasa de filtración glomerular (TFG); en mL/min/1,73 m²", ex: "Le DFG est à 52 mL par minute, soit une insuffisance rénale modérée." },
        { en: "l’insuffisance rénale (aiguë, chronique)", ipa: "/lɛ̃.sy.fi.zɑ̃s ʁe.nal e.gy, ʃʁɔ.nik/", es: "insuficiencia renal aguda (IRA) o crónica (IRC)", ex: "Une insuffisance rénale aiguë est apparue après la déshydratation." },
        { en: "la dialyse", ipa: "/la dja.liz/", es: "diálisis (hémodialyse = hemodiálisis); coloquial: « la machine »", ex: "Il est dialysé trois fois par semaine." },
        { en: "la natrémie", ipa: "/la na.tʁe.mi/", es: "sodio sérico (natremia); normal: 135 a 145 mmol/L", ex: "La natrémie est à 128 millimoles par litre : c’est une hyponatrémie." },
        { en: "la kaliémie", ipa: "/la ka.ljɛ.mi/", es: "potasio sérico (potasemia); normal: 3,5 a 5,0 mmol/L; coloquial: le potassium", ex: "Sa kaliémie est à 4,2 millimoles par litre, c’est normal." },
        { en: "l’hyperkaliémie", ipa: "/li.pɛʁ.ka.ljɛ.mi/", es: "hiperpotasemia; el riesgo es una arritmia, hay que pedir un ECG", ex: "Une hyperkaliémie à 6,8 avec des ondes T pointues est une urgence." },
        { en: "la glycémie", ipa: "/la gli.se.mi/", es: "glucemia; en g/L (1 g/L ≈ 5,5 mmol/L ≈ 100 mg/dL); coloquial: « le taux de sucre »", ex: "Sa glycémie à jeun est à 1,45 gramme par litre." },
        { en: "l’hémoglobine glyquée (HbA1c)", ipa: "/le.mɔ.glɔ.bin gli.ke/", es: "hemoglobina glicosilada; en %; la meta suele ser menos de 7 %", ex: "L’hémoglobine glyquée est à 9,1 %, le diabète est déséquilibré." },
        { en: "le diabète de type 2", ipa: "/lə dja.bɛt də tip dø/", es: "diabetes tipo 2", ex: "Il a un diabète de type 2 depuis dix ans." },
        { en: "la thyroïde", ipa: "/la ti.ʁɔ.id/", es: "tiroides; la TSH normal ronda 0,4 a 4 mUI/L; hypothyroïdie = hipotiroidismo", ex: "Je vais prescrire un bilan thyroïdien avec la TSH." },
        { en: "la polyurie-polydipsie", ipa: "/la pɔ.li.y.ʁi pɔ.li.dip.si/", es: "poliuria-polidipsia; coloquial: « je bois et j’urine beaucoup »", ex: "Elle consulte pour une polyurie-polydipsie depuis un mois." }
      ],
      phrases: [
        { en: "Vous urinez beaucoup ? Vous avez très soif ?", es: "¿Orina mucho? ¿Tiene mucha sed?", use: "Interrogatorio de hiperglucemia." },
        { en: "Votre glycémie à jeun est à 1,45 g/L.", es: "Su glucemia en ayunas es de 1,45 g/L.", use: "Para dar el resultado; se dice « un virgule quarante-cinq gramme par litre »." },
        { en: "Vos reins fonctionnent moins bien que la normale.", es: "Sus riñones funcionan peor de lo normal.", use: "Para explicar una insuficiencia renal en lenguaje claro." },
        { en: "Votre potassium est trop élevé, il faut refaire une prise de sang et un ECG.", es: "Su potasio está demasiado alto, hay que repetir el análisis y hacer un ECG.", use: "Ante una hiperpotasemia." },
        { en: "Avez-vous des sueurs, des tremblements ou un malaise ? C’est peut-être une hypoglycémie.", es: "¿Tiene sudores, temblores o malestar? Puede ser una hipoglucemia.", use: "En pacientes tratados con insulina o sulfonilureas." },
        { en: "Évitez les anti-inflammatoires comme l’ibuprofène, ils abîment les reins.", es: "Evite los antiinflamatorios como el ibuprofeno, dañan los riñones.", use: "Consejo en insuficiencia renal." },
        { en: "Je vais prescrire un bilan thyroïdien avec la TSH.", es: "Voy a pedir pruebas tiroideas con TSH.", use: "Ante cansancio, cambio de peso o sospecha de enfermedad tiroidea." }
      ],
      text: {
        type: "dialogue",
        title: "Des résultats de prise de sang",
        context: "Una paciente de 58 años con diabetes tipo 2 recibe sus resultados de laboratorio.",
        lines: [
          { who: "Médecin", en: "Madame, vos résultats sont arrivés. Comment vous sentez-vous ?" },
          { who: "Patiente", en: "Très fatiguée, docteur. Je bois beaucoup d’eau et je me lève trois fois la nuit pour faire pipi." },
          { who: "Médecin", en: "Ce sont des signes typiques d’un diabète déséquilibré. Votre glycémie à jeun est à 2,3 g/L et votre hémoglobine glyquée à 9,1 %." },
          { who: "Patiente", en: "C’est élevé ?" },
          { who: "Médecin", en: "Oui. Votre objectif est de rester en dessous de 7 %. Votre créatinine est à 98 micromoles par litre, ce qui donne un débit de filtration à 52." },
          { who: "Patiente", en: "Ça veut dire que mes reins sont abîmés ?" },
          { who: "Médecin", en: "Ils fonctionnent un peu moins bien que la normale. C’est une insuffisance rénale chronique modérée, et le diabète peut en être la cause." },
          { who: "Patiente", en: "Et mon potassium ?" },
          { who: "Médecin", en: "Il est normal, à 4,2 millimoles par litre, comme le sodium." },
          { who: "Patiente", en: "Qu’est-ce qu’on fait maintenant ?" },
          { who: "Médecin", en: "On va ajuster votre traitement et ajouter un médicament qui protège aussi le cœur et les reins. Évitez l’ibuprofène et buvez normalement." },
          { who: "Patiente", en: "D’accord. Je dois refaire une prise de sang ?" },
          { who: "Médecin", en: "Oui, dans trois mois, pour contrôler l’hémoglobine glyquée et la créatinine." }
        ]
      },
      grammar: [
        "Sufijos que se repiten: -émie (en la sangre: glycémie, natrémie, kaliémie), -urie (en la orina: polyurie, oligurie), hypo- (bajo) e hyper- (alto): hyponatrémie, hyperglycémie, hypoglycémie.",
        "Unidades francesas: glucemia en g/L (diagnóstico de diabetes: glucemia en ayunas de 1,26 g/L o más, es decir 7,0 mmol/L, confirmada en dos ocasiones); HbA1c en %; creatinina en µmol/L; Na y K en mmol/L; TSH en mUI/L; hemoglobina en g/dL.",
        "El valor se dice con « à »: « sa kaliémie est à 6,2 ». La coma se lee « virgule »: 1,26 g/L = « un virgule vingt-six gramme par litre ». « Par » se usa para « por »: « par litre », « par minute ».",
        "Dos conductas que conviene saber decir: la hiperpotasemia con cambios en el ECG (o K de 6,5 mmol/L o más) es urgencia, y la hiponatremia crónica se corrige despacio, no más de 8 a 10 mmol/L en 24 horas, para evitar la desmielinización osmótica."
      ],
      tip: "Convierte siempre las unidades antes de hablar: creatinina de 1,1 mg/dL es 97 µmol/L, y glucemia de 126 mg/dL es 1,26 g/L. Un valor dicho en la unidad equivocada puede parecer una catástrofe o pasar desapercibido. Cuando dudes, pregunta « C’est en grammes par litre ou en milligrammes par décilitre ? ».",
      exercises: [
        { type: "mc", q: "¿A cuántos mg/dL equivale una glucemia en ayunas de 1,26 g/L?", options: ["12,6 mg/dL", "126 mg/dL", "1260 mg/dL", "2,26 mg/dL"], answer: 1, explain: "1 g/L son 100 mg/dL, así que 1,26 g/L son 126 mg/dL, que es el umbral diagnóstico de diabetes." },
        { type: "mc", q: "Un paciente tiene una « kaliémie à 6,8 mmol/L » y ondas T picudas en el ECG. ¿Qué situación describe?", options: ["Hipopotasemia leve", "Hiperpotasemia con riesgo de arritmia, urgencia", "Hipernatremia", "Valor normal"], answer: 1, explain: "Hyperkaliémie con cambios en el ECG es una urgencia: se trata en medio hospitalario (gluconato de calcio, insulina con glucosa, salbutamol, entre otras medidas)." },
        { type: "fill", q: "Vous urinez beaucoup et vous avez très ___ ? (sed)", answer: ["soif"], explain: "« Avoir soif » es tener sed. Es el segundo síntoma de la polyurie-polydipsie." },
        { type: "fill", q: "Sa créatinine est ___ 98 micromoles par litre. (el valor se dice con esta preposición)", answer: ["à", "a"], explain: "Los valores de laboratorio se dicen con « à »: « est à 98 »." },
        { type: "order", q: "Ordena la oración", words: ["anti-inflammatoires", "Évitez", "comme", "les", "l’ibuprofène"], answer: "Évitez les anti-inflammatoires comme l’ibuprofène", explain: "Imperativo con vous (verbo en -ez). Consejo clásico en insuficiencia renal." },
        { type: "mc", q: "En una hiponatremia crónica, ¿cómo se debe corregir la natrémie?", options: ["Lo más rápido posible", "Lentamente, sin pasar de unos 8 a 10 mmol/L en 24 horas", "Solo con furosemida", "No se corrige"], answer: 1, explain: "Una corrección demasiado rápida puede provocar desmielinización osmótica." }
      ]
    },
    {
      id: "m3l3",
      title: "Aparato digestivo e hígado",
      minutes: 15,
      goal: "Al terminar podrás hacer un interrogatorio digestivo, describir el dolor abdominal y reconocer los términos de hepatología más usados.",
      intro: "En francés « le ventre » es el abdomen para el paciente y « l’abdomen » para el informe; « l’estomac » es solo el estómago, aunque el paciente lo usa para todo el dolor del vientre. Cuidado con « les selles » (heces), la palabra neutra: no uses « la caca » con adultos. Y recuerda que « mal au cœur » significa náuseas.",
      vocab: [
        { en: "les nausées", ipa: "/le no.ze/", es: "náuseas; coloquial: « j’ai mal au cœur »", ex: "Elle a des nausées après les repas." },
        { en: "les vomissements", ipa: "/le vɔ.mis.mɑ̃/", es: "vómitos; verbo: vomir (coloquial: « rendre »)", ex: "Il a eu trois vomissements depuis ce matin." },
        { en: "la diarrhée", ipa: "/la dja.ʁe/", es: "diarrea; « avoir la diarrhée » o « avoir de la diarrhée »", ex: "Elle a de la diarrhée depuis deux jours." },
        { en: "la constipation", ipa: "/la kɔ̃s.ti.pa.sjɔ̃/", es: "estreñimiento", ex: "Il est constipé depuis une semaine." },
        { en: "le méléna", ipa: "/lə me.le.na/", es: "melena: heces negras, fétidas; contraste con la rectorragie (sangre roja)", ex: "Des selles noires comme du goudron évoquent un méléna." },
        { en: "le reflux gastro-œsophagien (RGO)", ipa: "/lə ʁə.fly gas.tʁo.ɛ.zɔ.fa.ʒjɛ̃/", es: "reflujo gastroesofágico; coloquial: « des brûlures d’estomac », « des remontées acides »", ex: "Il décrit des brûlures d’estomac surtout la nuit." },
        { en: "l’ulcère gastroduodénal", ipa: "/lyl.sɛʁ gas.tʁo.dɥɔ.de.nal/", es: "úlcera gastroduodenal; dolor epigástrico en ayunas que alivia al comer", ex: "Un ulcère gastroduodénal est possible après les anti-inflammatoires." },
        { en: "l’appendicite", ipa: "/la.pɛ̃.di.sit/", es: "apendicitis; dolor en la fosse iliaque droite (fosa ilíaca derecha)", ex: "La douleur dans la fosse iliaque droite évoque une appendicite." },
        { en: "la vésicule biliaire", ipa: "/la ve.zi.kyl bi.ljɛʁ/", es: "vesícula biliar; cholécystite = colecistitis; calcul = cálculo", ex: "L’échographie montre un calcul dans la vésicule biliaire." },
        { en: "l’ictère (la jaunisse)", ipa: "/lik.tɛʁ, la ʒo.nis/", es: "ictericia; coloquial: « la jaunisse », « les yeux jaunes »", ex: "Son mari trouve que ses yeux sont jaunes : c’est un ictère." },
        { en: "le foie", ipa: "/lə fwa/", es: "hígado; adjetivo: hépatique", ex: "Le foie est légèrement augmenté de volume." },
        { en: "la cirrhose", ipa: "/la si.ʁoz/", es: "cirrosis; hépatite = hepatitis", ex: "La cirrhose est due à l’alcool dans ce cas." }
      ],
      phrases: [
        { en: "Où avez-vous mal exactement dans le ventre ?", es: "¿Dónde le duele exactamente en el abdomen?", use: "Para localizar el dolor; pide que señale con el dedo." },
        { en: "La douleur est-elle apparue après un repas ?", es: "¿El dolor apareció después de comer?", use: "Orienta a vesícula o úlcera." },
        { en: "Avez-vous vomi ? Y a-t-il du sang dans les vomissements ?", es: "¿Ha vomitado? ¿Hay sangre en el vómito?", use: "Búsqueda de hemorragia digestiva alta." },
        { en: "Comment sont vos selles ? Sont-elles noires ou avec du sang ?", es: "¿Cómo son sus heces? ¿Negras o con sangre?", use: "Para melena o rectorragia." },
        { en: "Avez-vous de la fièvre, la peau ou les yeux jaunes ?", es: "¿Tiene fiebre, la piel o los ojos amarillos?", use: "Signos de afectación biliar o hepática." },
        { en: "Je vais palper votre ventre ; dites-moi si cela fait mal.", es: "Voy a palparle el abdomen; dígame si le duele.", use: "Antes de la palpación abdominal." },
        { en: "Combien de verres d’alcool buvez-vous par semaine ?", es: "¿Cuántas copas de alcohol bebe por semana?", use: "Hepatología: siempre se cuantifica el consumo." }
      ],
      text: {
        type: "dialogue",
        title: "Une douleur sous les côtes",
        context: "Una mujer consulta por dolor en el hipocondrio derecho, fiebre y ojos amarillos.",
        lines: [
          { who: "Médecin", en: "Bonjour madame, qu’est-ce qui vous amène ?" },
          { who: "Patiente", en: "Docteur, j’ai très mal au ventre depuis hier soir, ici, sous les côtes à droite." },
          { who: "Médecin", en: "Ça a commencé après un repas ?" },
          { who: "Patiente", en: "Oui, après une raclette. La douleur est forte et elle va jusque dans le dos." },
          { who: "Médecin", en: "Avez-vous des nausées ou des vomissements ?" },
          { who: "Patiente", en: "J’ai vomi deux fois, et j’ai mal au cœur en permanence." },
          { who: "Médecin", en: "Avez-vous de la fièvre ? Vos selles ont-elles changé ? Vos yeux sont-ils jaunes ?" },
          { who: "Patiente", en: "J’ai 38,2 le matin. Pas de diarrhée. Mon mari dit que mes yeux sont un peu jaunes." },
          { who: "Médecin", en: "Je vais palper votre ventre. Respirez profondément. Ça fait mal, là ?" },
          { who: "Patiente", en: "Aïe, oui ! Ça fait très mal et je ne peux plus respirer." },
          { who: "Médecin", en: "Le signe de Murphy est positif. Avec la fièvre et la jaunisse, je suspecte un calcul de la vésicule ou des voies biliaires, avec une infection." },
          { who: "Patiente", en: "C’est grave ?" },
          { who: "Médecin", en: "On va vous faire une prise de sang et une échographie abdominale aujourd’hui, et probablement vous hospitaliser pour des antibiotiques." },
          { who: "Patiente", en: "D’accord. Je dois arrêter de manger ?" },
          { who: "Médecin", en: "Oui, restez à jeun pour le moment." }
        ]
      },
      grammar: [
        "Los síntomas se expresan con « avoir » y el partitivo: avoir de la fièvre, de la diarrhée, du sang, des nausées. En negativa todo se reduce a « de »: « pas de fièvre », « pas de diarrhée ».",
        "Los síntomas pasados van en passé composé: « J’ai vomi », « J’ai eu de la diarrhée ». El verbo vomir lleva avoir.",
        "En la pregunta por inversión con 3.ª persona terminada en vocal aparece una « -t- » de enlace: « Y a-t-il du sang ? », « A-t-elle de la fièvre ? ».",
        "Para localizar: « sous les côtes », « dans la fosse iliaque droite », « au creux de l’estomac » (epigastrio), « côté droit / gauche »."
      ],
      tip: "« Une crise de foie » en el habla popular francesa no es una enfermedad del hígado: es una indigestión. Los médicos hablan de « troubles digestifs ». Y « avoir mal au foie » casi nunca describe dolor hepático real.",
      exercises: [
        { type: "mc", q: "Una paciente tiene dolor en el hipocondrio derecho, fiebre e ictericia. ¿Qué tríada clásica forma y qué sugiere?", options: ["Tríada de Charcot: angiocolitis", "Tríada de Beck: taponamiento", "Tríada de Cushing: hipertensión intracraneal", "Tríada de Virchow: trombosis"], answer: 0, explain: "Dolor del hipocondrio derecho, fiebre e ictericia forman la tríada de Charcot, típica de la angiocolitis (infección de la vía biliar)." },
        { type: "fill", q: "Restez ___ jeun pour le moment. (en ayunas)", answer: ["à", "a"], explain: "« À jeun » significa en ayunas." },
        { type: "order", q: "Ordena la oración", words: ["votre", "palper", "vais", "ventre", "Je"], answer: "Je vais palper votre ventre", explain: "Se anuncia el gesto antes de tocar al paciente." },
        { type: "mc", q: "« J’ai une crise de foie » en francés popular significa normalmente…", options: ["hepatitis aguda", "cirrosis", "indigestión", "cólico biliar"], answer: 2, explain: "Es una expresión popular que designa una indigestión, no una enfermedad hepática." },
        { type: "fill", q: "Des selles noires et nauséabondes s’appellent un ___. (melena)", answer: ["méléna", "melena"], explain: "Le méléna indica sangrado digestivo alto digerido. La sangre roja en las heces es una rectorragie." },
        { type: "mc", q: "Completa: « Avez-vous ___ fièvre ? »", options: ["de la", "du", "des", "la"], answer: 0, explain: "Fièvre es femenino: se usa el partitivo « de la ». « Avoir de la fièvre » es la fórmula clínica habitual." }
      ]
    },
    {
      id: "m3l4",
      title: "Neurología, aparato locomotor y reumatología",
      minutes: 15,
      goal: "Al terminar podrás describir cefaleas, déficit neurológico y dolor articular, y reconocer los signos de alarma de un ACV.",
      intro: "En neurología el paciente dice « j’ai la tête qui tourne », « je n’ai plus de force dans le bras » o « j’ai des fourmis dans la main ». Tu trabajo es traducir eso al término técnico. Para el aparato locomotor y la reumatología, los matices (cuánto dura la rigidez matinal, qué articulaciones) sirven para distinguir artrosis de artritis.",
      vocab: [
        { en: "la céphalée (le mal de tête)", ipa: "/la se.fa.le, lə mal də tɛt/", es: "cefalea; coloquial: « mal de tête »", ex: "Il consulte pour des céphalées depuis trois jours." },
        { en: "la migraine", ipa: "/la mi.gʁɛn/", es: "migraña (cefalea episódica, a menudo unilateral y pulsátil); no es sinónimo de cualquier dolor de cabeza", ex: "Elle a des migraines avec des nausées et une gêne à la lumière." },
        { en: "les vertiges", ipa: "/le vɛʁ.tiʒ/", es: "vértigo; coloquial: « la tête qui tourne »; no es lo mismo que un « malaise » (síncope o presíncope)", ex: "Il a des vertiges quand il tourne la tête dans le lit." },
        { en: "la crise d’épilepsie", ipa: "/la kʁiz de.pi.lɛp.si/", es: "crisis epiléptica; coloquial: « une crise »", ex: "Elle a fait une crise d’épilepsie avec perte de connaissance." },
        { en: "l’AVC (accident vasculaire cérébral)", ipa: "/la.ve.se, ak.si.dɑ̃ vas.ky.lɛʁ se.ʁe.bʁal/", es: "ACV o ictus; coloquial: « une attaque »", ex: "Un AVC est suspecté devant le déficit du bras droit." },
        { en: "la faiblesse musculaire", ipa: "/la fɛ.blɛs mys.ky.lɛʁ/", es: "debilidad muscular; coloquial: « je n’ai plus de force »", ex: "Il a une faiblesse musculaire du bras droit depuis ce matin." },
        { en: "les fourmillements", ipa: "/le fuʁ.mi.jə.mɑ̃/", es: "hormigueo, parestesias; coloquial: « des fourmis », « des picotements »", ex: "Elle a des fourmillements dans les mains la nuit." },
        { en: "l’articulation", ipa: "/laʁ.ti.ky.la.sjɔ̃/", es: "articulación; arthralgie = dolor articular; arthrite = artritis", ex: "L’articulation du genou est chaude et gonflée." },
        { en: "l’arthrose", ipa: "/laʁ.tʁoz/", es: "artrosis; coloquial: « l’usure »", ex: "L’arthrose du genou fait mal surtout à la marche." },
        { en: "la polyarthrite rhumatoïde", ipa: "/la pɔ.li.aʁ.tʁit ʁy.ma.tɔ.id/", es: "artritis reumatoide; rigidez matinal = « le dérouillage matinal »", ex: "La polyarthrite rhumatoïde touche surtout les petites articulations des mains." },
        { en: "la lombalgie", ipa: "/la lɔ̃.bal.ʒi/", es: "lumbalgia; coloquial: « le mal de dos », « un tour de reins »; sciatique = ciática", ex: "Il a une lombalgie avec une sciatique gauche." },
        { en: "la goutte", ipa: "/la gut/", es: "gota; el ataque típico afecta al dedo gordo del pie (le gros orteil)", ex: "Il fait une crise de goutte au gros orteil." }
      ],
      phrases: [
        { en: "Quand la douleur est-elle apparue : brutalement ou progressivement ?", es: "¿Cuándo apareció el dolor: de golpe o poco a poco?", use: "Primera pregunta ante una cefalea." },
        { en: "Est-ce le pire mal de tête de votre vie ?", es: "¿Es el peor dolor de cabeza de su vida?", use: "Signo de alarma de hemorragia subaracnoidea." },
        { en: "Avez-vous la nuque raide ou de la fièvre ?", es: "¿Tiene la nuca rígida o fiebre?", use: "Para descartar meningitis." },
        { en: "Avez-vous une faiblesse d’un côté du corps ou du mal à parler ?", es: "¿Tiene debilidad en un lado del cuerpo o dificultad para hablar?", use: "Búsqueda de déficit focal." },
        { en: "Vos articulations sont-elles raides le matin ? Pendant combien de temps ?", es: "¿Tiene las articulaciones rígidas por la mañana? ¿Cuánto tiempo?", use: "Distingue dolor inflamatorio (más de 30 a 60 minutos) del mecánico." },
        { en: "La douleur descend-elle dans la jambe jusqu’au pied ?", es: "¿El dolor baja por la pierna hasta el pie?", use: "Para la ciática." },
        { en: "Il faut appeler le 15 tout de suite : cela peut être un AVC.", es: "Hay que llamar al 15 de inmediato: puede ser un ACV.", use: "El 15 es el SAMU, el número de urgencia médica en Francia." }
      ],
      text: {
        type: "dialogue",
        title: "Il ne peut plus parler normalement",
        context: "Un hombre de 72 años llega con su esposa: no habla bien y el brazo derecho no se mueve desde hace 40 minutos.",
        lines: [
          { who: "Médecin", en: "Bonjour madame, que se passe-t-il pour votre mari ?" },
          { who: "Épouse", en: "Docteur, il a soudain du mal à parler et son bras droit ne bouge plus bien." },
          { who: "Médecin", en: "À quelle heure exactement cela a-t-il commencé ?" },
          { who: "Épouse", en: "Il y a quarante minutes, vers 14 h 20. Il était en train de déjeuner." },
          { who: "Médecin", en: "Monsieur, pouvez-vous sourire ? Levez les deux bras, s’il vous plaît." },
          { who: "Épouse", en: "Sa bouche tombe d’un côté. Il dit aussi qu’il a des fourmillements dans la main." },
          { who: "Médecin", en: "A-t-il déjà eu un AVC ? Prend-il des anticoagulants ?" },
          { who: "Épouse", en: "Non, jamais d’AVC. Il a de l’hypertension et une arythmie, mais pas d’anticoagulant." },
          { who: "Médecin", en: "C’est une urgence : je suspecte un accident vasculaire cérébral. Je prends sa glycémie tout de suite et j’appelle le 15." },
          { who: "Épouse", en: "On peut faire quelque chose ?" },
          { who: "Médecin", en: "Oui, plus on agit vite, mieux c’est : un scanner ou une IRM cérébrale, et peut-être un traitement pour dissoudre le caillot." },
          { who: "Épouse", en: "D’accord. Je reste avec lui ?" },
          { who: "Médecin", en: "Oui, restez près de lui. Monsieur, ne mangez et ne buvez rien pour le moment." }
        ]
      },
      grammar: [
        "« Depuis » + presente indica algo que continúa: « J’ai mal au dos depuis trois jours » (me duele desde hace tres días). « Il y a » + passé composé indica el momento pasado: « Ça a commencé il y a trois jours ».",
        "Inversión con passé composé: se invierte el auxiliar y el sujeto, con « -t- » si hace falta: « A-t-il déjà eu un AVC ? », « Prend-il des anticoagulants ? ».",
        "Lado del cuerpo: « le bras droit », « du côté gauche ». Las siglas se leen letra por letra: AVC = « a-vé-cé », IRM = « i-èr-èm ».",
        "En Francia se enseña la sigla VITE para el ictus: Visage (cara), Impossibilité de lever le bras (brazo), Troubles de la parole (habla), Extrême urgence (llamar al 15)."
      ],
      tip: "« Une attaque » en el habla popular suele ser un ACV, y « une crise » es una crisis epiléptica o de otro tipo, según el contexto: pregunta « Qu’est-ce qui s’est passé exactement ? ». Para urgencias vitales se llama al 15 (SAMU); el 112 es el número europeo y también funciona.",
      exercises: [
        { type: "mc", q: "En Francia, ¿a qué número se llama primero ante un posible ACV?", options: ["Le 15 (SAMU)", "Le 17", "Le 911", "Le 100"], answer: 0, explain: "El 15 es el SAMU, la regulación médica de urgencias. El 17 es la policía y el 911 no se usa en Francia." },
        { type: "fill", q: "J’ai mal au dos ___ trois jours. (desde hace, el dolor continúa)", answer: ["depuis"], explain: "« Depuis » + presente expresa una situación que continúa hasta hoy." },
        { type: "fill", q: "J’ai des ___ dans la main gauche. (hormigueos)", answer: ["fourmillements", "picotements"], explain: "« Fourmillements » (o « picotements ») es el término para hormigueo o parestesias." },
        { type: "mc", q: "Una paciente tiene rigidez matinal de más de una hora y las pequeñas articulaciones de las manos inflamadas. ¿Qué es más probable?", options: ["Arthrose", "Polyarthrite rhumatoïde", "Goutte", "Lombalgie mécanique"], answer: 1, explain: "La rigidez matinal prolongada y la afectación de las pequeñas articulaciones orientan a una artritis reumatoide, no a una artrosis." },
        { type: "order", q: "Ordena la oración", words: ["un", "A-t-il", "AVC", "eu", "déjà"], answer: "A-t-il déjà eu un AVC", explain: "Inversión con passé composé: A-t-il + déjà + participio + complemento." },
        { type: "mc", q: "Un paciente tiene dolor brusco, enrojecimiento y calor en el dedo gordo del pie por la noche. ¿Qué diagnóstico se sospecha?", options: ["Arthrose", "Goutte", "Sciatique", "Migraine"], answer: 1, explain: "Es el ataque típico de goutte (gota), con hiperuricemia." }
      ]
    }
  ]
});
