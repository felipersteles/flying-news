import styled from "styled-components";
import { NewsDTO } from "../../../services";
import { NewsCard } from "./NewsCard";

type NewsListParams = {
  newsData?: NewsDTO[];
};

export const NewsList = ({ newsData }: NewsListParams) => {
  return (
    <NewsListContainer>
      <ListContainer>
        {newsData?.map((news, key) => (
          <NewsCard key={key} news={news}></NewsCard>
        ))}
      </ListContainer>
    </NewsListContainer>
  );
};

const NewsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ListContainer = styled.div`
  scroll-snap-align: start;
  overflow-y: scroll;
`;
