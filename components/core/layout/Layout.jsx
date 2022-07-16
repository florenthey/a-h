import React from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "@styles/Theme";
import Navbar from "@components/core/navbar/Navbar";
import { WrapperCentring, Inner } from "@styles/Global";

export default function Layout({ children }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar />
        <WrapperCentring>
          <Inner>{children}</Inner>
        </WrapperCentring>
      </ThemeProvider>
    </>
  );
}
