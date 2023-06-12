export type SectionListDTO = {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
};

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

export type NewsDTO = {
  abstract: string;
  uri: string;
  title: string;
  thumbnail_standard: string;
  multimedia: MidiaDTO[];
  published_date: string;
};

export type MidiaDTO = {
  format: string;
  height: number;
  url: string;
  type: string;
};
