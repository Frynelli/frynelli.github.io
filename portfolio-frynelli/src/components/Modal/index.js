import {IoCloseSharp} from "react-icons/io5"
import Form from "../Form";
import { useState } from "react";
import ThankYou from "../Form/ThankYou"

const MyModal = ({closeModal}) =>{
  const [note, setNote] = useState(true);
    const toggleNote =()=>{
        setNote(!note);
    }
  const toggleModal =()=>{
    closeModal(false);
  }

return<>
<div className="modal">
<div onClick={toggleModal} className="overlay"></div>
<div className="modal-content">
 {note? <Form openNote={toggleNote}/> : <ThankYou/>}
<a href="#" onClick={toggleModal} className="close-modal"><IoCloseSharp/></a>
</div>
</div>
</>
}

export default MyModal;