import { skillIcons } from "../data/IconsData";
import { skillsData } from "../data/SkillsData";

import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle variant="h4">Skills</SkillsTitle>
      <SkillsSectionGridContainer container>
        {skillsData.map(({ section, skills }, sectionIndex) => (
          <Grid item xs={12} key={sectionIndex}>
            <SkillsSection variant="h5">{section}</SkillsSection>
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
      </SkillsSectionGridContainer>
    </SkillsContainer>
  );
};

/* Styled Components */
const SkillsContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  width: "100%",
});

const SkillsTitle = styled(Typography)({
  textAlign: "center",
  paddingBottom: 32,
  paddingTop: 72,
});

const SkillsSectionGridContainer = styled(Grid)({
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 1000,
  gap: 8,
});

const SkillsSection = styled(Typography)({
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
