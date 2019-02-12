import React, { Component } from 'react';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { } from 'reactstrap';
import AddIcon from '../../public/img/plus.svg'
import search from '../../public/img/search.svg'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddUser from '../User/AddUser/AddUser';
import UserList from '../User/UserList/UserList';


export default class SubHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listTitle: "Lista de usuários"

		}

		this.changePage = this.changePage.bind(this);
	}

	componentWillMount() {
		console.log(this.props)
	}

	componentWillReceiveProps(props) {
		console.log(props)
	}

	changePage() {
		this.props.history.push('/addUser')
		this.setState({ listTitle: 'Cadastro de Usuário' })
	}

	render() {
		return (
			<div>

				{this.state.listTitle}

				<div>
					{this.props.location.pathname === '/addUser' ? null :
						<img onClick={this.changePage} src={AddIcon} className="plusIcon"></img>}

					{this.props.location.pathname === '/addUser' ? null :
						<InputGroup>
							<Input className="searchClient" placeholder="Busca por nome e CPF" />
							<InputGroupAddon addonType="append">
								{/* <Button color="secondary">To the Right!</Button> */}
							</InputGroupAddon>
						</InputGroup>}
				</div>
				{/* <span className="test"></span> */}

			</div>
		);
	}
}