import BooksList from "@/components/Books/BooksList";
import Header from "@/components/default/Header";
import BooksProvider from "@/contexts/BooksContext";
import { Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function BooksListPage() {
  return (
    <BooksProvider doNotGetList>
      <>
        <Header />
        <Box margin={["5px 10px"]}>
          <Heading>The New York Times Best Sellers lists</Heading>
          <Text>Click on the card to go amazon page of it</Text>
        </Box>
        <BooksList />
      </>
    </BooksProvider>
  );
}
