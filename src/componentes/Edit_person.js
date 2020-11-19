import React from 'react';

import {Button, Form } from "react-bootstrap";

class Edit_person extends React.Component{
    render(){
        return(
            <div class="container p-8 py-5 my-3 bg-dark text-white mt-5">
            <Form>

                
                <Form.Group controlId="formPerson">
                    <h1>Select Person:</h1>
                    <hr color='white'></hr>
                    <select name="SelectBranch" class="custom-select">
                        <option selected>Select person</option>
                    </select>
                </Form.Group>


                <h1>Edit details of person:</h1>
                <hr color='white'></hr>
                <Form.Group controlId="forID">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="ID" placeholder="Enter ID" />
                </Form.Group>

                <Form.Group controlId="formLastName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="LastName" placeholder="Enter name" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter number" />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email address" />
                </Form.Group>

                <Form.Group controlId="formProvince">
                <Form.Label>Province</Form.Label>
                    <select name="Province" class="custom-select">
                        <option selected>Cargar de la base de datos</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formCanton">
                <Form.Label>Canton</Form.Label>
                    <select name="canton" class="custom-select">
                        <option selected>Cargar de la base de datos</option>
                        <option value="volvo">Volvo</option>
                    </select>
                </Form.Group>

                <Form.Group controlId="formDistrito">
                <Form.Label>Distrit</Form.Label>
                    <select name="distrito" class="custom-select">
                        <option selected>Cargar de la base de datos</option>
                    </select>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                 </Button>
                </Form>
            </div>
        );
    }
}
export default Edit_person;
