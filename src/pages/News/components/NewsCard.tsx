import styled from "styled-components";
import { NewsDTO } from "../../../services";

type NewsCardParams = {
  news: NewsDTO;
};

export const NewsCard = ({ news }: NewsCardParams): JSX.Element => {
  return (
    <NewsCardContainer>
      <Title>
        <Thumbnail src={news.thumbnail_standard} alt="imagem maluca" />
        <h1>{news.title}</h1>
      </Title>

      <p>{news.abstract}</p>
    </NewsCardContainer>
  );
};

const NewsCardContainer = styled.div`
  border: 1px solid red;
  cursor: pointer;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
`;
