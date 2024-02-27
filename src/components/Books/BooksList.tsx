"use client";

import { useBooksContext } from "@/contexts/BooksContext";
import React, { useEffect } from "react";
import { Box, Flex, Link, useEditable } from "@chakra-ui/react";
import BookCard from "./BooksCard";
import { useRouter } from "next/router";
import Loading from "../default/Loading";

export default function BooksList() {
  const router = useRouter();
  const { slug } = router.query;
  const { booksState, getBooksFromApi } = useBooksContext();
  const { books } = booksState;

  useEffect(() => {
    if (!books) getBooksFromApi(String(slug));
  }, [books, getBooksFromApi, slug]);

  if (booksState.fetching) return <Loading />;

  return (
    <Flex padding="10px 15px" direction="column" gap="15px">
      {books &&
        books.map((book) => (
          <Box key={book.rank}>
            <Link href={book.amazon_product_url}>
              <BookCard book={book} />
            </Link>
          </Box>
        ))}
    </Flex>
  );
}
