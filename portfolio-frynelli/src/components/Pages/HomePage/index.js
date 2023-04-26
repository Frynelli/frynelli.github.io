import { useEffect, useState } from "react";
 import selfie from "../../../assets/selfie.jpg";
import AnimatedLetters from "../../AnimatedLetters";
import TextShpere from "../../TextSphere";
// {/* <div className="box-2">
            //   <div className="rectangle-purple"></div>
             //  <div className="circle-pink">
               // <div className="circle-mask">
               // <img src={selfie} alt="selfie"/>
               // </div>
              // </div>
           // </div> */}
//const WebDev = `Your Web Developer`;
const HomePage =()=>{
    //trying sloboban animation technique
   const [letterClass, setLetterClass]=useState("text-animate");
   const nameArray = [ "r", 'y', 'n', 'e', 'l', 'l', 'i'];
   const jobArray = ['W', 'e', 'b', '  ',' ', ' D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'] 
   useEffect(()=>{
    const timeout =  setTimeout(()=>{
        setLetterClass('text-animate-hover')
    },1500)
    return ()=> clearTimeout(timeout)
   },[])
   
   //starts my typing animation 
    // const [typingWebDev, setTypingWebDev]=useState("");
    // useEffect(()=>{
    //      const timeout=  setTimeout(()=>{
    //        setTypingWebDev(WebDev.slice(0, typingWebDev.length + 1))
    //       },200)
    //       return ()=> clearTimeout(timeout)
    //    },[typingWebDev])

// {/* <div className="container-hp-g">
        
//         <div className="welcome-text">
          
//             <h1>Hi,<br/><span className="name">I'm Frynelli </span><br/><span className="web-dev blinking-cursor">{typingWebDev}</span></h1>
//             <span className="paragraph">
//             <p>
//                 Junior Front End & Wordpress    
//             </p>
//             <hr/>
//             </span>
            
//             </div>
//             <div className="box-2">
//                 <div className="rectangle-purple"></div>
//                 <div className="circle-pink">
//             <div className="circle-mask">
//         <img src={selfie} alt="selfie"/>
//         </div>
//                 </div>
//             </div>
        
//     </div> */}

    return <div className="container-hp-g">
               <div className="welcome-text text-zone">
                 <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className="name">
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <span className={`${letterClass} _15`}> </span>
                    <span className={`${letterClass} _15`}> </span>
                    <span className={`${letterClass} _16 name-first-letter`}>F</span>
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={nameArray}
                    idx={17}
                    /></span>
                    <br/>
                    <span className="web-dev">
                    <AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={jobArray}
                    idx={18}
                    />
                    </span>
                 </h1>
                 <span className="paragraph">
                   <p>
                     Junior Front End & Wordpress    
                  </p>
                    <hr/>
                 </span>
                 
               </div>
               
            <div className="box-2">
            
                <TextShpere/>
                
            </div>
    </div>
}

export default HomePage;


