import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Welcome from "./pages/Welcome";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import 'bootstrap/dist/css/bootstrap.min.css'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route index element={<Welcome/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);