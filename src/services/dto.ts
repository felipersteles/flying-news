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
};
