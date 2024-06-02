import { Box, Flex, Spacer } from "@chakra-ui/react";

const FlexExample = () => {
  return (
    <>
      <Box>
        <Flex>
          <Box p="10px" bg="red.400">
            Box 1
          </Box>
          <Spacer />
          <Box p="10px" bg="green.400">
            Box 2
          </Box>
          <Spacer />
          <Box p="10px" bg="blue.400">
            Box 3
          </Box>
          <Spacer />
          <Box p="10px" bg="yellow.400">
            Box 4
          </Box>
        </Flex>
      </Box>
      <br />
      <Box>
        <Flex direction={"column"}>
          <Box p="4" bg="red.600">
            Box 1
          </Box>
          <Spacer />
          <Box p="4" bg="green.600">
            Box 2
          </Box>
          <Spacer />
          <Box p="4" bg="blue.600">
            Box 3
          </Box>
          <Spacer />
          <Box p="4" bg="yellow.600">
            Box 4
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default FlexExample;
