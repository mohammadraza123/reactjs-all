import { useState } from "react";
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props){
 const [modalIsopen , setModalISopen] = useState(false)

 function changeState(){
  setModalISopen(true)
 }

 function closeModal(){
  setModalISopen(false)
 }
    return(
        <div className='card'>
      <h2>{props.text}</h2>
      <div className='actions'>
        <button className='btn' onClick={changeState}>DELETE</button>
        
      </div>
      {modalIsopen && <Modal  onCancel = {closeModal} onConfirm = {closeModal} /> }
      {modalIsopen && <Backdrop onCancel = {closeModal} />}
     
      
    </div>
    )
}


export default Todo;