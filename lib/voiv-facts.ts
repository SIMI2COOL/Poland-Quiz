import type { UILang } from "./quiz-engine";

type Rot = { en: string[]; pl: string[] };

/** Multiple rotating facts per voivodeship (TERYT id). */
const VOIV_ROTATIONS: Record<string, Rot> = {
  "02": {
    en: [
      "Lower Silesia borders Germany and the Czech Republic along the Sudetes range.",
      "Karkonosze National Park protects alpine landscapes just above the Czech line.",
      "Wrocław’s market square and dwarf statues draw visitors to the regional capital.",
      "The region’s coal and copper legacy still shapes cities like Wałbrzych and Legnica.",
      "Jelenia Góra sits in the Hirschberg valley, a gateway to Karkonosze hiking."
    ],
    pl: [
      "Dolnośląskie graniczy z Niemcami i Czechami wzdłuż Sudetów.",
      "Karkonoski Park Narodowy chroni alpejskie krajobrazy tuż przy granicy z Czechami.",
      "Wrocławski Rynek i krasnale to wizytówka stolicy regionu.",
      "Dziedzictwo górnicze wciąż zaznacza się w Wałbrzychu czy Legnicy.",
      "Jelenia Góra leży w kotlinie pod Karkonoszami — wyjście na szlaki."
    ]
  },
  "04": {
    en: [
      "Kuyavia-Pomerania links historic Royal Prussia with Greater Poland’s Piast lands.",
      "Bydgoszcz and Toruń are paired capitals: waterways, granaries, and Copernicus’ birthplace.",
      "The Vistula and Brda rivers shaped grain trade and Teutonic-era fortifications here.",
      "Bory Tucholskie’s pine forests in the north are among Poland’s largest woodland blocks.",
      "Chełmno land north of Toruń still shows Gothic brick town planning."
    ],
    pl: [
      "Kujawsko-pomorskie łączy dawne Prusy Królewskie z ziemiami piastowskiej Wielkopolski.",
      "Bydgoszcz i Toruń to para stolic: wody, spichlerze i miejsce urodzenia Kopernika.",
      "Wisła i Brda ukształtowały handel zbożem i warownie z czasów krzyżackich.",
      "Bory Tucholskie to jeden z największych kompleksów sosnowych w kraju.",
      "Ziemia chełmińska na północ od Torunia zachowała gotycką siatkę miast."
    ]
  },
  "06": {
    en: [
      "Lublin Voivodeship fronts Belarus and Ukraine, mixing Eastern and Western heritage.",
      "Zamość’s Renaissance “ideal city” layout is a UNESCO-listed urban plan.",
      "The region’s old wooden synagogues and market squares recall a multicultural borderland.",
      "Kazimierz Dolny on the Vistula is a favourite art and film location on limestone bluffs.",
      "Chełm’s chalk tunnels and churches illustrate layered Christian and folk traditions."
    ],
    pl: [
      "Lubelskie sąsiaduje z Białorusią i Ukrainą — styk kultur wschodu i zachodu.",
      "Zamość to renesansowe „miasto idealne” wpisane na listę UNESCO.",
      "Drewniane bożnice i rynki miasteczek przypominają wielokulturowe pogranicze.",
      "Kazimierz Dolny na Wiśle słynie ze sztuki i skał wapiennych nad rzeką.",
      "Chełmskie podziemia kredowe i świątynie pokazują warstwy tradycji regionalnych."
    ]
  },
  "08": {
    en: [
      "Lubusz is sparsely populated, with the Oder–Neisse line defining its western edge.",
      "Noteć meadows and old river oxbow lakes still shape quiet corners of the Lubusz landscape.",
      "Zielona Góra celebrates a wine-growing tradition rare this far north in Poland.",
      "Gorzów Wielkopolski anchors the northern half of this two-centre voivodeship.",
      "Urwisko glacial hills along the Odra valley create sudden viewpoints over wetlands."
    ],
    pl: [
      "Lubuskie jest słabo zaludnione; zachodnią granicę wyznacza linia Odry i Nysy.",
      "Łąki nad Notecią i stare starorzecza wciąż kształtują spokojne zakątki krajobrazu lubuskiego.",
      "Zielona Góra ma tradycję winiarską rzadką na tej szerokości geograficznej.",
      "Gorzów Wlkp. kotwiczy północną część województwa o dwóch ośrodkach.",
      "Moreny i urwiska doliny Odry dają nagłe punkty widokowe nad rozlewiskami."
    ]
  },
  "10": {
    en: [
      "Łódź grew from 19th-century textile mills into Poland’s third-largest metro area.",
      "Piotrków Trybunalski hosted royal tribunals; its old town square is brick Gothic.",
      "The region’s brick factories and workers’ housing inspired the “Promised Land” novels.",
      "Łódź’s EC1 and film museum nod to cinema—Kieślowski and Wajda both trained here.",
      "Skierniewice’s palace park recalls Congress Poland’s administrative heartland."
    ],
    pl: [
      "Łódź wyrosła z XIX-wiecznych fabryk włókienniczych na trzecie aglomerację kraju.",
      "Piotrków Trybunalski pamięta sądy królewskie; rynek to gotycka cegła.",
      "Fabryki i familoki zainspirowały powieści z cyklu „Ziemia obiecana”.",
      "EC1 i muzea filmowe w Łodzi nawiązują do szkoły filmowej Kieślowskiego i Wajdy.",
      "Park pałacowy w Skierniewicach przypomina administracyjne centrum Kongresówki."
    ]
  },
  "12": {
    en: [
      "Lesser Poland holds Kraków, a former royal capital ringed by Wawel and Planty park.",
      "The High Tatras at the southern edge are Poland’s only alpine-style peaks.",
      "Wieliczka and Bochnia salt mines tunnel under towns that funded medieval trade.",
      "Tarnów’s Renaissance market rivals Kraków’s for arcaded merchant houses.",
      "Ojców National Park’s limestone monadnocks shelter castles on dramatic crags."
    ],
    pl: [
      "Małopolskie obejmuje Kraków — dawną stolicę z Wawelem i Plantami.",
      "Na południu Wysokie Tatry to jedyne w kraju szczyty o alpejskim charakterze.",
      "Kopalnie soli w Wieliczce i Bochni sięgają pod miasta, które żywiły średniowieczny handel.",
      "Tarnowski Rynek renesansowy konkurruje z krakowskim pod kątem kamienic.",
      "Ojcowski Park Narodowy — skałki i zamki na wapiennych ostańcach."
    ]
  },
  "14": {
    en: [
      "Masovia contains Warsaw, the capital, rebuilt after WWII with a UNESCO-listed Old Town replica.",
      "Kampinos Forest west of Warsaw is a national park of dunes, marshes, and moose.",
      "The Vistula’s wide valley here carries spring floods across former river meanders.",
      "Płock’s Romanesque cathedral overlooks one of the river’s tightest historic ports.",
      "Radom’s industry and Siedlce’s plains illustrate the region’s east–west gradient."
    ],
    pl: [
      "Mazowsze obejmuje Warszawę — stolicę odbudowaną po wojnie ze Starym Miastem na liście UNESCO.",
      "Puszcza Kampinoska to park narodowy z wydmami, bagnami i łosiami.",
      "Dolina Wisły szeroka wiosną rozlewa się po dawnym korycie meandrowym.",
      "Płocka katedra romańska góruje nad historycznym portem na zakolu rzeki.",
      "Przemysł Radomia i równiny Siedlec pokazują zróżnicowanie wschód–zachód regionu."
    ]
  },
  "16": {
    en: [
      "Opole is Poland’s smallest voivodeship, with a recognised German minority and dialect islands.",
      "The Opole Lubelskie name is unrelated—this region centres on the Oder city of Opole.",
      "Canals link the Oder to industrial plants that refined coal chemistry for decades.",
      "Kędzierzyn-Koźle’s harbour still loads barges bound for the Baltic corridor.",
      "Folk costumes in the Opole uplands keep vivid floral embroidery alive in festivals."
    ],
    pl: [
      "Opolskie to najmniejsze województwo, z uznawaną mniejszością niemiecką i gwarami.",
      "Nie mylić z Opolem Lubelskim — tu centrum stanowi Opole nad Odrą.",
      "Kanały łączą Odrę z zakładami, które rozwijały chemiczne przeróbki węgla.",
      "Port w Kędzierzynie-Koźlu nadal załaduje barki w stronę korytarza nadbałtyckiego.",
      "Strój ludowy opolskich wyżyn wciąż wraca na festiwale z bogatym haftem."
    ]
  },
  "18": {
    en: [
      "Subcarpathia climbs into the Bieszczady—remote ridges once on the Habsburg–Russian frontier.",
      "Oil drilling near Krosno began in the 19th century, among Europe’s earliest fields.",
      "Wooden tserkvas and churches in the Carpathian foothills mix Byzantine and Latin forms.",
      "Rzeszów’s underground tourist route threads through WWII-era city tunnels.",
      "San river gorges east of Przemyśl cut through thick flysch layers toward Ukraine."
    ],
    pl: [
      "Podkarpacie wspina się w Bieszczady — odległe granie dawnej granicy habsbursko-rosyjskiej.",
      "Wiercenia naftowe koło Krośna z XIX wieku należą do najwcześniejszych w Europie.",
      "Drewniane cerkwie i kościoły w pogórzu łączą formy bizantyjskie i łacińskie.",
      "Podziemna trasa turystyczna w Rzeszowie prowadzi przez tunele z czasów II wojny.",
      "Przełom Sanu na wschód od Przemyśla tnie fliszowe warstwy w stronę Ukrainy."
    ]
  },
  "20": {
    en: [
      "Podlaskie’s Białowieża Forest shelters European bison and primeval lowland habitat.",
      "The Augustów Canal links lakes toward Lithuania—a 19th-century engineering scenic route.",
      "Orthodox and Catholic villages share the same drumlin landscapes near the Belarus line.",
      "Suwałki’s “Polish pole of cold” records some of the country’s lowest winter temperatures.",
      "Łomża’s Narew braided channel is a kayak classic through wet meadows."
    ],
    pl: [
      "Puszcza Białowieska chroni żubry i pierwotny las niżowy.",
      "Kanał Augustowski łączy jeziora w stronę Litwy — romantyczna inżynieria XIX wieku.",
      "Wieś prawosławna i katolicka dzieli te same morenowe krajobrazy przy granicy z Białorusią.",
      "„Polski biegun zimna” koło Suwałk notuje najniższe zimowe temperatury.",
      "Kajakowy przełom Narewu koło Łomży prowadzi przez rozlewiska łąk."
    ]
  },
  "22": {
    en: [
      "Pomerania’s Hel Peninsula traps shifting dunes between the open Baltic and Puck Bay.",
      "Gdańsk’s Crane and shipyards symbolise Hanseatic wealth and Solidarity-era history.",
      "Kashubian language islands dot the western lakes with distinct embroidery patterns.",
      "Słowiński National Park’s “moving dunes” bury forests inland from the coast.",
      "Słupsk’s Pomeranian dukes’ castle keeps Gothic brick details from the Griffin dynasty."
    ],
    pl: [
      "Mierzeja Helska więzi wydmy między otwartym Bałtykiem a Zatoką Pucką.",
      "Żuraw i stocznie w Gdańsku łączą bogactwo hanzeatyckie z historią Solidarności.",
      "Wyspy języka kaszubskiego przy jeziorach zachodnich mają odrębny strój i haft.",
      "Słowiński Park Narodowy — „wędrujące wydmy” zasypują lasy w głąb lądu.",
      "Zamek książąt pomorskich w Słupsku zachował gotycką cegłę z dynastii Gryfitów."
    ]
  },
  "24": {
    en: [
      "Silesia’s Upper Silesian coal basin fed Poland’s industrialisation and still powers grid baseload.",
      "Katowice’s Spodek arena and culture zone repurposed mining brownfields for events.",
      "The region’s dialect (“gwara śląska”) is recognised and taught in some local schools.",
      "Częstochowa’s Jasna Góra monastery draws millions of pilgrims annually.",
      "Bielsko-Biała straddles Silesian and Lesser Polish influences at the mountain foot."
    ],
    pl: [
      "Górnośląski zagłębie węglowe żywiło industrializację i wciąż stabilizuje sieć energetyczną.",
      "Spodek i strefa kultury w Katowicach zagospodarowały pokopalniane tereny.",
      "Gwara śląska jest uznawana i nauczana w części lokalnych szkół.",
      "Jasna Góra w Częstochowie co roku gromadzi miliony pielgrzymów.",
      "Bielsko-Biała leży na styku wpływów śląskich i małopolskich u podnóża Beskidów."
    ]
  },
  "26": {
    en: [
      "Holy Cross Province is named for the Świętokrzyskie range’s quartzite ridges and monasteries.",
      "The region once led Polish lead and silver mining in medieval times.",
      "Kielce’s geology museum sits above veins that attracted Swedish armies in the 17th century.",
      "Ostrowiec’s blast furnaces recall socialist-era steel beside the Kamienna river.",
      "Krzyżtopór castle ruins near Iłża are a Baroque “calendar” fortress legend."
    ],
    pl: [
      "Świętokrzyskie wzięło nazwę od kwarcytowych grani i klasztorów w Górach Świętokrzyskich.",
      "Region kiedyś czołowo wydobywał ołów i srebro w średniowieczu.",
      "Muzeum geologiczne w Kielcach stoi nad żyłami, które przyciągały wojska szwedzkie.",
      "Piec huty w Ostrowcu przypomina stal z epoki PRL nad rzeką Kamienną.",
      "Ruiny Krzyżtoporu koło Iłży to barokowa legenda „fortecy-kalendarza”."
    ]
  },
  "28": {
    en: [
      "Warmia-Masuria’s ribbon lakes are scooped by the last ice sheet into sailing highways.",
      "Olsztyn’s Copernicus connections and brick castle anchor the Masurian lake district.",
      "Elbląg’s canal lifts ships across watersheds on slipways unique in Europe.",
      "Ełk’s forests continue toward Lithuania, historically part of borderland duchies.",
      "Wolf’s Lair ruins near Kętrzyn recall WWII headquarters hidden in the woods."
    ],
    pl: [
      "Warmia i Mazury — taśma jezior wytoczona przez ostatni lądolód to szlaki żeglarskie.",
      "Olsztyn łączy tradycje kopernikańskie z zamkiem ceglanym serca Mazur.",
      "Kanał elbląski przenosi statki po pochylniach unikalnych w Europie.",
      "Lasy w okolicach Ełku ciągną się w stronę Litwy — dawne księstwa pograniczne.",
      "Ruiny Wilczego Szanca koło Kętrzyna to ukryte w lesie kwatery z II wojny."
    ]
  },
  "30": {
    en: [
      "Greater Poland is tied to the Piast dynasty’s first capitals—Gniezno and early Poznań.",
      "The region’s fertile black soils support large-scale farming on open fields.",
      "Kalisz claims one of Poland’s oldest municipal charters along amber-trade routes.",
      "Konin’s brown-coal belt powered post-war power plants on the Warta terraces.",
      "Lednica island’s Romanesque church preserves stone slabs from the first Piast rulers."
    ],
    pl: [
      "Wielkopolska wiąże się z pierwszymi stolicami Piastów — Gnieznem i wczesnym Poznaniem.",
      "Żyzne czarnoziemy regionu utrzymują rolnictwo na otwartych polach.",
      "Kalisz podaje się za jedno z najstarszych miast z przywilejem na szlaku bursztynowym.",
      "Konin i złoża brunatnego węgla zasiliły elektrownie na tarasach Warty.",
      "Kościół na Lednicy przechowuje płyty kamienne z czasów pierwszych Piastów."
    ]
  },
  "32": {
    en: [
      "West Pomerania guards Szczecin’s seaport where the Oder meets the Szczecin Lagoon.",
      "Wolin island mixes Viking-age settlements with modern ferry links to Scandinavia.",
      " Słowińskie dunes and Słowiński NP continue the coastal dune ecology from Pomerania.",
      "Koszalin’s lakeland backs the coast with quiet canoe routes through forests.",
      "Stargard’s fortified churches show Teutonic brick on the route toward Pomerelia."
    ],
    pl: [
      "Zachodniopomorskie strzeże portu szczecińskiego, gdzie Odra wpada do Zalewu Szczecińskiego.",
      "Wolin łączy osadnictwo epoki wikińskiej z promami w stronę Skandynawii.",
      "Wydmy Słowińskiego PN przedłużają ekologię wybrzeża z sąsiedniego Pomorza.",
      "Jeziora za Koszalinem dają spokojne trasy kajakowe przez lasy.",
      "Mury kościelne w Stargardzie pokazują cegłę krzyżacką na szlaku ku Pomorzu Gdańskiemu."
    ]
  }
};

export function getVoivFactRotation(terytId: string, lang: UILang, salt: number): string {
  const row = VOIV_ROTATIONS[terytId];
  if (!row) return "";
  const arr = lang === "pl" ? row.pl : row.en;
  if (!arr.length) return "";
  return arr[salt % arr.length]!;
}

/** @deprecated single fact — use getVoivFactRotation */
export function getVoivFact(terytId: string, lang: UILang): string {
  return getVoivFactRotation(terytId, lang, 0);
}
