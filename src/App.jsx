import { useState, useEffect } from "react";
import { Box, ThemeProvider, CssBaseline, Drawer, IconButton } from "@mui/material";
import theme from "./theme";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Education from "./components/Education";
import Research from "./components/Research";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("dashboard");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSetPage = (newPage) => {
    setPage(newPage);
    if (isMobile) setMobileOpen(false);
  };

  const renderPage = () => {
    switch (page) {
      case "education":   return <Education />;
      case "research":    return <Research />;
      case "leadership":  return <Leadership />;
      case "projects":    return <Projects />;
      case "awards":      return <Awards />;
      case "experience":  return <Experience />;
      case "skills":      return <Skills />;
      case "contact":     return <Contact />;
      default:            return <Dashboard />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>

        {/* ── Mobile hamburger*/}
        {isMobile && (
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{
              position: "fixed",
              top: 12,
              left: 12,
              zIndex: 1400,
              bgcolor: theme.palette.primary.main,
              color: "white",
              width: 42,
              height: 42,
              borderRadius: "8px",
              "&:hover": { bgcolor: theme.palette.primary.dark },
            }}
          >
            <span style={{ fontSize: "1.2rem" }}>
              {mobileOpen ? "✕" : "☰"}
            </span>
          </IconButton>
        )}

        {/* ── Mobile Drawer ── */}
        {isMobile ? (
          <Drawer
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
            ModalProps={{ keepMounted: true }}
            sx={{
              "& .MuiDrawer-paper": {
                width: 260,
                boxSizing: "border-box",
                border: "none",
              },
              "& .MuiBackdrop-root": {
                backgroundColor: "rgba(0,0,0,0.5)",
              },
            }}
          >
            <Sidebar
              setPage={handleSetPage}
              activePage={page}
              isMobile={true}
            />
          </Drawer>
        ) : (
          <Sidebar
            setPage={handleSetPage}
            activePage={page}
            isMobile={false}
          />
        )}

        {/* ── Main content ── */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3, md: 4 },
            pt: { xs: 7, sm: 3, md: 4 },
            overflowY: "auto",
            backgroundColor: "#F5F5F5",
          }}
        >
          {renderPage()}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;