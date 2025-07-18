
import PhotoList from "../component/PhotoList";
import { getAllPhotos } from "../lib/image-data";
import { getDictionary } from "./dictionaries/dictionaries";

export default async function Home({ params: { lang } }) {

   const dict = await getDictionary(lang) 
   console.log(`${process.env.BASE_API_URL}/photos`)

     

     let response=await fetch(`${process.env.BASE_API_URL}/photos`)

     let photo=await response.json()
     console.log(photo)

  return (
   <div>
     <PhotoList photo={photo}></PhotoList>
   </div>
  );
}
