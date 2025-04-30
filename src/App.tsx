import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
