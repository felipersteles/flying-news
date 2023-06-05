import styled from "styled-components";
import { Clock } from "./components";

export const Home = () => {
  return (
    <HomeContainer>
      <Clock />
      <GreetingContainer>
        <HomeGreeting>
          Welcome to the best newspaper of the neighborhood.
        </HomeGreeting>
        <HomeText>
          In this website you can see the list of the best books of the moment
          and some news provided by The New York Times portal. Developed by
          Felipe Teles using the nyt api.
        </HomeText>
      </GreetingContainer>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  align-items: center;
  justify-content: center;
`;

const GreetingContainer = styled.div`
  padding: 8px 12px;
`;

const HomeGreeting = styled.h1``;

const HomeText = styled.p``;
