import React, { Component } from "react";
import {InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { UserService } from "../../../services/user";
export default class Start extends Component {
  
  constructor() {
    super() 
    this.userService= new UserService() 
  }

  state = {
    
    nom: '',
    prenom: '', 
    email: '', 
    password:''
  }
  handleChange = event => {
    this.setState({ nom: event.target.value }); 
      }

  handleChange1 = event => {
    this.setState({ prenom: event.target.value }); 
  }
  handleChange2 = event => {
    this.setState({ email: event.target.value }); 
  }
  handleChange3 = event => {
    this.setState({ password: event.target.value }); 
  }

  


  addUser = event => { 
         event.preventDefault();
         console.log('done') 
         console.log(this.state) ; 
         this.userService.adduser(this.state) ; 
         console.log('bye')    
  }


    
    render() {
        return (
<div className="p-fluid">
          <div className="p-field p-grid">
          <label htmlFor="nom" className="p-col-12 p-md-2">Lastname</label>
          <div className="p-col-12 p-md-10">
          <InputText  id="nom" type="text" onChange={this.handleChange}/>
          </div>
          </div>
         <div className="p-field p-grid">
         <label htmlFor="prenom" className="p-col-12 p-md-2">Firstname</label>
         <div className="p-col-12 p-md-10">
         <InputText id="prenom" type="text" onChange={this.handleChange1}/>
         </div>
         </div>
         <div className="p-field p-grid">
         <label htmlFor="email" className="p-col-12 p-md-2">Email</label>
         <div className="p-col-12 p-md-10">
         <InputText id="email" type="email" onChange={this.handleChange2}/>
         </div>
         </div>
         <div className="p-field p-grid">
         <label htmlFor="password" className="p-col-12 p-md-2">Password</label>
         <div className="p-col-12 p-md-10">
         <InputText id="password" type="password" onChange={this.handleChange3}/>
         </div>
         </div>
         <div className="p-field p-grid">
         <label htmlFor="motDePasse" className="p-col-12 p-md-2"></label>
         <div className="p-col-12 p-md-10">
         <Button className="p-button-success" label="Submit" onClick={this.addUser} />
         </div>
         </div>
</div>
        )
    }
}
