"use client";

import React from "react";
import {
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MenuIcon } from "@/assets/icons";
import ColorModeSwitch from "./ColorModeSwitch";
import FilterSection from "./FilterSection";
import Link from "next/link";
import { routes } from "@/navigation";
import { useRouter } from "next/router";

interface IHeader {
  showFilter?: boolean;
}

export default function Header({ showFilter = false }: IHeader) {
  const router = useRouter();

  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const toggleColor = useColorModeValue("#000", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <header>
      <Flex
        as="nav"
        align="flex-end"
        justify="space-between"
        wrap="wrap"
        padding={6}
        bg={bg}
        color={textColor}
        borderBottom={`1px solid black`}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Flying News 📰
          </Heading>
        </Flex>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <MenuIcon color={toggleColor} size={32} />
        </Box>

        <Stack
          direction={["column", "row"]}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          {routes.map((route) => (
            <Flex key={route.path} alignItems="center" gap="5px">
              <Box
                borderRadius="50%"
                width={"5px"}
                height={"5px"}
                border={
                  route.path === router.pathname
                    ? `1px solid ${toggleColor}`
                    : ""
                }
              />
              <Link href={route.path}>{route.name}</Link>
            </Flex>
          ))}
        </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          mt={{ base: 4, md: 0 }}
        >
          <ColorModeSwitch />
          {showFilter && <FilterSection />}
        </Box>
      </Flex>
    </header>
  );
}
