import styled, { ThemeProvider } from "styled-components";
import MainLayout from "./components/layouts/MainLayout";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/theme";
import NavBar from "./components/NavBar";
import Commandments from "./components/Commandments";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <NavBar />
        <Commandments />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
