import { useEffect, useState } from "react";
import selfie from "../../../assets/selfie.jpg";

const typeWebDev = `Your Web Developer`;
const HomePage =()=>{
   
    const [typingWebDev, setTypingWebDev]=useState("");
    useEffect(()=>{
        const timeout = setTimeout(()=>{
         setTypingWebDev(typeWebDev.slice(0, typingWebDev.length + 1))
        },1000)
  return ()=> clearTimeout(timeout);
    },[typingWebDev])

    return <div className="container-hp-g">
        
        <div className="welcome-text">
          
            <h1>Hi,<br/><span className="name">I'm Frynelli </span><br/><span className="web-dev blinking-cursor"> {typingWebDev}</span></h1>
            <span className="paragraph">
            <p>
                Junior Front End & Wordpress    
            </p>
            <hr/>
            </span>
            
            </div>
            <div className="box-2">
                <div className="rectangle-purple"></div>
                <div className="circle-pink">
            <div className="circle-mask">
        <img src={selfie} alt="selfie"/>
        </div>
                </div>
            </div>
        
    </div>
}

export default HomePage;