import qr from "../../../assets/qr-sample.jpg";
import { NavLink } from "react-router-dom";
import {AiOutlineGithub, AiFillLinkedin} from "react-icons/ai"
import useTypeWriter from "../../TypeWriter/TypeWriter";

// import useTypedSuperpower from "../../useTypedSuperpower";
const typeWord = "About Me"


const About =()=>{
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
            I’m now looking for junior front end position to finally kick start my career and learn among professionals.
           </p>
           </div>
           <div className="button">
           <button><a href="/">Back</a></button>
           </div>
           
        </div>
        <div className="box-right">
            <div className="qr-code">
              <img src={qr} alt="qr-code"/>
            </div>
            <div className="links">
               <ul>
                <li className="gitHub"><a href="https://github.com/Frynelli" target="blank"><AiOutlineGithub/></a></li>
                <li className="linkedin"><a href="https://www.linkedin.com/in/frinelli-oikonomou" target="blank"><AiFillLinkedin/></a></li>
                <li className="cv-link"><NavLink exact="true" activeclassname="active" to="/about/cv">cv</NavLink></li>
               </ul>
               
            </div>
        </div>

    </div>
    
}
export default About;