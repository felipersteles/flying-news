import { useBooksContext } from "@/contexts/BooksContext";
import React from "react";
import ListCard from "./ListCard";
import { Flex } from "@chakra-ui/react";

export default function PossibleLists() {
  const { booksState } = useBooksContext();
  const { possibleLists } = booksState;

  return (
    <Flex direction="column" padding={["15px 30px"]} gap="15px">
      {possibleLists &&
        possibleLists.map((list) => (
          <ListCard key={list.list_name_encoded} list={list} />
        ))}
    </Flex>
  );
}
