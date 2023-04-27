import useTypeWriter from "../../TypeWriter/TypeWriter";
import { useState } from "react";
import Form from '../../Form/index'
import sxedio from '../../../assets/sxedia.png';
import MyModal from "../../Modal";
const typeWord = 'Contact Me';
const Contact =()=>{
    const [modal, setModal] = useState(false);
    const toggleModal =()=>{
        setModal(!modal);
    }
const ContactMe = useTypeWriter(typeWord)
    return <div className="container-contact">
        <div className="box-left">
            <div className="contact-text">
                <h1 className="blinking-cursor">{ContactMe}</h1>
               <div className="background-color">
               <div className="contact-form">
               <div className="paragraph">
                <h3>Let's talk</h3>
                <p>
                Wanna get in touch or talk about a project? 
                  Feel free to <a href="#" onClick={toggleModal}>contact me</a>
                </p>
                {modal && <MyModal closeModal={setModal}/>}
                
               </div>
               
              

               </div>
               <div className="button">
           <button><a href="/">Back</a></button>
           </div> 
           </div>

            </div>
            

        </div>
        <div className="box-right">
        
            <div className="grid-box">
            <div className="image-sxedio"><img src={sxedio}/></div>
        <div className="green-box">

        </div>
            </div>
            <div className="email-box">
                <p className="email">email:</p><br/>
                <p>oikonomoufrini@gmail.com</p>
               </div>   
        

        </div>
    </div>
}
export default Contact;
