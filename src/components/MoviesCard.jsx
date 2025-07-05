import star from '../assets/star.svg'

const MovieCard = ({ movie:
  { title, vote_average, poster_path, release_date, original_language }
}) => {
  return (

    <div className="movie-card">

      <img src={poster_path ?
        `https://image.tmdb.org/t/p/w500/${poster_path}` : '/no-movie.png'}
        alt={title} />
      <div className="mt-4">
        <h3 className="text-white font-bold text-base line-clamp-1">{title}</h3>

        <div className="flex items-center justify-center gap-2 mt-4 mb-8">
          <div className="flex items-center gap-1 relative top-[1px]">
            <img src={star}
              alt="Star Icon"
              className="w-4 h-4 object-contain inline-block" />

            <p className="text-white font-bold text-base">{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
          </div>

          <span className='text-gray-100'>•</span>

          <p className="lang text-white capitalize font-medium text-base">{original_language}</p>

          <span className='text-gray-100'>•</span>

          <p className="year text-white font-medium text-base">
            {release_date ? release_date.split('-')[0] : 'N/A'}
          </p>
        </div>
      </div>
    </div>
  )

}


export default MovieCard