import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieServices";
import Like from "./common/like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m.id !== movie.id);
    this.setState({ movies: movies });
  };
  render() {
    const { length: count } = this.state.movies;
    if (count === 0) return <p>There are no movies in the database</p>;
    return (
      <div>
        <p>{count} movies showing in the database</p>
        <table className="table table-light">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onclick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
