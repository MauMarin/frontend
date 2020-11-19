import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";

class Log_in extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                username: '',
                password: '',
            },
        }
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    onSelectedChange = index => {
        this.setState(previousState => ({
          checked: {
            ...previousState.checked,
            [index]: !previousState.checked[index]
          }
        }));
      };


    submitBtn = (event) =>{
        event.preventDefault(); 
        try{
            axios.post('https://backend-proyi.herokuapp.com/login/login', {    username: this.state.form.name , password:this.state.form.password})
             .then(response => {
                 console.log(response)
                // this.handleSubmit(response)
         }
         ).catch(error => {
           //  this.handleSubmit(error)
           console.log(error)
         }) 
        }catch(e){
            //this.handleSubmit(e)
            console.log(e)
        }    
    };

    handleSubmit(response){
        alert(response.data.result.message);
    }


    render(){
        const {  form } = this.state
        return(
            <div class="container p-8 py-5 my-3 bg-dark text-white mt-5">
                {console.log(form.username),
                 console.log(form.password)}
            <Form>
                <Form.Group  onChange= {this.handleChange}>
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name = 'username'/>
                </Form.Group>

                <Form.Group  onChange= {this.handleChange}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name = 'password'/>
                </Form.Group>


                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}
export default Log_in;
