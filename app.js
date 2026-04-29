/* global $ */

// ----------------------
// 1) KÜSIMUSTE ANDMED
// ----------------------
// Õige vastus(ed): correct = [indexid], kus indexid viitavad options järjekorrale ENNE shuffle’it.
// Kood shuffle’b valikud, nii et correct konverteeritakse automaatselt uutele indexitele.
// Väärteomenetluse küsimused 1–60
// JS quiz array

const QUESTIONS = 
[
{
  id: 1,
  text: "Mis on väärtegu?",
  options: [
    "Väärtegu on käesolevas seadustikus või muus seaduses sätestatud süütegu, mille eest on põhikaristusena ette nähtud rahatrahv, arest või sõiduki juhtimise õiguse äravõtmine.",
    "Väärtegu on tsiviilvaidlus kahe isiku vahel.",
    "Väärtegu on ainult suuline hoiatus ilma karistuseta.",
    "Väärtegu on alati kuritegu."
  ],
  correct: [0]
},
{
  id: 2,
  text: "Nimetage väärteomenetluse menetlus liigid.",
  options: [
    "kiirmenetlus",
    "kirjalik hoiatusmenetlus",
    "lühimenetlus",
    "üldmenetlus",
    "kriminaalmenetlus",
    "täitemenetlus"
  ],
  correct: [0,1,2,3]
},
{
  id: 3,
  text: "Kui väärteomenetluse seadustikus ei ole sätestatud mingit menetlustoiminguläbiviimise korda, tuleb väärteomenetluses kohaldada.",
  options: [
    "Kriminaalmenetluse sätteid arvestades väärteomenetluse erisusi",
    "Tsiviilkohtumenetluse seadustikku",
    "Haldusmenetluse seadustikku",
    "Ainult Euroopa Liidu õigust"
  ],
  correct: [0]
},
{
  id: 4,
  text: "Mida tähendab väärteomenetluse kohustuslikuse printsiip?",
  options: [
    "väärteotunnuste ilmnemisel on kohtuväline menetleja kohustatud alustama ja läbi viima väärteomenetluse, kui tegu ei ole kohtuvälise menetleja veendumuse kohaselt vähetähtis või puuduvad VTMS 29 sätestatud väärteomenetlust välistavad asjaolud",
    "menetleja võib alati otsustada, kas menetlust alustada",
    "menetlus algab ainult kannatanu avaldusel",
    "menetlus viiakse läbi ainult kohtus"
  ],
  correct: [0]
},
{
  id: 5,
  text: "Väärtegu ei ole vähetähtis, kui VTMS 3 lg 4",
  options: [
    "väärteo toimepanemisega on tekitatud kahju",
    "väärteoteates on osutatud tekitatud kahjule ja väärteo toimepannud isik ei ole kahju vabatahtlikult hüvitanud või heastanud.",
    "isik on alaealine",
    "tegu pandi toime esimest korda"
  ],
  correct: [0,1]
},
{
  id: 6,
  text: "Mida tähendab süütuse presumptsioon väärteomenetluse seadustiku mõttes?",
  options: [
    "Kedagi ei tohi käsitada väärteo toimepanemises süüdlasena enne, kui väärteo eest karistamise otsus on tema kohta jõustunud.",
    "Isik peab oma süütust ise tõendama.",
    "Kõik kahtlused tõlgendatakse menetleja kasuks.",
    "Isik loetakse süüdi menetluse alustamisel."
  ],
  correct: [0]
},
{
  id: 7,
  text: "Kuidas lahendatatakse väärteo toimepanemisega tekitatud kahju hüvitamise küsimus?",
  options: [
    "väärteo toimepanemisega tekitatud kahju hüvitamine otsustatakse tsiviilseaduses sätestatud alustel ja korras.",
    "kriminaalmenetluse korras",
    "menetleja suva alusel",
    "kahju ei hüvitata"
  ],
  correct: [0]
},
{
  id: 8,
  text: "Kes on väärteomenetluses kohtuväline menetleja?",
  options: [
    "Valla ja linnavalitsus",
    "täidesaatva riigivõimu volitusega asutus",
    "kohus",
    "advokaat"
  ],
  correct: [0,1]
},
{
  id: 9,
  text: "Kohtuväline menetleja osaleb menetluses ametniku kaudu. Mis kinnitab kohtuvälise menetleja ametniku pädevust osaleda väärteomenetluses kohtuvälise menetleja nimel?",
  options: [
    "Kohtuvälise menetleja poolt antud ametnikele tema pädevust tõendav tunnistus",
    "politseiametnike ametitõend",
    "isikut tõendav dokument",
    "tööleping"
  ],
  correct: [0,1]
},
{
  id: 10,
  text: "Kes on väärteomenetluses menetlusosaline",
  options: [
    "Menetlusalune isik ja tema kaitsja",
    "tunnistaja",
    "ekspert",
    "kohtunik"
  ],
  correct: [0]
},





{
  id: 11,
  text: "Kes on menetlusalune isik?",
  options: [
    "Füüsiline või juriidiline isik, kelle suhtes on alustatud väärteomenetlust",
    "Ainult füüsiline isik",
    "Tunnistaja väärteomenetluses",
    "Kohtunik"
  ],
  correct: [0]
},
{
  id: 12,
  text: "Kes on väärteomenetluses süüdlane?",
  options: [
    "Menetlusalune isik , kelle karistamise kohta on jõustunud kohtuvälise menetleja otsus või kohtuotsus.",
    "Iga menetlusalune isik automaatselt",
    "Isik, kelle suhtes on esitatud kahtlus",
    "Tunnistaja"
  ],
  correct: [0]
},
{
  id: 13,
  text: "Menetlusaluse isiku õigused.",
  options: [
    "õigus teada, millist väärteoasja tema suhtes menetletakse;",
    "õigus kaitsja abile ning kaitsjaga ühendust võtta alates isiku kinnipidamisest või muu esimese menetlustoimingu tegemist;",
    "õigus olla kohtus oma väärteoasja arutamise juures;",
    "õigus anda ütlusi, esitada tõendeid ja taotlusi;",
    "õigus teada menetlustoimingu eesmärki;",
    "õigus tutvuda menetlustoimingu protokolliga, menetlustoimingu heli- ja videosalvestisega ning teha nende kohta avaldusi;",
    "õigus vaidlustada kohtuvälise menetleja või kohtu menetlustoiming või lahend seadustikus sätestatud korras.",
    "õigus keelduda kõigist menetlustoimingutest ilma tagajärgedeta",
    "õigus määrata ise karistus",
    "õigus lõpetada menetlus omal algatusel"
  ],
  correct: [0,1,2,3,4,5,6]
},
{
  id: 14,
  text: "Kes võib olla väärteomenetluses menetlusaluse isiku kaitsjaks?",
  options: [
    "Advokaat",
    "Menetleja loal muu isik, kes on omandanud õiguse õppesuunal vähemalt riiklikult tunnustatud magistrikraadi, Selle vastava kvalifikatsiooni haridusseaduse tähenduses või selle vastava välisriigi kvalifikatsiooni.",
    "Iga sõber või tuttav",
    "Tunnistaja"
  ],
  correct: [0,1]
},
{
  id: 15,
  text: "Mis tõendab väärteomenetluses menetlusaluse isiku kaitsja volitusi?",
  options: [
    "Volikiri",
    "Suuline kokkulepe",
    "Isikut tõendav dokument",
    "Kohtu luba"
  ],
  correct: [0]
},
{
  id: 16,
  text: "Nimetage väärteomenetlust välistavad asjaolud.",
  options: [
    "teos puuduvad väärteo tunnused;",
    "isikut on juba karistatud sama teo toimepanemise eest;",
    "isiku suhtes on sama teo kohta tehtud väärteomenetluse lõpetamise lahend;",
    "teos on kuriteo tunnused;",
    "väärteo aegumistähtaeg on möödunud;",
    "seadus, mis nägi ette karistuse väärteo eest, on kehtetuks tunnistatud;",
    "isik, kelle suhtes alustatakse või on alustatud väärteomenetlust, on surnud või juriidiline isik on lõppenud",
    "kõik ülalpool nimetatud asjaolud",
  ],
  correct: [0,1,2,3,4,5,6,7]
},
{
  id: 17,
  text: "Väärteomenetlust ei alustata ja alustatud menetlus tuleb lõpetada kui:",
  options: [
    "isik, kelle suhtes alustatakse või on alustatud väärteomenetlust, ei nõustu rikkumise toimepanemisega",
    "isik, kelle suhtes alustatakse või on alustatud väärteomenetlust, soovib vaidlustada rikkumise toimepanemise",
    "isik tunnistab teo üles",
    "menetleja peab tegu tõsiseks"
  ],
  correct: [0,1]
},
{
  id: 18,
  text: "Millistel asjaoludel võib menetleja  lõpetada väärteomenetluse otstarbekuse kaalutlusel?",
  options: [
    "Menetlusalune isik on võtnud kohustuse osaleda sotsiaalprogrammis.",
    "menetlusaluse isiku süü ei ole suur ja väärteo menetluse jätkamiseks puudub avalik menetlushuvi.",
    "alaealine menetlusalune isik on võtnud kohustuse kasutada lepitusteenust või võtnud muu asjakohase kohustuse.",
    "isik eitab süüd",
    "menetleja soovib menetlust lõpetada ilma põhjuseta"
  ],
  correct: [0,1,2]
},
{
  id: 19,
  text: "Kui riikliku järelvalve käigus on tehtud video, kas selle salvestis võib olla väärteomenetluses iseseisvaks tõendiks?",
  options: [
    "Võib olla väärteomenetluses iseseisvaks tõendiks kui salvestiselt nähtub, millal, millistel asjaoludel ja kelle poolt on salvestis loodud,  Salvestise seos väärteo asjaga ning selle lahendamiseks olulised asjaolud.",
    "Ei või kunagi olla tõend",
    "On alati tõend sõltumata sisust",
    "On tõend ainult kohtu loal"
  ],
  correct: [0]
},
{
  id: 20,
  text: "Kellena võib kohtu- või kaebemenetluses osaleda kohtuvälise menetleja ametnik, kes on vahetult tajunud väärteo tehiolusid ja kirjeldanud neid väärteoprotokollis või kiirmenetluse otsuses?",
  options: [
    "tunnistaja tema poolt tajutud faktilise asjaolude kohta.",
    "süüdistatav",
    "kohtunik",
    "kaitsja"
  ],
  correct: [0]
},





{
  id: 21,
  text: "Väärteo toimepanemine on tõendatud riikliku registry andemtega millel on õiguslik tähendus. Kas kohtuvälise menetleja ametnik peab tegema andmekogust päringu tegemise kohta vastava märke.",
  options: [
    "märge andmekogust päringu tegemise kohta tehakse väärteoprotokolli või kiirmenetluse otsusele ning märkest peab nähtuma päringu tegemise aeg ja päringu tulemus.",
    "märget ei ole vaja teha",
    "märge tehakse ainult kohtule",
    "märge tehakse suuliselt"
  ],
  correct: [0]
},
{
  id: 22,
  text: "Kas väärteomenetluses saab muuta tunnistaja anonüümseks?",
  options: [
    "Tunnistaja anonüümsust väärteomenetluses ei tagata.",
    "Tunnistaja saab alati anonüümseks muuta",
    "Anonüümsus sõltub tunnistaja soovist",
    "Anonüümsus kehtib ainult kohtus"
  ],
  correct: [0]
},
{
  id: 23,
  text: "Kas võib olla väärteomenetluses ülekuulamisel tunnistaja esindaja?",
  options: [
    "Väärteomenetluses ei ole tunnistajal õigust omada esindajat.",
    "Tunnistajal on alati õigus esindajale",
    "Esindaja on kohustuslik",
    "Esindaja võib olla ainult advokaat"
  ],
  correct: [0]
},
{
  id: 24,
  text: "Nimetage väärteo toime pannud isiku VTMS 44 lõikes 1 sätestatud kinnipidamise alused.",
  options: [
    "Isik püüab põgeneda",
    "ei ole tuvastatud tema isikut",
    "ta võib jätkuvalt toime panna väärtegusid",
    "ta võib väärteomenetlust takistada või sellest kõrvale hoiduda",
    "isik tunnistab teo üles",
    "isik teeb koostööd menetlejaga"
  ],
  correct: [0,1,2,3]
},
{
  id: 25,
  text: "Kui kaua võib isikut kelle kohta on põhjendatult alust arvata, et ta on toime pannud väärteo, kinni pidada?",
  options: [
    "kuni 48 tundi",
    "kuni 24 tundi",
    "kuni 72 tundi",
    "piiramatu aeg"
  ],
  correct: [0]
},
{
  id: 26,
  text: "Nimetage menetlusdokumendid kohtuvälises menetluses",
  options: [
    "väärteoprotokoll",
    "menetlustoimingu protokoll",
    "kohtuvälise menetleja määrus",
    "kohtuvälise menetleja otsus",
    "kõik ülalpool loetletud dokumendid",
  ],
  correct: [0,1,2,3,4]
},
{
  id: 27,
  text: "Mis on kohtuvälise menetluse määrus?",
  options: [
    "Kohtuvälise menetleja või kohtu põhistatud menetlusotsus, mis vormistatakse eraldi menetlusdokumendina ja pannakse väärteotoimikusse.",
    "Suuline otsus ilma dokumenteerimiseta",
    "Ainult kohtu otsus",
    "Menetlusaluse isiku avaldus"
  ],
  correct: [0]
},
{
  id: 28,
  text: "Mis on väärteotoimik?",
  options: [
    "Väärteo asjas kogutud dokumentide kogum.",
    "Ainult väärteoprotokoll",
    "Kohtu toimik",
    "Politsei siseinfo"
  ],
  correct: [0]
},
{
  id: 29,
  text: "Millistel asjaoludel ei ole lühimenetluse kohaldamine kohustuslik.",
  options: [
    "Kui esinevad asjaolud, mis ei võimalda lühimenetlust lõpule via kohapeal.",
    "kui lühimenetluse alllutatud isik soovib vaidlustada väärteotunnustega teo toimepanemise",
    "kui isik tunnistab teo üles",
    "kui menetlejal on kiire"
  ],
  correct: [0,1]
},
{
  id: 30,
  text: "Kas väärteomenetluse alustamisel on lühimenetluse kohaldamine kohustuslik?",
  options: [
    "on kohustuslik seaduses sätestatud juhtudel.",
    "on alati kohustuslik",
    "ei ole kunagi kohustuslik",
    "sõltub menetleja tujust"
  ],
  correct: [0]
},




{
  id: 31,
  text: "Millised on lühimenetlust välistavad asjaolud?",
  options: [
    "Lühimenetluse aluseks oleva väärteo tunnustega teo kohta alustatkse kirjalikku hoiatusmenetlust.",
    "Lühimenetluse aluseks olevas väärteo tunnustega teos esinevad eri väärteokoosseidude tunnused ja nendest vähemalt ühe kohta alustatakse üld-või kiirmenetlust.",
    "Seadus näeb väärteo eest põhikaristusena ette eriõiguse äravõtmise, aresti või lisakaristuse kohaldamise.",
    "isik tunnistab teo üles",
    "menetlusalune isik teeb koostööd"
  ],
  correct: [0,1,2]
},
{
  id: 32,
  text: "Milline on mõjutustrahvi maksimaalmäär?",
  options: [
    "80 eurot",
    "40 eurot",
    "200 eurot",
    "piiramatu"
  ],
  correct: [0]
},
{
  id: 33,
  text: "Milline on 14- kuni 18 a. isikule mõjutustrahvi määramise korral mõjutustrahvi maksimaalmäär?",
  options: [
    "40 eurot",
    "80 eurot",
    "20 eurot",
    "100 eurot"
  ],
  correct: [0]
},
{
  id: 34,
  text: "Millised õigused on lühimenetlusele allutatud isikul?",
  options: [
    "anda väärteo asjaolude kohta selgitusi",
    "teada millist väärteo asja tema suhtes menetletakse",
    "tutvuda riikliku järelevalve käigus tehtud salvestustega",
    "vaidlustada lühimenetluse otsus väärteomenetluse seadustikus sätestatud koras.",
    "määrata ise karistus",
    "lõpetada menetlus omal soovil"
  ],
  correct: [0,1,2,3]
},
{
  id: 35,
  text: "Millise aja jooksul on lühimenetlusele allutatud isikul õigus vaidlustada lühimenetluse otsuse?",
  options: [
    "15 päeva jooksul lühimenetluse otsuse kättesaamisest arvates.",
    "7 päeva jooksul",
    "30 päeva jooksul",
    "3 päeva jooksul"
  ],
  correct: [0]
},
{
  id: 36,
  text: "Kellele esitatakse kaebus lühimenetluse otsuse peale?",
  options: [
    "lühimenetluse otsuse koostanud kohtuvälisele menetlejale.",
    "maakohtule",
    "riigikohtule",
    "politseile üldiselt"
  ],
  correct: [0]
},
{
  id: 37,
  text: "Mis tingimustel võib kohtuväline menetleja väärteoasja menetlemisel kohaldada kiirmenetlust?",
  options: [
    "Menetlusalune isik nõustub kiirmenetlusega",
    "menetlusalusele isikule on selgitatud, kiirenetluses väärteoprotokolli ei koostata",
    "Menetlusalusele isikule on teatatud tema õigused ja kohustused.",
    "menetlusalusele isikule on võimaldattud anda väärteo toimepanemise kohta ütlusi.",
    "menetlusalune isik vaikib",
    "menetleja otsustab üksinda"
  ],
  correct: [0,1,2,3]
},
{
  id: 38,
  text: "Millistel asjaoludel ei saa kohaldada kiirmenetlust ja tuleb alustada üldmenetlust?",
  options: [
    "Menetlusalune isik ei nõustu kiirmenetlusega",
    "menetlusalune isik on 14-18 aastane",
    "menetlusalune isik on psüühikahäirega",
    "on vaja otsustada konfiskeerimine",
    "On vaja otsustada põhikaristusena aresti kohaldamine",
    "on vaja otsustada põhikaristusena sõiduki juhtimise õiguse äravõtmine",
    "on vaja otsustada lisakaristuse kohaldamine",
    "menetlusalune isik tunnistab teo üles"
  ],
  correct: [0,1,2,3,4,5,6]
},
{
  id: 39,
  text: "Kui suure rahatrahvi võib kiirmenetluse otsuses määrata füüsilisele isikule?",
  options: [
    "200 trahviühikut",
    "100 trahviühikut",
    "80 eurot",
    "piiramatu"
  ],
  correct: [0]
},
{
  id: 40,
  text: "Kohtuvälise menetleja ametnik otsustas kohaldada kiirmenetlust. Väärteo toimepanemise asjaolud olid selged. Menetlusaluse isik nõustus kiirmenetlusega, kuid keeldub ütluste andmisest. Mida teha kohtuvälise menetleja ametnikul, kui menetlusosaline keeldub ütluste andmisest?",
  options: [
    "Menetleja teeb kiirmenetluse otsuse või ülekuulamis protokolli plangile keeldumise kohta märke ning alustab üldmenetlust.",
    "Menetlus lõpetatakse kohe",
    "Isik vabastatakse vastutusest",
    "Menetleja ignoreerib keeldumist"
  ],
  correct: [0]
},



{
  id: 41,
  text: "Kuidas dokumenteeritakse menetlusaluse isiku ütlused väärteo toimepanemise kohta kiirmenetluses?",
  options: [
    "Heli ja videosalvestatakse",
    "protokollitakse kiirmenetluse otsuse plangil",
    "protokollitakse menetlusaluse isiku ülekuulamisprotokollis.",
    "ei dokumenteerita üldse",
    "ainult suuliselt"
  ],
  correct: [0,1,2]
},
{
  id: 42,
  text: "Mitmes eksemplaris koostatakse kiirmenetluse otsus?",
  options: [
    "kahes eksemplaris, millest esimene antakse kohe pärast otsuse allakirjutamist menetlusalusele isikule allkirja vastu",
    "ühes eksemplaris",
    "kolmes eksemplaris",
    "ei koostata kirjalikult"
  ],
  correct: [0]
},
{
  id: 43,
  text: "Kellel on õigus esitada kaebus kohtuvälise menetleja kiirmenetluses tehtud otsuse peale?",
  options: [
    "menetlusalusel isikul",
    "menetlusaluse isiku kaitsjal",
    "tunnistajal",
    "eksperdil"
  ],
  correct: [0,1]
},
{
  id: 44,
  text: "Kellele esitatakse kaebus kiirmenetluse otsuse peale?",
  options: [
    "maakohtule",
    "kohtuvälisele menetlejale",
    "riigikohtule",
    "politseijaoskonnale"
  ],
  correct: [0]
},
{
  id: 45,
  text: "Millise aja jooksul on õigus esitada maakotule kaebuse kiirmenetluse otsuse peale?",
  options: [
    "15 päeva jooksul kiirmenetluse otsuse kättesaamisest",
    "7 päeva jooksul",
    "30 päeva jooksul",
    "3 päeva jooksul"
  ],
  correct: [0]
},
{
  id: 46,
  text: "Millise menetlustoiminguga alustatakse väärteomenetlust?",
  options: [
    "esimese menetlustoiminguga",
    "väärteoprotokolli koostamisega",
    "kohtuotsusega",
    "trahvi määramisega"
  ],
  correct: [0]
},
{
  id: 47,
  text: "Millal tutvustatakse menetlusalusele isikule tema õigused ja kohustused vastavalt VTMS-le?",
  options: [
    "enne menetlusaluse isikuga esimese menetlustoimingu tegemist",
    "pärast menetluse lõpetamist",
    "ainult kohtus",
    "pärast karistuse määramist"
  ],
  correct: [0]
},
{
  id: 48,
  text: "Mida tähendab väärteoteade?",
  options: [
    "teade, milles kirjeldatakse sündmust, fakti või tegevust, milles võivad esineda väärteotunnused",
    "kohtuotsus väärteoasjas",
    "trahvi määramise otsus",
    "tunnistaja ütlus"
  ],
  correct: [0]
},
{
  id: 49,
  text: "Millise aja jooksul on kohtuväline menetleja kohustatud alustama väärteomenetlust või otsustama väärteomenetluse alustamata jätmise, kui väärteo toimepanemise kohta on esitatud väärteoteade?",
  options: [
    "15 päeva jooksul väärteoteate kättesaamisest arvates",
    "7 päeva jooksul",
    "30 päeva jooksul",
    "kohe samal päeval"
  ],
  correct: [0]
},
{
  id: 50,
  text: "Kuidas dokumenteeritakse menetlusaluse isiku ütlused väärteo toimepanemise kohta üldmenetluses?",
  options: [
    "protokollitakse menetlusaluse isiku ülekuulamisprotokolli plangil",
    "protokollitakse väärteoprotokollis",
    "ainult suuliselt",
    "ei dokumenteerita"
  ],
  correct: [0,1]
},



{
  id: 51,
  text: "Kas väärteoprotokoll on käsitatav tõendina?",
  options: [
    "ei ole tõend, v.a juhul, kui protokollis sisalduvad menetlusaluse isiku või tunnistaja ütlused",
    "on alati iseseisev tõend",
    "on tõend ainult kohtus",
    "on tõend ainult siis, kui menetleja kinnitab selle eraldi"
  ],
  correct: [0]
},
{
  id: 52,
  text: "Mis on väärteomenetluses üldmenetluse tunnuseks?",
  options: [
    "väärteoprotokoll",
    "kohtumäärus",
    "tunnistaja ütlus",
    "menetlusaluse isiku ülestunnistus"
  ],
  correct: [0]
},
{
  id: 53,
  text: "Mitu väärteoprotokolli võib koostada, kui isik on toime pannud mitu väärtegu?",
  options: [
    "võib koostada ühe protokolli",
    "vajaduse korral võib koostada mitu protokolli",
    "alati tuleb koostada eraldi protokoll iga teo kohta",
    "protokolli ei koostata sellisel juhul üldse"
  ],
  correct: [0,1]
},
{
  id: 54,
  text: "Millise tähtaja jooksul on menetlusalusel isikul õigus esitada vastuslause?",
  options: [
    "15 päeva jooksul, alates väärteoprotokolli koopia kättesaamisest",
    "7 päeva jooksul",
    "30 päeva jooksul",
    "3 päeva jooksul"
  ],
  correct: [0]
},
{
  id: 55,
  text: "Kellele võib menetlusalune isik esitada vastulause?",
  options: [
    "kohtuvälisele menetlejale",
    "maakohtule",
    "politseipeadirektorile",
    "prokuratuurile"
  ],
  correct: [0]
},
{
  id: 56,
  text: "Kellel on õigus esitada vastulause?",
  options: [
    "menetlusaluse isiku kaitsjal",
    "menetlusalusel isikul",
    "tunnistajal",
    "suvalisel kolmandal isikul"
  ],
  correct: [0,1]
},
{
  id: 57,
  text: "Menetlusalune isik sai allkirja vastu kiirmenetluse otsuse, millega teda karistati rahatrahviga 25 trahviühiku ulatuses. Millise aja jooksul võib menetlusalune isik esitada kohtuvälisele menetlejale antud väärteoasjas vastulause?",
  options: [
    "antud juhul seadus ei näe ette vastulause esitamise võimalust",
    "15 päeva jooksul",
    "7 päeva jooksul",
    "30 päeva jooksul"
  ],
  correct: [0]
},
{
  id: 58,
  text: "Mida teha kohtuvälisel menetlejal kui menetlusosaline keeldub väärteprotokolli koopia kättesaamise kohta allkirja andmist?",
  options: [
    "menetleja teeb väärteoprotokollile selle kohta märkuse, märkides keeldumise kuupäeva ning oma allkirja ja ametinimetuse",
    "menetlus lõpetatakse automaatselt",
    "protokoll tühistatakse",
    "isikut karistatakse koheselt"
  ],
  correct: [0]
},
{
  id: 59,
  text: "Millise aja jooksul peab kohtuvälise menetleja väärteoasja üldmenetluse lahend olema tehtud ja menetlusalusele isikule kohtuvälise menetleja juures kättesaadav?",
  options: [
    "30 päeva möödumisel väärteoprotokolli koopia menetlusalusele isikule kätteandmisest",
    "15 päeva jooksul",
    "7 päeva jooksul",
    "60 päeva jooksul"
  ],
  correct: [0]
},
{
  id: 60,
  text: "Nimetage kohtuvälise menetleja lahendid üldmenetluses?",
  options: [
    "kiirmenetluse otsus rahatrahvi ja lisakaristusena sõiduki juhtimise õiguse äravõtmise määramise kohta",
    "väärteomenetluse lõpetamise määrus",
    "kriminaalmenetluse alustamise määrus",
    "kohtumäärus"
  ],
  correct: [0,1]
}




]


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