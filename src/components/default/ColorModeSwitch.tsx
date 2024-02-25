import React from "react";
import {
  useColorMode,
  Switch,
  FormControl,
  FormLabel,
  useColorModeValue,
} from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const bg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  return (
    <FormControl
      bg={bg}
      display="inline-flex"
      alignItems="center"
      mb={["15px", "20px", "0"]}
      transitionDuration="200ms"
    >
      <FormLabel color={textColor} htmlFor="color-mode-switch" mb="0">
        Dark Mode
      </FormLabel>
      <Switch
        id="color-mode-switch"
        colorScheme="messenger"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </FormControl>
  );
};

export default ColorModeSwitch;
