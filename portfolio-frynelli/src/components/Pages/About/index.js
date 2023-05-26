import qr from "../../../assets/FrynelliOikonomou-CV/MyCV.png";
import resume from "../../../assets/CV.pdf"
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import {AiOutlineGithub, AiFillLinkedin, AiOutlineArrowLeft, AiOutlineArrowDown} from "react-icons/ai";
import {BsArrowDown} from "react-icons/bs";
import useTypeWriter from "../../TypeWriter/TypeWriter";

// import useTypedSuperpower from "../../useTypedSuperpower";
const typeWord = "About Me"


const About =()=>{
    const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1200px, min-width: 720px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 720px)' })
    const AboutMe = useTypeWriter(typeWord)
    // const [type, setType] = useState('');
    // useEffect(()=>{
        
    //     const timeout = setTimeout(()=>{
    //         setType(typeAbout[0].slice(0, type.length + 1))
    //     },TYPING)
    //     return ()=> clearTimeout(timeout);
        

    // },[type])
    
    return <div className="container-about">
        <div className="box-left">
           <div className="about-content">
           <span><h1 className="blinking-cursor">{AboutMe}</h1></span>
           <p>
           Hello, I am a junior Front End Developer located in Greece. <br/>
            I recently discovered my passion for the world of web development and the beauty behind building useful websites.<br/>
            I’m now looking for a junior front end position to kick start my career and learn among professionals.
           </p>
           
           
           </div>
           {isMobileOrTablet ? <div className="arrow"><BsArrowDown/></div> : ""}
           {isMobileOrTablet ? " " : isMobile ? <div className="button"><button><a href="/"><AiOutlineArrowLeft/></a></button></div> : <div className="button">
           <button><a href="/">Back</a></button>
           </div>}
           
        </div>
        <div id="box-down" className="box-right">
            <div className="qr-code">
              <NavLink exact="true" activeclassname="active" to="/about/cv"><img src={qr} alt="qr-code"/></NavLink>
            </div>
            <div className="links">
               <ul>
                <li className="gitHub"><a href="https://github.com/Frynelli" target="blank"><AiOutlineGithub/></a></li>
                <li className="linkedin"><a href="https://www.linkedin.com/in/frinelli-oikonomou" target="blank"><AiFillLinkedin/></a></li>
                <li className="cv-link"><a href={resume} download="resume" target="_blank">cv</a></li>
               </ul>
               
            </div>
        
        </div>
        
    </div>
    
}
export default About;