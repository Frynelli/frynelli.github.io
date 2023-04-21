import SideBar from "../SideBar";
import HomePage from '../Pages/HomePage';
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";



const Layout =(props)=>{
    const [showPagesContainer, setShowPagesContainer] = useState(false);
    const location = useLocation();
    useEffect(()=>{
       if(location.pathname !== "/"){
        setShowPagesContainer(true);
       } else{
        setShowPagesContainer(false);
       }
    },[location])
    return <div className="container">
        <div className="container-main">
            
          <SideBar/>
         {!showPagesContainer && (<div className="container-hp">
          <Routes>
         <Route path="/" exact element={<HomePage />} />
         </Routes>
         </div>)}
          {showPagesContainer && (<div className="container-pages">
            <Outlet /> 
        </div>)}
        </div>
        
        
    </div>
}

export default Layout;