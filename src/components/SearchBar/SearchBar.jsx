import React, { useState } from 'react'

import { AiOutlineSearch } from 'react-icons/ai'

import styles from './SearchBar.module.css'

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSearchSubmit(term)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className='ui fluid right labeled input'>
        <input
          id='video_search'
          type='text'
          name='term'
          value={term}
          onChange={e => setTerm(e.target.value)}
          style={{ outline: '1px solid #333' }}
          placeholder='Search'
        />
        <div className={`${styles.icon} ui basic label`}>
          <AiOutlineSearch onClick={handleSubmit} />
        </div>
      </div>
    </form>
  )
}

export default SearchBar
