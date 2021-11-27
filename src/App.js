import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import MainLayout from "./components/layouts/MainLayout";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Commandments from "./components/Commandments";

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
