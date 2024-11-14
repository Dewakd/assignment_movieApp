// src/api.js

const API_KEY = '0bb7234121894136991a913477f8886e';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
  const data = await response.json();
  return data.results;
};
