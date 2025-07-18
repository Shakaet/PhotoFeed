import React from 'react'
import PhotoCard from './PhotoCard'

const PhotoList = ({photo}) => {
  return (
    <div>
        {
            photo.map((data,index)=><PhotoCard key={index} photo={data}></PhotoCard>)
        }
    </div>
  )
}

export default PhotoList