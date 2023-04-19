import {Route, Routes} from "react-router-dom"
import './App.scss';
import { Fragment } from 'react';
import Layout from './components/Layout';
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Fragment >
      <Routes>
       <Route path="/" exact element={<Layout/>}>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
       </Route>
       
       
      </Routes>
    </Fragment>
  );
}

export default App;
