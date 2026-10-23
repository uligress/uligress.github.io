(window.COURSE = window.COURSE || []).push({
  id: "m2", n: 2,
  title: "Terminología médica",
  en: "Medizinische Fachsprache",
  summary: "Distingues el lenguaje técnico del coloquial según el interlocutor, entiendes las palabras compuestas del cuerpo, localizas síntomas y pronuncias bien los términos clínicos.",
  lessons: [
    {
      id: "m2l1",
      title: "Lenguaje técnico frente a coloquial",
      minutes: 15,
      goal: "Al terminar podrás elegir entre el término técnico y el coloquial según hables con un paciente o escribas un informe.",
      intro: "En Alemania cada diagnóstico tiene dos nombres: el término técnico de origen griego o latino (Hypertonie) y el coloquial (Bluthochdruck). Con el paciente se usa el coloquial; en la visita, el informe médico (Arztbrief) y con colegas, el técnico. El error típico es soltar el término técnico al paciente o, al revés, escribir «Herzinfarkt» donde el informe exige «Myokardinfarkt».",
      vocab: [
        { en: "die Hypertonie – der Bluthochdruck", ipa: "/hypɐtoˈniː/", es: "hipertensión; coloquial: «sangre alta presión»", ex: "Bei Ihnen besteht ein Bluthochdruck, im Arztbrief steht arterielle Hypertonie." },
        { en: "der Myokardinfarkt – der Herzinfarkt", ipa: "/myoˈkaʁtʔɪnfaʁkt/", es: "infarto agudo de miocardio; en conversación basta «Herzinfarkt»", ex: "Wir müssen einen Herzinfarkt ausschließen." },
        { en: "die Dyspnoe – die Atemnot", ipa: "/dysˈpnoːə/", es: "disnea; coloquial: falta de aire (también «Luftnot»)", ex: "Der Patient klagt über Atemnot." },
        { en: "die Nausea – die Übelkeit", ipa: "/ˈnaʊ̯zea/", es: "náusea", ex: "Haben Sie Übelkeit oder Erbrechen?" },
        { en: "die Diarrhö – der Durchfall", ipa: "/diaˈʁøː/", es: "diarrea", ex: "Seit zwei Tagen hat sie Durchfall." },
        { en: "die Obstipation – die Verstopfung", ipa: "/ɔpstipaˈtsi̯oːn/", es: "estreñimiento", ex: "Haben Sie Verstopfung?" },
        { en: "das Ödem – die Wassereinlagerung", ipa: "/øˈdeːm/", es: "edema; coloquial: retención de agua", ex: "Die Beine haben Wassereinlagerungen." },
        { en: "die Synkope – die Ohnmacht", ipa: "/zʏnˈkoːpə/", es: "síncope; coloquial: desmayo", ex: "Der Patient hatte eine Synkope, er ist ohnmächtig geworden." },
        { en: "der Apoplex – der Schlaganfall", ipa: "/ˈapoplɛks/", es: "ictus o accidente cerebrovascular", ex: "Bei Verdacht auf Schlaganfall rufen wir sofort das Stroke-Team." },
        { en: "die Appendizitis – die Blinddarmentzündung", ipa: "/apɛndiˈtsiːtɪs/", es: "apendicitis (coloquialmente «inflamación del ciego»; en realidad es el apéndice)", ex: "Die Blinddarmentzündung wird meist operiert." },
        { en: "die Dysurie – Schmerzen beim Wasserlassen", ipa: "/dyzuˈʁiː/", es: "disuria; coloquial: dolor al orinar", ex: "Haben Sie Schmerzen beim Wasserlassen?" },
        { en: "die Fraktur – der Knochenbruch", ipa: "/fʁakˈtuːɐ̯/", es: "fractura", ex: "Im Röntgenbild sieht man einen Knochenbruch." }
      ],
      phrases: [
        { en: "Sie haben Bluthochdruck.", es: "Usted tiene la presión alta.", use: "Explicación al paciente en lenguaje claro." },
        { en: "Im Arztbrief schreibe ich Myokardinfarkt, im Gespräch sagen wir Herzinfarkt.", es: "En el informe escribo infarto de miocardio, en la conversación decimos infarto.", use: "Para explicar tu elección de registro." },
        { en: "Das nennt man auf Fachsprache Hypertonie.", es: "Eso en lenguaje técnico se llama hipertensión.", use: "Para introducir el término técnico con calma." },
        { en: "Haben Sie das verstanden?", es: "¿Lo ha entendido?", use: "Para comprobar la comprensión del paciente." },
        { en: "Soll ich das noch einmal anders erklären?", es: "¿Se lo explico de otra forma?", use: "Cuando el paciente no entiende." },
        { en: "Der Patient klagt über Atemnot.", es: "El paciente se queja de falta de aire.", use: "Fórmula de presentación en visita o informe." },
        { en: "Es besteht der Verdacht auf einen Myokardinfarkt.", es: "Existe sospecha de infarto de miocardio.", use: "Frase técnica para el informe." }
      ],
      text: {
        type: "dialogue",
        title: "Fachsprache erklären",
        context: "Una médica explica a un paciente su diagnóstico y le aclara los términos técnicos.",
        lines: [
          { who: "Ärztin", en: "Herr Maier, Ihre Blutdruckwerte sind zu hoch. Wir nennen das arterielle Hypertonie." },
          { who: "Patient", en: "Bluthochdruck, meinen Sie?" },
          { who: "Ärztin", en: "Genau. Hypertonie ist der Fachbegriff für Bluthochdruck." },
          { who: "Patient", en: "Ist das gefährlich?" },
          { who: "Ärztin", en: "Auf Dauer ja. Es erhöht das Risiko für einen Herzinfarkt und einen Schlaganfall." },
          { who: "Patient", en: "Ein Herzinfarkt? Ich habe manchmal Druck auf der Brust." },
          { who: "Ärztin", en: "Dann machen wir heute ein EKG, um einen Myokardinfarkt auszuschließen." },
          { who: "Patient", en: "Myokard…? Was heißt das genau?" },
          { who: "Ärztin", en: "Myokard ist der Herzmuskel. Im Arztbrief schreibe ich Myokardinfarkt, im Gespräch sagen wir einfach Herzinfarkt." },
          { who: "Patient", en: "Ach so, das ist verständlich." },
          { who: "Ärztin", en: "Haben Sie noch Fragen?" },
          { who: "Patient", en: "Nein, danke. Jetzt habe ich es verstanden." }
        ]
      },
      grammar: [
        "Registro por interlocutor: con el paciente, lenguaje cotidiano (Bluthochdruck, Atemnot); con colegas y por escrito, término técnico (Hypertonie, Dyspnoe). Si uses el técnico con un paciente, explícalo enseguida.",
        "Los términos técnicos de raíz grecolatina se parecen al español (Hypertonie, Fraktur, Obstipation), pero cambian la pronunciación y llevan artículo: die Hypertonie, die Fraktur, das Ödem, der Apoplex.",
        "Muchas palabras coloquiales son compuestas y transparentes: Blut + Hoch + Druck, Schlag + Anfall, Durch + Fall; léelas de derecha a izquierda para entenderlas.",
        "«Herzinfarkt» y «Schlaganfall» son comunes también entre médicos; «Insult» y «Apoplex» son variantes técnicas del Schlaganfall."
      ],
      tip: "Truco para el paciente: nombra el término técnico solo una vez y vuelve al coloquial («Hypertonie, also Bluthochdruck»). Y comprueba con «Haben Sie das verstanden?».",
      exercises: [
        { type: "mc", q: "¿Qué dices a un paciente lego?", options: ["Sie haben eine arterielle Hypertonie Grad II.", "Sie haben Bluthochdruck.", "Sie haben eine Hypertensio arterialis.", "Sie haben ein hypertensives Syndrom."], answer: 1, explain: "Con el paciente se usa el lenguaje cotidiano; el término técnico se explica después." },
        { type: "mc", q: "¿Qué término escribirías en el Arztbrief?", options: ["Herzinfarkt", "Myokardinfarkt", "Herzattacke", "Brustschlag"], answer: 1, explain: "En el informe se prefiere el término técnico." },
        { type: "fill", q: "Der Patient hatte eine ___. (síncope, término técnico)", answer: ["synkope"], explain: "Synkope es el término técnico; el coloquial es Ohnmacht." },
        { type: "fill", q: "Umgangssprachlich sagt man für Synkope ___. (desmayo, un sustantivo)", answer: ["ohnmacht"], explain: "Die Ohnmacht es el desmayo en la conversación." },
        { type: "order", q: "Ordena la frase de la visita.", words: ["Der", "Patient", "klagt", "über", "Atemnot"], answer: "Der Patient klagt über Atemnot", explain: "«Klagen über» + acusativo: el paciente se queja de algo." },
        { type: "mc", q: "¿Cómo se dice en lenguaje coloquial «Dyspnoe»?", options: ["Durchfall", "Atemnot", "Übelkeit", "Ohnmacht"], answer: 1, explain: "Dyspnoe = falta de aire = Atemnot o Luftnot." }
      ]
    },
    {
      id: "m2l2",
      title: "Palabras compuestas y el cuerpo",
      minutes: 15,
      goal: "Al terminar podrás descomponer palabras compuestas del cuerpo y asignarles el artículo der, die o das según su último elemento.",
      intro: "El alemán forma palabras nuevas pegando sustantivos: Bauch + Schmerzen = Bauchschmerzen. Para un hispanohablante parecen larguísimas, pero se entienden leyendo de derecha a izquierda. El artículo lo decide siempre el último elemento, y ese es el error típico: adivinar el género por la primera parte.",
      vocab: [
        { en: "die Bauchschmerzen (Pl.)", ipa: "/ˈbaʊ̯xˌʃmɛʁtsn̩/", es: "dolor abdominal (se usa casi siempre en plural)", ex: "Ich habe seit gestern starke Bauchschmerzen." },
        { en: "der Brustkorb", ipa: "/ˈbʁʊstkɔʁp/", es: "el tórax", ex: "Tut der Brustkorb beim Atmen weh?" },
        { en: "der Oberarm", ipa: "/ˈoːbɐˌʔaʁm/", es: "el brazo (parte superior)", ex: "Der Schmerz zieht in den Oberarm." },
        { en: "der Unterarm", ipa: "/ˈʊntɐˌʔaʁm/", es: "el antebrazo", ex: "Am Unterarm ist eine Wunde." },
        { en: "der Oberschenkel", ipa: "/ˈoːbɐˌʃɛŋkl̩/", es: "el muslo", ex: "Der Oberschenkel ist geschwollen." },
        { en: "der Unterschenkel", ipa: "/ˈʊntɐˌʃɛŋkl̩/", es: "la pierna (de rodilla a tobillo)", ex: "Am Unterschenkel hat er ein Ödem." },
        { en: "das Kniegelenk", ipa: "/ˈkniːɡəˌlɛŋk/", es: "la articulación de la rodilla", ex: "Das Kniegelenk ist rechts dick." },
        { en: "das Handgelenk", ipa: "/ˈhantɡəˌlɛŋk/", es: "la muñeca", ex: "Das Handgelenk tut nach dem Sturz weh." },
        { en: "die Halswirbelsäule", ipa: "/ˈhalsvɪʁbl̩ˌzɔʏ̯lə/", es: "la columna cervical", ex: "Wir machen ein CT der Halswirbelsäule." },
        { en: "die Kopfschmerzen (Pl.)", ipa: "/ˈkɔpfˌʃmɛʁtsn̩/", es: "dolor de cabeza", ex: "Haben Sie Kopfschmerzen?" },
        { en: "die Fußsohle", ipa: "/ˈfuːsˌzoːlə/", es: "la planta del pie", ex: "Die Fußsohle ist taub." },
        { en: "die Rückenschmerzen (Pl.)", ipa: "/ˈʁʏkn̩ˌʃmɛʁtsn̩/", es: "dolor de espalda", ex: "Seit Wochen hat sie Rückenschmerzen." }
      ],
      phrases: [
        { en: "Ich habe seit gestern starke Bauchschmerzen.", es: "Tengo desde ayer un dolor abdominal fuerte.", use: "Frase típica del paciente; la entenderás a menudo." },
        { en: "Mir tut der Kopf weh.", es: "Me duele la cabeza.", use: "Forma frecuente con dativo («mir»)." },
        { en: "Tut der Brustkorb beim Atmen weh?", es: "¿Le duele el tórax al respirar?", use: "Para dolor pleurítico o torácico." },
        { en: "Zeigen Sie mir bitte den Oberarm.", es: "Muéstreme el brazo, por favor.", use: "Para la exploración física." },
        { en: "Ist das Kniegelenk geschwollen?", es: "¿Está hinchada la rodilla?", use: "Pregunta de exploración o de anamnesis." },
        { en: "Haben Sie Rückenschmerzen oder Kopfschmerzen?", es: "¿Tiene dolor de espalda o de cabeza?", use: "Pregunta de elección con compuestos de uso común." },
        { en: "Ich untersuche jetzt Ihren Bauch.", es: "Ahora exploro su abdomen.", use: "Para anunciar cada paso de la exploración." }
      ],
      text: {
        type: "dialogue",
        title: "Körperliche Untersuchung",
        context: "Una médica explora a un paciente de la cabeza a los pies y pregunta por cada zona.",
        lines: [
          { who: "Ärztin", en: "Ich untersuche jetzt Ihren Körper von oben nach unten. Haben Sie Kopfschmerzen?" },
          { who: "Patient", en: "Nein, aber ich habe seit gestern Bauchschmerzen." },
          { who: "Ärztin", en: "Bitte atmen Sie tief ein. Tut der Brustkorb dabei weh?" },
          { who: "Patient", en: "Nein, der Brustkorb ist in Ordnung." },
          { who: "Ärztin", en: "Gut. Heben Sie bitte beide Arme. Tut der Oberarm weh?" },
          { who: "Patient", en: "Der Oberarm nicht, aber das rechte Handgelenk schmerzt ein bisschen." },
          { who: "Ärztin", en: "Seit wann? Haben Sie sich verletzt?" },
          { who: "Patient", en: "Ich bin vor drei Tagen gestürzt." },
          { who: "Ärztin", en: "Ich drücke jetzt auf den Bauch. Sagen Sie mir bitte, wenn es weh tut." },
          { who: "Patient", en: "Hier, im Oberbauch, tut es weh." },
          { who: "Ärztin", en: "Danke. Jetzt schaue ich noch den Oberschenkel und den Unterschenkel an." },
          { who: "Patient", en: "Das Kniegelenk ist auch etwas geschwollen." }
        ]
      },
      grammar: [
        "El último elemento decide el artículo y el plural: der Arm → der Oberarm; das Gelenk → das Kniegelenk; die Säule → die Halswirbelsäule; der Schmerz → der Bauchschmerz (casi siempre «die Bauchschmerzen»).",
        "Lee de derecha a izquierda: Hals + Wirbel + Säule = columna (Säule) de vértebras (Wirbel) del cuello (Hals). Cada parte es una palabra que ya conoces.",
        "A veces aparece un conector (Fugenelement): Hals-s-wirbelsäule, Rücken-schmerzen. No hay regla simple; se aprende con el uso. Ober- y Unter- indican arriba y abajo (Oberarm, Unterarm).",
        "Dolor: «Ich habe Bauchschmerzen» (tengo) o «Mir tut der Bauch weh» (me duele); en la segunda forma el paciente va en dativo («mir») y el sujeto es la parte del cuerpo."
      ],
      tip: "Falso amigo anatómico: der Bauch es el abdomen y der Magen es el estómago; decir «Magenschmerzen» para todo dolor abdominal confunde. Y die Brust puede ser pecho (tórax) o mama; para el tórax óseo usa der Brustkorb.",
      exercises: [
        { type: "mc", q: "¿Qué artículo lleva «Oberschenkel»?", options: ["der", "die", "das", "den"], answer: 0, explain: "Se rige por der Schenkel: der Oberschenkel." },
        { type: "mc", q: "¿Qué artículo lleva «Kniegelenk»?", options: ["der", "die", "das", "dem"], answer: 2, explain: "El último elemento es das Gelenk, por eso das Kniegelenk." },
        { type: "mc", q: "¿Qué artículo lleva «Halswirbelsäule»?", options: ["der", "die", "das", "den"], answer: 1, explain: "Termina en die Säule: die Halswirbelsäule." },
        { type: "fill", q: "Mir tut der Kopf ___. (duele)", answer: ["weh"], explain: "«Wehtun» expresa doler: «Mir tut der Kopf weh»." },
        { type: "fill", q: "Ober + Arm = ___ Oberarm (artículo)", answer: ["der"], explain: "Arm es masculino, por eso der Oberarm." },
        { type: "order", q: "Ordena la oración.", words: ["Ich", "habe", "seit", "gestern", "starke", "Bauchschmerzen"], answer: "Ich habe seit gestern starke Bauchschmerzen", explain: "Verbo en posición 2; «seit gestern» se coloca antes del complemento." }
      ]
    },
    {
      id: "m2l3",
      title: "Posición y localización",
      minutes: 15,
      goal: "Al terminar podrás localizar un síntoma con oben/unten, links/rechts, proximal/distal y preposiciones de lugar con el caso correcto.",
      intro: "Localizar un dolor o una lesión exige términos de posición y preposiciones. El alemán distingue dónde está algo (dativo) de adónde va (acusativo), y los adjetivos cambian de terminación. El error típico es decir «en el lado derecho» con la preposición equivocada o dejar el adjetivo sin terminación, como en «im rechte Oberbauch».",
      vocab: [
        { en: "oben", ipa: "/ˈoːbn̩/", es: "arriba", ex: "Der Schmerz ist oben im Bauch." },
        { en: "unten", ipa: "/ˈʊntn̩/", es: "abajo", ex: "Der Schmerz ist unten im Bauch." },
        { en: "links", ipa: "/lɪŋks/", es: "izquierda", ex: "Das Bein ist links geschwollen." },
        { en: "rechts", ipa: "/ʁɛçts/", es: "derecha", ex: "Rechts im Unterbauch tut es weh." },
        { en: "vorne", ipa: "/ˈfɔʁnə/", es: "adelante, en la parte anterior", ex: "Der Schmerz sitzt vorne am Schienbein." },
        { en: "hinten", ipa: "/ˈhɪntn̩/", es: "atrás, en la parte posterior", ex: "Der Schmerz sitzt hinten im Rücken." },
        { en: "proximal", ipa: "/pʁɔksiˈmaːl/", es: "proximal, hacia el tronco", ex: "Die Schwellung beginnt proximal." },
        { en: "distal", ipa: "/dɪsˈtaːl/", es: "distal, lejos del tronco", ex: "Distal der Fraktur ist der Puls nicht tastbar." },
        { en: "beidseitig", ipa: "/ˈbaɪ̯tˌzaɪ̯tɪç/", es: "bilateral, en ambos lados", ex: "Der Befund ist beidseitig." },
        { en: "einseitig", ipa: "/ˈaɪ̯nˌzaɪ̯tɪç/", es: "unilateral, de un solo lado", ex: "Die Schwellung ist nur einseitig." },
        { en: "ventral – dorsal", ipa: "/vɛnˈtʁaːl – dɔʁˈzaːl/", es: "ventral hacia el vientre – dorsal hacia la espalda", ex: "Die Wunde liegt dorsal am Oberschenkel." },
        { en: "die Mitte", ipa: "/ˈmɪtə/", es: "el centro, la línea media", ex: "Der Schmerz sitzt in der Mitte des Brustkorbs." }
      ],
      phrases: [
        { en: "Zeigen Sie mir bitte, wo es genau weh tut.", es: "Muéstreme, por favor, dónde exactamente le duele.", use: "Para que el paciente señale la zona." },
        { en: "Der Schmerz sitzt im rechten Unterbauch.", es: "El dolor está en el hipogastrio derecho (fosa ilíaca derecha).", use: "Para describir la localización." },
        { en: "Strahlt der Schmerz in den linken Arm aus?", es: "¿Se irradia el dolor al brazo izquierdo?", use: "Dolor torácico; observa el acusativo «in den»." },
        { en: "Sind beide Seiten betroffen?", es: "¿Están afectados ambos lados?", use: "Para distinguir un proceso unilateral de uno bilateral." },
        { en: "Auf welcher Seite haben Sie die Beschwerden?", es: "¿De qué lado tiene las molestias?", use: "Pregunta abierta de lateralidad." },
        { en: "Die Rötung beginnt proximal und breitet sich nach distal aus.", es: "El enrojecimiento empieza proximal y se extiende hacia distal.", use: "Tono técnico, para visitas e informes." },
        { en: "Ist das Ihre rechte oder meine rechte Seite?", es: "¿Es su lado derecho o el mío?", use: "Para evitar confusiones al señalar." }
      ],
      text: {
        type: "dialogue",
        title: "Wo genau tut es weh?",
        context: "Una médica pide a un paciente que ubique con precisión su dolor abdominal y otros síntomas.",
        lines: [
          { who: "Ärztin", en: "Zeigen Sie mir bitte, wo es genau weh tut." },
          { who: "Patient", en: "Hier, auf der rechten Seite, unter dem Rippenbogen." },
          { who: "Ärztin", en: "Also im rechten Oberbauch. Strahlt der Schmerz irgendwohin aus?" },
          { who: "Patient", en: "Ja, nach hinten, in den Rücken, zwischen die Schulterblätter." },
          { who: "Ärztin", en: "Und auf der linken Seite? Ist dort auch etwas?" },
          { who: "Patient", en: "Nein, nur rechts. Aber beide Knie sind seit einigen Tagen dick." },
          { who: "Ärztin", en: "Das ist also beidseitig. Sind auch beide Unterschenkel geschwollen?" },
          { who: "Patient", en: "Ja, besonders unten, über den Knöcheln." },
          { who: "Ärztin", en: "Ist die Schwellung vorne oder hinten stärker?" },
          { who: "Patient", en: "Vorne, am Schienbein." },
          { who: "Ärztin", en: "Gut. Ich drücke jetzt vorsichtig in der Mitte des Bauches. Sagen Sie mir, wenn es weh tut." },
          { who: "Patient", en: "Hier ist es in Ordnung. Nur rechts oben tut es weh." }
        ]
      },
      grammar: [
        "Preposiciones de lugar con dativo (¿dónde?) y acusativo (¿adónde?): an, auf, in, hinter, neben, über, unter, vor, zwischen. Contracciones frecuentes: im (in dem), am (an dem), vom, zum.",
        "Dónde: «im rechten Oberbauch», «am linken Knie», «hinter dem Brustbein», «auf der rechten Seite». Adónde: «in den linken Arm», «in den Rücken», «zwischen die Schulterblätter».",
        "Con artículo, el adjetivo en dativo termina en -en: im rechten Oberbauch, am linken Knie, auf der rechten Seite. En dativo plural el sustantivo añade -n: zwischen den Schulterblättern, über den Knöcheln.",
        "Términos técnicos de posición: proximal/distal, ventral/dorsal, medial/lateral, beidseitig; en lenguaje cotidiano: oben/unten, vorne/hinten, links/rechts. En informes: «rechts», «links», «beidseits»."
      ],
      tip: "Para evitar errores de lateralidad, confirma con el paciente («Ihre rechte Seite?») y usa la palabra completa en informes, nunca abreviaturas. Un hispanohablante suele omitir la terminación del adjetivo: practica «im rechten», «am linken».",
      exercises: [
        { type: "mc", q: "Completa: «Der Schmerz sitzt ___ rechten Unterbauch.»", options: ["im", "in den", "ins", "auf dem"], answer: 0, explain: "Responde a «¿dónde?», por tanto dativo: «im» (in dem) rechten Unterbauch." },
        { type: "mc", q: "Completa: «Der Schmerz strahlt ___ linken Arm aus.»", options: ["im", "in den", "in dem", "am"], answer: 1, explain: "Responde a «¿adónde?», por tanto acusativo: «in den linken Arm»." },
        { type: "mc", q: "¿Qué significa «proximal»?", options: ["Más cerca del tronco", "Más lejos del tronco", "Hacia la espalda", "Hacia el vientre"], answer: 0, explain: "Proximal es lo más cercano al tronco; lo contrario es distal." },
        { type: "fill", q: "Der Schmerz strahlt in den Rücken ___. (verbo separable, «irradia»)", answer: ["aus"], explain: "El prefijo separable «aus» va al final: «strahlt … aus»." },
        { type: "fill", q: "Beide Knie sind geschwollen: der Befund ist ___. (bilateral)", answer: ["beidseitig"], explain: "Beidseitig = en ambos lados." },
        { type: "order", q: "Ordena la oración.", words: ["Der", "Schmerz", "sitzt", "im", "rechten", "Unterbauch"], answer: "Der Schmerz sitzt im rechten Unterbauch", explain: "«Im rechten Unterbauch»: preposición con dativo y adjetivo terminado en -en." }
      ]
    },
    {
      id: "m2l4",
      title: "Pronunciación de los términos médicos",
      minutes: 15,
      goal: "Al terminar podrás pronunciar ü, ö, ä, ch, sch y r, y poner el acento en la sílaba correcta en términos clínicos.",
      intro: "El alemán se lee casi como se escribe, pero varios sonidos no existen en español y el acento de los términos médicos puede ser distinto al esperado. Pronunciar bien evita malentendidos con pacientes y colegas. Esta lección es un texto de reglas con ejemplos; léelo en voz alta y repite cada palabra.",
      vocab: [
        { en: "die Übelkeit", ipa: "/ˈyːbl̩ˌkaɪ̯t/", es: "la náusea; ü = i con labios redondeados", ex: "Haben Sie Übelkeit?" },
        { en: "der Schwindel", ipa: "/ˈʃvɪndl̩/", es: "el mareo; sch = [ʃ]", ex: "Ich habe Schwindel beim Aufstehen." },
        { en: "das Herz", ipa: "/hɛʁts/", es: "el corazón; z = [ts]", ex: "Das Herz schlägt regelmäßig." },
        { en: "die Brust", ipa: "/bʁʊst/", es: "el pecho; r gutural", ex: "Ich habe Schmerzen in der Brust." },
        { en: "der Husten", ipa: "/ˈhuːstn̩/", es: "la tos; u larga", ex: "Wie lange haben Sie schon Husten?" },
        { en: "die Niere", ipa: "/ˈniːʁə/", es: "el riñón; ie = i larga", ex: "Die Niere funktioniert gut." },
        { en: "der Rachen", ipa: "/ˈʁaxn̩/", es: "la faringe; ch = [x]", ex: "Der Rachen ist gerötet." },
        { en: "die Röntgenaufnahme", ipa: "/ˈʁœntɡənʔaʊ̯fˌnaːmə/", es: "la radiografía; ö = e con labios redondeados", ex: "Wir machen eine Röntgenaufnahme." },
        { en: "der Bänderriss", ipa: "/ˈbɛndɐˌʁɪs/", es: "el desgarro de ligamentos; ä = e abierta", ex: "Er hat einen Bänderriss im Knöchel." },
        { en: "die Chemotherapie", ipa: "/ˌçemoteʁaˈpiː/", es: "la quimioterapia; ch = [ç] y acento final", ex: "Die Chemotherapie beginnt nächste Woche." },
        { en: "die Diagnose", ipa: "/diaˈɡnoːzə/", es: "el diagnóstico; acento en la penúltima sílaba", ex: "Die Diagnose ist klar." },
        { en: "der Patient", ipa: "/paˈtsi̯ɛnt/", es: "el paciente; acento en -ent", ex: "Der Patient ist wach und orientiert." }
      ],
      phrases: [
        { en: "Sprechen Sie bitte langsamer.", es: "Hable más despacio, por favor.", use: "Cuando alguien habla muy rápido." },
        { en: "Können Sie das bitte wiederholen?", es: "¿Puede repetirlo, por favor?", use: "Si no entiendes una palabra." },
        { en: "Können Sie das bitte buchstabieren?", es: "¿Puede deletrearlo, por favor?", use: "Para nombres y términos nuevos." },
        { en: "Wie schreibt man das?", es: "¿Cómo se escribe eso?", use: "Para confirmar la ortografía." },
        { en: "Was bedeutet das?", es: "¿Qué significa eso?", use: "Para preguntar el sentido de una palabra." },
        { en: "Ich verstehe nicht ganz.", es: "No entiendo del todo.", use: "Forma cortés de decir que no entendiste." },
        { en: "Wie spricht man das aus?", es: "¿Cómo se pronuncia eso?", use: "Para aprender la pronunciación." }
      ],
      text: {
        type: "reading", listen: false,
        title: "Aussprache-Regeln für die Klinik",
        context: "Reglas básicas de pronunciación alemana con ejemplos clínicos, explicadas en español.",
        paragraphs: [
          "El alemán se lee casi como se escribe, pero cinco sonidos exigen práctica. Primero, ü y ö, que no existen en español. Para la ü (Übelkeit) di «i» con los labios redondeados, como si fueras a silbar; para la ö (Röntgen) di «e» con los labios redondeados. La ä suena como una e abierta (Bänderriss, Hämatom).",
          "Segundo, ch tiene dos sonidos. Después de a, o, u y au es un sonido profundo en la garganta, parecido a una j española fuerte: Bauch, noch, Buch, Rachen. Después de e, i, ä, ö, ü o consonante, y en -chen, es suave, como una s con la lengua alta: ich, Milch, Mädchen, Chemotherapie.",
          "Tercero, sch suena como «sh» (Schmerz, Schwindel), y st/sp al inicio de una palabra o raíz suenan [ʃt] y [ʃp]: Station, Spritze, Stuhl. Una s antes de vocal es sonora [z] (Sauerstoff), z es [ts] (Herz), v es [f] (Verband) y w es [v] (Wunde).",
          "Cuarto, la r no es vibrante: se produce en el fondo de la garganta (Brust, Rücken). Al final de palabra o antes de consonante se vuelve una a breve [ɐ]: Leber, Schwester, Arzt.",
          "Quinto, el acento. En palabras alemanas cae casi siempre en la primera sílaba (Schmerz, Husten, Klinik). En términos grecolatinos con -ie, -ion, -ent o -ose cae más adelante: Therapie, Operation, Patient, Diagnose."
        ]
      },
      grammar: [
        "ü, ö, ä: ü = [y] (labios de «u», lengua de «i»), ö = [ø/œ] (labios de «o», lengua de «e»), ä = [ɛ] (como la e de «perro»). Un cambio de vocal cambia el sentido: Mutter y Mütter, schon y schön.",
        "ch: [x] tras a, o, u, au (Bauch, Rachen); [ç] tras las demás vocales, consonantes y en -chen (ich, Milch, Mädchen). En «Chirurg» y «Chemie» se usa [ç] en el estándar; en el sur se oye [k].",
        "Vocal larga o corta: una vocal seguida de una sola consonante suele ser larga (Husten, Nase) y seguida de doble consonante, corta (Fieber, Brust). Al final de sílaba b, d, g se pronuncian [p, t, k]: Rad, Tag.",
        "Acento: primera sílaba en palabras nativas y en muchas otras (Schmerz, Husten, Klinik); en grecolatinos con -ie, -ion, -ent, -ment, -itis o -ose cae más adelante: Therapie, Operation, Patient, Medikament, Appendizitis, Diagnose."
      ],
      tip: "Practica las palabras difíciles con la forma del habla real: graba tus propias frases y compáralas con un hablante nativo. Si dudas, pide «Können Sie das bitte buchstabieren?»; los alemanes lo ven como profesional, no como debilidad.",
      exercises: [
        { type: "mc", q: "¿Qué palabra tiene el sonido [x] (como una j fuerte)?", options: ["Bauch", "ich", "Mädchen", "Chemie"], answer: 0, explain: "Después de a, o, u o au, ch suena [x]: Bauch." },
        { type: "mc", q: "¿Cuál es la pronunciación de «Spritze»?", options: ["[sprɪtse]", "[ʃpʁɪtsə]", "[espritse]", "[spritʃe]"], answer: 1, explain: "Al inicio de palabra sp suena [ʃp] y z suena [ts]: [ˈʃpʁɪtsə]." },
        { type: "mc", q: "¿Dónde va el acento en «Operation»?", options: ["Op-", "-pe-", "-ra-", "-tion"], answer: 3, explain: "Las palabras en -ion se acentúan en la sílaba final: Operation /opeʁaˈtsi̯oːn/." },
        { type: "fill", q: "Können Sie das bitte ___? (deletrear, infinitivo)", answer: ["buchstabieren"], explain: "Buchstabieren es deletrear; viene de Buchstabe (letra)." },
        { type: "fill", q: "Sprechen Sie bitte ___. (más despacio)", answer: ["langsamer"], explain: "Langsamer es el comparativo de langsam." },
        { type: "order", q: "Ordena la frase.", words: ["Können", "Sie", "das", "bitte", "wiederholen"], answer: "Können Sie das bitte wiederholen", explain: "Pregunta de sí o no: el verbo modal va primero y el infinitivo al final." }
      ]
    }
  ]
});
