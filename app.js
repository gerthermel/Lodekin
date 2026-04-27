/* global $ */

// ----------------------
// 1) KÜSIMUSTE ANDMED
// ----------------------
// Õige vastus(ed): correct = [indexid], kus indexid viitavad options järjekorrale ENNE shuffle’it.
// Kood shuffle’b valikud, nii et correct konverteeritakse automaatselt uutele indexitele.
// Väärteomenetluse küsimused 1–60
// JS quiz array

const QUESTIONS = [
  {
    id: 1,
    text: "Mis on väärtegu?",
    options: [
      "Väärtegu on käesolevas seadustikus või muus seaduses sätestatud süütegu, mille eest on ette nähtud rahatrahv, arest või sõiduki juhtimise õiguse äravõtmine",
      "Kuritegu, mille eest karistatakse vangistusega",
      "Tsiviilõiguslik rikkumine",
      "Distsiplinaarrikkumine töökohal"
    ],
    correct: [0]
  },
  {
    id: 2,
    text: "Nimetage väärteomenetluse menetlusliigid",
    options: [
      "Kiirmenetlus",
      "Kirjalik hoiatusmenetlus",
      "Lühimenetlus",
      "Üldmenetlus",
      "Haldusmenetlus",
      "Kriminaalmenetlus"
    ],
    correct: [0, 1, 2, 3]
  },
  {
    id: 3,
    text: "Kui väärteomenetluse seadustikus ei ole sätestatud menetlustoimingut, tuleb kohaldada",
    options: [
      "Kriminaalmenetluse sätteid arvestades väärteomenetluse erisusi",
      "Tsiviilkohtumenetluse sätteid",
      "Halduskohtumenetluse sätteid",
      "Politsei sisekorra eeskirju"
    ],
    correct: [0]
  },
  {
    id: 4,
    text: "Mida tähendab väärteomenetluse kohustuslikkuse printsiip?",
    options: [
      "Väärteotunnuste ilmnemisel tuleb menetlus alustada ja läbi viia, kui puuduvad välistavad asjaolud",
      "Menetlust alustatakse ainult kaebuse alusel",
      "Politsei võib alati menetluse lõpetada ilma põhjuseta",
      "Väärteomenetlus on vabatahtlik"
    ],
    correct: [0]
  },
  {
    id: 5,
    text: "Väärtegu ei ole vähetähtis, kui VTMS § 3 lg 4",
    options: [
      "On tekitatud kahju",
      "Kahju on vabatahtlikult hüvitatud",
      "Väärtegu on toime pandud kogemata",
      "Menetleja leiab, et tegu on vähetähtis"
    ],
    correct: [0]
  },
  {
    id: 6,
    text: "Mida tähendab süütuse presumptsioon väärteomenetluses?",
    options: [
      "Isikut ei loeta süüdlaseks enne jõustunud otsust",
      "Isikut loetakse süüdlaseks kohe pärast väärteoteadet",
      "Politsei otsus on lõplik süü tuvastamisel",
      "Kahtluse korral loetakse isik süüdi"
    ],
    correct: [0]
  },
  {
    id: 7,
    text: "Kuidas lahendatakse väärteoga tekitatud kahju hüvitamine?",
    options: [
      "Tsiviilseaduses sätestatud korras",
      "Kriminaalmenetluse raames automaatselt",
      "Politsei otsusega kohapeal",
      "Seda ei hüvitata kunagi"
    ],
    correct: [0]
  },
  {
    id: 8,
    text: "Kes on väärteomenetluses kohtuväline menetleja?",
    options: [
      "Valla- ja linnavalitsus",
      "Täidesaatva riigivõimu volitusega asutus",
      "Kohus",
      "Eraõiguslik advokaadibüroo"
    ],
    correct: [0, 1]
  },
  {
    id: 9,
    text: "Mis tõendab kohtuvälise menetleja ametniku pädevust?",
    options: [
      "Ametniku ametitõend",
      "Kohtuvälise menetleja poolt antud tunnistus",
      "Suuline kinnitus kolleegilt",
      "Isiklik visiitkaart"
    ],
    correct: [0, 1]
  },
  {
    id: 10,
    text: "Kes on väärteomenetluses menetlusosaline?",
    options: [
      "Menetlusalune isik",
      "Kaitsja",
      "Tunnistaja",
      "Kohus"
    ],
    correct: [0, 1]
  },

   {
    id: 11,
    text: "Kes on menetlusalune isik?",
    options: [
      "Füüsiline või juriidiline isik, kelle suhtes on alustatud väärteomenetlust",
      "Isik, kes on tunnistajaks väärteole",
      "Politseiametnik, kes menetleb väärtegu",
      "Kohus"
    ],
    correct: [0]
  },
  {
    id: 12,
    text: "Kes on väärteomenetluses süüdlane?",
    options: [
      "Menetlusalune isik, kelle karistamise kohta on jõustunud otsus",
      "Isik, kelle suhtes on alustatud menetlust",
      "Tunnistaja",
      "Kaitsja"
    ],
    correct: [0]
  },
  {
    id: 13,
    text: "Menetlusaluse isiku õigused väärteomenetluses",
    options: [
      "Õigus kaitsja abile",
      "Õigus anda ütlusi ja esitada tõendeid",
      "Õigus olla menetluse ajal kohtus kohal",
      "Õigus määrata ise karistus"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 14,
    text: "Kes võib olla kaitsja väärteomenetluses?",
    options: [
      "Advokaat",
      "Menetleja loal muu õigusharidusega isik",
      "Tunnistaja",
      "Politseinik"
    ],
    correct: [0, 1]
  },
  {
    id: 15,
    text: "Mis tõendab kaitsja volitusi?",
    options: [
      "Volikiri",
      "Ametitõend",
      "Suuline kinnitus",
      "Isikutunnistus"
    ],
    correct: [0]
  },
  {
    id: 16,
    text: "Nimetage väärteomenetlust välistavad asjaolud",
    options: [
      "Teos puuduvad väärteo tunnused",
      "Isik on juba sama teo eest karistatud",
      "Isik on alaealine",
      "Väärteo aegumine"
    ],
    correct: [0, 1, 3]
  },
  {
    id: 17,
    text: "Millal ei alustata väärteomenetlust või see lõpetatakse?",
    options: [
      "Puuduvad väärteo tunnused",
      "Isik ei nõustu rikkumisega",
      "Isik soovib vaidlustada",
      "Politsei ei viitsi menetleda"
    ],
    correct: [0]
  },
  {
    id: 18,
    text: "Millal võib lõpetada menetluse otstarbekuse kaalutlusel?",
    options: [
      "Süü ei ole suur ja avalik huvi puudub",
      "Isik on alaealine ja võtab lepituse",
      "Politsei arvates on juhtum ebamugav",
      "Isik ei tunnista süüd"
    ],
    correct: [0, 1]
  },
  {
    id: 19,
    text: "Kas videosalvestis võib olla iseseisev tõend?",
    options: [
      "Jah, kui on tuvastatav päritolu ja seos väärteoga",
      "Ei, see ei ole kunagi tõend",
      "Ainult kui tunnistaja kinnitab seda",
      "Ainult kohtuniku loal"
    ],
    correct: [0]
  },
  {
    id: 20,
    text: "Kohtuvälise menetleja ametnik võib olla kohtus",
    options: [
      "Tunnistaja tema poolt tajutud faktiliste asjaolude osas",
      "Kaitsja",
      "Kohtunik",
      "Ekspert igas olukorras"
    ],
    correct: [0]
  },

  {
    id: 21,
    text: "Kas väärteomenetluses tehtud riikliku registri andmepäring tuleb dokumenteerida?",
    options: [
      "Jah, märge tehakse protokolli või otsusesse koos aja ja tulemusega",
      "Ei, seda ei pea dokumenteerima",
      "Ainult kui isik seda nõuab",
      "Ainult kohtumenetluses"
    ],
    correct: [0]
  },
  {
    id: 22,
    text: "Kas väärteomenetluses saab tunnistaja olla anonüümne?",
    options: [
      "Ei, tunnistaja anonüümsust ei tagata",
      "Jah, alati kui tunnistaja seda soovib",
      "Jah, politsei otsusel",
      "Ainult kohtus"
    ],
    correct: [0]
  },
  {
    id: 23,
    text: "Kas tunnistajal võib olla esindaja väärteomenetluses?",
    options: [
      "Ei, tunnistajal ei ole õigust esindajale",
      "Jah, alati advokaat",
      "Jah, kui menetleja lubab",
      "Ainult alaealistel tunnistajatel"
    ],
    correct: [0]
  },
  {
    id: 24,
    text: "Millised on VTMS § 44 lg 1 alusel kinnipidamise alused?",
    options: [
      "Isik püüab põgeneda",
      "Isik ei ole tuvastatav",
      "Isik võib jätkuvalt toime panna väärtegusid",
      "Isik on tunnistaja"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 25,
    text: "Kui kaua võib isikut väärteo kahtlusel kinni pidada?",
    options: [
      "Kuni 48 tundi",
      "Kuni 24 tundi",
      "Kuni 72 tundi",
      "Kuni kohtuniku otsuseni ilma piiranguta"
    ],
    correct: [0]
  },
  {
    id: 26,
    text: "Millised on menetlusdokumendid väärteomenetluses?",
    options: [
      "Väärteoprotokoll",
      "Menetlustoimingu protokoll",
      "Kohtuvälise menetleja otsus",
      "Tunnistaja avaldus kui iseseisev dokument"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 27,
    text: "Mis on kohtuvälise menetleja määrus?",
    options: [
      "Põhistatud menetlusotsus, mis vormistatakse eraldi dokumendina",
      "Suuline otsus kohapeal",
      "Tunnistaja seletus",
      "Politsei sisekorraldus"
    ],
    correct: [0]
  },
  {
    id: 28,
    text: "Mis on väärteotoimik?",
    options: [
      "Väärteoasjas kogutud dokumentide kogum",
      "Kohus otsus",
      "Politsei isiklik märkmik",
      "Tunnistaja ütluste kogum eraldi"
    ],
    correct: [0]
  },
  {
    id: 29,
    text: "Millal ei ole lühimenetluse kohaldamine kohustuslik?",
    options: [
      "Kui menetlust ei saa kohapeal lõpule viia",
      "Kui isik soovib vaidlustada teo",
      "Kui tegemist on kuriteoga",
      "Kui politsei seda ei soovi"
    ],
    correct: [0, 2]
  },
  {
    id: 30,
    text: "Kas lühimenetluse kohaldamine on alati kohustuslik väärteomenetluse alustamisel?",
    options: [
      "Jah, seaduses sätestatud juhtudel",
      "Ei, see on alati vabatahtlik",
      "Jah, kõigis väärteoasjades",
      "Ei, seda ei kasutata enam"
    ],
    correct: [0]
  },


  {
    id: 31,
    text: "Millised on lühimenetlust välistavad asjaolud?",
    options: [
      "Alustatud on kirjalikku hoiatusmenetlust",
      "Väärteos esineb mitu erinevat koosseisu",
      "Seadus näeb ette aresti kohaldamise",
      "Isik tunnistab süüd"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 32,
    text: "Milline on mõjutustrahvi maksimaalne määr?",
    options: [
      "80 eurot",
      "200 eurot",
      "500 eurot",
      "Ei ole seaduses määratud"
    ],
    correct: [0]
  },
  {
    id: 33,
    text: "Milline on mõjutustrahvi maksimaalne määr 14–18-aastasele isikule?",
    options: [
      "40 eurot",
      "80 eurot",
      "100 eurot",
      "200 eurot"
    ],
    correct: [0]
  },
  {
    id: 34,
    text: "Millised õigused on lühimenetlusele allutatud isikul?",
    options: [
      "Õigus anda selgitusi",
      "Õigus teada väärteoasja sisu",
      "Õigus vaidlustada otsus",
      "Õigus määrata menetluse liik"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 35,
    text: "Kui kaua saab lühimenetluse otsust vaidlustada?",
    options: [
      "15 päeva jooksul otsuse kättesaamisest",
      "7 päeva jooksul",
      "30 päeva jooksul",
      "Ei saa vaidlustada"
    ],
    correct: [0]
  },
  {
    id: 36,
    text: "Kellele esitatakse kaebus lühimenetluse otsuse peale?",
    options: [
      "Otsuse teinud kohtuvälisele menetlejale",
      "Maakohtule",
      "Politsei prefektile",
      "Prokuratuurile"
    ],
    correct: [0]
  },
  {
    id: 37,
    text: "Millal võib kohaldada kiirmenetlust?",
    options: [
      "Isik nõustub kiirmenetlusega",
      "Isikule on selgitatud õigusi ja kohustusi",
      "Isik keeldub igasugusest suhtlusest",
      "Isikule on antud võimalus ütlusi anda"
    ],
    correct: [0, 1, 3]
  },
  {
    id: 38,
    text: "Millal ei saa kohaldada kiirmenetlust?",
    options: [
      "Isik ei nõustu menetlusega",
      "Isik on 14–18-aastane",
      "On vaja aresti määrata",
      "Isik on tunnistaja"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 39,
    text: "Kui suur võib olla rahatrahv kiirmenetluses füüsilisele isikule?",
    options: [
      "200 trahviühikut",
      "100 trahviühikut",
      "500 trahviühikut",
      "Ilma piiranguta"
    ],
    correct: [0]
  },
  {
    id: 40,
    text: "Mida teeb ametnik kui isik keeldub ütluste andmisest kiirmenetluses?",
    options: [
      "Teeb märke keeldumise kohta ja alustab üldmenetlust",
      "Lõpetab menetluse kohe",
      "Määrab automaatselt trahvi",
      "Ignoreerib olukorda"
    ],
    correct: [0]
  },


   {
    id: 41,
    text: "Kuidas dokumenteeritakse menetlusaluse isiku ütlused kiirmenetluses?",
    options: [
      "Heli- ja videosalvestusega",
      "Protokollitakse kiirmenetluse otsuse plangil",
      "Protokollitakse ülekuulamisprotokollis",
      "Ei dokumenteerita üldse"
    ],
    correct: [0, 1, 2]
  },
  {
    id: 42,
    text: "Mitmes eksemplaris koostatakse kiirmenetluse otsus?",
    options: [
      "Kahes eksemplaris",
      "Ühes eksemplaris",
      "Kolmes eksemplaris",
      "Sõltub menetlejast"
    ],
    correct: [0]
  },
  {
    id: 43,
    text: "Kellel on õigus esitada kaebus kiirmenetluse otsuse peale?",
    options: [
      "Menetlusalusel isikul",
      "Menetlusaluse isiku kaitsjal",
      "Tunnistajal",
      "Politseinikul"
    ],
    correct: [0, 1]
  },
  {
    id: 44,
    text: "Kellele esitatakse kaebus kiirmenetluse otsuse peale?",
    options: [
      "Maakohtule",
      "Politsei prefektile",
      "Kohtuvälisele menetlejale",
      "Prokuratuurile"
    ],
    correct: [0]
  },
  {
    id: 45,
    text: "Kui kaua on aega esitada kaebus kiirmenetluse otsuse peale?",
    options: [
      "15 päeva jooksul otsuse kättesaamisest",
      "7 päeva jooksul",
      "30 päeva jooksul",
      "Ei saa kaevata"
    ],
    correct: [0]
  },
  {
    id: 46,
    text: "Millega alustatakse väärteomenetlust?",
    options: [
      "Esimese menetlustoiminguga",
      "Väärteoteatega",
      "Kohtuniku otsusega",
      "Kaebuse esitamisega"
    ],
    correct: [0]
  },
  {
    id: 47,
    text: "Millal tutvustatakse menetlusalusele isikule tema õigused ja kohustused?",
    options: [
      "Enne esimese menetlustoimingu tegemist",
      "Pärast otsuse tegemist",
      "Kohtus alles",
      "Ainult kirjalikult hiljem"
    ],
    correct: [0]
  },
  {
    id: 48,
    text: "Mis on väärteoteade?",
    options: [
      "Teade sündmusest, mis võib sisaldada väärteotunnuseid",
      "Kohtulahend",
      "Karistusotsus",
      "Politsei sisekorraldus"
    ],
    correct: [0]
  },
  {
    id: 49,
    text: "Kui kiiresti peab menetleja otsustama väärteoteate alusel menetluse alustamise?",
    options: [
      "15 päeva jooksul",
      "5 päeva jooksul",
      "30 päeva jooksul",
      "Ei ole tähtaega"
    ],
    correct: [0]
  },
  {
    id: 50,
    text: "Kuidas dokumenteeritakse ütlused üldmenetluses?",
    options: [
      "Ülekuulamisprotokollis",
      "Väärteoprotokollis",
      "Suuliselt ilma protokollita",
      "Helisalvestuseta alati"
    ],
    correct: [0, 1]
  },


  {
    id: 51,
    text: "Kas väärteoprotokoll on käsitatav iseseisva tõendina?",
    options: [
      "Ei, välja arvatud juhul kui selles sisalduvad ütlused",
      "Jah, alati täielikult tõend",
      "Ei, mitte kunagi tõend",
      "Jah, kui kohus nii otsustab"
    ],
    correct: [0]
  },
  {
    id: 52,
    text: "Mis on üldmenetluse tunnuseks?",
    options: [
      "Väärteoprotokoll",
      "Kiirmenetluse otsus",
      "Kirjalik hoiatus",
      "Automaatne trahv ilma menetluseta"
    ],
    correct: [0]
  },
  {
    id: 53,
    text: "Mitu väärteoprotokolli võib koostada ühe isiku kohta?",
    options: [
      "Ühe või vajadusel mitu",
      "Ainult üks alati",
      "Ainult kolm",
      "Ei tohi rohkem kui üks väärtegu menetleda"
    ],
    correct: [0]
  },
  {
    id: 54,
    text: "Kui kaua on aega esitada vastulause väärteoprotokollile?",
    options: [
      "15 päeva jooksul kättesaamisest",
      "7 päeva jooksul",
      "30 päeva jooksul",
      "Ei ole võimalik esitada vastulauset"
    ],
    correct: [0]
  },
  {
    id: 55,
    text: "Kellele võib esitada vastulause väärteoasjas?",
    options: [
      "Kohtuvälisele menetlejale",
      "Kohtule",
      "Prokuratuurile",
      "Politsei patrullile suuliselt"
    ],
    correct: [0]
  },
  {
    id: 56,
    text: "Kellel on õigus esitada vastulause?",
    options: [
      "Menetlusalusel isikul",
      "Kaitsjal",
      "Tunnistajal",
      "Kohtunikul"
    ],
    correct: [0, 1]
  },
  {
    id: 57,
    text: "Kas kiirmenetluse otsuse peale saab esitada vastulause kohtuvälisele menetlejale?",
    options: [
      "Ei, sellisel juhul vastulause võimalust ei ole",
      "Jah, alati 15 päeva jooksul",
      "Jah, ainult suuliselt",
      "Ainult kui menetleja lubab"
    ],
    correct: [0]
  },
  {
    id: 58,
    text: "Mida teha kui isik keeldub väärteoprotokolli koopia kättesaamisest allkirja vastu?",
    options: [
      "Tehakse protokollile märge keeldumise kohta",
      "Menetlus lõpetatakse kohe",
      "Määratakse automaatselt karistus",
      "Isikut ei tohi enam menetleda"
    ],
    correct: [0]
  },
  {
    id: 59,
    text: "Kui kiiresti peab üldmenetluses olema lahend tehtud?",
    options: [
      "30 päeva jooksul väärteoprotokolli kättesaamisest",
      "15 päeva jooksul",
      "7 päeva jooksul",
      "Ei ole tähtaega"
    ],
    correct: [0]
  },
  {
    id: 60,
    text: "Nimetage kohtuvälise menetleja lahendid üldmenetluses",
    options: [
      "Väärteomenetluse lõpetamise määrus",
      "Kiirmenetluse otsus",
      "Haldusakt",
      "Tunnistaja protokoll"
    ],
    correct: [0]
  }
];


// Soovi korral lisa siia kiiresti 70 tk: kopeeri objekt ja muuda text/options/correct.
// Kui sul on 70 küsimust juba tekstina, võin need sinu eest siia massiliselt sisse tõsta.


// ----------------------
// 2) ABIFUNKTSIOONID
// ----------------------
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function setsEqual(a, b) {
  if (a.length !== b.length) return false;
  const sa = [...a].sort((x, y) => x - y);
  const sb = [...b].sort((x, y) => x - y);
  for (let i = 0; i < sa.length; i++) {
    if (sa[i] !== sb[i]) return false;
  }
  return true;
}

// Võtab küsimuse ja teeb sellest "runtime" versiooni,
// kus options on shuffle’itud ja correct on ümber mapitud.
function prepareQuestion(q) {
  const indexed = q.options.map((txt, idx) => ({ txt, originalIndex: idx }));
  const shuffled = shuffle(indexed);

  // uus correct = need indexid, mille originalIndex on q.correct sees
  const correctSet = new Set(q.correct);
  const newCorrect = [];
  shuffled.forEach((opt, newIdx) => {
    if (correctSet.has(opt.originalIndex)) newCorrect.push(newIdx);
  });

  return {
    id: q.id,
    text: q.text,
    options: shuffled.map(x => x.txt),
    correct: newCorrect
  };
}

// ----------------------
// 3) STATE
// ----------------------
let pool = [];             // ettevalmistatud küsimused (shuffled)
let current = null;        // praegune küsimus
let total = 0;
let done = 0;
let correctCount = 0;
let answeredLocked = false;

// ----------------------
// 4) RENDER
// ----------------------
function updateStats() {
  $("#doneCount").text(done);
  $("#totalCount").text(total);
  $("#correctCount").text(correctCount);

  const percent = total === 0 ? 0 : Math.round((correctCount / done) * 100) || 0;
  $("#percent").text(`${percent}%`);

  const progress = total === 0 ? 0 : Math.round((done / total) * 100);
  $("#progressFill").css("width", `${progress}%`);
  $("#progressText").text(`${progress}%`);
}

function showFinished() {
  $("#quizArea").addClass("hidden");
  $("#finishedArea").removeClass("hidden");
  $("#finalCorrect").text(correctCount);
  $("#finalTotal").text(total);
  const p = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  $("#finalPercent").text(`${p}%`);
}

function renderQuestion() {
  answeredLocked = false;
  $("#feedback").addClass("hidden").removeClass("good bad").empty();
  $("#nextBtn").addClass("hidden");
  $("#submitBtn").prop("disabled", false);

  if (!current) {
    showFinished();
    return;
  }

  $("#qIndex").text(`Küsimus ${done + 1}/${total}`);
  const isMulti = current.correct.length > 1;
  $("#qType").text(isMulti ? "Mitu õiget" : "Üks õige");

  $("#questionText").text(current.text);

  const type = isMulti ? "checkbox" : "radio";
  const name = "ans";

  const $form = $("#answersForm");
  $form.empty();

  current.options.forEach((optText, idx) => {
    const id = `opt_${current.id}_${idx}`;
    const $row = $(`
      <label class="answer" for="${id}">
        <input type="${type}" id="${id}" name="${name}" value="${idx}">
        <div class="label"></div>
      </label>
    `);
    $row.find(".label").text(optText);
    $form.append($row);
  });

  updateStats();
}

function revealCorrectAndWrong(picked) {
  // picked = array of chosen indexid
  const correctSet = new Set(current.correct);

  $("#answersForm .answer").each(function () {
    const $label = $(this);
    const val = parseInt($label.find("input").val(), 10);

    const isPicked = picked.includes(val);
    const isCorrect = correctSet.has(val);

    if (isCorrect) $label.addClass("correctReveal");
    if (isPicked && !isCorrect) $label.addClass("wrongPick");
  });
}

// ----------------------
// 5) LOGIKA
// ----------------------
function pickNextQuestion() {
  if (pool.length === 0) {
    current = null;
    renderQuestion();
    return;
  }
  current = pool.shift(); // pool on juba suvalises järjekorras
  renderQuestion();
}

function handleSubmit() {
  if (answeredLocked) return;

  // loe valikud
  const picked = $("#answersForm input:checked")
    .map(function () { return parseInt($(this).val(), 10); })
    .get();

  if (picked.length === 0) {
    $("#feedback")
      .removeClass("hidden good bad")
      .addClass("bad")
      .html(`<div class="title">Vali vähemalt üks vastus.</div>`);
    return;
  }

  answeredLocked = true;
  $("#submitBtn").prop("disabled", true);

  const isCorrect = setsEqual(picked, current.correct);

  done += 1;
  if (isCorrect) correctCount += 1;

  // tagasiside
  if (isCorrect) {
    $("#feedback")
      .removeClass("hidden bad")
      .addClass("good")
      .html(`<div class="title">ÕIGE ✅</div><div class="small">Liigu edasi järgmise küsimusega.</div>`);
  } else {
    // Näita õiged vastused tekstina
    const correctTexts = current.correct.map(i => current.options[i]);
    $("#feedback")
      .removeClass("hidden good")
      .addClass("bad")
      .html(`
        <div style="text-align:center">
            <img style="height:200px" src="v${Math.floor(Math.random() * 8) + 1}.gif"><img>
        </div>
        <div>
            <div class="title">VALE ❌</div>
            <div>Õiged vastused:</div>
            <ul>${correctTexts.map(t => `<li>${escapeHtml(t)}</li>`).join("")}</ul>
            <div class="small">Roheline = õige. Punane = sinu vale valik.</div>
        </div>

      `);

    revealCorrectAndWrong(picked);
  }

  updateStats();
  $("#nextBtn").removeClass("hidden");
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function restart() {
  // Valmista ette küsimused: shuffle küsimused + shuffle vastused igal küsimusel
  const prepared = QUESTIONS.map(q => prepareQuestion(q));
  pool = shuffle(prepared);

  total = pool.length;
  done = 0;
  correctCount = 0;
  answeredLocked = false;

  $("#finishedArea").addClass("hidden");
  $("#quizArea").removeClass("hidden");

  pickNextQuestion();
}

// ----------------------
// 6) EVENTS
// ----------------------
$(function () {
  $("#submitBtn").on("click", handleSubmit);

  $("#nextBtn").on("click", function () {
    // järgmine küsimus (praegune on juba “väljas”, sest shiftisime poolist)
    pickNextQuestion();
  });

  $("#restartBtn, #restartBtn2").on("click", restart);

  restart();
});