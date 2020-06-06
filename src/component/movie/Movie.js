import React from 'react';
import {Card} from 'react-bootstrap';

const Movie = (props) => {
    return (
        <Card >
            <Card.Img variant="top" src={props.movie.posterUrl}/>
            <Card.Body>
                <Card.Title>{props.movie.title}</Card.Title>
                <p>Release Date : {props.movie.release_date}</p>
                <Card.Text>{props.movie.overview}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Movie;