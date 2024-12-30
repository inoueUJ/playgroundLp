export type NewsImage = {
  url: string;
  height: number;
  width: number;
};

export type NewsItem = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  description: string;
  images: NewsImage;
  publishDate: string;
};

export type NewsResponse = {
  contents: NewsItem[];
  totalCount: number;
  offset: number;
  limit: number;
};
