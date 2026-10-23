(window.COURSE = window.COURSE || []).push({
  id: "m6", n: 6,
  title: "Lectura de artículos",
  en: "Reading papers",
  summary: "Aprendes a leer un abstract en tres minutos, reconocer el diseño de un estudio, leer y decir las estadísticas en inglés y resumir un artículo en voz alta en un journal club.",
  lessons: [
    {
      id: "m6l1",
      title: "Anatomía de un artículo y abstract en 3 minutos",
      minutes: 15,
      goal: "Al terminar podrás leer un abstract en unos tres minutos y extraer población, intervención, comparación y desenlace principal.",
      intro: "Casi todos los artículos siguen la estructura IMRaD: Introduction, Methods, Results and Discussion. Para decidir si vale la pena leer el artículo completo, empieza por el abstract: primero el título y las conclusiones, luego los resultados del desenlace principal y al final los métodos. El error típico del hispanohablante es traducir palabra por palabra en vez de buscar las palabras señal (aim, we enrolled, primary outcome, we conclude) y el marco PICO.",
      vocab: [
        { en: "abstract", ipa: "/ˈæbstrækt/", es: "resumen estructurado del artículo", ex: "I read the abstract first to decide if the paper is relevant." },
        { en: "IMRaD", ipa: "/ˈɪmræd/", es: "estructura Introducción, Métodos, Resultados y Discusión", ex: "Most original research papers follow the IMRaD format." },
        { en: "objective (aim)", ipa: "/əbˈdʒɛktɪv/ (/eɪm/)", es: "objetivo", ex: "The aim of this study was to compare two treatments." },
        { en: "PICO", ipa: "/ˈpiːkoʊ/", es: "población, intervención, comparación, desenlace", ex: "In PICO, the I stands for intervention." },
        { en: "primary outcome", ipa: "/ˈpraɪmɛri ˈaʊtkʌm/", es: "desenlace principal", ex: "The primary outcome was change in systolic blood pressure." },
        { en: "to enroll", ipa: "/tuː ɪnˈroʊl/", es: "reclutar, incluir en el estudio", ex: "We enrolled 600 adults with stage 1 hypertension." },
        { en: "to assign", ipa: "/tuː əˈsaɪn/", es: "asignar", ex: "Participants were randomly assigned to one of two groups." },
        { en: "baseline", ipa: "/ˈbeɪslaɪn/", es: "basal, al inicio del estudio", ex: "Baseline characteristics were similar in both groups." },
        { en: "follow-up", ipa: "/ˈfɑːloʊ ʌp/", es: "seguimiento", ex: "Follow-up lasted 12 weeks." },
        { en: "adverse event", ipa: "/ædˈvɜːrs ɪˈvɛnt/", es: "evento adverso", ex: "Serious adverse events were rare." },
        { en: "conclusion", ipa: "/kənˈkluːʒn/", es: "conclusión", ex: "The conclusion states what the authors think the results mean." },
        { en: "full text", ipa: "/fʊl tɛkst/", es: "texto completo", ex: "If the abstract is relevant, I download the full text." }
      ],
      phrases: [
        { en: "The aim of this study was to determine whether…", es: "El objetivo de este estudio fue determinar si…", use: "Frase señal del objetivo; búscala al inicio del abstract." },
        { en: "We enrolled 600 adults aged 40 to 70 years.", es: "Incluimos a 600 adultos de 40 a 70 años.", use: "Señal de la P de PICO (población)." },
        { en: "Participants were randomly assigned to the intervention or usual care.", es: "Los participantes fueron asignados al azar a la intervención o al tratamiento habitual.", use: "Señal de I y C (intervención y comparación)." },
        { en: "The primary outcome was the change in systolic blood pressure.", es: "El desenlace principal fue el cambio en la presión sistólica.", use: "Señal de la O de PICO; es el dato clave." },
        { en: "Mean systolic blood pressure fell by 9.1 mm Hg.", es: "La presión sistólica media bajó 9.1 mm Hg.", use: "Para leer un resultado numérico." },
        { en: "We conclude that the program lowered blood pressure.", es: "Concluimos que el programa redujo la presión arterial.", use: "Señal de las conclusiones; léelas primero." },
        { en: "Longer trials are needed.", es: "Se necesitan ensayos más largos.", use: "Frase común al final: indica límites del estudio." }
      ],
      text: {
        type: "reading",
        title: "A practice abstract",
        context: "Abstract ficticio de práctica (no es un estudio real), escrito con estructura IMRaD.",
        paragraphs: [
          "Background: Walking programs are often recommended for hypertension, but evidence from randomized trials in primary care is limited. We tested whether a supervised program lowers blood pressure compared with usual care.",
          "Methods: In this randomized, parallel-group trial, we enrolled 600 adults aged 40 to 70 years with stage 1 hypertension who were not taking medication. Participants were assigned 1:1 to a 12-week supervised walking program or usual care. The primary outcome was the change in office systolic blood pressure at 12 weeks.",
          "Results: Of 600 participants, 574 (96%) completed follow-up. Mean systolic blood pressure fell by 9.1 mm Hg in the walking group and by 2.9 mm Hg in the usual-care group (difference, −6.2 mm Hg; 95% CI, −8.1 to −4.3; P<0.001). Adverse events were rare and similar between groups.",
          "Conclusions: A supervised walking program lowered systolic blood pressure at 12 weeks compared with usual care in adults with stage 1 hypertension. Longer trials are needed to determine effects on cardiovascular events."
        ]
      },
      grammar: [
        "Los métodos y resultados van en pasado simple y en voz pasiva (“Participants were assigned…”, “Data were analyzed…”). La voz pasiva es normal en inglés científico; no la evites.",
        "Los abstracts estructurados te dicen dónde buscar: Background (por qué), Methods (cómo), Results (qué), Conclusions (qué significa). Lee en el orden que te sirva, no en el orden impreso.",
        "Los números: “mm Hg” se lee “millimeters of mercury”; “9.1” se lee “nine point one”; “P<0.001” se lee “P less than point zero zero one”.",
        "False friend: “actual” significa real, no “actual” en el sentido de “actualmente” (eso es currently). “Eventually” es “finalmente”, no “eventualmente”."
      ],
      tip: "Lee un abstract en este orden: título, conclusiones, resultado del desenlace principal y al final los métodos. Si después de tres minutos no puedes decir la PICO, aún no entendiste el artículo.",
      exercises: [
        { type: "mc", q: "¿Qué orden de lectura es más eficiente para un abstract?", options: ["De la primera a la última palabra, sin saltar nada", "Título, conclusiones, resultado principal y luego métodos", "Solo las referencias", "Primero los efectos adversos"], answer: 1, explain: "Empezar por las conclusiones y el resultado principal te dice rápido si el artículo importa." },
        { type: "fill", q: "In PICO, the P stands for ___ (población).", answer: ["population", "patients", "participants"], explain: "P es Population o Patients: quién fue estudiado." },
        { type: "order", q: "Ordena la oración", words: ["outcome", "The", "was", "primary", "the", "change", "in", "blood", "pressure"], answer: "The primary outcome was the change in blood pressure", explain: "Frase señal clásica del desenlace principal." },
        { type: "mc", q: "“Participants were randomly assigned to two groups.” ¿Dónde aparece normalmente esta frase?", options: ["Background", "Results", "Methods", "References"], answer: 2, explain: "Cómo se asignaron los participantes es parte de los métodos." },
        { type: "fill", q: "Follow-up lasted 12 weeks. “Follow-up” significa ___ en español. (una palabra)", answer: ["seguimiento"], explain: "Follow-up es el período en que se observa a los participantes después del inicio." },
        { type: "mc", q: "¿Qué indica la frase “Longer trials are needed”?", options: ["El estudio demostró todo", "El estudio es definitivo", "El tema ya no se investiga", "Hay incertidumbre y faltan estudios más largos"], answer: 3, explain: "Es una frase típica de límites: los resultados no son definitivos." }
      ]
    },
    {
      id: "m6l2",
      title: "Diseños de estudio",
      minutes: 15,
      goal: "Al terminar podrás identificar en inglés el diseño de un estudio y explicar qué puede y qué no puede demostrar.",
      intro: "El diseño determina qué conclusiones son válidas. Un RCT (ensayo clínico aleatorizado) es el mejor diseño para probar una intervención; los estudios de cohorte y casos y controles son observacionales y pueden mostrar asociación, no tanto causalidad. Un error típico es llamar “cohort” a cualquier estudio con seguimiento, o confundir case-control con case series. Las revisiones sistemáticas y los metaanálisis combinan estudios ya hechos, no reclutan pacientes.",
      vocab: [
        { en: "randomized controlled trial (RCT)", ipa: "/ˈrændəmaɪzd kənˈtroʊld ˈtraɪəl/", es: "ensayo clínico aleatorizado", ex: "An RCT assigns patients to groups by chance." },
        { en: "randomization", ipa: "/ˌrændəmɪˈzeɪʃn/", es: "aleatorización", ex: "Randomization balances known and unknown confounders." },
        { en: "blinding", ipa: "/ˈblaɪndɪŋ/", es: "enmascaramiento (cegamiento)", ex: "In a double-blind trial, neither patients nor investigators know the assignment." },
        { en: "placebo", ipa: "/pləˈsiːboʊ/", es: "placebo", ex: "Half of the patients received a placebo." },
        { en: "cohort study", ipa: "/ˈkoʊhɔːrt ˈstʌdi/", es: "estudio de cohorte", ex: "A cohort study follows exposed and unexposed people over time." },
        { en: "case-control study", ipa: "/keɪs kənˈtroʊl ˈstʌdi/", es: "estudio de casos y controles", ex: "A case-control study compares people with and without the disease." },
        { en: "cross-sectional study", ipa: "/ˌkrɔːs ˈsɛkʃənl ˈstʌdi/", es: "estudio transversal", ex: "A cross-sectional study measures prevalence at one point in time." },
        { en: "systematic review", ipa: "/ˌsɪstəˈmætɪk rɪˈvjuː/", es: "revisión sistemática", ex: "A systematic review uses a prespecified search strategy." },
        { en: "meta-analysis", ipa: "/ˌmɛtə əˈnæləsɪs/", es: "metaanálisis (combinación estadística de estudios)", ex: "The meta-analysis pooled data from eight trials." },
        { en: "intention-to-treat analysis", ipa: "/ɪnˈtɛnʃn tuː triːt əˈnæləsɪs/", es: "análisis por intención de tratar", ex: "Intention-to-treat analysis keeps patients in the group they were assigned to." },
        { en: "confounder", ipa: "/kənˈfaʊndər/", es: "factor de confusión", ex: "Smoking is a common confounder." },
        { en: "retrospective / prospective", ipa: "/ˌrɛtroʊˈspɛktɪv / prəˈspɛktɪv/", es: "retrospectivo / prospectivo", ex: "This was a retrospective cohort study using medical records." }
      ],
      phrases: [
        { en: "This was a double-blind, placebo-controlled randomized trial.", es: "Fue un ensayo aleatorizado, doble ciego, controlado con placebo.", use: "Para describir un RCT completo." },
        { en: "The authors followed two cohorts for ten years.", es: "Los autores siguieron dos cohortes durante diez años.", use: "Para describir un estudio de cohorte." },
        { en: "Cases were matched to controls by age and sex.", es: "Los casos se parearon con controles por edad y sexo.", use: "Típico de un estudio de casos y controles." },
        { en: "This design cannot establish causation.", es: "Este diseño no puede establecer causalidad.", use: "Para señalar el límite de un diseño observacional o transversal." },
        { en: "The analysis was by intention to treat.", es: "El análisis fue por intención de tratar.", use: "Para describir cómo se analizaron los pacientes." },
        { en: "The meta-analysis pooled the results of eight randomized trials.", es: "El metaanálisis combinó los resultados de ocho ensayos aleatorizados.", use: "Para describir un metaanálisis." },
        { en: "Which design is best to answer this question?", es: "¿Qué diseño es el mejor para responder esta pregunta?", use: "Para iniciar la discusión en un journal club." }
      ],
      text: {
        type: "dialogue",
        title: "Journal club: which design?",
        context: "Una estudiante y un residente identifican el diseño de tres estudios ficticios y discuten qué pueden demostrar.",
        lines: [
          { who: "Student", en: "I’m confused. What is the difference between a cohort study and a case-control study?" },
          { who: "Resident", en: "In a cohort study, you start with exposure. You follow exposed and unexposed people over time and see who develops the outcome." },
          { who: "Student", en: "So you can calculate the incidence?" },
          { who: "Resident", en: "Exactly, and a relative risk. In a case-control study, you start with the outcome. You pick people with the disease and similar people without it, and you compare their past exposures." },
          { who: "Student", en: "Why would anyone do that?" },
          { who: "Resident", en: "It is faster and cheaper, and it works well for rare diseases. The measure of association is the odds ratio." },
          { who: "Student", en: "And a cross-sectional study?" },
          { who: "Resident", en: "You measure exposure and disease at the same time, like a survey. It gives you prevalence, but you cannot tell what came first." },
          { who: "Student", en: "What about randomized trials?" },
          { who: "Resident", en: "They are the strongest design for testing an intervention. Randomization balances confounders, and blinding reduces bias." },
          { who: "Student", en: "Some patients stop taking the drug. Do we exclude them from the analysis?" },
          { who: "Resident", en: "Not in an intention-to-treat analysis. Everyone is analyzed in the group they were randomized to, which preserves the benefit of randomization." },
          { who: "Student", en: "And a meta-analysis?" },
          { who: "Resident", en: "It statistically pools results from several studies, usually found through a systematic review. It is only as good as the studies it includes." }
        ]
      },
      grammar: [
        "Los diseños se usan como adjetivos compuestos con guion: “a double-blind trial”, “a placebo-controlled study”, “a 10-year follow-up”. El sustantivo no se pluraliza dentro del compuesto (“ten-year”, no “ten-years”).",
        "Para hablar de lo que un diseño puede hacer usa can / cannot: “A cross-sectional study cannot establish causation.” Para la probabilidad usa may / might.",
        "Ten cuidado: “control” puede ser sustantivo (el grupo comparador) y verbo (to control for confounders = ajustar por factores de confusión).",
        "“Trial” es ensayo; “test” es prueba. No digas “clinical test” para un ensayo clínico: es clinical trial."
      ],
      tip: "Para clasificar un estudio hazte dos preguntas: ¿los investigadores asignaron la intervención? (sí: ensayo; no: observacional) y ¿empezaron por la exposición o por el desenlace? (exposición: cohorte; desenlace: casos y controles).",
      exercises: [
        { type: "mc", q: "¿Qué diseño empieza seleccionando personas con la enfermedad y sin ella?", options: ["Cohort", "Cross-sectional", "Case-control", "Randomized trial"], answer: 2, explain: "En un casos y controles se parte del desenlace y se comparan exposiciones pasadas." },
        { type: "fill", q: "In a double-___ trial, neither patients nor investigators know the assignment. (ciego)", answer: ["blind"], explain: "Double-blind: ni pacientes ni investigadores saben quién recibe qué." },
        { type: "order", q: "Ordena la oración", words: ["cannot", "This", "establish", "design", "causation"], answer: "This design cannot establish causation", explain: "Cannot + verbo en infinitivo sin to." },
        { type: "mc", q: "En un análisis por intención de tratar, los pacientes que dejan el fármaco…", options: ["Se eliminan del análisis", "Se analizan en el grupo al que fueron asignados", "Se pasan al grupo contrario", "Se cuentan como muertes"], answer: 1, explain: "Intention-to-treat preserva la aleatorización al analizar a todos según su asignación original." },
        { type: "fill", q: "A ___ study measures disease and exposure at one point in time. (transversal)", answer: ["cross-sectional", "cross sectional"], explain: "Cross-sectional mide prevalencia; no establece qué ocurrió primero." },
        { type: "mc", q: "¿Qué medida de asociación se calcula típicamente en un estudio de casos y controles?", options: ["Odds ratio", "Prevalence only", "Incidence rate", "Number needed to treat"], answer: 0, explain: "En casos y controles se calcula el odds ratio porque no se conoce la incidencia." }
      ]
    },
    {
      id: "m6l3",
      title: "Estadística en inglés: cómo se lee y se dice",
      minutes: 15,
      goal: "Al terminar podrás leer en voz alta resultados estadísticos en inglés e interpretar hazard ratio, riesgo relativo, NNT, intervalo de confianza, sensibilidad y especificidad.",
      intro: "Un resultado estadístico se interpreta con tres preguntas: ¿qué tan grande es el efecto?, ¿qué tan preciso es (intervalo de confianza)? y ¿es clínicamente importante? Los ratios (HR, RR, OR) valen 1 cuando no hay diferencia; los intervalos que cruzan 1 no son significativos. El error típico es leer “p = 0.003” como “probabilidad de 0.3 %” o creer que odds ratio y relative risk son lo mismo; solo se parecen cuando el desenlace es raro.",
      vocab: [
        { en: "hazard ratio (HR)", ipa: "/ˈhæzərd ˈreɪʃioʊ/", es: "razón de riesgos instantáneos (análisis de supervivencia)", ex: "The hazard ratio for death was 0.66." },
        { en: "odds ratio (OR)", ipa: "/ɑːdz ˈreɪʃioʊ/", es: "razón de momios", ex: "The odds ratio was 0.64." },
        { en: "relative risk (risk ratio, RR)", ipa: "/ˈrɛlətɪv rɪsk/", es: "riesgo relativo", ex: "The relative risk was 0.67." },
        { en: "absolute risk reduction (ARR)", ipa: "/ˈæbsəluːt rɪsk rɪˈdʌkʃn/", es: "reducción absoluta del riesgo", ex: "The absolute risk reduction was 4 percentage points." },
        { en: "number needed to treat (NNT)", ipa: "/ˈnʌmbər ˈniːdəd tuː triːt/", es: "número necesario a tratar", ex: "The NNT was 25 over two years." },
        { en: "95% confidence interval (CI)", ipa: "/ˈnaɪnti faɪv pərˈsɛnt ˈkɑːnfədəns ˈɪntərvl/", es: "intervalo de confianza al 95 %", ex: "The 95% CI was 0.51 to 0.87." },
        { en: "p value", ipa: "/piː ˈvæljuː/", es: "valor de p", ex: "The p value was 0.003." },
        { en: "statistically significant", ipa: "/stəˈtɪstɪkli sɪɡˈnɪfɪkənt/", es: "estadísticamente significativo", ex: "The difference was statistically significant." },
        { en: "sensitivity", ipa: "/ˌsɛnsəˈtɪvəti/", es: "sensibilidad", ex: "The test has a sensitivity of 90 percent." },
        { en: "specificity", ipa: "/ˌspɛsəˈfɪsəti/", es: "especificidad", ex: "Specificity was 80 percent." },
        { en: "positive predictive value (PPV)", ipa: "/ˈpɑːzətɪv prɪˈdɪktɪv ˈvæljuː/", es: "valor predictivo positivo", ex: "The PPV was about 33 percent." },
        { en: "negative predictive value (NPV)", ipa: "/ˈnɛɡətɪv prɪˈdɪktɪv ˈvæljuː/", es: "valor predictivo negativo", ex: "The NPV was about 99 percent." }
      ],
      phrases: [
        { en: "The relative risk was 0.67, with a 95 percent confidence interval of 0.51 to 0.87.", es: "El riesgo relativo fue 0.67, con un intervalo de confianza al 95 % de 0.51 a 0.87.", use: "Forma estándar de leer un resultado." },
        { en: "The p value was 0.003, so the result is statistically significant.", es: "El valor de p fue 0.003, por lo tanto el resultado es estadísticamente significativo.", use: "Para interpretar p con el umbral habitual de 0.05." },
        { en: "The confidence interval does not include one.", es: "El intervalo de confianza no incluye el uno.", use: "Para ratios: significa que el resultado es significativo." },
        { en: "The absolute risk reduction was 4 percentage points, so the NNT was 25.", es: "La reducción absoluta del riesgo fue de 4 puntos porcentuales; el NNT fue 25.", use: "NNT = 1 entre la ARR (en fracción)." },
        { en: "The test has a sensitivity of 90 percent and a specificity of 80 percent.", es: "La prueba tiene una sensibilidad de 90 % y una especificidad de 80 %.", use: "Para describir una prueba diagnóstica." },
        { en: "A positive result has a PPV of only 33 percent.", es: "Un resultado positivo tiene un VPP de solo 33 %.", use: "Para explicar que un positivo no confirma la enfermedad." },
        { en: "It is statistically significant, but is it clinically important?", es: "Es estadísticamente significativo, pero ¿es clínicamente importante?", use: "Pregunta clave en un journal club." }
      ],
      text: {
        type: "reading",
        title: "Reading the numbers",
        context: "Texto ficticio de práctica, no es un estudio real: números inventados pero calculados de forma consistente.",
        paragraphs: [
          "In this fictitious trial, 2,000 adults at high cardiovascular risk were randomized to drug A or placebo, with 1,000 per group, and followed for two years. The primary outcome was heart attack, stroke, or cardiovascular death.",
          "The outcome occurred in 80 patients (8%) in the drug A group and in 120 patients (12%) in the placebo group. The relative risk was 0.67 (95% confidence interval, 0.51 to 0.87; p = 0.003). The absolute risk reduction was 4 percentage points, so the number needed to treat was 25 over two years. The odds ratio was 0.64, close to the relative risk because the outcome was fairly uncommon. In the time-to-event analysis, the hazard ratio was 0.66 (95% CI, 0.50 to 0.88).",
          "Now imagine a screening test used in 1,000 people, of whom 100 have the disease. The test is positive in 90 of the 100 who are sick (sensitivity 90%) and negative in 720 of the 900 who are healthy (specificity 80%). So 270 people test positive, but only 90 truly have the disease. The positive predictive value is therefore 33%, while the negative predictive value is 99%."
        ]
      },
      grammar: [
        "Cómo se dicen los números: 0.67 = “zero point six seven” (o “point six seven”); 95% = “ninety-five percent”; p = 0.003 = “p equals zero point zero zero three”; 8% frente a 12% = “eight percent versus twelve percent”.",
        "Ratios (HR, RR, OR): 1 = sin efecto; menos de 1 = reduce el riesgo; más de 1 = lo aumenta. Si el intervalo de confianza incluye 1, no es significativo. En diferencias absolutas (ARR), el valor nulo es 0.",
        "NNT = 1 ÷ ARR en fracción: 1 ÷ 0.04 = 25. Se redondea hacia arriba y siempre debe indicar el tiempo (“over two years”).",
        "Los valores predictivos dependen de la prevalencia; la sensibilidad y la especificidad no. Una prueba con buena sensibilidad y especificidad puede tener un VPP bajo si la enfermedad es poco común."
      ],
      tip: "Practica leer en voz alta cada resultado con la fórmula: valor, intervalo, p y qué significa. Si solo puedes decir el valor de p, aún no leíste el resultado completo.",
      exercises: [
        { type: "mc", q: "Si la ARR es 5 puntos porcentuales (0.05), ¿cuál es el NNT?", options: ["5", "20", "50", "0.05"], answer: 1, explain: "NNT = 1 ÷ 0.05 = 20." },
        { type: "fill", q: "A hazard ratio of 1.0 means there is no ___ between groups. (diferencia)", answer: ["difference", "effect"], explain: "Un ratio de 1 indica que no hay diferencia entre los grupos." },
        { type: "order", q: "Ordena la oración", words: ["does", "The", "include", "interval", "not", "confidence", "one"], answer: "The confidence interval does not include one", explain: "Con ratios, si el intervalo no incluye 1, el resultado es significativo." },
        { type: "mc", q: "El 8% de eventos con el tratamiento y el 12% con placebo. ¿Cuál es la ARR?", options: ["33 percent", "8 percentage points", "4 percentage points", "12 percent"], answer: 2, explain: "ARR = 12 % menos 8 % = 4 puntos porcentuales; el riesgo relativo es 0.67, una reducción relativa de 33 %." },
        { type: "fill", q: "A highly sensitive test helps to rule ___ the disease when it is negative. (descartar)", answer: ["out"], explain: "Una prueba muy sensible, cuando es negativa, ayuda a descartar la enfermedad (rule out)." },
        { type: "mc", q: "Hay 90 verdaderos positivos y 180 falsos positivos. ¿Cuál es el VPP?", options: ["33%", "90%", "80%", "75%"], answer: 0, explain: "VPP = verdaderos positivos ÷ todos los positivos = 90 ÷ 270 = 33 %." }
      ]
    },
    {
      id: "m6l4",
      title: "Leer rápido y críticamente; resumir en un journal club",
      minutes: 15,
      goal: "Al terminar podrás encontrar rápido los datos clave de un artículo, distinguir lenguaje cauteloso de afirmaciones causales y resumir un estudio en voz alta en un minuto.",
      intro: "Leer rápido no es leer menos, es leer con un propósito. Skimming es dar una mirada general para captar la idea; scanning es buscar un dato concreto (un número, un nombre). Los autores usan hedging (may, suggests, is associated with) para no afirmar más de lo que los datos permiten. El error típico del hispanohablante es traducir associated with como “causa” o dar por hecho que un estudio observacional demostró causalidad.",
      vocab: [
        { en: "to skim", ipa: "/tuː skɪm/", es: "leer por encima para captar la idea general", ex: "I skim the introduction and read the results carefully." },
        { en: "to scan", ipa: "/tuː skæn/", es: "buscar un dato concreto en un texto", ex: "I scan the results for the primary outcome." },
        { en: "hedging", ipa: "/ˈhɛdʒɪŋ/", es: "lenguaje cauteloso (no afirmar de más)", ex: "Words like may and suggests are examples of hedging." },
        { en: "association", ipa: "/əˌsoʊsiˈeɪʃn/", es: "asociación", ex: "The study found an association, not proof of cause." },
        { en: "causation", ipa: "/kɔːˈzeɪʃn/", es: "causalidad", ex: "Correlation does not imply causation." },
        { en: "limitation", ipa: "/ˌlɪmɪˈteɪʃn/", es: "limitación (del estudio)", ex: "One limitation is the short follow-up." },
        { en: "strength", ipa: "/streŋθ/", es: "fortaleza (del estudio)", ex: "A strength of the study is its large sample size." },
        { en: "residual confounding", ipa: "/rɪˈzɪdʒuəl kənˈfaʊndɪŋ/", es: "confusión residual (factores no medidos o mal ajustados)", ex: "Residual confounding may explain part of the association." },
        { en: "recall bias", ipa: "/ˈriːkɔːl ˈbaɪəs/", es: "sesgo de memoria", ex: "Self-reported diet is vulnerable to recall bias." },
        { en: "generalizability", ipa: "/ˌdʒɛnrəlaɪzəˈbɪləti/", es: "capacidad de generalizar los resultados", ex: "Generalizability is limited because only one hospital was studied." },
        { en: "sample size", ipa: "/ˈsæmpl saɪz/", es: "tamaño de muestra", ex: "The small sample size reduced the precision of the estimate." },
        { en: "journal club", ipa: "/ˈdʒɜːrnl klʌb/", es: "sesión de discusión crítica de un artículo", ex: "I am presenting a paper at journal club on Friday." }
      ],
      phrases: [
        { en: "Today I’ll summarize a paper on blood pressure and walking.", es: "Hoy voy a resumir un artículo sobre presión arterial y caminata.", use: "Apertura de un resumen oral." },
        { en: "The authors asked whether nut intake is associated with heart disease.", es: "Los autores se preguntaron si el consumo de nueces se asocia con enfermedad cardiaca.", use: "Para explicar la pregunta del estudio." },
        { en: "The main finding was a 20 percent lower risk.", es: "El hallazgo principal fue un riesgo 20 % menor.", use: "Para dar el resultado principal." },
        { en: "This suggests a benefit, but it does not prove it.", es: "Esto sugiere un beneficio, pero no lo demuestra.", use: "Para usar hedging con un diseño observacional." },
        { en: "One limitation is that diet was self-reported.", es: "Una limitación es que la dieta fue autorreportada.", use: "Para señalar un sesgo o límite." },
        { en: "The results may not apply to older adults.", es: "Los resultados podrían no aplicar a adultos mayores.", use: "Para hablar de generalizabilidad." },
        { en: "In my opinion, this would not change my practice because it is observational.", es: "En mi opinión, esto no cambiaría mi práctica porque es observacional.", use: "Para cerrar con tu postura." }
      ],
      text: {
        type: "reading",
        title: "A one-minute summary",
        context: "Resumen oral modelo para un journal club, sobre un estudio de cohorte ficticio de práctica (no es un artículo real).",
        paragraphs: [
          "Today I’ll summarize a fictitious cohort study. The authors asked whether eating nuts is associated with a lower risk of heart disease. They followed 12,000 adults for ten years.",
          "People who ate nuts at least four times a week had a lower risk of heart disease than people who rarely ate nuts (hazard ratio 0.80; 95% CI 0.68 to 0.94). The strengths of the study are its large size and its long follow-up.",
          "However, there are important limitations. Because this is an observational study, the results show an association, not causation. People who eat nuts may also exercise more or smoke less, so residual confounding is possible. Diet was self-reported, which may cause recall bias.",
          "In my opinion, the findings suggest that nuts may be part of a healthy diet, but a randomized trial would be needed to show that nuts reduce heart disease. I would not change my practice based on this paper alone. Thank you; I’m happy to take questions."
        ]
      },
      grammar: [
        "Hedging: verbos modales (may, might, could), verbos cautelosos (suggest, indicate, appear to) y frases como “is associated with” y “is consistent with”. Verbos fuertes (prove, show, cause) solo con diseños que lo permitan, como un RCT.",
        "“Show” y “suggest” no son sinónimos: “The trial showed a benefit” (resultado fuerte) frente a “The cohort suggests a benefit” (más débil).",
        "Para criticar con educación: “One limitation is…”, “I wonder whether…”, “It would be helpful to know…”. Evita “The authors made a mistake”; es más natural decir “This could be a limitation”.",
        "Skim y scan son verbos distintos: skim = captar la idea general; scan = buscar un dato. En un artículo, haz primero skim del abstract y luego scan de las tablas."
      ],
      tip: "Usa una plantilla de 60 segundos: pregunta, diseño, resultado principal, una fortaleza, una o dos limitaciones y qué harías tú. Practícala en voz alta con un artículo cada semana.",
      exercises: [
        { type: "mc", q: "Un estudio de cohorte observacional encuentra que el consumo de café se asocia con menor mortalidad. ¿Cuál es la frase más apropiada?", options: ["Coffee reduces mortality.", "Coffee intake is associated with lower mortality.", "Coffee proves a benefit.", "Coffee causes longer life."], answer: 1, explain: "Un diseño observacional permite hablar de asociación (is associated with), no de causalidad." },
        { type: "fill", q: "Diet was self-reported, so ___ bias is possible. (sesgo de memoria; una palabra)", answer: ["recall"], explain: "Recall bias aparece cuando los participantes recuerdan mal una exposición." },
        { type: "order", q: "Ordena la oración", words: ["not", "The", "may", "results", "generalizable", "be", "older", "to", "adults"], answer: "The results may not be generalizable to older adults", explain: "May not + be + adjetivo: lenguaje cauteloso sobre generalizabilidad." },
        { type: "mc", q: "Buscas el número de participantes en un artículo. ¿Qué estrategia usas?", options: ["Scan the methods and results", "Skim the discussion", "Read every reference", "Translate every sentence"], answer: 0, explain: "Scanning es buscar un dato concreto, como el tamaño de muestra, en métodos o resultados." },
        { type: "fill", q: "A ___ of the study is its large sample size. (fortaleza)", answer: ["strength"], explain: "Strength es una fortaleza; limitation es una debilidad." },
        { type: "mc", q: "¿Cuál de estas frases contiene hedging?", options: ["The drug cures the disease.", "The drug definitely works.", "The drug may reduce symptoms.", "The drug is the best treatment."], answer: 2, explain: "May introduce incertidumbre; las otras opciones son afirmaciones categóricas." }
      ]
    }
  ]
});
