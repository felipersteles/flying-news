import axios from "axios";

export class BooksService {
  private axios;

  constructor() {
    this.axios = axios.create({
      baseURL: `https://api.nytimes.com/svc/books/v3/`,
    });
  }

  getBookSectionList = async (quantity: number) => {
    const res = await this.axios.get(
      `lists/names.json?api-key=${process.env.API_KEY}`
    );

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
      `lists/current/${section}.json?api-key=${process.env.API_KEY}`
    );

    return res.data.results;
  };

  getBooks = async () => {
    const res = await this.axios.get(
      `lists/current/hardcover-fiction.json?api-key=${process.env.API_KEY}`
    );

    return res.data.results;
  };
}
