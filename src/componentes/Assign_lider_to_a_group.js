import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";



class Assign_lider_to_a_group extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            people:[], 
            person:[],
            
            checked: { },


            movements:[], 
            zones:[],
            groups:[], 
            branches:[],

            brach:'',
            movement: '',
            zone: '',
            group: ''

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

    componentDidMount(){
        axios.get('https://backend-proyi.herokuapp.com/member/getAll')
            .then(response=> {
                this.setState({people: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
            })
            axios.get('https://backend-proyi.herokuapp.com/movement/getAll')
            .then(response=> {
                this.setState({movements: response.data.result})
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
            axios.get('https://backend-proyi.herokuapp.com/group/getAll')
            .then(response=> {
                this.setState({groups: response.data.result})
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


    selectMovement = (event) =>{
        this.setState({ movement: event.target.value  })
    }

    selectZone = (event) =>{
        this.setState({ zone: event.target.value  })
    }

    selectBranch = (event) =>{
        this.setState({ branch: event.target.value  })
    }

    selectGroup = (event) =>{
        this.setState({ group: event.target.value  })
    }
    agregarPersona= (monitor) =>{
        console.log({ group:this.state.group , monitor })
        try{
            axios.post('https://backend-proyi.herokuapp.com/group/assignMonitor', { group:this.state.group , monitor })
             .then(response => {
                 this.handleSubmit(response)
              
         }
         ).catch(error => {
             this.handleSubmit(error)
            
         }) 
        }catch(e){
            this.handleSubmit(e)
        }    
    
    }

    submitBtn = (event) =>{
        event.preventDefault(); 
        this.state.person.map( id   => this.agregarPersona(id))
    };
    

    removeElement(e) {
        var array = [...this.state.person]; 
        var index = array.indexOf(e._id)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({person: array});
        }
      }

    addElement(e){
        this.setState({ person: this.state.person.concat(e._id) })
    }

    markPeople = (e) =>  {
        if (!this.state.person.find ( (element) => { return element === e._id; })) {
            this.addElement(e)
        }else{
            this.removeElement(e)   
        }
    }


    handleSubmit(response){
        alert(response.data.result.message);
    }

    render(){
        const { people,checked ,zones , movements , branches, groups} = this.state
        const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
        const disabled = checkedCount > 1;

        return(
        
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Assign lider to a group:</h1>
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

                <Form.Group controlId="formMovement">
                <Form.Label>Choose the zone</Form.Label>
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

                <Form.Group controlId="formMovement">
                <Form.Label>Choose the group</Form.Label>
                    <select defaultValue="" className="custom-select" onChange={this.selectGroup}>
                    <option disabled={true} value="">Select group</option>
                    {
                        groups.length ?
                        groups.map(group =>                
                            <option key={group.name}> {group.name} </option>
                        ):
                        null
                    }
                    </select>
                </Form.Group>


                <div className="container">
                    <h2>Select maximum two leaders for the group</h2>
                    <p>Members available in the system:</p>      
                    <hr color='white'></hr>      
                    <table className="table table-bordered">
                        <thead>
                            <tr className="table-light">
                            <th>Check</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Number</th>
                            <th>District</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            people.length ?
                            people.map(person =>                
                                    <tr key={person.id} className="table-light">
                                        <td>
                                            <div className="form-check"style={{ textAlign:"center" }}>
                                                <input className="form-check-input" type="checkbox" 
                                                name= {person._id} 
                                                onChange={ e => { 
                                                    this.onSelectedChange(person.id) ; 
                                                    this.markPeople(person) 
                                                }} 
                                                checked={checked[person.id] || false}
                                                disabled={!checked[person.id] && disabled}/>
                                            </div>
                                        </td>
                                        <td>{person.name}</td>
                                        <td>{person.id}</td>
                                        <td>{person.email}</td>
                                        <td>{person.number}</td>
                                        <td>{person.district}</td>
                                    </tr>
                            ):
                            null
                        }
                                    </tbody>
                    </table>
                </div>

                <Button variant="primary" type="submit" onClick = {this.submitBtn}>
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}

export default Assign_lider_to_a_group;
