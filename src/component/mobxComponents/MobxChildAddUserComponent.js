import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import {Button} from "react-bootstrap";
import axios from 'axios';

// we can inject multiple store here
// get the stores using this.props.<storeName1>  this.props.<storeName2> ...
@inject('userStore')
@observer
class MobxChildAddUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: ''
        }
    }

    onNameChange = (event) => {
        event.preventDefault();
        const name = event.target.value;
        this.setState((prevState, props) => ({
            name
        }));
    }

    onEmailChange = (event) => {
        event.preventDefault();
        const email = event.target.value;
        this.setState((prevState, props) => ({
            email
        }));
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response.data.length);
                this.props.userStore.addUsers(response.data);
            });
    }

    render() {
        const {count, userStore} = this.props;
        const newCount = count + 1;
        const addUsers = () => {
            if (this.state.name && this.state.email) {
                userStore.addUsers(
                    [{
                        id: parseInt(newCount),
                        name: this.state.name,
                        email: this.state.email
                    }]);
                this.setState((prevState, props) => ({
                    name: '',
                    email: ''
                }));
            }
        }
        return (
            <div>
                <input type="text"
                       placeholder="name"
                       onChange={e => this.onNameChange(e)}
                       value={this.state.name}
                />
                <input type="text"
                       placeholder="email"
                       onChange={e => this.onEmailChange(e)}
                       value={this.state.email}/>
                <Button variant="primary" onClick={addUsers}>Add User</Button>
            </div>
        );
    }
}

export default MobxChildAddUserComponent;
