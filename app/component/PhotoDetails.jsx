import React from 'react'
import { getDictionary } from '../[lang]/dictionaries/dictionaries'
import Image from 'next/image'

const PhotoDetails = async({id,lang}) => {

    let dict =await getDictionary(lang)


 
   let response =await fetch(`${process.env.BASE_API_URL}/photos/${id}`)

   let photo= await response.json()

   console.log(photo)
  return (
     <div className="grid grid-cols-12 gap-4 2xl:gap-10 ">
    
      <div className="col-span-12 lg:col-span-8 border rounded-xl">
        <Image className="max-w-full h-full max-h-[70vh] mx-auto" src={photo?.url} alt=""width={900}height={500} />
      </div>
      
      <div className="p-6 border rounded-xl col-span-12 lg:col-span-4  ">
        <h2 className="text-lg lg:text-2xl font-bold mb-2">
          {photo.title}
        </h2>
        <div className="text-xs lg:text-sm text-black/60 mb-6">
          {
            photo.tags.map(item=>`#${item}`)
          }
        </div>
       
        <div className="space-y-2.5 text-black/80 text-xs lg:text-sm">
        
          <div className="flex justify-between">
            <span>{dict.views}</span>
            <span className="font-bold">{photo.views}</span>
          </div>
         
          <div className="flex justify-between">
            <span>{dict.share}</span>
            <span className="font-bold">{photo.share}</span>
          </div>
         
          <div className="flex justify-between">
            <span>{dict.uploadedOn}</span>
            <span className="font-bold">{photo.uploaded}</span>
          </div>
         
        </div>
        
        <div className="mt-6">
          
          <div className="flex justify-between items-center mb-3">
         
            <div className="flex items-center gap-3">
              <Image className="size-12 lg:size-14 rounded-full border" src={photo.author.avatar} alt="avatar"width={50} height={50} ></Image>
              <div className="spacy-y-3">
                <h6 className="lg:text-lg font-bold">Saad Hasan</h6>
                <p className="text-black/60 text-xs lg:text-sm">420 Followers</p>
              </div>
            </div>
         
            <button className="flex items-center gap-1.5 text-black/60 text-xs xl:text-sm">
              <img src="./assets/icons/follow.svg" className="w-5 h-5" />
              Follow
            </button>
          </div>
         
          <p className="text-xs lg:text-sm text-black/60">
            I am a portrait photographer in Michigan, and happily share my
            hard work so others can find and use my photos for FREE!
          </p>
        </div>
        
        <div className="mt-6">
          <div className="flex items-stretch gap-3">
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <img src="./assets/icons/heart.svg" className="w-5 h-5" />
              100
            </button>
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <img src="./assets/icons/save.svg" className="w-5 h-5" />
              Save
            </button>
            <button
              className="flex-1 border py-1.5 rounded text-xs lg:text-sm flex items-center justify-center text-center gap-1.5 font-bold hover:bg-yellow-400">
              <img src="./assets/icons/share.svg" className="w-5 h-5" />

              Share
            </button>
          </div>
        </div>
      </div>
     
    </div>
  )
}

export default PhotoDetails