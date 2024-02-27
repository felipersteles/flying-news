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
  getBooksFromApi: (list: string) => void;
  setFetching: (value: boolean) => void;
}

interface IBooksState {
  books: BookDTO[] | null;
  list: string | null;
  possibleLists: ListDTO[] | null;
  fetching: boolean;
}

interface IAction {
  type: string;
  payload?: any;
}

const Actions = {
  SET_LIST: "SET_LIST",
  SET_POSSIBLE_LISTS: "SET_LISTS",
  SET_BOOKS: "SET_BOOKS",
  SET_FETCHING: "SET_FETCHING",
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

    case Actions.SET_FETCHING:
      return { ...state, fetching: action.payload };
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
  fetching: true,
};

const BooksContext = createContext<IBooksContext>({} as IBooksContext);

export default function BooksProvider({
  children,
  doNotGetList = false,
}: IBooksProvider) {
  const [booksState, dispatch] = useReducer(reducer, initialState);

  const setFetching = (value: boolean) =>
    dispatch({ type: Actions.SET_POSSIBLE_LISTS, payload: value });

  const getListsFromApi = useCallback(() => {
    const service = new BooksService();

    service
      .getLists()
      .then(({ data }) => {
        dispatch({ type: Actions.SET_POSSIBLE_LISTS, payload: data.results });
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        dispatch({ type: Actions.SET_FETCHING, payload: false });
      });
  }, []);

  const getBooksFromApi = useCallback((list: string) => {
    const service = new BooksService();

    service
      .getBooksByList(list)
      .then(({ data }) => {
        dispatch({ type: Actions.SET_BOOKS, payload: data.results });
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        dispatch({ type: Actions.SET_FETCHING, payload: false });
      });
  }, []);

  useEffect(() => {
    if (!booksState.possibleLists && !doNotGetList) getListsFromApi();
  }, [booksState, doNotGetList, getListsFromApi]);

  return (
    <BooksContext.Provider value={{ booksState, getBooksFromApi, setFetching }}>
      {children}
    </BooksContext.Provider>
  );
}

export const useBooksContext = () => useContext(BooksContext);
