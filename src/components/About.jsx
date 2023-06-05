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
      this.projects = <a href="#projects">viewProjects()</a>;
      this.skills = <a href="#skills">viewSkills()</a>;
      this.interests_and_hobbies = [];
    }\n}`;

  useEffect(() => {
    let typingInterval;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index < about.length) {
          if (about.charAt(index) === "<") {
            const closingBracketIndex = about.indexOf(">", index);
            const tag = about.substring(index, closingBracketIndex + 1);
            setText((prevText) => prevText + tag);
            setIndex(closingBracketIndex);
          } else {
            setText((prevText) => prevText + about.charAt(index));
          }

          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
          setIsTypingFinished(true);
        }
      }, 50);
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

  return (
    <>
      <Container sx={{ height: "100vh", paddingTop: "72px" }} id="about">
        About
        <Box>
          <pre dangerouslySetInnerHTML={{ __html: text + (index !== about.length ? "_" : "") }} />
        </Box>
      </Container>
    </>
  );
};

export default About;
