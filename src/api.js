const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchMovies = async (searchTerm = '', page = 1) => {
  const url = searchTerm
    ? `${BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}&page=${page}&api_key=${API_KEY}`
    : `${BASE_URL}/movie/popular?page=${page}&api_key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  return data.results || []; 
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
