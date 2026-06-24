import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Experience() {
  const theme = useTheme();

  const experiences = [
    {
      title: "Assistant",
      org: "Centre For Strategy and Policy Innovation (CSPI)",
      location: "Sylhet, Bangladesh",
      period: "Jan 2025 – Present",
      icon: "🔎",
      desc: "The Centre for Strategy and Policy Innovation (CSPI) at Metropolitan University is dedicated to research, policy analysis, and strategic development to address critical societal challenges. As an Assistant at CSPI, involved in research, policy analysis, stakeholder engagement, and strategic discussions. Role includes collaborating with experts, contributing to reports, and supporting initiatives that drive meaningful change.",
    },
    {
      title: "Co-Founder and Part-Time Photographer",
      org: "Chitrachar",
      location: "Sylhet, Bangladesh",
      period: "Mar 2024 – Present",
      icon: "📷",
      desc: "As the co-founder and part-time photographer at Chitrachar in Sylhet, turned passion for photography into a professional pursuit.",
    },
    {
      title: "Social Media Manager",
      org: "Wesitely LTD",
      location: "Sylhet, Bangladesh",
      period: "Mar 2023 – Oct 2023",
      icon: "👩🏻‍💻",
      desc: "Managed social media platforms, created content, and monitored engagement to enhance the company's online presence.",
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
        Work Experience
      </Typography>

      <Stack spacing={3}>
        {experiences.map((exp, idx) => (
          <Card
            key={idx}
            sx={{
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
                <Box sx={{ fontSize: "1.8rem" }}>{exp.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  {exp.title}
                </Typography>
              </Box>

              <Box sx={{ ml: 6 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {exp.org}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  {exp.location} • {exp.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {exp.desc}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
}