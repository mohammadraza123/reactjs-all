function Backdrop(props){
    return <div className="backdrop" onClick={props.onCancel}>
       <p>This is BAckdrop</p>
    </div>
}


export default Backdrop;