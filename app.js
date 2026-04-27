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
    "Süütegu, mille eest on ette nähtud rahatrahv, arest või juhtimisõiguse äravõtmine",
    "Tsiviilõiguslik rikkumine",
    "Ainult kuritegu",
    "Distsiplinaarrikkumine"
  ],
  correct: [0]
},
{
  id: 2,
  text: "Nimetage väärteomenetluse liigid",
  options: [
    "kiirmenetlus, kirjalik hoiatusmenetlus, lühimenetlus, üldmenetlus",
    "kriminaalmenetlus",
    "tsiviilmenetlus",
    "distsiplinaarmenetlus"
  ],
  correct: [0]
},
{
  id: 3,
  text: "Kui VTMS ei reguleeri menetlustoimingut",
  options: [
    "kohaldatakse kriminaalmenetluse sätteid erisustega",
    "ei kohaldata ühtegi seadust",
    "kohaldatakse tsiviilkohtumenetlust",
    "kohaldatakse haldusmenetlust"
  ],
  correct: [0]
},
{
  id: 4,
  text: "Väärteomenetluse kohustuslikkuse printsiip",
  options: [
    "menetleja peab alustama menetlust kui tegu ei ole vähetähtis",
    "menetlus on vabatahtlik",
    "ainult kohus algatab menetluse",
    "menetlus algab ainult prokuröri loal"
  ],
  correct: [0]
},
{
  id: 5,
  text: "Väärtegu ei ole vähetähtis kui",
  options: [
    "on tekitatud kahju või seda ei ole hüvitatud",
    "tegu on alati vähetähtis",
    "puudub tagajärg",
    "tegu on tsiviilvaidlus"
  ],
  correct: [0]
},
{
  id: 6,
  text: "Süütuse presumptsioon",
  options: [
    "isik on süütu kuni jõustunud otsuseni",
    "isik on alati süüdi",
    "politsei otsustab süü",
    "süü tekib teate esitamisel"
  ],
  correct: [0]
},
{
  id: 7,
  text: "Kahju hüvitamine",
  options: [
    "tsiviilõiguse alusel",
    "kriminaalõiguse alusel",
    "politsei otsusega",
    "ei hüvitata"
  ],
  correct: [0]
},
{
  id: 8,
  text: "Kohtuväline menetleja",
  options: [
    "valla- ja linnavalitsus ning täidesaatvad asutused",
    "kohus",
    "advokaat",
    "tunnistaja"
  ],
  correct: [0]
},
{
  id: 9,
  text: "Ametniku pädevus",
  options: [
    "ametitõend või tunnistus",
    "suuline kinnitus",
    "tunnistaja ütlus",
    "ei ole vaja tõendada"
  ],
  correct: [0]
},
{
  id: 10,
  text: "Menetlusosaline",
  options: [
    "menetlusalune isik ja kaitsja",
    "kohus",
    "tunnistaja",
    "prokurör"
  ],
  correct: [0]
},
{
  id: 11,
  text: "Menetlusalune isik",
  options: [
    "isik kelle suhtes on alustatud menetlust",
    "tunnistaja",
    "kohtunik",
    "politseinik"
  ],
  correct: [0]
},
{
  id: 12,
  text: "Süüdlane",
  options: [
    "isik kelle kohta on jõustunud otsus",
    "kahtlustatav",
    "tunnistaja",
    "menetleja"
  ],
  correct: [0]
},
{
  id: 13,
  text: "Menetlusaluse isiku õigused",
  options: [
    "kaitsja abi ja tõendite esitamine",
    "otsustada karistus",
    "lõpetada menetlus",
    "määrata trahv"
  ],
  correct: [0]
},
{
  id: 14,
  text: "Kaitsja",
  options: [
    "advokaat või kvalifitseeritud isik",
    "tunnistaja",
    "politseinik",
    "kohus"
  ],
  correct: [0]
},
{
  id: 15,
  text: "Kaitsja volitus",
  options: [
    "volikiri",
    "suuline kokkulepe",
    "tunnistus",
    "otsus"
  ],
  correct: [0]
},
{
  id: 16,
  text: "Väärteomenetlust välistavad asjaolud",
  options: [
    "puuduvad tunnused",
    "isik on surnud",
    "tegu on kuritegu",
    "menetlusaeg on möödunud"
  ],
  correct: [0,1,2,3]
},
{
  id: 17,
  text: "Menetlust ei alustata kui",
  options: [
    "isik ei nõustu rikkumisega",
    "isik soovib vaidlustada",
    "puudub seadus",
    "kohus keelab"
  ],
  correct: [0,1]
},
{
  id: 18,
  text: "Menetluse lõpetamine otstarbekuse tõttu",
  options: [
    "sotsiaalprogramm",
    "väike süü ja avaliku huvi puudumine",
    "lepitusteenus",
    "politsei otsus"
  ],
  correct: [0,1,2]
},
{
  id: 19,
  text: "Videosalvestis tõendina",
  options: [
    "võib olla tõend",
    "ei ole kunagi tõend",
    "ainult tunnistaja aseaine",
    "vajab kohtu luba"
  ],
  correct: [0]
},
{
  id: 20,
  text: "Ametniku roll kohtu menetluses",
  options: [
    "tunnistaja",
    "kohtunik",
    "kaitsja",
    "prokurör"
  ],
  correct: [0]
},
{
  id: 21,
  text: "Registriandmed tõendina",
  options: [
    "märgitakse protokolli",
    "ei kasutata",
    "ainult suuline",
    "vajab kohtuotsust"
  ],
  correct: [0]
},
{
  id: 22,
  text: "Anonüümne tunnistaja",
  options: [
    "ei ole lubatud",
    "alati lubatud",
    "ainult kuriteos",
    "politsei otsustab"
  ],
  correct: [0]
},
{
  id: 23,
  text: "Tunnistaja esindaja",
  options: [
    "ei ole lubatud",
    "alati kohustuslik",
    "advokaat",
    "kohus määrab"
  ],
  correct: [0]
},
{
  id: 24,
  text: "Kinnipidamise alused",
  options: [
    "põgenemisoht",
    "isiku tuvastamatus",
    "uute rikkumiste oht",
    "menetluse takistamine"
  ],
  correct: [0,1,2,3]
},
{
  id: 25,
  text: "Kinnipidamise kestus",
  options: [
    "kuni 48 tundi",
    "kuni 24 tundi",
    "kuni 7 päeva",
    "piiramatult"
  ],
  correct: [0]
},

{
  id: 26,
  text: "Deliktistruktuur on",
  options: [
    "3 astmeline",
    "2 astmeline",
    "4 astmeline",
    "lihtne struktuur"
  ],
  correct: [0]
},
{
  id: 27,
  text: "Juriidilise isiku vastutus",
  options: [
    "tegu on toime pandud juriidilise isiku huvides",
    "igas olukorras",
    "ainult füüsilise isiku vastutus",
    "ainult kahju korral"
  ],
  correct: [0]
},
{
  id: 28,
  text: "Süü KarS § 56 järgi tähendab",
  options: [
    "isiku vastutus koos koosseisu, õigusvastasuse ja süüga",
    "ainult tahtlus",
    "ainult kahju tekitamine",
    "ainult süüvõime"
  ],
  correct: [0]
},
{
  id: 29,
  text: "Juriidiline isik vastutab kui",
  options: [
    "tegu on tehtud tema huvides organi või töötaja poolt",
    "alati",
    "ainult lepingulise isiku poolt",
    "ainult kuriteo korral"
  ],
  correct: [0]
},
{
  id: 30,
  text: "Kihutamine ja kaasaaitamine",
  options: [
    "tahtlik ja kuriteo puhul",
    "hooletu ja väärteo puhul",
    "alati karistatav",
    "ei ole karistatav"
  ],
  correct: [0]
},
{
  id: 31,
  text: "Karistuse määramisel arvestatakse",
  options: [
    "kergendavaid ja raskendavaid asjaolusid",
    "ainult politsei arvamust",
    "ainult kahju suurust",
    "ainult avalikku arvamust"
  ],
  correct: [0]
},
{
  id: 32,
  text: "Teoainsus tähendab",
  options: [
    "üks karistus raskeima koosseisu järgi",
    "iga tegu eraldi karistus",
    "karistust ei määrata",
    "ainult hoiatus"
  ],
  correct: [0]
},
{
  id: 33,
  text: "KarS §57 ja §58 ei kohaldu kui",
  options: [
    "tunnus on juba koosseisus",
    "alati kohaldatakse",
    "ei ole süü",
    "tegu on õigustatud"
  ],
  correct: [0]
},
{
  id: 34,
  text: "Ühe süüteo eest",
  options: [
    "üks põhikaristus + lisakaristused",
    "mitu põhikaristust",
    "ei karistata",
    "ainult rahaline hoiatus"
  ],
  correct: [0]
},
{
  id: 35,
  text: "Deliktistruktuur tähendab",
  options: [
    "koosseis + õigusvastasus + süü",
    "ainult koosseis",
    "ainult karistus",
    "ainult kahju"
  ],
  correct: [0]
},
{
  id: 36,
  text: "Süüteokoosseisuline tegu",
  options: [
    "vastab objektiivsetele ja subjektiivsetele tunnustele",
    "ainult objektiivsed tunnused",
    "ainult kahju",
    "ainult tahtlus"
  ],
  correct: [0]
},
{
  id: 37,
  text: "Väärteo aegumine",
  options: [
    "2 või 3 aastat sõltuvalt teost",
    "5 aastat alati",
    "1 aasta",
    "ei aegu"
  ],
  correct: [0]
},
{
  id: 38,
  text: "Süüteokatse karistatavus",
  options: [
    "ainult kui seadus näeb ette",
    "alati",
    "kunagi ei ole",
    "ainult kuriteos"
  ],
  correct: [0]
},
{
  id: 39,
  text: "Tahtluse liigid",
  options: [
    "otsene ja kaudne, kavatsetus",
    "hooletus ja kergemeelsus",
    "ainult otsene",
    "ainult kaudne"
  ],
  correct: [0]
},
{
  id: 40,
  text: "Eriline isikutunnus",
  options: [
    "koosseisu tunnus isiku kohta",
    "tunnistaja kirjeldus",
    "kahju suurus",
    "karistuse liik"
  ],
  correct: [0]
},
{
  id: 41,
  text: "Süütegu on",
  options: [
    "tegu, mille karistus on seaduses",
    "ainult moraalne rikkumine",
    "ainult kohalik reegel",
    "ainult tööreegel"
  ],
  correct: [0]
},
{
  id: 42,
  text: "Reaalkogum",
  options: [
    "mitu tegu erinevatel aegadel",
    "üks tegu",
    "ei ole karistatav",
    "ainult üks süütegu"
  ],
  correct: [0]
},
{
  id: 43,
  text: "Deliktistruktuur on",
  options: [
    "3 astmeline",
    "2 astmeline",
    "1 astmeline",
    "4 astmeline"
  ],
  correct: [0]
},
{
  id: 44,
  text: "Süüvõime",
  options: [
    "vähemalt 14-aastane ja süüdiv",
    "18-aastane",
    "täisealine ja töövõimeline",
    "ainult tervislik"
  ],
  correct: [0]
},
{
  id: 45,
  text: "Väärteo karistus",
  options: [
    "rahatrahv või arest või juhtimisõiguse äravõtmine",
    "vangistus",
    "surmanuhtlus",
    "ainult hoiatus"
  ],
  correct: [0]
},
{
  id: 46,
  text: "Õiguskorra kaitse",
  options: [
    "üldpreventiivne mõju teistele isikutele",
    "ainult süüdlase karistamine",
    "ainult kahju hüvitamine",
    "kohtuniku arvamus"
  ],
  correct: [0]
},
{
  id: 47,
  text: "Koosseisu objektiivsed tunnused",
  options: [
    "tegevus, aeg, koht, tagajärg",
    "ainult motiiv",
    "ainult süü",
    "ainult karistus"
  ],
  correct: [0]
},
{
  id: 48,
  text: "Süüteokoosseisule vastav tegu",
  options: [
    "objektiivsed ja subjektiivsed tunnused olemas",
    "ainult objektiivsed",
    "ainult kahju",
    "ainult tahtlus"
  ],
  correct: [0]
},
{
  id: 49,
  text: "Üldpreventsioon",
  options: [
    "mõju teistele isikutele",
    "mõju ainult süüdlasele",
    "kahju hüvitamine",
    "karistuse tühistamine"
  ],
  correct: [0]
},
{
  id: 50,
  text: "Süüteo aegumine",
  options: [
    "menetlus tuleb lõpetada tähtaja möödumisel",
    "karistus suureneb",
    "ei mõjuta midagi",
    "muutub kuriteoks"
  ],
  correct: [0]
},
{
  id: 51,
  text: "Karistuse määramisel arvestatakse",
  options: [
    "kergendavaid asjaolusid ja õiguskorra huve",
    "ainult politsei arvamust",
    "ainult meedia survet",
    "ainult kahju"
  ],
  correct: [0]
},
{
  id: 52,
  text: "Süüteokoosseis",
  options: [
    "karistatava teo kirjeldus seaduses",
    "ainult karistus",
    "ainult süü",
    "ainult menetlus"
  ],
  correct: [0]
},
{
  id: 53,
  text: "Süüteokoosseis on",
  options: [
    "objektiivsete ja subjektiivsete tunnuste kogum",
    "ainult karistus",
    "ainult kahju",
    "ainult menetlus"
  ],
  correct: [0]
},
{
  id: 54,
  text: "Karistusõiguse üldosa",
  options: [
    "üldpõhimõtted ja karistuse määramine",
    "ainult kuriteod",
    "ainult väärteod",
    "ainult tsiviilõigus"
  ],
  correct: [0]
},
{
  id: 55,
  text: "Väärteo eest vastutavad",
  options: [
    "täideviija ja kaasosalised",
    "ainult kohus",
    "ainult tunnistaja",
    "ainult ohver"
  ],
  correct: [0]
},
{
  id: 56,
  text: "Kihutaja vastutus",
  options: [
    "tahtlik kallutamine kuriteole",
    "hooletus",
    "ainult väärteos",
    "ei vastuta"
  ],
  correct: [0]
},
{
  id: 57,
  text: "Karistuse ositi täitmine",
  options: [
    "võimalik mõjuvatel põhjustel",
    "alati",
    "mitte kunagi",
    "ainult kohtus"
  ],
  correct: [0]
},
{
  id: 58,
  text: "Eripreventsioon",
  options: [
    "mõju süüdlase edasisele käitumisele",
    "mõju ühiskonnale",
    "ainult karistusregister",
    "ainult kahju"
  ],
  correct: [0]
},
{
  id: 59,
  text: "Ettevaatamatus",
  options: [
    "kergemeelsus ja hooletus",
    "otsene tahtlus",
    "kaudne tahtlus",
    "kavatsetus"
  ],
  correct: [0]
},
{
  id: 60,
  text: "Tahtlus tõendatuna",
  options: [
    "teadlikkus asjaoludest ja vähemalt kaudne tahtlus",
    "ainult hooletus",
    "ainult kahju",
    "ainult oletus"
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