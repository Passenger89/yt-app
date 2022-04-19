import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import VideoList from '../VideoList/VideoList'
import VideoDetail from '../VideoDetail/VideoDetail'
import useVideos from '../../hooks/useVideos'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('cats')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='ui container' style={{ marginTop: '1rem' }}>
      <SearchBar onSearchSubmit={search} />
      <br />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
