import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Awards() {
  const theme = useTheme();

  const awards = [
    {
      title: "President's Scout Award",
      date: "Oct 2019",
      icon: "🎖️",
      desc: "As a recipient of the prestigious President's Scout Award from Bangladesh Scouts, achieved the highest recognition in the Bangladesh Scouts. This accomplishment required the successful completion of a series of rigorous requirements, including earning the Standard Badge, Progress Badge, Service Badge, and a minimum of 16 Skill Badges. Additionally, passed written, oral, and swimming exams at various levels, including upazila, zila, regional, and national stages. This award, presented by the President of Bangladesh, honors outstanding scouting achievements and dedication.",
      note: null,
    },
    {
      title: "Study In India (SII) Scholarship",
      date: "Oct 2022",
      icon: "🗞️",
      desc: "Awarded the prestigious Study in India (SII) Scholarship funded by the Government of India for the Bachelor of Technology (B.Tech) in Computer Engineering program at Pandit Deendayal Energy University, Gujarat, India. The scholarship covered full tuition, hostel, and food fees for the first three academic years.",
      note: "(Did not attend)",
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
        Awards & Scholarships
      </Typography>

      <Stack spacing={3}>
        {awards.map((award, idx) => (
          <Card
            key={idx}
            sx={{
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
                <Box sx={{ fontSize: "1.8rem" }}>{award.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  {award.title}
                </Typography>
              </Box>

              <Box sx={{ ml: 6 }}>
                <Typography
                  variant="caption"
                  display="block"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  {award.date}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {award.desc}
                </Typography>
                {award.note && (
                  <Typography
                    variant="caption"
                    sx={{ fontStyle: "italic", mt: 1, display: "block", color: theme.palette.text.secondary }}
                  >
                    {award.note}
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