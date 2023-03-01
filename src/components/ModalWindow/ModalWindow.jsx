import { Component } from "react";
import { Backdrop, Modal } from "./ModalWindow.styled"



export class ModalWindow extends Component{

    state = {
        
    }


   handleKeydown = (event) => {
            console.log("remove Listener")
            if(event.code === 'Escape' ) {
                
                this.props.onClose();
            }
        }
    
    componentDidMount() {
        
        

        
        document.addEventListener("keydown", this.handleKeydown)
    }


    componentWillUnmount() {
        console.log(123)
        document.removeEventListener("keydown", this.handleKeydown)
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











