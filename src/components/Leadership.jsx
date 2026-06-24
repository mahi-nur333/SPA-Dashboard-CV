import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Leadership() {
  const theme = useTheme();

  const roles = [
    {
      title: "Organizing Secretary",
      org: "Metropolitan University Research Society",
      period: "July 2025 – Present",
      desc: "Coordinating research events, fostering collaboration, and seeking opportunities to learn, explore, and apply knowledge in research initiatives.",
      icon: "🏛️",
    },
    {
      title: "Communication Commandant",
      org: "Metropolitan University Disaster Response Unit",
      period: "Jan 2025 – Present",
      desc: "Directed emergency communication, coordination, and public awareness efforts.",
      icon: "📡",
    },
    {
      title: "Senior Rover Mate & President of Unit Council",
      org: "Metropolitan University Rover Scout Group",
      period: "Jan 2025 – Jan 2026",
      desc: "Elected as Senior Rover Mate and President of the Metropolitan University Rover Scout Unit Council, leading members and overseeing scouting programs, leadership workshops, and community service initiatives.",
      icon: "⚜️",
    },
    {
      title: "Student Secretary",
      org: "CSE Society, Metropolitan University",
      period: "Jan 2025 – Jan 2026",
      desc: "Manage activities, promote collaboration, and execute events to support students' academic and professional growth. Act as a liaison between students and university administration.",
      icon: "💼",
    },
    {
      title: "President",
      org: "Knocking Collaborator's Youth Foundation",
      period: "May 2024 – May 2025",
      desc: "Lead and oversee foundation activities focused on public speaking, debate, leadership development, and charity. Coordinate youth programs in collaboration with team members and partners.",
      icon: "👑",
    },
    {
      title: "Founder",
      org: "Call for Blood – Online Blood Donation Platform",
      period: "Jun 2021 – Present",
      desc: "Built a network of blood donors in Sylhet that fulfills blood requests. Duties include enlisting and supervising donors, facilitating communication, and maintaining an updated donor database.",
      icon: "🩸",
    },
    {
      title: "Member",
      org: "Bangladesh Scouts",
      period: "Mar 2010 – Present",
      desc: "Progressed through various levels: Cub Scout, Scout, and currently Rover Scout. Actively involved in community service projects, leadership training, and outdoor activities.",
      icon: "⚜️",
    },
    {
      title: "Secretary (Training) and Rover Mate",
      org: "Metropolitan University Rover Scout Group",
      period: "Feb 2023 – Feb 2025",
      desc: "Lead a six-member team as Rover Mate, coordinating activities, ensuring communication, and fostering teamwork through scouting projects.",
      icon: "🤝",
    },
    {
      title: "Assistant Publication Coordinator",
      org: "NDF BD Sylhet Zone",
      period: "Feb 2020 – Mar 2021",
      desc: "Gained valuable management and communication skills through coordinating publication activities. Participated in and enjoyed several debate events.",
      icon: "📰",
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
        Leadership & Community Engagement
      </Typography>

      <Stack spacing={3}>
        {roles.map((role, idx) => (
          <Card
            key={idx}
            sx={{
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 1, mb: 0.5, alignItems: "center" }}>
                <Box sx={{ fontSize: "1.8rem" }}>{role.icon}</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  {role.title}
                </Typography>
              </Box>

              <Box sx={{ ml: 6 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {role.org}
                </Typography>
                <Typography
                  variant="caption"
                  display="block"
                  color="textSecondary"
                  sx={{ mb: 1 }}
                >
                  {role.period}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.text.secondary }}
                >
                  {role.desc}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </>
  );
}