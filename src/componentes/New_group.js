import React from 'react';
import {Button, Form } from "react-bootstrap";
import axios from "axios";


class New_group extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: '',
            },
            people:[], 
            person:[],
            checked: { }

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

      componentDidMount(){
        axios.get('https://backend-proyi.herokuapp.com/member/getAll')
            .then(response=> {
                
                this.setState({people: response.data.result})
            })
            .catch(error => {
                this.handleSubmit(error)
            })
    }


    removeElement(e) {
        var array = [...this.state.person]; 
        var index = array.indexOf(e.id)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({person: array});
        }
      }

    addElement(e){
        this.setState({ person: this.state.person.concat(e.id) }) //cambiar acá
    }

    markPeople = (e) =>  {
        if (!this.state.person.find ( (element) => { return element === e.id; })) {
            this.addElement(e)
        }else{
            this.removeElement(e)   
        }
    }

    agregarPersona= (id) =>{
        try{
            axios.post('https://backend-proyi.herokuapp.com/group/create', {name: this.state.form.name , monitor:id})
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

    handleSubmit(response){
        alert(response.data.result.message);
    }

    render(){      
        const { people,checked,person} = this.state
        const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
        const disabled = checkedCount > 0;
        return(
            console.log(person),
            <div className="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>  
                <h1>Add details of group:</h1>
                <hr color='white'></hr>

                <Form.Group onChange= {this.handleChange}>
                    <Form.Label>Name of group</Form.Label>
                    <Form.Control type="name" placeholder="Enter Name" name = 'name' />
                </Form.Group>

            <div className="container">
                {console.log(checked)}
                    <h2>Select a monitor</h2>
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

export default New_group;