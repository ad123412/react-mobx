import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

@inject('userStore')
@observer
class MobxShowUsersChildComponent extends Component {
    render() {
        const {userStore} = this.props;
        const {users, usersCount} = userStore;
        return (
            <div>
                <p>total users : {usersCount}</p>
                {users.map(user => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default MobxShowUsersChildComponent;