import React from 'react';

const HelloComponent = (props) => {

    const prepareHelloMessage = (name, greeting) => {
        alert(`${greeting} ... ${name} !!`) ;
    }

    return (
        <div>
            <h2>Hello Intellij react App !!!</h2>
            <button onClick={() => prepareHelloMessage('Abhishek','Hello')}>Greet</button>
        </div>
    );
}

export default HelloComponent;