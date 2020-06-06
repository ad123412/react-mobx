import React from 'react';
import {connect} from 'react-redux';
import {buyIcecream} from "./Actions";

const mapStateToProps = state => {
    return {
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyIcecream: () => {
            dispatch(buyIcecream());
        }
    }
}

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of Icecreams : {props.numberOfIceCreams} </h2>
            <button onClick={props.buyIcecream}>Buy Ice Cream</button>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);