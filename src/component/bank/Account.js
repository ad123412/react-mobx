import React from "react";
import {AccountBookFilled, EuroCircleFilled, HomeFilled, MailFilled} from '@ant-design/icons';
import {Space} from 'antd';

const Account = ({acc}) => {
    return (
        <div style={{textAlign: 'left'}}>
            <h4><AccountBookFilled style={{fontSize: '50px'}}/>
                {acc.firstname} {acc.lastname} ({acc.age})</h4>
            <Space><EuroCircleFilled style={{fontSize: '20px', color: '#08c'}}/>
                {acc.balance}</Space><br/>
            <Space><MailFilled style={{fontSize: '20px', color: '#08c'}}/>
                {acc.email}</Space><br/>
            <Space><HomeFilled style={{fontSize: '20px', color: '#08c'}}/>
                {acc.address} {acc.city}, {acc.state}</Space>
        </div>
    );
}

export default Account;