import GitHubIcon from "@/assets/icons/GitHub";
import LinkedinIcon from "@/assets/icons/Linkedin";
import { Flex, Button, Box, keyframes } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

export default function FollowMe() {
  return (
    <Box bg="red" padding="5px 10px" width={"100vw"} m={["0", "15px 0"]}>
      <Flex gap="15px" justifyContent="center" alignItems="center">
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
        <AnimatedTextCharacter text="Follow me on social media" />
      </Flex>
    </Box>
  );
}
