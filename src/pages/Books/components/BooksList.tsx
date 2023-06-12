import styled from "styled-components";
import { BookListDTO } from "../../../services";
import { BookCard } from "./BookCard";

type BooksListParams = {
  books?: BookListDTO;
};

export const BooksList = ({ books }: BooksListParams): JSX.Element => {
  return (
    <BooksListContainer>
      {!books && (
        <NoBooksContainer>
          <h2>Select a section</h2>
          <p>
            There are a lot kind of books and you can see some of them in the
            sections list
          </p>
        </NoBooksContainer>
      )}

      {books && (
        <>
          <SectionTitle>Top 10 of {books?.list_name} books</SectionTitle>
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

const SectionTitle = styled.h2``;

const NoBooksContainer = styled.div``;
