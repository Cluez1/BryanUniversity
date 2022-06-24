import LaunchNavBar from './LaunchNavBar'
import {useState, useEffect} from 'react'
import './LaunchPhoto.css'


export default function LaunchPhoto() {
    const [photoData, setPhotoData] = useState(null)
    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto() {
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=5YWlAgfvEaJBsIRAvn1ppOoVSHhYab8yrRaHkcHT'
            );

            const data = await res.json();
            setPhotoData(data)
            console.log(fetchPhoto);
        }
    }, []);
    if (!photoData) return <div />;

  return (
    <>
    <LaunchNavBar />
    <div className='space-photo'>
      {photoData.media_type = "image" ? (
        <img src={photoData.url} alt={photoData.title} className='photo' />
      ) : (
        <iframe
        title="space-video"
        src={photoData.url}
        frameBorder='0'
        gesture='media'
        allow='encrypted-media'
        allowFullScreen
        className='photo'
        />
      )}
    <div>
    <h1>{photoData.title}</h1>
    <p className='date'>{photoData.date}</p>
    <p className='explanation'>{photoData.explanation}</p>
    </div>
    </div>
    </>
  );
}
