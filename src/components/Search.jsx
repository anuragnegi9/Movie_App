import React from 'react'
import search from '../assets/search.svg'

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {

  return (
    <div className='search'>
      <div>
        <img src={search} alt="" />
        <input type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {

              // Call a function passed from App to trigger the search
              onSearch(searchTerm);
            }
          }
          } />
      </div>
    </div>
  )
}

export default Search