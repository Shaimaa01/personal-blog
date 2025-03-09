import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NewSettler from "./pages/NewSettler";
import About from "./pages/About";
import Header from "./components/header/Header";
import ArticleDetail from "./pages/ArticleDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Newsletter" element={<NewSettler />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
