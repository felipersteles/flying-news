import { Spinner, Box } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Box
      width={"100%"}
      display="flex"
      justifyContent={"center"}
      marginTop={"50px"}
    >
      <Spinner />
    </Box>
  );
}
