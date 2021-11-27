import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import MainLayout from "./components/layouts/MainLayout";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Commandments from "./components/Commandments";
import logo from "./assets/logo.png";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ed Commandments</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainLayout>
          <NavBar />
          <Commandments />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
