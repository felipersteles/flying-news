import styled from "styled-components";
import { Header } from "./components";
import { useEffect, useState } from "react";
import { Books, Home, News } from "./pages";

function App() {
  const [path, setPath] = useState<string>("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, [setPath]);

  return (
    <AppContainer>
      <Header height={"10vh"} setPath={setPath} />
      <PageContainer>
        {path === "/" && <Home />}
        {path === "/books" && <Books />}
        {path === "/news" && <News />}
      </PageContainer>
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
  display: flex;
  flex-direction: column;
`;

const PageContainer = styled.div`
  position: fixed;
  top: 10vh;
  height: 100%;
`;

export default App;
