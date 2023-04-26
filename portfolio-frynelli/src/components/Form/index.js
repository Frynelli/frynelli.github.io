
const Form = ()=>{
    return<>
        <form className="form-contact">
        <label for="name">Name:</label>
        <input className="input-size" type="text" id="name" name="name" placeholder="Enter your name" required/>
        <br/><br/>
        <label for="email">Email:</label>
        <input className="input-size" type="email" id="email" name="email" placeholder="Enter your email" required/>
        <br/><br/>
        <label for="message">Message</label>
        <textarea className="textarea" id="message" name="message" placeholder="Write your message here.." required></textarea>
        <br/><br/>
        <input className="button-f" type="submit" value="Submit"/>
        </form>
    </>
}
export default Form;