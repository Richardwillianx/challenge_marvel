type TProductionItems = {
  collectionURI: string;
  name: string;
  type?: string;
}

type THeroProduction = {
  available: number;
  collectionURI: string;
  items: TProductionItems[];
  returned: number;
}

type TResponseApiHero = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: THeroProduction;
  series: THeroProduction;
  stories: THeroProduction;
}

export type TResponseApiHeroes = {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: TResponseApiHero[];
  }
}
