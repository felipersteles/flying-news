import styled from "styled-components";
import { BookDTO } from "../../../services";

type BooksCardParams = {
  book: BookDTO;
};

export const BookCard = ({ book }: BooksCardParams) => {
  return (
    <BookCardContainer>
      <BookRankContainer>
        <BookRank>
          <h1>#</h1>
          <h1>{book.rank}</h1>
        </BookRank>
        {book.book_image && <BookImage src={book.book_image} alt="book" />}
      </BookRankContainer>

      <BookInfo>
        <BookTitle>{book.title}</BookTitle>{" "}
        <BookAuthor>{book.author}</BookAuthor>
      </BookInfo>
    </BookCardContainer>
  );
};

const BookCardContainer = styled.div`
  display: flex;
  padding: 8px 12px;
  margin: 8px 4px;
  border: 1px solid black;
`;

const BookRank = styled.div`
  display: flex;
  align-items: center;
`;

const BookImage = styled.img`
  max-width: 100px;
  margin: 0 8px;
`;

const BookRankContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BookInfo = styled.div``;

const BookTitle = styled.h2``;

const BookAuthor = styled.h3``;
