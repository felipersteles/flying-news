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
        <h2>{news.title}</h2>
      </Title>

      <p>{news.abstract}</p>
    </NewsCardContainer>
  );
};

const NewsCardContainer = styled.div`
  border: 1px solid red;
  cursor: pointer;
  padding: 4px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border: 0.5px solid black;
  border-radius: 2px;
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
`;
