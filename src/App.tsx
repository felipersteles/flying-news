import styled from "styled-components";
import { Header } from "./components/Header";

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
`;

export default App;
