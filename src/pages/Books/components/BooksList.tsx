import styled from "styled-components";
import { BookListDTO } from "../../../services";
import { BookCard } from "./BookCard";

type BooksListParams = {
  books?: BookListDTO;
};

export const BooksList = ({ books }: BooksListParams): JSX.Element => {
  return (
    <BooksListContainer>
      {!books && <>Select a section to see the books.</>}

      {books && (
        <>
          <div>You are seeing the {books?.list_name}</div>
          <br />
          <BookCardsContainer>
            {books?.books?.map((book, key) => (
              <BookCard key={key} book={book} />
            ))}
          </BookCardsContainer>
        </>
      )}
    </BooksListContainer>
  );
};

const BooksListContainer = styled.div`
  overflow-y: scroll;
  padding: 12px 18px;
  width: 100%;
  height: 85%;
`;

const BookCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
