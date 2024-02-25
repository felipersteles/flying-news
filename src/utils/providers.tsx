import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

interface IProviders {
  children: JSX.Element;
}

export default function Providers({ children }: IProviders) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
