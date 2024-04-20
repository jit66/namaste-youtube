import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info,"video-data");
    const {snippet,statistics} = info;
    // console.log(snippet)
    const {channelTitle,title,thumbnails} = snippet;
  return (
    <div className=' m-4 w-72 shadow-lg '>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul className='px-2 py-4'>
            <li className='font-bold overflow-hidden max-h-11'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount}views</li>
        </ul>
    </div>
  )
}

export const AdVideoCard = ({info}) => {
    return(
        <div className='p-1 m-1 border border-red-900'>
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard