import ReactDOM from 'react-dom'

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div style={{backgroundColor: 'rgba(1,1,1,0.7)', height: '100vh', position: 'fixed', width: '100%', left: '0', top: '0', display: 'flex'}}
            onClick={props.onDismiss}
            >
            <div style={{margin: 'auto', backgroundColor: 'white', width: '80%', height: '20%'}}
            onClick={(e) => {e.stopPropagation()}}>
                <div>{props.title}</div>
                <div>{props.content}</div>
                <div>
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal