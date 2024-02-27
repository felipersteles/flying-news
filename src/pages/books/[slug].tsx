"use client";

import Header from "@/components/default/Header";
import BooksProvider from "@/contexts/BooksContext";
import { useRouter } from "next/router";
import React from "react";

export default function BooksList() {
  const router = useRouter();
  return (
    <BooksProvider doNotGetList>
      <>
        <Header />
        <div>{router.query.slug}</div>
      </>
    </BooksProvider>
  );
}
