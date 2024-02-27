import Header from "@/components/default/Header";
import NewsList from "@/components/News/NewsList";
import NewsProvider from "@/contexts/NewsContext";
import React from "react";

export default function Home() {
  return (
    <NewsProvider>
      <>
        <Header showFilter />
        <NewsList />
      </>
    </NewsProvider>
  );
}
