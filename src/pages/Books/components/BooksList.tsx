import styled from "styled-components";
import { BookDTO, BookListDTO } from "../../../services";

type BooksListParams = {
  books?: BookListDTO;
};

type BooksCardParams = {
  book: BookDTO;
};

const BookCard = ({ book }: BooksCardParams) => {
  return <BookCardContainer>{book.title}</BookCardContainer>;
};

const BookCardContainer = styled.div``;

export const BooksList = ({ books }: BooksListParams): JSX.Element => {
  return (
    <BooksListContainer>
      <>What books? {books?.list_name}</>
      <BookCardsContainer>
        {books?.books?.map((book, key) => (
          <BookCard key={key} book={book} />
        ))}
      </BookCardsContainer>
    </BooksListContainer>
  );
};

const BooksListContainer = styled.div``;

const BookCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
