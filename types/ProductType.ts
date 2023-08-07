export type ProductType = {
  id: string;
  name: string;
  image: string;
  description: string;
  metadata: MetadataType;
  unit_amount: number | null;
};

type MetadataType = {
  metaId: string;
  paramether: string;
  overview: string;
};
