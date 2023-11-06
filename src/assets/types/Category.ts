type Subcategory = { id: number; name: string };

export type Category = {
  name: string;
  id: number;
  subcategories?: Subcategory[];
};
