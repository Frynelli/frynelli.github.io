import useTypeWriter from "../../TypeWriter/TypeWriter";
import Form from '../../Form/index'
import sxedio from '../../../assets/sxedia.png';
const typeWord = 'Contact Me';
const Contact =()=>{
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
                  Feel free to <a href="#">contact me</a>
                </p>
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
