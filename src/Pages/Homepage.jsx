import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/searchSlice';
import MovieCard from '../Components/MovieCard';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMovies } from '../api';
import '../index.css';
import Navbar from '../Components/Navbar';

function Homepage() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ['movies', searchTerm],
    queryFn: ({ pageParam = 1 }) => fetchMovies(searchTerm, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      
      if (!lastPage || lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
  

  const movies = data?.pages.flat() || [];

  const handleSearch = (e) => {
    e.preventDefault();
    const term = e.target.querySelector('input').value;
    dispatch(setSearchTerm(term));
  };

  if (status === 'loading') return <p className="text-center text-gray-500">Loading...</p>;
  if (status === 'error') return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="h-screen flex relative">
      <div className="flex-1 bg-gray-100 overflow-auto">
        <Navbar />

        <form
          className="flex items-center justify-center my-4"
          onSubmit={handleSearch}
        >
          <input
            type="search"
            className="px-4 py-2 border-2 border-gray-300 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
            placeholder="Search for a movie"
            defaultValue={searchTerm} 
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg ml-2"
          >
            Search
          </button>
        </form>

        <div className="p-4 px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 2xl:gap-8 justify-center">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              img={movie.poster_path}
              title={movie.title}
              rating={movie.vote_average.toFixed(1)}
              year={movie.release_date}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasNextPage && (
          <div className="text-center my-4">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isFetchingNextPage ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Homepage;
