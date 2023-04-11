function Modal(props){
    /*
        {
            onCancel: Fn
            onConfirm: Fn
            onClick: Fn
        }
    */
    function cancelHandler(){
       props.onCancel()
    }
    function confirmHAndler(){
        props.onConfirm()
    }
    return(
        <div >
            <p>Are You Sure !</p>
            <button className="del_btn" onClick={cancelHandler}>Cancel</button>
            <button className="Confirm_btn"onClick={confirmHAndler}>Confirm</button>
        </div>
    )
}

export default Modal;