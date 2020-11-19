import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";



class New_zone extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
                state: 'Active',

            }
        }
    }
    
    onSelectedChange = index => {
        this.setState(previousState => ({
          checked: {
            ...previousState.checked,
            [index]: !previousState.checked[index]
          }
        }));
      };

    fileSelectedHandler = event => {
        console.log(event);
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    submitBtn = (event) =>{
        event.preventDefault(); 
        
       try{
       

        console.log('state' ,JSON.stringify(this.state.form));
        axios.post('https://backend-proyi.herokuapp.com/zone/create', this.state.form)
            .then(response => {
                this.handleSubmit(response)
                console.log(response)
            })
            .catch(error => {
                this.handleSubmit(error)
                console.log(error)
            })
       }catch(e){
            console.log(e);
       }
    };
    

    handleSubmit(response){
        alert(response.data.result.message);
    }

    render(){
        return(
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Add details of zone:</h1>
                <hr color='white'></hr>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Name of zone</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" name = 'name' />
                </Form.Group>
                      
                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}

export default New_zone;
