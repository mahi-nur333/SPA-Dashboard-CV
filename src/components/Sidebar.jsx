import { useState } from "react";
import { Box, Typography, Button, Stack, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Sidebar({ setPage, activePage, isMobile }) {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const isCollapsed = isMobile ? false : collapsed;

  const menuItems = [
    { label: "Dashboard",  value: "dashboard",  icon: "📊" },
    { label: "Education",  value: "education",  icon: "🎓" },
    { label: "Research",   value: "research",   icon: "📚" },
    { label: "Leadership", value: "leadership", icon: "👥" },
    { label: "Projects",   value: "projects",   icon: "💻" },
    { label: "Awards",     value: "awards",     icon: "🏆" },
    { label: "Experience", value: "experience", icon: "💼" },
    { label: "Skills",     value: "skills",     icon: "🛠️" },
    { label: "Contact",    value: "contact",    icon: "📞" },
  ];

  return (
    <Box
      sx={{
        width: isCollapsed ? 72 : 260,
        minWidth: isCollapsed ? 72 : 260,
        transition: "width 0.25s ease, min-width 0.25s ease",
        bgcolor: theme.palette.primary.main,
        backgroundImage: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        color: "white",
        boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
        height: "100vh",
        position: "sticky",
        top: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        "&::-webkit-scrollbar": { display: "none" },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        flexShrink: 0,
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "space-between",
          pl: isMobile ? 7 : (isCollapsed ? 0 : 2),
          pr: 2,
          py: 2,
          borderBottom: "1px solid rgba(255,255,255,0.8)",
          flexShrink: 0,
        }}
      >
        {!isCollapsed && (
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.06rem", lineHeight: 1.3 }}>
              Mahinur Rahman Pamel
            </Typography>
            <Typography sx={{ opacity: 0.8, fontSize: "0.75rem" }}>
              Computer Science Student
            </Typography>
          </Box>
        )}

        {/* Desktop only: collapse button */}
        {!isMobile && (
          <Tooltip title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"} placement="right">
            <IconButton
              onClick={() => setCollapsed(!collapsed)}
              size="small"
              sx={{
                color: "white",
                bgcolor: "rgba(255,255,255,0.15)",
                borderRadius: "6px",
                width: 38,
                height: 30,
                "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
                flexShrink: 0,
              }}
            >
              <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>
                {isCollapsed ? "▶" : "◀"}
              </span>
            </IconButton>
          </Tooltip>
        )}
      </Box>

      {/* ── Nav items ── */}
      <Stack
        spacing={0.5}
        sx={{
          px: isCollapsed ? 0.5 : 1.5,
          pt: 1.5,
          flex: 1,
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {menuItems.map((item) => {
          const isActive = activePage === item.value;
          return (
            <Tooltip
              key={item.value}
              title={isCollapsed ? item.label : ""}
              placement="right"
            >
              <Button
                onClick={() => setPage(item.value)}
                sx={{
                  justifyContent: isCollapsed ? "center" : "flex-start",
                  gap: isCollapsed ? 0 : 1.5,
                  px: isCollapsed ? 1 : 1.5,
                  py: isCollapsed ? 1.2 : 1,
                  minWidth: 0,
                  color: isActive ? "white" : "rgba(255,255,255,0.85)",
                  textTransform: "none",
                  fontWeight: isActive ? 700 : 600,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  bgcolor: isActive
                    ? "rgba(255,255,255,0.25)"
                    : "rgba(255,255,255,0.15)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.3)",
                    transform: isCollapsed ? "none" : "translateX(3px)",
                  },
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontSize: isCollapsed ? "1.1rem" : "1.25rem", flexShrink: 1 }}>
                  {item.icon}
                </span>
                {!isCollapsed && item.label}
              </Button>
            </Tooltip>
          );
        })}
      </Stack>

      {/* ── Footer ── */}
      {!isCollapsed && (
        <Box
          sx={{
            px: 2,
            py: 1.5,
            mt: "auto",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            textAlign: "center",
            flexShrink: 0,
          }}
        >
          <Typography sx={{ fontSize: "0.8rem", opacity: 0.6 }}>
            © 2026 · All Rights Reserved
          </Typography>
        </Box>
      )}
    </Box>
  );
}