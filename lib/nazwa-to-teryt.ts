/**
 * Map GeoJSON `nazwa` (from ppatrzyk/polska-geojson, MIT) to TERYT voivodeship codes.
 * Geo file: public/wojewodztwa-min.geojson
 */
export const NAZWA_TO_TERYT: Record<string, string> = {
  dolnośląskie: "02",
  "kujawsko-pomorskie": "04",
  lubelskie: "06",
  lubuskie: "08",
  łódzkie: "10",
  małopolskie: "12",
  mazowieckie: "14",
  opolskie: "16",
  podkarpackie: "18",
  podlaskie: "20",
  pomorskie: "22",
  śląskie: "24",
  świętokrzyskie: "26",
  "warmińsko-mazurskie": "28",
  wielkopolskie: "30",
  zachodniopomorskie: "32"
};
