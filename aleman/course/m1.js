(window.COURSE = window.COURSE || []).push({
  id: "m1", n: 1,
  title: "Base funcional",
  en: "Medizinisches Fundament",
  summary: "Aprendes a presentarte, preguntar en la anamnesis, hablar del pasado y manejar números, horas y dosis con la forma «Sie» en el registro clínico alemán.",
  lessons: [
    {
      id: "m1l1",
      title: "Saludar y presentarse en la consulta",
      minutes: 15,
      goal: "Al terminar podrás saludar a un paciente con «Sie», presentarte por tu rol y construir frases con el verbo en segunda posición.",
      intro: "En Alemania los pacientes adultos se tratan de «Sie» (usted) con Herr o Frau más el apellido, nunca por el nombre de pila. El error típico del hispanohablante es usar «du» por costumbre o poner el verbo al final, como en español hablado con sujeto largo. En alemán el verbo conjugado va siempre en la posición 2 de la oración enunciativa.",
      vocab: [
        { en: "der Arzt", ipa: "/aːɐ̯tst/", es: "el médico (femenino: die Ärztin)", ex: "Der Arzt kommt gleich zu Ihnen." },
        { en: "die Ärztin", ipa: "/ˈɛːɐ̯tstɪn/", es: "la médica", ex: "Die Ärztin untersucht Sie jetzt." },
        { en: "der Patient", ipa: "/paˈtsi̯ɛnt/", es: "el paciente (masculino)", ex: "Der Patient ist seit gestern auf der Station." },
        { en: "die Patientin", ipa: "/paˈtsi̯ɛntɪn/", es: "la paciente", ex: "Die Patientin klagt über Schwindel." },
        { en: "der Medizinstudent", ipa: "/mediˈtsiːnʃtuˌdɛnt/", es: "el estudiante de Medicina (femenino: die Medizinstudentin)", ex: "Der Medizinstudent hört bei der Visite zu." },
        { en: "die Famulatur", ipa: "/famulaˈtuːɐ̯/", es: "rotación clínica de un mes durante la carrera", ex: "Ich mache im März eine Famulatur in der Inneren Medizin." },
        { en: "das Praktische Jahr", ipa: "/das ˈpʁaktɪʃə jaːɐ̯/", es: "año clínico final de la carrera (abreviado PJ; equivalente aproximado al internado de pregrado)", ex: "Im Praktischen Jahr rotiert man durch mehrere Fächer." },
        { en: "die Station", ipa: "/ʃtaˈtsi̯oːn/", es: "el servicio o piso de hospitalización", ex: "Ich arbeite auf der Station für Innere Medizin." },
        { en: "die Pflegekraft", ipa: "/ˈpfleːɡəˌkʁaft/", es: "personal de enfermería (término neutro)", ex: "Die Pflegekraft misst gerade den Blutdruck." },
        { en: "die Oberärztin", ipa: "/ˈoːbɐˌʔɛːɐ̯tstɪn/", es: "médica adjunta, por encima del médico residente", ex: "Die Oberärztin kommt später zur Visite." },
        { en: "die Anamnese", ipa: "/anamˈneːzə/", es: "historia clínica, interrogatorio", ex: "Ich mache jetzt die Anamnese." },
        { en: "die Untersuchung", ipa: "/ʊntɐˈzuːxʊŋ/", es: "la exploración o el examen", ex: "Nach der Untersuchung besprechen wir die Ergebnisse." }
      ],
      phrases: [
        { en: "Guten Morgen, mein Name ist Torres.", es: "Buenos días, mi nombre es Torres.", use: "Primer contacto; puedes decir también «Guten Tag» desde media mañana." },
        { en: "Ich bin Medizinstudent aus Mexiko und mache hier ein Praktikum.", es: "Soy estudiante de Medicina de México y hago una práctica aquí.", use: "Presentación de estudiante; una mujer dice «Medizinstudentin»." },
        { en: "Ich bin Ärztin auf dieser Station.", es: "Soy médica en este servicio.", use: "Presentación por rol cuando ya ejerces." },
        { en: "Wie darf ich Sie ansprechen?", es: "¿Cómo puedo dirigirme a usted?", use: "Para confirmar el nombre y el trato del paciente." },
        { en: "Was führt Sie zu uns?", es: "¿Qué lo trae por aquí?", use: "Pregunta de apertura de la consulta." },
        { en: "Ich möchte Ihnen ein paar Fragen stellen.", es: "Quisiera hacerle algunas preguntas.", use: "Antes de empezar la anamnesis." },
        { en: "Bitte sagen Sie mir, wenn Sie etwas nicht verstehen.", es: "Por favor, dígame si no entiende algo.", use: "Útil cuando tu alemán aún se está desarrollando." }
      ],
      text: {
        type: "dialogue",
        title: "Die erste Begegnung",
        context: "Un estudiante de Medicina se presenta a un paciente en la estación antes de la visita.",
        lines: [
          { who: "Student", en: "Guten Morgen! Mein Name ist Torres. Ich bin Medizinstudent aus Mexiko und mache hier ein Praktikum." },
          { who: "Patient", en: "Guten Morgen. Angenehm." },
          { who: "Student", en: "Die Stationsärztin, Frau Doktor Keller, kommt gleich. Darf ich vorher ein paar Fragen stellen?" },
          { who: "Patient", en: "Ja, natürlich." },
          { who: "Student", en: "Danke. Wie darf ich Sie ansprechen? Sind Sie Herr Weber?" },
          { who: "Patient", en: "Ja, Weber, Johann Weber. Sagen Sie ruhig Herr Weber." },
          { who: "Student", en: "Gut, Herr Weber. Was führt Sie zu uns?" },
          { who: "Patient", en: "Ich habe seit gestern starke Schmerzen im Bauch." },
          { who: "Student", en: "Das tut mir leid. Ich höre gut zu, und Frau Doktor Keller untersucht Sie danach. Ist das in Ordnung?" },
          { who: "Patient", en: "Ja, in Ordnung. Sie sprechen aber sehr gut Deutsch!" },
          { who: "Student", en: "Vielen Dank, ich lerne noch. Bitte sagen Sie mir, wenn Sie etwas nicht verstehen." },
          { who: "Patient", en: "Das mache ich." }
        ]
      },
      grammar: [
        "«Sie» (usted) se escribe con mayúscula y lleva el verbo en tercera persona del plural: «Haben Sie Schmerzen?». «du» se usa con niños, entre colegas jóvenes o si el paciente lo propone; ante la duda, siempre «Sie».",
        "El verbo conjugado ocupa la posición 2 en la oración enunciativa: «Ich bin Arzt.» y «Heute untersuche ich Sie.» (al poner «heute» primero, el sujeto pasa detrás del verbo).",
        "Saludos: «Guten Morgen» (hasta media mañana), «Guten Tag» (el más seguro), «Guten Abend». «Hallo» es informal y «Grüß Gott» o «Moin» son regionales (sur y norte); entiéndelos, pero tú usa «Guten Tag».",
        "Los títulos se usan con el apellido: «Frau Doktor Keller», «Herr Weber». El género se marca en la profesión: der Arzt, die Ärztin; der Student, die Studentin."
      ],
      tip: "Falso reflejo del español: no digas «Ich habe 25 Jahre» (tengo 25 años) ni «Ich bin Student von Medizin». Para tu rol di «Ich bin Medizinstudent» y, para la edad, «Ich bin 25 Jahre alt».",
      exercises: [
        { type: "mc", q: "¿Cómo saludas a un paciente adulto que no conoces?", options: ["Hallo, wie geht’s dir?", "Guten Tag, wie geht es Ihnen?", "Hey, was ist los?", "Servus, alles klar?"], answer: 1, explain: "Con pacientes adultos se usa «Guten Tag» y la forma «Sie»; las demás opciones son informales o regionales." },
        { type: "fill", q: "Guten Tag, ich ___ Medizinstudent aus Mexiko. (verbo «ser», 1.ª persona)", answer: ["bin"], explain: "«Ich bin» es la forma de sein con ich; el verbo queda en posición 2." },
        { type: "order", q: "Ordena la oración (el verbo en posición 2).", words: ["Heute", "untersuche", "ich", "Sie"], answer: "Heute untersuche ich Sie", explain: "Si empiezas por «heute», el verbo va segundo y el sujeto detrás: «Heute untersuche ich Sie»." },
        { type: "mc", q: "¿Cuál de estas oraciones tiene el orden correcto?", options: ["Ich Sie heute untersuche.", "Heute untersuche ich Sie.", "Heute ich untersuche Sie.", "Untersuche heute Sie ich."], answer: 1, explain: "En la oración enunciativa el verbo conjugado va en la posición 2." },
        { type: "fill", q: "Wie darf ich ___ ansprechen? (pronombre de cortesía «usted»)", answer: ["sie"], explain: "«Sie» (con mayúscula en el texto) es el pronombre de cortesía; aquí es objeto de «ansprechen»." },
        { type: "mc", q: "Una médica se presenta: «Ich bin ___ auf dieser Station.»", options: ["Arzt", "Ärztin", "Ärzte", "Patientin"], answer: 1, explain: "La forma femenina de der Arzt es die Ärztin." }
      ]
    },
    {
      id: "m1l2",
      title: "Preguntas en la anamnesis",
      minutes: 15,
      goal: "Al terminar podrás formular preguntas abiertas y de sí o no, y preguntar desde cuándo y dónde exactamente duele.",
      intro: "En alemán la pregunta se marca con el orden de las palabras, no solo con la entonación. En una pregunta abierta la palabra interrogativa (W-Frage) va primero y el verbo segundo; en una de sí o no el verbo va al inicio. El error típico es decir «Sie haben Fieber?» con entonación de español o añadir un auxiliar inexistente como el «do» del inglés.",
      vocab: [
        { en: "wo?", ipa: "/voː/", es: "¿dónde?", ex: "Wo haben Sie Schmerzen?" },
        { en: "wann?", ipa: "/van/", es: "¿cuándo?", ex: "Wann hat es angefangen?" },
        { en: "seit wann?", ipa: "/zaɪ̯t van/", es: "¿desde cuándo?", ex: "Seit wann haben Sie Husten?" },
        { en: "wie lange?", ipa: "/viː ˈlaŋə/", es: "¿cuánto tiempo?", ex: "Wie lange dauern die Schmerzen?" },
        { en: "wie oft?", ipa: "/viː ɔft/", es: "¿con qué frecuencia?", ex: "Wie oft haben Sie Durchfall?" },
        { en: "wie stark?", ipa: "/viː ʃtaʁk/", es: "¿qué tan fuerte?", ex: "Wie stark sind die Schmerzen?" },
        { en: "welche", ipa: "/ˈvɛlçə/", es: "¿cuáles? (con sustantivo plural)", ex: "Welche Medikamente nehmen Sie?" },
        { en: "der Schmerz", ipa: "/ʃmɛʁts/", es: "el dolor (plural usual: die Schmerzen)", ex: "Der Schmerz kommt in Wellen." },
        { en: "die Beschwerden", ipa: "/bəˈʃveːɐ̯dn̩/", es: "las molestias, los síntomas (solo plural)", ex: "Seit wann bestehen die Beschwerden?" },
        { en: "der Beginn", ipa: "/bəˈɡɪn/", es: "el inicio", ex: "Der Beginn war ganz plötzlich." },
        { en: "ausstrahlen", ipa: "/ˈaʊ̯sˌʃtʁaːlən/", es: "irradiar (verbo separable: strahlt … aus)", ex: "Strahlt der Schmerz in den Rücken aus?" },
        { en: "weh tun", ipa: "/veː tuːn/", es: "doler", ex: "Wo tut es weh?" }
      ],
      phrases: [
        { en: "Seit wann haben Sie die Schmerzen?", es: "¿Desde cuándo tiene el dolor?", use: "Pregunta clave para fijar el inicio; el verbo va en presente." },
        { en: "Wo genau tut es weh?", es: "¿Dónde exactamente le duele?", use: "Para precisar la localización." },
        { en: "Haben Sie Fieber?", es: "¿Tiene fiebre?", use: "Pregunta de sí o no, con el verbo al principio." },
        { en: "Strahlt der Schmerz aus?", es: "¿Se irradia el dolor?", use: "En dolor torácico, abdominal o de espalda." },
        { en: "Wie stark sind die Schmerzen auf einer Skala von null bis zehn?", es: "¿Qué tan fuerte es el dolor en una escala de cero a diez?", use: "Para cuantificar la intensidad." },
        { en: "Nehmen Sie Medikamente?", es: "¿Toma medicamentos?", use: "Parte de la anamnesis de medicación." },
        { en: "Haben Sie Allergien?", es: "¿Tiene alergias?", use: "Siempre antes de recetar o hacer procedimientos." }
      ],
      text: {
        type: "dialogue",
        title: "Brustschmerzen in der Notaufnahme",
        context: "Una médica interroga a un paciente con dolor en el pecho en urgencias.",
        lines: [
          { who: "Ärztin", en: "Guten Tag, Frau Berger. Was führt Sie zu uns?" },
          { who: "Patient", en: "Ich habe Schmerzen in der Brust." },
          { who: "Ärztin", en: "Seit wann haben Sie die Schmerzen?" },
          { who: "Patient", en: "Seit etwa zwei Stunden." },
          { who: "Ärztin", en: "Wo genau tut es weh?" },
          { who: "Patient", en: "Hier, in der Mitte, hinter dem Brustbein." },
          { who: "Ärztin", en: "Strahlt der Schmerz aus?" },
          { who: "Patient", en: "Ja, in den linken Arm." },
          { who: "Ärztin", en: "Wie stark sind die Schmerzen auf einer Skala von null bis zehn?" },
          { who: "Patient", en: "Ungefähr acht." },
          { who: "Ärztin", en: "Haben Sie Luftnot oder Übelkeit?" },
          { who: "Patient", en: "Ja, mir ist auch ein bisschen übel." },
          { who: "Ärztin", en: "Hatten Sie solche Schmerzen schon einmal?" },
          { who: "Patient", en: "Nein, noch nie." }
        ]
      },
      grammar: [
        "Pregunta con W-Wort: palabra interrogativa + verbo + sujeto: «Wo haben Sie Schmerzen?». El verbo queda siempre en posición 2.",
        "Pregunta de sí o no: verbo al inicio, luego el sujeto: «Haben Sie Fieber?», «Nehmen Sie Medikamente?». No existe auxiliar como el «do» inglés.",
        "«Seit» + dativo con el verbo en presente expresa «desde hace»: «Seit drei Tagen habe ich Husten.» No uses el Perfekt para algo que dura hasta ahora.",
        "Respuesta a una pregunta negativa: «Haben Sie keine Allergien?». Si sí las tiene, dice «Doch» (sí, las tengo); si no, «Nein, keine»."
      ],
      tip: "«Seit wann?» pregunta por el punto de inicio y «Wie lange?» por la duración total; en urgencias usa «Seit wann?» primero. Para localizar el dolor usa «Wo genau?» y deja que el paciente señale con la mano.",
      exercises: [
        { type: "mc", q: "¿Qué pregunta significa «¿desde cuándo tiene fiebre?»", options: ["Wie lange haben Sie Fieber gehabt?", "Seit wann haben Sie Fieber?", "Wann Sie haben Fieber?", "Wo haben Sie Fieber?"], answer: 1, explain: "«Seit wann» + presente es la forma natural de preguntar desde cuándo." },
        { type: "fill", q: "Wo ___ tut es weh? (exactamente)", answer: ["genau"], explain: "«Wo genau tut es weh?» pide una localización precisa." },
        { type: "order", q: "Ordena la pregunta.", words: ["Seit", "wann", "haben", "Sie", "die", "Schmerzen"], answer: "Seit wann haben Sie die Schmerzen", explain: "«Seit wann» ocupa la posición 1 y el verbo la 2." },
        { type: "mc", q: "El paciente tiene alergias y le preguntan «Haben Sie keine Allergien?». ¿Qué responde?", options: ["Ja", "Doch", "Nein, doch", "Gern"], answer: 1, explain: "«Doch» contradice una pregunta negativa: sí las tengo." },
        { type: "fill", q: "___ Sie Medikamente? (¿Toma medicamentos?, verbo nehmen)", answer: ["nehmen"], explain: "En la pregunta de sí o no el verbo va al inicio: «Nehmen Sie Medikamente?»." },
        { type: "mc", q: "¿Cuál es una pregunta de sí o no correcta?", options: ["Haben Sie Fieber?", "Wo Sie haben Fieber?", "Haben Fieber Sie?", "Sie haben Fieber wann?"], answer: 0, explain: "Verbo al inicio y luego el sujeto." }
      ]
    },
    {
      id: "m1l3",
      title: "Hablar del pasado: Perfekt y falsos amigos",
      minutes: 15,
      goal: "Al terminar podrás preguntar y contar hechos pasados con Perfekt eligiendo bien entre haben y sein, y evitarás los falsos amigos médicos más comunes.",
      intro: "El Perfekt es el pasado de la conversación clínica: «Haben Sie Fieber gehabt?», «Sind Sie gestürzt?». Se forma con haben o sein en posición 2 y el participio al final. El error típico es olvidar el sein con verbos de movimiento o cambio de estado, o dejar el participio en medio de la oración.",
      vocab: [
        { en: "gehabt (haben)", ipa: "/ɡəˈhaːpt/", es: "tenido; ich habe gehabt", ex: "Haben Sie in den letzten Tagen Fieber gehabt?" },
        { en: "gewesen (sein)", ipa: "/ɡəˈveːzn̩/", es: "sido o estado; ich bin gewesen", ex: "Sind Sie in letzter Zeit im Ausland gewesen?" },
        { en: "gestürzt (stürzen)", ipa: "/ɡəˈʃtʏʁtst/", es: "caído de forma violenta; ich bin gestürzt", ex: "Der Patient ist auf der Treppe gestürzt." },
        { en: "gefallen (fallen)", ipa: "/ɡəˈfalən/", es: "caído; ich bin gefallen", ex: "Sie ist aus dem Bett gefallen." },
        { en: "gegessen (essen)", ipa: "/ɡəˈɡɛsn̩/", es: "comido; ich habe gegessen", ex: "Was haben Sie heute gegessen?" },
        { en: "getrunken (trinken)", ipa: "/ɡəˈtʁʊŋkn̩/", es: "bebido; ich habe getrunken", ex: "Haben Sie genug getrunken?" },
        { en: "erbrochen (erbrechen)", ipa: "/ɛɐ̯ˈbʁɔxn̩/", es: "vomitado; ich habe erbrochen", ex: "Er hat dreimal erbrochen." },
        { en: "eingenommen (einnehmen)", ipa: "/ˈaɪ̯nɡəˌnɔmən/", es: "tomado (un medicamento)", ex: "Haben Sie die Tablette eingenommen?" },
        { en: "aufgewacht (aufwachen)", ipa: "/ˈaʊ̯fɡəˌvaxt/", es: "despertado; ich bin aufgewacht", ex: "Ich bin nachts mit Atemnot aufgewacht." },
        { en: "operiert (operieren)", ipa: "/opeˈʁiːɐ̯t/", es: "operado", ex: "Man hat den Patienten gestern operiert." },
        { en: "das Gift", ipa: "/ɡɪft/", es: "el veneno o la toxina (falso amigo: no es «regalo»)", ex: "Das Gift einer Wespe kann eine Allergie auslösen." },
        { en: "aktuell", ipa: "/akˈtu̯ɛl/", es: "actual, en este momento (falso amigo de «actual» solo en parte)", ex: "Welche Medikamente nehmen Sie aktuell?" }
      ],
      phrases: [
        { en: "Haben Sie Fieber gehabt?", es: "¿Ha tenido fiebre?", use: "Correcto y comprensible; en el habla clínica también se oye «Hatten Sie Fieber?»." },
        { en: "Sind Sie gestürzt?", es: "¿Se ha caído?", use: "Tras un traumatismo; sein porque hay un cambio de lugar." },
        { en: "Waren Sie bewusstlos?", es: "¿Perdió el conocimiento?", use: "Forma natural con el pretérito de sein." },
        { en: "Haben Sie erbrochen?", es: "¿Ha vomitado?", use: "Alternativa coloquial: «Mussten Sie sich übergeben?»." },
        { en: "Wann haben Sie zuletzt etwas gegessen?", es: "¿Cuándo comió algo por última vez?", use: "Antes de una anestesia o una endoscopia." },
        { en: "Haben Sie Ihre Tabletten heute eingenommen?", es: "¿Ya tomó sus pastillas hoy?", use: "Para verificar la adherencia al tratamiento." },
        { en: "Sind Sie schon einmal operiert worden?", es: "¿Lo han operado alguna vez?", use: "Frase fija con «worden»; aprende la expresión completa." }
      ],
      text: {
        type: "dialogue",
        title: "Nach dem Sturz",
        context: "En urgencias, una médica pregunta a un paciente que se cayó por las escaleras.",
        lines: [
          { who: "Ärztin", en: "Guten Tag, Herr Krause. Was ist passiert?" },
          { who: "Patient", en: "Ich bin gestern Abend die Treppe hinuntergefallen." },
          { who: "Ärztin", en: "Haben Sie sich den Kopf angeschlagen?" },
          { who: "Patient", en: "Ja, ich habe mir den Kopf an der Wand angeschlagen." },
          { who: "Ärztin", en: "Waren Sie danach bewusstlos?" },
          { who: "Patient", en: "Nein, ich bin sofort wieder aufgestanden." },
          { who: "Ärztin", en: "Haben Sie erbrochen?" },
          { who: "Patient", en: "Ja, einmal. Ich habe auch starke Kopfschmerzen bekommen." },
          { who: "Ärztin", en: "Haben Sie danach etwas gegessen oder getrunken?" },
          { who: "Patient", en: "Ich habe nur ein Glas Wasser getrunken." },
          { who: "Ärztin", en: "Haben Sie heute Ihre Tabletten eingenommen?" },
          { who: "Patient", en: "Ja, heute früh habe ich meine Tabletten genommen." },
          { who: "Ärztin", en: "Gut. Dann untersuche ich Sie jetzt und wir machen ein CT vom Kopf." },
          { who: "Patient", en: "Danke, Frau Doktor." }
        ]
      },
      grammar: [
        "Perfekt = haben o sein conjugado en posición 2 + participio II al final: «Ich habe Fieber gehabt.», «Ich bin gestürzt.».",
        "Se usa sein con verbos de movimiento o cambio de estado: fallen, stürzen, aufstehen, aufwachen, einschlafen, werden, bleiben y sein. Casi todos los demás llevan haben.",
        "Participios: regulares ge-…-t (gemacht); irregulares ge-…-en (getrunken, gegessen, gefallen); separables con ge en medio (aufgewacht, eingenommen); sin ge los verbos en -ieren y con be-, er-, ver-, ent- (operiert, untersucht, erbrochen, bekommen).",
        "En la conversación el Perfekt cubre todo el pasado, también «ayer» (en español, pretérito). Con haben, sein y los modales se prefiere el pretérito: «Hatten Sie Fieber?», «Waren Sie bewusstlos?», «Konnten Sie laufen?»."
      ],
      tip: "Falsos amigos: das Gift es veneno (no regalo), sensibel es delicado o sensible al estímulo (sensato se dice vernünftig), bekommen es recibir (no «volverse») y die Praxis es el consultorio. Con aktuell piensa en «ahora mismo».",
      exercises: [
        { type: "mc", q: "Elige el auxiliar correcto: «___ Sie gestürzt?»", options: ["Haben", "Sind", "Werden", "Hatten"], answer: 1, explain: "Stürzen implica un cambio de lugar, por eso lleva sein: «Sind Sie gestürzt?»." },
        { type: "fill", q: "Haben Sie Fieber ___? (participio de haben)", answer: ["gehabt"], explain: "El participio de haben es «gehabt» y va al final." },
        { type: "order", q: "Ordena la oración.", words: ["Ich", "bin", "gestern", "auf", "der", "Treppe", "gestürzt"], answer: "Ich bin gestern auf der Treppe gestürzt", explain: "El auxiliar queda en posición 2 y el participio al final." },
        { type: "mc", q: "«Das Gift» significa en español:", options: ["el regalo", "el veneno", "la dosis", "la fiebre"], answer: 1, explain: "Es un falso amigo: Gift = veneno o toxina." },
        { type: "fill", q: "Ich bin nachts mit Atemnot ___. (me desperté)", answer: ["aufgewacht"], explain: "Aufwachen es separable y usa sein: «bin aufgewacht»." },
        { type: "mc", q: "¿Cuál es el participio de «untersuchen»?", options: ["geuntersucht", "untersucht", "untergesucht", "untersuchen"], answer: 1, explain: "Los verbos con prefijo inseparable como unter- no añaden ge-." }
      ]
    },
    {
      id: "m1l4",
      title: "Números, fechas, horas, dosis y signos vitales",
      minutes: 15,
      goal: "Al terminar podrás decir en voz alta signos vitales, dosis, fechas y horas, usando la coma decimal y el reloj de 24 horas.",
      intro: "Los números son críticos en medicina y el alemán tiene dos trampas para el hispanohablante: se dicen al revés (21 es «einundzwanzig», uno y veinte) y los decimales llevan coma, no punto. Además, en el hospital se usa el reloj de 24 horas y el coloquial «halb vier» significa 3:30, no 4:30.",
      vocab: [
        { en: "der Blutdruck", ipa: "/ˈbluːtdʁʊk/", es: "la presión arterial", ex: "Der Blutdruck liegt bei hundertzwanzig zu achtzig." },
        { en: "der Puls", ipa: "/pʊls/", es: "el pulso, la frecuencia cardíaca", ex: "Der Puls beträgt zweiundsiebzig pro Minute." },
        { en: "die Temperatur", ipa: "/tɛmpəʁaˈtuːɐ̯/", es: "la temperatura", ex: "Die Temperatur beträgt achtunddreißig Komma fünf Grad." },
        { en: "die Sauerstoffsättigung", ipa: "/ˈzaʊ̯ɐʃtɔfˌzɛtɪɡʊŋ/", es: "la saturación de oxígeno", ex: "Die Sauerstoffsättigung liegt bei sechsundneunzig Prozent." },
        { en: "die Atemfrequenz", ipa: "/ˈaːtəmfʁeˌkvɛnts/", es: "la frecuencia respiratoria", ex: "Die Atemfrequenz beträgt sechzehn pro Minute." },
        { en: "das Gewicht", ipa: "/ɡəˈvɪçt/", es: "el peso", ex: "Das Gewicht beträgt zweiundsiebzig Kilogramm." },
        { en: "die Größe", ipa: "/ˈɡʁøːsə/", es: "la estatura", ex: "Die Größe beträgt ein Meter fünfundsiebzig." },
        { en: "das Milligramm", ipa: "/mɪliˈɡʁam/", es: "el miligramo (mg)", ex: "Geben Sie fünfhundert Milligramm." },
        { en: "das Mikrogramm", ipa: "/mikʁoˈɡʁam/", es: "el microgramo (µg)", ex: "Das Pflaster gibt fünfundzwanzig Mikrogramm pro Stunde ab." },
        { en: "die Tablette", ipa: "/taˈblɛtə/", es: "la tableta o pastilla", ex: "Nehmen Sie morgens eine Tablette." },
        { en: "zweimal täglich", ipa: "/ˈtsvaɪ̯maːl ˈtɛːklɪç/", es: "dos veces al día", ex: "Nehmen Sie das Medikament zweimal täglich." },
        { en: "halb vier", ipa: "/halp fiːɐ̯/", es: "las tres y media (15:30), no las cuatro y media", ex: "Der Termin ist heute um halb vier." }
      ],
      phrases: [
        { en: "Der Blutdruck beträgt 120 zu 80.", es: "La presión arterial es 120 sobre 80.", use: "Para informar los signos vitales; también se oye «über»." },
        { en: "Die Temperatur liegt bei 38,5 Grad.", es: "La temperatura es de 38,5 grados.", use: "Se lee «achtunddreißig Komma fünf»." },
        { en: "Nehmen Sie dreimal täglich eine Tablette.", es: "Tome una tableta tres veces al día.", use: "Indicación de dosificación al paciente." },
        { en: "Wann sind Sie geboren?", es: "¿Cuándo nació?", use: "Para pedir la fecha de nacimiento, que se dice en el orden día, mes, año." },
        { en: "Wie viel wiegen Sie und wie groß sind Sie?", es: "¿Cuánto pesa y cuánto mide?", use: "Para el cálculo de dosis o el índice de masa corporal." },
        { en: "Der Termin ist am 22. Oktober um 15 Uhr 30.", es: "La cita es el 22 de octubre a las 15:30.", use: "Se dice «am zweiundzwanzigsten Oktober»." },
        { en: "Das Medikament hat 0,5 mg.", es: "El medicamento tiene 0,5 mg.", use: "Se lee «null Komma fünf Milligramm»." }
      ],
      text: {
        type: "dialogue",
        title: "Übergabe der Vitalwerte",
        context: "Una médica y una enfermera repasan los signos vitales y una indicación de un paciente (ejemplo didáctico, no es una guía de dosificación).",
        lines: [
          { who: "Ärztin", en: "Wie sind die Vitalwerte von Herrn Braun?" },
          { who: "Pflegekraft", en: "Der Blutdruck liegt bei hundertdreißig zu fünfundachtzig." },
          { who: "Ärztin", en: "Und der Puls?" },
          { who: "Pflegekraft", en: "Zweiundneunzig pro Minute, regelmäßig. Die Temperatur beträgt achtunddreißig Komma fünf Grad." },
          { who: "Ärztin", en: "Und die Atemfrequenz?" },
          { who: "Pflegekraft", en: "Sechzehn pro Minute." },
          { who: "Ärztin", en: "Wie ist die Sauerstoffsättigung?" },
          { who: "Pflegekraft", en: "Vierundneunzig Prozent unter Raumluft." },
          { who: "Ärztin", en: "Welches Gewicht hat er? Ich brauche es für die Dosis." },
          { who: "Pflegekraft", en: "Zweiundsiebzig Kilogramm, gemessen heute um sieben Uhr dreißig." },
          { who: "Ärztin", en: "Gut. Geben Sie ihm bitte fünfhundert Milligramm Paracetamol, bis zu dreimal täglich." },
          { who: "Pflegekraft", en: "Alles klar. Die Kontrolle ist am zweiundzwanzigsten Oktober um fünfzehn Uhr." }
        ]
      },
      grammar: [
        "Los decimales llevan coma: 38,5 se lee «achtunddreißig Komma fünf» y 0,5 «null Komma fünf». Los miles se separan con punto o espacio (1.000, tausend).",
        "De 21 a 99 va primero la unidad: 21 einundzwanzig, 72 zweiundsiebzig. Presión «120 zu 80» se dice «hundertzwanzig zu achtzig» (o «über»); años: 2026 es «zweitausendsechsundzwanzig».",
        "Fechas en el orden día, mes, año (22.10.2026). Los ordinales hasta 19 llevan -te y desde 20 llevan -ste: «am zweiundzwanzigsten Oktober», «am dritten Mai».",
        "Hora oficial de 24 horas: 15:30 es «fünfzehn Uhr dreißig». Coloquial: «halb vier» = 15:30, «Viertel nach drei» = 15:15, «Viertel vor vier» = 15:45.",
        "En dosis di mg «Milligramm» y µg «Mikrogramm», sin abreviar: confundir mg con µg es un error de mil veces. Esquema «1-0-1» = una tableta por la mañana y otra por la noche."
      ],
      tip: "Trampa para hispanohablantes: «halb vier» no es «medio cuatro» ni 4:30. Con las dosis, repite siempre la cifra y la unidad en voz alta («fünfhundert Milligramm») para evitar errores.",
      exercises: [
        { type: "mc", q: "¿Cómo se lee 38,5 °C?", options: ["achtunddreißig Punkt fünf", "achtunddreißig Komma fünf", "dreiundachtzig Komma fünf", "achtunddreißig und fünf"], answer: 1, explain: "Se lee con «Komma»; además, 38 es «acht und dreißig»." },
        { type: "fill", q: "Der Blutdruck beträgt hundertzwanzig ___ achtzig. (preposición, «sobre»)", answer: ["zu", "über"], explain: "«Zu» (o «über») une sistólica y diastólica." },
        { type: "order", q: "Ordena la indicación.", words: ["Nehmen", "Sie", "dreimal", "täglich", "eine", "Tablette"], answer: "Nehmen Sie dreimal täglich eine Tablette", explain: "El imperativo de cortesía lleva el verbo seguido de «Sie»." },
        { type: "mc", q: "¿Qué hora es «halb vier»?", options: ["4:30", "3:30", "3:15", "4:15"], answer: 1, explain: "«Halb vier» es media hora hacia las cuatro: las 3:30." },
        { type: "fill", q: "Das Fieber beträgt achtunddreißig ___ fünf Grad. (separador decimal)", answer: ["komma"], explain: "En alemán se dice «Komma» y se escribe coma." },
        { type: "mc", q: "El esquema «1-0-1» significa:", options: ["una tableta mañana y noche", "una tableta al mediodía", "tres tabletas al día", "una tableta solo por la mañana"], answer: 0, explain: "El orden es mañana, mediodía, noche: 1-0-1 es mañana y noche." }
      ]
    }
  ]
});
