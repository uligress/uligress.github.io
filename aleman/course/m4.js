(window.COURSE = window.COURSE || []).push({
  id: "m4", n: 4,
  title: "Anamnesis y consulta",
  en: "Anamnese",
  summary: "Conduces una historia clínica completa en alemán: motivo de consulta, antecedentes, exploración física con indicaciones amables y explicación de diagnóstico, consentimiento y malas noticias.",
  lessons: [
    {
      id: "m4l1",
      title: "Motivo de consulta y padecimiento actual",
      minutes: 15,
      goal: "Al terminar podrás abrir la consulta, preguntar por el inicio y el curso de los síntomas y caracterizar un dolor con un esquema ordenado.",
      intro: "La «aktuelle Anamnese» es el equivalente al padecimiento actual: se pregunta cuándo empezó, cómo es, cuánto dura y qué lo mejora o empeora. En alemán se usa «Beschwerden» (molestias) más que «Symptome», y el dolor se describe con adjetivos como «stechend» o «dumpf». Error típico: traducir «¿Desde cuándo?» como «Von wann?»; lo correcto es «Seit wann?».",
      vocab: [
        { en: "die Beschwerden", ipa: "/bəˈʃveːɐ̯dn̩/", es: "molestias, síntomas (siempre en plural); «Was für Beschwerden haben Sie?»", ex: "Seit wann haben Sie diese Beschwerden?" },
        { en: "der Beginn", ipa: "/bəˈɡɪn/", es: "inicio; plötzlich = de golpe, schleichend = poco a poco", ex: "Der Beginn war plötzlich, mitten in der Nacht." },
        { en: "der Verlauf", ipa: "/fɛɐ̯ˈlaʊf/", es: "curso, evolución; besser, schlimmer, gleichbleibend = mejor, peor, igual", ex: "Wie war der Verlauf seit gestern: besser oder schlimmer?" },
        { en: "stechend", ipa: "/ˈʃtɛçn̩t/", es: "punzante o como pinchazo", ex: "Der Schmerz ist stechend und wird beim Atmen schlimmer." },
        { en: "brennend", ipa: "/ˈbʁɛnənt/", es: "ardiente, quemante", ex: "Ich habe ein brennendes Gefühl hinter dem Brustbein." },
        { en: "drückend", ipa: "/ˈdʁʏkn̩t/", es: "opresivo, como presión", ex: "Es ist ein drückender Schmerz, wie ein Gürtel um die Brust." },
        { en: "dumpf", ipa: "/dʊmpf/", es: "sordo, mal localizado", ex: "Der Schmerz im Bauch ist eher dumpf und dauerhaft." },
        { en: "kolikartig", ipa: "/ˈkoːlɪkˌʔaʁtɪç/", es: "cólico, en oleadas", ex: "Die Schmerzen sind kolikartig und kommen alle paar Minuten." },
        { en: "die Ausstrahlung", ipa: "/ˈaʊ̯sˌʃtʁaːlʊŋ/", es: "irradiación; el verbo es ausstrahlen", ex: "Gibt es eine Ausstrahlung in den Rücken oder in den Arm?" },
        { en: "die Schmerzstärke", ipa: "/ˈʃmɛʁtsˌʃtɛʁkə/", es: "intensidad del dolor; escala numérica: «Skala von null bis zehn»", ex: "Wie ist die Schmerzstärke auf einer Skala von null bis zehn?" },
        { en: "der Auslöser", ipa: "/ˈaʊ̯sˌløːzɐ/", es: "desencadenante; verbo auslösen", ex: "Gibt es einen Auslöser, zum Beispiel Bewegung oder Essen?" },
        { en: "die Begleitsymptome", ipa: "/bəˈɡlaɪ̯tzʏmpˌtoːmə/", es: "síntomas acompañantes (plural); ejemplos: Fieber, Übelkeit, Schwitzen", ex: "Haben Sie Begleitsymptome wie Fieber oder Übelkeit?" }
      ],
      phrases: [
        { en: "Was führt Sie zu uns?", es: "¿Qué lo trae por aquí?", use: "Abrir la consulta y pedir el motivo de consulta." },
        { en: "Seit wann haben Sie die Beschwerden?", es: "¿Desde cuándo tiene las molestias?", use: "Duración del cuadro." },
        { en: "Ist der Schmerz plötzlich oder langsam aufgetreten?", es: "¿El dolor apareció de golpe o poco a poco?", use: "Inicio, para diferenciar causas agudas de subagudas." },
        { en: "Wo genau tut es weh? Zeigen Sie es mir bitte mit einem Finger.", es: "¿Dónde le duele exactamente? Muéstremelo con un dedo.", use: "Localización precisa." },
        { en: "Wie würden Sie den Schmerz beschreiben: stechend, brennend, drückend oder dumpf?", es: "¿Cómo describiría el dolor: punzante, ardiente, opresivo o sordo?", use: "Calidad del dolor." },
        { en: "Wie stark ist der Schmerz auf einer Skala von null bis zehn?", es: "¿Qué tan fuerte es el dolor en una escala del cero al diez?", use: "Intensidad." },
        { en: "Was macht den Schmerz besser, und was macht ihn schlimmer?", es: "¿Qué mejora el dolor y qué lo empeora?", use: "Factores que alivian o agravan." }
      ],
      text: {
        type: "dialogue",
        title: "Kopfschmerzen seit gestern",
        context: "Una mujer de 28 años consulta por cefalea intensa; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Guten Tag, Frau Neumann. Was führt Sie zu mir?" },
          { who: "Patientin", en: "Ich habe seit gestern starke Kopfschmerzen." },
          { who: "Ärztin", en: "Wie hat es angefangen: plötzlich oder langsam?" },
          { who: "Patientin", en: "Langsam. Erst war es nur ein leichter Druck, dann wurde es immer schlimmer." },
          { who: "Ärztin", en: "Wo genau tut es weh?" },
          { who: "Patientin", en: "Auf der linken Seite, hinter dem Auge." },
          { who: "Ärztin", en: "Wie fühlt sich der Schmerz an?" },
          { who: "Patientin", en: "Pochend und pulsierend, nicht stechend." },
          { who: "Ärztin", en: "Wie stark ist er auf einer Skala von null bis zehn?" },
          { who: "Patientin", en: "Ungefähr eine Acht. Heute Morgen musste ich mich übergeben, und Licht stört mich sehr." },
          { who: "Ärztin", en: "Hatten Sie schon einmal ähnliche Kopfschmerzen?" },
          { who: "Patientin", en: "Ja, ungefähr einmal im Monat, aber nie so stark." },
          { who: "Ärztin", en: "Was hilft, und was macht es schlimmer?" },
          { who: "Patientin", en: "Im dunklen Zimmer wird es etwas besser. Bewegung macht es schlimmer." },
          { who: "Ärztin", en: "Hatten Sie Fieber, einen steifen Nacken oder Sehstörungen?" },
          { who: "Patientin", en: "Nein, nichts davon." }
        ]
      },
      grammar: [
        "Duración: «seit» + dativo con presente: «Seit gestern habe ich Kopfschmerzen», «Seit drei Tagen habe ich Fieber». No se usa pretérito perfecto para algo que sigue.",
        "Dolor: «Es tut weh» / «Ich habe Schmerzen» / «Mein Kopf tut weh». Pregunta: «Wo tut es weh?».",
        "Los adjetivos de calidad concuerdan: «ein stechender Schmerz», «ein dumpfes Gefühl», «brennende Schmerzen»; tras «sein» no llevan terminación: «Der Schmerz ist stechend».",
        "En el relato del paciente se alternan Perfekt («Ich habe mich übergeben») y Präteritum de verbos comunes («Es war», «Ich hatte», «Es wurde schlimmer»)."
      ],
      tip: "Esquema para recordar el dolor: Lokalisation, Beginn, Qualität, Stärke, Ausstrahlung, Verlauf, Auslöser, Begleitsymptome. Si lo recitas siempre en este orden, tus preguntas suenan ordenadas y no te quedas sin palabras.",
      exercises: [
        { type: "mc", q: "¿Cómo se pregunta «¿Desde cuándo tiene las molestias?»", options: ["Seit wann haben Sie die Beschwerden?", "Von wann haben Sie die Beschwerden?", "Ab wann haben Sie die Beschwerden?", "Wann seit haben Sie die Beschwerden?"], answer: 0, explain: "Para algo que dura hasta ahora se usa «seit wann» con presente." },
        { type: "mc", q: "Un dolor «dumpf» es…", options: ["sordo, mal localizado", "punzante", "ardiente", "en cólico"], answer: 0, explain: "«Dumpf» es sordo; «stechend» es punzante y «kolikartig» es de cólico." },
        { type: "fill", q: "___ gestern habe ich Kopfschmerzen. (desde)", answer: ["seit"], explain: "«Seit gestern» marca el inicio de una situación que continúa." },
        { type: "order", q: "Ordena la oración", words: ["Wie", "stark", "ist", "der", "Schmerz"], answer: "Wie stark ist der Schmerz", explain: "Pregunta con «wie» al inicio, después el verbo y por último el sujeto." },
        { type: "mc", q: "¿Qué significa «Begleitsymptome»?", options: ["Síntomas acompañantes", "Efectos secundarios", "Antecedentes", "Desencadenantes"], answer: 0, explain: "«Begleitsymptome» son los síntomas que acompañan al principal, como fiebre o náusea." },
        { type: "fill", q: "Wo genau ___ es weh? (duele)", answer: ["tut"], explain: "Se dice «Es tut weh»; la pregunta es «Wo tut es weh?»." }
      ]
    },
    {
      id: "m4l2",
      title: "Antecedentes",
      minutes: 15,
      goal: "Al terminar podrás recoger antecedentes personales, medicación, alergias, historia familiar y social, y preguntar por la anamnesis vegetativa.",
      intro: "En Alemania la historia se divide en bloques fijos: Vorerkrankungen, Medikamente, Allergien, Familienanamnese, Sozialanamnese y vegetative Anamnese. Memoriza el orden y cada pregunta clave. Error típico: preguntar «Haben Sie Medikamente?» en lugar de «Nehmen Sie Medikamente ein?», porque lo que interesa es qué toma, no si los posee.",
      vocab: [
        { en: "die Vorerkrankungen", ipa: "/ˈfoːɐ̯ʔɛɐ̯ˌkʁaŋkʊŋən/", es: "enfermedades previas (plural); también «Grunderkrankungen» para las crónicas", ex: "Welche Vorerkrankungen sind bei Ihnen bekannt?" },
        { en: "die Operation", ipa: "/opəʁaˈtsi̯oːn/", es: "cirugía; en el habla común «die OP»; «Wurden Sie schon einmal operiert?»", ex: "Vor zehn Jahren hatte ich eine Operation am Knie." },
        { en: "die Dauermedikation", ipa: "/ˈdaʊɐmedikaˌtsi̯oːn/", es: "medicación crónica o permanente", ex: "Ihre Dauermedikation besteht aus Ramipril und Metformin." },
        { en: "die Allergie", ipa: "/alɛʁˈɡiː/", es: "alergia; «gegen etwas allergisch sein» = ser alérgico a algo", ex: "Ich habe eine Allergie gegen Penicillin." },
        { en: "die Unverträglichkeit", ipa: "/ˈʊnfɛɐ̯ˌtʁɛːklɪçkaɪt/", es: "intolerancia (sin mecanismo alérgico); «Ich vertrage … nicht»", ex: "Ich vertrage Ibuprofen nicht, davon bekomme ich Magenschmerzen." },
        { en: "die Familienanamnese", ipa: "/faˈmiːli̯ənʔanamˌneːzə/", es: "antecedentes heredofamiliares", ex: "In der Familienanamnese gibt es Herzinfarkte beim Vater." },
        { en: "die Sozialanamnese", ipa: "/zoˈtsi̯aːlʔanamˌneːzə/", es: "historia social: profesión, convivencia, vivienda; a menudo incluye tabaco y alcohol", ex: "Zur Sozialanamnese gehören Beruf, Wohnsituation und Familienstand." },
        { en: "die vegetative Anamnese", ipa: "/vegetaˈtiːvə anamˈneːzə/", es: "revisión por sistemas básica: apetito, peso, sueño, evacuaciones, fiebre, sudoración nocturna", ex: "Die vegetative Anamnese ist unauffällig." },
        { en: "der Nachtschweiß", ipa: "/ˈnaxtˌʃvaɪs/", es: "sudoración nocturna; síntoma B con fiebre y pérdida de peso", ex: "Haben Sie nachts so starken Schweiß, dass Sie das Bett wechseln müssen?" },
        { en: "der Gewichtsverlust", ipa: "/ɡəˈvɪçtsfɛɐ̯ˌlʊst/", es: "pérdida de peso; «ungewollter Gewichtsverlust» = no intencional", ex: "Ich habe ungewollt fünf Kilo in drei Monaten abgenommen." },
        { en: "die Packungsjahre", ipa: "/ˈpakʊŋsˌjaːʁə/", es: "paquetes-año (plural): cajetillas al día por años de fumar", ex: "Bei einer Schachtel pro Tag über dreißig Jahre sind das dreißig Packungsjahre." },
        { en: "der Blutverdünner", ipa: "/ˈbluːtfɛɐ̯ˌdʏnɐ/", es: "anticoagulante o antiagregante en lenguaje común; técnico: das Antikoagulans", ex: "Nehmen Sie Blutverdünner, zum Beispiel Marcumar oder Apixaban?" }
      ],
      phrases: [
        { en: "Haben Sie Vorerkrankungen oder chronische Erkrankungen?", es: "¿Tiene enfermedades previas o crónicas?", use: "Inicio del bloque de antecedentes." },
        { en: "Nehmen Sie regelmäßig Medikamente ein, auch pflanzliche oder rezeptfreie?", es: "¿Toma medicamentos con regularidad, incluso herbales o sin receta?", use: "Medicación, incluyendo automedicación." },
        { en: "Wurden Sie schon einmal operiert?", es: "¿Lo han operado alguna vez?", use: "Antecedentes quirúrgicos." },
        { en: "Sind Sie gegen Medikamente oder andere Stoffe allergisch?", es: "¿Es alérgico a medicamentos u otras sustancias?", use: "Alergias; si dice sí, pregunta qué reacción tuvo." },
        { en: "Gibt es in Ihrer Familie Herzinfarkt, Schlaganfall, Diabetes oder Krebs?", es: "¿Hay en su familia infarto, ictus, diabetes o cáncer?", use: "Historia familiar." },
        { en: "Rauchen Sie, und wie viel Alkohol trinken Sie pro Woche?", es: "¿Fuma y cuánto alcohol toma a la semana?", use: "Hábitos y sustancias." },
        { en: "Wie sind Ihr Appetit, Ihr Schlaf und Ihr Stuhlgang?", es: "¿Cómo están su apetito, su sueño y sus evacuaciones?", use: "Anamnesis vegetativa." }
      ],
      text: {
        type: "dialogue",
        title: "Die Krankengeschichte aufnehmen",
        context: "Primera consulta de un hombre de 58 años con un médico de familia; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Herr Fischer, ich stelle Ihnen jetzt ein paar Fragen zu Ihrer Krankengeschichte. Haben Sie Vorerkrankungen?" },
          { who: "Patient", en: "Ich habe Bluthochdruck und seit fünf Jahren Diabetes." },
          { who: "Ärztin", en: "Nehmen Sie dagegen regelmäßig Medikamente ein?" },
          { who: "Patient", en: "Ja, Ramipril fünf Milligramm morgens und Metformin zweimal täglich." },
          { who: "Ärztin", en: "Wurden Sie schon einmal operiert?" },
          { who: "Patient", en: "Vor zehn Jahren hat man mir den Blinddarm entfernt. Sonst nichts." },
          { who: "Ärztin", en: "Sind Sie gegen etwas allergisch, zum Beispiel gegen Medikamente?" },
          { who: "Patient", en: "Ja, gegen Penicillin. Damals bekam ich einen Ausschlag." },
          { who: "Ärztin", en: "Gibt es in Ihrer Familie Herzinfarkte, Schlaganfälle oder Krebs?" },
          { who: "Patient", en: "Mein Vater ist mit 55 an einem Herzinfarkt gestorben. Meine Mutter hat auch Diabetes." },
          { who: "Ärztin", en: "Das tut mir leid. Rauchen Sie, und trinken Sie Alkohol?" },
          { who: "Patient", en: "Ich rauche seit dreißig Jahren etwa eine Schachtel am Tag. Alkohol nur am Wochenende, ein bis zwei Bier." },
          { who: "Ärztin", en: "Was machen Sie beruflich, und mit wem wohnen Sie?" },
          { who: "Patient", en: "Ich bin Busfahrer und wohne mit meiner Frau zusammen." },
          { who: "Ärztin", en: "Zum Schluss: Wie sind Appetit, Schlaf und Stuhlgang? Haben Sie Nachtschweiß oder Gewichtsverlust bemerkt?" },
          { who: "Patient", en: "Der Appetit ist gut, aber ich habe ohne Diät fünf Kilo abgenommen." }
        ]
      },
      grammar: [
        "Pasiva en pretérito para antecedentes: «Wurden Sie operiert?» (¿lo operaron?), «Mir wurde der Blinddarm entfernt». Es la forma estándar en la anamnesis.",
        "«allergisch gegen» + acusativo: «gegen Penicillin allergisch», «gegen Nüsse allergisch». «Unverträglich» se dice con «vertragen»: «Ich vertrage Milch nicht».",
        "Verbos separables frecuentes: «einnehmen» (Nehmen Sie … ein?), «abnehmen» (Ich habe abgenommen), «aufnehmen».",
        "Paquetes-año: cajetillas al día multiplicadas por los años; un paquete al día por treinta años son treinta Packungsjahre."
      ],
      tip: "Pregunta siempre por «rezeptfreie Medikamente» y «Nahrungsergänzungsmittel»: los pacientes alemanes toman ibuprofeno, aspirina, hierba de San Juan y otros sin pensar que cuentan como medicamentos. Y confirma el nombre de las alergias y qué reacción tuvieron.",
      exercises: [
        { type: "mc", q: "¿Cómo se pregunta por cirugías previas?", options: ["Wurden Sie schon einmal operiert?", "Haben Sie Operation?", "Sind Sie operiert werden?", "Operieren Sie schon einmal?"], answer: 0, explain: "Se usa la pasiva en pretérito: «Wurden Sie operiert?»." },
        { type: "mc", q: "¿Qué incluye normalmente la «Sozialanamnese»?", options: ["Profesión, convivencia, vivienda y a menudo tabaco y alcohol", "Solo las enfermedades de los padres", "Solo las alergias", "Los resultados de laboratorio"], answer: 0, explain: "La historia social recoge el contexto de vida del paciente." },
        { type: "fill", q: "Sind Sie gegen Penicillin ___? (alérgico)", answer: ["allergisch"], explain: "Se dice «gegen etwas allergisch sein»." },
        { type: "order", q: "Ordena la oración", words: ["Nehmen", "Sie", "regelmäßig", "Medikamente", "ein"], answer: "Nehmen Sie regelmäßig Medikamente ein", explain: "«einnehmen» es separable: el prefijo «ein» va al final." },
        { type: "mc", q: "«Nachtschweiß» significa…", options: ["Sudoración nocturna", "Pesadillas", "Insomnio", "Fiebre alta"], answer: 0, explain: "«Nachtschweiß» es sudoración nocturna, un dato importante junto a fiebre y pérdida de peso." },
        { type: "fill", q: "Wurden Sie schon einmal ___? (operado)", answer: ["operiert"], explain: "Participio de «operieren» en pasiva: «operiert werden»." }
      ]
    },
    {
      id: "m4l3",
      title: "Exploración física: indicaciones amables",
      minutes: 15,
      goal: "Al terminar podrás dar las indicaciones habituales durante la exploración con el imperativo de «Sie» y avisar antes de tocar al paciente.",
      intro: "Durante la exploración casi todo se dice con el imperativo formal: el infinitivo seguido de «Sie», por ejemplo «Atmen Sie bitte tief ein». La dificultad está en los verbos separables, donde el prefijo va al final. Con «bitte» y una breve explicación, el tono se vuelve amable. Error típico: poner «Sie» en el lugar equivocado («Sie atmen tief ein» es una afirmación, no una orden).",
      vocab: [
        { en: "den Oberkörper frei machen", ipa: "/ˈoːbɐˌkœʁpɐ fʁaɪ ˈmaxn̩/", es: "descubrirse el torso, quitarse la camisa", ex: "Machen Sie bitte den Oberkörper frei." },
        { en: "sich hinlegen", ipa: "/zɪç ˈhɪnˌleːɡn̩/", es: "acostarse; «sich hinsetzen» = sentarse", ex: "Legen Sie sich bitte auf die Liege." },
        { en: "tief einatmen", ipa: "/tiːf ˈaɪnˌʔaːtmən/", es: "inspirar profundamente", ex: "Atmen Sie bitte tief ein." },
        { en: "ausatmen", ipa: "/ˈaʊsˌʔaːtmən/", es: "espirar", ex: "Und jetzt langsam ausatmen." },
        { en: "die Luft anhalten", ipa: "/diː lʊft ˈanˌhaltn̩/", es: "contener la respiración", ex: "Halten Sie bitte kurz die Luft an." },
        { en: "den Mund öffnen", ipa: "/deːn mʊnt ˈœfnən/", es: "abrir la boca", ex: "Öffnen Sie bitte weit den Mund und sagen Sie ›Aaa‹." },
        { en: "die Beine anwinkeln", ipa: "/diː ˈbaɪnə ˈanˌvɪŋkl̩n/", es: "flexionar las piernas", ex: "Winkeln Sie bitte die Beine an." },
        { en: "den Bauch entspannen", ipa: "/deːn baʊx ɛntˈʃpanən/", es: "relajar el abdomen", ex: "Entspannen Sie bitte den Bauch." },
        { en: "abhören", ipa: "/ˈapˌhøːʁən/", es: "auscultar", ex: "Ich höre jetzt Ihr Herz und Ihre Lunge ab." },
        { en: "abtasten", ipa: "/ˈapˌtastn̩/", es: "palpar", ex: "Ich taste jetzt vorsichtig Ihren Bauch ab." },
        { en: "die Zunge herausstrecken", ipa: "/diː ˈtsʊŋə hɛˈʁaʊsˌʃtʁɛkn̩/", es: "sacar la lengua", ex: "Strecken Sie bitte die Zunge heraus." },
        { en: "die Augen schließen", ipa: "/diː ˈaʊɡn̩ ˈʃliːsn̩/", es: "cerrar los ojos", ex: "Schließen Sie die Augen und berühren Sie mit dem Finger Ihre Nase." }
      ],
      phrases: [
        { en: "Machen Sie bitte den Oberkörper frei.", es: "Por favor, descúbrase el torso.", use: "Inicio de la exploración de tórax o abdomen." },
        { en: "Legen Sie sich bitte auf den Rücken.", es: "Por favor, acuéstese boca arriba.", use: "Exploración abdominal." },
        { en: "Atmen Sie bitte tief ein und aus.", es: "Por favor, inspire y espire profundamente.", use: "Auscultación pulmonar." },
        { en: "Halten Sie bitte kurz die Luft an.", es: "Por favor, contenga la respiración un momento.", use: "Auscultación cardiaca o antes de una radiografía." },
        { en: "Entspannen Sie bitte den Bauch und sagen Sie mir, wenn es wehtut.", es: "Relaje el abdomen y avíseme si le duele.", use: "Palpación abdominal." },
        { en: "Folgen Sie bitte mit den Augen meinem Finger.", es: "Siga mi dedo con los ojos, por favor.", use: "Exploración de pares craneales." },
        { en: "Sie können sich wieder anziehen.", es: "Ya puede vestirse.", use: "Al terminar la exploración." }
      ],
      text: {
        type: "dialogue",
        title: "Die körperliche Untersuchung",
        context: "Exploración de tórax, corazón y abdomen de un hombre de 45 años con tos y dolor abdominal leve; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Guten Tag, Herr Braun. Ich möchte Sie jetzt körperlich untersuchen. Machen Sie bitte den Oberkörper frei." },
          { who: "Patient", en: "Muss ich das Unterhemd auch ausziehen?" },
          { who: "Ärztin", en: "Ja, bitte. Setzen Sie sich auf die Liege. Ich höre zuerst die Lunge ab. Atmen Sie bitte tief durch den Mund ein und aus." },
          { who: "Patient", en: "So?" },
          { who: "Ärztin", en: "Genau, sehr gut. Und noch einmal. Jetzt sagen Sie bitte „Neunundneunzig“." },
          { who: "Patient", en: "Neunundneunzig." },
          { who: "Ärztin", en: "Danke. Jetzt höre ich das Herz ab. Atmen Sie ganz normal weiter." },
          { who: "Patient", en: "Ist alles in Ordnung?" },
          { who: "Ärztin", en: "Bis jetzt ja. Legen Sie sich jetzt bitte auf den Rücken und winkeln Sie die Beine an. Ich taste Ihren Bauch ab." },
          { who: "Patient", en: "Ist Ihr Stethoskop kalt?" },
          { who: "Ärztin", en: "Entschuldigung, meine Hände sind etwas kalt. Entspannen Sie bitte den Bauch. Sagen Sie mir, wenn es wehtut." },
          { who: "Patient", en: "Hier ein bisschen." },
          { who: "Ärztin", en: "Danke, das merke ich mir. Zum Schluss folgen Sie bitte mit den Augen meinem Finger." },
          { who: "Patient", en: "Ist das alles?" },
          { who: "Ärztin", en: "Ja, wir sind fertig. Sie können sich wieder anziehen." }
        ]
      },
      grammar: [
        "Imperativo formal: infinitivo + «Sie». «Atmen Sie ein», «Machen Sie den Oberkörper frei». «Bitte» va después de «Sie» o al inicio y suaviza.",
        "Verbos separables: el prefijo va al final. «Halten Sie die Luft an», «Winkeln Sie die Beine an», «Strecken Sie die Zunge heraus».",
        "Reflexivos: el pronombre «sich» queda después de «Sie»: «Legen Sie sich bitte hin», «Setzen Sie sich bitte», «Ziehen Sie sich bitte aus».",
        "Avisar antes de tocar: «Ich taste jetzt Ihren Bauch ab», «Das kann kurz unangenehm sein». Usa presente con «jetzt» o «gleich» para anunciar el siguiente paso."
      ],
      tip: "Anuncia siempre lo que vas a hacer antes de hacerlo y pregunta si le molesta: «Darf ich?». Con «bitte» y un tono tranquilo, el imperativo se oye amable y no autoritario. Evita la forma con «du».",
      exercises: [
        { type: "mc", q: "¿Cuál es la orden correcta para «Inspire profundo, por favor»?", options: ["Atmen Sie bitte tief ein.", "Sie atmen bitte tief ein.", "Einatmen Sie bitte tief.", "Atmen bitte Sie tief ein."], answer: 0, explain: "El imperativo formal es verbo + «Sie»; el prefijo separable «ein» va al final." },
        { type: "mc", q: "¿Qué significa «abhören»?", options: ["Auscultar", "Palpar", "Medir la presión", "Tomar el pulso"], answer: 0, explain: "«Abhören» es auscultar; «abtasten» es palpar." },
        { type: "fill", q: "Legen Sie ___ bitte hin. (pronombre reflexivo)", answer: ["sich"], explain: "«sich hinlegen» es reflexivo; con «Sie» el pronombre es «sich»." },
        { type: "fill", q: "Machen Sie bitte den Oberkörper ___. (descubierto)", answer: ["frei"], explain: "La expresión es «den Oberkörper frei machen»." },
        { type: "order", q: "Ordena la oración", words: ["Halten", "Sie", "bitte", "kurz", "die", "Luft", "an"], answer: "Halten Sie bitte kurz die Luft an", explain: "Verbo, «Sie», «bitte», adverbio, objeto y el prefijo «an» al final." },
        { type: "mc", q: "¿Cuándo se dice «Sie können sich wieder anziehen»?", options: ["Al terminar la exploración", "Al empezar", "Antes de la ecografía", "Al entregar la receta"], answer: 0, explain: "Es la frase de cierre para que el paciente se vista." }
      ]
    },
    {
      id: "m4l4",
      title: "Explicar diagnóstico, consentimiento y malas noticias",
      minutes: 15,
      goal: "Al terminar podrás explicar un diagnóstico con claridad, informar riesgos antes de un procedimiento y dar una mala noticia con empatía.",
      intro: "Explicar bien es tan importante como diagnosticar. En Alemania la «Aufklärung» debe ser oral, comprensible y a tiempo, y el paciente da su «Einwilligung» después de entender riesgos y alternativas. Para malas noticias se usa un lenguaje claro, sin tecnicismos, con pausas. Error típico: usar solo términos técnicos como «Karzinom»; di también «Krebs» y confirma que entendió.",
      vocab: [
        { en: "die Diagnose", ipa: "/diaˈɡnoːzə/", es: "diagnóstico; «Verdachtsdiagnose» = diagnóstico presuntivo", ex: "Die Diagnose ist ein Diabetes mellitus Typ 2." },
        { en: "der Befund", ipa: "/bəˈfʊnt/", es: "hallazgo o resultado (exploración, imagen, patología)", ex: "Der Befund der Gewebeprobe liegt jetzt vor." },
        { en: "der Verdacht", ipa: "/fɛɐ̯ˈdaxt/", es: "sospecha; «Verdacht auf» + acusativo", ex: "Wir haben den Verdacht auf eine Lungenentzündung." },
        { en: "die Behandlung", ipa: "/bəˈhandlʊŋ/", es: "tratamiento; «Therapie» es más técnico", ex: "Die Behandlung dauert etwa sechs Wochen." },
        { en: "der Eingriff", ipa: "/ˈaɪnˌɡʁɪf/", es: "procedimiento o intervención", ex: "Der Eingriff dauert ungefähr eine Stunde." },
        { en: "die Aufklärung", ipa: "/ˈaʊfˌklɛːʁʊŋ/", es: "explicación previa a un procedimiento, información al paciente; verbo aufklären", ex: "Vor der Operation führen wir ein Aufklärungsgespräch." },
        { en: "die Einwilligung", ipa: "/ˈaɪnˌvɪlɪɡʊŋ/", es: "consentimiento; se puede revocar en cualquier momento", ex: "Mit Ihrer Unterschrift geben Sie Ihre Einwilligung." },
        { en: "das Risiko", ipa: "/ˈʁiːziko/", es: "riesgo; plural die Risiken", ex: "Zu den Risiken gehören Blutungen und Infektionen." },
        { en: "die Nebenwirkung", ipa: "/ˈneːbn̩ˌvɪʁkʊŋ/", es: "efecto adverso o secundario", ex: "Häufige Nebenwirkungen sind Übelkeit und Durchfall." },
        { en: "die Alternative", ipa: "/altɐnaˈtiːvə/", es: "alternativa; incluye siempre «keine Behandlung»", ex: "Es gibt auch die Alternative, erst einmal abzuwarten." },
        { en: "bösartig", ipa: "/ˈbøːsˌʔaʁtɪç/", es: "maligno; contrario: gutartig = benigno", ex: "Die Gewebeprobe zeigt einen bösartigen Tumor." },
        { en: "die Bedenkzeit", ipa: "/bəˈdɛŋkˌtsaɪt/", es: "tiempo para pensarlo antes de decidir", ex: "Sie haben alle Zeit der Welt, das ist Ihre Bedenkzeit." }
      ],
      phrases: [
        { en: "Ich möchte Ihnen jetzt erklären, was wir gefunden haben.", es: "Ahora quiero explicarle lo que encontramos.", use: "Introducir los resultados." },
        { en: "Leider habe ich keine guten Nachrichten für Sie.", es: "Lamentablemente no tengo buenas noticias.", use: "Aviso previo antes de una mala noticia." },
        { en: "Möchten Sie, dass jemand aus Ihrer Familie dabei ist?", es: "¿Quiere que alguien de su familia esté presente?", use: "Antes de dar resultados difíciles." },
        { en: "Haben Sie bis hierher alles verstanden? Gibt es Fragen?", es: "¿Ha entendido todo hasta aquí? ¿Tiene preguntas?", use: "Comprobar la comprensión." },
        { en: "Der Eingriff hat folgende Risiken: Blutungen, Infektionen und Verletzungen von Nachbarorganen.", es: "El procedimiento tiene estos riesgos: sangrado, infecciones y lesión de órganos vecinos.", use: "Aufklärung antes de una cirugía." },
        { en: "Sie müssen sich nicht sofort entscheiden. Sie haben Bedenkzeit.", es: "No tiene que decidir ahora mismo. Tiene tiempo para pensarlo.", use: "Respetar la autonomía del paciente." },
        { en: "Es tut mir sehr leid. Wir lassen Sie damit nicht allein.", es: "Lo lamento mucho. No lo dejamos solo con esto.", use: "Apoyo tras una mala noticia." }
      ],
      text: {
        type: "dialogue",
        title: "Ein schwieriges Gespräch",
        context: "Se comunica a un hombre de 58 años el resultado de una biopsia de colon; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Herr Keller, schön, dass Sie gekommen sind. Möchten Sie, dass Ihre Frau dabei ist?" },
          { who: "Patient", en: "Nein, sie wartet draußen. Ich möchte es zuerst allein hören." },
          { who: "Ärztin", en: "Gut. Was wissen Sie bisher über die Untersuchung?" },
          { who: "Patient", en: "Bei der Darmspiegelung hat man etwas gefunden und eine Probe entnommen." },
          { who: "Ärztin", en: "Richtig. Leider habe ich keine guten Nachrichten. Die Gewebeprobe zeigt einen bösartigen Tumor im Dickdarm." },
          { who: "Patient", en: "Also Krebs?" },
          { who: "Ärztin", en: "Ja, es handelt sich um Darmkrebs. Es tut mir sehr leid." },
          { who: "Patient", en: "Und jetzt? Muss ich sterben?" },
          { who: "Ärztin", en: "Das ist eine verständliche Angst. Noch wissen wir nicht, wie weit sich der Tumor ausgebreitet hat. Dafür machen wir ein CT von Brust und Bauch." },
          { who: "Patient", en: "Und wenn er nicht gestreut hat?" },
          { who: "Ärztin", en: "Dann kann man ihn oft mit einer Operation entfernen, und die Aussichten sind dann deutlich besser." },
          { who: "Patient", en: "Ich muss das erst einmal verdauen." },
          { who: "Ärztin", en: "Natürlich. Sie müssen heute nichts entscheiden. Haben Sie bis hierher alles verstanden?" },
          { who: "Patient", en: "Ja, ich glaube schon." },
          { who: "Ärztin", en: "Ihr Fall wird im Tumorboard besprochen, und wir sehen uns nächste Woche wieder. Wir lassen Sie damit nicht allein." }
        ]
      },
      grammar: [
        "Suavizar con Konjunktiv II: «Ich würde Ihnen empfehlen …», «Könnten Sie bitte …?», «Das wäre die Alternative».",
        "«aufklären über» + acusativo: «Wir möchten Sie über die Risiken aufklären». Para pedir consentimiento: «Sind Sie damit einverstanden?».",
        "Pasiva para procedimientos: «Der Tumor wird entfernt», «Es wird eine Probe entnommen», «Sie werden operiert».",
        "Malas noticias, estructura SPIKES adaptada: preguntar qué sabe el paciente, avisar («Leider …»), decir la noticia en una frase corta, callar un momento, responder a emociones, proponer siguientes pasos."
      ],
      tip: "Tras la mala noticia calla unos segundos: el silencio también es comunicación. Y en Alemania el paciente puede revocar la «Einwilligung» en cualquier momento y debe recibir la «Aufklärung» a tiempo antes del procedimiento (§ 630e BGB, Patientenrechtegesetz).",
      exercises: [
        { type: "mc", q: "¿Cómo se anuncia con suavidad una mala noticia?", options: ["Leider habe ich keine guten Nachrichten für Sie.", "Sie haben Krebs.", "Das Ergebnis ist schlecht, Pech gehabt.", "Ich gebe Ihnen die Diagnose jetzt."], answer: 0, explain: "Un aviso previo («Leider …») prepara al paciente antes de decir la noticia." },
        { type: "mc", q: "¿Qué significa «Einwilligung»?", options: ["Consentimiento", "Alta médica", "Diagnóstico", "Seguro médico"], answer: 0, explain: "«Einwilligung» es el consentimiento informado que da el paciente." },
        { type: "fill", q: "Der Tumor ist ___. (maligno)", answer: ["bösartig"], explain: "«bösartig» es maligno; «gutartig» es benigno." },
        { type: "order", q: "Ordena la oración", words: ["Haben", "Sie", "bis", "hierher", "alles", "verstanden"], answer: "Haben Sie bis hierher alles verstanden", explain: "Pregunta de sí o no: verbo auxiliar primero, después sujeto y el resto, con el participio al final." },
        { type: "fill", q: "Wir möchten Sie über die Risiken ___. (informar, infinitivo)", answer: ["aufklären"], explain: "«aufklären über» + acusativo es informar sobre riesgos antes de un procedimiento." },
        { type: "mc", q: "«Sie haben Bedenkzeit» significa…", options: ["Tiene tiempo para pensarlo", "Debe decidir ahora", "Debe firmar hoy", "Ya no tiene opciones"], answer: 0, explain: "«Bedenkzeit» es el plazo para reflexionar antes de decidir." }
      ]
    }
  ]
});
