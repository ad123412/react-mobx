import React, {Component} from "react";
import Account from "./Account";
import {Card} from 'antd';

class Accounts extends Component {

    render() {
        const gridStyle = {
            width: '33%',
            textAlign: 'center',
        };
        const {accounts} = this.props;
        return (
            <div>
                <Card title="Bank Accounts">
                    {
                        accounts.map(acc => (
                            <Card.Grid style={gridStyle} key={acc._id}>
                                <Account acc={acc._source}/>
                            </Card.Grid>

                        ))
                    }
                </Card>
            </div>
        );
    }
}

export default Accounts;