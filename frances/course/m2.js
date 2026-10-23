(window.COURSE = window.COURSE || []).push({
  id: "m2", n: 2,
  title: "Terminología médica",
  en: "Vocabulaire médical",
  summary: "Pasas del lenguaje del paciente al término técnico, descompones palabras con prefijos y sufijos, localizas síntomas en el cuerpo y pronuncias los sonidos que más delatan a un hispanohablante.",
  lessons: [
    {
      id: "m2l1",
      title: "Lenguaje técnico frente a coloquial",
      minutes: 15,
      goal: "Al terminar podrás reconocer doce términos técnicos y su equivalente coloquial para entender al paciente y escribir el historial.",
      intro: "El paciente dice « crise cardiaque » y el historial escribe « infarctus du myocarde ». Un médico francés pasa de un registro al otro sin pensarlo, y tú también debes hacerlo. El error típico del hispanohablante es calcar el coloquial del español (« ataque al corazón » → « attaque au cœur ») en lugar de usar « crise cardiaque ».",
      vocab: [
        { en: "l’infarctus du myocarde", ipa: "/lɛ̃.faʁk.tys dy mi.ɔ.kaʁd/", es: "infarto de miocardio; coloquial: la crise cardiaque", ex: "Il a fait un infarctus du myocarde il y a deux ans." },
        { en: "la céphalée", ipa: "/la se.fa.le/", es: "cefalea; coloquial: le mal de tête", ex: "Elle a des céphalées depuis trois jours." },
        { en: "la dyspnée", ipa: "/la dis.pne/", es: "disnea; coloquial: être essoufflé", ex: "Il a une dyspnée à l’effort." },
        { en: "l’HTA (hypertension artérielle)", ipa: "/laʃ.te.a/", es: "hipertensión arterial; coloquial: avoir de la tension", ex: "Elle a une HTA traitée depuis dix ans." },
        { en: "la syncope", ipa: "/la sɛ̃.kɔp/", es: "síncope; coloquial: l’évanouissement, perdre connaissance", ex: "Avez-vous eu une syncope ?" },
        { en: "le prurit", ipa: "/lə pʁy.ʁit/", es: "prurito; coloquial: les démangeaisons", ex: "Le prurit est surtout nocturne." },
        { en: "l’AVC (accident vasculaire cérébral)", ipa: "/la.ve.se/", es: "ictus; coloquial: l’attaque cérébrale", ex: "Son père a fait un AVC l’année dernière." },
        { en: "la dysurie", ipa: "/la di.zy.ʁi/", es: "disuria; coloquial: ça brûle quand j’urine", ex: "Il y a une dysurie depuis hier." },
        { en: "l’œdème", ipa: "/lø.dɛm/", es: "edema; coloquial: le gonflement, les jambes enflées", ex: "Il y a un œdème des chevilles." },
        { en: "l’ecchymose", ipa: "/lɛ.ki.moz/", es: "equimosis; coloquial: le bleu", ex: "Vous avez une ecchymose sur le bras." },
        { en: "l’asthénie", ipa: "/la.ste.ni/", es: "astenia; coloquial: la grosse fatigue", ex: "Le patient se plaint d’une asthénie importante." },
        { en: "la rhinopharyngite", ipa: "/la ʁi.no.fa.ʁɛ̃.ʒit/", es: "rinofaringitis; coloquial: le rhume", ex: "L’enfant a une rhinopharyngite virale." }
      ],
      phrases: [
        { en: "Vous avez une céphalée, c’est-à-dire un mal de tête ?", es: "¿Tiene cefalea, es decir, dolor de cabeza?", use: "Confirmar con palabras del paciente lo que escribirás." },
        { en: "Avez-vous déjà fait un infarctus, ce qu’on appelle une crise cardiaque ?", es: "¿Ha tenido un infarto, lo que se llama un ataque cardiaco?", use: "Antecedentes cardiovasculares." },
        { en: "Vous êtes essoufflé quand vous montez les escaliers ?", es: "¿Se queda sin aliento al subir escaleras?", use: "Preguntar por disnea de esfuerzo." },
        { en: "Avez-vous perdu connaissance ?", es: "¿Perdió el conocimiento?", use: "Preguntar por síncope." },
        { en: "Est-ce que vous avez des démangeaisons ?", es: "¿Tiene picazón?", use: "Preguntar por prurito." },
        { en: "Vos jambes sont gonflées depuis quand ?", es: "¿Desde cuándo tiene las piernas hinchadas?", use: "Preguntar por edema." },
        { en: "Avez-vous de la tension ?", es: "¿Tiene la presión alta?", use: "Forma coloquial de preguntar por HTA." }
      ],
      text: {
        type: "dialogue",
        title: "Du patient au dossier",
        context: "Un externe interroga a un paciente mayor y traduce en voz alta sus palabras al lenguaje técnico del historial.",
        lines: [
          { who: "Externe", en: "Bonjour Monsieur, avez-vous déjà eu des problèmes de cœur ?" },
          { who: "Patient", en: "Oui, il y a deux ans, j’ai eu une crise cardiaque." },
          { who: "Externe", en: "Donc un infarctus du myocarde. Et aujourd’hui, avez-vous des douleurs dans la poitrine ?" },
          { who: "Patient", en: "Non, mais je suis très essoufflé." },
          { who: "Externe", en: "C’est une dyspnée d’effort. Depuis quand ?" },
          { who: "Patient", en: "Depuis un mois. Et j’ai les jambes gonflées le soir." },
          { who: "Externe", en: "Vous avez donc des œdèmes des membres inférieurs. Avez-vous mal à la tête ?" },
          { who: "Patient", en: "Non, pas de mal de tête. Mais je me sens très fatigué." },
          { who: "Externe", en: "D’accord, une asthénie. Avez-vous déjà perdu connaissance ?" },
          { who: "Patient", en: "Jamais." },
          { who: "Externe", en: "Merci. Je vais vous prendre la tension." },
          { who: "Patient", en: "Mon médecin dit que j’ai de la tension, vous savez." }
        ]
      },
      grammar: [
        "Con el paciente, usa el término coloquial o explica el técnico con « c’est-à-dire » o « autrement dit ». En el historial y entre colegas, el término técnico y las siglas: HTA, AVC, IDM (infarctus du myocarde), BPCO (EPOC).",
        "Coloquial muy frecuente: « avoir de la tension » = hipertensión; « avoir du sucre » = diabetes; « avoir mal au cœur » = tener náuseas (no dolor de corazón). Se oyen a diario.",
        "Género: un infarctus, un œdème (masculino); une céphalée, une dyspnée, une ecchymose, une syncope (femenino). Los términos en -ée, -ose y -ie son femeninos.",
        "Las siglas se pronuncian letra por letra: HTA /aʃ.te.a/, AVC /a.ve.se/, BPCO /be.pe.se.o/."
      ],
      tip: "En francés no existe « ataque al corazón » ni « ataque cardíaco »: se dice « crise cardiaque » o « infarctus ». Ten cuidado también con « avoir mal au cœur »: significa tener ganas de vomitar, no dolor torácico.",
      exercises: [
        { type: "mc", q: "¿Cuál es el término técnico de « mal de tête »?", options: ["dyspnée", "céphalée", "syncope", "prurit"], answer: 1, explain: "Céphalée = cefalea; dyspnée = disnea; syncope = síncope; prurit = prurito." },
        { type: "mc", q: "El paciente dice « crise cardiaque ». ¿Qué escribes en el historial?", options: ["Infarctus du myocarde", "Accident vasculaire cérébral", "Asthénie", "Œdème"], answer: 0, explain: "« Crise cardiaque » es el equivalente coloquial de infarctus du myocarde." },
        { type: "fill", q: "Une ___ est une perte de connaissance brève. (término técnico)", answer: ["syncope"], explain: "Síncope = pérdida de conocimiento breve; coloquial: évanouissement." },
        { type: "fill", q: "Avez-vous de la dyspnée ? = Êtes-vous ___ ? (coloquial: sin aliento)", answer: ["essoufflé", "essoufflée"], explain: "« Essoufflé(e) » es el equivalente coloquial de disnea." },
        { type: "order", q: "Ordena la pregunta sobre pérdida de conocimiento.", words: ["Avez-vous", "déjà", "perdu", "connaissance"], answer: "Avez-vous déjà perdu connaissance", explain: "« Perdre connaissance » = perder el conocimiento." },
        { type: "mc", q: "¿Qué significa HTA en un historial francés?", options: ["Hipertensión arterial", "Hipotensión arterial", "Hemorragia traumática aguda", "Hiperglucemia"], answer: 0, explain: "HTA = hypertension artérielle." }
      ]
    },
    {
      id: "m2l2",
      title: "Prefijos, sufijos y el cuerpo",
      minutes: 15,
      goal: "Al terminar podrás nombrar ocho órganos con su artículo correcto y descomponer términos con -ite, -ectomie, -logie e hyper-/hypo-.",
      intro: "La mayoría de los términos médicos franceses vienen del griego y del latín, igual que en español, por lo que reconocerás muchos. La diferencia está en el género de los sustantivos corporales y en la ortografía (ph, th, y, œ). El error típico es dar el género del español: « la mano » funciona en francés (« la main »), pero « el hígado » no se parece nada en forma a « le foie ».",
      vocab: [
        { en: "le cœur", ipa: "/lə kœʁ/", es: "el corazón; adjetivo: cardiaque (cardio-)", ex: "Je vais écouter votre cœur." },
        { en: "le poumon", ipa: "/lə pu.mɔ̃/", es: "el pulmón; adjetivo: pulmonaire (pneumo-)", ex: "Le poumon droit est bien ventilé." },
        { en: "le foie", ipa: "/lə fwa/", es: "el hígado; adjetivo: hépatique (hépato-)", ex: "Le foie est palpable sous les côtes." },
        { en: "le rein", ipa: "/lə ʁɛ̃/", es: "el riñón; adjetivo: rénal (néphro-)", ex: "Il a un calcul dans le rein gauche." },
        { en: "l’estomac", ipa: "/lɛs.to.ma/", es: "el estómago; adjetivo: gastrique (gastro-)", ex: "Vous avez mal à l’estomac après les repas ?" },
        { en: "la peau", ipa: "/la po/", es: "la piel; adjetivo: cutané (dermato-)", ex: "La peau est sèche et rouge." },
        { en: "la main", ipa: "/la mɛ̃/", es: "la mano (femenino)", ex: "Il a mal à la main droite." },
        { en: "le ventre", ipa: "/lə vɑ̃tʁ/", es: "el vientre / abdomen; adjetivo: abdominal", ex: "Le ventre est souple et indolore." },
        { en: "-ite", ipa: "/it/", es: "inflamación (femenino): bronchite, hépatite", ex: "Elle a une bronchite depuis une semaine." },
        { en: "-ectomie", ipa: "/ɛk.tɔ.mi/", es: "extirpación quirúrgica: appendicectomie", ex: "On a fait une appendicectomie hier soir." },
        { en: "-logie / -logue", ipa: "/lɔ.ʒi/ /lɔɡ/", es: "estudio / especialista: cardiologie, cardiologue", ex: "Je vous adresse à un cardiologue." },
        { en: "hyper- / hypo-", ipa: "/i.pɛʁ/ /i.po/", es: "por exceso / por defecto: hypertension, hypotension", ex: "Une hypertension, c’est une tension trop élevée." }
      ],
      phrases: [
        { en: "Je vais écouter votre cœur et vos poumons.", es: "Voy a auscultar su corazón y sus pulmones.", use: "Antes de la auscultación." },
        { en: "Où avez-vous mal : au ventre, à l’estomac ?", es: "¿Dónde le duele: en el vientre, en el estómago?", use: "Localizar el dolor abdominal." },
        { en: "Il y a une inflammation de la peau : c’est une dermatite.", es: "Hay una inflamación de la piel: es una dermatitis.", use: "Explicar un diagnóstico cutáneo." },
        { en: "Vous avez une bronchite, c’est-à-dire une inflammation des bronches.", es: "Tiene bronquitis, es decir, una inflamación de los bronquios.", use: "Explicar un término con -ite." },
        { en: "On va vous adresser à un cardiologue.", es: "Lo vamos a derivar a un cardiólogo.", use: "Derivar a un especialista." },
        { en: "Avez-vous déjà subi une appendicectomie ?", es: "¿Le han hecho alguna vez una apendicectomía?", use: "Antecedentes quirúrgicos." },
        { en: "Votre tension est trop élevée : c’est une hypertension.", es: "Su presión es demasiado alta: es una hipertensión.", use: "Explicar hyper-." }
      ],
      text: {
        type: "dialogue",
        title: "Le tour de salle",
        context: "En la ronda del servicio, un externe presenta a un paciente hospitalizado ante el médico.",
        lines: [
          { who: "Médecin", en: "Présentez-moi le patient du lit douze." },
          { who: "Externe", en: "Monsieur Martin, soixante-dix ans, hospitalisé pour une insuffisance cardiaque." },
          { who: "Médecin", en: "Quels sont ses antécédents ?" },
          { who: "Externe", en: "Une hypertension depuis dix ans et une appendicectomie dans l’enfance." },
          { who: "Médecin", en: "Qu’avez-vous trouvé à l’examen ?" },
          { who: "Externe", en: "À l’auscultation, des crépitants aux deux poumons, et le ventre est souple et indolore." },
          { who: "Médecin", en: "Et le foie ?" },
          { who: "Externe", en: "Le foie est un peu douloureux à la palpation." },
          { who: "Médecin", en: "Il faut aussi vérifier la fonction du rein. Demandez un bilan rénal." },
          { who: "Externe", en: "Oui, et je demande aussi l’avis du cardiologue." },
          { who: "Médecin", en: "Très bien, merci." }
        ]
      },
      grammar: [
        "Aprende el sustantivo siempre con su artículo: le cœur, le foie, le rein, le ventre, le dos (masculinos); la peau, la main, la gorge, la bouche (femeninos). El género no siempre coincide con el español: le sang (la sangre) es masculino.",
        "Terminaciones: -tion, -té, -ie, -ose, -ite son femeninas (la bronchite, la fibrose); -ome, -isme, -ment son masculinas (un hématome, un syndrome, un traitement).",
        "Afijos frecuentes: -ite (inflamación), -ectomie (extirpación), -tomie (incisión), -ostomie (abertura), -scopie (exploración), -algie (dolor), -émie (sangre: anémie), hyper-/hypo-. Se descomponen casi igual que en español.",
        "Ortografía: se conservan ph, th, y y la ligadura œ (œdème, cœur), pero se pronuncian a la francesa: « -ite » suena /it/ y la h casi nunca suena."
      ],
      tip: "Memoriza el género en bloque: « la main » (femenino aunque termina en consonante), « le foie » y « le sang » (masculinos). Y atención con « l’os »: singular /lɔs/, plural « les os » /le zo/.",
      exercises: [
        { type: "mc", q: "¿Cómo se dice « la mano » en francés?", options: ["le main", "la main", "la mand", "le mano"], answer: 1, explain: "« Main » es femenino: la main." },
        { type: "fill", q: "Una inflamación de los bronquios se llama una ___ . (bronco + -ite)", answer: ["bronchite"], explain: "Bronches + -ite = bronchite (femenino)." },
        { type: "mc", q: "El sufijo -ectomie significa…", options: ["inflamación", "extirpación quirúrgica", "estudio de", "dolor"], answer: 1, explain: "Ejemplo: appendicectomie = extirpación del apéndice." },
        { type: "order", q: "Ordena la frase: voy a auscultar su corazón y sus pulmones.", words: ["Je", "vais", "écouter", "votre", "cœur", "et", "vos", "poumons"], answer: "Je vais écouter votre cœur et vos poumons", explain: "« Écouter » se usa para la auscultación." },
        { type: "fill", q: "On va vous adresser à un ___ . (especialista del corazón)", answer: ["cardiologue"], explain: "Cardio- + -logue = especialista del corazón." },
        { type: "mc", q: "¿Cuál de estas palabras es masculina?", options: ["foie", "peau", "main", "gorge"], answer: 0, explain: "Le foie es masculino; peau, main y gorge son femeninas." }
      ]
    },
    {
      id: "m2l3",
      title: "Posición y localización",
      minutes: 15,
      goal: "Al terminar podrás indicar lado, altura y posición de un dolor o un hallazgo con las palabras francesas de uso clínico.",
      intro: "Localizar un síntoma con precisión es la mitad de la exploración. Los términos anatómicos (proximal, distal, bilatéral) se parecen al español, pero los adjetivos concuerdan en género y número y se pronuncian a la francesa. El error típico es olvidar la concordancia (« le bras droite »).",
      vocab: [
        { en: "à droite", ipa: "/a dʁwat/", es: "a la derecha (adjetivo: droit, droite)", ex: "Où avez-vous mal : à droite ou à gauche ?" },
        { en: "à gauche", ipa: "/a ɡoʃ/", es: "a la izquierda (adjetivo: gauche)", ex: "La douleur est surtout à gauche." },
        { en: "en haut", ipa: "/ɑ̃ o/", es: "arriba (supérieur)", ex: "Est-ce que la douleur est en haut du ventre ?" },
        { en: "en bas", ipa: "/ɑ̃ ba/", es: "abajo (inférieur)", ex: "Le ventre est douloureux en bas à droite." },
        { en: "proximal", ipa: "/pʁɔk.si.mal/", es: "proximal, cerca del centro del cuerpo", ex: "La faiblesse touche surtout la partie proximale du membre." },
        { en: "distal", ipa: "/dis.tal/", es: "distal, lejos del centro del cuerpo", ex: "Il a une fracture de l’extrémité distale du radius." },
        { en: "bilatéral", ipa: "/bi.la.te.ʁal/", es: "bilateral, de los dos lados (plural masculino: bilatéraux)", ex: "Les œdèmes sont bilatéraux." },
        { en: "antérieur", ipa: "/ɑ̃.te.ʁjœʁ/", es: "anterior, hacia delante", ex: "La plaie est sur la face antérieure de la jambe." },
        { en: "postérieur", ipa: "/pɔs.te.ʁjœʁ/", es: "posterior, hacia atrás", ex: "Il y a une douleur à la face postérieure du genou." },
        { en: "latéral", ipa: "/la.te.ʁal/", es: "lateral (contrario: médial)", ex: "Il a mal sur le bord latéral du pied." },
        { en: "la fosse iliaque", ipa: "/la fɔs i.ljak/", es: "la fosa ilíaca (derecha o izquierda)", ex: "Il a une douleur de la fosse iliaque droite depuis hier." },
        { en: "l’épigastre", ipa: "/le.pi.ɡastʁ/", es: "el epigastrio (popular: le creux de l’estomac)", ex: "Avez-vous mal à l’épigastre, au creux de l’estomac ?" }
      ],
      phrases: [
        { en: "Montrez-moi avec un doigt où vous avez mal.", es: "Muéstreme con un dedo dónde le duele.", use: "Localizar el dolor con el paciente." },
        { en: "La douleur est à droite ou à gauche ?", es: "¿El dolor es a la derecha o a la izquierda?", use: "Pregunta de lateralidad." },
        { en: "Est-ce que ça vous fait mal des deux côtés ?", es: "¿Le duele de los dos lados?", use: "Preguntar por bilateralidad." },
        { en: "Le ventre est douloureux en bas à droite.", es: "El abdomen duele abajo a la derecha.", use: "Describir un hallazgo en la exploración." },
        { en: "Levez le bras gauche, puis le bras droit.", es: "Levante el brazo izquierdo y luego el derecho.", use: "Exploración neurológica." },
        { en: "La faiblesse touche les deux côtés, elle est bilatérale.", es: "La debilidad afecta a ambos lados, es bilateral.", use: "Describir un déficit." },
        { en: "Regardez en haut, puis en bas.", es: "Mire hacia arriba y luego hacia abajo.", use: "Exploración ocular." }
      ],
      text: {
        type: "dialogue",
        title: "Où avez-vous mal ?",
        context: "Exploración abdominal de una paciente con dolor en el vientre.",
        lines: [
          { who: "Médecin", en: "Pouvez-vous me montrer où vous avez mal ?" },
          { who: "Patiente", en: "Ici, en bas, à droite." },
          { who: "Médecin", en: "Allongez-vous sur le dos, s’il vous plaît. Je vais appuyer doucement." },
          { who: "Patiente", en: "Aïe, oui, c’est surtout là." },
          { who: "Médecin", en: "Et à gauche, est-ce que ça fait mal aussi ?" },
          { who: "Patiente", en: "Non, pas du côté gauche." },
          { who: "Médecin", en: "Et en haut du ventre, près de l’estomac ?" },
          { who: "Patiente", en: "Un peu, mais moins." },
          { who: "Médecin", en: "La douleur est apparue d’abord au milieu, puis elle est descendue à droite ?" },
          { who: "Patiente", en: "Oui, exactement." },
          { who: "Médecin", en: "Vous n’avez pas mal au dos ?" },
          { who: "Patiente", en: "Non, rien dans le dos." },
          { who: "Médecin", en: "Il faut faire une prise de sang et une échographie." }
        ]
      },
      grammar: [
        "« À droite / à gauche » son adverbios (a la derecha / a la izquierda). Como adjetivos concuerdan: le bras droit, la jambe droite, le genou gauche, la main gauche, les deux bras.",
        "Lateralidad: unilatéral (un lado), bilatéral (dos lados), « des deux côtés ». Para comparar: « du même côté », « du côté opposé ».",
        "Términos anatómicos: antérieur / postérieur, supérieur / inférieur, proximal / distal, médial / latéral, superficiel / profond. Son adjetivos y concuerdan: la face antérieure, l’extrémité distale, les œdèmes bilatéraux.",
        "Preposiciones de lugar: au-dessus de (encima de), au-dessous de (debajo de), devant, derrière, à côté de, entre. El dolor se localiza con « à » + parte del cuerpo: « mal au genou gauche »."
      ],
      tip: "« Droit » es derecho pero también recto; la t final no suena (/dʁwa/). Y no confundas « à gauche » (la izquierda) con « gauche » como adjetivo de torpe: en consulta solo se usa para lateralidad.",
      exercises: [
        { type: "mc", q: "¿Cómo se dice « en ambos lados »?", options: ["des deux côtés", "d’un seul côté", "en haut", "à côté"], answer: 0, explain: "« Des deux côtés » = en ambos lados; equivale a bilatéral." },
        { type: "fill", q: "La douleur est en ___ à droite. (abajo)", answer: ["bas"], explain: "« En bas » = abajo; la s final no suena." },
        { type: "order", q: "Ordena la orden de exploración: levante el brazo izquierdo.", words: ["Levez", "le", "bras", "gauche"], answer: "Levez le bras gauche", explain: "Imperativo + artículo + sustantivo + adjetivo." },
        { type: "mc", q: "Concordancia correcta: « la jambe … »", options: ["droit", "droite", "droites", "droits"], answer: 1, explain: "« Jambe » es femenino singular: droite." },
        { type: "fill", q: "Les œdèmes touchent les deux jambes : ils sont ___ . (en ambos lados)", answer: ["bilatéraux"], explain: "Plural masculino de bilatéral: bilatéraux." },
        { type: "mc", q: "¿Qué significa « distal »?", options: ["Más lejos del centro del cuerpo", "Más cerca del centro del cuerpo", "Hacia delante", "Hacia la izquierda"], answer: 0, explain: "Distal se aleja del tronco; proximal se acerca." }
      ]
    },
    {
      id: "m2l4",
      title: "Pronunciación",
      minutes: 15,
      goal: "Al terminar podrás pronunciar las cuatro vocales nasales, la u, la r, y reconocer las letras finales mudas y la liaison en vocabulario clínico.",
      intro: "El francés escrito engaña: la mayoría de las letras finales no suenan y las vocales nasales no existen en español. Con pacientes, una mala pronunciación cambia el sentido (« dessus » es encima y « dessous » es debajo). El error típico es pronunciar la n de « poumon » o decir la u como « u » española.",
      vocab: [
        { en: "le poumon", ipa: "/lə pu.mɔ̃/", es: "el pulmón; nasal ɔ̃ (on), la n no suena", ex: "Respirez profondément : j’écoute vos poumons." },
        { en: "le sang", ipa: "/lə sɑ̃/", es: "la sangre; nasal ɑ̃ y g final muda", ex: "Nous allons faire une prise de sang." },
        { en: "le rein", ipa: "/lə ʁɛ̃/", es: "el riñón; nasal ɛ̃ (ein, in)", ex: "Vos reins fonctionnent bien." },
        { en: "à jeun", ipa: "/a ʒœ̃/", es: "en ayunas; nasal œ̃ (un)", ex: "Venez à jeun pour la prise de sang." },
        { en: "la tumeur", ipa: "/la ty.mœʁ/", es: "el tumor; u francesa /y/", ex: "La tumeur mesure deux centimètres." },
        { en: "la nuque", ipa: "/la nyk/", es: "la nuca; u francesa /y/", ex: "Avez-vous mal à la nuque ?" },
        { en: "le cœur", ipa: "/lə kœʁ/", es: "el corazón; r uvular y eu /œ/", ex: "Le cœur bat régulièrement." },
        { en: "respirer", ipa: "/ʁɛs.pi.ʁe/", es: "respirar; dos r uvulares", ex: "Respirez calmement par le nez." },
        { en: "le poids", ipa: "/lə pwa/", es: "el peso; ds finales mudas", ex: "Avez-vous perdu du poids ?" },
        { en: "la toux", ipa: "/la tu/", es: "la tos; x final muda", ex: "Vous avez une toux sèche ?" },
        { en: "vous avez", ipa: "/vu za.ve/", es: "usted tiene; liaison s → z", ex: "Vous avez des douleurs ?" },
        { en: "des examens", ipa: "/de zɛɡ.za.mɛ̃/", es: "exámenes; liaison s → z", ex: "Je vais prescrire des examens complémentaires." }
      ],
      phrases: [
        { en: "Respirez profondément, ne bougez pas.", es: "Respire profundamente, no se mueva.", use: "Durante la auscultación." },
        { en: "Venez à jeun demain matin.", es: "Venga en ayunas mañana por la mañana.", use: "Indicación antes de un análisis." },
        { en: "Vous avez des allergies ?", es: "¿Tiene alergias?", use: "Practicar la liaison « vous avez »." },
        { en: "Je vais vous prescrire des examens.", es: "Voy a prescribirle unos exámenes.", use: "Practicar « des examens »." },
        { en: "Avez-vous perdu du poids ?", es: "¿Ha perdido peso?", use: "Practicar « poids » y la u." },
        { en: "Toussez, s’il vous plaît.", es: "Tosa, por favor.", use: "Exploración torácica." },
        { en: "Ouvrez la bouche et dites « ah ».", es: "Abra la boca y diga « ah ».", use: "Exploración de la garganta." }
      ],
      text: {
        type: "reading",
        title: "Prononcer le français médical",
        context: "Texto de apoyo con las reglas básicas de pronunciación y ejemplos clínicos. Es material didáctico original, no una fuente médica.",
        paragraphs: [
          "En français, il y a quatre voyelles nasales : an/en /ɑ̃/ (sang, dent), on /ɔ̃/ (poumon, ponction), in/ain/ein /ɛ̃/ (rein, main) et un /œ̃/ (à jeun). On ne prononce pas le n. Attention : bénin /be.nɛ̃/ est nasal, mais bénigne /be.niɲ/ ne l’est pas.",
          "Le u français /y/ n’existe pas en espagnol. On place la langue pour dire « i », puis on arrondit les lèvres comme pour « ou ». Comparez : tumeur /ty.mœʁ/, nuque /nyk/, urine /y.ʁin/ et tout /tu/. La différence change le sens : au-dessus /o.də.sy/ veut dire en haut, au-dessous /o.də.su/ veut dire en bas.",
          "Le r français est prononcé au fond de la gorge /ʁ/ ; il n’est jamais roulé. Exemples : cœur, respirer, rein, rouge.",
          "À la fin d’un mot, la plupart des consonnes sont muettes : poids /pwa/, dos /do/, toux /tu/, sang /sɑ̃/, doigt /dwa/. Les lettres C, R, F et L se prononcent souvent : sac, cœur, chef, mal. Retenez CaReFuL.",
          "La liaison est une consonne muette qui se prononce devant une voyelle : vous avez /vu za.ve/, des examens /de zɛɡ.za.mɛ̃/, un an /œ̃ nɑ̃/. Le s et le x font /z/. Il n’y a pas de liaison après « et »."
        ]
      },
      grammar: [
        "Vocales nasales: an/en, on, in/ain/ein, un. La vocal se nasaliza y la n no suena: « poumon » no es « pu-món » con n. Si hay doble n o m (bénigne, une), la vocal deja de ser nasal.",
        "La u francesa /y/: lengua en posición de « i » y labios redondeados como en « ou ». Pares útiles: tu /ty/ - tout /tu/, au-dessus - au-dessous. La r es uvular /ʁ/, no vibrante.",
        "Consonantes finales mudas: poids, dos, toux, sang, doigt, ventre (la e final también es muda). Suenan con frecuencia c, r, f, l (CaReFuL): cœur, chef, mal. La e final no suena en « tête » ni en « bouche ».",
        "Liaison obligatoria entre determinante o pronombre y la palabra siguiente que empieza por vocal: les os /le zo/, vous avez /vu za.ve/, des examens, un an. S y x → /z/, d → /t/ (grand ami). Prohibida tras « et » y ante h aspirada."
      ],
      tip: "Una u mal dicha cambia palabras: « dessus » (encima) y « dessous » (debajo) se distinguen solo por la vocal. Practica en voz alta con pares mínimos y grábate hablando.",
      exercises: [
        { type: "mc", q: "¿Cuál de estas palabras contiene una vocal nasal?", options: ["sang", "tumeur", "nuque", "cœur"], answer: 0, explain: "« Sang » = /sɑ̃/; las otras tienen vocales orales." },
        { type: "mc", q: "¿Cómo se pronuncia « poids »?", options: ["/pwads/", "/pwa/", "/pɔid/", "/pwaz/"], answer: 1, explain: "La d y la s finales son mudas: /pwa/." },
        { type: "fill", q: "En la liaison de « vous avez » la s suena como la letra ___ . (una letra)", answer: ["z"], explain: "Liaison: s → /z/, vous avez /vu za.ve/." },
        { type: "mc", q: "¿Qué palabra suena /o.də.sy/ y significa « encima »?", options: ["au-dessous", "au-dessus", "au-delà", "au-dedans"], answer: 1, explain: "« Au-dessus » lleva la u francesa /y/; « au-dessous » lleva /u/." },
        { type: "order", q: "Ordena la indicación de ayuno.", words: ["Venez", "à", "jeun", "demain", "matin"], answer: "Venez à jeun demain matin", explain: "« À jeun » = en ayunas." },
        { type: "mc", q: "Según la regla CaReFuL, ¿qué consonante final suele pronunciarse?", options: ["s", "t", "r", "x"], answer: 2, explain: "La r final suena en « cœur »; s, t y x suelen ser mudas." }
      ]
    }
  ]
});
