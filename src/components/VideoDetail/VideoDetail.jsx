import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className='ui embed'>
        <div className='ui active dimmer'>
          <div className='ui loader'></div>
        </div>
      </div>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className='ui embed' data-source='youtube'>
        <iframe src={videoSrc} title='YouTube video player' frameBorder='0'></iframe>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
export default VideoDetail
