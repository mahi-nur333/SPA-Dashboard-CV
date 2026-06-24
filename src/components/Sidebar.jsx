import { useState } from "react";
import { Box, Typography, Button, Stack, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Sidebar({ setPage, activePage }) {
  const theme = useTheme();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { label: "Dashboard", value: "dashboard", icon: "📊" },
    { label: "Education", value: "education", icon: "🎓" },
    { label: "Research", value: "research", icon: "📚" },
    { label: "Leadership", value: "leadership", icon: "👥" },
    { label: "Projects", value: "projects", icon: "💻" },
    { label: "Awards", value: "awards", icon: "🏆" },
    { label: "Experience", value: "experience", icon: "💼" },
    { label: "Skills", value: "skills", icon: "🛠️" },
    { label: "Contact", value: "contact", icon: "📞" },
  ];

  return (
    <Box
      sx={{
        width: collapsed ? 72 : 260,
        minWidth: collapsed ? 72 : 260,
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
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* ── Header ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          px: collapsed ? 0 : 2,
          py: 2,
          borderBottom: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        {!collapsed && (
          <Box>
            <Typography sx={{ fontWeight: 800, fontSize: "1.06rem", lineHeight: 1.3 }}>
              Mahinur Rahman Pamel
            </Typography>
            <Typography sx={{ opacity: 0.8, fontSize: "0.75rem" }}>
              Computer Science Student
            </Typography>
          </Box>
        )}

        {/* Collapse / Expand toggle */}
        <Tooltip title={collapsed ? "Expand sidebar" : "Collapse sidebar"} placement="right">
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
            {/* Simple arrow icon — no extra library needed */}
            <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>
              {collapsed ? "▶" : "◀"}
            </span>
          </IconButton>
        </Tooltip>
      </Box>

      {/* ── Nav items ── */}
      <Stack spacing={0.5} sx={{ px: collapsed ? 0.5 : 1.5, pt: 1.5, flex: 1 }}>
        {menuItems.map((item) => {
          const isActive = activePage === item.value;
          return (
            <Tooltip
              key={item.value}
              title={collapsed ? item.label : ""}
              placement="right"
            >
              <Button
                onClick={() => setPage(item.value)}
                sx={{
                  justifyContent: collapsed ? "center" : "flex-start",
                  gap: collapsed ? 0 : 1.5,
                  px: collapsed ? 1 : 1.5,
                  py: collapsed ? 1.2 : 1,
                  minWidth: 0,
                  color: "rgba(255,255,255,0.85)",
                  textTransform: "none",
                  fontWeight: isActive ? 600 : 600,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  bgcolor: "rgba(255,255,255,0.15)",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.3)",
                    transform: collapsed ? "none" : "translateX(3px)",
                  },
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                <span style={{ fontSize: collapsed ? "1.10rem" : "1.25rem", flexShrink: 1 }}>{item.icon}</span>
                {!collapsed && item.label}
              </Button>
            </Tooltip>
          );
        })}
      </Stack>

      {/* ── Footer ── */}
      {!collapsed && (
        <Box
          sx={{
            px: 2,
            py: 1.5,
            borderTop: "1px solid rgba(255,255,255,0.15)",
            textAlign: "center",
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