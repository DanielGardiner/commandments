import { useState } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./components/layouts/MainLayout";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Commandments from "./components/Commandments";
import logo from "./assets/logo.png";

function App() {
  const [isModalShowing, setIsModalShowing] = useState(false);

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
        <Modal
          isModalShowing={isModalShowing}
          setIsModalShowing={setIsModalShowing}
        />
        <MainLayout>
          <NavBar setIsModalShowing={setIsModalShowing} />
          <Commandments />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
