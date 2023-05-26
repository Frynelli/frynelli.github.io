import Gallery from "../../Gallery";
import useTypeWriter from "../../TypeWriter/TypeWriter";
import { useMediaQuery } from 'react-responsive';
import {AiOutlineArrowLeft} from "react-icons/ai";

const Projects =()=>{
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
        })
       
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
        const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1200px)' })
        const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
        const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    const ProjectWord = useTypeWriter('My Projects')
    return <div  className="container-project">
        <div className="box-top">
        <h1 className="blinking-cursor">{ProjectWord}</h1>
        </div>
        <div className="box-bottom">
        
        <Gallery/>
        <div className="border-div">
        <div className="button">
        {isMobileOrTablet ? <button><a href="/"><AiOutlineArrowLeft/></a></button> : <button><a href="/">Back</a></button>}
           
           </div> 
           </div>
        </div>
        
    </div>
}
export default Projects;