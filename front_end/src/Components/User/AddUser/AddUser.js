import React, { Component } from 'react';
import { InputGroup, Input, Container, Button } from 'reactstrap';
import { } from 'reactstrap';

export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.getUser = this.getUser.bind(this);
    }

    componentWillMount() {

    }

    handleChange({ target: { name, value } }) {
        let { userData } = this.state
        userData[name] = value
        this.setState({ userData })
    }

    registerUser() {
        let { userData } = this.state
        fetch('http://localhost:4000/api/client', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        })

    }

    getUser() {
        fetch(`http://localhost:4000/api/client/${id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ userData: data })
            })
    }

    updateUser () {
        let { userData } = this.state
        fetch(`http://localhost:4000/api/client/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData),
            headers: { 'Content-Type': 'application/json' }
        })
    }


    render() {
        const { userData : {fullName, cpf, email, phone, age} } = this.state
        return (
            <Container>
                <InputGroup>
                    <div className="row">
                        <div className="col-12">
                            <Input className="addInput" value={fullName} name="fullName" onChange={this.handleChange} />
                        </div>
                        <div className="col-6">
                            <Input className="addInput" value={age} name="age" onChange={this.handleChange} />

                        </div>
                        <div className="col-6">
                            <Input className="addInput" value={cpf}  name="cpf" onChange={this.handleChange} />

                        </div>
                        <div className="col-12">
                            <Input className="addInput" value={phone} name="phone" onChange={this.handleChange} />

                        </div>

                        <div className="col-12">
                            <Input className="addInput" value={email} type="email" name="email" onChange={this.handleChange} />

                        </div>

                    </div>
                </InputGroup>
                <Button color="white">Cancelar</Button>
                <Button color="primary" onClick={this.registerUser}>Salvar</Button>
            </Container>
        );
    }
}