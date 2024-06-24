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
    <Box className="flex flex-col w-80 h-32 font-medium">
      <Box>
        <Typography variant="body1" color="secondary" fontWeight={500}>
          {title}
        </Typography>
      </Box>
      <Box className="flex items-center gap-x-3">
        <Icon fontSize="large" color="secondary" sx={{ fontSize: 55 }} />
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
}
