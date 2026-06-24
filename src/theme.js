import { createTheme } from '@mui/material/styles';

// Professional Color Palette for Academic Portfolio
const theme = createTheme({
  palette: {
    primary: {
      main: '#1e40af',        // Professional Deep Blue
      light: '#3b82f6',       // Lighter Blue
      dark: '#1e3a8a',        // Darker Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#7c3aed',        // Modern Purple
      light: '#a78bfa',       // Light Purple
      dark: '#6d28d9',        // Dark Purple
      contrastText: '#ffffff',
    },
    background: {
      default: '#f8fafc',     // Very light blue-gray
      paper: '#ffffff',       // White
    },
    text: {
      primary: '#1e293b',     // Dark slate
      secondary: '#64748b',   // Medium slate
    },
    success: {
      main: '#10b981',        // Green
    },
    error: {
      main: '#ef4444',        // Red
    },
    warning: {
      main: '#f59e0b',        // Amber
    },
    info: {
      main: '#0ea5e9',        // Sky Blue
    },
  },

  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.4,
    },
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '8px',
          fontWeight: 600,
          transition: 'all 0.3s ease',
        },
        contained: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          '&:hover': {
            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.15)',
          },
        },
        outlined: {
          '&:hover': {
            backgroundColor: 'rgba(30, 64, 175, 0.04)',
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '20px',
          fontWeight: 500,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: 'inherit',
        },
      },
    },
  },
});

export default theme;
