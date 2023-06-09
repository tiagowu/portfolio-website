import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";

import { skillIcons } from "../data/IconsData";
import { skillsData } from "../data/SkillsData";

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsTitle variant="h4">Skills</SkillsTitle>
      <SkillsSectionGridContainer container>
        {skillsData.map(({ section, skills }, sectionIndex) => (
          <Grid item xs={12} key={sectionIndex}>
            <SkillsSection variant="h6" sx={{ typography: { sm: "h5" } }}>
              {section}
            </SkillsSection>
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

const SkillsTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(4),
  paddingTop: theme.spacing(9),
}));

const SkillsSectionGridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  maxWidth: 1000,
  gap: theme.spacing(1),
}));

const SkillsSection = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  paddingBottom: theme.spacing(2),
}));

const SkillGridContainer = styled(Grid)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.5),
}));

const SkillGridItem = styled(Grid)(({ theme }) => ({
  fontSize: 56,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    fontSize: 72,
  },
}));

export default Skills;
