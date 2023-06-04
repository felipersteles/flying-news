import styled from "styled-components";
import { Header } from "./components";
import { useState } from "react";
import { Books } from "./pages";

function App() {
  const [path, setPath] = useState<string>("");

  return (
    <AppContainer>
      <Header setPath={setPath} />
      {path === "" && <>Home</>}
      {path === "books" && <Books />}
      {path === "news" && <>news</>}
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
