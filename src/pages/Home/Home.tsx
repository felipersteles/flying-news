import styled from "styled-components";
import { Clock } from "./components";

export const Home = () => {
  return (
    <HomeContainer>
      <GreetingContainer>
        <HomeGreeting>
          Welcome to the best newspaper of the neighborhood.
        </HomeGreeting>
        <Clock />
        <HomeText>
          In this website you can see the list of the best books of the moment
          and some news provided by The New York Times portal. Developed by
          Felipe Teles using the nyt api.
        </HomeText>
      </GreetingContainer>

      <IdeaDetails>
        <h2>Books</h2>
        <p>
          You can click on Book button in the header and choose a section to see
          the rank of the books of that.
        </p>

        <h2>News</h2>
        <p>
          You can click on News button in the header and see the newest news or
          you can choose a section to see a kind of news provided by
          <i> New York Times</i>.
        </p>

        <h2>Felipe Teles</h2>
        <p>
          Computer scientist and a excellent artist. Made this website using
          Reactjs and for now he has the dream of work with development of
          software in Netherlands.
        </p>
      </IdeaDetails>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow-y: scroll;
`;

const GreetingContainer = styled.div`
  padding: 8px 12px;
`;

const HomeGreeting = styled.h1``;

const HomeText = styled.p``;

const IdeaDetails = styled.div`
  padding: 0 12px 50px;
`;
