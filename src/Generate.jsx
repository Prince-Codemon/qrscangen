import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
} from "@chakra-ui/react";
import QRCode from "qrcode";
const Generate = () => {
  const [loading, setLoading] = useState(false);
  const [val, setVal] = useState("");
  const [src, setSrc] = useState("");
  const generate = async () => {
    setLoading(true);
    if (!val) {
      alert("Value Can't be Empty!");
      setLoading(false);
      return;
    }
    const res = await QRCode.toDataURL(val)
    setTimeout(() => {
      
      setSrc(res);
      setVal(" ");
      setLoading(false);
    }, 1000);
    
  };
  return (
    <>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <FormControl >
          <FormLabel>Enter the Link or Text</FormLabel>
          <Input
          boxShadow='base'
            type="text"
            required
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </FormControl>

        {src ? (
          <a href={src} download>
            {" "}
            <Image
              src={src}
              marginTop="6px"
              width="200px"
              height="200px"
            />{" "}
          </a>
        ) : (
          " "
        )}

        <Button
          isLoading={loading}
          loadingText="Generating"
          textAlign="center"
          colorScheme="blue"
          marginTop="6px"
          onClick={generate}
        >
          Generate
        </Button>
      </Box>
    </>
  );
};

export default Generate;
