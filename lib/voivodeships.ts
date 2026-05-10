export type Voivodeship = {
  id: string;
  namePl: string;
  nameEn: string;
  capitalPl: string;
  capitalEn: string;
};

/** 16 Polish voivodeships (2024 administrative division). */
export const VOIVODESHIPS: Voivodeship[] = [
  { id: "02", namePl: "dolnośląskie", nameEn: "Lower Silesia", capitalPl: "Wrocław", capitalEn: "Wrocław" },
  { id: "04", namePl: "kujawsko-pomorskie", nameEn: "Kuyavia-Pomerania", capitalPl: "Bydgoszcz", capitalEn: "Bydgoszcz" },
  { id: "06", namePl: "lubelskie", nameEn: "Lublin", capitalPl: "Lublin", capitalEn: "Lublin" },
  { id: "08", namePl: "lubuskie", nameEn: "Lubusz", capitalPl: "Zielona Góra", capitalEn: "Zielona Góra" },
  { id: "10", namePl: "łódzkie", nameEn: "Łódź", capitalPl: "Łódź", capitalEn: "Łódź" },
  { id: "12", namePl: "małopolskie", nameEn: "Lesser Poland", capitalPl: "Kraków", capitalEn: "Kraków" },
  { id: "14", namePl: "mazowieckie", nameEn: "Masovia", capitalPl: "Warszawa", capitalEn: "Warsaw" },
  { id: "16", namePl: "opolskie", nameEn: "Opole", capitalPl: "Opole", capitalEn: "Opole" },
  { id: "18", namePl: "podkarpackie", nameEn: "Subcarpathia", capitalPl: "Rzeszów", capitalEn: "Rzeszów" },
  { id: "20", namePl: "podlaskie", nameEn: "Podlaskie", capitalPl: "Białystok", capitalEn: "Białystok" },
  { id: "22", namePl: "pomorskie", nameEn: "Pomerania", capitalPl: "Gdańsk", capitalEn: "Gdańsk" },
  { id: "24", namePl: "śląskie", nameEn: "Silesia", capitalPl: "Katowice", capitalEn: "Katowice" },
  { id: "26", namePl: "świętokrzyskie", nameEn: "Holy Cross", capitalPl: "Kielce", capitalEn: "Kielce" },
  { id: "28", namePl: "warmińsko-mazurskie", nameEn: "Warmia-Masuria", capitalPl: "Olsztyn", capitalEn: "Olsztyn" },
  { id: "30", namePl: "wielkopolskie", nameEn: "Greater Poland", capitalPl: "Poznań", capitalEn: "Poznań" },
  { id: "32", namePl: "zachodniopomorskie", nameEn: "West Pomerania", capitalPl: "Szczecin", capitalEn: "Szczecin" }
];

export const voivById = new Map(VOIVODESHIPS.map((v) => [v.id, v]));
