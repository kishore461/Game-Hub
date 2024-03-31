import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";
import React from "react";

const ColorSwitchMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace='nowrap'>Dark Mode</Text>
    </HStack>
  );
};

export default ColorSwitchMode;
