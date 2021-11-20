import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/Theme";
import Navbar from "../components/core/navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
