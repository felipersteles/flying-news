import { BookDTO } from "@/services/dto";
import { Card } from "@chakra-ui/react";
import React from "react";

interface IBookCard {
  book: BookDTO;
}

export default function BooksCard(props: IBookCard) {
  const { book } = props;

  return <Card>{book.book_details.title}</Card>;
}
