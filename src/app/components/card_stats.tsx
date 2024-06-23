import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Icon, SvgIconProps } from "@mui/material";

interface CardStatsProps {
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
}

export default function CardStatsProps({
  title,
  description,
  icon: Icon,
}: CardStatsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 1,
        color: "white",
      }}
    >
      <Icon sx={{ fontSize: 55 }} color="inherit" />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 300 }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
