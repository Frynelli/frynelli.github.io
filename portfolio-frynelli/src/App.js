import {Route, Routes} from "react-router-dom"
import './dist/App.css';
import { Fragment } from 'react';
import Layout from './components/Layout';
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Cv from "./components/Pages/About/Cv";
import friniCv from "./assets/Frynelli-Oikonomou-CV.pdf";

function App() {
  return (
    <Fragment >
      <Routes>
       <Route path="/" exact element={<Layout/>}>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/about/cv" element={<Cv url={friniCv}/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Route>
       
       
      </Routes>
    </Fragment>
  );
}

export default App;
