import { NewsService } from "@/services/api/nyt";
import { NewsDTO } from "@/services/dto";
import { SectionENUM } from "@/services/enum";
import { createContext, useContext, useEffect, useReducer } from "react";

interface INewsProvider {
  children: JSX.Element;
}

interface INewsContext {
  newsState: INewsState;
  changeSection: (section: SectionENUM) => void;
  getNews: () => void;
}

interface INewsState {
  news: NewsDTO[] | null;
  section: SectionENUM;
  fetching: boolean;
}

interface IAction {
  type: string;
  payload: any;
}

const Actions = {
  SET_SECTION: "SET_SECTION",
  SET_NEWS: "SET_NEWS",
  SET_FETCHING: "SET_FETCHING",
};

const reducer = (state: INewsState, action: IAction) => {
  switch (action.type) {
    case Actions.SET_SECTION:
      return { ...state, section: action.payload };
      break;

    case Actions.SET_NEWS:
      return { ...state, news: action.payload };
      break;

    case Actions.SET_FETCHING:
      return { ...state, fetching: action.payload };
      break;

    default:
      return state;
      break;
  }
};

const initialState = {
  news: null,
  section: SectionENUM.ALL,
  fetching: true,
};

const NewsContext = createContext<INewsContext>({} as INewsContext);

export default function NewsProvider({ children }: INewsProvider) {
  const [newsState, dispatch] = useReducer(reducer, initialState);

  const changeSection = (section: SectionENUM) => {
    // console.log("changing section to", section);
    dispatch({ type: Actions.SET_SECTION, payload: section });
  };

  const getNews = () => {
    dispatch({ type: Actions.SET_FETCHING, payload: true });
    getNewsFromApi();
  };

  const getNewsFromApi = () => {
    const service = new NewsService();

    service
      .getNewsBySection(newsState.section)
      .then(({ data }) => {
        dispatch({ type: Actions.SET_NEWS, payload: data.results });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch({ type: Actions.SET_FETCHING, payload: false });
      });
  };

  useEffect(() => {
    if (!newsState.news) getNewsFromApi();
  }),
    [];

  return (
    <NewsContext.Provider value={{ newsState, changeSection, getNews }}>
      {children}
    </NewsContext.Provider>
  );
}

export const useNewsContext = () => useContext(NewsContext);
