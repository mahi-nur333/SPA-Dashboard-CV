import {
  Typography,
  Card,
  CardContent,
  Stack,
  Chip,
  Box,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Skills() {
  const theme = useTheme();

  const skillCategories = [
    {
      category: "Languages",
      icon: "💻",
      skills: ["C", "C++", "Python", "Java", "JavaScript"],
    },
    {
      category: "Web Development",
      icon: "🌐",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js"],
    },
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React.js", "Vite", "Tailwind CSS", "Material-UI"],
    },
    {
      category: "Backend & Database",
      icon: "🗄️",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      category: "Data Science & ML",
      icon: "📊",
      skills: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    },
    {
      category: "Other Skills",
      icon: "🛠️",
      skills: ["Problem Solving", "Organizing and Team Management"],
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
          borderRadius: 3,
          mb: 4,
        }}
      >
        Technical Skills
      </Typography>

      <Grid container spacing={3}>
        {skillCategories.map((category, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <Card
              sx={{
                height: "100%",
                background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
                border: `1px solid ${theme.palette.divider}`,
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: theme.palette.primary.main,
                  boxShadow: `0 8px 24px ${theme.palette.primary.main}15`,
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Box sx={{ fontSize: "1.5rem" }}>{category.icon}</Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {category.category}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1,
                  }}
                >
                  {category.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor: theme.palette.primary.dark,
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.2s ease",
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Summary Card */}
      <Card
        sx={{
          mt: 4,
          background: `linear-gradient(135deg, ${theme.palette.secondary.light}15 0%, ${theme.palette.primary.light}15 100%)`,
          border: `2px solid ${theme.palette.primary.main}`,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: theme.palette.primary.main,
              mb: 1,
            }}
          >
            📈 Overall Expertise
          </Typography>
          <Typography variant="body2">
            Full-stack developer with expertise in MERN stack, machine learning, and data analysis. Proficient in multiple programming languages with a focus on web development and research applications.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}