import React from "react";
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        noOfCakes: state.cake.numberOfCakes,
        noOfIceCreams: state.iceCream.numberOfIceCreams
    }
}
const ShowIceCreamAndCake = (props) => {
    return (
        <div>
            <h1>{props.noOfCakes}</h1>
            <h1>{props.noOfIceCreams}</h1>
        </div>
    );
}

export default connect(mapStateToProps)(ShowIceCreamAndCake);