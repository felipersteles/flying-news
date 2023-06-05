import styled from "styled-components";
import { BookDTO } from "../../../services";

type BooksCardParams = {
  book: BookDTO;
};

export const BookCard = ({ book }: BooksCardParams) => {
  return (
    <BookCardContainer>
      <h1># {book.rank}</h1>
      {book.book_image && <BookImage src={book.book_image} alt="book" />}

      {book.title}
    </BookCardContainer>
  );
};

const BookCardContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BookImage = styled.img`
  max-width: 120px;
`;
