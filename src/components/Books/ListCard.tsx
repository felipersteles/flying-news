"use client";

import { useBooksContext } from "@/contexts/BooksContext";
import { ListDTO } from "@/services/dto";
import { Button, Card, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface IListCard {
  list: ListDTO;
}

export default function ListCard(props: IListCard) {
  const { list } = props;

  const { changeList } = useBooksContext();

  const router = useRouter();

  const goToBooks = () => {
    changeList(list.list_name_encoded);
    router.push(`/books/${list.list_name_encoded}`);
  };

  return (
    <Card
      display="flex"
      direction="row"
      padding={["10px 9px"]}
      justifyContent="space-between"
      alignItems="center"
      gap="5px"
    >
      <Heading flex="3" fontSize={["16px", "20px", "25px"]}>
        {list.list_name}
      </Heading>
      <Button flex="1" onClick={goToBooks}>
        See books
      </Button>
    </Card>
  );
}
