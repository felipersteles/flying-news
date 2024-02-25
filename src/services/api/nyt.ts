import axios from "axios";
import { SectionENUM } from "../enum";
import { NewsApiResponse, NewsDTO } from "../dto";

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
