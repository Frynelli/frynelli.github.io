import { useState, useEffect,useRef } from "react";
import AnimatedLetters from "../AnimatedLetters";
import emailjs from '@emailjs/browser';

const Form = ({openNote})=>{
    const toggleNote =()=>{
        openNote(true);
      }
    const contactArray = ['C','o','n','t','a','c','t','','M','e'];
    const [letterClass, setLetterClass]=useState("text-animate");
   
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uutqmvg', 'template_pidm1b8', form.current, '4HRN3_1hUj55j0gUO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toggleNote()
     
  };
  
    useEffect(()=>{
        const timeout =  setTimeout(()=>{
            setLetterClass('text-animate-hover')
        },1500)
        return ()=> clearTimeout(timeout)
       },[])
    return<>
        <form ref={form} onSubmit={sendEmail} className="form-contact">
            <div className="form-title">
            
                <h1><AnimatedLetters 
                    letterClass={letterClass} 
                    strArray={contactArray}
                    idx={18}
                    /></h1>
                <p>I am also interested in freelance Wordpress opportunities.</p>
            </div>
            <div className="form-main">
        <label for="name">Name:</label>
        <input className="input-size" activeclassname="active" type="text" id="name" name="user_name" required/>
        <br/><br/>
        <label for="email">Email:</label>
        <input className="input-size" activeclassname="active" type="email" id="email" name="user_email"  required/>
        <br/><br/>
        <label for="message">Message</label><br/>
        <textarea className="textarea" id="message" name="message"  required></textarea>
        <br/><br/>
        </div>
        
        <input className="button-f" type="submit" value="Submit"/>

        </form>
    </>
}
export default Form;