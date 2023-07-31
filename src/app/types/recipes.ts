export interface Recipe {
  text: string;
  id: number;
  nutrients: string;
  parsed: {
    food: {
      image: string;
      nutrients: {
        FIBTG: number;
        CHOCDF: number;
        FAT: number;
        PROCNT: number;
        ENERC_KCAL: number;
      };
    };
  }[];
  _links: { _links: { next: { title: string } } };
}
