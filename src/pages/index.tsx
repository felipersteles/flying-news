import Header from "@/components/default/Header";
import NewsList from "@/components/News/NewsList";
import NewsProvider, { useNewsContext } from "@/contexts/NewsContext";
import React from "react";

export default function NewsPage() {
  return (
    <NewsProvider>
      <>
        <Header showFilter />
        <NewsList />
      </>
    </NewsProvider>
  );
}
