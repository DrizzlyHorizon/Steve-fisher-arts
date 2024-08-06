import { createTheme, PaletteMode } from "@mui/material";
import React, { useState } from "react";
import { getDesignTokens } from "./theme";

export const useColorTheme = () => {
  const [mode, setMode] = React.useState<PaletteMode>("light");

  const toggleColorMode = () =>{
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
    handleClick();
  }

  const[click, setClick] = useState(false)
    const handleClick = () => {
        setClick(!click);
        var element = document.body;
        element.classList.toggle("light-mode");
        colorLinks();
    }
  
   function colorLinks()
    {
        var links = document.getElementsByTagName("a");
        for(var i=0;i<links.length;i++)
        {
            if(links[i].href)
            {
                if (!click)
                {
                    links[i].style.color = "#8E8E8E";  
                }
                else
                {
                    links[i].style.color = "#8E8E8E";  
                }
                
            }
        }  
    }

  // const modifiedTheme = React.useMemo(
  //   () =>
  //     createTheme({
  //       ...theme,
  //       palette: {
  //         ...theme.palette,
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

  const modifiedTheme = React.useMemo(
    () => createTheme(getDesignTokens(mode)),
    [mode]
  );

  return {
    theme: modifiedTheme,
    mode,
    toggleColorMode,
  };
};
