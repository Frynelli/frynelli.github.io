import img1 from '../assets/projects/img1.png';
import img2 from '../assets/projects/weather-new.png';
import img3 from '../assets/projects/qr-new.png';
import img4 from '../assets/projects/survey-new.png';
import extra from "../assets/projects/space-new.png";

import { useRef } from 'react';

const ImageGallery = () => {
    const ref= useRef()
  

  return (
<div className="grid">
  <div className='columns col-1'>
   <div className='img-wrapper space'>
     <img className='zoom blur ' src={extra} alt='space-app'/>
     <div className='content slide-bottom'>
     <a href='https://space-travel-frynelli.netlify.app/' target='_blank'>
        <h3>Space travel</h3>
      <p>React / Sass </p>
      </a>
     </div>
   </div>
   <div className='img-wrapper img2'>
     <img className='zoom blur ' src={img2} alt='weather-app'/>
     <div className='content slide-bottom'>
     <a href='https://weather-project-2021.netlify.app/' target='_blank'> 
     <h3>Weather-App</h3>
      <p>HTML / CSS / JavaScript / API</p>
      </a>
     </div>
   </div>
   <div className='img-wrapper img3'>
     <img className='blur zoom ' src={img3} alt='qr-code'/>
     <div className='content slide-bottom'>
     <a href='https://qr-code-project-by-frynelli.netlify.app/' target='_blank'>
        <h3>QR Code-project</h3>
     <p>HTML / CSS </p></a>
     </div>
   </div>
   <div className='img-wrapper img4'>
     <img className='zoom blur' src={img4} alt='survey-form'/>
     <div className='content slide-bottom'>
      <a href='https://codepen.io/Frynellio/full/OJgNOYZ' target='_blank'>
         <h3>Survey Form</h3>
      <p>HTML / CSS </p></a>
     </div>
   </div>
   <div className='img-wrapper img1'>
     <img className='zoom blur' src={img1} alt='Technical Documentation'/>
     <div className='content slide-bottom'>
      <a href='https://codepen.io/Frynellio/full/QWMNbNr' target='_blank'> 
      <h3>Technical Documentation</h3>
      <p>HTML / CSS </p></a>
     </div>
     </div>
   </div>

  {/* <div className='columns col-2'>
   <div className='img-wrapper'>
     <img className='zoom blur space' src={extra} alt='space-app'/>
     <div className='content slide-left'>
     <a href='https://space-travel-frynelli.netlify.app/' target='_blank'><h3>Space travel</h3></a>
      <p>React / Sass </p>
     </div>
   </div>
   <div className='img-wrapper'>
     <img className='zoom blur' src={img2} alt='weather-app'/>
     <div className='content slide-left'>
     <a href='https://weather-project-2021.netlify.app/' target='_blank'> <h3>Weather-App</h3></a>
      <p>HTML / CSS / JavaScript / API</p>
     </div>
   </div>
   <div className='img-wrapper'>
     <img className='blur zoom' src={img3} alt='qr-code'/>
     <div className='content slide-left'>
     <a href='https://qr-code-project-by-frynelli.netlify.app/' target='_blank'><h3>QR Code-project</h3></a>
     <p>HTML / CSS </p>
     </div>
   </div>
   <div className='img-wrapper'>
     <img className='zoom blur' src={img4} alt='survey-form'/>
     <div className='content slide-left'>
      <a href='https://codepen.io/Frynellio/full/OJgNOYZ' target='_blank'> <h3>Survey Form</h3></a>
      <p>HTML / CSS </p>
     </div>
   </div>
   <div className='img-wrapper'>
     <img className='zoom blur' src={img1} alt='Technical Documentation'/>
     <div className='content slide-left'>
      <a href='https://codepen.io/Frynellio/full/QWMNbNr' target='_blank'> <h3>Technical Documentation</h3></a>
      <p>HTML / CSS </p>
     </div>
     </div>
   </div> */}
   
</div> 
  );
};

{/* <div>
    <Parallax ref={ref} className='paralax-main-container'  pages={3} horizontal>
        <ParallaxLayer offset={0} >
            <h3>Space App</h3>
            <p>React - Sass</p>
            <div className='img-container'>
            <img className='zoom blur space' src={extra} alt='space-app'/>
            </div>
        
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} >
        <h3>Space App</h3>
            <p>React - Sass</p>
            <div className='img-container'>
        <img className='zoom blur' src={img2} alt='weather-app'/>
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.8} >
        <h3>Space App</h3>
            <p>React - Sass</p>
            <div className='img-container'>
        <img className='blur zoom' src={img3} alt='qr-code'/>
        </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={1} >
        <h3>Space App</h3>
            <p>React - Sass</p>
            <div className='img-container'>
        <img className='zoom blur' src={img4} alt='survey-form'/>
        </div>
        </ParallaxLayer>
    </Parallax>
</div> */}

    


export default ImageGallery;
