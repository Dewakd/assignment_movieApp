import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchMovieDetails } from '../api';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

function MovieDetail() {
  const { id } = useParams();

  const { data: movie, status, error } = useQuery({
    queryKey: ['movieDetails', id],
    queryFn: () => fetchMovieDetails(id),
  });

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p>Error: {error.message}</p>;

  if (!movie) {
    return <p>Movie details not available</p>;
  }

  return (
    <>
      <div className="flex">
        <Sidebar />
        
          <div className="flex-1 bg-gray-100 overflow-auto">
          <Navbar />
          <h2 className="text-2xl font-bold">Main Content Area</h2>

          <div className="bg-cover bg-center h-full text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)', backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`, backgroundBlendMode: 'multiply'  }}>

            <div className='h-full flex  items-center px-32'>
              <div className='flex items-center'>

                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="h-[300px] rounded-lg"
                />

                <div className='flex flex-col ml-10 justify-start'>

                  <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
                  <h2 className='text-2xl font-semibold my-2'>{movie.tagline}</h2>
                  <span className='h-[1px] bg-white w-1/2 my-5'></span>
                  <div>
                    <h1 className='text-2xl font-semibold mb-4'>Details</h1>
                    <div className='flex'>
                      <p className='text-lg mr-1'>Genres : </p>
                      {movie.genres.map((genre) => (
                        <p className="text-lg mr-1 text-gray-300" key={genre.id}>{genre.name},</p>
                      ))}
                    </div>
                    <p className='text-lg flex'>Runtime :<span className='text-gray-300 ml-1'>{movie.runtime} Minutes</span> </p>
                    <div className='flex'>
                      <p className='text-lg mr-1'>Language : </p>
                      {movie.spoken_languages.map((language) => (
                          <span className="text-lg mr-1 text-gray-300" key={language.english_name}>{language.name},</span>
                      ))}
                    </div>
                    <p className='text-lg flex'>Status : <span className='text-gray-300 ml-1'>{movie.status}</span> </p>
                    <p className="text-lg">Release Date : <span className='text-gray-300 ml-1'> {movie.release_date}</span> </p>
                    <p className='h-[1px] bg-white w-1/2 my-5'></p>
                    <h1 className='text-2xl font-semibold '>Overview : </h1>
                    <p className="mt-4 text-white">{movie.overview}</p>
                  </div>
                  
                </div>
              </div>


            </div>


          </div>

          </div>
      </div>
    </>
  );
}

export default MovieDetail;
