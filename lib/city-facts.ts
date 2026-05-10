import { CITIES } from "./cities";
import type { UILang } from "./quiz-engine";
import { voivById } from "./voivodeships";

type Rot = { en: string[]; pl: string[] };

/** Rotating micro-facts keyed by Polish city name (matches `CITIES`). */
export const CITY_FACT_ROTATIONS: Record<string, Rot> = {
  Wrocław: {
    en: [
      "Wrocław hosts over 300 small bronze gnome statues across the Old Town.",
      "The Centennial Hall is an early reinforced-concrete UNESCO landmark.",
      "The Oder’s islands made Wrocław a Hanseatic bridge between Silesia and the Baltic."
    ],
    pl: [
      "We Wrocławiu jest ponad 300 małych brązowych krasnali w Starym Mieście.",
      "Hala Stulecia to wczesny żelbetowy obiekt z listy UNESCO.",
      "Wyspy Odry uczyniły z Wrocławia hanzeatycki most między Śląskiem a Bałtykiem."
    ]
  },
  Wałbrzych: {
    en: [
      "Wałbrzych grew around coal seams that drove Silesian industrial suburbs.",
      "Ksiaz Castle above the city is one of Poland’s largest aristocratic residences.",
      "Deep mines here once employed tens of thousands under the Owl Mountains."
    ],
    pl: [
      "Wałbrzych rozrósł się wokół pokładów węgla śląskiego zagłębia.",
      "Zamek Książ nad miastem to jedna z największych rezydencji magnackich.",
      "Głębokie kopalnie zatrudniały niegdyś dziesiątki tysięcy ludzi pod Górami Sowimi."
    ]
  },
  "Jelenia Góra": {
    en: [
      "Jelenia Góra is the main gateway city to the Karkonosze ridge walks.",
      "Baroque merchants’ houses ring a market square rebuilt after fires.",
      "The Foothills Trail starts nearby toward castles on volcanic necks."
    ],
    pl: [
      "Jelenia Góra to główna brama wycieczek w Karkonosze.",
      "Kamienice barokowe otaczają rynek odbudowany po pożarach.",
      "Szlak przez Pogórze Karkonoskie prowadzi ku zamkom na neckach wulkanicznych."
    ]
  },
  Legnica: {
    en: [
      "Legnica’s 1241 battle against Mongols became a medieval European landmark defeat.",
      "Copper industry still echoes in the region’s geology and museum collections.",
      "Piast dukes ruled Lower Silesia from Legnica’s brick castle for centuries."
    ],
    pl: [
      "Bitwa pod Legnicą (1241) z Mongołami weszła do średniowiecznej historii Europy.",
      "Przemysł miedziowy wciąż przypomina geologia regionu i muzea.",
      "Książęta piastowscy rządzili Śląskiem z legnickiego zamku przez wieki."
    ]
  },
  Bydgoszcz: {
    en: [
      "Bydgoszcz’s granaries line the Brda, once storing grain bound for Gdańsk.",
      "The city is twinned musically with a famous canal-powered industrial heritage trail.",
      "Art Nouveau façades along Gdańska Street rival larger Polish boulevards."
    ],
    pl: [
      "Spichlerze przy Brdzie przechowywały zboże w drodze do Gdańska.",
      "Miasto łączy dziedzictwo przemysłowe z szlakami nad kanałami.",
      "Secesja przy ul. Gdańskiej dorównuje większym polskim alejom."
    ]
  },
  Toruń: {
    en: [
      "Toruń’s medieval centre is UNESCO-listed for untouched brick Gothic.",
      "Copernicus was born here; the planetarium and gingerbread museums draw families.",
      "The Vistula cliff still undercuts defensive walls above shipping lanes."
    ],
    pl: [
      "Średniowieczne Toruń jest na liście UNESCO dzięki ceglanemu gotykowi.",
      "Tu urodził się Kopernik; planetarium i muzeum pierników przyciągają rodziny.",
      "Skarpa wiślana wciąż podcina mury obronne nad szlakiem żeglugowym."
    ]
  },
  Grudziądz: {
    en: [
      "Grudziądz’s tall granaries photograph like a stone ladder above the Vistula.",
      "Teutonic knights fortified the river crossing toward Chełmno land.",
      "The city’s escarpment gives wide views across the floodplain."
    ],
    pl: [
      "Wysokie spichlerze Grudziądza wyglądają jak kamienna drabina nad Wisłą.",
      "Krzyżacy fortyfikowali przeprawę w stronę ziemi chełmińskiej.",
      "Skarpa daje szerokie widoki na rozlewiska."
    ]
  },
  Włocławek: {
    en: [
      "Włocławek’s dam and reservoir regulate one of the Vistula’s widest bends.",
      "The cathedral holds Poland’s largest medieval polychrome wood ceilings.",
      "Chemical plants downstream historically used local salt and brine routes."
    ],
    pl: [
      "Zapora i zalew regulują jeden z najszerszych zakol Wisły.",
      "Katedra kryje największe średniowieczne polichromowane stropy drewniane w kraju.",
      "Zakłady chemiczne korzystały z soli i solanek regionu."
    ]
  },
  Lublin: {
    en: [
      "Lublin’s Union of 1569 sealed the Polish–Lithuanian Commonwealth in the castle chapel.",
      "Open-air Village Museum preserves wooden churches moved from the east.",
      "The city mixes Catholic, Jewish, and Orthodox layers in one dense old core."
    ],
    pl: [
      "Unia lubelska (1569) w zamkowej kaplicy związała Koronę z Litwą.",
      "Muzeum Wsi Lubelskiej zbiera drewniane cerkwie i kościoły z przesiedleń.",
      "Miasto miesza warstwy katolickie, żydowskie i prawosławne w jednym centrum."
    ]
  },
  Zamość: {
    en: [
      "Zamość was planned as a Renaissance ideal city on a geometric grid.",
      "Italian architects brought arcaded squares to this trade crossroads.",
      "UNESCO cites its intact fortifications and merchant housing ensemble."
    ],
    pl: [
      "Zamość zaplanowano jako renesansowe miasto idealne na geometrycznej siatce.",
      "Włoscy architekci przywieźli arkadowe place na rozstaju szlaków.",
      "UNESCO wyróżnia fort i zespół kamienic kupieckich."
    ]
  },
  Chełm: {
    en: [
      "Chełm’s chalk tunnels under the market square are a maze of cellars.",
      "The town mixes Polish and Eastern-rite church traditions on the border ridge.",
      "Underground waterworks once supplied a hilltop stronghold."
    ],
    pl: [
      "Chełmskie kredowe podziemia pod rynkiem tworzą labirynt piwnic.",
      "Miasto łączy tradycje kościelne na grzbiecie pogranicza.",
      "Podziemne wodociągi zaopatrywały warownię na wzgórzu."
    ]
  },
  "Zielona Góra": {
    en: [
      "Zielona Góra celebrates a wine hill with a vineyard above the city centre.",
      "Post-war settlers from central Poland reshaped its demographic after border shifts.",
      "The Lubusz uplands give milder microclimates for grape varieties."
    ],
    pl: [
      "Winobraniowa tradycja — winnica na wzgórzu nad śródmieściem.",
      "Osadnicy z powojennej repatriacji odmienili skład ludności po przesunięciu granic.",
      "Wyżyna lubuska daje łagodniejszy mikroklimat dla odmian winorośli."
    ]
  },
  "Gorzów Wielkopolski": {
    en: [
      "Gorzów sits on the Warta as a northern anchor of Lubusz voivodeship.",
      "Gothic brick churches recall Brandenburg-era town charters.",
      "Forests north of the city feed paper mills along the river."
    ],
    pl: [
      "Gorzów leży na Warcie jako północna kotwica Lubuskiego.",
      "Gotyckie ceglane kościoły przypominają czasy brandenburskich przywilejów.",
      "Lasy na północ od miasta zasilają papiernie nad rzeką."
    ]
  },
  Łódź: {
    en: [
      "Łódź’s Piotrkowska is one of Europe’s longest commercial thoroughfares.",
      "Red-brick factories and chimneys define the city’s 19th-century textile boom.",
      "The city became a film school hub producing directors known worldwide."
    ],
    pl: [
      "Piotrkowska należy do najdłuższych europejskich ulic handlowych.",
      "Ceglane fabryki i kominy to znak XIX-wiecznego boomu włókienniczego.",
      "Miasto stało się ośrodkiem szkoły filmowej znanej na świecie."
    ]
  },
  "Piotrków Trybunalski": {
    en: [
      "Royal tribunals met here, giving the town its middle name.",
      "The old market’s arcades shelter small museums of burgher life.",
      "It sits on a dry Vistula terrace route between Warsaw and Silesia."
    ],
    pl: [
      "Trybunały królewskie dały miastu środkową nazwę.",
      "Arkady rynku kryją muzea małomiasteczkowego życia.",
      "Leży na suchym tarasie wiślanym między Warszawą a Śląskiem."
    ]
  },
  Skierniewice: {
    en: [
      "Skierniewice’s palace belonged to archbishops of Gniezno as a rural residence.",
      "Rail junctions made it a grain and sugar-beet logistics point.",
      "The vast park still frames French-style alleys from the Congress era."
    ],
    pl: [
      "Pałac należał do arcybiskupów gnieźnieńskich jako letnia rezydencja.",
      "Węzły kolejowe uczyniły je punktem logistyki zboża i buraków.",
      "Park z francuskimi alejkami pochodzi jeszcze z epoki kongresowej."
    ]
  },
  Kraków: {
    en: [
      "Kraków’s Cloth Hall sustained Europe’s medieval export of textiles and salt.",
      "Wawel Cathedral holds royal tombs spanning the Jagiellonian era.",
      "Kazimierz district preserves synagogues beside the Vistula boulevards."
    ],
    pl: [
      "Sukiennice utrzymywały średniowieczny eksport tekstyliów i soli.",
      "Katedra na Wawelu kryje groby królewskie z epoki jagiellonskiej.",
      "Kazimierz zachował synagogi przy bulwarach wiślanych."
    ]
  },
  Tarnów: {
    en: [
      "Tarnów’s Renaissance town hall tower overlooks arcaded merchants’ houses.",
      "The region’s oil heritage began with shallow drills before Galician fields.",
      "Ethnic diversity before WWII included sizeable Jewish and Roma communities."
    ],
    pl: [
      "Ratusz renesansowy z wieżą góruje nad arkadami kupieckimi.",
      "Lokalne tradycje naftowe zaczęły się od płytkich odwiertów.",
      "Przed wojną miasto było wieloetniczne — Żydzi i Romowie."
    ]
  },
  "Nowy Sącz": {
    en: [
      "Nowy Sącz guards the Dunajec gorge route toward the Tatras’ northern forelands.",
      "The ethnographic open-air museum shows wooden churches from the Carpathians.",
      "Trade fairs linked Hungarian wine routes with Polish highland timber."
    ],
    pl: [
      "Nowy Sącz strzeże przełomu Dunajca w stronę podtatrzańskich pogórzy.",
      "Skansen pokazuje drewniane kościoły z obszaru karpackiego.",
      "Jarmarki łączyły węgierskie szlaki winne z karpackim drewnem."
    ]
  },
  Warszawa: {
    en: [
      "Warsaw’s Old Town was meticulously rebuilt from 18th-century surveys after WWII.",
      "The Vistula boulevards now host beaches and concerts beside flood embankments.",
      "Łazienki Park preserves the last king’s palace on an island amphitheatre."
    ],
    pl: [
      "Stare Miasto odbudowano po wojnie według XVIII-wiecznych pomiarów.",
      "Bulwary wiślane to dziś plaże i koncerty przy wałach przeciwpowodziowych.",
      "Łazienki Królewskie kryją pałac ostatniego króla na wyspie."
    ]
  },
  Radom: {
    en: [
      "Radom’s industry supplied arms and machinery during Poland’s interwar arms programmes.",
      "Kazimierz the Great’s charter shaped its grid near the Mleczna river.",
      "The city anchors the eastern fringe of the Mazovian lowland."
    ],
    pl: [
      "Radomski przemysł zasilał programy zbrojeniowe II RP.",
      "Przywilej Kazimierza Wielkiego ukształtował siatkę miasta nad Mleczną.",
      "Miasto kotwiczy wschodnią krawędź mazowieckiego niżu."
    ]
  },
  Płock: {
    en: [
      "Płock’s Romanesque cathedral contains sculpted bronze doors from the 12th century.",
      "Refineries downstream process crude from the Płock-Vistula pipeline corridor.",
      "The Vistula narrows here into a historic transshipment point."
    ],
    pl: [
      "Romaneska katedra kryje brązowe drzwi z XII wieku.",
      "Rafinerie przerabiają ropę z korytarza rurociągowego Płock–Wisła.",
      "Wisła zwęża się tu w historycznym punkcie przeładunku."
    ]
  },
  Siedlce: {
    en: [
      "Siedlce’s palace theatre recalls aristocratic patronage before partitions.",
      "The city sits on loess plateaus that grow excellent winter wheat.",
      "Eastern rail lines toward Białystok cross marshy river heads here."
    ],
    pl: [
      "Pałacowy teatr przypomina mecenat magnacki sprzed rozbiorów.",
      "Miasto stoi na lessowych płytach pod dobrą pszenicę ozimą.",
      "Linie na wschód w stronę Białegostoku krzyżują się nad mokradłami."
    ]
  },
  Opole: {
    en: [
      "Opole’s annual Polish Song Festival fills an amphitheatre on the Oder islands.",
      "The Piast tower is among the oldest brick keeps on the Oder line.",
      "Bilingual street signage reflects the voivodeship’s minority culture."
    ],
    pl: [
      "Krajowy Festiwal Piosenki Polskiej wypełnia amfiteatr na wyspach Odry.",
      "Wieża piastowska to jedna z najstarszych ceglaných warowni nad Odrą.",
      "Dwujęzyczne tablice odzwierciedlają kulturę mniejszości."
    ]
  },
  "Kędzierzyn-Koźle": {
    en: [
      "Kędzierzyn-Koźle’s river port loads coal chemicals onto barges.",
      "The twin-town merger joined medieval Koźle with industrial Kędzierzyn.",
      "Canal links here integrate Upper Silesian plants with European waterways."
    ],
    pl: [
      "Port rzeczny załaduje produkty chemiczne z węgla na barki.",
      "Połączenie miast złączyło średniowieczne Koźle z przemysłowym Kędzierzynem.",
      "Kanały łączą zakłady Górnego Śląska z europejskimi szlakami wodnymi."
    ]
  },
  Rzeszów: {
    en: [
      "Rzeszów’s underground tourist route threads through WWII tunnels beneath the market.",
      "The city is a logistics hub toward Ukraine along modern motorways.",
      "Bernardine churches and synagogues share proximity in the old centre."
    ],
    pl: [
      "Podziemna trasa turystyczna prowadzi przez tunele z czasów II wojny.",
      "Miasto to węzeł logistyczny w stronę Ukrainy nowymi autostradami.",
      "Kościoły bernardyńskie i synagogi sąsiedzą w starym centrum."
    ]
  },
  Przemyśl: {
    en: [
      "Przemyśl’s fortress sieges in WWI became textbook examples of prolonged encirclement.",
      "The San river gorge divides the old town from the railway border crossing.",
      "Mixed Roman and Greek Catholic heritage marks this Carpathian gateway."
    ],
    pl: [
      "Twierdza przemyśla z I wojny to klasyk długiego oblężenia.",
      "Przełom Sanu dzieli stare miasto od kolejowego przejścia granicznego.",
      "Dziedzictwo katolickie wschodnie i łacińskie zaznacza tę bramę karpacką."
    ]
  },
  Krosno: {
    en: [
      "Krosno pioneered Polish oil drilling in the 19th-century Carpathian foothills.",
      "Glassworks traditions still supply laboratory and decorative glassware.",
      "The market square’s arcades shelter small craft shops toward Slovakia."
    ],
    pl: [
      "Krosno zapoczątkowało polskie odwierty naftowe w XIX wieku w pogórzu.",
      "Tradycje szklarskie wciąż dają szkło laboratoryjne i ozdobne.",
      "Arkady rynku kryją rzemiosło na szlaku w stronę Słowacji."
    ]
  },
  Białystok: {
    en: [
      "Białystok’s Branicki palace earned it the nickname “Versailles of Podlachia.”",
      "The city mixes Catholic, Orthodox, and Muslim communities in one grid.",
      "Textile mills once powered by the Biała river supplied Russian imperial markets."
    ],
    pl: [
      "Pałac Branickich dał przydomek „wersalu Podlasia”.",
      "Miasto łączy wspólnoty katolickie, prawosławne i muzułmańskie w jednej siatce.",
      "Fabryki włókiennicze nad Białą zaopatrywały niegdyś rynek rosyjski."
    ]
  },
  Suwałki: {
    en: [
      "Suwałki records some of Poland’s coldest winter nights in frosty inversions.",
      "Post-glacial lakes and eskers make it a quiet canoe region.",
      "The Augustów Canal begins its chain of locks not far away."
    ],
    pl: [
      "Suwałki notują mroźne inwersje — jedne z najniższych temperatur w kraju.",
      "Jeziora i ozu po zlodowaceniu to spokojny region kajakowy.",
      "Niedaleko zaczyna się łańcuch śluz Kanału Augustowskiego."
    ]
  },
  Łomża: {
    en: [
      "Łomża anchors the Narew’s braided channel popular with paddlers.",
      "Timber rafting once floated logs north toward Prussian sawmills.",
      "The cathedral hill overlooks wetlands protected as Natura 2000 sites."
    ],
    pl: [
      "Łomża kotwiczy rozlewiska Narewu — ulubione kajakarzy.",
      "Spławy drewna niegdyś prowadziły na północ do pruskich tartaków.",
      "Wzgórze katedralne góruje nad mokradłami Natura 2000."
    ]
  },
  Gdańsk: {
    en: [
      "Gdańsk’s Crane lifted masts onto Hanseatic cogs in the Motława harbour.",
      "Solidarity was born in Lenin Shipyard halls along the waterfront.",
      "Amber workshops still polish “Baltic gold” for export jewellery."
    ],
    pl: [
      "Żuraw podnosił maszty na kogi hanzeatyckie w porcie motławskim.",
      "Solidarność narodziła się w halach Stoczni Gdańskiej.",
      "Warsztaty bursztynnicze wciąż szlifują „złoto Bałtyku”."
    ]
  },
  Gdynia: {
    en: [
      "Gdynia was planned from fishing village to modernist port in the interwar years.",
      "Ocean liners and ferries still berth below Kamienna Góra viewpoints.",
      "The city’s boulevards showcase 1930s marine architecture."
    ],
    pl: [
      "Gdynię zbudowano z wioski rybackiej na modernistyczny port międzywojnia.",
      "Transatlantyki i promy cumują pod widokiem Kamiennej Góry.",
      "Bulwary pokazują morską architekturę lat 30."
    ]
  },
  Słupsk: {
    en: [
      "Słupsk’s Griffin dukes’ castle keeps one of Europe’s heavier tower tilts.",
      "The Słupia river drove mills before emptying into the Baltic dunes.",
      "Kashubian influences colour local speech and festival costumes."
    ],
    pl: [
      "Zamek Gryfitów ma jedną z wyraźniejszych wieżowych przyczółów w Europie.",
      "Słupia napędzała młyny zanim dotrze do wydm nad Bałtykiem.",
      "Wpływy kaszubskie barwią mowę i stroje festiwalowe."
    ]
  },
  Katowice: {
    en: [
      "Katowice hosts the International Congress Centre beside a former mining fairground.",
      "The city’s sponge district grew around deep shafts of the Upper Silesian basin.",
      "Modernist “Wojewódzka” street shows interwar confidence in heavy industry."
    ],
    pl: [
      "Katowice mają Międzynarodowe Centrum Kongresowe przy dawnych terenach targów górniczych.",
      "Miasto rosło wokół szybów górnośląskiego zagłębia.",
      "Modernistyczna ul. Wojewódzka pokazuje międzywojenną wiarę w przemysł ciężki."
    ]
  },
  Częstochowa: {
    en: [
      "Częstochowa’s Jasna Góra icon draws walking pilgrims on trails from across Europe.",
      "The Warta limestone ridge hosts caves once used as hermit cells.",
      "Textile plants between the wars earned it the nickname “Manchester of Poland.”"
    ],
    pl: [
      "Ikona na Jasnej Górze przyciąga pieszych pielgrzymów z całej Europy.",
      "Wapienne wzgórza Warty kryją jaskinie pustelnicze.",
      "Fabryki włókiennicze dały przydomek „Manchester Polski”."
    ]
  },
  Gliwice: {
    en: [
      "Gliwice’s radio tower staged a staged attack that preceded WWII’s invasion.",
      "The city’s historic coal gasworks buildings host cultural venues today.",
      "Canals still link chemical plants toward the Oder waterway."
    ],
    pl: [
      "Radiostacja była miejscem „prowokacji gliwickiej” przed wojną.",
      "Zabudowa dawnej gazowni węglowej dziś gospodaruje kulturą.",
      "Kanały łączą zakłady chemiczne w stronę Odry."
    ]
  },
  "Bielsko-Biała": {
    en: [
      "Bielsko-Biała stitches two valley towns at the Silesian–Lesser Polish linguistic seam.",
      "Textile and automotive suppliers cluster along the Biała river gorge.",
      "Fin de siècle villas climb forested slopes toward the Beskid trails."
    ],
    pl: [
      "Bielsko-Biała scala dwie doliny na styku gwary śląskiej i małopolskiej.",
      "Dostawcy włókienniczy i motoryzacyjni grupują się wzdłuż przełomu Białej.",
      "Wille fin de siècle pną się pod lasy beskidzkich szlaków."
    ]
  },
  Kielce: {
    en: [
      "Kielce’s geology museum explains why Swedish armies fought over local ore veins.",
      "The palace bishops’ residence faces a baroque cathedral on a market hill.",
      "Ski jumpers train on artificial hills east of the city on smaller ranges."
    ],
    pl: [
      "Muzeum geologiczne tłumaczy, czemu Szwedzi walczyli o miejscowe żyły rud.",
      "Pałac biskupów krakowskich stoi naprzeciw barokowej katedry na wzgórzu.",
      "Skocznie narciarskie trenują na wschód od miasta na niższych pasmach."
    ]
  },
  "Ostrowiec Świętokrzyski": {
    en: [
      "Ostrowiec’s steel plant symbolised socialist-era heavy industry beside Kamienna.",
      "The Świętokrzyskie ore trail links museum sites of medieval smelting.",
      "Forests south hide bunkers from wartime arms programmes."
    ],
    pl: [
      "Huta symbolizuje ciężki przemysł PRL nad Kamienną.",
      "Szlak rud świętokrzyskich łączy muzea średniowiecznego wytopu.",
      "Lasy na południu kryją bunkry programów zbrojeniowych z wojny."
    ]
  },
  Olsztyn: {
    en: [
      "Olsztyn’s castle keep still carries Copernicus’ hand-drawn astronomical tables.",
      "The city gates Masuria’s lake district toward the Vistula gap.",
      "Brick Gothic churches recall Teutonic chapter administration of Warmia."
    ],
    pl: [
      "Wieża zamku nosi odręczne tablice astronomiczne Kopernika.",
      "Miasto bramkuje mazurskie jeziora w stronę Bramy Wisły.",
      "Gotyckie cegły kościołów przypominają kapitułę krzyżacką na Warmii."
    ]
  },
  Elbląg: {
    en: [
      "Elbląg’s inclined-plane canal lifts yachts across watersheds toward the lakes.",
      "The old town was rebuilt after WWII with archaeological layers exposed in cellars.",
      "Teutonic grain warehouses once faced the Vistula Lagoon trade."
    ],
    pl: [
      "Pochylnie kanału podnoszą jachty międzydzielnie w stronę jezior.",
      "Stare Miasto odbudowano z odsłoniętymi warstwami archeologii w piwnicach.",
      "Spichlerze krzyżackie kiedyś obsługiwały handel Zalewem Wiślanym."
    ]
  },
  Ełk: {
    en: [
      "Ełk’s namesake lake anchors canoe circuits through Masurian forests.",
      "Narrow-gauge railways once hauled peat and timber to local mills.",
      "The town square’s eclectic architecture reflects Prussian and Polish periods."
    ],
    pl: [
      "Jezioro Ełckie kotwiczy kajakowe pętle przez lasy mazurskie.",
      "Wąskotorówki woziły torf i drewno do tartaków.",
      "Eklektyczna zabudowa rynku łączy epoki pruską i polską."
    ]
  },
  Poznań: {
    en: [
      "Poznań’s town hall façade shows clockwork billy goats butting at noon.",
      "Trade fair grounds grew from Prussian-era exhibition halls beside the railway.",
      "Ostrów Tumski holds Poland’s first cathedral chapter on an island in the Warta."
    ],
    pl: [
      "Na poznańskim ratuszu koziołki tykają w południe.",
      "Targi wyrosły z pruskich hal wystawowych przy kolei.",
      "Ostrów Tumski kryje pierwszą katedralną kapitułę na wyspie w Warcie."
    ]
  },
  Kalisz: {
    en: [
      "Kalisz claims Poland’s oldest municipal charter along amber routes to Rome.",
      "The Prosna floodplains supported river port transshipment for centuries.",
      "Ceramic traditions still reference Roman-era kiln finds nearby."
    ],
    pl: [
      "Kalisz podaje najstarszy przywilej miejski na szlaku bursztynowym do Rzymu.",
      "Rozlewiska Prośny dawno służyły przeładunkom rzecznym.",
      "Ceramika nawiązuje do rzymskich pieców znalezionych w okolicy."
    ]
  },
  Konin: {
    en: [
      "Konin’s open-pit brown coal fed power plants that lit central Poland for decades.",
      "The Gosławice monastery island preserves a calm counterpoint to industry.",
      "The Warta terraces here host some of the country’s widest river meanders."
    ],
    pl: [
      "Odkrywki brunatnego węgla zasiliły elektrownie środkowej Polski.",
      "Wyspa klasztoru Gosławice to spokój obok przemysłu.",
      "Taras Wartry ma tu szerokie zakola rzeki."
    ]
  },
  Szczecin: {
    en: [
      "Szczecin’s seaport is Poland’s largest by cargo tonnage on the Oder estuary.",
      "Pomeranian dukes’ castle keeps a chain of brick wings above the river.",
      "Hanseatic cranes and terraces echo the city’s Baltic trading past."
    ],
    pl: [
      "Port Szczecin to największy pod względem ładunków na ujściu Odry.",
      "Zamek książąt pomorskich — łańcuch skrzydeł ceglanych nad rzeką.",
      "Żurawie i tarasy przypominają hanzeatycki handel bałtycki."
    ]
  },
  Koszalin: {
    en: [
      "Koszalin guards the transition from coastal dunes to inland lake forests.",
      "Gothic St Mary’s brick church anchors a market rebuilt after fires.",
      "Cold-war era radio astronomy dishes once listened from nearby heathland."
    ],
    pl: [
      "Koszalin strzeże przejścia od nadmorskich wydm do jeziornych lasów.",
      "Gotycki kościół Mariacki kotwiczy rynek odbudowany po pożarach.",
      "Radioastronomia zimnowojenna nasłuchiwała z pobliskich wrzosowisk."
    ]
  },
  Stargard: {
    en: [
      "Stargard’s defensive churches show how merchants fortified prayer halls.",
      "The Ina river once powered mills feeding Teutonic grain magazines.",
      "City walls preserve a rare sequence of medieval bastions toward Pyrzyce."
    ],
    pl: [
      "Warowne kościoły pokazują, jak kupcy fortyfikowali sale modlitwy.",
      "Ina napędzała młyny zasilające spichlerze krzyżackie.",
      "Mury zachowują rzadki ciąg średniowiecznych bastionów w stronę Pyrzyc."
    ]
  }
};

function genericCityFact(namePl: string, lang: UILang, salt: number): string {
  const c = CITIES.find((x) => x.namePl === namePl);
  if (!c) return "";
  const v = voivById.get(c.voivId);
  if (!v) return "";
  const templates =
    lang === "pl"
      ? [
          `${namePl} leży w województwie ${v.namePl} i jest jednym z ważniejszych punktów na mapie tego regionu.`,
          `Na mapie administracyjnej Polski ${namePl} należy do ${v.namePl} — ćwicz tę parę, by szybciej ją zapamiętać.`,
          `${namePl} to miasto w ${v.namePl}; stolicą województwa jest ${v.capitalPl}.`
        ]
      : [
          `${c.nameEn} lies in ${v.nameEn} and is a notable dot on this voivodeship’s map.`,
          `On Poland’s admin map, ${c.nameEn} belongs to ${v.nameEn} — drilling this pair helps it stick.`,
          `${c.nameEn} is a town in ${v.nameEn}; the voivodeship capital is ${v.capitalEn}.`
        ];
  return templates[salt % templates.length]!;
}

export function getCityFact(namePl: string, lang: UILang, salt: number): string {
  const row = CITY_FACT_ROTATIONS[namePl];
  if (row) {
    const arr = lang === "pl" ? row.pl : row.en;
    if (arr.length) return arr[salt % arr.length]!;
  }
  return genericCityFact(namePl, lang, salt);
}
