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

interface INewsCard {
  news: any;
  index: number;
}

const textKeyframe = keyframes`
0% {
  transform: translate3d(-90vw, 0, 0);
}

100% {
  transform: translate3d(100vw,0,0);
}
`;

const textAnim = `${textKeyframe} 15s linear infinite`;

export default function NewsCard(props: INewsCard) {
  const { news, index } = props;

  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  if (index === 0) {
    return (
      <Box>
        <Box bg={bg} color={textColor}>
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
              width={"100%"}
              alt="news icon"
            />
          )}

          <Text
            mt={["10px", "12px", "15px"]}
            fontSize={["20px"]}
            fontWeight={600}
            padding={["10px"]}
          >
            {news.abstract}
          </Text>
          <Flex justifyContent="space-between" mt={["15px", "20px", "30px"]}>
            <Text fontSize={["12px"]} fontWeight={500}>
              {fromDate(news.published_date)}
            </Text>
            <Text fontSize={["12px"]} fontWeight={500} mb={["10px"]}>
              {news.byline}
            </Text>
          </Flex>
        </Box>

        <Box bg="red" padding="5px 10px">
          <Flex gap="15px" justifyContent="center">
            <Link href="https://www.linkedin.com/in/felipsteles/">
              <Button bg="transparent">
                <LinkedinIcon size="30" color="black" />
              </Button>
            </Link>
            <Link href="https://github.com/felipersteles">
              <Button bg="transparent">
                <GitHubIcon size="30" color="black" />
              </Button>
            </Link>
          </Flex>

          <Box maxWidth={"100%"}>
            <Box as={motion.div} animation={textAnim} maxWidth="100vw">
              <Text fontSize="23px" fontWeight={700} color="black">
                Follow me on social media
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Card
      padding={["10px 20px"]}
      margin={["15px"]}
      borderBottom={[`1px solid black`]}
    >
      <Heading as="h2" size="lg" letterSpacing={"tighter"}>
        {news.title}
      </Heading>
      {news.multimedia[2] && news.multimedia[2].url && (
        <Image
          mt={["10px", "12px", "15px"]}
          src={news.multimedia[2].url}
          alt="News icon"
        />
      )}

      <Text mt={["10px", "12px", "15px"]} fontSize={["17px"]} fontWeight={500}>
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
    </Card>
  );
}
