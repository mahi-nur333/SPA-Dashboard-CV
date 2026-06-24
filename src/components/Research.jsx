import {
  Typography,
  Card,
  CardContent,
  Stack,
  Box,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Research() {
  const theme = useTheme();

  const papers = [
    {
      title: "AI at the Crossroads of Energy and Ethics: The PAT Framework for Risk Assessment in Petroleum Operations",
      authors: "A Sayeed, & M. R Pamel",
      conf: "2025 IEEE 7th International Conference on Computing, Communication and Automation (ICCCA)",
      date: "November 2025 • Pages: 1–6",
      publisher: "Publisher: IEEE",
      doi: "https://doi.org/10.1109/ICCCA66364.2025.11325323",
    },
    {
      title: "Feature Ranking Using Pearson and Spearman Correlation for ROP Optimization in Autonomous Drilling Systems",
      authors: "A. Sayeed, M. R. Pamel, S. A. Emran and J. A. Salvi",
      conf: "2026 International Conference on Machine Learning and Autonomous Systems (ICMLAS), Bangkok, Thailand",
      date: "2026 • Pages: 1834–1840",
      publisher: "Publisher: IEEE",
      doi: "https://doi.org/10.1109/ICMLAS67792.2026.11483791",
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
        Research Publications
      </Typography>

      <Stack spacing={3}>
        {papers.map((paper, idx) => (
          <Card
            key={idx}
            sx={{
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              background: `linear-gradient(135deg, ${theme.palette.primary.light}08 0%, ${theme.palette.secondary.light}08 100%)`,
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", gap: 1, mb: 1, alignItems: "center" }}>
                <Box sx={{ fontSize: "1.8rem" }}>📄</Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, color: theme.palette.primary.main }}
                >
                  {paper.title}
                </Typography>
              </Box>

              <Box sx={{ ml: 6 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                  {paper.authors}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5, color: theme.palette.text.secondary }}>
                  {paper.conf}
                </Typography>
                <Typography variant="body2" sx={{ mb: 0.5, color: theme.palette.text.secondary }}>
                  {paper.publisher}
                </Typography>

                <Typography variant="caption" color="textSecondary" display="block" sx={{ mb: 1 }}>
                  {paper.date}
                </Typography>
              

                <Typography variant="body2">
                  DOI:{" "}
                  <Link href={paper.doi} target="_blank" underline="hover" color={theme.palette.primary.dark}>
                    {paper.doi} 
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