import {
  Typography,
  Card,
  CardContent,
  Grid,
  Link,
  Box,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Dashboard() {
  const theme = useTheme();

  const statCards = [
    {
      title: "Education",
      desc: "B.Sc. in Computer Science & Engineering",
      sub: "Metropolitan University (4th year 2nd semester)",
      icon: "🎓",
    },
    {
      title: "Research",
      desc: "2 Published Papers",
      sub: "IEEE ICCCA & ICMLAS",
      icon: "📚",
    },
    {
      title: "Leadership",
      desc: "8+ Active Roles",
      sub: "Community & Academic Leadership",
      icon: "👥",
    },
    {
      title: "Work Experience",
      desc: "Research & Strategy",
      sub: "Assistant at CSPI & Photographer",
      icon: "💼",
    },
  ];

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          mb: 2,
          p: 2,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
          color: "white",
          textAlign: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 800, color: "white", mb: 1 }}
        >
          Mahinur Rahman Pamel
        </Typography>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "rgba(255,255,255,0.85)", fontWeight: 500, mb: 0 }}
        >
          Research Enthusiast • Developer
        </Typography>
      </Box>

      {/* Contact Card */}
    <CardContent sx={{ p: 1, textAlign: "center",  borderLeft: `4px solid ${theme.palette.primary.main}`, borderRight: `4px solid ${theme.palette.primary.main}`,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
          mb: 3, borderRadius: 3 }}>

  {/* Row 1 — Email | Phone */}
  <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 1.5, flexWrap: "wrap" }}>
    <Typography variant="body1">
      <strong style={{ color: theme.palette.primary.main }}>📧 Email:</strong>{" "}
      <Link href="mailto:mahi.pamel@gmail.com" underline="hover"
        sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}>
        mahi.pamel@gmail.com
      </Link>
    </Typography>
    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
      <strong style={{ color: theme.palette.primary.main }}>📱 Phone:</strong>{" "}
      +8801728641748
    </Typography>
  </Box>



  {/* Row 2 — ORCID | LinkedIn */}
  <Box sx={{ display: "flex", justifyContent: "center", gap: 6, mb: 1.5, flexWrap: "wrap" }}>
    <Typography variant="body1">
      <strong style={{ color: theme.palette.primary.main }}>🔗 ORCID:</strong>{" "}
      <Link href="https://orcid.org/0009-0003-0376-7936" target="_blank" underline="hover"
        sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}>
        0009-0003-0376-7936
      </Link>
    </Typography>
    <Typography variant="body1">
      <strong style={{ color: theme.palette.primary.main }}>💼 LinkedIn:</strong>{" "}
      <Link href="https://www.linkedin.com/in/mahi-nur333/" target="_blank" underline="hover"
        sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}>
        mahi-nur333
      </Link>
    </Typography>
  </Box>

  {/* Row 3 — Location */}
  <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
    <strong style={{ color: theme.palette.primary.main }}>📍 Location:</strong>{" "}
    Balaganj, Sylhet, Bangladesh
  </Typography>

</CardContent>

      {/* Quick Overview */}
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ textAlign: "center", fontWeight: 700, mb: 3, background: `linear-gradient(135deg, ${theme.palette.primary.light}20 0%, ${theme.palette.secondary.light}20 100%)`, p: 2, borderRadius: 3, color: theme.palette.text.primary }}
        >
          Quick Overview
        </Typography>

        <Grid container spacing={2}>
          {statCards.map((stat, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Card
                sx={{
                  height: "100%",
                  background: `linear-gradient(135deg, ${theme.palette.primary.light}15 0%, ${theme.palette.secondary.light}10 100%)`,
                  border: `1px solid ${theme.palette.divider}`,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flex: 1 }}>
                  <Box sx={{ fontSize: "1.25rem", mb: 1.5 }}>{stat.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 1 }}
                  >
                    {stat.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1.5, fontWeight: 500 }}>
                    {stat.desc}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: theme.palette.text.secondary, fontStyle: "italic" }}
                  >
                    {stat.sub}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      {/* Website */}
      <Card
        sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          borderRight: `4px solid ${theme.palette.primary.main}`,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
          mb: 3,
        }}
      >
        <CardContent sx={{ p: 2, textAlign: "center", borderRadius: 3 }}>
          <Typography variant="h5" gutterBottom
            sx={{textAlign: "center", fontWeight: 700, color: theme.palette.primary.main }}>
            🌐 Website
          </Typography>
          <Typography variant="body1">
            <strong>🔗 Portfolio:</strong>{" "}
            <Link href="https://mrpamel.netlify.app" target="_blank" underline="hover"
              sx={{ color: theme.palette.primary.dark, fontWeight: 500 }}>
              mrpamel.netlify.app
            </Link>
          </Typography>
        </CardContent>
      </Card >
    </>
  );
}