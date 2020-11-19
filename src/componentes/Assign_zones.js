import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";



class Assign_zones extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movements:[], 
            zones:[], 
            branches:[], 
            name: '',//zone
            branch: '', //rama,

            movement: '',//movimiento
            zone: '',

        }
    }

    componentDidMount(){
        axios.get('https://backend-proyi.herokuapp.com/movement/getAll')
            .then(response=> {
                
                this.setState({movements: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
            })

        axios.get('https://backend-proyi.herokuapp.com/branch/getAll')
            .then(response=> {
               
                this.setState({branches: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
            })

        axios.get('https://backend-proyi.herokuapp.com/zone/getAll')
            .then(response=> {
                
                this.setState({zones: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
            })
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
        const branch = this.state.branch
        const name =  this.state.zone
        axios.post('https://backend-proyi.herokuapp.com/zone/addBranch', {branch,name} )
            .then(response => {
                this.handleSubmit(response)
            })
            .catch(error => {
                this.handleSubmit(error)
 
            })
       }catch(e){
            this.handleSubmit(e)
       }
    };
    

    
    selectMovement = (event) =>{
        this.setState({ movement: event.target.value  })
    }

    selectZone = (event) =>{
        this.setState({ zone: event.target.value  })
    }

    selectBranch = (event) =>{
        this.setState({ branch: event.target.value  })
    }

    handleSubmit(response){
        alert(response.data.result.message);
    }

    render(){
     
        const { movements, zones, branches} = this.state
        return(
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Assign zone to a branch:</h1>
                <hr color='white'></hr>

                <Form.Group controlId="formMovement">
                <Form.Label>Choose the movement that belongs</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectMovement}>
                    <option disabled={true} value="">Select movement</option>
                    {
                        movements.length ?
                        movements.map(movement =>                
                            <option key={movement.name}> {movement.name} </option>
                        ):
                        null
                    }
                        
                    </select>
                </Form.Group>

                <hr color='white'></hr>
                <Form.Group controlId="formMovement">
                <Form.Label>Choose the zone that belongs</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectZone}>
                    <option disabled={true} value="">Select zone</option>
                    {
                        zones.length ?
                        zones.map(zone =>                
                            <option key={zone.name}> {zone.name} </option>
                        ):
                        null
                    }
                    </select>
                </Form.Group>
                <hr color='white'></hr>

                <Form.Group controlId="formMovement">
                <Form.Label>Choose the branch</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectBranch}>
                    <option disabled={true} value="">Select branch</option>
                    {
                        branches.length ?
                        branches.map(branch =>                
                            <option key={branch.name}> {branch.name} </option>
                        ):
                        null
                    }
                    </select>
                </Form.Group>
                <hr color='white'></hr>
                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}

export default Assign_zones;
