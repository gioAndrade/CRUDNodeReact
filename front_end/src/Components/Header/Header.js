import React, { Component } from 'react';
import { Container } from 'reactstrap';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <CardHeader>Header</CardHeader>
            </div>
        );
    }
}