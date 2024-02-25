export type BookListDTO = {
  books: BookDTO[];
  list_name: string;
  published_date: string;
};

export type BookDTO = {
  rank: number;
  title: string;
  author: string;
  book_uri: string;
  description: string;
  book_image?: string;
};

export interface NewsApiResponse {
  copyright: string;
  results: NewsDTO[];
}

export interface NewsDTO {
  abstract: string;
  url: string;
  title: string;
  byline: string;
  multimedia: MultimediaDTO[];
  published_date: string;
}

export interface MultimediaDTO {
  url: string;
  caption: string;
  height: number;
  width: number;
  copyright: string;
  type: string;
}
