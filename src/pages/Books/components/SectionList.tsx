import styled from "styled-components";
import { SectionListDTO } from "../../../services";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { MenuIcon } from "../../../assets";

type SectionListParams = {
  sectionsData: SectionListDTO[];
  getBooksBySection: (value: string) => void;
};

export const SectionList = ({
  sectionsData,
  getBooksBySection,
}: SectionListParams): JSX.Element => {
  const [showSection, setShowSection] = useState<boolean>(true);

  const updateBooksList = (section: SectionListDTO) => {
    getBooksBySection(section.list_name_encoded);
    if (isMobile) setShowSection(false);
  };

  return (
    <>
      <SectionMenu onClick={() => setShowSection(!showSection)}>
        <MenuIcon color="#fff" />
      </SectionMenu>

      {showSection && (
        <SectionListContainer>
          <ListContainer>
            {sectionsData.map((section, key) => (
              <SectionContainer
                key={key}
                onClick={() => updateBooksList(section)}
              >
                {section.display_name}
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
  height: 85%;
  padding: 4px;
  overflow-y: scroll;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0 12px;
`;

const SectionContainer = styled.li`
  cursor: pointer;
  margin-bottom: 6px;
`;

const SectionMenu = styled.div`
  cursor: pointer;
  position: absolute;
  top: -6.5vh;
  left: 2vw;
  border-radius: 50%;
  background-color: black;
  display: flex;
  align-items: center;
`;
