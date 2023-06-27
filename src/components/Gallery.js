import img1 from '../assets/projects/img1.png';
import img2 from '../assets/projects/img2.png';
import img3 from '../assets/projects/img3.png';
import img4 from '../assets/projects/img4.png';
import extra from "../assets/projects/extra.png";
import michaela from "../assets/projects/michaela.png";
const Gallery = ()=>{

  
    return(
      <div className='outer-section'>
        <div className='inner-box'>
           
          <div className=' item img-wrapper extra'>
<img className='zoom blur ' src={extra} alt='space-app'/>
     <div className='content slide-bottom'>
     <a href='https://space-travel-frynelli.netlify.app/' target='_blank'>
        <h3>Space travel</h3>
      <p>React / Sass </p>
      </a>
     </div>
            </div>
            <div className='item img-wrapper img4'>
<img className='zoom blur' src={michaela} alt='survey-form'/>
     <div className='content slide-bottom'>
      <a href='https://awakenwithmichaela.com/' target='_blank'>
         <h3>Awaken With Michaela</h3>
      <p>Wordpress</p></a>
     </div>
            </div>
          <div className='item img-wrapper img2'>
        <img className='zoom blur ' src={img2} alt='weather-app'/>
     <div className='content slide-bottom'>
     <a href='https://weather-project-2021.netlify.app/' target='_blank'> 
             <h3>Weather-App</h3>
           <p>HTML / CSS / JavaScript / API</p>
      </a>
     </div>
        </div>
          <div className='item  img-wrapper img1'>
<img className='zoom blur' src={img1} alt='Technical Documentation'/>
     <div className='content slide-bottom'>
      <a href='https://codepen.io/Frynellio/full/QWMNbNr' target='_blank'> 
      <h3>Technical Documentation</h3>
      <p>HTML / CSS </p></a>
     </div>
            </div>

          <div className='item  img-wrapper img3'>
<img className='blur zoom ' src={img3} alt='qr-code'/>
     <div className='content slide-bottom'>
     <a href='https://qr-code-project-by-frynelli.netlify.app/' target='_blank'>
        <h3>QR Code-project</h3>
     <p>HTML / CSS </p></a>
     </div>
            </div>
          <div className='item img-wrapper img4'>
<img className='zoom blur' src={img4} alt='survey-form'/>
     <div className='content slide-bottom'>
      <a href='https://codepen.io/Frynellio/full/OJgNOYZ' target='_blank'>
         <h3>Survey Form</h3>
      <p>HTML / CSS </p></a>
     </div>
            </div>
            
        </div>
        
      </div>
    )
}
export default Gallery;