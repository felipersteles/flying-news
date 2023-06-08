import axios from "axios";

const key = "is a secret";
export class BooksService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `https://api.nytimes.com/svc/books/v3/`,
    });
  }

  getBookSectionList = async (quantity: number) => {
    const res = await this.axios.get(`lists/names.json?api-key=${key}`);

    // console.log("section number: " + quantity)
    const booksSectionArray = res.data.results.filter(
      // eslint-disable-next-line array-callback-return
      (book: any, index: number) => {
        if (index < quantity) return book;
      }
    );

    return booksSectionArray;
  };

  getBooksBySection = async (section: string) => {
    const res = await this.axios.get(
      `lists/current/${section}.json?api-key=${key}`
    );

    return res.data.results;
  };
}

export class NewsService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `https://api.nytimes.com/svc/news/v3/`,
    });
  }

  getNewsBySection = async (section: string) => {
    const res = await this.axios.get(
      `content/nyt/${section}.json?api-key=${key}`
    );

    return res.data.results;
  };
}
