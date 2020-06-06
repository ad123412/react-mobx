import React from "react";
import myMobxStore from "./MyMobxStore";
import {Provider} from "mobx-react";
import MobxChildAddUserComponent from "./MobxChildAddUserComponent";
import MobxShowUsersChildComponent from "./MobxShowUsersChildComponent";
import MobxFunctionalComponent from "./MobxFunctionalComponent";

const MobxContainerComponent = props => {
    return (
        <div>
            <Provider userStore={myMobxStore}>
                <MobxChildAddUserComponent/>
                <MobxFunctionalComponent/>
                <MobxShowUsersChildComponent/>
            </Provider>
        </div>
    );
}

export default MobxContainerComponent;
