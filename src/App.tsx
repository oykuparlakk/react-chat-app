import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { store } from "./store/store";
import ChatSection from "./components/ChatSection/ChatSection";
import { GlobalStyles, Container } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Sidebar from "./components/SideBar/SideBar";
import GroupList from "./components/GroupList/GroupList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyles />
          <Sidebar />
          <GroupList />
          <ChatSection />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
