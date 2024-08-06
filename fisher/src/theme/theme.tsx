import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = ({
  palette: {
    primary: {
      main: '#ffffff', // White background for AppBar
    },
    text: {
      primary: '#000000', // Black text
      secondary: '#777777', // #777 text
    },
  },
});

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
        grey: {
          900: "#e0e0e0",
          800: "#c2c2c2",
          700: "#a3a3a3",
          600: "#858585",
          500: "#666666",
          400: "#525252",
          300: "#3d3d3d",
          200: "#292929",
          100: "#141414"
      },
      primary: {
          900: "#d0d1d5",
          800: "#a1a4ab",
          700: "#727681",
          600: "#434957",
          500: "#fefefe",
          400: "#101624",
          300: "#0c101b",
          200: "#080b12",
          100: "#040509"
      },
      greenAccent: {
          900: "#dbf5ee",
          800: "#b7ebde",
          700: "#94e2cd",
          600: "#70d8bd",
          500: "#4cceac",
          400: "#3da58a",
          300: "#2e7c67",
          200: "#1e5245",
          100: "#0f2922"
      },
      redAccent: {
          900: "#f8dcdb",
          800: "#f1b9b7",
          700: "#e99592",
          600: "#e2726e",
          500: "#db4f4a",
          400: "#af3f3b",
          300: "#832f2c",
          200: "#58201e",
          100: "#2c100f"
      },
      blueAccent: {
          900: "#e1e2fe",
          800: "#c3c6fd",
          700: "#a4a9fc",
          600: "#868dfb",
          500: "#6870fa",
          400: "#535ac8",
          300: "#3e4396",
          200: "#2a2d64",
          100: "#151632"
      },
        }
      : {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414"
      },
      primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509"
      },
      greenAccent: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922"
      },
      redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f"
      },
      blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632"
      },
        }),
  },
});

export default theme;

//color design shades

