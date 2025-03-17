import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NewSettler from "./pages/NewSettler";
import ArticleDetail from "./pages/ArticleDetail";

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
