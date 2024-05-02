import { CssBaseline, PaletteMode, ThemeProvider, createTheme, useMediaQuery } from "@mui/material"
import { createContext, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom"
import GlobalCssPriority from "./components/GlobalCssPriority";

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'dark' });

function App() {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const mode = JSON.parse(localStorage.getItem("mode") || JSON.stringify('dark'));
    return mode
  });
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) =>
      prevMode === 'light' ? 'dark' : 'light',
    );
  }

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode])

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          background: {
            default: "#ffffff",
            bgToggle: "#090D1F",
          },
        }
        : {
          // palette values for dark mode
          background: {
            default: "#090D1F",
            bgToggle: "#ffffff"
          },
        }),
    },
  });


  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [prefersDarkMode, mode],
  );

  return (
    <GlobalCssPriority>
      <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </GlobalCssPriority>
  )
}

export default App
