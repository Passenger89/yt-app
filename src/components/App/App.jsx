import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import VideoList from '../VideoList/VideoList'
import VideoDetail from '../VideoDetail/VideoDetail'
import useVideos from '../../hooks/useVideos'

import '../../styles/reset.css'
import styles from './App.module.css'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('cats')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className={`${styles.app__container}`}>
      <SearchBar onSearchSubmit={search} />
      <VideoDetail video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </div>
  )
}

export default App
