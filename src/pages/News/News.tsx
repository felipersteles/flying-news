import styled from "styled-components";
import { NewsList, SectionList } from "./components";
import { useEffect, useState } from "react";
import { NewsDTO, NewsService } from "../../services";

const sectionsData = [
  "arts",
  "movies",
  "food",
  "style",
  "world",
  "automobiles",
  "books",
  "climate",
  "education",
  "health",
  "science",
  "sports",
  "technology",
  "theater",
  "travel",
  "universal",
];

const nService = new NewsService();

export const News = (): JSX.Element => {
  const [newsData, setNewsData] = useState<NewsDTO[]>();

  const getNewsBySection = (section: string) => {
    nService
      .getNewsBySection(section)
      .then((news) => {
        setNewsData(news);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    nService
      .getNewsBySection("all")
      .then((data) => {
        setNewsData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <NewsPageContainer>
      <SectionList
        sectionsData={sectionsData}
        getNewsBySection={getNewsBySection}
      />
      <NewsList newsData={newsData} />
    </NewsPageContainer>
  );
};

const NewsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
