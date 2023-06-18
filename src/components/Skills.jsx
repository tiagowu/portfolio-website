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
              {skills.map((skill, skillIndex) => {
                const lowercaseSkill = skill.toLowerCase();
                return (
                  <SkillGridItem item key={skillIndex}>
                    {lowercaseSkill in skillIcons ? skillIcons[lowercaseSkill] : <Typography>{skill}</Typography>}
                  </SkillGridItem>
                );
              })}
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

const SkillGridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
}));

const SkillGridItem = styled(Grid)({
  fontSize: 72,
  width: 80,
  textAlign: "center",
});

export default Skills;
