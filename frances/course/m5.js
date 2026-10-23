(window.COURSE = window.COURSE || []).push({
  id: "m5", n: 5,
  title: "Comunicación en el hospital",
  en: "À l’hôpital",
  summary: "Aprendes a presentar un paciente en la visita, hacer un relevo de guardia con SAED, leer y escribir observaciones y compte rendus, y pedir un avis o reaccionar en una urgencia vital.",
  lessons: [
    {
      id: "m5l1",
      title: "Presentar a un paciente en la visita",
      minutes: 15,
      goal: "Al terminar podrás presentar a un paciente en 1 minuto, en orden y con el vocabulario correcto, ante el chef de clinique o el praticien hospitalier.",
      intro: "En Francia la visite (pase de visita) sigue un orden fijo: quién es el paciente, motivo de ingreso, antecedentes, historia, examen, estudios, hipótesis y plan. Error típico: llamar «interno» al interne; en Francia el interne ya es médico residente de una especialidad, y tu papel como estudiante o MIP se parece más al del externe.",
      vocab: [
        { en: "la visite", ipa: "/la vi.zit/", es: "pase de visita en el servicio", ex: "La visite commence à huit heures trente et dure environ une heure." },
        { en: "l’externe", ipa: "/lɛk.stɛʁn/", es: "estudiante de medicina de 4.º a 6.º año con funciones en el hospital", ex: "L’externe présente le patient du lit 4 au chef de clinique." },
        { en: "l’interne", ipa: "/lɛ̃.tɛʁn/", es: "médico residente en formación de especialidad (no es el interno de pregrado)", ex: "L’interne de médecine interne rédige les ordonnances." },
        { en: "le chef de clinique", ipa: "/lə ʃɛf də kli.nik/", es: "jefe de clínica: médico joven ya especialista que supervisa a los internes", ex: "Le chef de clinique valide la conduite à tenir." },
        { en: "le praticien hospitalier", ipa: "/lə pʁa.ti.sjɛ̃ ɔs.pi.ta.lje/", es: "médico adscrito titular del hospital (abreviado PH)", ex: "Le praticien hospitalier dirige la visite le jeudi." },
        { en: "le motif d’hospitalisation", ipa: "/lə mɔ.tif dɔs.pi.ta.li.za.sjɔ̃/", es: "motivo de ingreso", ex: "Le motif d’hospitalisation est une douleur abdominale aiguë." },
        { en: "les antécédents", ipa: "/lez‿ɑ̃.te.se.dɑ̃/", es: "antecedentes (abreviado ATCD)", ex: "Ses antécédents sont une hypertension et un diabète de type 2." },
        { en: "l’histoire de la maladie", ipa: "/lis.twaʁ də la ma.la.di/", es: "padecimiento actual", ex: "L’histoire de la maladie remonte à trois jours." },
        { en: "l’examen clinique", ipa: "/lɛɡ.za.mɛ̃ kli.nik/", es: "exploración física", ex: "L’examen clinique ne montre pas de signe de gravité." },
        { en: "le bilan", ipa: "/lə bi.lɑ̃/", es: "estudios solicitados; «bilan sanguin» = laboratorios", ex: "Le bilan sanguin montre une anémie à neuf grammes." },
        { en: "l’hypothèse diagnostique", ipa: "/li.pɔ.tɛz dja.gnɔs.tik/", es: "hipótesis diagnóstica", ex: "Mon hypothèse diagnostique principale est une pneumopathie." },
        { en: "la conduite à tenir", ipa: "/la kɔ̃.dɥit a tə.niʁ/", es: "plan de manejo, qué se hace a continuación", ex: "Quelle est la conduite à tenir devant cette fièvre ?" }
      ],
      phrases: [
        { en: "Je vous présente M. Durand, 67 ans, hospitalisé pour une douleur thoracique.", es: "Le presento al Sr. Durand, 67 años, hospitalizado por dolor torácico.", use: "Frase de apertura: nombre, edad y motivo, en una sola oración." },
        { en: "Il est entré hier par les urgences.", es: "Ingresó ayer por urgencias.", use: "Para decir cómo y cuándo llegó al servicio." },
        { en: "Dans ses antécédents, on retrouve une hypertension artérielle et un diabète de type 2.", es: "En sus antecedentes hay hipertensión arterial y diabetes tipo 2.", use: "Después del motivo de ingreso; ordena de lo más importante a lo menos." },
        { en: "À l’examen, il est apyrétique et la saturation est à 97 % en air ambiant.", es: "A la exploración no tiene fiebre y la saturación es de 97 % al aire ambiente.", use: "Resumen del examen con las constantes más relevantes." },
        { en: "Le bilan biologique montre une CRP à 85.", es: "Los laboratorios muestran una PCR de 85.", use: "Para dar resultados del laboratorio; la unidad suele omitirse a viva voz." },
        { en: "Mon hypothèse principale est une pneumopathie communautaire.", es: "Mi hipótesis principal es una neumonía adquirida en la comunidad.", use: "Antes de proponer el plan; deja claro que es tu hipótesis." },
        { en: "Je ne sais pas, je vais vérifier et je reviens vers vous.", es: "No lo sé, voy a verificar y le respondo.", use: "Cuando te preguntan algo que no sabes: es mejor que improvisar." }
      ],
      text: {
        type: "dialogue",
        title: "La présentation du patient",
        context: "Un externe presenta a un paciente con dolor torácico al chef de clinique durante la visita.",
        lines: [
          { who: "Chef de clinique", en: "Bonjour, on commence par la chambre 12. Qui nous présente le patient ?" },
          { who: "Externe", en: "Moi. Je vous présente M. Durand, 67 ans, hospitalisé depuis hier pour une douleur thoracique." },
          { who: "Chef de clinique", en: "Très bien. Quels sont ses antécédents ?" },
          { who: "Externe", en: "Il a une hypertension artérielle et un diabète de type 2. Il fume depuis trente ans, à peu près un paquet par jour." },
          { who: "Chef de clinique", en: "Et l’histoire de la maladie ?" },
          { who: "Externe", en: "La douleur a débuté il y a deux jours, à l’effort, avec une irradiation vers le bras gauche. Elle a duré vingt minutes." },
          { who: "Chef de clinique", en: "Qu’avez-vous trouvé à l’examen clinique ?" },
          { who: "Externe", en: "Il est apyrétique, la tension est à 14 sur 8, le pouls à 82 et la saturation à 98 % en air ambiant. L’auscultation est normale." },
          { who: "Chef de clinique", en: "Et le bilan ?" },
          { who: "Externe", en: "L’ECG ne montre pas de sus-décalage du segment ST. La troponine est légèrement élevée à la première dose." },
          { who: "Chef de clinique", en: "Quelle est votre hypothèse ?" },
          { who: "Externe", en: "Un syndrome coronarien aigu sans sus-décalage de ST. Je propose de refaire la troponine dans trois heures et de demander un avis cardiologique." },
          { who: "Chef de clinique", en: "D’accord, c’est une bonne présentation. Pensez à préciser les traitements habituels la prochaine fois." },
          { who: "Externe", en: "Merci, je le note." }
        ]
      },
      grammar: [
        "Usa el présent para el estado actual y el passé composé para lo que ya ocurrió: «Il est hospitalisé», «la douleur a débuté».",
        "«Depuis» + présent indica algo que dura todavía: «il fume depuis trente ans». «Il y a» + tiempo indica cuánto pasó: «il y a deux jours».",
        "A viva voz la tensión se dice sin «mmHg»: 130/80 = «treize huit» o «treize sur huit».",
        "Orden de la presentación: identité, motif, antécédents, histoire, examen, bilan, hypothèse, conduite à tenir."
      ],
      tip: "El interne no es un interno de pregrado: es un residente. Si alguien te pregunta «Tu es externe ou interne ?», responde según tu nivel y explica que en México eres MIP.",
      exercises: [
        { type: "mc", q: "En un hospital francés, ¿quién es el interne?", options: ["Un estudiante de primer año", "Un médico en formación de especialidad", "El jefe del servicio", "Un enfermero"], answer: 1, explain: "El interne ya es médico y está haciendo su especialidad; no equivale al interno de pregrado mexicano." },
        { type: "mc", q: "¿Cuál es una buena frase de apertura para presentar a un paciente?", options: ["Je vous présente M. Durand, 67 ans, hospitalisé pour une douleur thoracique.", "M. Durand est là.", "Il a mal, je crois.", "Voici la visite."], answer: 0, explain: "La apertura estándar da nombre, edad y motivo de ingreso en una frase." },
        { type: "mc", q: "¿Cómo se dice oralmente una tensión de 130/80?", options: ["treize sur huit", "cent trente slash quatre-vingts", "mille trois cent quatre-vingts", "treize et huit"], answer: 0, explain: "Oralmente se dice «treize sur huit» o «treize huit», sin mencionar la unidad." },
        { type: "fill", q: "Il est hospitalisé ___ hier pour une pneumopathie. (desde)", answer: ["depuis"], explain: "«Depuis» + présent indica que la situación continúa; aquí, ingresó ayer y sigue hospitalizado." },
        { type: "fill", q: "À l’examen, il est ___ : il n’a pas de fièvre. (sin fiebre)", answer: ["apyrétique", "apyretique"], explain: "«Apyrétique» significa sin fiebre; su contrario es «fébrile»." },
        { type: "order", q: "Ordena la oración", words: ["Je", "propose", "de", "refaire", "la", "troponine", "dans", "trois", "heures"], answer: "Je propose de refaire la troponine dans trois heures", explain: "«Proposer de» + infinitivo es la fórmula natural para sugerir un plan al chef." }
      ]
    },
    {
      id: "m5l2",
      title: "Relevo de guardia con SAED",
      minutes: 15,
      goal: "Al terminar podrás hacer un relevo de guardia ordenado con la estructura SAED y confirmar lo que te piden.",
      intro: "En Francia se enseña SAED (Situation, Antécédents, Évaluation, Demande), el equivalente francés de SBAR, para transmitir información sin perder lo esencial. Error típico: contar todo el historial en orden cronológico; en el relevo se dice primero qué pasa ahora y qué se pide al que recibe.",
      vocab: [
        { en: "la garde", ipa: "/la ɡaʁd/", es: "guardia", ex: "Je suis de garde cette nuit aux urgences." },
        { en: "les transmissions", ipa: "/le tʁɑ̃s.mi.sjɔ̃/", es: "relevo, entrega de turno", ex: "Les transmissions se font à dix-huit heures trente." },
        { en: "le SAED", ipa: "/lə sa.ɛd/", es: "estructura Situation, Antécédents, Évaluation, Demande (SBAR en inglés)", ex: "Je vais faire les transmissions avec le SAED." },
        { en: "les constantes", ipa: "/le kɔ̃s.tɑ̃t/", es: "signos vitales", ex: "Les constantes sont stables depuis ce matin." },
        { en: "stable", ipa: "/stabl/", es: "estable", ex: "Le patient est stable sur le plan hémodynamique." },
        { en: "instable", ipa: "/ɛ̃.stabl/", es: "inestable", ex: "Cette patiente est instable, il faut la surveiller de près." },
        { en: "l’aggravation", ipa: "/la.ɡʁa.va.sjɔ̃/", es: "empeoramiento", ex: "En cas d’aggravation, appelez-moi tout de suite." },
        { en: "la surveillance", ipa: "/la syʁ.vɛ.jɑ̃s/", es: "vigilancia, monitorización", ex: "Il est sous surveillance continue du rythme cardiaque." },
        { en: "le dossier patient", ipa: "/lə do.sje pa.sjɑ̃/", es: "expediente clínico del paciente", ex: "J’ai noté tout cela dans le dossier patient." },
        { en: "le médecin d’astreinte", ipa: "/lə med.sɛ̃ das.tʁɛ̃t/", es: "médico localizable de turno, que viene al hospital si se le llama", ex: "Le médecin d’astreinte est joignable au bip." },
        { en: "la prescription si besoin", ipa: "/la pʁɛs.kʁip.sjɔ̃ si bə.zwɛ̃/", es: "indicación «si es necesario» (PRN)", ex: "Il y a une prescription si besoin pour la douleur." },
        { en: "le seuil d’appel", ipa: "/lə sœj da.pɛl/", es: "valor a partir del cual hay que llamar al médico", ex: "Le seuil d’appel est une saturation inférieure à 90 %." }
      ],
      phrases: [
        { en: "Situation : lit 12, Mme Martin, 72 ans, hospitalisée pour une pneumopathie.", es: "Situación: cama 12, Sra. Martin, 72 años, hospitalizada por neumonía.", use: "Primera parte de SAED: quién es y qué ocurre ahora." },
        { en: "Antécédents : BPCO sous oxygène à domicile et insuffisance cardiaque.", es: "Antecedentes: EPOC con oxígeno domiciliario e insuficiencia cardiaca.", use: "Solo los antecedentes que influyen en lo que pasa esta noche." },
        { en: "Évaluation : elle est stable, mais la saturation est à 92 % sous deux litres.", es: "Evaluación: está estable, pero la saturación es de 92 % con dos litros.", use: "Tu valoración de la gravedad y la tendencia." },
        { en: "Demande : pouvez-vous refaire une gazométrie à minuit ?", es: "Solicitud: ¿puede repetir una gasometría a medianoche?", use: "Lo que pides al que recibe; usa «pouvez-vous» o «peux-tu» según la confianza." },
        { en: "Appelez-moi si la saturation passe en dessous de 90 %.", es: "Llámeme si la saturación baja de 90 %.", use: "Para fijar un umbral de llamada." },
        { en: "Rien de particulier à signaler pour le lit 15.", es: "Nada especial que reportar para la cama 15.", use: "Cuando un paciente no tiene novedades." },
        { en: "Pouvez-vous répéter la dose, s’il vous plaît ?", es: "¿Puede repetir la dosis, por favor?", use: "Para confirmar una cifra o una indicación antes de aceptarla." }
      ],
      text: {
        type: "dialogue",
        title: "Les transmissions du soir",
        context: "Un interne de jour entrega un paciente a su colega que empieza la guardia, usando SAED.",
        lines: [
          { who: "Interne de jour", en: "Bonsoir, je te fais les transmissions du service. Tu es prêt ?" },
          { who: "Interne de garde", en: "Oui, vas-y." },
          { who: "Interne de jour", en: "Situation : lit 12, Mme Martin, 72 ans, hospitalisée pour une pneumopathie. Elle a eu un pic de fièvre à 39 degrés cet après-midi." },
          { who: "Interne de garde", en: "Quels sont ses antécédents ?" },
          { who: "Interne de jour", en: "Antécédents : BPCO sous oxygène à domicile, insuffisance cardiaque, pas d’allergie connue." },
          { who: "Interne de garde", en: "Et ton évaluation ?" },
          { who: "Interne de jour", en: "Évaluation : elle est stable, mais la saturation est à 92 % sous deux litres d’oxygène et la fréquence respiratoire à 22." },
          { who: "Interne de garde", en: "D’accord. Qu’est-ce que tu me demandes ?" },
          { who: "Interne de jour", en: "Demande : peux-tu refaire une gazométrie à minuit et appeler la réanimation si la saturation passe en dessous de 90 % ?" },
          { who: "Interne de garde", en: "C’est noté. Je répète : gazométrie à minuit, et appel de la réanimation si la saturation est sous 90 %." },
          { who: "Interne de jour", en: "Exact. Pour le lit 15, rien de particulier à signaler." },
          { who: "Interne de garde", en: "Parfait, merci. Bonne soirée !" }
        ]
      },
      grammar: [
        "Entre colegas del mismo nivel se usa «tu» y entre jerarquías distintas «vous»; con pacientes y con seniors, siempre «vous».",
        "«Si» + présent para condiciones: «Appelez-moi si la saturation baisse»; el verbo principal va en imperativo o en présent.",
        "«Passer en dessous de» o «être sous» + cifra expresan un valor por debajo del umbral.",
        "Para pedir con cortesía usa «pouvez-vous» o el condicional «pourriez-vous»; para confirmar, repite lo que oíste: «Je répète : …»."
      ],
      tip: "SAED no es una moda francesa: es el mismo esquema que SBAR (Situation, Background, Assessment, Recommendation) y lo reconocerán igual. Repite siempre las cifras importantes, porque el relevo de noche es donde más se pierden datos.",
      exercises: [
        { type: "mc", q: "¿Qué significa SAED?", options: ["Situation, Antécédents, Évaluation, Demande", "Symptômes, Analyses, Examen, Diagnostic", "Surveillance, Avis, Évolution, Décision", "Service, Admission, Entrée, Départ"], answer: 0, explain: "SAED es el equivalente francés de SBAR." },
        { type: "mc", q: "¿En qué parte de SAED va «Pouvez-vous refaire une gazométrie ?»", options: ["Situation", "Antécédents", "Évaluation", "Demande"], answer: 3, explain: "La «Demande» es lo que pides a quien recibe el relevo." },
        { type: "mc", q: "¿Qué expresión significa «en caso de empeoramiento»?", options: ["en cas d’aggravation", "en cas de garde", "en cas de prescription", "en cas de dossier"], answer: 0, explain: "«L’aggravation» es el empeoramiento clínico." },
        { type: "fill", q: "Appelez-moi ___ la saturation passe en dessous de 92 %. (si)", answer: ["si"], explain: "«Si» + présent introduce la condición que hace que se llame." },
        { type: "fill", q: "Le patient est ___ : ses constantes sont normales. (estable)", answer: ["stable"], explain: "«Stable» es igual que en español; el contrario es «instable»." },
        { type: "order", q: "Ordena la oración", words: ["Rien", "de", "particulier", "à", "signaler", "pour", "le", "lit", "quinze"], answer: "Rien de particulier à signaler pour le lit quinze", explain: "«Rien de particulier à signaler» (RAS) es la fórmula habitual cuando no hay novedades." }
      ]
    },
    {
      id: "m5l3",
      title: "Observación, compte rendu y prescripciones",
      minutes: 15,
      goal: "Al terminar podrás leer un compte rendu d’hospitalisation, entender las abreviaturas más usadas y escribir una prescripción sencilla.",
      intro: "Los documentos clínicos franceses son telegráficos: frases nominales, abreviaturas y cifras con unidades. La observation médicale se escribe al ingreso y el compte rendu d’hospitalisation (CRH) resume la estancia para el médecin traitant. Error típico: confundir ordonnance (receta) con ordenanza y prescription con una indicación solo de internamiento.",
      vocab: [
        { en: "l’observation médicale", ipa: "/lɔp.sɛʁ.va.sjɔ̃ me.di.kal/", es: "nota de ingreso: historia clínica escrita al entrar el paciente", ex: "L’interne rédige l’observation médicale à l’entrée du patient." },
        { en: "le compte rendu d’hospitalisation", ipa: "/lə kɔ̃t ʁɑ̃.dy dɔs.pi.ta.li.za.sjɔ̃/", es: "resumen de alta (abreviado CRH)", ex: "Le compte rendu d’hospitalisation part au médecin traitant." },
        { en: "le médecin traitant", ipa: "/lə med.sɛ̃ tʁɛ.tɑ̃/", es: "médico de cabecera o de familia registrado del paciente", ex: "Son médecin traitant suit sa tension depuis dix ans." },
        { en: "l’ordonnance", ipa: "/lɔʁ.dɔ.nɑ̃s/", es: "receta médica", ex: "Je vous donne une ordonnance pour dix jours." },
        { en: "la prescription", ipa: "/la pʁɛs.kʁip.sjɔ̃/", es: "indicación o prescripción de un tratamiento", ex: "La prescription est faite sur le dossier informatisé." },
        { en: "le traitement de sortie", ipa: "/lə tʁɛt.mɑ̃ də sɔʁ.ti/", es: "tratamiento al alta", ex: "Le traitement de sortie comprend un antibiotique et un anticoagulant." },
        { en: "l’évolution", ipa: "/le.vɔ.ly.sjɔ̃/", es: "evolución clínica durante la estancia", ex: "L’évolution a été favorable dès le troisième jour." },
        { en: "per os (PO)", ipa: "/pɛʁ ɔs/", es: "por vía oral", ex: "Le relais se fait per os dès que le patient mange." },
        { en: "la posologie", ipa: "/la pɔ.zɔ.lɔ.ʒi/", es: "posología, dosis y ritmo de administración", ex: "Quelle est la posologie du paracétamol chez l’adulte ?" },
        { en: "le comprimé", ipa: "/lə kɔ̃.pʁi.me/", es: "tableta o comprimido", ex: "Un comprimé le matin et un comprimé le soir." },
        { en: "l’abréviation", ipa: "/la.bʁe.vja.sjɔ̃/", es: "abreviatura", ex: "HTA est l’abréviation d’hypertension artérielle." },
        { en: "RAS", ipa: "/ɛʁ.a.ɛs/", es: "rien à signaler: sin hallazgos", ex: "Auscultation pulmonaire : RAS." }
      ],
      phrases: [
        { en: "ATCD : HTA, DT2, pas d’allergie connue.", es: "Antecedentes: HTA, DM2, sin alergias conocidas.", use: "Línea típica de antecedentes en una observación o un CRH." },
        { en: "Examen cardio-vasculaire : RAS.", es: "Exploración cardiovascular: sin hallazgos.", use: "Cuando un aparato no tiene nada que destacar." },
        { en: "Évolution favorable sous antibiothérapie.", es: "Evolución favorable con antibioterapia.", use: "Resumen corto de cómo respondió el paciente al tratamiento." },
        { en: "Paracétamol 1 g per os, trois fois par jour, si douleur.", es: "Paracetamol 1 g por vía oral, tres veces al día, si hay dolor.", use: "Modelo de prescripción: medicamento, dosis, vía, ritmo y condición." },
        { en: "Le traitement de sortie est détaillé sur l’ordonnance.", es: "El tratamiento al alta está detallado en la receta.", use: "Para remitir al lector a la receta que acompaña el CRH." },
        { en: "À revoir par le médecin traitant dans quinze jours.", es: "A revalorar por el médico de cabecera en quince días.", use: "Cierre habitual de un CRH, con el seguimiento previsto." },
        { en: "Aucune allergie médicamenteuse connue.", es: "Ninguna alergia a medicamentos conocida.", use: "Dato obligatorio antes de prescribir cualquier fármaco." }
      ],
      text: {
        type: "reading",
        title: "Compte rendu d’hospitalisation",
        context: "Documento breve y totalmente ficticio, escrito en el estilo de un CRH francés, para practicar la lectura.",
        paragraphs: [
          "Madame L., 78 ans, hospitalisée du 3 au 9 mars pour une dyspnée fébrile.",
          "Antécédents : HTA, diabète de type 2, fibrillation atriale sous apixaban. Aucune allergie connue.",
          "Histoire de la maladie : toux productive et fièvre depuis quatre jours, avec une dyspnée d’aggravation progressive. Admise aux urgences, puis transférée en médecine interne.",
          "Examen à l’entrée : température à 38,6 °C, FC 98/min, TA 128/76 mmHg, FR 24/min, SpO2 91 % en air ambiant. Crépitants de la base droite. Pas de signe d’insuffisance cardiaque.",
          "Examens complémentaires : CRP 142 mg/L, leucocytes 15 000/mm³. Radiographie de thorax : foyer alvéolaire du lobe inférieur droit. Hémocultures négatives.",
          "Évolution : amélioration sous amoxicilline-acide clavulanique en IV, puis per os. Apyrexie à J3, sevrage de l’oxygène à J4.",
          "Conclusion : pneumopathie communautaire du lobe inférieur droit, d’évolution favorable. Traitement de sortie : amoxicilline-acide clavulanique 1 g, trois fois par jour, pendant cinq jours ; apixaban inchangé. Contrôle clinique et radiographique chez le médecin traitant dans six semaines."
        ]
      },
      grammar: [
        "El estilo es telegráfico: «Antécédents : HTA» sin verbo; en el CRH completo se mezclan frases nominales y verbos en passé composé.",
        "Las abreviaturas más frecuentes: ATCD (antécédents), HTA (hypertension artérielle), DT2 (diabète de type 2), AEG (altération de l’état général), RAS (rien à signaler), IV (intraveineux), PO (per os).",
        "«Sous» + tratamiento indica «con» ese tratamiento: «sous apixaban», «sous antibiothérapie». «J3» significa «jour 3».",
        "Los números usan coma decimal (38,6 °C) y espacio como separador de miles (15 000)."
      ],
      tip: "Cuidado con las siglas: HTA es hypertension artérielle, no «HAS», que es la Haute Autorité de Santé. Y «ordonnance» es receta, no ordenanza.",
      exercises: [
        { type: "mc", q: "Según el texto, ¿cuál es la conclusión diagnóstica?", options: ["Pneumopathie communautaire du lobe inférieur droit", "Insuffisance cardiaque aiguë", "Embolie pulmonaire", "Exacerbation de BPCO"], answer: 0, explain: "La conclusión del compte rendu es una pneumopathie communautaire del lóbulo inferior derecho." },
        { type: "mc", q: "¿Qué significa HTA?", options: ["hypertension artérielle", "hémorragie thoracique aiguë", "hypotension", "Haute Autorité de Santé"], answer: 0, explain: "HTA = hypertension artérielle; la Haute Autorité de Santé se abrevia HAS." },
        { type: "mc", q: "¿Cuántos días de antibiótico debe seguir tomando la paciente tras el alta?", options: ["tres jours", "cinq jours", "dix jours", "six semaines"], answer: 1, explain: "El traitement de sortie indica amoxicilline-acide clavulanique pendant cinq jours." },
        { type: "fill", q: "Évolution favorable ___ antibiothérapie. (con)", answer: ["sous"], explain: "«Sous» + tratamiento significa «bajo» o «con» ese tratamiento." },
        { type: "fill", q: "Paracétamol 1 g per ___, trois fois par jour. (vía oral)", answer: ["os"], explain: "«Per os» es la vía oral, abreviada PO." },
        { type: "order", q: "Ordena la oración", words: ["À", "revoir", "par", "le", "médecin", "traitant", "dans", "six", "semaines"], answer: "À revoir par le médecin traitant dans six semaines", explain: "Cierre habitual del CRH: indica quién da seguimiento y cuándo." }
      ]
    },
    {
      id: "m5l4",
      title: "Pedir un avis, llamadas y urgencias vitales",
      minutes: 15,
      goal: "Al terminar podrás pedir un avis spécialisé por teléfono y reaccionar con comunicación de circuito cerrado en un arrêt cardiaque.",
      intro: "Cuando llamas a un especialista, te presentas, das el contexto y haces una pregunta precisa. En una urgencia vital, las órdenes son cortas y el que las recibe las repite: es la comunicación de circuito cerrado. Error típico: pedir un «aviso»; en francés «avis» es opinión o consulta, no aviso.",
      vocab: [
        { en: "l’avis spécialisé", ipa: "/la.vi spe.sja.li.ze/", es: "interconsulta u opinión de un especialista", ex: "Je demande un avis spécialisé à la cardiologie." },
        { en: "le bip", ipa: "/lə bip/", es: "buscapersonas del médico de guardia", ex: "Le cardiologue de garde est joignable au bip." },
        { en: "l’astreinte", ipa: "/las.tʁɛ̃t/", es: "guardia localizable, el médico viene si se le llama", ex: "L’interne est d’astreinte ce week-end." },
        { en: "l’arrêt cardiaque", ipa: "/la.ʁɛ kaʁ.djak/", es: "paro cardiaco", ex: "Un arrêt cardiaque est survenu dans la chambre 12." },
        { en: "la réanimation", ipa: "/la ʁe.a.ni.ma.sjɔ̃/", es: "unidad de cuidados intensivos o reanimación", ex: "Appelez la réanimation, c’est une urgence vitale." },
        { en: "le massage cardiaque", ipa: "/lə ma.saʒ kaʁ.djak/", es: "compresiones torácicas", ex: "Je commence le massage cardiaque tout de suite." },
        { en: "le défibrillateur", ipa: "/lə de.fi.bʁi.la.tœʁ/", es: "desfibrilador", ex: "Le défibrillateur est branché et prêt." },
        { en: "le chariot d’urgence", ipa: "/lə ʃa.ʁjo dyʁ.ʒɑ̃s/", es: "carro de paro", ex: "Amenez le chariot d’urgence dans la chambre." },
        { en: "la voie veineuse périphérique", ipa: "/la vwa vɛ.nøz pe.ʁi.fe.ʁik/", es: "vía venosa periférica (abreviada VVP)", ex: "Posez une voie veineuse périphérique." },
        { en: "le SAMU", ipa: "/lə sa.my/", es: "servicio de emergencias prehospitalario; se llama al 15", ex: "Le SAMU répond au 15 vingt-quatre heures sur vingt-quatre." },
        { en: "l’urgence vitale", ipa: "/lyʁ.ʒɑ̃s vi.tal/", es: "urgencia con riesgo de muerte inmediato", ex: "Devant une urgence vitale, on appelle sans attendre." },
        { en: "le circuit fermé", ipa: "/lə siʁ.kɥi fɛʁ.me/", es: "circuito cerrado: repetir la orden para confirmar", ex: "En urgence, on parle en circuit fermé pour éviter les erreurs." }
      ],
      phrases: [
        { en: "Bonjour, je suis l’interne de médecine interne et j’appelle pour un avis cardiologique concernant le lit 8.", es: "Buenos días, soy el residente de medicina interna y llamo por una interconsulta de cardiología sobre la cama 8.", use: "Inicio de una llamada: quién eres y para qué llamas." },
        { en: "Ma question est : peut-on débuter une anticoagulation à dose curative ?", es: "Mi pregunta es: ¿puede iniciarse una anticoagulación a dosis terapéutica?", use: "Una pregunta clara; sin ella, el especialista no sabe qué responder." },
        { en: "Pouvez-vous passer le voir dans l’heure ?", es: "¿Puede pasar a verlo en la próxima hora?", use: "Para pedir una valoración con plazo." },
        { en: "Arrêt cardiaque en chambre 12 ! Appelez la réanimation et amenez le chariot d’urgence.", es: "¡Paro cardiaco en la habitación 12! Llamen a reanimación y traigan el carro de paro.", use: "Primera orden en un paro: llamar y traer material." },
        { en: "Je répète : adrénaline, un milligramme, en intraveineux direct.", es: "Repito: adrenalina, un miligramo, por vía intravenosa directa.", use: "Circuito cerrado: repites la orden antes de ejecutarla." },
        { en: "C’est fait : adrénaline injectée à quatorze heures trente-deux.", es: "Hecho: adrenalina administrada a las 14:32.", use: "Para confirmar que ejecutaste la orden, con la hora." },
        { en: "On s’écarte pour l’analyse du rythme.", es: "Nos apartamos para el análisis del ritmo.", use: "Antes de que el desfibrilador analice o descargue." }
      ],
      text: {
        type: "dialogue",
        title: "Arrêt cardiaque en chambre 12",
        context: "Un médico y una enfermera atienden un paro cardiaco hospitalario usando circuito cerrado.",
        lines: [
          { who: "Infirmière", en: "Docteur, venez vite, le patient de la chambre 12 ne répond plus !" },
          { who: "Médecin", en: "Pas de pouls. C’est un arrêt cardiaque. Appelez la réanimation et amenez le chariot d’urgence." },
          { who: "Infirmière", en: "Bien reçu. J’appelle la réanimation et j’amène le chariot." },
          { who: "Médecin", en: "Je commence le massage cardiaque. Trente compressions, puis deux insufflations." },
          { who: "Infirmière", en: "Le chariot est là. Le défibrillateur est branché." },
          { who: "Médecin", en: "On s’écarte pour l’analyse du rythme." },
          { who: "Infirmière", en: "Asystolie. Pas de choc indiqué." },
          { who: "Médecin", en: "Reprenez les compressions. Posez une voie veineuse. Adrénaline, un milligramme, en intraveineux direct." },
          { who: "Infirmière", en: "Je répète : adrénaline, un milligramme, en intraveineux direct." },
          { who: "Médecin", en: "C’est exact." },
          { who: "Infirmière", en: "C’est fait : adrénaline injectée à quatorze heures trente-deux." },
          { who: "Médecin", en: "Merci. On refait un cycle de deux minutes, puis on vérifie le rythme." },
          { who: "Infirmière", en: "Le réanimateur est arrivé." },
          { who: "Médecin", en: "Parfait. Je vous passe les informations : homme de 68 ans, arrêt cardiaque en asystolie, adrénaline donnée à 14 h 32." }
        ]
      },
      grammar: [
        "En urgencia se usa el imperativo: «Appelez», «Amenez», «Posez», «Reprenez». Con colegas jóvenes puede ser «Appelle», «Amène».",
        "La llamada de avis sigue SAED: te presentas, das la situation y los antécédents clave, tu évaluation y una demande precisa («Ma question est…»).",
        "La hora se dice con el formato de 24 horas: «quatorze heures trente-deux» o «14 h 32».",
        "Circuito cerrado: orden, repetición («Je répète : …»), confirmación («C’est exact») y aviso de ejecución («C’est fait»)."
      ],
      tip: "Aunque estés nervioso, habla despacio y con frases cortas. Si no entiendes una orden, pregunta «Pardon, pouvez-vous répéter ?» antes de actuar: en urgencia es mejor confirmar que adivinar.",
      exercises: [
        { type: "mc", q: "El médico dice «Adrénaline, un milligramme, en intraveineux direct». ¿Cuál es la respuesta correcta en circuito cerrado?", options: ["Je répète : adrénaline, un milligramme, en intraveineux direct.", "Peut-être.", "Je ne sais pas.", "Ça va."], answer: 0, explain: "En circuito cerrado se repite la orden completa antes de ejecutarla." },
        { type: "mc", q: "¿Qué se hace primero ante un arrêt cardiaque en la habitación?", options: ["Llamar a reanimación y empezar las compresiones", "Esperar al jefe de servicio", "Pedir un escáner", "Llamar a la familia"], answer: 0, explain: "Se pide ayuda de reanimación y se inicia el massage cardiaque sin demora." },
        { type: "mc", q: "En una llamada de avis spécialisé, ¿qué conviene hacer?", options: ["Presentarse y hacer una pregunta precisa", "Colgar rápido", "Mandar un SMS sin contexto", "Decir solo el nombre del paciente"], answer: 0, explain: "Una presentación breve y una pregunta clara permiten una respuesta útil." },
        { type: "fill", q: "Bien ___ : j’amène le chariot d’urgence. (recibido)", answer: ["reçu", "recu"], explain: "«Bien reçu» confirma que entendiste la orden." },
        { type: "fill", q: "Trente compressions, puis deux ___. (insuflaciones)", answer: ["insufflations"], explain: "La relación es 30 compresiones por 2 insufflations." },
        { type: "order", q: "Ordena la oración", words: ["On", "s’écarte", "pour", "l’analyse", "du", "rythme"], answer: "On s’écarte pour l’analyse du rythme", explain: "Se dice antes del análisis o de una descarga para que nadie toque al paciente." }
      ]
    }
  ]
});
