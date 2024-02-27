import PossibleLists from "@/components/Books/PossibleLists";
import Header from "@/components/default/Header";
import BooksProvider from "@/contexts/BooksContext";
import React from "react";

export default function Books() {
  return (
    <BooksProvider>
      <>
        <Header />
        <PossibleLists />
      </>
    </BooksProvider>
  );
}
