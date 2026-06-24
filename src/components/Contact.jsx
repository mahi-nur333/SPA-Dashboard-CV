import {
  Typography,
  Card,
  CardContent,
  Box,
  Link,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Contact() {
  const theme = useTheme();

  const contacts = [
    { icon: "📧", label: "Email",    value: "mahi.pamel@gmail.com",        href: "mailto:mahi.pamel@gmail.com" },
    { icon: "📱", label: "Phone",    value: "+8801728641748",               href: "tel:+8801728641748" },
    { icon: "📍", label: "Location", value: "Balaganj, Sylhet, Bangladesh", href: null },
   
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
        Contact Information
      </Typography>

      <Card
        sx={{
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {contacts.map((item, idx) => (
            <Box key={idx}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  py: 1,
                }}
              >
                <Box sx={{ fontSize: "1.6rem", minWidth: 36, textAlign: "center" }}>
                  {item.icon}
                </Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main, minWidth: 80 }}
                >
                  {item.label}
                </Typography>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    underline="hover"
                    sx={{ color: theme.palette.primary.dark, fontWeight: 500, fontSize: "0.95rem" }}
                  >
                    {item.value}
                  </Link>
                ) : (
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    {item.value}
                  </Typography>
                )}
              </Box>
              {idx < contacts.length - 1 && <Divider sx={{ opacity: 0.4 }} />}
            </Box>
          ))}
        </CardContent>
      </Card>
    </>
  );
}