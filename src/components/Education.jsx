import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
  Link,
  LinearProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Education() {
  const theme = useTheme();

  const educations = [
    {
      title: "Metropolitan University, Sylhet",
      degree: "B.Sc., Computer Science and Engineering",
      date: "4th year 2nd semester",
      icon: "🎓",
    },
    {
      title: "Sylhet Government College",
      degree: "Higher Secondary School Certificate (HSC), Science",
      date: "Jan 2021",
      gpa: "GPA: 5.00 / 5.00",
      icon: "🎓",
    },
    {
      title: "Balaganj Govt Dawrokanath High School",
      degree: "Secondary School Certificate (SSC), Science",
      date: "May 2018",
      gpa: "GPA: 4.83 / 5.00",
      icon: "🎓",
    },
  ];

  return (
    <>
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: 800,
          color: theme.palette.primary.main,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.secondary.light}20 100%)`,
          p: 2,
          borderRadius: 2,
          mb: 4,

        }}
      >
        Education
      </Typography>

      <Stack spacing={3}>
        {educations.map((edu, idx) => (
          <Card
            key={idx}
            sx={{
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 1, mb: 0.5, alignItems: "center" }}>
                <Box sx={{ fontSize: "1.8rem" }}>{edu.icon}</Box>
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {edu.title}
                  </Typography>
                </Box>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  color: theme.palette.text.primary,
                  ml: 6,
                }}
              >
                {edu.degree}
              </Typography>

              <Box sx={{ ml: 6 }}>
                <Typography
                  variant="caption"
                  sx={{
                    color: theme.palette.text.secondary,
                    display: "block",
                    mb: 0.5,
                  }}
                >
                  {edu.date}
                </Typography>
                {edu.gpa && (
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.success.main,
                      fontWeight: 600,
                      display: "block",
                    }}
                  >
                     {edu.gpa}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
}