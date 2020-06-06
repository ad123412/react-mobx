import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Alert, Button} from "react-bootstrap";

const SimpleHook = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const setClickCount = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        console.log(`updated the count`);
        document.title = `clicked ${count} times`;
    }, [count]);

    const updateUserName = (event) => {
        const name = event.target.value;
        setName(name);
        console.log(`Name changed to : ${name}`);
    }

    return (
        <Container fluid>
            <div>
                <Alert variant='primary'>
                    <span>You clicked {count} times</span>
                </Alert>
                <Button variant="primary" onClick={setClickCount}>Click me!!</Button>
            </div>
            <br/>
            <div>
                <input type="text" onChange={e => updateUserName(e)}/> <Button>Name</Button>
            </div>
        </Container>
    );
}

export default SimpleHook;
