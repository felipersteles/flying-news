import { NewsService } from "@/services/api/nyt";
import { NewsDTO } from "@/services/dto";
import { SectionENUM } from "@/services/enum";
import { useReducer } from "react";

interface IState {
  news: NewsDTO[] | null;
  section: SectionENUM;
}

interface IAction {
  type: string;
  payload: any;
}

const Actions = {
  SET_SECTION: "SET_SECTION",
  SET_NEWS: "SEARCH_NEWS",
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Actions.SET_SECTION:
      return { ...state, section: action.payload };
      break;

    case Actions.SET_NEWS:
      return { ...state, news: action.payload };
      break;

    default:
      return state;
      break;
  }
};

const initialState = {
  news: null,
  section: SectionENUM.ALL,
};

export const useNews = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeSection = (section: SectionENUM) => {
    console.log("changing section to", section);
  };

  const getNewsFromApi = () => {
    const service = new NewsService();

    service
      .getNewsBySection(state.section)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: Actions.SET_NEWS, payload: data.results });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("encerrou");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return { state, changeSection, getNewsFromApi };
};
