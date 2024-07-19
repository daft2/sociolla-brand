export const getAlphabeticalBrandsUrl =
  "https://catalog-api5.sociolla.com/v3/brands/letters?fields=name,logo,slug&limit=100&sort=name";

export const getFeaturedBrandsUrl =
  "https://catalog-api.sociolla.com/v3/brands?filter=%7B%22is_featured%22:true%7D&fields=_id+name+slug+logo+featured_text&skip=0&limit=15&sort=-featured_created_at";

export const ORIGIN_BRANDS_LIST: { [key: string]: any[] } = {
  A: [
    { id: "1", name: "AMERIKA SERIKAT" },
    { id: "2", name: "AUSTRALIA" },
  ],
  B: [],
  C: [
    { id: "3", name: "CANADA" },
    { id: "4", name: "CHINA" },
  ],
  D: [],
  E: [],
  F: [{ id: "5", name: "FRANCE" }],
  G: [{ id: "6", name: "GERMANY" }],
  H: [],
  I: [
    { id: "7", name: "INDONESIA" },
    { id: "8", name: "ITALY" },
  ],
  J: [{ id: "9", name: "JAPAN" }],
  K: [{ id: "10", name: "KOREA" }],
  L: [],
  M: [{ id: "11", name: "MALAYSIA" }],
  N: [],
  O: [],
  P: [],
  Q: [],
  R: [],
  S: [
    { id: "12", name: "SINGAPORE" },
    { id: "13", name: "SOUTH AFRICA" },
  ],
  T: [
    { id: "14", name: "TAIWAN" },
    { id: "15", name: "THAILAND" },
  ],
  U: [
    { id: "16", name: "UNITED KINGDOM" },
    { id: "17", name: "UNITED STATES" },
  ],
  V: [{ id: "18", name: "VIETNAM" }],
  W: [],
  X: [],
  Y: [],
};
