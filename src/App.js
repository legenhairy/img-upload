import React, { useState } from 'react';
import { Box, Button, Image, Flex, Text } from "@chakra-ui/core";
import './App.css';

function App() {
  // store the file object an
  
  return (
    <div className="App">
      <Flex align="center" justify="center" direction="column" 
        border="1px" borderColor="#171923" minHeight="100vh">
        <Text fontSize="2xl">Upload an Image</Text>
        <Text fontSize="xl">File should be .jpeg, .png...</Text>
        <Box bg="#90CDF4" w="80%" color="grey">
          <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
          <Text fontSize="xl">Drag and Drop Your Image Here</Text>
        </Box>  
        <Text fontSize="xl">
          OR
        </Text>
        <Button variantColor="blue" variant="solid">
          Choose a File
        </Button>
      </Flex>
    </div>
  );
}

export default App;
