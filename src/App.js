import { useState } from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./components/layouts/MainLayout";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import MainContentCard from "./components/MainContentCard";
import Commandments from "./components/Commandments";
import Message from "./components/Message";
import MessageToggle from "./components/MessageToggle";
import logo from "./assets/logo.png";

function App() {
  const [isModalShowing, setIsModalShowing] = useState(false);
  const [isMessageShowing, setIsMessageShowing] = useState(false);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ed Commandments</title>
        <link rel="icon" type="image/png" href={logo} sizes="16x16" />

        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Roboto+Mono:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Modal
          isModalShowing={isModalShowing}
          setIsModalShowing={setIsModalShowing}
        />
        <MainLayout>
          <NavBar setIsModalShowing={setIsModalShowing} />
          <MainContentCard>
            {isMessageShowing ? <Message /> : <Commandments />}
          </MainContentCard>
          <MessageToggle isMessageShowing={isMessageShowing} setIsMessageShowing={setIsMessageShowing} />
        </MainLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
