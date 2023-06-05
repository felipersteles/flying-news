import styled from "styled-components";
import { SectionListDTO } from "../../../services";

type SectionListParams = {
  sectionsData: SectionListDTO[];
  getBooksBySection: (value: string) => void;
  setShowSection: (value: boolean) => void;
};

export const SectionList = ({
  sectionsData,
  getBooksBySection,
  setShowSection,
}: SectionListParams): JSX.Element => {
  const updateBooksList = (section: SectionListDTO) => {
    getBooksBySection(section.list_name_encoded);
    setShowSection(false);
  };

  return (
    <SectionListContainer>
      <ListContainer>
        {sectionsData.map((section, key) => (
          <SectionContainer key={key} onClick={() => updateBooksList(section)}>
            {section.display_name}
          </SectionContainer>
        ))}
      </ListContainer>
    </SectionListContainer>
  );
};

const SectionListContainer = styled.div`
  border: 1px solid black;
  height: 100%;
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
