
const Form = ()=>{
    return<>
        <form className="form-contact">
            <div className="form-title">
                <h1>Contact Me</h1>
                <p>I am also interested in freelance Wordpress opportunities.</p>
            </div>
            <div className="form-main">
        <label for="name">Name:</label>
        <input className="input-size" type="text" id="name" name="name" required/>
        <br/><br/>
        <label for="subject">Subject:</label>
        <input className="input-size" type="text" id="subject" name="subject" required/>
        <br/><br/>
        <label for="email">Email:</label>
        <input className="input-size" type="email" id="email" name="email" placeholder="Enter your email" required/>
        <br/><br/>
        <label for="message">Message</label><br/>
        <textarea className="textarea" id="message" name="message" placeholder="Write your message here.." required></textarea>
        <br/><br/>
        </div>
        
        <input className="button-f" type="submit" value="Submit"/>

        </form>
    </>
}
export default Form;