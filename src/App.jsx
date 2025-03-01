import "./App.css";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;
