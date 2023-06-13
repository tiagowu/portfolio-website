import { skillIcons } from "../data/IconsData";
import { skillsData } from "../data/SkillsData";

import { Container, Grid, Typography } from "@mui/material";

const Skills = () => {
  return (
    <Container id="skills" sx={{ paddingTop: "72px" }}>
      <Typography variant="h4" align="center" paddingBottom="32px">
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {skillsData.map((section, sectionIndex) => (
          <Grid item xs={12} key={sectionIndex}>
            <Typography variant="h5" sx={{ display: "flex", justifyContent: "center", pb: "16px" }}>
              {section.section}
            </Typography>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              {section.skills.map((skill, skillIndex) => (
                <Grid item key={skillIndex} sx={{ fontSize: "72px" }}>
                  {skillIcons[skill.toLowerCase()]}
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
