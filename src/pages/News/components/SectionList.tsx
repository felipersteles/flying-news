import { useState } from "react";
import styled from "styled-components";
import { MenuIcon } from "../../../assets";

type SectionListParams = {
  sectionsData: string[];
  getNewsBySection: (section: string) => void;
};

export const SectionList = ({
  sectionsData,
  getNewsBySection,
}: SectionListParams): JSX.Element => {
  const [showSection, setShowSection] = useState<boolean>(false);

  const updateNewsList = (section: string) => {
    getNewsBySection(section);
    setShowSection(!showSection);
  };

  return (
    <>
      <ShowSection onClick={() => setShowSection(!showSection)}>
        <MenuIcon color="#fff" />
      </ShowSection>

      {showSection && (
        <SectionListContainer>
          <ListContainer>
            {sectionsData.map((section, key) => (
              <SectionContainer
                key={key}
                onClick={() => updateNewsList(section)}
              >
                {section}
              </SectionContainer>
            ))}
          </ListContainer>
        </SectionListContainer>
      )}
    </>
  );
};

const SectionListContainer = styled.div`
  border: 1px solid black;
  padding: 4px;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0 12px;
`;

const SectionContainer = styled.li`
  cursor: pointer;
  margin-bottom: 6px;
`;

const ShowSection = styled.div`
  cursor: pointer;
  position: absolute;
  top: -6.5vh;
  left: 2vw;
  display: flex;
  align-items: center;

  border-radius: 50%;
  background-color: black;
`;
