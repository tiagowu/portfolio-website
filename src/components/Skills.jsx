import { skillIcons } from "../data/IconsData";
import { skillsData } from "../data/SkillsData";

import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Skills = () => {
  return (
    <Container id="skills" maxWidth={false}>
      <Title variant="h4">Skills</Title>
      <SectionGridContainer container>
        {skillsData.map(({ section, skills }, sectionIndex) => (
          <Grid item xs={12} key={sectionIndex}>
            <Section variant="h5">{section}</Section>
            <SkillGridContainer container>
              {skills.map((skill, skillIndex) => (
                <SkillGridItem item key={skillIndex}>
                  {skillIcons[skill.toLowerCase()]}
                </SkillGridItem>
              ))}
            </SkillGridContainer>
          </Grid>
        ))}
      </SectionGridContainer>
    </Container>
  );
};

/* Styled Components */
const Title = styled(Typography)({
  textAlign: "center",
  paddingBottom: 32,
  paddingTop: 72,
});

const SectionGridContainer = styled(Grid)({
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
});

const Section = styled(Typography)({
  textAlign: "center",
  paddingBottom: 16,
});

const SkillGridContainer = styled(Grid)({
  alignItems: "center",
  justifyContent: "center",
  gap: 24,
});

const SkillGridItem = styled(Grid)({
  fontSize: 72,
});

export default Skills;
