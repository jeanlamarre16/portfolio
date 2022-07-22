/* eslint-disable react/jsx-no-constructed-context-values */
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import ProjectList from "./pages/projectList/ProjectList";
import ProjectDetails from "./pages/projectDetails/ProjectDetails";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-list" element={<ProjectList />} />
        <Route path="/project-details" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
