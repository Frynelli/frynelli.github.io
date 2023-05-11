import {IoCloseSharp} from "react-icons/io5"
import Form from "../Form";

const MyModal = ({closeModal}) =>{
  
  const toggleModal =()=>{
    closeModal(false);
  }
return<>
<div className="modal">
<div onClick={toggleModal} className="overlay"></div>
<div className="modal-content">
 <Form/>
<a href="#" onClick={toggleModal} className="close-modal"><IoCloseSharp/></a>
</div>
</div>
</>
}

export default MyModal;