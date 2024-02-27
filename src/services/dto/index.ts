export interface ListDTO {
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  updated: string;
}

export interface BooksApiResponse {
  copyright: string;
  results: BookDTO[];
}

export interface BookDTO {
  rank: number;
  book_details: InfoBook[];
  reviews: Reviews;
  amazon_product_url: string;
}

interface InfoBook {
  title: string;
  author: string;
  description: string;
  book_image?: string;
  publisher: string;
  primary_isbn13: string;
}

interface Reviews {
  book_review_link: string;
  first_chapter_link: string;
  sunday_review_link: string;
  article_chapter_link: string;
}

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
