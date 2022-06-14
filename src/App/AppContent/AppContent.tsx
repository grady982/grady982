import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AboutMe from "../AboutMe/AboutMe";

function AppContent() {
  const [flag, setFlag] = useState("hello");

  const helloBtnClick = () => {
    setFlag("about me");
  };

  const setHelloFlag = () => {
    setFlag("hello");
  };

  const Content = (props: any) => {
    switch (props.flag) {
      case "hello":
        return (
          <Button
            variant="contained"
            startIcon={<InsertEmoticonIcon />}
            color="neutral"
            onClick={helloBtnClick}
          >
            Hello
          </Button>
        );
      case "about me":
        return <AboutMe onClose={setHelloFlag} />;
      case "Blog":
        return <div>Blog</div>;
      default:
        return <></>;
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ height: "900px" }}
    >
      <Content flag={flag} />
    </Grid>
  );
}

export default AppContent;
