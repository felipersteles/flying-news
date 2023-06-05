import styled from "styled-components";
import { BooksList, SectionList } from "./components";
import { BooksService } from "../../services/nytAPI";
import { useState } from "react";
import { BookListDTO, SectionListDTO } from "../../services";
import { isMobile } from "react-device-detect";

const bService = new BooksService();

// type BooksParams = {
//   showSection?: boolean;
// };

export const Books = (): JSX.Element => {
  const [sectionsData, setSectionData] = useState<SectionListDTO[]>([]);
  const [showSection, setShowSection] = useState<boolean>(!isMobile);
  const [books, setBooks] = useState<BookListDTO>();

  const getBooksBySection = async (section: string) => {
    // console.log(section);
    try {
      const data = await bService.getBooksBySection(section);

      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useState(async () => {
    // console.log("Componente renderizou");

    try {
      const sectionData = await bService.getBookSectionList(50);

      setSectionData(sectionData);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <BooksPageContainer>
      {isMobile && (
        <SectionMenu onClick={() => setShowSection(!showSection)}>
          Select section
        </SectionMenu>
      )}

      {showSection && (
        <SectionList
          sectionsData={sectionsData}
          getBooksBySection={getBooksBySection}
          setShowSection={setShowSection}
        />
      )}

      <BooksList books={books} />
    </BooksPageContainer>
  );
};

const BooksPageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SectionMenu = styled.div`
  position: absolute;
  top: 65px;
  left: 12px;
`;
