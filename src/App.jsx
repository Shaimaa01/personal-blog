import { ThemeProvider } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

// Lazy load other pages
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const NewSettler = lazy(() => import("./pages/NewSettler"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Blog"
            element={
              <Suspense fallback={null}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <Suspense fallback={null}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/Newsletter"
            element={
              <Suspense fallback={null}>
                <NewSettler />
              </Suspense>
            }
          />
          <Route
            path="/article/:slug"
            element={
              <Suspense fallback={null}>
                <ArticleDetail />
              </Suspense>
            }
          />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;


