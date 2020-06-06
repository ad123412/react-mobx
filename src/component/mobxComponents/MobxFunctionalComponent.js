import React from "react";
import {inject, observer} from "mobx-react";

const MobxFunctionalComponent = (props) => {
    // not sure why usersCount cached value does not work here...
    // call the computed field count instead
    const {usersCount,count} = props.userStore;
    return (
        <div>
            <h1>Number of total users : {count}</h1>
        </div>
    )
};

export default inject('userStore')(observer(MobxFunctionalComponent));
