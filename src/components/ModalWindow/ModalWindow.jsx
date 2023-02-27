import { Component } from "react";
import { Backdrop, Modal } from "./ModalWindow.styled"



export class ModalWindow extends Component{

    state = {
        
    }

    
    componentDidMount() {

        
        window.addEventListener("keydown", (event) => {
            
            if(event.code === 'Escape') {
                console.log("Close  modal by Esc")
                this.props.onClose();
            }
                
            
        })
    }


    render() {
        
        
        return (
        <Backdrop>
            <Modal>
                <h1>Modal</h1>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim eius id reprehenderit provident praesentium sed distinctio laborum
                    quam, tempore, rem suscipit eveniet soluta cumque illum veritatis doloremque
                    minus aspernatur ducimus.</div>
                    <button type="button" onClick={this.props.onClose}>Close</button>
            </Modal>
        </Backdrop>
    )
    }
}











