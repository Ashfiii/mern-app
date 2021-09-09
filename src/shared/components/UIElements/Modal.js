import React from 'react'
import './Modal.css'
import Backdrop from './Backdrop';

const ModalOverlay = (props) =>{
    return(
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal__header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit : event => event.preventDefault()}>
                <div className={`modal__content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal__footer ${props.footerClass}`}>
                    {props.footer} 
                </footer>
            </form>
        </div> 
    )
    
}

const Modal = (props) => {
    return (
        <>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <ModalOverlay {...props}/>
        </>
    )
}

export default Modal
