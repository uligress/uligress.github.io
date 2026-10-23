(window.COURSE = window.COURSE || []).push({
  id: "m5", n: 5,
  title: "Comunicación en el hospital",
  en: "Klinikalltag",
  summary: "Aprendes a presentar pacientes en la Visite, hacer una entrega de guardia estructurada, leer y entender un Arztbrief y comunicarte con claridad en interconsultas y urgencias.",
  lessons: [
    {
      id: "m5l1",
      title: "Presentar a un paciente en la Visite",
      minutes: 15,
      goal: "Al terminar podrás presentar a un paciente al Oberarzt en 1–2 minutos con un orden claro.",
      intro: "En la Visite el Assistenzarzt presenta al paciente y el Oberarzt interrumpe con preguntas. El orden alemán es fijo: edad y motivo de ingreso, Vorerkrankungen, Befunde, Verdachtsdiagnose y Procedere. El error típico del hispanohablante es traducir literalmente (presentar = presentieren) y mezclar los tiempos verbales.",
      vocab: [
        { en: "die Visite", ipa: "/viˈziːtə/", es: "ronda médica, pase de visita", ex: "Die Visite beginnt um 8 Uhr auf Station 4." },
        { en: "der Assistenzarzt", ipa: "/aˈsɪstɛntsˌʔaʁtst/", es: "médico residente (f.: die Assistenzärztin)", ex: "Die Assistenzärztin stellt den neuen Patienten vor." },
        { en: "der Oberarzt", ipa: "/ˈoːbɐˌʔaʁtst/", es: "médico adscrito, jefe de sección (f.: die Oberärztin)", ex: "Der Oberarzt entscheidet über das weitere Vorgehen." },
        { en: "die Aufnahme", ipa: "/ˈaʊ̯fˌnaːmə/", es: "ingreso al hospital", ex: "Bei der Aufnahme war der Patient kreislaufstabil." },
        { en: "die Anamnese", ipa: "/anamˈneːzə/", es: "historia clínica, interrogatorio", ex: "Die Anamnese ergab keine bekannten Allergien." },
        { en: "die Vorerkrankung", ipa: "/ˈfoːɐ̯ʔɛɐ̯ˌkʁaŋkʊŋ/", es: "antecedente patológico, enfermedad previa", ex: "Welche Vorerkrankungen sind bekannt?" },
        { en: "die Verdachtsdiagnose", ipa: "/fɛɐ̯ˈdaxtsdiaɡˌnoːzə/", es: "diagnóstico presuntivo", ex: "Unsere Verdachtsdiagnose lautet Cholezystitis." },
        { en: "der Verlauf", ipa: "/fɛɐ̯ˈlaʊ̯f/", es: "evolución, curso clínico", ex: "Der Verlauf war bisher unkompliziert." },
        { en: "das Procedere", ipa: "/proˈtseːdərə/", es: "plan de acción, siguientes pasos", ex: "Als weiteres Procedere schlage ich eine Sonographie vor." },
        { en: "der Allgemeinzustand", ipa: "/ˈalɡəmaɪ̯nˌtsuːʃtant/", es: "estado general (abreviatura: AZ)", ex: "Der Allgemeinzustand ist reduziert." },
        { en: "kreislaufstabil", ipa: "/ˈkʁaɪ̯slaʊ̯fʃtaˌbiːl/", es: "hemodinámicamente estable", ex: "Der Patient ist kreislaufstabil und afebril." },
        { en: "beschwerdefrei", ipa: "/bəˈʃveːɐ̯dəˌfʁaɪ̯/", es: "asintomático, sin molestias", ex: "Seit gestern ist die Patientin beschwerdefrei." }
      ],
      phrases: [
        { en: "Ich stelle Ihnen Frau Wagner vor, eine 54-jährige Patientin.", es: "Le presento a la señora Wagner, una paciente de 54 años.", use: "Apertura estándar de la presentación ante el Oberarzt." },
        { en: "Sie wurde gestern mit Oberbauchschmerzen stationär aufgenommen.", es: "Ingresó ayer con dolor en epigastrio.", use: "Para el motivo de ingreso; se usa el Passiv en pasado." },
        { en: "An Vorerkrankungen sind ein Diabetes mellitus und eine arterielle Hypertonie bekannt.", es: "Como antecedentes se conocen una diabetes mellitus e hipertensión arterial.", use: "Para listar antecedentes en estilo formal." },
        { en: "Bei der Aufnahme war sie kreislaufstabil und afebril.", es: "Al ingreso estaba hemodinámicamente estable y afebril.", use: "Para describir el estado inicial, siempre en pasado." },
        { en: "Unsere Verdachtsdiagnose lautet akute Cholezystitis.", es: "Nuestra sospecha diagnóstica es colecistitis aguda.", use: "Antes de proponer el plan." },
        { en: "Der Verlauf ist bisher unauffällig.", es: "La evolución hasta ahora es sin particularidades.", use: "Para el resumen del curso en planta." },
        { en: "Als weiteres Procedere schlage ich eine Sonographie des Abdomens vor.", es: "Como siguiente paso propongo un ultrasonido abdominal.", use: "Para cerrar la presentación y dejar la decisión al Oberarzt." }
      ],
      text: {
        type: "dialogue",
        title: "Vorstellung auf der Visite",
        context: "Una Assistenzärztin presenta a un paciente con dolor torácico a su Oberarzt durante la ronda.",
        lines: [
          { who: "Assistenzärztin", en: "Guten Morgen, Herr Oberarzt. Ich stelle Ihnen Herrn Becker in Zimmer 12 vor." },
          { who: "Oberarzt", en: "Guten Morgen. Worum geht es?" },
          { who: "Assistenzärztin", en: "Herr Becker ist ein 68-jähriger Patient, der seit gestern Abend mit Brustschmerzen stationär aufgenommen ist." },
          { who: "Oberarzt", en: "Welche Vorerkrankungen hat er?" },
          { who: "Assistenzärztin", en: "Er hat einen arteriellen Hypertonus und einen Diabetes mellitus Typ 2 und raucht. Die Medikation umfasst Ramipril und Metformin." },
          { who: "Oberarzt", en: "Wie war er bei der Aufnahme?" },
          { who: "Assistenzärztin", en: "Er war schmerzfrei und kreislaufstabil, der Blutdruck lag bei 150/90, der Puls bei 82. Im EKG sahen wir keine ST-Hebungen." },
          { who: "Oberarzt", en: "Und das Troponin?" },
          { who: "Assistenzärztin", en: "Das erste hochsensitive Troponin war leicht erhöht und nach drei Stunden steigend. Unsere Verdachtsdiagnose ist ein NSTEMI." },
          { who: "Oberarzt", en: "Gut. Wie ist der Verlauf seit der Aufnahme?" },
          { who: "Assistenzärztin", en: "Er war über Nacht beschwerdefrei. Als Procedere planen wir heute eine Koronarangiographie, dazu ASS und Heparin." },
          { who: "Oberarzt", en: "Einverstanden. Bitte klären Sie den Patienten über den Eingriff auf." },
          { who: "Assistenzärztin", en: "Mache ich. Danach spreche ich mit der Familie." }
        ]
      },
      grammar: [
        "Orden de la presentación: edad y motivo de ingreso, Vorerkrankungen, Befunde, Verdachtsdiagnose, Procedere. Sigue siempre ese orden para que el Oberarzt no te interrumpa.",
        "La edad se dice como adjetivo: ein 68-jähriger Patient, eine 54-jährige Patientin (terminaciones -er y -e). No existe el verbo tener para la edad: Der Patient ist 68 Jahre alt.",
        "Tiempos: lo ocurrido (ingreso, hallazgos iniciales) va en pasado simple (war, hatte, wurde aufgenommen); lo actual y el plan, en presente (ist, planen).",
        "Con el Oberarzt se usa Sie y la forma Herr Oberarzt o Frau Oberärztin; entre colegas del mismo nivel se tutea."
      ],
      tip: "Falso amigo: presentar a un paciente es vorstellen, no präsentieren (que suena a una exposición con diapositivas). Y no digas der Patient hat 68 Jahre: se dice ist 68 Jahre alt.",
      exercises: [
        { type: "mc", q: "¿Cómo se abre correctamente la presentación de un paciente ante el Oberarzt?", options: ["Ich stelle Ihnen Herrn Becker vor.", "Ich präsentiere Ihnen Herrn Becker.", "Ich zeige Ihnen Herrn Becker.", "Ich mache Herrn Becker bekannt."], answer: 0, explain: "Vorstellen es el verbo estándar para presentar a un paciente; präsentieren es un falso amigo de presentar." },
        { type: "fill", q: "Herr Becker ist ein 68-___ Patient. (de 68 años; completa la terminación)", answer: ["jähriger"], explain: "La edad funciona como adjetivo: 68-jähriger con -er porque el sustantivo es masculino." },
        { type: "order", q: "Ordena la oración", words: ["Die", "Verdachtsdiagnose", "ist", "ein", "NSTEMI"], answer: "Die Verdachtsdiagnose ist ein NSTEMI", explain: "Sujeto, verbo en segunda posición y complemento: es la estructura básica de la oración principal." },
        { type: "mc", q: "¿Qué significa das Procedere en la Visite?", options: ["El plan de actuación o los siguientes pasos", "El procedimiento quirúrgico", "La evolución del paciente", "El consentimiento informado"], answer: 0, explain: "Procedere es el plan; el consentimiento es die Aufklärung o die Einwilligung." },
        { type: "fill", q: "Der Patient war über Nacht ___. (sin molestias)", answer: ["beschwerdefrei"], explain: "Beschwerdefrei significa sin molestias y se usa en pasado para describir la noche." },
        { type: "mc", q: "¿Cuál es el orden correcto de la presentación?", options: ["Motivo de ingreso, antecedentes, hallazgos, sospecha diagnóstica, plan", "Plan, hallazgos, antecedentes, motivo de ingreso", "Sospecha diagnóstica, motivo de ingreso, plan", "Antecedentes, plan, motivo de ingreso, hallazgos"], answer: 0, explain: "El orden alemán sigue la lógica clínica y termina con el Procedere, que es lo que decide el Oberarzt." }
      ]
    },
    {
      id: "m5l2",
      title: "Entrega de guardia (Übergabe) con SBAR",
      minutes: 15,
      goal: "Al terminar podrás entregar un paciente a otro colega con la estructura SBAR en alemán.",
      intro: "La Übergabe es el momento de mayor riesgo de errores. En muchos hospitales alemanes se usa el esquema SBAR: Situation, Hintergrund, Beurteilung y Empfehlung. Un error típico es contar toda la historia sin decir qué debe hacer el colega; la Empfehlung es la parte que más importa.",
      vocab: [
        { en: "die Übergabe", ipa: "/ˈyːbɐˌɡaːbə/", es: "entrega de turno o de guardia", ex: "Die Übergabe findet um 7:30 Uhr im Arztzimmer statt." },
        { en: "der Bereitschaftsdienst", ipa: "/bəˈʁaɪ̯tʃaftsˌdiːnst/", es: "guardia (turno de guardia fuera del horario normal)", ex: "Heute Nacht habe ich Bereitschaftsdienst." },
        { en: "der Frühdienst", ipa: "/ˈfʁyːˌdiːnst/", es: "turno de la mañana", ex: "Der Frühdienst übernimmt die Station um 7 Uhr." },
        { en: "der Nachtdienst", ipa: "/ˈnaxtˌdiːnst/", es: "turno de la noche", ex: "Der Nachtdienst hat drei Patienten neu aufgenommen." },
        { en: "der Hintergrund", ipa: "/ˈhɪntɐˌɡʁʊnt/", es: "contexto, antecedentes relevantes (la B de SBAR)", ex: "Zum Hintergrund: Der Patient hat eine Herzinsuffizienz." },
        { en: "die Beurteilung", ipa: "/bəˈʔʊʁtaɪ̯lʊŋ/", es: "valoración, impresión (la A de SBAR)", ex: "Meine Beurteilung: Der Patient ist stabil." },
        { en: "die Empfehlung", ipa: "/ɛmˈpfeːlʊŋ/", es: "recomendación, lo que debe hacerse (la R de SBAR)", ex: "Meine Empfehlung: Bitte Laborkontrolle morgen früh." },
        { en: "die Vitalparameter", ipa: "/viˈtaːlpaʁaˌmeːtɐ/", es: "signos vitales (plural)", ex: "Die Vitalparameter sind aktuell stabil." },
        { en: "die Bedarfsmedikation", ipa: "/bəˈdaʁfsmedikaˌtsi̯oːn/", es: "medicación por razón necesaria (PRN)", ex: "Bei Schmerzen steht Paracetamol als Bedarfsmedikation zur Verfügung." },
        { en: "die Überwachung", ipa: "/ˌyːbɐˈvaxʊŋ/", es: "monitorización, vigilancia", ex: "Der Patient braucht eine engmaschige Überwachung." },
        { en: "auffällig", ipa: "/ˈaʊ̯fˌfɛlɪç/", es: "llamativo, anormal (lo contrario: unauffällig)", ex: "Das EKG war unauffällig, das Labor auffällig." },
        { en: "der Zugang", ipa: "/ˈtsuːˌɡaŋ/", es: "acceso (venoso), vía", ex: "Der periphere Zugang liegt am rechten Unterarm." }
      ],
      phrases: [
        { en: "Ich übergebe dir die Station 4.", es: "Te entrego la planta 4.", use: "Primera frase de la Übergabe; entre colegas se tutea." },
        { en: "Situation: Frau Keller hat seit drei Uhr Atemnot und Fieber.", es: "Situación: la señora Keller tiene disnea y fiebre desde las tres.", use: "La S de SBAR: el problema actual en una frase." },
        { en: "Zum Hintergrund: Sie ist seit zwei Tagen wegen einer Pneumonie stationär.", es: "Contexto: está hospitalizada desde hace dos días por neumonía.", use: "La B de SBAR: diagnóstico, antecedentes y tratamiento." },
        { en: "Meine Beurteilung: Sie ist stabil, aber weiterhin tachypnoisch.", es: "Mi valoración: está estable, pero sigue taquipneica.", use: "La A de SBAR: qué piensas del estado actual." },
        { en: "Meine Empfehlung: Bitte Laborkontrolle heute Morgen.", es: "Mi recomendación: por favor control de laboratorio hoy por la mañana.", use: "La R de SBAR: qué debe hacer el colega." },
        { en: "Das Kontroll-Röntgen steht noch aus.", es: "La radiografía de control está pendiente.", use: "Para señalar algo que quedó sin hacer." },
        { en: "Ruf mich bitte an, falls sich der Zustand verschlechtert.", es: "Llámame por favor si el estado empeora.", use: "Para dejar claro cuándo avisar." }
      ],
      text: {
        type: "dialogue",
        title: "Übergabe am Morgen",
        context: "Un médico de la guardia nocturna entrega a su colega del turno de la mañana a una paciente con neumonía.",
        lines: [
          { who: "Nachtdienst", en: "Guten Morgen. Ich übergebe dir die Station 4. Zuerst Zimmer 7, Frau Keller." },
          { who: "Frühdienst", en: "Gut, ich höre." },
          { who: "Nachtdienst", en: "Situation: Frau Keller, 74 Jahre, hatte um drei Uhr Atemnot und Fieber von 38,9 Grad." },
          { who: "Frühdienst", en: "Was ist der Hintergrund?" },
          { who: "Nachtdienst", en: "Sie ist seit vorgestern wegen einer ambulant erworbenen Pneumonie stationär. Sie hat eine COPD und bekommt Ampicillin und Sulbactam intravenös." },
          { who: "Frühdienst", en: "Und wie beurteilst du sie jetzt?" },
          { who: "Nachtdienst", en: "Beurteilung: Sie ist jetzt stabil, aber noch tachypnoisch. Die Atemfrequenz liegt bei 24, die Sättigung bei 92 Prozent unter zwei Litern Sauerstoff." },
          { who: "Frühdienst", en: "Hast du etwas an der Therapie geändert?" },
          { who: "Nachtdienst", en: "Ich habe Paracetamol gegeben und Blutkulturen abgenommen. Die Kontrolle der Entzündungswerte steht noch aus." },
          { who: "Frühdienst", en: "Was empfiehlst du?" },
          { who: "Nachtdienst", en: "Empfehlung: Bitte Laborkontrolle heute Morgen. Falls die Sättigung wieder fällt, Röntgen-Thorax und Verlegung auf die Überwachungsstation erwägen." },
          { who: "Frühdienst", en: "Verstanden. Ich wiederhole: Laborkontrolle, bei Verschlechterung Röntgen und eventuell Verlegung." },
          { who: "Nachtdienst", en: "Genau. Danke, bis später." }
        ]
      },
      grammar: [
        "SBAR en alemán: Situation (qué pasa ahora), Hintergrund (por qué está aquí), Beurteilung (qué pienso), Empfehlung (qué hay que hacer). Cada parte va en una o dos frases.",
        "Übergeben pide dativo para la persona y acusativo para la cosa: Ich übergebe dir (dativo) die Station (acusativo).",
        "Las subordinadas con falls, weil, dass y ob llevan el verbo conjugado al final: Ruf mich an, falls sich der Zustand verschlechtert.",
        "Lo ocurrido durante la noche se cuenta en Perfekt (Ich habe Paracetamol gegeben); el estado actual, en presente. Para lo pendiente: steht noch aus."
      ],
      tip: "En la Empfehlung usa verbos concretos y cierra con una devolución del colega (Ich wiederhole: …). Así detectas malentendidos antes de irte a casa.",
      exercises: [
        { type: "mc", q: "En SBAR, ¿qué significa la R?", options: ["Empfehlung (recomendación)", "Risiko (riesgo)", "Rückruf (llamada de vuelta)", "Resultat (resultado)"], answer: 0, explain: "La R es Recommendation, en alemán Empfehlung: lo que el colega debe hacer." },
        { type: "fill", q: "Das Kontroll-Röntgen steht noch ___. (está pendiente)", answer: ["aus"], explain: "Ausstehen es un verbo separable: la partícula aus va al final de la oración." },
        { type: "order", q: "Ordena la oración", words: ["Ich", "übergebe", "dir", "die", "Station"], answer: "Ich übergebe dir die Station", explain: "Dativo (dir) antes del acusativo (die Station) cuando el acusativo lleva artículo." },
        { type: "mc", q: "¿En qué parte de SBAR va la frase: Sie hat eine COPD und bekommt Antibiotika?", options: ["Hintergrund", "Situation", "Beurteilung", "Empfehlung"], answer: 0, explain: "Antecedentes y tratamiento actual forman el contexto, es decir, el Hintergrund." },
        { type: "fill", q: "Der ___ übernimmt um 21 Uhr die Station. (turno de la noche)", answer: ["nachtdienst"], explain: "Nachtdienst es el turno de la noche; es masculino, der Nachtdienst." },
        { type: "mc", q: "¿Qué oración es correcta?", options: ["Ruf mich an, falls sich der Zustand verschlechtert.", "Ruf mich an, falls der Zustand sich verschlechtert sich.", "Ruf mich an, falls verschlechtert sich der Zustand.", "Ruf mich an, falls der Zustand verschlechtert."], answer: 0, explain: "Después de falls el verbo conjugado va al final; el reflexivo sich va justo después de la conjunción o del sujeto." }
      ]
    },
    {
      id: "m5l3",
      title: "El Arztbrief y las Anordnungen",
      minutes: 15,
      goal: "Al terminar podrás leer un informe de alta, interpretar sus abreviaturas y escribir indicaciones básicas.",
      intro: "El Arztbrief es el informe de alta que va al médico general o al especialista. Es muy denso: frases nominales, abreviaturas y pocos verbos. Aprender las abreviaturas te ahorra más tiempo que aprender vocabulario nuevo. Las Anordnungen son las indicaciones médicas escritas para enfermería.",
      vocab: [
        { en: "der Arztbrief", ipa: "/ˈaʁtstˌbʁiːf/", es: "informe médico, informe de alta", ex: "Der Arztbrief geht an den Hausarzt." },
        { en: "die Hauptdiagnose", ipa: "/ˈhaʊ̯ptdiaɡˌnoːzə/", es: "diagnóstico principal", ex: "Die Hauptdiagnose steht am Anfang des Arztbriefs." },
        { en: "die Nebendiagnose", ipa: "/ˈneːbn̩diaɡˌnoːzə/", es: "diagnóstico secundario, comorbilidad", ex: "Nebendiagnosen sind Diabetes und Hypertonie." },
        { en: "die Epikrise", ipa: "/epiˈkʁiːzə/", es: "resumen de la evolución durante el ingreso", ex: "In der Epikrise steht der Verlauf der Behandlung." },
        { en: "die Entlassmedikation", ipa: "/ɛntˈlasmedikaˌtsi̯oːn/", es: "medicación al alta", ex: "Die Entlassmedikation wurde angepasst." },
        { en: "die Anordnung", ipa: "/ˈanˌʔɔʁdnʊŋ/", es: "indicación médica (orden escrita)", ex: "Die Anordnungen stehen in der Patientenakte." },
        { en: "die Wiedervorstellung", ipa: "/ˈviːdɐfoːɐ̯ˌʃtɛlʊŋ/", es: "cita de seguimiento, nueva valoración", ex: "Die Wiedervorstellung ist in einer Woche geplant." },
        { en: "der Hausarzt", ipa: "/ˈhaʊ̯sˌʔaʁtst/", es: "médico general, médico de cabecera", ex: "Bitte Wiedervorstellung beim Hausarzt." },
        { en: "die Arbeitsunfähigkeitsbescheinigung", ipa: "/ˈaʁbaɪ̯tsʔʊnˌfɛːɪçkaɪ̯tsbəˌʃaɪ̯nɪɡʊŋ/", es: "certificado de incapacidad laboral (abreviatura: AU)", ex: "Der Patient erhält eine AU für eine Woche." },
        { en: "stationär", ipa: "/ʃtatsi̯oˈnɛːɐ̯/", es: "hospitalizado, intrahospitalario (lo contrario: ambulant)", ex: "Der Patient befand sich vier Tage stationär in unserer Klinik." },
        { en: "der Zustand nach (Z. n.)", ipa: "/ˈtsuːʃtant naːx/", es: "antecedente de, estado posterior a", ex: "Z. n. Appendektomie vor zehn Jahren." },
        { en: "die Kontrolle", ipa: "/kɔnˈtʁɔlə/", es: "control, seguimiento", ex: "Eine Röntgenkontrolle in sechs Wochen ist empfohlen." }
      ],
      phrases: [
        { en: "Bitte Vitalzeichen alle vier Stunden kontrollieren.", es: "Por favor controlar signos vitales cada cuatro horas.", use: "Anordnung para enfermería; se usa el infinitivo con Bitte." },
        { en: "Patient ab 24 Uhr nüchtern lassen.", es: "Mantener al paciente en ayuno desde las 24 h.", use: "Antes de un procedimiento o cirugía." },
        { en: "Bitte Blutentnahme: Blutbild, CRP und Kreatinin.", es: "Por favor toma de sangre: biometría hemática, PCR y creatinina.", use: "Para pedir laboratorio de rutina." },
        { en: "Ampicillin/Sulbactam 3 g i.v. alle 8 Stunden.", es: "Ampicilina/sulbactam 3 g i.v. cada 8 horas.", use: "Prescripción de un antibiótico intravenoso." },
        { en: "Bei Bedarf Paracetamol 1 g p.o., maximal 4 g pro Tag.", es: "Si es necesario paracetamol 1 g vía oral, máximo 4 g al día.", use: "Medicación por razón necesaria con límite diario." },
        { en: "Entlassung heute, Wiedervorstellung beim Hausarzt in einer Woche.", es: "Alta hoy, nueva valoración con el médico general en una semana.", use: "Cierre típico del Arztbrief." },
        { en: "Z. n. Appendektomie, V. a. Pneumonie.", es: "Antecedente de apendicectomía, sospecha de neumonía.", use: "Notación abreviada en diagnósticos." }
      ],
      text: {
        type: "reading",
        title: "Arztbrief (Auszug)",
        context: "Informe de alta ficticio y abreviado de un paciente con neumonía; los datos no corresponden a ninguna persona real.",
        paragraphs: [
          "Sehr geehrte Frau Kollegin, sehr geehrter Herr Kollege, wir berichten über Ihren Patienten Herrn M. (geboren 1958), der sich vom 3. bis 8. März in unserer stationären Behandlung befand.",
          "Diagnosen: Hauptdiagnose: ambulant erworbene Pneumonie im rechten Unterlappen. Nebendiagnosen: arterielle Hypertonie, Diabetes mellitus Typ 2, Z. n. Appendektomie.",
          "Anamnese: Der Patient stellte sich mit seit vier Tagen bestehendem Husten, Fieber und Dyspnoe vor. Aufnahmebefund: AZ reduziert, T 38,6 °C, RR 130/80 mmHg, HF 96/min, SpO2 91 % unter Raumluft, feinblasige Rasselgeräusche rechts basal. Labor: CRP 148 mg/l, Leukozyten 14,2/nl. Im Röntgen-Thorax zeigte sich ein Infiltrat im rechten Unterlappen.",
          "Epikrise: Unter intravenöser Therapie mit Ampicillin/Sulbactam kam es zu einer raschen Besserung. Der Patient war ab dem dritten Tag fieberfrei, das CRP fiel auf 32 mg/l. Die Sauerstoffsättigung lag bei Entlassung bei 96 % unter Raumluft.",
          "Entlassmedikation: Amoxicillin/Clavulansäure 875/125 mg 1-0-1 p.o. für weitere drei Tage, Ramipril 5 mg 1-0-0, Metformin 1000 mg 1-0-1. Procedere: Wiedervorstellung beim Hausarzt in einer Woche, Röntgenkontrolle in sechs Wochen. Mit freundlichen kollegialen Grüßen."
        ]
      },
      grammar: [
        "Abreviaturas frecuentes: AZ (Allgemeinzustand), EZ (Ernährungszustand), RR (Blutdruck), HF (Herzfrequenz), SpO2 (Sauerstoffsättigung), RGs (Rasselgeräusche), i.v. (intravenös), p.o. (per os, oral), s.c. (subkutan), Z. n. (Zustand nach), V. a. (Verdacht auf), b. B. (bei Bedarf).",
        "El esquema de dosis 1-0-1 se lee mañana, mediodía, noche: una dosis por la mañana, ninguna al mediodía, una por la noche. 1-1-1-1 son cuatro dosis al día.",
        "El Arztbrief usa estilo nominal y pasado simple: kam es zu einer Besserung, der Patient stellte sich vor. En el habla se usa más el Perfekt, pero en el informe escrito domina el Präteritum.",
        "Las Anordnungen usan el infinitivo con Bitte o frases sin verbo: Bitte Vitalzeichen kontrollieren; Patient nüchtern lassen. Siempre con dosis, vía y frecuencia."
      ],
      tip: "Falso amigo: Konsultation no es lo mismo que Konsil, y Diagnose siempre lleva artículo en femenino: die Diagnose. Y ojo: ambulant significa sin ingreso, no ambulante.",
      exercises: [
        { type: "mc", q: "¿Qué significa Z. n. Appendektomie?", options: ["Estado posterior a apendicectomía", "Zona de la apendicectomía", "Sospecha de apendicectomía", "Apendicectomía programada"], answer: 0, explain: "Z. n. es Zustand nach: antecedente de una operación o enfermedad pasada." },
        { type: "mc", q: "¿Cómo se lee la pauta Metformin 1-0-1?", options: ["Una dosis por la mañana, ninguna al mediodía, una por la noche", "Una dosis al día", "Una dosis solo al mediodía", "Tres dosis al día"], answer: 0, explain: "Los tres números son mañana, mediodía y noche." },
        { type: "fill", q: "El diagnóstico principal del ingreso se llama ___. (una palabra)", answer: ["hauptdiagnose"], explain: "Hauptdiagnose es el diagnóstico principal; los demás son Nebendiagnosen." },
        { type: "order", q: "Ordena la oración", words: ["Bitte", "Vitalzeichen", "alle", "vier", "Stunden", "kontrollieren"], answer: "Bitte Vitalzeichen alle vier Stunden kontrollieren", explain: "Las Anordnungen usan el infinitivo al final de la oración con Bitte." },
        { type: "mc", q: "Según el Arztbrief, ¿cuál era la SpO2 del paciente al ingreso?", options: ["91 % con aire ambiente", "96 % con aire ambiente", "88 % con oxígeno", "148 %"], answer: 0, explain: "El Aufnahmebefund indica SpO2 91 % unter Raumluft; al alta estaba en 96 %." },
        { type: "fill", q: "La Wiedervorstellung está prevista en una semana con el ___. (médico general)", answer: ["hausarzt"], explain: "El informe termina con: Wiedervorstellung beim Hausarzt in einer Woche." }
      ]
    },
    {
      id: "m5l4",
      title: "Interconsultas, llamadas y urgencias",
      minutes: 15,
      goal: "Al terminar podrás pedir un Konsil por teléfono y usar comunicación de circuito cerrado en una urgencia.",
      intro: "Pedir un Konsil por teléfono es una habilidad aparte: tienes que decir quién eres, qué pregunta tienes y con qué urgencia. En una Reanimation no hay tiempo para frases largas, así que se usa comunicación de circuito cerrado: quien recibe una orden la repite y quien la dio confirma. En alemán esto evita errores con números y dosis.",
      vocab: [
        { en: "das Konsil", ipa: "/kɔnˈziːl/", es: "interconsulta (también: der Konsiliardienst)", ex: "Ich fordere ein kardiologisches Konsil an." },
        { en: "die Fragestellung", ipa: "/ˈfʁaːɡəˌʃtɛlʊŋ/", es: "pregunta clínica concreta para el consultor", ex: "Die Fragestellung lautet: Rhythmus- oder Frequenzkontrolle?" },
        { en: "die Dringlichkeit", ipa: "/ˈdʁɪŋlɪçkaɪ̯t/", es: "urgencia, prioridad", ex: "Die Dringlichkeit ist hoch, bitte sofort kommen." },
        { en: "der Notfall", ipa: "/ˈnoːtˌfal/", es: "urgencia, emergencia", ex: "Notfall auf Station 4, bitte sofort kommen!" },
        { en: "die Reanimation", ipa: "/ʁeʔanimaˈtsi̯oːn/", es: "reanimación cardiopulmonar", ex: "Die Reanimation läuft seit zehn Minuten." },
        { en: "der Herz-Kreislauf-Stillstand", ipa: "/ˈhɛʁtsˈkʁaɪ̯slaʊ̯fˌʃtɪlʃtant/", es: "paro cardiorrespiratorio", ex: "Der Patient hatte einen Herz-Kreislauf-Stillstand." },
        { en: "die Herzdruckmassage", ipa: "/ˈhɛʁtsdʁʊkmaˌsaːʒə/", es: "compresiones torácicas", ex: "Ich beginne mit der Herzdruckmassage." },
        { en: "der Defibrillator", ipa: "/defibʁiˈlaːtoːɐ̯/", es: "desfibrilador", ex: "Bitte den Defibrillator holen." },
        { en: "der Schockraum", ipa: "/ˈʃɔkʁaʊ̯m/", es: "sala de choque, de trauma", ex: "Der Patient wird direkt in den Schockraum gebracht." },
        { en: "die Rückmeldung", ipa: "/ˈʁʏkˌmɛldʊŋ/", es: "confirmación, retroalimentación", ex: "Bitte geben Sie mir eine kurze Rückmeldung." },
        { en: "der Rückruf", ipa: "/ˈʁʏkˌʁuːf/", es: "llamada de vuelta", ex: "Ich erwarte einen Rückruf in zehn Minuten." },
        { en: "die Rufbereitschaft", ipa: "/ˈʁuːfbəˌʁaɪ̯tʃaft/", es: "disponibilidad localizable (guardia de llamada desde casa)", ex: "Der Oberarzt hat heute Rufbereitschaft." }
      ],
      phrases: [
        { en: "Hier ist Dr. Weber von der Inneren, Station 4.", es: "Habla el Dr. Weber de Medicina Interna, planta 4.", use: "Siempre empieza con quién eres y de dónde llamas." },
        { en: "Ich möchte ein kardiologisches Konsil anfordern.", es: "Quisiera solicitar una interconsulta de cardiología.", use: "Para abrir la petición al consultor." },
        { en: "Die Fragestellung lautet: Frequenzkontrolle oder Kardioversion?", es: "La pregunta es: control de frecuencia o cardioversión.", use: "Una frase concreta, no la historia completa." },
        { en: "Ich wiederhole zur Sicherheit: Zimmer 9, heute 14 Uhr.", es: "Repito por seguridad: habitación 9, hoy a las 14 h.", use: "Cierre del circuito en una llamada." },
        { en: "Reanimation, Station 4, Zimmer 12! Bitte sofort das Team!", es: "Reanimación, planta 4, habitación 12. Por favor el equipo de inmediato.", use: "Para activar el equipo de reanimación." },
        { en: "Adrenalin 1 mg i.v. – Adrenalin 1 mg i.v. gegeben.", es: "Adrenalina 1 mg i.v. – adrenalina 1 mg i.v. administrada.", use: "Circuito cerrado: repites la orden y confirmas al ejecutarla." },
        { en: "Achtung, Schock! Alle weg vom Patienten!", es: "Atención, descarga. Todos lejos del paciente.", use: "Antes de una desfibrilación, para despejar al equipo." }
      ],
      text: {
        type: "dialogue",
        title: "Konsil per Telefon",
        context: "Un médico internista solicita por teléfono una interconsulta de cardiología para un paciente con fibrilación auricular de reciente inicio.",
        lines: [
          { who: "Stationsarzt", en: "Guten Tag, hier ist Dr. Weber, Innere Medizin, Station 4. Spreche ich mit der Kardiologie?" },
          { who: "Kardiologin", en: "Ja, Dr. Schulz, Konsildienst Kardiologie. Worum geht es?" },
          { who: "Stationsarzt", en: "Ich möchte ein Konsil für Herrn Lang anfordern, 71 Jahre, Zimmer 9." },
          { who: "Kardiologin", en: "Was ist die Fragestellung?" },
          { who: "Stationsarzt", en: "Neu aufgetretenes Vorhofflimmern mit einer Frequenz um 130. Frage nach Rhythmus- oder Frequenzkontrolle. Er ist kreislaufstabil." },
          { who: "Kardiologin", en: "Wie dringend ist es?" },
          { who: "Stationsarzt", en: "Mittlere Dringlichkeit, bitte noch heute. Er nimmt bisher keine Antikoagulation." },
          { who: "Kardiologin", en: "Haben Sie ein aktuelles EKG und das Kreatinin?" },
          { who: "Stationsarzt", en: "Ja, das EKG schicke ich Ihnen gleich. Das Kreatinin liegt bei 1,1 mg/dl." },
          { who: "Kardiologin", en: "Gut. Ich komme um 14 Uhr auf die Station. Ich wiederhole: Herr Lang, Zimmer 9, Vorhofflimmern, heute 14 Uhr." },
          { who: "Stationsarzt", en: "Genau, so ist es. Ich bin unter der Nummer 4521 erreichbar." },
          { who: "Kardiologin", en: "Notiert. Bis 14 Uhr." }
        ]
      },
      grammar: [
        "Orden de una llamada: quién soy y de dónde, qué pido, para quién, pregunta concreta, urgencia, datos clave. Tras cada dato el otro repite lo esencial (Ich wiederhole …).",
        "Anfordern y erreichbar sein: ich fordere ein Konsil an (verbo separable); ich bin unter der Nummer … erreichbar.",
        "En urgencias se usan órdenes cortas: infinitivo o imperativo, siempre con el nombre del destinatario si es posible: Anna, Herzdruckmassage übernehmen!",
        "Circuito cerrado: orden, repetición, ejecución, confirmación. Ejemplo: Adrenalin 1 mg i.v. – Adrenalin 1 mg i.v. – gegeben."
      ],
      tip: "En el teléfono, deletrea cifras y repite las dosis: dreizehn y dreißig se confunden. Di siebzehn Uhr dreißig y no solo halb sechs, y confirma cada número.",
      exercises: [
        { type: "mc", q: "¿Qué debe decirse primero al llamar a otro servicio?", options: ["Quién eres y desde dónde llamas", "La historia completa del paciente", "El diagnóstico diferencial", "Las dosis de los medicamentos"], answer: 0, explain: "Primero identificarte (nombre, servicio, planta); después la pregunta concreta." },
        { type: "fill", q: "Ich möchte ein Konsil ___. (solicitar; verbo separable, forma del infinitivo)", answer: ["anfordern"], explain: "Anfordern es el verbo para solicitar una interconsulta o un examen." },
        { type: "order", q: "Ordena la oración", words: ["Ich", "wiederhole", "zur", "Sicherheit", "die", "Dosis"], answer: "Ich wiederhole zur Sicherheit die Dosis", explain: "Es la frase típica del circuito cerrado: el receptor repite lo que escuchó." },
        { type: "mc", q: "En una reanimación, ¿qué es el circuito cerrado?", options: ["Repetir la orden recibida y confirmar al ejecutarla", "Cerrar la puerta de la habitación", "Escribir la orden en el expediente", "Pedir al Oberarzt que confirme"], answer: 0, explain: "La orden se repite y se confirma al terminar, para evitar errores de dosis o de acción." },
        { type: "fill", q: "Der Oberarzt hat heute ___. (disponibilidad localizable desde casa)", answer: ["rufbereitschaft"], explain: "Rufbereitschaft es la guardia de llamada: el médico no está en el hospital pero debe poder llegar." },
        { type: "mc", q: "¿Cuál es una Fragestellung correcta para un Konsil de cardiología?", options: ["Neu aufgetretenes Vorhofflimmern, Frage nach Rhythmus- oder Frequenzkontrolle.", "Der Patient ist seit einer Woche im Krankenhaus.", "Bitte kommen Sie irgendwann vorbei.", "Der Patient fühlt sich nicht gut."], answer: 0, explain: "Una Fragestellung nombra el problema y la decisión que se espera del consultor." }
      ]
    }
  ]
});
