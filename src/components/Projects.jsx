import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Projects() {
  const theme = useTheme();

  const projects = [
    {
      name: "Personal Portfolio Website (MERN Stack)",
      tools: "React.js, Vite, Node.js, Express.js, MongoDB, Netlify, Render",
      icon: "🌐",
      live: "https://mrpamel.netlify.app",
      liveLabel: "mrpamel.netlify.app",
      github: "https://github.com/mahi-nur333/Personal-Portfolio-MERN",
      githubLabel: "Personal-Portfolio-MERN",
    },
    {
      name: "CGPA Runner – Retro Pixel-Art Browser Game",
      tools: "HTML, CSS, JavaScript, Canvas API, Web Audio API",
      icon: "🎮",
      live: "https://mahi-nur333.github.io/CGPA-Runner-Game",
      liveLabel: "mahi-nur333.github.io/CGPA-Runner-Game",
      github: "https://github.com/mahi-nur333/CGPA-Runner-Game",
      githubLabel: "CGPA-Runner-Game",
    },
    {
      name: "Credit Card Fraud Detection using Machine Learning",
      tools: "Python, Pandas, Scikit-learn, Matplotlib, Seaborn",
      icon: "🔍",
      live: null,
      github: "https://github.com/mahi-nur333/Credit-Card-Fraud-Detection-Using-a-Machine-Learning-Approach",
      githubLabel: "Credit-Card-Fraud-Detection-Using-a-Machine-Learning-Approach",
    },
    {
      name: "House Price Prediction using Linear Regression",
      tools: "Python, Pandas, Scikit-learn, Matplotlib, Seaborn",
      icon: "🏠",
      live: null,
      github: "https://github.com/mahi-nur333/Regression-Analysis-with-Python-using-the-Ames-Housing-Dataset",
      githubLabel: "Regression-Analysis-with-Python-using-the-Ames-Housing-Dataset",
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
        Projects
      </Typography>

      <Stack spacing={3}>
        {projects.map((project, idx) => (
          <Card
            key={idx}
            sx={{
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
            }}
          >
            <CardContent>
              {/* Icon + Title */}
              <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
                <Box sx={{ fontSize: "1.8rem" }}>{project.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  {project.name}
                </Typography>
              </Box>

              <Box sx={{ ml: 6 }}>
                {/* Tools */}
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>
                  Tools: <span style={{ fontWeight: 400, color: theme.palette.text.secondary }}>{project.tools}</span>
                </Typography>

                {/* Live link */}
                {project.live && (
                  <Typography variant="body2" sx={{ mb: 0.5 }}>
                    Live:{" "}
                    <Link
                      href={project.live}
                      target="_blank"
                      underline="hover"
                      sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}
                    >
                      {project.liveLabel}
                    </Link>
                  </Typography>
                )}

                {/* GitHub link */}
                <Typography variant="body2">
                  GitHub:{" "}
                  <Link
                    href={project.github}
                    target="_blank"
                    underline="hover"
                    sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}
                  >
                    {project.githubLabel}
                  </Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
}