import React, {Component} from 'react';
import axios from 'axios';
import Movie from "./Movie";

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedType: 'popular',
            currentFetchedMovies: [],
            currentPageNumber: 1,
            defaultSelected: true
        };
    }

    onMovieTypeChange = (event) => {
        this.setState({
            ...this.state,
            selectedType: event.target.value,
            defaultSelected: event.target.value === 'popular' ? true : false
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.selectedType !== this.state.selectedType ||
            prevState.currentPageNumber !== this.state.currentPageNumber) {
            this.fetchMovies();
        }
    }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = async () => {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${this.state.selectedType}?api_key=f092f10d3ab0294e559fedc6be1f6b67&page=${this.state.currentPageNumber}`)
        movieResponse.data.results.map(movie => {
            movie.posterUrl = `https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`;
        })
        this.setState({
                ...this.state,
                currentFetchedMovies: movieResponse.data.results
            }
        );
    }

    render() {
        return (
            <div>
                <h1>My Movie Database</h1>
                <div className="container">
                    <input checked={this.state.defaultSelected} onChange={this.onMovieTypeChange} type="radio"
                           id="popular" name="movies" value="popular"></input>
                    <label htmlFor="popular">Popular</label>
                    <input onChange={this.onMovieTypeChange} type="radio" id="upcoming" name="movies"
                           value="upcoming"></input>
                    <label htmlFor="upcoming">Upcoming</label>
                    <input onChange={this.onMovieTypeChange} type="radio" id="nowPlaying" name="movies"
                           value="now_playing"></input>
                    <label htmlFor="nowPlaying">Now Playing</label>
                    <input onChange={this.onMovieTypeChange} type="radio" id="topRated" name="movies"
                           value="top_rated"></input>
                    <label htmlFor="topRated">Top Rated</label>
                </div>

                <div className="row">
                    {this.state.currentFetchedMovies.map(movie => {
                        return (
                            <div key={movie.id} className="col-sm-3">
                                <Movie movie={movie}></Movie>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Movies;