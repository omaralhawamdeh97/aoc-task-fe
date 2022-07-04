import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle, Loading } from "./styles";
import NavBar from "./Components/NavBar";
import { useSelector } from "react-redux";
import Routes from "./Components/Routes";
import BeatLoader from "react-spinners/BeatLoader";

function App() {
  const books = useSelector((state) => state.books.books);
  const loadingBooks = useSelector((state) => state.books.loading);
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("color")
      ? theme[localStorage.getItem("color")]
      : theme.light
  );
  const switchTheme = () => {
    if (currentTheme === theme.light) {
      setCurrentTheme(theme.dark);
      localStorage.setItem("color", "dark");
    } else {
      setCurrentTheme(theme.light);
      localStorage.setItem("color", "light");
    }
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={switchTheme} />
      {loadingBooks ? (
        <Loading>
          <BeatLoader size={40} />
        </Loading>
      ) : (
        <Routes books={books} currentTheme={currentTheme} />
      )}
    </ThemeProvider>
  );
}

export default App;
