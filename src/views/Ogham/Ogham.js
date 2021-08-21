import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const Ogham = () => {
  return (
    <React.Fragment>
      <Typography variant="h1">Ogham Translator</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <span>Preview here</span>
    </React.Fragment>
  );
};

export default Ogham;
