import {
  Box,
  VStack,
  Button,
  HStack,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const Scan = () => {
  const [data, setData] = useState("");
  const [copy, setCopy] = useState(false);

  const Copy = () => {
    window.navigator.clipboard.writeText(data);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  return (
    <>
      <VStack>
        <Alert status="success" display={copy ? "block" : "none"}>
          <AlertIcon />
          Succesfully Copied to Clipboard
        </Alert>

        <Box padding="5px" borderRadius="5px" height="90%" width="90%">
          <QrReader
            key="environment"
            constraints={{ facingMode: "environment" }}
            onResult={(result) => {
              if (result) {
                setData(result.text);
              }
            }}
            style={{ width: "100%" }}
            scanDelay={1000}
          ></QrReader>
        </Box>
      </VStack>
      {data ? (
        <HStack marginTop="10px" spacing="10px" height="fit-content">
          <Text height="fit-content" maxWidth="90%">
            {data}
          </Text>
          <Button colorScheme="blue" onClick={Copy}>
            <i class="fa-solid fa-copy"></i>
          </Button>
        </HStack>
      ) : (
        ""
      )}
    </>
  );
};

export default Scan;
