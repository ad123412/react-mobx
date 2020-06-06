import React, {useState} from 'react';

const inventoryStyle = {
    marginTop: "10px"
}

const CakeComponent = (props) => {
    const [count, setCount] = useState(20);
    const [noOfBoughtCakes, setNoOfBoughtCakes] = useState(1);
    const [noOfCakeToBeAdded, setNoOfCakeToBeAdded] = useState(1);

    const buyCake = () => {
        console.log('buyCake is called ....');
        if (count - noOfBoughtCakes >= 0)
            setCount(prevCount => prevCount - noOfBoughtCakes);
        else
            alert`not sufficient cakes to order`;
    }

    const addToInventory = () => {
        console.log('addToInventory is called ....');
        if (noOfCakeToBeAdded > 0)
            setCount(prevCount => prevCount + parseInt(noOfCakeToBeAdded));
    }

    return (
        <div>
            <h2>Welcome to cake shop</h2>
            <p>Number Of cakes available : {count}</p>
            {
                count === 0 ?
                    (<div>
                        <button disabled>Buy Cake</button>
                    </div>) :
                    (<div>
                        <input type="number" onChange={e => setNoOfBoughtCakes(e.target.value)}/>
                        <button onClick={() => buyCake()}>Buy Cake</button>
                    </div>)
            }
            <div style={inventoryStyle}>
                <input type="number" onChange={e => setNoOfCakeToBeAdded(e.target.value)}/>
                <button onClick={() => addToInventory()}>Add to Inventory</button>
            </div>
        </div>
    );
}

export default CakeComponent;