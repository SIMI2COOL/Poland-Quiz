import type { UILang } from "./quiz-engine";

type Rot = { en: string[]; pl: string[] };

/** Extra rotating facts for cities that share a story beyond “which voivodeship”. */
export const CITY_FACT_MORE: Record<string, Rot> = {
  "Boguszów-Gorce": {
    en: [
      "Boguszów-Gorce climbed the Sowie Mountains’ slopes on coal and textile mills—listen for the echo of the old Walim tunnels nearby.",
      "From here the Owl Mountains feel close enough to touch; WWII-era Project Riese galleries are carved into the ridge above the valleys.",
      "The twin-name town stitches two hillside settlements; miners’ chapels and forest trails still define the weekend rhythm."
    ],
    pl: [
      "Boguszów-Gorce wspina się po stokach Gór Sowich na węglu i przędzalniach — tuż obok zapomniane tunele Walimia.",
      "Stąd „Sowie” wydają się na wyciągnięcie ręki; w skałach nad dolinami wciąż kryją się chodniki z epoki Projektu Riese.",
      "Miasto z podwójną nazwą scala dwa osiedla na zboczu; kapliczki górnicze i leśne szlaki wciąż rytmują weekend."
    ]
  },
  Polkowice: {
    en: [
      "Polkowice sits on the Legnica-Głogów copper belt—open pits and concentrate trains are part of the horizon.",
      "The name sounds gentle, but the geology here built one of Europe’s great porphyry mining districts.",
      "Weekend cyclists use the town as a water stop between Legnica’s Piast heritage and the Ślęża massif."
    ],
    pl: [
      "Polkowice stoją na legnicko-głogowskim rejonie miedzi — odkrywki i pociągi z koncentratem to część horyzontu.",
      "Nazwa brzmi spokojnie, ale geologia zbudowała tu jeden z wielkich rejonów porfirowych Europy.",
      "Rowerzyści traktują miasto jako przystanek między dziedzictwem Piastów w Legnicy a Masywem Ślęży."
    ]
  },
  Gozdnica: {
    en: [
      "Gozdnica is a Lubusz pocket between lignite fields and pine plantations—border commuters know its rail halt well.",
      "Wine routes from Zielona Góra swing north through towns like this, where forest roads outnumber motorways.",
      "Firewatch towers still dot the woods; the Odra floodplain is only a short ride west."
    ],
    pl: [
      "Gozdnica to lubuska kieszeń między polami węgla brunatnego a sosnami — pendlerzy znają tu przystanek kolejowy.",
      "Szlaki winne ze Zielonej Góry skręcają na północ przez takie miasteczka, gdzie lasowych dróg jest więcej niż autostrad.",
      "Wieże obserwacyjne wciąż stoją w lasach; rozlewiska Odry są stąd tylko krótkim odcinkiem na zachód."
    ]
  },
  "Nowa Ruda": {
    en: [
      "Nowa Ruda’s veins of coal followed the Sowie fault—today hikers trade headlamps for trail markers toward Włodzica.",
      "The Włodzica river slices the town; Czech border posts are a ridge away.",
      "Winter drifts stack against miners’ cottages turned guesthouses—proof the mountains still set the thermostat."
    ],
    pl: [
      "Nowa Ruda żyła węglem wzdłuż uskoku sowiego — dziś turyści zamieniają lampy górnicze na oznaczenia szlaków nad Włodzicą.",
      "Rzeka Włodzica tnie miasto; czeskie słupki graniczne są za jednym grzbietem.",
      "Zimą zaspy kładą się na chatach górników przerobionych na pensjonaty — góry wciąż ustawiają termostat."
    ]
  },
  Oleśnica: {
    en: [
      "Oleśnica’s brick market belonged to the Oleśnica dukes—Poland’s medieval chessboard of Piast cadet branches.",
      "Trains from Wrocław slow here where flat Silesia starts tipping toward the Ślęża volcano’s silhouette.",
      "The town crest still shows the bear of the local princes; fairs fill the moat ring on summer Sundays."
    ],
    pl: [
      "Oleśnicki rynek ceglany należał do książąt oleśnickich — szachownica piastowskich linii bocznych.",
      "Pociągi z Wrocławia zwalniają tam, gdzie płaski Śląsk zaczyna się wspinać pod sylwetkę Ślęży.",
      "Herb wciąż pokazuje niedźwiedzia miejscowych książąt; jarmarki zapełniają pierścień fosy latem."
    ]
  },
  Trzebnica: {
    en: [
      "Trzebnica’s basilica guards the tomb of St. Hedwig—High Duchess of Silesia and patron of bridges and scholars.",
      "Saltless here, but pilgrims still climb the gentle rise from the Odra plain for the black Madonna copy.",
      "Wrocław’s dormitory town by night, medieval sanctuary town by day."
    ],
    pl: [
      "Bazylika w Trzebnicy strzeże grobu św. Jadwigi — księżnej śląskiej i patronki mostów oraz uczonych.",
      "Solanki brak, ale pielgrzymi wciąż wspinają się z Niziny Odrzańskiej po czarną kopię madonny.",
      "Nocą sypialnia Wrocławia, dziennie średniowieczne sanktuarium."
    ]
  },
  Wołów: {
    en: [
      "Wołów’s Cistercian abbey paced the Odra paddies with water gates—monks as hydraulic engineers.",
      "Storks nest on chimneys between the levees; flood years still dictate the harvest calendar.",
      "The name echoes ‘wolf’ but the landscape is all wet meadows and willow tunnels."
    ],
    pl: [
      "Cysterski klasztor w Wołowie regulował odrańskie pola szluzami — mnisi-inżynierowie hydrotechniki.",
      "Bociany gnieżdżą się na kominach między wałami; lata powodzi wciąż dyktują kalendarz żniw.",
      "Nazwa niesie „wilka”, ale krajobraz to mokłe łęgi i wierzbowe tunele."
    ]
  },
  "Środa Śląska": {
    en: [
      "Środa Śląska marks the midpoint sprint between Wrocław and the copper towns—Friday traffic knows the bypass by heart.",
      "The market cross remembers Hussite sermons; Protestant and Catholic clocks once disagreed here.",
      "Flat enough for cycle touring, lively enough for a second breakfast before Legnica."
    ],
    pl: [
      "Środa Śląska to punkt między Wrocławiem a miedzią — piątkowe korki znają obwodnicę na pamięć.",
      "Krzyż na rynku pamięta kazania husyckie; zegary protestanckie i katolickie kiedyś się tu nie zgadzały.",
      "Na tyle płasko na rower, na tyle żywo na drugie śniadanie przed Legnicą."
    ]
  },
  Lubań: {
    en: [
      "Lubań traded hands between Bohemia, Saxony, and Prussia—check the town hall roofline for three centuries of taste.",
      "Izera hikers resupply here before climbing toward the Polish–Czech ridge trail.",
      "The Lusatian Neisse is a stone’s throw; border bridges hum with weekend shoppers."
    ],
    pl: [
      "Lubań przechodził między Czechami, Saksonią i Prusami — ratuszowy szczyt nosi ślady trzech wieków gustu.",
      "Turyści w Izery uzupełniają zapasy przed wejściem na grzbiet polsko-czeski.",
      "Nysa Łużycka tuż obok; mosty graniczne brzęczą od weekendowych zakupów."
    ]
  },
  Złotoryja: {
    en: [
      "Złotoryja is Poland’s oldest mining charter town—gold panning demos still run on festival weekends.",
      "Basalt columns poke from nearby hills like organ pipes; geologists bring students every spring.",
      "The name promises gold; the museum delivers ore samples heavy enough to tilt a backpack."
    ],
    pl: [
      "Złotoryja to najstarsze miasto górnicze z przywilejem w Polsce — na festiwalach wciąż pokazują płukanie złota.",
      "Kolumny bazaltowe wychodzą na wzgórzach jak organy; geolodzy co wiosnę przywożą studentów.",
      "Nazwa obiecuje złoto; muzeum serwuje próbki rudy, które przechylają plecak."
    ]
  },
  "Kamienna Góra": {
    en: [
      "Kamienna Góra is a fortress town above the Kamienna stream—Vauban-style star forts face the Sudetes breeze.",
      "Textile mills followed weaving traditions from Bohemian refugees in the 1700s.",
      "Cable cars dream aside, the climb to the castle still earns you a wide Owl Mountains panorama."
    ],
    pl: [
      "Kamienna Góra to miasto-twierdza nad potokiem Kamienna — bastiony w stylu Vaubana wychylają się ku wiatrowi z Sudetów.",
      "Fabryki tkanin kontynuowały tradycje tkackie bońskich uchodźców z XVIII wieku.",
      "Kolejki linowe na boku — wejście na zamek wciąż nagradza szeroką panoramę Gór Sowich."
    ]
  },
  "Nakło nad Notecią": {
    en: [
      "Nakło nad Notecią guarded a ford where grain barges waited for deeper water toward Bydgoszcz.",
      "The Noteć splits meadows into chess squares; storks treat the rooftops like airport gates.",
      "Kuyavian dialect softens consonants here—listen for it at the riverside fish smokehouses."
    ],
    pl: [
      "Nakło nad Notecią strzegło brodu, gdzie barki zbożowe czekały na głębszą wodę w stronę Bydgoszczy.",
      "Notec kroi łąki w szachownicę; bociany traktują dachy jak bramki lotniska.",
      "Kujawska gwarą mięknie tu spółgłoska — posłuchaj nad wędzonymi rybami."
    ]
  },
  Nowe: {
    en: [
      "Nowe’s Gothic parish tower watches the dead-straight Vistula channel toward Gdańsk Bay.",
      "Teutonic grain taxes once stacked in warehouses whose timber frames still smell of river fog.",
      "The name simply means ‘new’—ironic for a town whose plan feels medieval-down-to-the-cobble."
    ],
    pl: [
      "Wieża gotyckiej fary w Nowem pilnuje prostej jak struna Wisły w stronę Zatoki Gdańskiej.",
      "Średniowieczne cła zbożowe krzyżackie składowano w spichlerzach, które wciąż pachną mgłą z rzeki.",
      "Nazwa znaczy „nowe” — ironicznie w mieście o średniowiecznej siatce bruku."
    ]
  },
  "Solec Kujawski": {
    en: [
      "Solec Kujawski hugs a Vistula bend famous among kayakers dodging tow ropes.",
      "Chemical plants and stork nests share the skyline—Poland’s riverside industrial romance.",
      "Friday trains to Toruń fill with students carrying climbing shoes for the old-town walls."
    ],
    pl: [
      "Solec Kujawski obciska zakole Wisły znane kajakarzom unikającym cum holowników.",
      "Zakłady chemiczne i gniazda bocianów dzielą panoramę — nadmorski romans, tylko rzeczny.",
      "Piątkowe pociągi do Torunia pełne studentów z butami wspinaczkowymi pod mury Starego Miasta."
    ]
  },
  Ryki: {
    en: [
      "Ryki straddle the Vistula’s sandy east bank where apples ship toward Warsaw markets.",
      "Flood markers on barn doors read like family trees—1947, 2010, and the quiet years between.",
      "Lublin commuters treat the bridge here as a time portal between capital buzz and riverside hush."
    ],
    pl: [
      "Ryki rozsiadły się na piaszczystym brzegu wschodnim Wisły, skąd jabłka jadą na warszawskie targi.",
      "Znaki powodzi na drzwiach stodoł czytają się jak drzewa genealogiczne — 1947, 2010 i ciche lata między.",
      "Dojazdowi z Lublina traktują most jak portal między stolicy gwarem a rzeczną ciszą."
    ]
  },
  "Janów Lubelski": {
    en: [
      "Janów Lubelski anchors the Roztocze fringe—chalk ravines begin just south of the market.",
      "Partisan stories cling to the forest museums; mushroom pickers know the same paths by quieter names.",
      "The town hall clock still rings early—livestock auctions start before the bakery queues."
    ],
    pl: [
      "Janów Lubelski kotwiczy skraj Roztocza — kredowe wąwozy zaczynają się tuż na południe od rynku.",
      "Opowieści partyzanckie trzymają się skansenów leśnych; grzybiarze znają te ścieżki ciszej.",
      "Ratuszowy zegar wciąż dzwoni wcześnie — targowisko bydła zaczyna się przed kolejką do piekarni."
    ]
  },
  "Łęczna": {
    en: [
      "Łęczna sits on the Lublin coal basin’s lip—pits to the east, pilgrimage chapels to the west.",
      "Football chants from the municipal stadium bounce off slag heaps turned into parks.",
      "Polesia-bound trains change crews here; the air smells alternately of linden and diesel."
    ],
    pl: [
      "Łęczna siedzi na krawędzi lubelskiego zagłębia — na wschodzie szyby, na zachodzie kapliczki pielgrzymkowe.",
      "Śpiewy kibiców ze stadionu odbijają się od hałd przerobionych na parki.",
      "Pociągi w stronę Polesia wymieniają załogi; powietrze pachnie na zmianę lipą i dieslem."
    ]
  },
  Gubin: {
    en: [
      "Gubin and German Guben were one town until 1945—twin markets face each other across the Neisse parks.",
      "Factory whistles crossed the river for a century; today cyclists chase the EuroVelo stencil.",
      "Borderland roses climb factory walls, proof gardeners ignore politics."
    ],
    pl: [
      "Gubin i niemieckie Guben były jednym miastem do 1945 — bliźniacze rynki patrzą na siebie przez parki nad Nysą.",
      "Fabryczne gwizdki przechodziły przez rzekę przez stulecie; dziś rowerzyści gonią znaki EuroVelo.",
      "Pograniczne róże pną się po murach fabryk — ogrodnicy lekceważą politykę."
    ]
  },
  "Strzelce Krajeńskie": {
    en: [
      "Strzelce Krajeńskie crowns a wedge of lakes toward Gorzów—sailors call it the gateway rigging town.",
      "Post-glacial hills hide tiny castles converted into youth hostels.",
      "Cherry distilleries perfume June evenings; winter smells only of snowmobile exhaust and pine."
    ],
    pl: [
      "Strzelce Krajeńskie wieńczą klin jezior w stronę Gorzowa — żeglarze mówią o „mieście bramowych takielunków”.",
      "Morenowe wzgórza chowają zamczyska przerobione na hostele młodzieżowe.",
      "Wiśniówka pachnie czerwcowymi wieczorami; zimą tylko spaliny skuterów śnieżnych i sosna."
    ]
  },
  Ozorków: {
    en: [
      "Ozorków’s mills drank the Bzura brown with dye until the river ran rainbows—now cleaner, still busy.",
      "Łódź agglomeration swallowed the commute; the church spire is the last landmark before fields.",
      "Basketball kids practice under lamps strung between pre-war factory wings."
    ],
    pl: [
      "Ozorkowskie młyny poiły Brzurę barwnikami, aż rzeka miała tęczę — dziś czystsza, wciąż gwarna.",
      "Aglomeracja łyka dojazdy; wieża kościoła to ostatni znak przed polami.",
      "Koszykarze trenują pod lampami między skrzydłami przedwojennych fabryk."
    ]
  },
  "Konstantynów Łódzki": {
    en: [
      "Konstantynów Łódzki was planned as a model textile settlement—wide avenues for fire carts, narrow lanes for gossip.",
      "The Konstantynów factory clock is a local meme: ‘late unless it says early’.",
      "Trams from Łódź terminate with a sigh; cyclists continue toward the Łódź Hills reserve."
    ],
    pl: [
      "Konstantynów Łódzki zaplanowano jako wzorcową osadę włókienniczą — szerokie aleje dla wozów strażackich, wąskie dla plotek.",
      "Zegar fabryczny to lokalny mem: „spóźniony, dopóki nie mówi, że wcześnie”.",
      "Tramwaje z Łodzi kończą ze westchnieniem; rowerzyści jadą dalej pod rezerwat Wzniesień Łódzkich."
    ]
  },
  Głowno: {
    en: [
      "Głowno guards a bridge over the Moszczenica—wars once pivoted here between Mazovian and Łódź coalitions.",
      "Dairy cooperatives still label bottles with folk patterns from the 1920s.",
      "Storks on the water tower act like unpaid municipal mascots."
    ],
    pl: [
      "Głowno strzeże mostu na Moszczenicy — wojny kiedyś obracały się tu między mazowieckimi a łódzkimi sojuszami.",
      "Spółdzielnie mleczarskie wciąż etykietują butelki ludowymi wzorami z lat 20.",
      "Bociany na wieży ciśnień zachowują się jak nieopłaceni maskotki gminy."
    ]
  },
  Brzesko: {
    en: [
      "Brzesko’s market hall smells of Carpathian cheese trucks heading toward Kraków chefs.",
      "The Dunajec lowlands start flattening here—rafters finish their runs with a town-square meal.",
      "WWI monuments share walls with new EU-funded bike racks—layers of civic pride."
    ],
    pl: [
      "Hala w Brzesku pachnie wozami z karpackim serem jadącymi do krakowskich szefów.",
      "Nizina dunajecka zaczyna tu się płaskać — flisacy kończą spływ posiłkiem na rynku.",
      "Pomniki z I wojny dzielą mur z nowymi stojakami rowerowymi z UE — warstwy dumy obywatelskiej."
    ]
  },
  Kęty: {
    en: [
      "Kęty breathe factory air from the Bielsko industrial crescent—yet the Soła still runs clear enough for kayaks.",
      "Papal biographies mention the town because families here sent priests to Rome and engineers to Vienna.",
      "Friday night lights come from both stadiums and arc furnaces."
    ],
    pl: [
      "Kęty oddychają fabrycznym powietrzem łuku bielskiego — a Soła wciąż na tyle czysta na kajaki.",
      "Biografie papieskie wspominają miasto, bo stąd szły rodziny księży do Rzymu i inżynierów do Wiednia.",
      "Piątkowe światła to stadiony i łuk elektryczny w hucie."
    ]
  },
  Ząbki: {
    en: [
      "Ząbki grew where Warsaw’s post-war housing spilled past the capital line—metro construction keeps nibbling the border.",
      "The name means ‘teeth’; dentists’ billboards grin from every second corner.",
      "Morning SKM trains smell of coffee thermoses and yesterday’s forest run mud."
    ],
    pl: [
      "Ząbki urosły tam, gdzie powojenne bloki wylały się poza granicę stolicy — metro gryzie coraz bliżej.",
      "Nazwa znaczy „zęby”; gabinetowe uśmiechy z billboardów co drugi róg.",
      "Poranne SKM pachną termosami z kawą i błotem z wczorajszego biegu w lesie."
    ]
  },
  Marki: {
    en: [
      "Marki’s forests were royal hunting grounds; now they’re dog-walking CEO territory.",
      "The paper mill’s whistle once set school clocks across three villages.",
      "Cyclists sprint the last flat kilometers before Warsaw’s bridges."
    ],
    pl: [
      "Marki — lasy królewskich polowań; dziś teren spacerów CEO z psami.",
      "Gwizdek papierni kiedyś ustawiał szkolne zegarki w trzech wsiach.",
      "Rowerzyści sprintem pokonują ostatnie płaskie kilometry przed mostami Warszawy."
    ]
  },
  "Zdzieszowice": {
    en: [
      "Zdzieszowice is a bite-sized Opole basin town where weekend anglers debate carp recipes in three languages.",
      "Slag from old coking plants colours the bike path red—accidental Martian tourism.",
      "Church bells and freight horns sync only on public holidays."
    ],
    pl: [
      "Zdzieszowice to małe miasto kotliny opolskiej, gdzie wędkarze weekendowi spierają się o karpia w trzech językach.",
      "Żużel ze starych koksowni farbuje ścieżkę rowerową na czerwono — przypadkowy marsjański turystyczny.",
      "Dzwony i klaksony towarówek synchronizują się tylko w święta."
    ]
  },
  Nisko: {
    en: [
      "Nisko’s aviation plant history still shows up in hobbyist drone clubs meeting at the culture house.",
      "The San tributary meadows flood in spring, turning back roads into canoe shortcuts.",
      "Subcarpathian hipsters drive here for craft mead—bees don’t care about voivodeship lines."
    ],
    pl: [
      "Lotnicze tradycje Niska wciąż wracają w klubach dronowych w domu kultury.",
      "Łąki przy dopływie Sanu wiosną toną — polne drogi stają się skrótami dla kajaków.",
      "Podkarpacki hipsterzy przyjeżdżają po miód pitny — pszczoły lekceważą granice województw."
    ]
  },
  Mońki: {
    en: [
      "Mońki anchor the Knyszyn Forest’s north edge—bison traffic signs are serious business.",
      "Potato festivals here outshine pop concerts for sheer decibel enthusiasm.",
      "Trains to Białystok carry students asleep over Latin homework."
    ],
    pl: [
      "Mońki kotwiczą północną krawędź Puszczy Knyszyńskiej — znaki z żubrem są tu poważną sprawą.",
      "Festiwale ziemniaka przewyższają koncerty pod względem entuzjazmu decybelowego.",
      "Pociągi do Białegostoku wożą śpiących uczniów nad pracą domową z łaciny."
    ]
  },
  Reda: {
    en: [
      "Reda’s stream name became a commuter city—Kashubian flags fly next to tech-park glass.",
      "Forest trains to Hel still feel like summer camp, even for suited accountants.",
      "Smoked fish from roadside vans defines the aroma of Friday afternoons."
    ],
    pl: [
      "Z potoku Reda zrobiło się miasto pendlerskie — kaszubskie flagi obok szkła parków technologicznych.",
      "Pociągi w lasy na Hel wciąż jak obóz, nawet dla księgowych w garniturach.",
      "Wędzona ryba z przydrożnych vanów to zapach piątkowych popołudni."
    ]
  },
  "Piekary Śląskie": {
    en: [
      "Piekary Śląskie hosts a basilica that swallows entire pilgrim trains each May.",
      "Miners’ choirs rehearse in basements under neon kebab signs—Silesian normal.",
      "The city’s name means ‘bakers’, but the smell is more coal dust than bread."
    ],
    pl: [
      "Piekary Śląskie mają bazylikę, która połyka całe pielgrzymkie pociągi co maja.",
      "Chóry górnicze ćwiczą w piwnicach pod neonami kebabów — śląska normalność.",
      "Nazwa znaczy „piekary”, ale pachnie bardziej pyłem węglowym niż chlebem."
    ]
  },
  "Kazimierza Wielka": {
    en: [
      "Kazimierza Wielka borrows a royal name for a quiet Nida valley market—no castle, plenty of orchards.",
      "Limestone cutters still supply Kraków restoration yards.",
      "The town square fits in one panorama photo—tourists underestimate the hiking westward."
    ],
    pl: [
      "Kazimierza Wielka pożyczyła królewską nazwę dla cichego rynku nad Nidą — bez zamku, za to z sadami.",
      "Kamieniarze wciąż zaopatrują krakowskie place renowacyjne.",
      "Rynek mieści się w jednym zdjęciu panoramy — turyści nie doceniają szlaków na zachód."
    ]
  },
  Trzcianka: {
    en: [
      "Trzcianka sits where the Noteć pinches toward Piła—kayak rental shops outnumber cinemas.",
      "Forestry towers track deer; phone apps track mushroom pickers.",
      "Dialect jokes about ‘two Trzciankas’ confuse outsiders happily."
    ],
    pl: [
      "Trzcianka siedzi tam, gdzie Notec pinchuje ku Pile — wypożyczalni kajaków więcej niż kin.",
      "Wieże leśne śledzą jelenie; aplikacje — grzybiarzy.",
      "Żarty gwarowe o „dwóch Trzciankach” szczęśliwie mylą przyjezdnych."
    ]
  },
  Police: {
    en: [
      "Police’s name confuses English speakers—here it means a medieval Polician settlement, not officers.",
      "The Odra backchannels braid around chemical plants turned nature reserves.",
      "Ferry horns to Świnoujście drift over allotment gardens at dawn."
    ],
    pl: [
      "Nazwa Police myli anglojęzycznych — tu chodzi o średniowieczną osadę, nie o funkcjonariuszy.",
      "Starorzecza Odry plączą się wokół zakładów przerobionych na rezerwaty.",
      "Klaksony promów do Świnoujścia płyną nad ogródkami działkowymi o świcie."
    ]
  },
  Gryfino: {
    en: [
      "Gryfino’s twisted oak in the park is a European celebrity—guides speak in whispers around it.",
      "German Gryfenhagen left half-timbered ghosts in the old streets.",
      "Odra bicycle ferries feel like secret portals to Szczecin cafés."
    ],
    pl: [
      "Krzywy dąb w parku w Gryfinie to europejska celebryta — przewodnicy szepczą w jego pobliżu.",
      "Niemieckie Gryfenhagen zostawiło szachulcowe duchy na starych ulicach.",
      "Promy rowerowe na Odrze jak tajne portale do szczecińskich kawiarni."
    ]
  },
  "Drawsko Pomorskie": {
    en: [
      "Drawsko Pomorskie trains NATO units on sandy scrub—locals joke about tanks ruining mushroom spots.",
      "The Drawa river links lakes like a blue necklace for canoeists.",
      "Winter ice sailing on closed reservoir bays looks like silent dragonflies."
    ],
    pl: [
      "Drawsko Pomorskie trenuje jednostki NATO na piaskach — mieszkańcy żartują, że czołgi psują grzybobranie.",
      "Drawa łączy jeziora jak niebieski naszyjnik dla kajakarzy.",
      "Lodowe żagle na zatokach zaporowych wyglądają jak ciche ważki."
    ]
  },
  Łobez: {
    en: [
      "Łobez’s railway junction once moved Baltic timber south; now it moves students with headphones.",
      "The Rega headwaters begin as ditches you could hop across—hard to believe downstream surf schools.",
      "Gothic brick whispers through plaster; fire rebuilt the town more than once."
    ],
    pl: [
      "Łobez — stacja, która kiedyś wożenie drewna z Bałtyku na południe; dziż woży studentów ze słuchawkami.",
      "Źródła Regi zaczynają jako rowy do przeskoczenia — trudno uwierzyć w szkoły surfingu w dolnym biegu.",
      "Ceglany gotyk szepcze spod tynku; pożary odbudowywały miasto więcej niż raz."
    ]
  }
};

/** @internal */
export function pickMoreCityFact(namePl: string, lang: UILang, salt: number): string | null {
  const row = CITY_FACT_MORE[namePl];
  if (!row) return null;
  const arr = lang === "pl" ? row.pl : row.en;
  if (!arr.length) return null;
  return arr[salt % arr.length]!;
}
