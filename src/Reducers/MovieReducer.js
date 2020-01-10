import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE, GET_TITLE, GET_RATE } from "../Actions/types";
import uuid from "uuid";

const initialState = [


  {
    id: uuid(),
    image: "https://images-na.ssl-images-amazon.com/images/I/912AErFSBHL._AC_SY445_.jpg",
    title: "Inception - 2010",
    rating: 5
  },
  {
    id: uuid(),
    image: "https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._AC_SY445_.jpg",
    title: "Shawshank Redemption",
    rating: 4
  },

  {
    id: uuid(),
    image: "https://img8.cdn.cinoche.com/images/97b4e14bdf0c2e9ea82816d62a513cff.jpg",
    title: "Blade Runner - 2017",
    rating: 3
  },
];

const MovieReducer = (state = { movies: initialState, keyword: "", rating: 1 }, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: state.movies.concat(action.payload) };
    case REMOVE_MOVIE:
      return { ...state, movies: state.movies.filter(el => el.title !== action.payload) }
    case EDIT_MOVIE:
      return { ...state, movies: state.movies.map(el => el.id === action.payload.id ? action.payload : el) }
    case GET_TITLE:
      return { ...state, keyword: action.payload }
    case GET_RATE:
      return { ...state, rating: action.payload }


    default:
      return state;
  }
};

export default MovieReducer;