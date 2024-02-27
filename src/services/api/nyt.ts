import axios from "axios";
import { SectionENUM } from "../enum";
import { BooksApiResponse, ListDTO, NewsApiResponse, NewsDTO } from "../dto";

const key = process.env.API_KEY;

export class NewsService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `https://api.nytimes.com/svc/news/v3/`,
    });
  }

  getNewsBySection = async (section: SectionENUM) => {
    return await this.axios.get<NewsApiResponse>(
      `content/nyt/${section}.json?api-key=${key}`
    );
  };
}

export class BooksService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `https://api.nytimes.com/svc/news/v3/`,
    });
  }

  getLists = async () => {
    return await this.axios.get<{ results: ListDTO[] }>(
      `https://api.nytimes.com/svc/books/v3/lists/names.json`,
      {
        params: {
          "api-key": key,
        },
      }
    );
  };

  getBooksByList = async (list: string) => {
    return await this.axios.get<BooksApiResponse>(
      `https://api.nytimes.com/svc/books/v3/lists.json`,
      {
        params: {
          "api-key": key,
          list,
        },
      }
    );
  };

  getBookByISBN(isbn: string) {
    return this.axios.get(
      `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=details&format=json`
    );
  }
}
