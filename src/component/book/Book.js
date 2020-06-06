import React from 'react';

const Book = (props) => {
    return (
        <div>
            <section key={props.book.ID}>
                <h2>{props.book.Title}</h2>
                <p>{props.book.PublishDate}</p>
                <img src={props.book.cover} height="100px"/>
            </section>
        </div>
    );
}

export default Book;
