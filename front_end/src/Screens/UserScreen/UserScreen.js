import React, { Component } from 'react';
import { Container } from 'reactstrap';
import AddUser from '../../Components/User/AddUser/AddUser';

export default class UserScreen extends Component {
  render() {
    return (
      <Container>
        <AddUser></AddUser>
      </Container>
    );
  }
}