import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Main } from "./Components/Main/Main";
import { About } from "./Components/Header/About/About";
import { Projects } from "./Components/Header/Projects/Projects";
import { Photo } from "./Components/Header/Photo/Photo";
import { Contact } from "./Components/Header/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/contact" element={<Contact />} />
     
    </Route>
  </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
