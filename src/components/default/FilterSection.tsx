import { useNewsContext } from "@/contexts/NewsContext";
import { SectionENUM } from "@/services/enum";
import { Button, Flex, Select, useColorModeValue } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

export default function FilterSection() {
  const { changeSection, getNews } = useNewsContext();

  const selectSection: ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeSection(e.target.value as SectionENUM);
  };

  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  return (
    <Flex
      dir="row"
      align="center"
      justify="space-between"
      width={["120%"]}
      gap={["15px", "20px", "30px"]}
      bg={bg}
      color={textColor}
    >
      <Select placeholder="Section" onChange={selectSection}>
        {Object.values(SectionENUM).map((section, key) => (
          <option value={section} key={key}>
            {section}
          </option>
        ))}
      </Select>
      <Button onClick={getNews}>Filter</Button>
    </Flex>
  );
}
