import styled from "styled-components";

type HeaderParams = {
  setPath: (path: string) => void;
};

export const Header = ({ setPath }: HeaderParams): JSX.Element => {
  return (
    <HeaderContainer size={"10vh"}>
      <Logo onClick={() => setPath("/")}>Teles</Logo>
      <PathMenu>
        <PathLink onClick={() => setPath("/books")}>Books</PathLink>
        <PathLink onClick={() => setPath("/news")}>News</PathLink>
      </PathMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ size: string }>`
  border: 1px solid black;
  height: ${(props) => props.size};

  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div``;

const PathMenu = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;
`;

const PathLink = styled.li`
  cursor: pointer;
`;
