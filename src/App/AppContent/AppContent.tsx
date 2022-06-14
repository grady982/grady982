import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AboutMe from "../AboutMe/AboutMe";
import Typography from "@mui/material/Typography";

function AppContent() {
  const [flag, setFlag] = useState("hello");

  const helloBtnClick = () => {
    setFlag("about me");
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
        return (
          <section
            style={{
              height: "75%",
              width: "70%",
              background: "rgba(0, 0, 0, 0.3)",
              // display: "flex",
              // flexDirection: "row",
              // justifyContent: "centers",
              padding: "20px 60px",
              borderRadius: "7px",
            }}
          >
            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              About Me
            </Typography>
            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="/"
              sx={{
                mt: 6,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              I am Grady Liu, a Software Developer. I have 3 years of front-end
              and 2 years of back-end development experience. I love to learn
              some trendy technical stuff from Udemy or Youtube. I enjoy the
              process while I struggle with the new challenge. One of my
              favorite sayings is "What you learn easily, you forget easily
              too.If you watch and struggle on your own you will master the
              technique better."
            </Typography>
          </section>
        );
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
