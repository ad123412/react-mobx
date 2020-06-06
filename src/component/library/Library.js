import React, {Component} from 'react';
import Book from "../book/Book";
import axios from 'axios';

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
    }

    //https://api.themoviedb.org/3/movie/550?api_key=f092f10d3ab0294e559fedc6be1f6b67
    //https://api.themoviedb.org/3/movie/popular?api_key=f092f10d3ab0294e559fedc6be1f6b67
    //eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMDkyZjEwZDNhYjAyOTRlNTU5ZmVkYzZiZTFmNmI2NyIsInN1YiI6IjVlYjY1YTIyYmJlMWRkMDAyMjgwNTYzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kjryKFyqeFOpo2_rPXqYHJpaCEfgm28h8RsxCbrDiwA
    async componentDidMount() {
        await axios.get('https://fakerestapi.azurewebsites.net/api/Books', {
            headers: {'Accept': 'application/json'}
        }).then(response => {
            this.setState({
                books: response.data.slice(0, 10)
            })
        });
        this.state.books.map(async book => {
            await axios.get(`https://fakerestapi.azurewebsites.net/books/covers/${book.ID}`,
                {headers: {'Accept': 'application/json'}})
                .then(res => {
                    console.log('setting ... cover url');
                    if (res.data[0]) {
                        book.cover = res.data[0].Url;
                        console.log(book.cover);
                    }
                });
        });
        console.log('2')
    }

    render() {
        return (
            <div>
                Library
                {this.state.books.map(
                    book => {
                        console.log(book)
                        return (
                            <Book key={book.ID} book={book}></Book>
                        );
                    }
                )}
            </div>
        );
    }
}

export default Library;