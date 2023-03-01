import { ModalWindow } from "./ModalWindow/ModalWindow";
import React from "react";



export  class App extends React.Component{
 
  state = {
   openModal: false,
 }
 
  handleModal = () => {
    console.log("console.log in handleModal")
    this.setState((prevState) => {
      return {
        openModal: !prevState.openModal
      }
    })
 } 
 
  render() {
     return (
    <>
      <button type="button" onClick={this.handleModal}>Open modal</button>
         {this.state.openModal && <ModalWindow onClose={this.handleModal} />}
    
         
         
    </>
    );
  }
};
