import React, {Component} from 'react';
import {Input, Space} from 'antd';

class SearchAccount extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Space>
                    <Input placeholder="Search Accounts ..."
                           onChange={this.props.setSearchText}/>
                </Space>
            </div>
        );
    }
}

export default SearchAccount;