import React from "react";
import Ogham from "@views/Ogham/Ogham";
import Box from "@material-ui/core/Box";

function App() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Ogham />
    </Box>
  );
}

export default App;
