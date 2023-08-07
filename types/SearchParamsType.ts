type Params = {
  id: string;
};
type SearchParams = {
  name: string;
  unit_amount: number | null;
  image: string;
  id: string;
  metaId: string;
  paramether: string;
  overview: string;
  description: string;
};

export type SearchParamsType = {
  params: Params;
  searchParams: SearchParams;
};
