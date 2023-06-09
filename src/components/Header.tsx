import styled from "styled-components";

type HeaderParams = {
  setPath: (path: string) => void;
  height: string | number;
};

export const Header = ({ setPath, height }: HeaderParams): JSX.Element => {
  return (
    <HeaderContainer size={height}>
      <Logo onClick={() => setPath("/")}>Teles</Logo>
      <PathMenu>
        <PathLink onClick={() => setPath("/books")}>Books</PathLink>
        <PathLink onClick={() => setPath("/news")}>News</PathLink>
      </PathMenu>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<{ size: string | number }>`
  border: 1px solid black;
  height: ${(props) => props.size};

  background: url("https://i.pinimg.com/736x/b2/16/b1/b216b127ca8997e14baf88085efa2573.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
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
  border: 1px solid black;
  border-radius: 5px;
  background-color: #000;
  padding: 2px;
`;
