import React, {useEffect, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import axios from 'axios';
import Button from "react-bootstrap/Button";

const EffectHook = (props) => {
    const [posts, getPosts] = useState([]);
    const [idClicked, getIdClicked] = useState(-1);
    const [expandedPost, getExpandedPost] = useState({});
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => getPosts(response.data))
            .catch(error => {
                console.error(`Error occurred while getting the posts from server ${error}`);
            })
    }, []);
    useEffect(() => {
        if (idClicked !== -1) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${idClicked}`)
                .then(response => {
                    console.log(`response received : ${response.data}`);
                    getExpandedPost(response.data);
                })
                .catch(error => {
                    console.log(`Error occurred while calling post with id ${idClicked} : ${error}`)
                })
        }
    }, [idClicked])
    return (
        <Container fluid>
            {posts.map(post => (
                <Card key={post.id} bg="secondary" text="white">
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        {post.id === expandedPost.id ? <Card.Body>{expandedPost.body}</Card.Body> : ''}
                        <Button variant="secondary" onClick={() => getIdClicked(post.id)}>... Details</Button>
                    </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default EffectHook;