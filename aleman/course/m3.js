(window.COURSE = window.COURSE || []).push({
  id: "m3", n: 3,
  title: "Alemán por aparatos",
  en: "Organsysteme",
  summary: "Aprendes el vocabulario técnico y el que usa el paciente en corazón y pulmón, riñón y endocrino, digestivo e hígado, neurología y aparato locomotor, cada uno con un caso breve.",
  lessons: [
    {
      id: "m3l1",
      title: "Corazón y pulmones",
      minutes: 15,
      goal: "Al terminar podrás preguntar por dolor torácico, disnea y tos, y entender cómo los describe un paciente alemán.",
      intro: "En alemán el paciente casi nunca dice el término técnico: dice «Herzrasen», «keine Luft bekommen» o «Druck auf der Brust». Tú debes reconocer ambos registros. Error típico: usar «Angina» para angina de pecho; en alemán «Angina» sola es una amigdalitis, y la angina de pecho se dice «Angina pectoris».",
      vocab: [
        { en: "das Herzrasen", ipa: "/ˈhɛʁtsˌʁaːzn̩/", es: "palpitaciones rápidas (coloquial); técnico: die Tachykardie", ex: "Seit gestern habe ich Herzrasen, vor allem abends." },
        { en: "der Brustschmerz", ipa: "/ˈbʁʊstˌʃmɛʁts/", es: "dolor torácico; plural die Brustschmerzen; técnico: der Thoraxschmerz", ex: "Haben Sie Brustschmerzen, wenn Sie Treppen steigen?" },
        { en: "die Luftnot", ipa: "/ˈlʊftˌnoːt/", es: "disnea; el paciente dice «Ich bekomme schlecht Luft»; técnico: die Dyspnoe", ex: "Bei Belastung bekomme ich schnell Luftnot." },
        { en: "der Husten", ipa: "/ˈhuːstn̩/", es: "tos; trockener Husten = tos seca, Husten mit Auswurf = tos productiva", ex: "Ich habe seit zwei Wochen einen trockenen Husten." },
        { en: "der Auswurf", ipa: "/ˈaʊ̯sˌvʊʁf/", es: "expectoración, esputo; coloquial: der Schleim; técnico: das Sputum", ex: "Haben Sie Auswurf, und welche Farbe hat er?" },
        { en: "das Giemen", ipa: "/ˈɡiːmən/", es: "sibilancias; el paciente dice «pfeifende Atmung»", ex: "Beim Abhören höre ich ein deutliches Giemen." },
        { en: "der Herzinfarkt", ipa: "/ˈhɛʁtsʔɪnˌfaʁkt/", es: "infarto de miocardio; técnico: der Myokardinfarkt", ex: "Ihr Vater hatte mit 55 Jahren einen Herzinfarkt." },
        { en: "die Herzinsuffizienz", ipa: "/ˈhɛʁtsʔɪnzʊfiˌtsi̯ɛnts/", es: "insuficiencia cardiaca; coloquial: die Herzschwäche", ex: "Bei Herzinsuffizienz sammelt sich Wasser in den Beinen an." },
        { en: "das Vorhofflimmern", ipa: "/ˈfoːɐ̯hoːfˌflɪmɐn/", es: "fibrilación auricular; el paciente dice «Herzstolpern» o «unregelmäßiger Puls»", ex: "Wegen des Vorhofflimmerns nehmen Sie einen Blutverdünner." },
        { en: "der Bluthochdruck", ipa: "/ˈbluːtˌhoːxdʁʊk/", es: "hipertensión; técnico: die arterielle Hypertonie", ex: "Seit zehn Jahren habe ich Bluthochdruck." },
        { en: "das Ödem", ipa: "/øˈdeːm/", es: "edema; el paciente dice «Wassereinlagerungen» o «dicke Beine»", ex: "Ich habe abends dicke Beine, die Schuhe passen nicht mehr." },
        { en: "die Lungenentzündung", ipa: "/ˈlʊŋənʔɛntˌtsʏndʊŋ/", es: "neumonía; técnico: die Pneumonie", ex: "Der Röntgenbefund passt zu einer Lungenentzündung." }
      ],
      phrases: [
        { en: "Wo genau tut es weh?", es: "¿Dónde exactamente le duele?", use: "Primera pregunta ante cualquier dolor." },
        { en: "Strahlt der Schmerz in den Arm, den Kiefer oder den Rücken aus?", es: "¿El dolor se irradia al brazo, la mandíbula o la espalda?", use: "Dolor torácico, sospecha de síndrome coronario." },
        { en: "Bekommen Sie bei Belastung schlecht Luft?", es: "¿Le falta el aire al hacer esfuerzo?", use: "Disnea de esfuerzo." },
        { en: "Müssen Sie nachts mit mehreren Kissen schlafen?", es: "¿Tiene que dormir con varias almohadas?", use: "Ortopnea en insuficiencia cardiaca." },
        { en: "Bringen Sie beim Husten Schleim hoch?", es: "¿Expectora flema al toser?", use: "Tos productiva." },
        { en: "Haben Sie das Gefühl, dass Ihr Herz unregelmäßig schlägt?", es: "¿Siente que el corazón late de forma irregular?", use: "Palpitaciones, arritmias." },
        { en: "Wir schreiben jetzt ein EKG und nehmen Blut ab.", es: "Ahora hacemos un ECG y le sacamos sangre.", use: "Avisar antes de un procedimiento urgente." }
      ],
      text: {
        type: "dialogue",
        title: "In der Notaufnahme",
        context: "Un hombre de 62 años llega a urgencias con dolor torácico; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Guten Tag, Herr Weber. Ich bin Dr. Krause. Was führt Sie zu uns?" },
          { who: "Patient", en: "Ich habe seit etwa einer Stunde einen starken Druck auf der Brust." },
          { who: "Ärztin", en: "Wo genau spüren Sie den Druck?" },
          { who: "Patient", en: "In der Mitte, hinter dem Brustbein. Es fühlt sich an, als läge ein Stein auf meiner Brust." },
          { who: "Ärztin", en: "Strahlt der Schmerz irgendwohin aus, zum Beispiel in den linken Arm oder in den Kiefer?" },
          { who: "Patient", en: "Ja, in den linken Arm. Außerdem schwitze ich stark und bekomme schlecht Luft." },
          { who: "Ärztin", en: "Hatten Sie so etwas schon einmal?" },
          { who: "Patient", en: "Nein, noch nie. Aber ich habe Bluthochdruck und rauche seit vielen Jahren." },
          { who: "Ärztin", en: "Haben Sie Herzrasen oder Schwindel bemerkt?" },
          { who: "Patient", en: "Mir war kurz schwindelig, Herzrasen hatte ich nicht." },
          { who: "Ärztin", en: "Wir schreiben jetzt sofort ein EKG und nehmen Blut ab, um das Troponin zu bestimmen." },
          { who: "Patient", en: "Ist das ein Herzinfarkt?" },
          { who: "Ärztin", en: "Das wissen wir noch nicht. Wir prüfen es jetzt genau, und ich bleibe bei Ihnen." },
          { who: "Patient", en: "Gut, danke." }
        ]
      },
      grammar: [
        "Los compuestos toman el artículo de su último componente: der Herz|infarkt (der Infarkt), die Lungen|entzündung (die Entzündung), das Herz|rasen (das Rasen).",
        "«ausstrahlen» es verbo separable: «Der Schmerz strahlt in den Arm aus». En pregunta, el prefijo va al final: «Strahlt der Schmerz aus?».",
        "Las molestias se dicen con dativo: «Mir ist schwindelig», «Mir ist übel». No existe «Ich bin schwindelig».",
        "Contraste útil: «bei Belastung» (con esfuerzo) y «in Ruhe» (en reposo)."
      ],
      tip: "«Brust» puede significar pecho (tórax) o mama; para el tórax como cavidad se usa «Brustkorb». Y recuerda: «Angina» solo es amigdalitis, di siempre «Angina pectoris».",
      exercises: [
        { type: "mc", q: "¿Qué frase diría típicamente un paciente para describir disnea?", options: ["Ich bekomme schlecht Luft.", "Ich habe Sodbrennen.", "Mir ist übel.", "Ich habe Durst."], answer: 0, explain: "«Schlecht Luft bekommen» es la forma coloquial de Luftnot o Dyspnoe." },
        { type: "mc", q: "¿Qué es «Herzrasen»?", options: ["Palpitaciones rápidas, taquicardia", "Infarto", "Bradicardia", "Dolor torácico"], answer: 0, explain: "«Herzrasen» es el término coloquial de taquicardia o palpitaciones rápidas." },
        { type: "fill", q: "Strahlt der Schmerz in den Arm ___? (verbo separable: irradiarse)", answer: ["aus"], explain: "«ausstrahlen» se separa y el prefijo «aus» va al final de la pregunta." },
        { type: "order", q: "Ordena la oración", words: ["Wir", "schreiben", "jetzt", "ein", "EKG"], answer: "Wir schreiben jetzt ein EKG", explain: "Sujeto, verbo en segunda posición, después el resto. «EKG» es el objeto." },
        { type: "mc", q: "¿Qué artículo lleva «Herzinfarkt»?", options: ["der", "die", "das", "den"], answer: 0, explain: "Se toma el artículo del último componente: der Infarkt, entonces der Herzinfarkt." },
        { type: "fill", q: "Bringen Sie beim Husten Schleim ___? (expectorar, sale)", answer: ["hoch"], explain: "«Schleim hochbringen» es expectorar; la partícula «hoch» va al final." }
      ]
    },
    {
      id: "m3l2",
      title: "Riñón, electrolitos y endocrino",
      minutes: 15,
      goal: "Al terminar podrás interpretar y decir en voz alta valores de creatinina, potasio, sodio y glucosa en unidades alemanas, y preguntar por síntomas renales y diabéticos.",
      intro: "En Alemania los laboratorios usan mg/dl para creatinina y glucosa (a veces también mmol/l) y mmol/l para electrolitos, con coma decimal: 6,1 se lee «sechs Komma eins». Esta clase junta la parte que más te va a exigir en guardia: función renal, potasio y diabetes. Error típico: decir «Punkt» en lugar de «Komma» al leer decimales.",
      vocab: [
        { en: "die Niereninsuffizienz", ipa: "/ˈniːʁənʔɪnzʊfiˌtsi̯ɛnts/", es: "insuficiencia renal; akut = akutes Nierenversagen, crónica = chronische Niereninsuffizienz; coloquial: die Nierenschwäche", ex: "Bei fortgeschrittener Niereninsuffizienz kann eine Dialyse nötig werden." },
        { en: "das Kreatinin", ipa: "/kʁeatiˈniːn/", es: "creatinina; normal aprox. 0,6 a 1,2 mg/dl, depende de sexo y edad", ex: "Das Kreatinin ist von 1,0 auf 2,8 mg/dl gestiegen." },
        { en: "das Kalium", ipa: "/ˈkaːli̯ʊm/", es: "potasio; normal 3,5 a 5,0 mmol/l; Hyperkaliämie = zu hoch, Hypokaliämie = zu niedrig", ex: "Das Kalium liegt bei 6,1 mmol/l und ist deutlich zu hoch." },
        { en: "das Natrium", ipa: "/ˈnaːtʁi̯ʊm/", es: "sodio; normal 135 a 145 mmol/l; Hyponatriämie = zu niedrig", ex: "Ihr Natrium ist mit 128 mmol/l zu niedrig." },
        { en: "der Harnwegsinfekt", ipa: "/ˈhaʁnveːksʔɪnˌfɛkt/", es: "infección urinaria; coloquial: die Blasenentzündung", ex: "Ich glaube, ich habe eine Blasenentzündung, es brennt beim Wasserlassen." },
        { en: "die Nierenkolik", ipa: "/ˈniːʁənˌkoːlɪk/", es: "cólico renal; el paciente dice «krampfartige Schmerzen in der Flanke»", ex: "Die Schmerzen kommen wellenartig und ziehen bis in die Leiste." },
        { en: "das Wasserlassen", ipa: "/ˈvasɐˌlasn̩/", es: "micción; técnico: die Miktion; «Brennen beim Wasserlassen» = disuria", ex: "Müssen Sie nachts zum Wasserlassen aufstehen?" },
        { en: "der Blutzucker", ipa: "/ˈbluːtˌtsʊkɐ/", es: "glucemia; en ayunas normal menor de 100 mg/dl (5,6 mmol/l); diabetes desde 126 mg/dl (7,0 mmol/l) en ayunas", ex: "Der Nüchternblutzucker liegt bei 142 mg/dl." },
        { en: "der Diabetes mellitus", ipa: "/diaˈbeːtəs mɛˈliːtʊs/", es: "diabetes mellitus; coloquial: die Zuckerkrankheit; HbA1c desde 6,5 % (48 mmol/mol) apoya el diagnóstico", ex: "Bei Diabetes sind häufiger Durst und häufiges Wasserlassen typisch." },
        { en: "die Unterzuckerung", ipa: "/ˈʊntɐˌtsʊkəʁʊŋ/", es: "hipoglucemia; técnico: die Hypoglykämie; por debajo de 70 mg/dl (3,9 mmol/l)", ex: "Bei Unterzuckerung sollten Sie sofort Traubenzucker nehmen." },
        { en: "die Schilddrüse", ipa: "/ˈʃɪltˌdʁyːzə/", es: "tiroides; Unterfunktion = hipotiroidismo, Überfunktion = hipertiroidismo; se mide el TSH", ex: "Der TSH-Wert zeigt, ob die Schilddrüse richtig arbeitet." },
        { en: "die Schilddrüsenüberfunktion", ipa: "/ˈʃɪltdʁyːzn̩ˌʔyːbɐfʊŋkˌtsi̯oːn/", es: "hipertiroidismo; técnico: die Hyperthyreose; síntomas: Gewichtsverlust, Schwitzen, Herzrasen, Zittern", ex: "Gewichtsverlust, Herzrasen und Zittern passen zu einer Schilddrüsenüberfunktion." }
      ],
      phrases: [
        { en: "Ihr Kreatininwert ist erhöht, er liegt bei 2,8 mg/dl.", es: "Su creatinina está elevada, está en 2,8 mg/dl.", use: "Explicar un resultado de laboratorio al paciente." },
        { en: "Der Normbereich für Kalium liegt zwischen 3,5 und 5,0 mmol/l.", es: "El rango normal de potasio es de 3,5 a 5,0 mmol/l.", use: "Comparar el valor del paciente con el normal." },
        { en: "Müssen Sie nachts zum Wasserlassen aufstehen?", es: "¿Tiene que levantarse de noche a orinar?", use: "Nicturia, hiperplasia prostática, diabetes, insuficiencia cardiaca." },
        { en: "Brennt es beim Wasserlassen?", es: "¿Le arde al orinar?", use: "Sospecha de infección urinaria." },
        { en: "Haben Sie in letzter Zeit viel Durst, oder müssen Sie sehr oft zur Toilette?", es: "¿Últimamente tiene mucha sed o va muy seguido al baño?", use: "Síntomas de hiperglucemia." },
        { en: "Wie hoch war Ihr letzter HbA1c-Wert?", es: "¿Cuál fue su última hemoglobina glucosilada?", use: "Control de un diabético conocido." },
        { en: "Bitte setzen Sie Metformin vorübergehend ab, bis sich die Nierenwerte erholt haben.", es: "Suspenda la metformina por ahora, hasta que se recupere la función renal.", use: "Indicación en lesión renal aguda." }
      ],
      text: {
        type: "dialogue",
        title: "Akutes Nierenversagen",
        context: "Una paciente diabética con diarrea y vómito en urgencias tiene creatinina y potasio altos; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Guten Morgen, Frau Schmidt. Wie geht es Ihnen?" },
          { who: "Patientin", en: "Schlecht. Seit drei Tagen habe ich Durchfall und muss mich übergeben. Ich bin sehr schwach." },
          { who: "Ärztin", en: "Wie viel können Sie trinken, und wie oft müssen Sie noch zur Toilette?" },
          { who: "Patientin", en: "Ich kann kaum trinken. Ich lasse nur noch wenig Wasser, vielleicht zweimal am Tag." },
          { who: "Ärztin", en: "Das ist wichtig. Sie haben Diabetes und nehmen Metformin und Ramipril, richtig?" },
          { who: "Patientin", en: "Ja. Und gestern habe ich wegen der Rückenschmerzen Ibuprofen genommen." },
          { who: "Ärztin", en: "Ihre Blutwerte zeigen: Das Kreatinin liegt bei 2,8 mg/dl, normal wäre etwa 1,0." },
          { who: "Ärztin", en: "Das Kalium ist mit 6,1 mmol/l zu hoch, normal sind 3,5 bis 5,0." },
          { who: "Patientin", en: "Was bedeutet das?" },
          { who: "Ärztin", en: "Ihre Nieren arbeiten im Moment schlecht, vermutlich weil Sie so viel Flüssigkeit verloren haben." },
          { who: "Ärztin", en: "Wegen des hohen Kaliums schreiben wir sofort ein EKG, denn das kann Herzrhythmusstörungen auslösen." },
          { who: "Patientin", en: "Muss ich an die Dialyse?" },
          { who: "Ärztin", en: "Wahrscheinlich nicht. Sie bekommen Infusionen, und wir behandeln das Kalium mit Medikamenten." },
          { who: "Ärztin", en: "Metformin, Ramipril und Ibuprofen setzen wir erst einmal ab. Wir kontrollieren Ihre Nierenwerte täglich." },
          { who: "Patientin", en: "Gut, danke." }
        ]
      },
      grammar: [
        "Números con coma decimal: 2,8 mg/dl se dice «zwei Komma acht Milligramm pro Deziliter»; 6,1 mmol/l, «sechs Komma eins Millimol pro Liter».",
        "Valores de laboratorio: «erhöht» y «erniedrigt» (formal) o «zu hoch» y «zu niedrig» (al paciente). «Der Wert liegt bei …» indica el número.",
        "Subordinadas con «weil» y «dass» mandan el verbo conjugado al final: «…, weil Sie so viel Flüssigkeit verloren haben».",
        "Para suavizar un valor de referencia se usa Konjunktiv II: «normal wäre etwa 1,0». Conversión útil: glucosa mg/dl dividida entre 18 da mmol/l; creatinina mg/dl por 88,4 da µmol/l."
      ],
      tip: "Natrium es sodio y Kalium es potasio; no los confundas. El paciente dice «Zucker haben» o «Ich bin zuckerkrank» por diabetes. En urgencias, un potasio alto con cambios en el EKG es una urgencia: pide siempre el EKG en cuanto lo oigas.",
      exercises: [
        { type: "mc", q: "¿Cuál es el rango normal de potasio en unidades alemanas?", options: ["3,5 a 5,0 mmol/l", "135 a 145 mmol/l", "0,6 a 1,2 mmol/l", "70 a 100 mmol/l"], answer: 0, explain: "El potasio normal es 3,5 a 5,0 mmol/l; 135 a 145 mmol/l es el sodio." },
        { type: "mc", q: "¿Por debajo de qué valor se habla de Unterzuckerung (hipoglucemia)?", options: ["70 mg/dl", "126 mg/dl", "200 mg/dl", "110 mg/dl"], answer: 0, explain: "La hipoglucemia empieza por debajo de 70 mg/dl (3,9 mmol/l); 126 mg/dl es el umbral diagnóstico de diabetes en ayunas." },
        { type: "fill", q: "Brennt es beim ___? (micción)", answer: ["wasserlassen"], explain: "«Brennen beim Wasserlassen» es disuria; sustantivado, «Wasserlassen» va con mayúscula." },
        { type: "order", q: "Ordena la oración", words: ["Wir", "setzen", "Metformin", "vorübergehend", "ab"], answer: "Wir setzen Metformin vorübergehend ab", explain: "«absetzen» es separable: el prefijo «ab» va al final de la oración." },
        { type: "mc", q: "¿Cómo se lee en voz alta «6,1 mmol/l»?", options: ["sechs Komma eins Millimol pro Liter", "sechs Punkt eins Millimol pro Liter", "sechs Komma eins Milligramm pro Liter", "sechzig eins Millimol pro Deziliter"], answer: 0, explain: "El alemán usa coma decimal («Komma») y la unidad «Millimol pro Liter»." },
        { type: "fill", q: "Ihr Kaliumwert ist zu ___. (demasiado alto)", answer: ["hoch"], explain: "Con 6,1 mmol/l el potasio está «zu hoch»; el valor normal máximo es 5,0 mmol/l." }
      ]
    },
    {
      id: "m3l3",
      title: "Aparato digestivo e hígado",
      minutes: 15,
      goal: "Al terminar podrás describir y preguntar por síntomas abdominales, hepáticos y del tránsito intestinal en alemán clínico y coloquial.",
      intro: "En el área digestiva el paciente alemán usa palabras muy concretas: «Durchfall», «Verstopfung», «Sodbrennen», «Stuhlgang». Los términos técnicos con raíz grecolatina existen (Hepatitis, Pankreatitis), pero las formas largas con «-entzündung» son las que más oirás. Error típico: decir «Ich habe Übelkeit» en vez de la forma natural «Mir ist übel».",
      vocab: [
        { en: "der Bauchschmerz", ipa: "/ˈbaʊxˌʃmɛʁts/", es: "dolor abdominal; plural die Bauchschmerzen; el paciente dice «Bauchweh»", ex: "Seit gestern habe ich starke Bauchschmerzen im rechten Oberbauch." },
        { en: "die Übelkeit", ipa: "/ˈyːbl̩ˌkaɪt/", es: "náusea; el paciente dice «Mir ist übel»", ex: "Mir ist schon den ganzen Tag übel." },
        { en: "das Erbrechen", ipa: "/ɛɐ̯ˈbʁɛçn̩/", es: "vómito; verbos: erbrechen, sich übergeben; coloquial: «Ich muss mich übergeben»", ex: "Ich habe dreimal erbrochen, zuletzt war es gallig." },
        { en: "der Durchfall", ipa: "/ˈdʊʁçˌfal/", es: "diarrea; técnico: die Diarrhö", ex: "Der Durchfall dauert jetzt seit vier Tagen an." },
        { en: "die Verstopfung", ipa: "/fɛɐ̯ˈʃtɔpfʊŋ/", es: "estreñimiento; técnico: die Obstipation", ex: "Ich habe seit einer Woche Verstopfung." },
        { en: "das Sodbrennen", ipa: "/ˈzoːtˌbʁɛnən/", es: "pirosis, agruras; técnico: der gastroösophageale Reflux", ex: "Nachts habe ich oft Sodbrennen und saures Aufstoßen." },
        { en: "der Teerstuhl", ipa: "/ˈteːɐ̯ˌʃtuːl/", es: "heces negras y pastosas, melena; signo de sangrado digestivo alto; técnico: die Melaena", ex: "Haben Sie in den letzten Tagen schwarzen, klebrigen Stuhl bemerkt?" },
        { en: "die Gelbsucht", ipa: "/ˈɡɛlpˌzʊxt/", es: "ictericia; técnico: der Ikterus", ex: "Meine Augen und meine Haut sind seit gestern gelb." },
        { en: "die Gallenkolik", ipa: "/ˈɡalənˌkoːlɪk/", es: "cólico biliar; típico después de comida grasosa; Gallenstein = cálculo biliar", ex: "Die Schmerzen kommen in Wellen und ziehen in die rechte Schulter." },
        { en: "die Blinddarmentzündung", ipa: "/ˈblɪntdaʁmʔɛntˌtsʏndʊŋ/", es: "apendicitis; técnico: die Appendizitis", ex: "Der Schmerz hat in der Mitte begonnen und ist nach rechts unten gewandert." },
        { en: "die Leberzirrhose", ipa: "/ˈleːbɐtsɪˌʁoːzə/", es: "cirrosis hepática; Ursachen: Alkohol, Hepatitis B und C, Fettleber", ex: "Bei Leberzirrhose kann sich Wasser im Bauch ansammeln." },
        { en: "die Bauchspeicheldrüsenentzündung", ipa: "/ˈbaʊxʃpaɪçl̩dʁyːzn̩ʔɛntˌtsʏndʊŋ/", es: "pancreatitis; técnico: die Pankreatitis; dolor en cinturón, a menudo por alcohol o cálculos", ex: "Der Schmerz geht gürtelförmig in den Rücken." }
      ],
      phrases: [
        { en: "Wo genau im Bauch tut es weh?", es: "¿En qué parte exacta del abdomen le duele?", use: "Localizar el dolor: Oberbauch, Unterbauch, rechts, links." },
        { en: "Ist Ihnen übel, oder müssen Sie sich übergeben?", es: "¿Tiene náuseas o necesita vomitar?", use: "Preguntar por náusea y vómito." },
        { en: "Wann hatten Sie zuletzt Stuhlgang, und wie sah er aus?", es: "¿Cuándo evacuó por última vez y cómo eran las heces?", use: "Preguntar por tránsito y aspecto." },
        { en: "Haben Sie Blut im Stuhl bemerkt, oder war er schwarz?", es: "¿Ha visto sangre en las heces o eran negras?", use: "Descartar sangrado digestivo." },
        { en: "Sind Ihre Augen oder Ihre Haut gelb geworden?", es: "¿Se le han puesto amarillos los ojos o la piel?", use: "Preguntar por ictericia." },
        { en: "Haben Sie Sodbrennen oder saures Aufstoßen?", es: "¿Tiene agruras o regurgitación ácida?", use: "Reflujo gastroesofágico." },
        { en: "Wie viel Alkohol trinken Sie in der Woche?", es: "¿Cuánto alcohol toma a la semana?", use: "Pregunta neutral en patología hepática o pancreática." }
      ],
      text: {
        type: "dialogue",
        title: "Schmerzen im rechten Oberbauch",
        context: "Una mujer de 38 años llega a urgencias con dolor abdominal después de una comida grasosa; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Guten Abend, Frau Becker. Was führt Sie zu uns?" },
          { who: "Patientin", en: "Ich habe seit zwei Stunden starke Schmerzen im Bauch, oben rechts." },
          { who: "Ärztin", en: "Haben Sie vorher etwas gegessen?" },
          { who: "Patientin", en: "Ja, eine Pizza mit viel Käse und Salami. Danach hat es angefangen." },
          { who: "Ärztin", en: "Wie fühlt sich der Schmerz an: stechend, brennend oder krampfartig?" },
          { who: "Patientin", en: "Krampfartig, er kommt in Wellen. Er zieht in den Rücken und in die rechte Schulter." },
          { who: "Ärztin", en: "Ist Ihnen übel? Haben Sie erbrochen?" },
          { who: "Patientin", en: "Mir ist sehr übel, und ich habe zweimal erbrochen." },
          { who: "Ärztin", en: "Haben Sie Fieber, Durchfall oder eine Veränderung der Urinfarbe bemerkt?" },
          { who: "Patientin", en: "Fieber nicht, aber mein Urin war heute dunkel. Der Stuhl ist normal." },
          { who: "Ärztin", en: "Gut, ich untersuche jetzt Ihren Bauch. Zeigen Sie mir bitte, wo es am meisten wehtut." },
          { who: "Patientin", en: "Genau hier, unter dem rechten Rippenbogen." },
          { who: "Ärztin", en: "Atmen Sie bitte tief ein. Tut es dann mehr weh?" },
          { who: "Patientin", en: "Ja, dann bleibt mir fast die Luft weg." },
          { who: "Ärztin", en: "Wir nehmen Blut ab und machen einen Ultraschall. Wegen des dunklen Urins prüfen wir auch die Leberwerte." }
        ]
      },
      grammar: [
        "«Mir ist übel» usa dativo. Para vomitar: «Ich muss mich übergeben» (reflexivo) o «Ich habe erbrochen» (Perfekt de «erbrechen»).",
        "Perfekt de verbos frecuentes: «ich habe gegessen», «ich habe erbrochen». Con verbos de movimiento se usa «sein»: «Der Schmerz ist nach rechts gewandert».",
        "El sufijo «-artig» da el carácter del dolor: krampfartig, kolikartig, wellenartig. Los compuestos con «-entzündung» nombran casi cualquier inflamación.",
        "Localización: «im Oberbauch» y «im Unterbauch»; «rechts» y «links» sin preposición («oben rechts»)."
      ],
      tip: "Evita «kotzen» con pacientes: es vulgar. Usa «sich übergeben» o «erbrechen». Y pregunta por el alcohol sin juicio: «Wie viel trinken Sie in der Woche?» obtiene respuestas más honestas que «Trinken Sie viel?».",
      exercises: [
        { type: "mc", q: "¿Qué es «Teerstuhl»?", options: ["Heces negras y pastosas (melena)", "Heces con moco", "Heces blandas con grasa", "Heces con sangre roja fresca"], answer: 0, explain: "«Teer» es alquitrán: se trata de melena, típica de sangrado digestivo alto." },
        { type: "mc", q: "¿Qué quiere decir «Mir ist übel»?", options: ["Tengo náuseas", "Me duele el estómago", "Tengo hambre", "Tengo diarrea"], answer: 0, explain: "«Mir ist übel» expresa náusea; es la forma natural, no «Ich habe Übelkeit»." },
        { type: "fill", q: "Ich muss mich ___. (vomitar, verbo reflexivo)", answer: ["übergeben"], explain: "«sich übergeben» es la forma educada de decir vomitar." },
        { type: "order", q: "Ordena la oración", words: ["Seit", "zwei", "Stunden", "habe", "ich", "starke", "Bauchschmerzen"], answer: "Seit zwei Stunden habe ich starke Bauchschmerzen", explain: "Con un complemento de tiempo al inicio, el verbo conjugado queda en segunda posición y el sujeto lo sigue." },
        { type: "mc", q: "«Blinddarmentzündung» es en términos médicos…", options: ["Appendizitis", "Pankreatitis", "Cholezystitis", "Gastritis"], answer: 0, explain: "«Blinddarm» designa el apéndice en lenguaje común y «Entzündung» es inflamación." },
        { type: "fill", q: "Sind Ihre Augen oder Ihre Haut ___ geworden? (amarillo)", answer: ["gelb"], explain: "«gelb werden» describe ictericia; el sustantivo es «Gelbsucht»." }
      ]
    },
    {
      id: "m3l4",
      title: "Neurología, aparato locomotor y reumatología",
      minutes: 15,
      goal: "Al terminar podrás preguntar por cefalea, mareo, déficit neurológico, dolor de espalda y articular, y reconocer un posible ictus.",
      intro: "En neurología y reumatología el tiempo importa: en un ictus la pregunta clave es cuándo empezó. Los pacientes dicen «Schwindel» para mareo en general; debes aclarar si «dreht sich alles» (vértigo) o «wird mir schwarz vor Augen» (presíncope). Error típico: usar «Schwindel» para vértigo sin precisar el tipo.",
      vocab: [
        { en: "der Kopfschmerz", ipa: "/ˈkɔpfˌʃmɛʁts/", es: "dolor de cabeza; plural die Kopfschmerzen; Migräne = migraña", ex: "Ich habe seit gestern pochende Kopfschmerzen auf der linken Seite." },
        { en: "der Schwindel", ipa: "/ˈʃvɪndl̩/", es: "mareo o vértigo; Drehschwindel = vértigo rotatorio, Schwankschwindel = inestabilidad", ex: "Beim Aufstehen wird mir schwindelig." },
        { en: "der Schlaganfall", ipa: "/ˈʃlaːkˌʔanfal/", es: "ictus, accidente cerebrovascular; técnico: der Hirninfarkt (isquémico); abreviado «Schlag»", ex: "Beim Verdacht auf einen Schlaganfall zählt jede Minute." },
        { en: "die Lähmung", ipa: "/ˈlɛːmʊŋ/", es: "parálisis, déficit motor; Halbseitenlähmung = hemiparesia o hemiplejía; el paciente dice «Mein Arm ist schwach»", ex: "Seit heute Morgen habe ich eine Lähmung im rechten Arm." },
        { en: "das Taubheitsgefühl", ipa: "/ˈtaʊ̯phaɪ̯tsɡəˌfyːl/", es: "entumecimiento; el paciente dice «mein Arm ist eingeschlafen» o «Kribbeln»", ex: "Ich spüre ein Taubheitsgefühl in der linken Hand." },
        { en: "der Krampfanfall", ipa: "/ˈkʁampfˌʔanfal/", es: "crisis convulsiva; técnico: der epileptische Anfall", ex: "Hatten Sie schon einmal einen Krampfanfall?" },
        { en: "der Rückenschmerz", ipa: "/ˈʁʏkn̩ˌʃmɛʁts/", es: "dolor de espalda; plural die Rückenschmerzen; Kreuzschmerzen = lumbalgia", ex: "Die Rückenschmerzen strahlen ins linke Bein aus." },
        { en: "der Bandscheibenvorfall", ipa: "/ˈbantʃaɪbn̩ˌfoːɐ̯fal/", es: "hernia discal; técnico: der Diskusprolaps", ex: "Im MRT sieht man einen Bandscheibenvorfall auf Höhe L5/S1." },
        { en: "der Gelenkschmerz", ipa: "/ɡəˈlɛŋkˌʃmɛʁts/", es: "dolor articular; técnico: die Arthralgie; Gelenkschwellung = inflamación articular", ex: "Beide Handgelenke sind geschwollen und tun weh." },
        { en: "die Morgensteifigkeit", ipa: "/ˈmɔʁɡn̩ˌʃtaɪ̯fɪçkaɪ̯t/", es: "rigidez matutina; más de 30 a 60 minutos sugiere artritis inflamatoria, como la reumatoide", ex: "Meine Gelenke sind morgens fast eine Stunde lang steif." },
        { en: "die Arthrose", ipa: "/aʁˈtʁoːzə/", es: "artrosis; típico dolor al inicio del movimiento y por carga, mejor en reposo", ex: "Bei Arthrose tut das Knie vor allem beim Treppensteigen weh." },
        { en: "die Gicht", ipa: "/ɡɪçt/", es: "gota; Harnsäure = ácido úrico; ataque típico en el dedo gordo del pie", ex: "Mein großer Zeh ist über Nacht rot, heiß und geschwollen." }
      ],
      phrases: [
        { en: "Wann haben die Beschwerden angefangen?", es: "¿Cuándo empezaron las molestias?", use: "Pregunta clave en un posible ictus y en cualquier síntoma agudo." },
        { en: "Wann waren Sie zuletzt beschwerdefrei?", es: "¿Cuándo estuvo bien por última vez?", use: "Hora de última vez visto bien, importante para decidir tratamiento en ictus." },
        { en: "Ist Ihnen schwindelig, dreht sich alles, oder wird Ihnen schwarz vor Augen?", es: "¿Se marea, todo le da vueltas o se le nubla la vista?", use: "Distinguir vértigo de presíncope." },
        { en: "Spüren Sie ein Kribbeln oder Taubheit in Armen oder Beinen?", es: "¿Siente hormigueo o adormecimiento en brazos o piernas?", use: "Déficit sensitivo." },
        { en: "Strahlt der Rückenschmerz ins Bein aus?", es: "¿El dolor de espalda se irradia a la pierna?", use: "Sospecha de radiculopatía o ciática." },
        { en: "Sind Ihre Gelenke morgens steif, und wie lange dauert das?", es: "¿Tiene rigidez articular por la mañana y cuánto dura?", use: "Diferenciar artritis inflamatoria de artrosis." },
        { en: "Nehmen Sie Blutverdünner?", es: "¿Toma anticoagulantes?", use: "Ictus, antes de una punción o de una lisis." }
      ],
      text: {
        type: "dialogue",
        title: "Verdacht auf Schlaganfall",
        context: "Un hombre de 70 años llega a urgencias con debilidad del brazo derecho y habla torpe; caso ficticio.",
        lines: [
          { who: "Ärztin", en: "Herr Schneider, ich bin Dr. Hoffmann, Neurologin. Wann haben die Beschwerden angefangen?" },
          { who: "Patient", en: "Vor etwa einer Stunde. Beim Frühstück ist mir die Tasse aus der rechten Hand gefallen." },
          { who: "Ärztin", en: "Was haben Sie noch bemerkt?" },
          { who: "Patient", en: "Mein Mund hängt rechts, und das Sprechen fällt mir schwer." },
          { who: "Ärztin", en: "Hatten Sie Kopfschmerzen oder einen Krampfanfall?" },
          { who: "Patient", en: "Nein, keine Kopfschmerzen. Nur ein Kribbeln in der rechten Hand." },
          { who: "Ärztin", en: "Wann ging es Ihnen zuletzt gut?" },
          { who: "Patient", en: "Um sieben Uhr war noch alles normal. Jetzt ist es acht." },
          { who: "Ärztin", en: "Nehmen Sie Blutverdünner?" },
          { who: "Patient", en: "Ja, Apixaban wegen Vorhofflimmern. Die letzte Tablette habe ich gestern Abend genommen." },
          { who: "Ärztin", en: "Das ist wichtig. Heben Sie bitte beide Arme hoch und halten Sie sie." },
          { who: "Patient", en: "Der rechte Arm fällt herunter." },
          { who: "Ärztin", en: "Zeigen Sie mir bitte die Zähne. Jetzt sprechen Sie mir nach: Heute ist ein schöner Tag." },
          { who: "Patient", en: "Heute ist ein ... schöner ... Tag." },
          { who: "Ärztin", en: "Wir machen sofort ein CT vom Kopf. Wegen des Blutverdünners ist eine Lyse vielleicht nicht möglich, aber wir prüfen, ob wir das Gerinnsel mit einem Katheter entfernen können." }
        ]
      },
      grammar: [
        "Tiempo: «vor einer Stunde» (hace una hora, vor + dativo) y «seit einer Stunde» (desde hace una hora, seit + dativo con presente).",
        "Lado del cuerpo: «in der rechten Hand» (dativo femenino), «im rechten Arm» (dativo masculino).",
        "«Mir ist schwindelig» y «Es kribbelt in der Hand» no llevan sujeto personal. «Mein Arm ist eingeschlafen» es la expresión común para entumecimiento.",
        "Compuestos con «-gefühl» y «-anfall»: das Taubheitsgefühl, der Krampfanfall, der Schlaganfall."
      ],
      tip: "En ictus pregunta siempre dos cosas: cuándo empezó y si toma anticoagulantes. Con apixaban tomado en las últimas 48 horas la lisis suele estar contraindicada, pero la trombectomía mecánica sigue siendo una opción: así lo puedes explicar al paciente.",
      exercises: [
        { type: "mc", q: "¿Cómo se dice «ictus» en alemán?", options: ["der Schlaganfall", "der Krampfanfall", "der Herzinfarkt", "der Schwindel"], answer: 0, explain: "«Schlaganfall» es el ictus; «Krampfanfall» es una crisis convulsiva." },
        { type: "mc", q: "¿Cuál de estas frases describe vértigo rotatorio?", options: ["Es dreht sich alles.", "Mir wird schwarz vor Augen.", "Ich habe Kopfschmerzen.", "Mein Arm ist eingeschlafen."], answer: 0, explain: "«Es dreht sich alles» es vértigo; «schwarz vor Augen» describe presíncope." },
        { type: "fill", q: "Heben Sie bitte beide Arme ___. (arriba, partícula)", answer: ["hoch"], explain: "«hochheben» es separable: «Heben Sie die Arme hoch»." },
        { type: "order", q: "Ordena la oración", words: ["Wann", "haben", "die", "Beschwerden", "angefangen"], answer: "Wann haben die Beschwerden angefangen", explain: "Pregunta con palabra interrogativa y Perfekt: verbo auxiliar en segunda posición, participio al final." },
        { type: "mc", q: "¿Qué enfermedad sugiere un dedo gordo del pie rojo, caliente y muy doloroso de un día para otro?", options: ["Gicht", "Arthrose", "Bandscheibenvorfall", "Migräne"], answer: 0, explain: "«Gicht» es gota, típica en el primer dedo del pie (Podagra)." },
        { type: "fill", q: "Spüren Sie Kribbeln oder ___ in den Beinen? (entumecimiento, sin artículo, adjetivo sustantivado de «taub»)", answer: ["taubheit"], explain: "«Taubheit» es entumecimiento; el compuesto completo es «Taubheitsgefühl»." }
      ]
    }
  ]
});
