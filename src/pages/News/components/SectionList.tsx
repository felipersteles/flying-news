import { useState } from "react";
import styled from "styled-components";

type SectionListParams = {
  sectionsData: string[];
};

export const SectionList = ({
  sectionsData,
}: SectionListParams): JSX.Element => {
  const [showSection, setShowSection] = useState<boolean>(false);

  return (
    <>
      <ShowSection onClick={() => setShowSection(!showSection)}>\/</ShowSection>

      {showSection && (
        <SectionListContainer>
          <ListContainer>
            {sectionsData.map((section, key) => (
              <SectionContainer key={key}>{section}</SectionContainer>
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
  top: 50px;
  right: 30px;
`;
