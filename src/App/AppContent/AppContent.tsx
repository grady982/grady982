import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AboutMe from "../AboutMe/AboutMe";
import "./AppContent.css";

function AppContent(props: any) {
  const [flag, setFlag] = useState("about me");

  const helloBtnClick = () => {
    setFlag("about me");
  };

  const setHelloFlag = () => {
    setFlag("hello");
  };

  const HelloButton = () => {
    enum AnimationPlayState {
      Running = "running",
      Paused = "paused",
    }

    const [isPlay, setIsPlay] = useState(AnimationPlayState.Paused);

    useEffect(() => {
      if (isPlay === AnimationPlayState.Paused) {
        setTimeout(() => {
          setIsPlay(AnimationPlayState.Running);
        }, 3000);
      } else {
        setTimeout(() => {
          setIsPlay(AnimationPlayState.Paused);
        }, 3000);
      }
    }, [AnimationPlayState.Paused, AnimationPlayState.Running, isPlay]);

    return (
      <Button
        className="hello-shaking"
        style={{ animationPlayState: isPlay }}
        variant="contained"
        // startIcon={<InsertEmoticonIcon />}
        color="neutral"
        onClick={helloBtnClick}
      >
        About Me
      </Button>
    );
  };

  const Content = (props: any) => {
    switch (props.flag) {
      case "hello":
        return <HelloButton />;
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
      className="app-content-height"
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Content flag={flag} theme={props.theme} />
    </Grid>
  );
}

export default AppContent;
