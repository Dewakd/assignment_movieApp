import React from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';

export default function MovieCard({img, title, rating, year, id}) {
  return (
    <>
      <Link to={`/movie/${id}`} className='w-full min-h-[500px]'>
        <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt="Movie Title" className="w-full h-auto rounded-t" loading='lazy' />
        <div className="p-2 bg-white rounded-b  lg:h-[120px] flex flex-col justify-between">
            <h3 className="text-xl font-bold">{title}</h3>
            <div className='flex justify-between'>
                <p className="text-gray-600">{year}</p>
                <p className="text-yellow-500 flex">
                    <Icon icon="mdi:star" width="24" className="inline mr-1" />
                    {rating}
                </p>
            </div>
        </div>
      </Link>
    </>
  )
}
