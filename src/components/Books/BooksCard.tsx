import { BookDTO } from "@/services/dto";
import {
  Box,
  Flex,
  Card,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

interface IBookCard {
  book: BookDTO;
}

export default function BookCard(props: IBookCard) {
  const { book } = props;
  const textColor = useColorModeValue("#000", "white");

  return (
    <Card display={"flex"} direction={"row"} padding="5px 10px">
      <Flex flex="1" justifyContent="center" alignItems="center">
        <Heading>#{book.rank}</Heading>
      </Flex>

      <Box flex="3">
        <Text fontSize={["18px"]}>{book.book_details[0].title}</Text>
        <Text
          fontSize={["14px"]}
          borderBottom={`1px solid ${textColor}`}
          mb={"5px"}
        >
          by {book.book_details[0].author}
        </Text>
        <Text>{book.book_details[0].description}</Text>
        <Text color="red">Published by {book.book_details[0].publisher}</Text>
      </Box>
    </Card>
  );
}
