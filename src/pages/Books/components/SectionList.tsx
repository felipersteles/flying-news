import styled from "styled-components";
import { SectionListDTO } from "../../../services";

type SectionListParams = {
  sectionsData: SectionListDTO[];
  getBooksBySection: (value: string) => void;
};

export const SectionList = ({
  sectionsData,
  getBooksBySection,
}: SectionListParams): JSX.Element => {
  const updateBooksList = (section: SectionListDTO) => {
    getBooksBySection(section.list_name_encoded);
  };

  return (
    <SectionListContainer>
      <ul>
        {sectionsData.map((section, key) => (
          <SectionContainer key={key} onClick={() => updateBooksList(section)}>
            {section.display_name}
          </SectionContainer>
        ))}
      </ul>
    </SectionListContainer>
  );
};

const SectionListContainer = styled.div`
  border: 1px solid black;
  height: 100%;
`;

const SectionContainer = styled.li`
  cursor: pointer;
`;
