import React, { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { ThemeMode } from "../../common/enum";
import "./AboutMe.css";

function Title(props: any) {
  const { text, mt } = props;
  return (
    <Typography
      className="title"
      variant="h1"
      component="h1"
      sx={{ mt: mt, mr: 2 }}
    >
      {text}
    </Typography>
  );
}

function Content(props: any) {
  return (
    <Typography
      className="content"
      variant="body1"
      component="p"
      sx={{ mt: props.mt, mr: 2 }}
    >
      {props.children}
    </Typography>
  );
}

function AboutMe(props: any) {
  const { theme } = useContext(ThemeContext);
  const [isShow, setIsShow] = useState(true);

  const content = `I am Grady Liu, a Software Developer. I have 3 years of front-end
  and 2 years of back-end development experience. I love to learn some
  trendy technical stuff from Udemy or Youtube. I enjoy the process
  while I struggle with the new challenge. One of my favorite sayings
  is "What you learn easily, you forget easily too.If you watch and
  struggle on your own you will master the technique better."`;

  const techStack = [
    { title: "Front-End", skills: ["Angular", "React"] },
    { title: "Back-End", skills: ["NodeJs", "Express", "Koa"] },
    { title: "Database", skills: ["PostgreSQL", "MSSQL", "Mongo"] },
    { title: "DevOps", skills: ["Docker", "Kubernetes"] },
  ];

  const onCloseBtnClick = () => {
    setIsShow(false);
    setTimeout(() => {
      props.onClose();
    }, 800);
  };

  return (
    <Grow in={isShow} style={{ transformOrigin: "80 0 0" }}>
      <section
        className={
          theme === ThemeMode.Dark
            ? "about-me about-me-dark"
            : "about-me about-me-light"
        }
      >
        <Stack direction="row" justifyContent="flex-end" alignItems="center">
          <IconButton color="cswhite" onClick={onCloseBtnClick}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <div className="about-me-block">
          <Title text="About Me" />
          <hr />
          <Content mt={3}>{content}</Content>
          <Title mt={5} text="Certification" />
          <hr />
          <Content mt={2}>
            <Link
              target="_blank"
              rel="noopener"
              href="https://www.udemy.com/certificate/UC-5be14435-4e74-468c-820a-77905dffac2a/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
              underline="hover"
              sx={{
                color: theme === ThemeMode.Dark ? "white" : "black",
              }}
            >
              Docker Mastery: with Kubernetes +Swarm from a Docker Captain
            </Link>
          </Content>
          <Title mt={5} text="Tech Stack" />
          <hr />
          {techStack.map((data) => {
            return (
              <Content mt={1}>
                <Grid container direction="row" alignItems="center">
                  <h4 style={{ margin: "0 15px 0 0" }}>{data.title}:</h4>
                  <Stack direction="row" spacing={2}>
                    {data.skills.map((skill) => {
                      return (
                        // <Chip label={skill} color="neutral" size="small" />
                        <span>{skill};</span>
                      );
                    })}
                  </Stack>
                </Grid>
              </Content>
            );
          })}
        </div>
      </section>
    </Grow>
  );
}

export default AboutMe;
