import SideBar from "../SideBar";
import HomePage from '../Pages/HomePage';
import { Outlet, Route } from "react-router-dom";
import "./index.scss";



const Layout =(props)=>{
    return <div className="container">
        <div className="container-main">
            
          <SideBar/>
          <Route path="/" exact element={<HomePage />} />
          <div className="container-pages">
            <Outlet /> 
        </div>
        </div>
        
        
    </div>
}

export default Layout;