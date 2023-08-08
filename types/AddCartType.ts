export type AddCartType = {
  id: string;
  name: string;
  image: string;
  unit_amount: number | null;
  quantity?: number | 1;
};
