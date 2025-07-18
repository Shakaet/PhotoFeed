import PhotoDetails from '@/app/component/PhotoDetails'
import React from 'react'

const page = async({params:{id,lang}}) => {




  return (
    <div>

        <PhotoDetails id={id} lang={lang}></PhotoDetails>
    </div>
  )
}

export default page