(window.COURSE = window.COURSE || []).push({
  id: "m4", n: 4,
  title: "Interrogatorio y consulta",
  en: "L’interrogatoire",
  summary: "Conduces una consulta completa en francés: motivo de consulta y esquema del dolor, antecedentes, indicaciones durante la exploración física, y cómo explicar el diagnóstico, pedir consentimiento y dar malas noticias.",
  lessons: [
    {
      id: "m4l1",
      title: "Motivo de consulta e historia de la enfermedad actual",
      minutes: 15,
      goal: "Al terminar podrás abrir la consulta y caracterizar un dolor preguntando sede, irradiación, tipo, intensidad, inicio, factores y signos asociados.",
      intro: "Un interrogatorio francés sigue el mismo orden que el que conoces: motivo de consulta, historia de la enfermedad actual, antecedentes. Lo difícil para un hispanohablante es el uso de « depuis » y « il y a », y la diferencia entre « qu’est-ce qui » y « qu’est-ce que ». Con el paciente se usa siempre « vous » y frases cortas.",
      vocab: [
        { en: "le motif de consultation", ipa: "/lə mɔ.tif də kɔ̃.syl.ta.sjɔ̃/", es: "motivo de consulta; se pregunta con « Qu’est-ce qui vous amène ? »", ex: "Le motif de consultation est une douleur au ventre." },
        { en: "l’histoire de la maladie", ipa: "/lis.twaʁ də la ma.la.di/", es: "historia de la enfermedad actual", ex: "L’histoire de la maladie commence il y a trois semaines." },
        { en: "le début brutal / progressif", ipa: "/lə de.by bʁy.tal, pʁɔ.gʁɛ.sif/", es: "inicio brusco o progresivo", ex: "Le début a été brutal, en quelques minutes." },
        { en: "le siège de la douleur", ipa: "/lə sjɛʒ də la du.lœʁ/", es: "localización del dolor; « Où avez-vous mal ? »", ex: "Le siège de la douleur est épigastrique." },
        { en: "l’irradiation", ipa: "/li.ʁa.dja.sjɔ̃/", es: "irradiación; verbo irradier", ex: "La douleur irradie vers le dos." },
        { en: "la brûlure", ipa: "/la bʁy.lyʁ/", es: "quemazón, ardor", ex: "Il décrit une brûlure derrière le sternum." },
        { en: "le serrement (en étau)", ipa: "/lə sɛʁ.mɑ̃, ɑ̃n e.to/", es: "opresión; « comme un étau » = como una prensa", ex: "Elle ressent un serrement dans la poitrine." },
        { en: "la douleur pulsatile", ipa: "/la du.lœʁ pyl.sa.til/", es: "dolor pulsátil; el paciente dice « ça bat »", ex: "La douleur pulsatile est localisée à la tempe." },
        { en: "l’intensité (échelle de 0 à 10)", ipa: "/lɛ̃.tɑ̃.si.te/", es: "intensidad; en Francia se usa la EVA (échelle visuelle analogique)", ex: "L’intensité est de 7 sur 10." },
        { en: "les facteurs aggravants / soulageants", ipa: "/le fak.tœʁ a.gʁa.vɑ̃, su.la.ʒɑ̃/", es: "factores que agravan o alivian", ex: "Les facteurs soulageants sont le repos et la chaleur." },
        { en: "les signes associés", ipa: "/le siɲ a.sɔ.sje/", es: "síntomas acompañantes", ex: "Les signes associés sont des nausées et de la fièvre." },
        { en: "l’évolution", ipa: "/le.vɔ.ly.sjɔ̃/", es: "evolución en el tiempo; « ça s’aggrave », « ça s’améliore »", ex: "L’évolution est lentement progressive depuis un mois." }
      ],
      phrases: [
        { en: "Qu’est-ce qui vous amène aujourd’hui ?", es: "¿Qué lo trae hoy por aquí?", use: "Pregunta abierta para abrir la consulta." },
        { en: "Depuis quand avez-vous cette douleur ?", es: "¿Desde cuándo tiene este dolor?", use: "Para precisar el inicio." },
        { en: "Où avez-vous mal ? Montrez-moi avec un doigt.", es: "¿Dónde le duele? Muéstreme con un dedo.", use: "Para localizar el dolor." },
        { en: "Sur une échelle de 0 à 10, à combien évaluez-vous votre douleur ?", es: "En una escala de 0 a 10, ¿cuánto le duele?", use: "Para la intensidad." },
        { en: "À quoi ressemble la douleur : une brûlure, un serrement, un coup de poignard ?", es: "¿Cómo es el dolor: ardor, opresión, puñalada?", use: "Para el tipo de dolor." },
        { en: "Qu’est-ce qui l’aggrave ? Qu’est-ce qui la soulage ?", es: "¿Qué lo empeora? ¿Qué lo alivia?", use: "Factores agravantes y calmantes." },
        { en: "Avez-vous remarqué d’autres symptômes en même temps ?", es: "¿Ha notado otros síntomas al mismo tiempo?", use: "Signos asociados." }
      ],
      text: {
        type: "dialogue",
        title: "Une douleur à l’estomac",
        context: "Un hombre consulta por ardor epigástrico de tres semanas; el médico recorre el esquema del dolor.",
        lines: [
          { who: "Médecin", en: "Bonjour monsieur, qu’est-ce qui vous amène aujourd’hui ?" },
          { who: "Patient", en: "Bonjour docteur. J’ai mal à l’estomac depuis trois semaines." },
          { who: "Médecin", en: "Où avez-vous mal exactement ? Montrez-moi avec un doigt." },
          { who: "Patient", en: "Ici, en haut du ventre, juste sous le sternum." },
          { who: "Médecin", en: "La douleur reste à cet endroit ou elle irradie ailleurs ?" },
          { who: "Patient", en: "Elle remonte parfois derrière le sternum et jusque dans le dos." },
          { who: "Médecin", en: "À quoi ressemble-t-elle : une brûlure, un serrement, un coup de poignard ?" },
          { who: "Patient", en: "C’est comme une brûlure. Sur une échelle de 0 à 10, je dirais 6." },
          { who: "Médecin", en: "Quand est-elle apparue : brutalement ou progressivement ?" },
          { who: "Patient", en: "Progressivement. Elle revient surtout à jeun et la nuit." },
          { who: "Médecin", en: "Qu’est-ce qui l’aggrave, et qu’est-ce qui la soulage ?" },
          { who: "Patient", en: "Le café et l’ibuprofène l’aggravent. Manger un peu me soulage." },
          { who: "Médecin", en: "Avez-vous des vomissements, du sang dans les selles ou avez-vous perdu du poids ?" },
          { who: "Patient", en: "Non, rien de tout ça. Seulement des remontées acides." }
        ]
      },
      grammar: [
        "Duración: « depuis » + presente = el dolor sigue (« J’ai mal depuis trois semaines »). « Il y a » + passé composé = momento del inicio (« Ça a commencé il y a trois semaines »). La pregunta es « Depuis quand ? ».",
        "« Qu’est-ce qui » se usa cuando lo que se pregunta es el sujeto (« Qu’est-ce qui l’aggrave ? »). « Qu’est-ce que » cuando es el objeto (« Qu’est-ce que vous ressentez ? »).",
        "Los pronombres de objeto van antes del verbo: « Ça l’aggrave », « Ça me soulage ». Se omite el artículo: « Elle irradie » se refiere a « la douleur ».",
        "Para cuantificar: « Sur une échelle de 0 à 10 » y la respuesta « je dirais 6 » o « c’est un 6 »."
      ],
      tip: "Con el paciente es mejor « avoir mal » que « avoir de la douleur »: « Où avez-vous mal ? ». Cuidado con « la gêne » (molestia leve): no es « gene » (el gen se dice « le gène »).",
      exercises: [
        { type: "mc", q: "¿Qué frase dice « me duele desde hace tres días (y sigue) »?", options: ["J’ai mal depuis trois jours", "J’ai eu mal il y a trois jours", "J’ai mal il y a trois jours", "J’avais mal depuis trois jours"], answer: 0, explain: "« Depuis » + presente expresa una situación que continúa. « Il y a » + passé composé indica un evento pasado puntual." },
        { type: "mc", q: "¿Cuál es la pregunta correcta para « ¿Qué lo alivia? »?", options: ["Qu’est-ce que vous soulage ?", "Qu’est-ce qui vous soulage ?", "Qui est-ce qui vous soulage ?", "Que vous soulage ?"], answer: 1, explain: "« Qu’est-ce qui » + verbo cuando lo que se pregunta es el sujeto." },
        { type: "fill", q: "Sur une ___ de 0 à 10, à combien évaluez-vous votre douleur ? (escala)", answer: ["échelle", "echelle"], explain: "« Échelle » es escala. En Francia se usa también la EVA, échelle visuelle analogique." },
        { type: "fill", q: "La douleur ___ dans le dos. (se irradia)", answer: ["irradie"], explain: "« Irradier » es un verbo en -er: elle irradie." },
        { type: "order", q: "Ordena la oración", words: ["avez-vous", "quand", "Depuis", "cette", "douleur"], answer: "Depuis quand avez-vous cette douleur", explain: "Pregunta con inversión: Depuis quand + verbo-sujeto + complemento." },
        { type: "mc", q: "Una paciente dice « C’est comme un étau dans la poitrine ». ¿Qué tipo de dolor describe?", options: ["Quemazón", "Opresión", "Puñalada", "Pulsátil"], answer: 1, explain: "« Un étau » es una prensa: describe un serrement (opresión), típico de la angina de pecho." }
      ]
    },
    {
      id: "m4l2",
      title: "Antecedentes",
      minutes: 15,
      goal: "Al terminar podrás interrogar antecedentes médicos, quirúrgicos, tratamientos, alergias, antecedentes familiares y hábitos.",
      intro: "Los antecedentes (« les antécédents », abreviados ATCD) se recogen en un orden fijo. Para el hispanohablante, lo difícil es el uso de los tiempos del pasado (cuándo usar passé composé o imparfait) y de las construcciones como « être opéré de » y « être allergique à ». Con el paciente evita las abreviaturas.",
      vocab: [
        { en: "les antécédents médicaux", ipa: "/le.zɑ̃.te.se.dɑ̃ me.di.ko/", es: "antecedentes médicos (enfermedades previas)", ex: "Ses antécédents médicaux sont une hypertension et un diabète." },
        { en: "les antécédents chirurgicaux", ipa: "/le.zɑ̃.te.se.dɑ̃ ʃi.ʁyʁ.ʒi.ko/", es: "antecedentes quirúrgicos; « avoir été opéré de »", ex: "Ses antécédents chirurgicaux sont une appendicectomie et une hernie." },
        { en: "le traitement habituel", ipa: "/lə tʁɛt.mɑ̃ a.bi.tɥɛl/", es: "tratamiento habitual; coloquial: « les médicaments que vous prenez »", ex: "Son traitement habituel est du ramipril et de la metformine." },
        { en: "l’allergie", ipa: "/la.lɛʁ.ʒi/", es: "alergia; « être allergique à »", ex: "Elle est allergique à la pénicilline." },
        { en: "l’intolérance", ipa: "/lɛ̃.tɔ.le.ʁɑ̃s/", es: "intolerancia (efecto adverso sin mecanismo alérgico)", ex: "Il a une intolérance à la metformine, avec de la diarrhée." },
        { en: "les antécédents familiaux", ipa: "/le.zɑ̃.te.se.dɑ̃ fa.mi.ljo/", es: "antecedentes familiares", ex: "Les antécédents familiaux sont un infarctus chez le père." },
        { en: "le tabagisme (en paquets-années)", ipa: "/lə ta.ba.ʒism, ɑ̃ pa.kɛ.a.ne/", es: "tabaquismo; paquetes-año = paquetes diarios × años de consumo", ex: "Il a un tabagisme à vingt paquets-années, sevré depuis cinq ans." },
        { en: "la consommation d’alcool", ipa: "/la kɔ̃.sɔ.ma.sjɔ̃ dal.kɔl/", es: "consumo de alcohol; se cuenta en verres (copas estándar)", ex: "La consommation d’alcool est de deux verres par semaine." },
        { en: "la profession", ipa: "/la pʁɔ.fe.sjɔ̃/", es: "ocupación; « Quel est votre métier ? »", ex: "Sa profession est infirmier dans un service de nuit." },
        { en: "la vaccination à jour", ipa: "/la vak.si.na.sjɔ̃ a ʒuʁ/", es: "vacunación al día; carnet de vaccination = cartilla de vacunación", ex: "Sa vaccination est à jour pour le tétanos." },
        { en: "l’hypertension artérielle (HTA)", ipa: "/li.pɛʁ.tɑ̃.sjɔ̃ aʁ.te.ʁjɛl, a.ʃa.te/", es: "hipertensión arterial; coloquial: « de la tension »", ex: "Il est suivi pour une hypertension artérielle." },
        { en: "le fluidifiant du sang (l’anticoagulant)", ipa: "/lə flɥi.di.fjɑ̃ dy sɑ̃, lɑ̃.ti.a.gy.lɑ̃/", es: "anticoagulante o antiagregante; coloquial: « un fluidifiant du sang »", ex: "Il prend un anticoagulant pour sa fibrillation atriale." }
      ],
      phrases: [
        { en: "Avez-vous des antécédents médicaux, comme de l’hypertension ou du diabète ?", es: "¿Tiene antecedentes médicos, como hipertensión o diabetes?", use: "Inicio de los antecedentes." },
        { en: "Avez-vous déjà été opéré ? De quoi et en quelle année ?", es: "¿Lo han operado alguna vez? ¿De qué y en qué año?", use: "Antecedentes quirúrgicos." },
        { en: "Quels médicaments prenez-vous régulièrement ? Avez-vous votre ordonnance ?", es: "¿Qué medicamentos toma regularmente? ¿Trae su receta?", use: "Tratamiento habitual." },
        { en: "Êtes-vous allergique à un médicament, comme la pénicilline ?", es: "¿Es alérgico a algún medicamento, como la penicilina?", use: "Siempre antes de recetar." },
        { en: "Y a-t-il des maladies dans votre famille : cœur, cancer, diabète ?", es: "¿Hay enfermedades en su familia: corazón, cáncer, diabetes?", use: "Antecedentes familiares." },
        { en: "Fumez-vous ? Combien de cigarettes par jour, et depuis quand ?", es: "¿Fuma? ¿Cuántos cigarrillos al día y desde cuándo?", use: "Para calcular los paquetes-año." },
        { en: "Combien de verres d’alcool buvez-vous par semaine ?", es: "¿Cuántas copas de alcohol bebe por semana?", use: "Consumo de alcohol." }
      ],
      text: {
        type: "dialogue",
        title: "Les antécédents d’un patient",
        context: "Un hombre de 62 años en su primera consulta: el médico revisa sus antecedentes uno por uno.",
        lines: [
          { who: "Médecin", en: "Avant de commencer, je vais vous poser quelques questions sur vos antécédents. Avez-vous des maladies connues ?" },
          { who: "Patient", en: "J’ai de l’hypertension depuis dix ans, et du diabète de type 2." },
          { who: "Médecin", en: "Avez-vous déjà été opéré ?" },
          { who: "Patient", en: "Oui, de l’appendicite quand j’avais vingt ans, et d’une hernie en 2018." },
          { who: "Médecin", en: "Quels médicaments prenez-vous régulièrement ?" },
          { who: "Patient", en: "Du ramipril, 5 milligrammes le matin, et de la metformine, 850 milligrammes deux fois par jour." },
          { who: "Médecin", en: "Prenez-vous un fluidifiant du sang, ou des médicaments sans ordonnance, comme l’ibuprofène ?" },
          { who: "Patient", en: "Pas de fluidifiant, mais je prends parfois de l’ibuprofène pour le dos." },
          { who: "Médecin", en: "D’accord. Êtes-vous allergique à un médicament ?" },
          { who: "Patient", en: "Oui, à la pénicilline : j’ai eu une éruption sur tout le corps quand j’étais enfant." },
          { who: "Médecin", en: "Je le note. Y a-t-il des maladies dans votre famille ?" },
          { who: "Patient", en: "Mon père est mort d’un infarctus à 55 ans, et ma mère a un diabète." },
          { who: "Médecin", en: "Vous fumez ? Vous buvez de l’alcool ?" },
          { who: "Patient", en: "J’ai fumé un paquet par jour pendant vingt ans, j’ai arrêté il y a cinq ans. Je bois un verre de vin le week-end." }
        ]
      },
      grammar: [
        "Passé composé para hechos terminados (« J’ai arrêté il y a cinq ans », « J’ai été opéré en 2018 ») e imparfait para situaciones habituales o descriptivas en el pasado (« Quand j’avais vingt ans », « J’étais enfant »).",
        "Partitivo con medicamentos y negación: « du ramipril », « de la metformine », « de l’ibuprofène »; en negativa se reduce a « de »: « Je ne prends pas de fluidifiant », y « d’ » ante vocal: « pas d’anticoagulant ».",
        "Construcciones fijas: « être opéré de » + problema (« opéré de l’appendicite »), « être allergique à » + sustancia, « être suivi pour » + enfermedad.",
        "Paquetes-año = paquetes por día × años. Un paquete diario durante veinte años son veinte paquetes-años. Para el alcohol, Santé publique France recomienda no pasar de 10 verres por semana, ni de 2 por día, con días sin alcohol."
      ],
      tip: "Pregunta siempre por los medicamentos « sans ordonnance » (sin receta) y por los productos naturales: muchos pacientes no los consideran « médicaments ». Y confirma la alergia con la reacción: « Qu’est-ce qui s’est passé exactement ? ».",
      exercises: [
        { type: "mc", q: "Un paciente fumó un paquete diario durante 20 años. ¿Cuántos paquetes-año tiene?", options: ["1 paquete-año", "20 paquetes-año", "200 paquetes-año", "2 paquetes-año"], answer: 1, explain: "Paquetes por día × años = 1 × 20 = 20 paquetes-años (« paquets-années »)." },
        { type: "mc", q: "« J’ai arrêté de fumer il y a cinq ans » significa…", options: ["Dejé de fumar hace cinco años", "Dejo de fumar dentro de cinco años", "Fumo desde hace cinco años", "Voy a dejar de fumar"], answer: 0, explain: "« Il y a » + tiempo con passé composé significa « hace » ese tiempo." },
        { type: "fill", q: "Je ne prends pas ___ fluidifiant du sang. (de la forma correcta tras negación)", answer: ["de"], explain: "Tras una negación el partitivo se reduce a « de »: « pas de fluidifiant »." },
        { type: "fill", q: "Je suis allergique ___ la pénicilline. (a)", answer: ["à", "a"], explain: "« Être allergique à » + sustancia." },
        { type: "order", q: "Ordena la oración", words: ["opéré", "J’ai", "l’appendicite", "été", "de"], answer: "J’ai été opéré de l’appendicite", explain: "« Être opéré de » + enfermedad. Aquí en passé composé: j’ai été opéré." },
        { type: "fill", q: "Mon père est mort d’un ___ à 55 ans. (infarto)", answer: ["infarctus"], explain: "« Un infarctus » es masculino: « mort d’un infarctus »." }
      ]
    },
    {
      id: "m4l3",
      title: "Exploración física",
      minutes: 15,
      goal: "Al terminar podrás dar al paciente indicaciones amables y claras durante la exploración usando el imperativo con vous.",
      intro: "En la exploración física dices cosas como « Respirez profondément » o « Allongez-vous ». Esas órdenes son el imperativo con « vous », terminado en -ez para los verbos en -er. El error típico del hispanohablante es olvidar el guion con los pronombres reflexivos (« Allongez-vous ») y la negación (« Ne bougez pas »). Se anuncia cada gesto antes de hacerlo para que el paciente se sienta seguro.",
      vocab: [
        { en: "l’examen clinique", ipa: "/lɛɡ.za.mɛ̃ kli.nik/", es: "examen clínico, exploración física", ex: "L’examen clinique est normal, sauf une légère fièvre." },
        { en: "ausculter", ipa: "/os.kyl.te/", es: "auscultar; l’auscultation = auscultación", ex: "Je vais ausculter vos poumons." },
        { en: "palper", ipa: "/pal.pe/", es: "palpar; la palpation = palpación", ex: "Je vais palper votre ventre." },
        { en: "le pouls", ipa: "/lə pu/", es: "pulso; la fréquence cardiaque = frecuencia cardíaca", ex: "Son pouls est régulier à 78 battements par minute." },
        { en: "le brassard", ipa: "/lə bʁa.saʁ/", es: "brazalete (del tensiómetro)", ex: "Je mets le brassard sur votre bras gauche." },
        { en: "la température", ipa: "/la tɑ̃.pe.ʁa.tyʁ/", es: "temperatura en grados Celsius; « avoir 38 de fièvre »", ex: "Sa température est de 38,2 degrés." },
        { en: "l’abaisse-langue", ipa: "/la.bɛs.lɑ̃g/", es: "bajalenguas, depresor lingual", ex: "J’utilise un abaisse-langue pour voir la gorge." },
        { en: "les ganglions", ipa: "/le gɑ̃.glijɔ̃/", es: "ganglios linfáticos", ex: "Je palpe les ganglions du cou." },
        { en: "les réflexes", ipa: "/le ʁe.flɛks/", es: "reflejos (réflexe rotulien = reflejo rotuliano)", ex: "Les réflexes sont vifs et symétriques." },
        { en: "la table d’examen", ipa: "/la tabl deɡ.za.mɛ̃/", es: "camilla de exploración", ex: "Allongez-vous sur la table d’examen." },
        { en: "le ventre souple et indolore", ipa: "/lə vɑ̃tʁ supl e ɛ̃.dɔ.lɔʁ/", es: "abdomen blando y no doloroso (informe normal)", ex: "Le ventre est souple et indolore à la palpation." },
        { en: "se déshabiller / se rhabiller", ipa: "/sə de.za.bi.je, sə ʁa.bi.je/", es: "desvestirse / vestirse de nuevo", ex: "Vous pouvez vous rhabiller maintenant." }
      ],
      phrases: [
        { en: "Déshabillez-vous jusqu’à la ceinture, s’il vous plaît.", es: "Quítese la ropa hasta la cintura, por favor.", use: "Antes de auscultar." },
        { en: "Allongez-vous sur la table d’examen.", es: "Acuéstese en la camilla.", use: "Antes de explorar el abdomen." },
        { en: "Respirez profondément, puis retenez votre souffle.", es: "Respire profundo y contenga la respiración.", use: "Para la auscultación pulmonar." },
        { en: "Ouvrez la bouche et dites « Ah ».", es: "Abra la boca y diga « Ah ».", use: "Para ver la faringe." },
        { en: "Dites-moi si cela vous fait mal.", es: "Dígame si le duele.", use: "Durante la palpación." },
        { en: "Pliez les genoux et détendez le ventre.", es: "Doble las rodillas y relaje el abdomen.", use: "Para palpar el abdomen." },
        { en: "Ne bougez pas, c’est presque fini ; vous pouvez vous rhabiller.", es: "No se mueva, ya casi termino; puede vestirse.", use: "Al terminar el examen." }
      ],
      text: {
        type: "dialogue",
        title: "L’examen d’une patiente",
        context: "Una paciente con dolor de garganta y tos: el médico mide la presión, explora la garganta, ausculta y palpa el abdomen.",
        lines: [
          { who: "Médecin", en: "Asseyez-vous ici, madame, et remontez votre manche. Je prends votre tension." },
          { who: "Patiente", en: "Comme ça ? Je dois rester immobile ?" },
          { who: "Médecin", en: "Oui, ne bougez pas et ne parlez pas. C’est bon, 12 sur 7. Maintenant ouvrez la bouche et dites « Ah »." },
          { who: "Patiente", en: "Ahhh. Ma gorge me fait mal quand j’avale." },
          { who: "Médecin", en: "Elle est un peu rouge. Je vais vous ausculter. Déshabillez-vous jusqu’à la ceinture, je me retourne." },
          { who: "Patiente", en: "C’est fait." },
          { who: "Médecin", en: "Respirez profondément par la bouche… encore… Retenez votre souffle… et soufflez." },
          { who: "Patiente", en: "Comme ça ?" },
          { who: "Médecin", en: "Très bien. Je n’entends pas de bruits anormaux. Allongez-vous sur la table pour que je palpe votre ventre." },
          { who: "Patiente", en: "D’accord. Je dois plier les jambes ?" },
          { who: "Médecin", en: "Oui, pliez les genoux et détendez-vous. Dites-moi si cela vous fait mal ici." },
          { who: "Patiente", en: "Non, ça ne fait pas mal." },
          { who: "Médecin", en: "Le ventre est souple et indolore. Je regarde aussi les ganglions de votre cou. Levez un peu le menton." },
          { who: "Patiente", en: "Voilà." },
          { who: "Médecin", en: "Parfait, vous pouvez vous rhabiller." }
        ]
      },
      grammar: [
        "Imperativo con « vous »: es igual que la forma de presente: respirez, ouvrez, pliez, levez, retenez. Con los verbos en -er no cambia nada. Dos formas son irregulares: « soyez » (ser) y « ayez » (tener).",
        "Con los verbos pronominales, en la afirmativa el pronombre va después y con guion: « Asseyez-vous », « Allongez-vous », « Détendez-vous », « Déshabillez-vous ». En la negativa va antes: « Ne vous levez pas », « Ne vous inquiétez pas ».",
        "Negación: « ne … pas » rodea al verbo: « Ne bougez pas », « Ne parlez pas ». Anuncia lo que vas a hacer con « je vais » + infinitivo: « Je vais palper votre ventre ».",
        "Para suavizar una orden se añade « s’il vous plaît » o se usa « pouvez-vous… ? »: « Pouvez-vous vous allonger, s’il vous plaît ? »."
      ],
      tip: "Para el frémito vocal o la broncofonía, el médico francés dice « Dites trente-trois ». Y si hay que tocar una zona íntima o pedir que se desvista, avisa y ofrece intimidad: « Je me retourne pendant que vous vous déshabillez ».",
      exercises: [
        { type: "mc", q: "¿Cómo se dice « Siéntese, por favor » al paciente?", options: ["Asseyez-vous, s’il vous plaît", "Assieds-toi, s’il te plaît", "Vous vous asseyez, s’il vous plaît", "Asseoir vous, s’il vous plaît"], answer: 0, explain: "Imperativo de « s’asseoir » con vous: « Asseyez-vous »." },
        { type: "fill", q: "___-vous sur la table d’examen. (acuéstese)", answer: ["allongez"], explain: "Imperativo con vous de « s’allonger »: allongez-vous." },
        { type: "order", q: "Ordena la oración", words: ["profondément", "puis", "Respirez", "votre", "retenez", "souffle"], answer: "Respirez profondément puis retenez votre souffle", explain: "Dos imperativos con vous encadenados con « puis »." },
        { type: "mc", q: "¿Cómo se dice « No se mueva »?", options: ["Ne bougez pas", "Ne vous bougez pas", "Pas bougez", "Bougez ne pas"], answer: 0, explain: "Negación: ne + verbo + pas. « Bouger » no es pronominal, así que no lleva « vous »." },
        { type: "fill", q: "Je ___ palper votre ventre. (voy a)", answer: ["vais"], explain: "Futuro próximo: je vais + infinitivo. Anuncia el gesto antes de hacerlo." },
        { type: "mc", q: "El médico dice « Vous pouvez vous rhabiller ». ¿Qué le pide al paciente?", options: ["Que se desvista", "Que se vista de nuevo", "Que se acueste", "Que respire profundo"], answer: 1, explain: "« Se rhabiller » es volver a vestirse tras la exploración." }
      ]
    },
    {
      id: "m4l4",
      title: "Explicar diagnóstico y plan, consentimiento y malas noticias",
      minutes: 15,
      goal: "Al terminar podrás explicar un diagnóstico en lenguaje claro, pedir un consentimiento informado y dar una mala noticia con empatía.",
      intro: "Explicar bien es tan importante como diagnosticar bien. En francés se usan el futuro (« Le traitement sera… »), el condicional de cortesía (« Je voudrais vous expliquer… ») y el subjuntivo en frases empáticas (« Je comprends que ce soit difficile »). Para malas noticias: avisa, escucha, no mientas, no abrumes y propón un siguiente paso concreto.",
      vocab: [
        { en: "le diagnostic", ipa: "/lə dja.nɔs.tik/", es: "diagnóstico", ex: "Le diagnostic est une pneumonie." },
        { en: "le bilan", ipa: "/lə bi.lɑ̃/", es: "conjunto de pruebas (« un bilan sanguin », análisis de sangre)", ex: "Je vous prescris un bilan sanguin complet." },
        { en: "les examens complémentaires", ipa: "/le.zɛɡ.za.mɛ̃ kɔ̃.ple.mɑ̃.tɛʁ/", es: "estudios complementarios", ex: "Les examens complémentaires seront faits cette semaine." },
        { en: "le traitement", ipa: "/lə tʁɛt.mɑ̃/", es: "tratamiento", ex: "Le traitement dure sept jours." },
        { en: "l’ordonnance", ipa: "/lɔʁ.dɔ.nɑ̃s/", es: "receta médica", ex: "Voici votre ordonnance pour la pharmacie." },
        { en: "les effets indésirables", ipa: "/le.zɛ.fɛ i.de.zi.ʁabl/", es: "efectos adversos", ex: "Les effets indésirables possibles sont des nausées ou de la diarrhée." },
        { en: "le consentement éclairé", ipa: "/lə kɔ̃.sɑ̃t.mɑ̃ e.klɛ.ʁe/", es: "consentimiento informado", ex: "Votre consentement éclairé est nécessaire avant l’opération." },
        { en: "le bénéfice et le risque", ipa: "/lə be.ne.fis e lə ʁisk/", es: "beneficio y riesgo", ex: "Nous pesons le bénéfice et le risque de cette intervention." },
        { en: "la biopsie", ipa: "/la bjɔp.si/", es: "biopsia: toma de una muestra de tejido para analizarla", ex: "La biopsie a été faite pendant la coloscopie." },
        { en: "l’annonce", ipa: "/la.nɔ̃s/", es: "comunicación de una mala noticia; annoncer = anunciar", ex: "L’annonce du diagnostic se fait en consultation." },
        { en: "le pronostic", ipa: "/lə pʁɔ.nɔs.tik/", es: "pronóstico", ex: "Le pronostic dépend de l’extension de la maladie." },
        { en: "la prise en charge", ipa: "/la pʁiz ɑ̃ ʃaʁʒ/", es: "manejo, atención integral (« la prise en charge » del paciente)", ex: "La prise en charge sera discutée en réunion pluridisciplinaire." }
      ],
      phrases: [
        { en: "Voici ce que nous avons trouvé et ce que cela signifie.", es: "Esto es lo que encontramos y lo que significa.", use: "Para abrir la explicación del diagnóstico." },
        { en: "Avez-vous bien compris ? Voulez-vous que je répète autrement ?", es: "¿Ha entendido bien? ¿Quiere que lo repita de otra manera?", use: "Para verificar la comprensión." },
        { en: "Le traitement consiste à prendre ce comprimé une fois par jour, le matin.", es: "El tratamiento consiste en tomar esta pastilla una vez al día, por la mañana.", use: "Para explicar el plan." },
        { en: "Voici les bénéfices et les risques de cette intervention ; vous êtes libre d’accepter ou de refuser.", es: "Estos son los beneficios y riesgos de esta intervención; es libre de aceptar o rechazar.", use: "Para el consentimiento informado." },
        { en: "J’ai une mauvaise nouvelle à vous annoncer.", es: "Tengo una mala noticia que darle.", use: "Aviso previo antes de dar el diagnóstico." },
        { en: "Je comprends que ce soit difficile ; prenez le temps qu’il vous faut.", es: "Entiendo que sea difícil; tómese el tiempo que necesite.", use: "Respuesta empática ante la reacción del paciente." },
        { en: "Nous allons décider ensemble de la suite ; vous pouvez revenir avec un proche.", es: "Decidiremos juntos lo siguiente; puede volver con un familiar.", use: "Para cerrar la consulta con un plan." }
      ],
      text: {
        type: "dialogue",
        title: "L’annonce d’un diagnostic",
        context: "Un hombre de 60 años con sangrado rectal regresa por el resultado de una biopsia de colon.",
        lines: [
          { who: "Médecin", en: "Bonjour monsieur, installez-vous. Vous avez les résultats de la biopsie ?" },
          { who: "Patient", en: "Pas encore. C’est vous qui les avez ?" },
          { who: "Médecin", en: "Oui. Avant de vous les donner, qu’avez-vous compris de la coloscopie de la semaine dernière ?" },
          { who: "Patient", en: "Le docteur a dit qu’il y avait une grosseur et qu’il fallait l’analyser." },
          { who: "Médecin", en: "C’est exact. J’ai une mauvaise nouvelle à vous annoncer : la biopsie montre que cette grosseur est un cancer du côlon." },
          { who: "Patient", en: "Un cancer ? Mais… c’est grave ? Je vais mourir ?" },
          { who: "Médecin", en: "Je comprends votre choc. Il existe des traitements, mais je ne peux pas vous donner le pronostic avant le scanner, qui montrera si la maladie s’est étendue." },
          { who: "Patient", en: "Et ensuite ? Qu’est-ce qu’on fait ?" },
          { who: "Médecin", en: "Le traitement sera probablement une opération pour retirer la partie malade, parfois suivie d’une chimiothérapie. Votre dossier sera présenté en réunion avec les chirurgiens et les oncologues." },
          { who: "Patient", en: "Je dois signer quelque chose ?" },
          { who: "Médecin", en: "Pas aujourd’hui. Avant toute opération, nous vous expliquerons les bénéfices et les risques, et votre consentement éclairé sera nécessaire." },
          { who: "Patient", en: "Je ne sais pas quoi penser…" },
          { who: "Médecin", en: "C’est normal. Prenez le temps qu’il vous faut. Voulez-vous que j’appelle votre femme ? Nous nous revoyons jeudi avec elle si vous le souhaitez." },
          { who: "Patient", en: "Oui, appelez-la, s’il vous plaît. Merci, docteur." }
        ]
      },
      grammar: [
        "Futuro simple para el plan y las explicaciones: « Le traitement sera… », « nous vous expliquerons… », « votre dossier sera présenté… ». El futuro próximo (« je vais + infinitivo ») sirve para lo inmediato.",
        "Subjuntivo tras expresiones de sentimiento: « Je comprends que ce soit difficile » (être: soit), « Il faut que vous fassiez un scanner » (faire: fassiez). Memoriza solo las fórmulas más frecuentes.",
        "Condicional de cortesía: « Je voudrais vous expliquer… », « Pourriez-vous… ? », « Souhaiteriez-vous… ? ». Suaviza la petición.",
        "Aviso previo antes de una mala noticia: « J’ai une mauvaise nouvelle à vous annoncer ». En Francia existe un « dispositif d’annonce » para el cáncer, con una consulta específica y apoyo de enfermería."
      ],
      tip: "Evita « tumeur » como sinónimo automático de cáncer: una tumeur puede ser benigne. Y no uses frases tranquilizadoras vacías (« tout va bien se passer ») si no sabes el pronóstico. En Francia el paciente puede designar a una « personne de confiance » que lo acompañe en las decisiones médicas.",
      exercises: [
        { type: "mc", q: "¿Para qué sirve la frase « J’ai une mauvaise nouvelle à vous annoncer » al dar un diagnóstico grave?", options: ["Es un aviso previo que prepara al paciente", "Cierra la consulta", "Pide el consentimiento", "Confirma el pronóstico"], answer: 0, explain: "Es un « warning shot »: prepara al paciente antes de la noticia para que pueda escuchar mejor." },
        { type: "fill", q: "Je comprends que ce ___ difficile. (subjuntivo de être)", answer: ["soit"], explain: "Tras « comprendre que » con emoción se usa subjuntivo: ce soit." },
        { type: "order", q: "Ordena la oración", words: ["Prenez", "temps", "le", "faut", "qu’il", "vous"], answer: "Prenez le temps qu’il vous faut", explain: "Imperativo de cortesía y relativa con « il faut »: « le temps qu’il vous faut »." },
        { type: "mc", q: "¿Qué es el « consentement éclairé »?", options: ["Un análisis de sangre", "Consentimiento informado tras recibir información clara", "Una receta médica", "Un seguimiento"], answer: 1, explain: "« Éclairé » significa informado: el paciente acepta tras comprender beneficios y riesgos." },
        { type: "fill", q: "Nous vous ___ les risques avant l’opération. (explicaremos, futuro)", answer: ["expliquerons"], explain: "Futuro simple de « expliquer » con nous: expliquerons." },
        { type: "mc", q: "¿Qué es una « biopsie »?", options: ["Una radiografía del tórax", "La toma de una muestra de tejido para analizarla", "Una operación completa", "Un tratamiento de quimioterapia"], answer: 1, explain: "La biopsia consiste en tomar un fragmento de tejido, por ejemplo durante una coloscopia." }
      ]
    }
  ]
});
