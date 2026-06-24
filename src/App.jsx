import { useState } from "react";
import { Box, ThemeProvider, CssBaseline } from "@mui/material";
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

  const renderPage = () => {
    switch (page) {
      case "education":
        return <Education />;
      case "research":
        return <Research />;
      case "leadership":
        return <Leadership />;
      case "projects":
        return <Projects />;
      case "awards":
        return <Awards />;
      case "experience":
        return <Experience />;
      case "skills":
        return <Skills />;
      case "contact":
        return <Contact />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
        <Sidebar setPage={setPage} />

        <Box
          sx={{
            flex: 1,
            p: { xs: 2, sm: 3, md: 4 },
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