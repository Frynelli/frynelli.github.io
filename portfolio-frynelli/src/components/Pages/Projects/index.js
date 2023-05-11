
import ImageGallery from "../../ImageGallery";

import Gallery from "../../Gallery";
import useTypeWriter from "../../TypeWriter/TypeWriter";

const Projects =()=>{
  
    const ProjectWord = useTypeWriter('My Projects')
    return <div  className="container-project">
        <div className="box-top">
        <h1 className="blinking-cursor">{ProjectWord}</h1>
        </div>
        <div className="box-bottom">
        {/* <ImageGallery/> */}
        <Gallery/>
        <div className="border-div">
        <div className="button">
           <button><a href="/">Back</a></button>
           </div> 
           </div>
        </div>
        
    </div>
}
export default Projects;