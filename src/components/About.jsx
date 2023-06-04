import React, { useState, useEffect } from "react";
import { Box, Container } from "@mui/material";

const About = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingFinished, setIsTypingFinished] = useState(false);

  const about = `class Tiago {
    constructor() {
      this.name = "Tiago Wu";
      this.current_city = "Staten Island, New York"
      this.college = "Stony Brook University";
      this.expected_graduation_date = "May 2024";
      this.projects = viewProjects();
      this.skills = viewSkills();
      this.interests_and_hobbies = [];
    }\n}`;

  useEffect(() => {
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index < about.length) {
          setText((prevText) => prevText + about[index]);
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
          setIsTypingFinished(true);
        }
      }, 30);
    };

    startTyping();

    if (isTypingFinished) {
      setTimeout(() => {
        setText("");
        setIndex(0);
        setIsTypingFinished(false);
        startTyping();
      }, 20000);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [about, index, isTypingFinished]);

  const renderText = () => {
    const modifiedText = text
      .replace(/viewProjects\(\)/, `<a href="#projects">viewProjects()</a>`)
      .replace(/viewSkills\(\)/, `<a href="#skills">viewSkills()</a>`);
    const htmlText = { __html: modifiedText };
    return <pre dangerouslySetInnerHTML={htmlText} />;
  };

  return (
    <>
      <Container sx={{ height: "100vh", paddingTop: "72px" }} id="about">
        About
        <Box sx={{ width: 300 }}>{isTypingFinished ? renderText() : <pre>{about.substring(0, index)}</pre>}</Box>
      </Container>
    </>
  );
};

export default About;
