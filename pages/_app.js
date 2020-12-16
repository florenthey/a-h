import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles/Theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
