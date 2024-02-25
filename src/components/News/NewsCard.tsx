import GitHubIcon from "@/assets/icons/GitHub";
import LinkedinIcon from "@/assets/icons/Linkedin";
import { NewsDTO } from "@/services/dto";
import { fromDate } from "@/utils";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  css,
  keyframes,
  useColorModeValue,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import FollowMe from "../default/FollowMe";

interface INewsCard {
  news: any;
  index: number;
}

export default function NewsCard(props: INewsCard) {
  const { news, index } = props;

  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  if (index === 0) {
    return (
      <Box>
        <Box padding={["0", "0 30px"]}>
          <Box display={["block", "block", "none"]} bg={bg} color={textColor}>
            <Text ml={["5px"]} fontWeight={800} color="red">
              Trending
            </Text>
            <Heading as="h2" ml={["5px"]} size="lg" letterSpacing={"tighter"}>
              {news.title}
            </Heading>

            {news.multimedia[2] && news.multimedia[2].url && (
              <Image
                mt={["10px", "12px", "15px"]}
                src={news.multimedia[2].url}
                width={["100%", "100%", "80vh"]}
                alt="news icon"
              />
            )}

            <Flex direction="column" flex="1" padding={["10px"]}>
              <Text
                mt={["10px", "12px", "15px"]}
                fontSize={["30px"]}
                fontWeight={600}
              >
                {news.abstract}
              </Text>
              <Flex
                justifyContent="space-between"
                mt={["15px", "20px", "30px"]}
              >
                <Text fontSize={["12px"]} fontWeight={500}>
                  {fromDate(news.published_date)}
                </Text>
                <Text fontSize={["12px"]} fontWeight={500} mb={["10px"]}>
                  {news.byline}
                </Text>
              </Flex>
            </Flex>
          </Box>

          <Box display={["none", "none", "flex"]} bg={bg} color={textColor}>
            {news.multimedia[2] && news.multimedia[2].url && (
              <Image
                src={news.multimedia[2].url}
                width={["100%", "100%", "80vh"]}
                alt="news icon"
                flex="1"
              />
            )}
            <Flex direction="column" flex="1" padding="20px 150px">
              <Text ml={["5px"]} fontWeight={800} color="red">
                Trending
              </Text>
              <Heading as="h2" ml={["5px"]} size="lg" letterSpacing={"tighter"}>
                {news.title}
              </Heading>

              <Flex direction="column" flex="1" padding={["10px"]}>
                <Text
                  mt={["10px", "12px", "15px"]}
                  fontSize={["30px"]}
                  fontWeight={600}
                >
                  {news.abstract}
                </Text>
                <Flex
                  justifyContent="space-between"
                  mt={["15px", "20px", "30px"]}
                >
                  <Text fontSize={["12px"]} fontWeight={500}>
                    {fromDate(news.published_date)}
                  </Text>
                  <Text fontSize={["12px"]} fontWeight={500} mb={["10px"]}>
                    {news.byline}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Box>
        </Box>
        <FollowMe />
      </Box>
    );
  }

  return (
    <Card
      margin={index === 1 ? "0" : "20px"}
      width={["300px", "500px", "700px"]}
      borderBottom={[`1px solid black`]}
    >
      {news.multimedia[2] && news.multimedia[2].url && (
        <Image src={news.multimedia[2].url} width={["100%"]} alt="News icon" />
      )}
      <Box padding={"10px 20px"}>
        <Heading
          mt={["10px", "12px", "15px"]}
          as="h2"
          size="lg"
          letterSpacing={"tighter"}
        >
          {news.title}
        </Heading>

        <Text
          mt={["10px", "12px", "15px"]}
          fontSize={["17px"]}
          fontWeight={500}
        >
          {news.abstract}
        </Text>
        <Flex justifyContent="space-between" mt={["15px", "20px", "30px"]}>
          <Text fontSize={["12px"]} fontWeight={500}>
            {fromDate(news.published_date)}
          </Text>
          <Text fontSize={["12px"]} fontWeight={500}>
            {news.byline}
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}
