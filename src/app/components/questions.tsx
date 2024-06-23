// components/CommonQuestions.tsx
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface CommonQuestionsProps {
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
}

export default function CommonQuestions({
  title,
  description,
  icon: Icon,
}: CommonQuestionsProps) {
  return (
    <Box className="flex flex-col w-72 h-32 font-medium">
      <Box>
        <Typography variant="body1" color="secondary">
          {title}
        </Typography>
      </Box>
      <Box className="flex items-center gap-x-3">
        <Icon fontSize="large" color="secondary" />
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
}