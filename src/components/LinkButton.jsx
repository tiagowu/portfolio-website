import React from "react";

import { IconButton } from "@mui/material";

const LinkButton = ({ link, icon: IconComponent, iconProps }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ height: "32px" }}>
      <IconButton disableRipple sx={{ backgroundColor: "blue", color: "white", borderRadius: "8px", padding: "4px" }}>
        <IconComponent sx={{ fontSize: iconProps.fontSize }} />
      </IconButton>
    </a>
  );
};

export default LinkButton;
