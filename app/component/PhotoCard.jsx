import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PhotoCard = ({photo}) => {
  return (
    <div>
        <Link href={`/photos/${photo.id}`}>
        <Image src={photo.url} alt={photo.title} width={700}height={700}></Image>
        <div>
            <h4>{photo.title}</h4>
        </div>
        </Link>


    </div>
  )
}

export default PhotoCard