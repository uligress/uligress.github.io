(window.COURSE = window.COURSE || []).push({
  id: "m1", n: 1,
  title: "Base funcional",
  en: "Les bases",
  summary: "Saludas y te presentas con el registro correcto, haces las preguntas clave del interrogatorio, cuentas hechos pasados y dices cifras, horas y dosis como en un hospital francés.",
  lessons: [
    {
      id: "m1l1",
      title: "Saludar y presentarse en la consulta",
      minutes: 15,
      goal: "Al terminar podrás saludar a un paciente con « vous » y presentarte por tu rol sin confundir « étudiant », « externe » e « interne ».",
      intro: "En la consulta francesa se saluda siempre con « Bonjour » (hasta la tarde) y se trata de « vous » al paciente, aunque sea joven. El « tu » queda para compañeros de tu nivel, y solo cuando ellos lo proponen. El error típico de un hispanohablante es traducir « interno » como « interne »: en Francia el interne ya es médico residente.",
      vocab: [
        { en: "bonjour", ipa: "/bɔ̃.ʒuʁ/", es: "buenos días / buenas tardes (hasta la tarde)", ex: "Bonjour Madame, entrez, je vous en prie." },
        { en: "bonsoir", ipa: "/bɔ̃.swaʁ/", es: "buenas noches (al llegar, por la tarde-noche)", ex: "Bonsoir Monsieur, je suis de garde ce soir." },
        { en: "enchanté(e)", ipa: "/ɑ̃.ʃɑ̃.te/", es: "mucho gusto (con e final si hablas tú en femenino)", ex: "Enchanté, Madame, je m’appelle Carlos." },
        { en: "Madame / Monsieur", ipa: "/ma.dam/ /mə.sjø/", es: "señora / señor (forma de respeto, sin apellido también vale)", ex: "Monsieur, pouvez-vous vous allonger sur la table ?" },
        { en: "le médecin", ipa: "/lə med.sɛ̃/", es: "el médico (al hablarle: « Docteur »)", ex: "Le médecin va vous examiner dans un instant." },
        { en: "l’externe", ipa: "/lɛk.stɛʁn/", es: "estudiante de medicina en prácticas hospitalarias (equivalencia aproximada con los ciclos clínicos)", ex: "Je suis externe dans le service de médecine interne." },
        { en: "l’étudiant en médecine", ipa: "/le.ty.djɑ̃ ɑ̃ med.sin/", es: "estudiante de medicina (femenino: étudiante)", ex: "Je suis étudiante en médecine et je viens du Mexique." },
        { en: "l’infirmier / l’infirmière", ipa: "/lɛ̃.fiʁ.mje/ /lɛ̃.fiʁ.mjɛʁ/", es: "enfermero / enfermera", ex: "L’infirmière va prendre votre tension." },
        { en: "le patient / la patiente", ipa: "/lə pa.sjɑ̃/ /la pa.sjɑ̃t/", es: "paciente (masculino / femenino)", ex: "La patiente du lit trois est arrivée ce matin." },
        { en: "le rendez-vous", ipa: "/lə ʁɑ̃.de.vu/", es: "la cita", ex: "Vous avez rendez-vous à quatorze heures ?" },
        { en: "s’asseoir", ipa: "/sa.swaʁ/", es: "sentarse (imperativo: asseyez-vous)", ex: "Asseyez-vous, je vous en prie." },
        { en: "la consultation", ipa: "/la kɔ̃.syl.ta.sjɔ̃/", es: "la consulta (acto médico, no el consultorio)", ex: "La consultation dure environ vingt minutes." }
      ],
      phrases: [
        { en: "Bonjour Monsieur, je m’appelle Carlos, je suis étudiant en médecine.", es: "Buenos días, señor, me llamo Carlos, soy estudiante de medicina.", use: "Primera presentación ante un paciente." },
        { en: "Je suis étudiante en médecine, en dernière année.", es: "Soy estudiante de medicina, en el último año.", use: "Para decir tu nivel sin pretender ser médico." },
        { en: "Je vais vous poser quelques questions.", es: "Voy a hacerle algunas preguntas.", use: "Para abrir el interrogatorio." },
        { en: "Asseyez-vous, je vous en prie.", es: "Siéntese, por favor.", use: "Al recibir al paciente." },
        { en: "Comment allez-vous aujourd’hui ?", es: "¿Cómo se encuentra hoy?", use: "Saludo antes de la consulta." },
        { en: "Qu’est-ce qui vous amène ?", es: "¿Qué lo trae por aquí?", use: "Motivo de consulta, de forma amable." },
        { en: "Vous permettez que je vous examine ?", es: "¿Me permite examinarlo?", use: "Pedir consentimiento antes de la exploración." }
      ],
      text: {
        type: "dialogue",
        title: "Première rencontre",
        context: "Un estudiante recibe a una paciente en la consulta de un hospital francés.",
        lines: [
          { who: "Étudiant", en: "Bonjour Madame, entrez, je vous en prie." },
          { who: "Patiente", en: "Bonjour. Je suis Madame Leroy, j’ai rendez-vous à dix heures." },
          { who: "Étudiant", en: "Enchanté. Je m’appelle Carlos, je suis étudiant en médecine." },
          { who: "Patiente", en: "Vous êtes étranger ?" },
          { who: "Étudiant", en: "Oui, je viens du Mexique. Je fais un stage ici pendant deux mois." },
          { who: "Patiente", en: "Très bien. Et le docteur ne sera pas là ?" },
          { who: "Étudiant", en: "Si, elle arrive dans cinq minutes. Asseyez-vous, je vous en prie." },
          { who: "Patiente", en: "Merci. Ça ne vous dérange pas si je garde mon manteau ?" },
          { who: "Étudiant", en: "Pas du tout. Comment allez-vous aujourd’hui ?" },
          { who: "Patiente", en: "Pas très bien, c’est pour cela que je suis ici." },
          { who: "Étudiant", en: "Je vais vous poser quelques questions en attendant le docteur." },
          { who: "Patiente", en: "D’accord, allez-y." }
        ]
      },
      grammar: [
        "Al paciente siempre « vous » y « Madame / Monsieur ». Con compañeros de tu nivel se pasa al « tu » cuando alguien dice « On peut se tutoyer ? »; a un jefe de servicio o profesor se le sigue diciendo « vous ».",
        "Profesión con « être » va sin artículo: « Je suis infirmier », no « Je suis un infirmier ». Cambia el género: étudiant / étudiante, infirmier / infirmière.",
        "« Je m’appelle… » (me llamo) y « Je suis… » (soy) son las dos fórmulas de presentación; añade tu rol y de dónde vienes con « Je viens du Mexique ».",
        "« Bonjour » se usa de día; « Bonsoir » al llegar por la tarde-noche. « Salut » solo entre compañeros jóvenes, nunca con pacientes."
      ],
      tip: "No digas « Je suis interne » si eres estudiante o MIP: en Francia « interne » es un médico residente ya graduado. Di « étudiant en médecine » o « externe » y evitarás malentendidos.",
      exercises: [
        { type: "mc", q: "¿Cómo preguntas a un paciente adulto cómo está?", options: ["Tu vas bien ?", "Comment allez-vous ?", "Comment vas-tu ?", "Ça va, mec ?"], answer: 1, explain: "Con pacientes se usa siempre « vous »: « Comment allez-vous ? »." },
        { type: "fill", q: "Je ___ étudiant en médecine. (soy)", answer: ["suis"], explain: "« Être » en primera persona: je suis." },
        { type: "order", q: "Ordena la oración: pedir que se siente.", words: ["Asseyez-vous", "je", "vous", "en", "prie"], answer: "Asseyez-vous je vous en prie", explain: "Fórmula de cortesía: « je vous en prie »." },
        { type: "mc", q: "En Francia, ¿qué es un « interne »?", options: ["Un estudiante de primer año", "Un médico residente ya graduado", "Un enfermero", "Un paciente hospitalizado"], answer: 1, explain: "El interne es un médico en formación de especialidad; el estudiante en prácticas es el « externe »." },
        { type: "fill", q: "Je vais vous ___ quelques questions. (hacer / plantear)", answer: ["poser"], explain: "Se dice « poser des questions », igual que en español « plantear »." },
        { type: "order", q: "Ordena la oración: tu rol.", words: ["Je", "suis", "étudiante", "en", "médecine"], answer: "Je suis étudiante en médecine", explain: "Sin artículo ante la profesión; « étudiante » con -e si hablas en femenino." }
      ]
    },
    {
      id: "m1l2",
      title: "Preguntas en el interrogatorio",
      minutes: 15,
      goal: "Al terminar podrás formular preguntas clave de la anamnesis con « est-ce que », con inversión y con « Depuis quand… ? » y « Où exactement… ? ».",
      intro: "En francés hay tres formas de preguntar: con entonación, con « est-ce que » y con inversión del verbo y el sujeto. En la consulta se mezclan; la inversión suena más formal y es la que verás escrita en los historiales. El error típico del hispanohablante es usar el pasado con « depuis quand » (en francés va el presente) y confundir « depuis » con « il y a ».",
      vocab: [
        { en: "depuis quand", ipa: "/də.pɥi kɑ̃/", es: "desde cuándo (va con verbo en presente)", ex: "Depuis quand avez-vous cette toux ?" },
        { en: "où exactement", ipa: "/u ɛɡ.zakt.mɑ̃/", es: "dónde exactamente", ex: "Où avez-vous mal exactement ?" },
        { en: "combien de temps", ipa: "/kɔ̃.bjɛ̃ də tɑ̃/", es: "cuánto tiempo", ex: "Combien de temps dure la douleur ?" },
        { en: "à quelle fréquence", ipa: "/a kɛl fʁe.kɑ̃s/", es: "con qué frecuencia", ex: "À quelle fréquence avez-vous ces crises ?" },
        { en: "est-ce que", ipa: "/ɛs kə/", es: "partícula que convierte una frase en pregunta", ex: "Est-ce que vous avez de la fièvre ?" },
        { en: "avoir mal à", ipa: "/a.vwaʁ mal a/", es: "tener dolor en (a + le = au, a + les = aux)", ex: "J’ai mal à la tête depuis hier." },
        { en: "irradier", ipa: "/i.ʁa.dje/", es: "irradiar", ex: "La douleur irradie-t-elle dans le bras ?" },
        { en: "soulager", ipa: "/su.la.ʒe/", es: "aliviar", ex: "Qu’est-ce qui soulage la douleur ?" },
        { en: "aggraver", ipa: "/a.ɡʁa.ve/", es: "empeorar (algo que agrava)", ex: "Qu’est-ce qui aggrave la douleur ?" },
        { en: "un traitement", ipa: "/œ̃ tʁɛt.mɑ̃/", es: "un tratamiento (también los medicamentos habituales)", ex: "Prenez-vous un traitement en ce moment ?" },
        { en: "une allergie", ipa: "/yn a.lɛʁ.ʒi/", es: "una alergia", ex: "Avez-vous des allergies connues ?" },
        { en: "par moments", ipa: "/paʁ mɔ.mɑ̃/", es: "por momentos, intermitente", ex: "La douleur est-elle constante ou par moments ?" }
      ],
      phrases: [
        { en: "Depuis quand avez-vous ces symptômes ?", es: "¿Desde cuándo tiene estos síntomas?", use: "Pregunta de inicio de la enfermedad." },
        { en: "Où avez-vous mal exactement ?", es: "¿Dónde le duele exactamente?", use: "Localizar el dolor." },
        { en: "Est-ce que la douleur irradie quelque part ?", es: "¿El dolor se irradia a algún lugar?", use: "Caracterizar el dolor." },
        { en: "Qu’est-ce qui aggrave ou soulage la douleur ?", es: "¿Qué empeora o alivia el dolor?", use: "Factores modificantes." },
        { en: "Avez-vous de la fièvre ?", es: "¿Tiene fiebre?", use: "Pregunta con inversión, forma formal." },
        { en: "Prenez-vous des médicaments en ce moment ?", es: "¿Toma algún medicamento ahora?", use: "Antecedentes farmacológicos." },
        { en: "Avez-vous des allergies connues ?", es: "¿Tiene alergias conocidas?", use: "Antes de prescribir." }
      ],
      text: {
        type: "dialogue",
        title: "Une douleur dans la poitrine",
        context: "Interrogatorio de un paciente con dolor torácico en urgencias.",
        lines: [
          { who: "Médecin", en: "Bonjour Monsieur, qu’est-ce qui vous amène aujourd’hui ?" },
          { who: "Patient", en: "J’ai mal à la poitrine depuis ce matin." },
          { who: "Médecin", en: "Depuis quelle heure exactement ?" },
          { who: "Patient", en: "Depuis environ sept heures." },
          { who: "Médecin", en: "Où avez-vous mal exactement ?" },
          { who: "Patient", en: "Au milieu de la poitrine, derrière le sternum." },
          { who: "Médecin", en: "Est-ce que la douleur irradie dans le bras ou dans la mâchoire ?" },
          { who: "Patient", en: "Oui, un peu dans le bras gauche." },
          { who: "Médecin", en: "Qu’est-ce qui aggrave la douleur ? L’effort ?" },
          { who: "Patient", en: "Oui, quand je monte les escaliers." },
          { who: "Médecin", en: "Avez-vous des difficultés à respirer ou des sueurs ?" },
          { who: "Patient", en: "J’ai un peu transpiré, oui." },
          { who: "Médecin", en: "Prenez-vous un traitement ?" },
          { who: "Patient", en: "Je prends un médicament pour la tension." }
        ]
      },
      grammar: [
        "Tres formas de preguntar: entonación (« Vous avez de la fièvre ? », informal), « est-ce que » (« Est-ce que vous avez de la fièvre ? », neutra) e inversión (« Avez-vous de la fièvre ? », formal y escrita).",
        "Con « il / elle / on » en tercera persona la inversión añade una -t- si el verbo acaba en vocal: « La douleur irradie-t-elle ? », « A-t-il de la fièvre ? ». Con un nombre como sujeto se repite el pronombre: « La douleur irradie-t-elle ? ».",
        "« Depuis quand » va con presente: « Depuis quand toussez-vous ? » (no « avez-vous toussé »). « Qu’est-ce qui » pregunta por el sujeto (« Qu’est-ce qui soulage la douleur ? »).",
        "« Où exactement » y « combien de temps » se colocan al principio de la pregunta; el orden de las palabras es parecido al español."
      ],
      tip: "No confundas « depuis » y « il y a »: « depuis trois jours » = desde hace tres días (sigue); « il y a trois jours » = hace tres días (ocurrió entonces). Con la inversión suenas más formal; en la consulta oral lo más común es « est-ce que » o la entonación.",
      exercises: [
        { type: "mc", q: "¿Cuál es la forma correcta de « ¿desde cuándo tose? »?", options: ["Depuis quand toussez-vous ?", "Depuis quand avez-vous toussé ?", "Il y a quand toussez-vous ?", "Pendant quand toussez-vous ?"], answer: 0, explain: "« Depuis quand » se combina con el presente del verbo." },
        { type: "fill", q: "Où avez-vous mal ___ ? (exactamente)", answer: ["exactement"], explain: "« Exactement » es el adverbio y va al final de la pregunta." },
        { type: "order", q: "Ordena la pregunta con « est-ce que ».", words: ["Est-ce", "que", "vous", "avez", "de", "la", "fièvre"], answer: "Est-ce que vous avez de la fièvre", explain: "« Est-ce que » + sujeto + verbo." },
        { type: "mc", q: "¿Cuál es la inversión correcta con « la douleur irradie »?", options: ["La douleur irradie-elle ?", "La douleur irradie-t-elle ?", "La douleur irradie-te-elle ?", "La douleur irradie t elle ?"], answer: 1, explain: "Se repite el pronombre y se añade la -t- eufónica tras vocal." },
        { type: "fill", q: "J’ai mal ___ ventre depuis hier. (al)", answer: ["au"], explain: "à + le = au: « mal au ventre »." },
        { type: "order", q: "Ordena la pregunta sobre qué alivia el dolor.", words: ["Qu’est-ce", "qui", "soulage", "la", "douleur"], answer: "Qu’est-ce qui soulage la douleur", explain: "« Qu’est-ce qui » pregunta por el sujeto." }
      ]
    },
    {
      id: "m1l3",
      title: "Hablar del pasado",
      minutes: 15,
      goal: "Al terminar podrás contar cuándo y cómo empezó un síntoma usando el passé composé con avoir y être, el imparfait básico y evitando los falsos amigos más peligrosos.",
      intro: "El francés oral usa el passé composé para los hechos puntuales (« j’ai vomi ») y el imparfait para el contexto, el estado o lo que duraba (« j’avais mal »). Es el equivalente al contraste entre pretérito e imperfecto del español. El error típico es elegir mal el auxiliar (« j’ai tombé ») o usar « constipé » pensando en « constipado ».",
      vocab: [
        { en: "j’ai commencé", ipa: "/ʒe kɔ.mɑ̃.se/", es: "empecé / ha empezado (commencer)", ex: "Ça a commencé hier soir vers vingt heures." },
        { en: "j’ai vomi", ipa: "/ʒe vɔ.mi/", es: "vomité (vomir)", ex: "J’ai vomi deux fois cette nuit." },
        { en: "j’ai eu", ipa: "/ʒe y/", es: "tuve (avoir, participio « eu »)", ex: "J’ai eu de la fièvre toute la semaine." },
        { en: "j’ai pris", ipa: "/ʒe pʁi/", es: "tomé (prendre, participio « pris »)", ex: "J’ai pris du paracétamol à midi." },
        { en: "je suis tombé(e)", ipa: "/ʒə sɥi tɔ̃.be/", es: "me caí (tomber, con être)", ex: "Je suis tombée dans l’escalier ce matin." },
        { en: "je suis allé(e)", ipa: "/ʒə sɥi.z‿a.le/", es: "fui (aller, con être)", ex: "Je suis allé aux urgences hier soir." },
        { en: "je me suis réveillé(e)", ipa: "/ʒə mə sɥi ʁe.ve.je/", es: "me desperté (verbo pronominal, siempre con être)", ex: "Je me suis réveillé avec une douleur dans le dos." },
        { en: "j’avais", ipa: "/ʒa.vɛ/", es: "tenía (imparfait de avoir)", ex: "J’avais mal à la gorge depuis deux jours." },
        { en: "c’était", ipa: "/se.tɛ/", es: "era / estaba (imparfait de être)", ex: "C’était une douleur brûlante, très forte." },
        { en: "il y a", ipa: "/il i a/", es: "hace (referido al tiempo pasado)", ex: "Ça a commencé il y a trois jours." },
        { en: "constipé(e) / enrhumé(e)", ipa: "/kɔ̃s.ti.pe/ /ɑ̃.ʁy.me/", es: "constipé = estreñido (¡no es constipado!); constipado = enrhumé", ex: "Je suis constipé depuis une semaine, mais je ne suis pas enrhumé." },
        { en: "enceinte", ipa: "/ɑ̃.sɛ̃t/", es: "embarazada (no confundir con embarrassée = avergonzada)", ex: "Êtes-vous enceinte ou pensez-vous l’être ?" }
      ],
      phrases: [
        { en: "Quand est-ce que ça a commencé ?", es: "¿Cuándo empezó?", use: "Fecha de inicio del síntoma." },
        { en: "Vous avez eu de la fièvre ?", es: "¿Tuvo fiebre?", use: "Pregunta en passé composé." },
        { en: "Avez-vous vomi ?", es: "¿Vomitó?", use: "Síntomas digestivos." },
        { en: "Êtes-vous tombé ?", es: "¿Se cayó?", use: "Antecedente de traumatismo." },
        { en: "Qu’avez-vous pris comme médicament ?", es: "¿Qué medicamento tomó?", use: "Automedicación." },
        { en: "Je me suis réveillé avec la douleur.", es: "Me desperté con el dolor.", use: "Lo dice el paciente al contar el inicio." },
        { en: "Aviez-vous déjà eu ce genre de douleur ?", es: "¿Había tenido antes este tipo de dolor?", use: "Antecedente de episodios previos." }
      ],
      text: {
        type: "dialogue",
        title: "Qu’est-ce qui s’est passé ?",
        context: "Una paciente cuenta un dolor abdominal que empezó la noche anterior.",
        lines: [
          { who: "Médecin", en: "Racontez-moi ce qui s’est passé." },
          { who: "Patiente", en: "Hier soir, j’ai eu très mal au ventre." },
          { who: "Médecin", en: "À quelle heure est-ce que ça a commencé ?" },
          { who: "Patiente", en: "Vers vingt heures. J’étais à la maison, je préparais le dîner." },
          { who: "Médecin", en: "Avez-vous vomi ?" },
          { who: "Patiente", en: "Oui, j’ai vomi deux fois dans la nuit." },
          { who: "Médecin", en: "Avez-vous eu de la fièvre ?" },
          { who: "Patiente", en: "Je ne sais pas, je n’ai pas pris ma température." },
          { who: "Médecin", en: "Avez-vous pris un médicament ?" },
          { who: "Patiente", en: "J’ai pris du paracétamol, mais ça n’a pas aidé." },
          { who: "Médecin", en: "Et ce matin, comment était la douleur ?" },
          { who: "Patiente", en: "Quand je me suis réveillée, c’était moins fort, mais j’avais encore mal." },
          { who: "Médecin", en: "Merci. Je vais vous examiner." }
        ]
      },
      grammar: [
        "Passé composé = auxiliar « avoir » o « être » en presente + participio. La mayoría de los verbos usa « avoir »: « j’ai vomi », « j’ai pris ». Con « être » van los verbos de movimiento o cambio (aller, venir, tomber, partir, arriver, rester, naître, mourir) y todos los pronominales: « elle est tombée », « je me suis réveillé ».",
        "Con « être » el participio concuerda con el sujeto (« elle est tombée », « elle s’est réveillée »). Participios irregulares frecuentes: avoir → eu, prendre → pris, faire → fait, voir → vu, boire → bu, être → été.",
        "Imparfait: raíz de « nous » + -ais, -ais, -ait, -ions, -iez, -aient (nous avons → j’avais). « Être » es irregular: j’étais, c’était. Se usa para estados, descripciones y hábitos; el passé composé, para una acción terminada.",
        "La negación rodea al auxiliar: « Je n’ai pas pris de médicament », « Il n’est pas tombé »."
      ],
      tip: "Falsos amigos del español: « constipé » significa estreñido (el catarro es « enrhumé ») y « embarrassée » es avergonzada (la embarazada es « enceinte »). Una confusión aquí en la consulta cambia el diagnóstico.",
      exercises: [
        { type: "mc", q: "¿Cómo se dice « ayer me caí »?", options: ["Hier, j’ai tombé.", "Hier, je suis tombé.", "Hier, je tombe.", "Hier, je tombais."], answer: 1, explain: "« Tomber » es un verbo de movimiento y usa « être »." },
        { type: "fill", q: "Hier, j’___ vomi deux fois. (auxiliar avoir, 1.ª persona)", answer: ["ai"], explain: "« Vomir » forma el passé composé con « avoir »: j’ai vomi." },
        { type: "mc", q: "¿Qué significa « Je suis constipé »?", options: ["Tengo estreñimiento", "Estoy resfriado", "Estoy embarazado", "Tengo tos"], answer: 0, explain: "« Constipé » es estreñido; resfriado se dice « enrhumé »." },
        { type: "fill", q: "Elle s’est ___ à six heures. (despertado, femenino)", answer: ["réveillée"], explain: "Verbo pronominal con « être »: el participio concuerda con « elle »." },
        { type: "order", q: "Ordena la frase: me desperté con el dolor.", words: ["Je", "me", "suis", "réveillé", "avec", "la", "douleur"], answer: "Je me suis réveillé avec la douleur", explain: "Pronominal: pronombre + « suis » + participio." },
        { type: "mc", q: "Completa: Quand je suis entré, la patiente ___ mal. (estado en curso)", options: ["avait", "a eu", "aura", "avoir"], answer: 0, explain: "Un estado continuo en el pasado va en imparfait: « avait mal »." }
      ]
    },
    {
      id: "m1l4",
      title: "Números, fechas, horas, dosis y signos vitales",
      minutes: 15,
      goal: "Al terminar podrás leer en voz alta una tensión, una temperatura, una hora de 24 horas y una dosis como lo hace el personal de un hospital francés.",
      intro: "Los números franceses tienen su lógica propia: 70 es « sesenta-diez » y 80 es « cuatro-veintes ». La presión se dice con dos números cortos (« douze-huit »), la hora va en formato de 24 horas y el decimal se escribe con coma. El error típico del hispanohablante es leer el decimal con punto o decir la tensión completa, « ciento veinte sobre ochenta ».",
      vocab: [
        { en: "soixante-dix", ipa: "/swa.sɑ̃t.dis/", es: "70 (sesenta + diez; 71 = soixante et onze)", ex: "Son pouls est à soixante-dix battements par minute." },
        { en: "quatre-vingts", ipa: "/ka.tʁə.vɛ̃/", es: "80 (cuatro veintes, con -s solo si va solo; 90 = quatre-vingt-dix)", ex: "Elle pèse quatre-vingts kilos." },
        { en: "la virgule", ipa: "/la viʁ.ɡyl/", es: "la coma (decimal: 37,5 = trente-sept virgule cinq)", ex: "Il a trente-huit virgule cinq de fièvre." },
        { en: "dix-sept heures", ipa: "/di.sɛt œʁ/", es: "las 17 h (formato de 24 horas)", ex: "Le rendez-vous est à dix-sept heures trente." },
        { en: "douze-huit", ipa: "/duz.ɥit/", es: "12/8 = 120/80 mmHg (se dicen solo las decenas)", ex: "Sa tension est à douze-huit." },
        { en: "la tension artérielle", ipa: "/la tɑ̃.sjɔ̃ aʁ.te.ʁjɛl/", es: "la presión arterial (« la tension » en la vida diaria)", ex: "Je vais prendre votre tension artérielle." },
        { en: "la fréquence cardiaque", ipa: "/la fʁe.kɑ̃s kaʁ.djak/", es: "la frecuencia cardiaca (también « le pouls »)", ex: "Sa fréquence cardiaque est de quatre-vingt-dix par minute." },
        { en: "la saturation", ipa: "/la sa.ty.ʁa.sjɔ̃/", es: "la saturación de oxígeno", ex: "La saturation est à quatre-vingt-dix-huit pour cent." },
        { en: "le comprimé", ipa: "/lə kɔ̃.pʁi.me/", es: "el comprimido (tableta)", ex: "Prenez un comprimé de cinq cents milligrammes." },
        { en: "le milligramme", ipa: "/lə mi.li.ɡʁam/", es: "el miligramo (se escribe mg)", ex: "Le médecin prescrit mille milligrammes de paracétamol." },
        { en: "fois par jour", ipa: "/fwa paʁ ʒuʁ/", es: "veces al día (posología)", ex: "Prenez ce médicament trois fois par jour." },
        { en: "le premier", ipa: "/lə pʁə.mje/", es: "el primero (única fecha con ordinal: le premier mars)", ex: "Les symptômes ont commencé le premier mars." }
      ],
      phrases: [
        { en: "Votre tension est à douze-huit, c’est normal.", es: "Su presión es 120/80, es normal.", use: "Informar el resultado de la presión." },
        { en: "Vous avez trente-huit virgule deux de fièvre.", es: "Tiene 38,2 de fiebre.", use: "Decir la temperatura." },
        { en: "Prenez un comprimé trois fois par jour, pendant sept jours.", es: "Tome un comprimido tres veces al día durante siete días.", use: "Indicar una posología." },
        { en: "Votre saturation est à quatre-vingt-dix-sept pour cent.", es: "Su saturación es del 97 por ciento.", use: "Informar la oximetría." },
        { en: "La douleur a commencé le douze mars à quatorze heures.", es: "El dolor empezó el 12 de marzo a las 14 h.", use: "Fecha y hora de inicio." },
        { en: "Revenez dans quinze jours pour un contrôle.", es: "Vuelva en quince días para una revisión.", use: "Cita de seguimiento." },
        { en: "Votre fréquence cardiaque est à soixante-dix-huit.", es: "Su frecuencia cardiaca es de 78.", use: "Decir el pulso." }
      ],
      text: {
        type: "dialogue",
        title: "Les constantes",
        context: "Una enfermera comunica a un médico los signos vitales de un paciente hospitalizado y recibe una indicación de dosis.",
        lines: [
          { who: "Infirmière", en: "Docteur, voici les constantes de Monsieur Durand." },
          { who: "Médecin", en: "Allez-y." },
          { who: "Infirmière", en: "Tension à treize-huit, fréquence cardiaque à quatre-vingt-quatre." },
          { who: "Médecin", en: "Et la température ?" },
          { who: "Infirmière", en: "Trente-huit virgule trois, il a de la fièvre depuis hier à vingt heures." },
          { who: "Médecin", en: "Saturation ?" },
          { who: "Infirmière", en: "Quatre-vingt-quinze pour cent à l’air ambiant." },
          { who: "Médecin", en: "D’accord. Prescrivez mille milligrammes de paracétamol, trois fois par jour." },
          { who: "Infirmière", en: "Mille milligrammes, trois fois par jour, c’est noté." },
          { who: "Médecin", en: "Et une prise de sang demain matin à sept heures trente." },
          { who: "Infirmière", en: "Très bien. Nous le surveillons toutes les quatre heures." },
          { who: "Médecin", en: "Parfait, merci." }
        ]
      },
      grammar: [
        "El decimal es una coma: 37,5 se lee « trente-sept virgule cinq ». Los miles se separan con espacio (1 000 mg) y la hora se escribe con « h »: 17 h 30 = « dix-sept heures trente »; en el hospital se usa casi siempre el formato de 24 horas.",
        "70 = soixante-dix, 71 = soixante et onze, 80 = quatre-vingts (sin -s si sigue otro número: quatre-vingt-deux), 90 = quatre-vingt-dix. En Bélgica y en Suiza francófona se oyen « septante » y « nonante » para 70 y 90.",
        "La presión se dice con dos números cortos: 120/80 mmHg = « douze-huit »; 130/80 = « treize-huit »; 140/90 = « quatorze-neuf ». Se omiten ceros y unidad.",
        "Fechas: « le » + número + mes en minúscula (« le douze mars »), con ordinal solo el primero (« le premier mai »). Posología: « trois fois par jour », « matin, midi et soir », « toutes les huit heures »."
      ],
      tip: "No digas la presión completa como en español (« cent vingt sur quatre-vingts ») cuando el equipo dice « douze-huit »: suena raro y puede confundir. Para 77 piensa en 60 + 17: soixante-dix-sept.",
      exercises: [
        { type: "mc", q: "¿A qué presión equivale « douze-huit »?", options: ["12/8 mmHg", "120/80 mmHg", "1,2/0,8 mmHg", "12 y 8 horas"], answer: 1, explain: "Se dicen solo las decenas: douze-huit = 120/80 mmHg." },
        { type: "fill", q: "37,5 se lee trente-sept ___ cinq. (la coma decimal)", answer: ["virgule"], explain: "El decimal es una coma: « virgule »." },
        { type: "order", q: "Ordena la posología: tomar un comprimido tres veces al día.", words: ["Prenez", "un", "comprimé", "trois", "fois", "par", "jour"], answer: "Prenez un comprimé trois fois par jour", explain: "« Fois par jour » indica la frecuencia diaria." },
        { type: "mc", q: "¿Cómo se dice 80 en el francés de Francia?", options: ["soixante-vingt", "quatre-vingts", "septante-dix", "quatre-vingt-dix"], answer: 1, explain: "80 = quatre-vingts (4 × 20); 90 = quatre-vingt-dix." },
        { type: "fill", q: "17 h 30 se lee dix-sept ___ trente. (horas)", answer: ["heures"], explain: "« Heures » es plural." },
        { type: "order", q: "Ordena la frase: su temperatura es 38,2.", words: ["Sa", "température", "est", "à", "trente-huit", "virgule", "deux"], answer: "Sa température est à trente-huit virgule deux", explain: "« Est à » + cifra + « virgule » + decimal." }
      ]
    }
  ]
});
