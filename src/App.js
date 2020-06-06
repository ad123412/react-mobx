import React from 'react';

import './App.css';
import Bank from "./component/bank/Bank";
import BankPageContainer from "./component/bank/BankPageContainer";
import SimpleHook from "./component/hooks/SimpleHook";
import EffectHook from "./component/hooks/dataFetch/EffectHook";
import MobxContainerComponent from "./component/mobxComponents/MobxContainerComponent";
// import CakeContainer from "./component/reduxstore/CakeContainer";
// import {Provider} from "react-redux";
// import store from "./component/reduxstore/Store";
// import IceCreamContainer from "./component/reduxstore/IceCreamContainer";
// import ShowIceCreamAndCake from "./component/reduxstore/ShowIceCreamAndCake";
// import Accounts from "./component/bank/Accounts";

function App() {
    return (
        // <Provider store={store}>
        //     <div className="App">
        //         <CakeContainer/>
        //         <IceCreamContainer/>
        //         <ShowIceCreamAndCake />
        //     </div>
        // </Provider>
        // <div className="App">
        //     <BankPageContainer />
        // </div>
        // <div>
        //     <EffectHook />
        // </div>
        <div>
            <MobxContainerComponent />
        </div>
    );
}

export default App;
