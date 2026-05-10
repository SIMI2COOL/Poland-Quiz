import type { UILang } from "./quiz-engine";

const VOIV_FACTS: Record<string, { en: string; pl: string }> = {
  "02": {
    en: "Lower Silesia touches Germany and the Czech Republic; the Sudetes mountains run along its southern edge.",
    pl: "Dolnośląskie graniczy z Niemcami i Czechami; Sudety biegną wzdłuż południowej granicy."
  },
  "04": {
    en: "Kuyavia-Pomerania is split between historic Royal Prussia and Greater Poland, with two major university cities.",
    pl: "Kujawsko-pomorskie łączy ziemie dawnego Prus Królewskich i Wielkopolski, z dwoma dużymi ośrodkami akademickimi."
  },
  "06": {
    en: "Lublin Voivodeship sits on the eastern border and preserves rich Jewish and noble heritage in its old towns.",
    pl: "Lubelskie leży na wschodniej granicy; w miasteczkach zachowało się dziedzictwo żydowskie i magnackie."
  },
  "08": {
    en: "Lubusz is one of Poland's least crowded regions, known for forests, lakes, and the Oder river valley.",
    pl: "Lubuskie należy do najsłabiej zaludnionych regionów; znane z lasów, jezior i doliny Odry."
  },
  "10": {
    en: "Łódź Voivodeship was built on 19th-century textile industry; today it mixes post-industrial charm with film culture.",
    pl: "Łódzkie wyrosło na XIX-wiecznym przemyśle włókienniczym; dziś łączy postindustrialny klimat z kulturą filmową."
  },
  "12": {
    en: "Lesser Poland holds Kraków, the former royal capital, and approaches the High Tatra peaks at its southern tip.",
    pl: "Małopolskie obejmuje dawny stoleczny Kraków i sięga południem po Tatry."
  },
  "14": {
    en: "Masovia is Poland's demographic heart: Warsaw, the capital, sits on the Vistula among wide low plains.",
    pl: "Mazowsze to demograficzne serce kraju; stolica Warszawa leży nad Wisłą na rozległych równinach."
  },
  "16": {
    en: "Opole is the smallest voivodeship and keeps a living German minority culture alongside Polish traditions.",
    pl: "Opolskie to najmniejsze województwo, z żywą mniejszością niemiecką obok polskich tradycji."
  },
  "18": {
    en: "Subcarpathia is famously hilly, with wooden Orthodox and Catholic churches dotting its Carpathian foothills.",
    pl: "Podkarpacie jest wyraźnie pagórkowate; w Bieszczadach i na Pogórzu stoją drewniane cerkwie i kościoły."
  },
  "20": {
    en: "Podlaskie is nicknamed Poland's “green lungs” for the Białowieża Forest and vast wetlands in the northeast.",
    pl: "Podlaskie nazywane bywa „zielonym płucami” — Puszcza Białowieska i rozległe bagna na północnym wschodzie."
  },
  "22": {
    en: "Pomerania fronts the Baltic; Gdańsk, Gdynia, and Sopot form the famous Tricity coastline.",
    pl: "Pomorskie wychodzi na Bałtyk; Gdańsk, Gdynia i Sopot tworzą słynne Trójmiasto."
  },
  "24": {
    en: "Silesia is Poland's industrial powerhouse, shaped by coal mining and a dense network of mid-sized cities.",
    pl: "Śląsk to przemysłowy motor kraju, ukształtowany przez górnictwo i gęstą sieć średnich miast."
  },
  "26": {
    en: "Holy Cross Province is named for the rugged Świętokrzyskie Mountains and old mining towns in its hills.",
    pl: "Świętokrzyskie wzięło nazwę od Gór Świętokrzyskich i dawnych górniczych osad w pagórkach."
  },
  "28": {
    en: "Warmia-Masuria is the land of a thousand lakes, a favourite summer sailing and cycling destination.",
    pl: "Warmia i Mazury to kraina tysiąca jezior — letnia strefa żeglarstwa i rowerowych szlaków."
  },
  "30": {
    en: "Greater Poland is the cradle of the early Polish state, with Poznań and Gniezno rooted in Piast history.",
    pl: "Wielkopolska to kolebka państwa Piastów; Poznań i Gniezno sięgają najwcześniejszych dziejów Polski."
  },
  "32": {
    en: "West Pomerania stretches along the Baltic west of Gdańsk Bay, with Szczecin guarding the Oder estuary.",
    pl: "Zachodniopomorskie ciągnie się Bałtykiem na zachód od Zatoki Gdańskiej; Szczecin strzeże ujścia Odry."
  }
};

export function getVoivFact(terytId: string, lang: UILang): string {
  const row = VOIV_FACTS[terytId];
  if (!row) return "";
  return lang === "pl" ? row.pl : row.en;
}
