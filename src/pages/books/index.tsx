import PossibleLists from "@/components/Books/PossibleLists";
import Header from "@/components/default/Header";
import BooksProvider from "@/contexts/BooksContext";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function BooksPage() {
  return (
    <BooksProvider>
      <>
        <Header />
        <Box margin={["5px 10px", "15px 25px", "25px 30px"]}>
          <Heading>List of best sellers books</Heading>
        </Box>
        <PossibleLists />
      </>
    </BooksProvider>
  );
}
