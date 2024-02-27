import { BooksService } from "@/services/api/nyt";
import { BookDTO, ListDTO } from "@/services/dto";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from "react";

interface IBooksProvider {
  children: JSX.Element;
  doNotGetList?: boolean;
}

interface IBooksContext {
  booksState: IBooksState;
  changeList: (list: string) => void;
}

interface IBooksState {
  books: BookDTO[] | null;
  list: string | null;
  possibleLists: ListDTO[] | null;
}

interface IAction {
  type: string;
  payload: any;
}

const Actions = {
  SET_LIST: "SET_LIST",
  SET_POSSIBLE_LISTS: "SET_LISTS",
  SET_BOOKS: "SET_BOOKS",
};

const reducer = (state: IBooksState, action: IAction) => {
  switch (action.type) {
    case Actions.SET_LIST:
      return { ...state, list: action.payload };
      break;

    case Actions.SET_BOOKS:
      return { ...state, books: action.payload };
      break;

    case Actions.SET_POSSIBLE_LISTS:
      return { ...state, possibleLists: action.payload };
      break;

    default:
      return state;
      break;
  }
};

const initialState: IBooksState = {
  books: null,
  list: null,
  possibleLists: null,
};

const BooksContext = createContext<IBooksContext>({} as IBooksContext);

export default function BooksProvider({
  children,
  doNotGetList = false,
}: IBooksProvider) {
  const [booksState, dispatch] = useReducer(reducer, initialState);

  const getListsFromApi = useCallback(() => {
    const service = new BooksService();

    service
      .getLists()
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: Actions.SET_POSSIBLE_LISTS, payload: data.results });
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        console.log("fim da req");
        console.log("estado:", booksState);
      });
  }, [booksState]);

  const changeList = (list: string) => {
    dispatch({ type: Actions.SET_LIST, payload: list });
  };

  const getBooksFromApi = useCallback(() => {
    const service = new BooksService();

    service
      .getBooksByList(booksState.list)
      .then(({ data }) => {
        console.log(data);
        dispatch({ type: Actions.SET_BOOKS, payload: data.results });
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        console.log("fim da req");
        console.log("estado:", booksState);
      });
  }, [booksState]);

  useEffect(() => {
    if (!booksState.possibleLists && !doNotGetList) getListsFromApi();
    if (!booksState.books && doNotGetList) getBooksFromApi();
  }, [booksState, doNotGetList, getListsFromApi, getBooksFromApi]);

  return (
    <BooksContext.Provider value={{ booksState, changeList }}>
      {children}
    </BooksContext.Provider>
  );
}

export const useBooksContext = () => useContext(BooksContext);
