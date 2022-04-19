import React, { useState } from 'react'

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSearchSubmit(term)
  }

  return (
    <div className='search-bar ui segment'>
      <form className='ui form' onSubmit={handleSubmit}>
        <div className='field'>
          <label>Video Search</label>
          <input
            type='text'
            name='term'
            value={term}
            onChange={e => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
