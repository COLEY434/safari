import * as genresApi from "./fakeGenreservice";

const movies = [
  {
    id: "5b21cakjhs938fbvmskhfs",
    title: "terminator",
    genre: { id: "5fb2847djhdfkdfgfsjs", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28"
  },

  {
    id: "5b21cakjhs909sjf0fsk90",
    title: "die Hard",
    genre: { id: "5fb2847djhdfkdfgfsjs", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  },

  {
    id: "5b21cakjhs90945fds45dg4fd5",
    title: "Horrible bosses",
    genre: { id: "5fb2847djhdfkdfgfsjs", name: "Comedy" },
    numberInStock: 5,
    dailyRentalRate: 2.5
  }
];

export function getMovies() {
  return movies;
}
