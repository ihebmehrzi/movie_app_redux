import {ADD_MOVIE , REMOVE_MOVIE ,EDIT_MOVIE,SEARCH_MOVIE , GET_TITLE , GET_RATE} from "./types";

export const addMovie = newMovie =>{
    return {
        type : ADD_MOVIE ,
        payload :newMovie
    };
};

export const removeMovie = title =>{
    return {
        type : REMOVE_MOVIE ,
        payload :title
    };
};

export const editMovie = movie =>{
    return {
        type : EDIT_MOVIE ,
        payload :movie
    };
};

export const searchMovie = (title, rating) => {
    return {
      type: SEARCH_MOVIE,
      payload: { title: title, rate: rating }
    };
};

export const getTitle = title =>{
    return {
        type : GET_TITLE ,
        payload :title
    };
};

export const getRate = rating =>{
    return {
        type : GET_RATE ,
        payload :rating
    };
};