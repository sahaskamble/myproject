import React, { useEffect, useState } from 'react';

export default function Heropage() {

  const slider = [
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/469/411/650/ryan-gosling-blade-runner-2049-depressing-movie-scenes-hd-wallpaper-preview.jpg",
    },
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/423/594/402/avatar-movies-cgi-render-wallpaper-preview.jpg",
    },
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/672/27/657/car-transformers-age-of-extinction-wallpaper-preview.jpg",
    },
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/706/534/469/movie-scenes-joker-2019-movie-hd-wallpaper-preview.jpg",
    },
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/773/178/467/wonder-woman-gal-gadot-women-movies-wallpaper-preview.jpg",
    },
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/22/689/215/interstellar-voyage-interstellar-movie-scene-wallpaper-preview.jpg",
    },
    {
      "posterURL": "https://c4.wallpaperflare.com/wallpaper/655/730/561/gamora-rocket-raccoon-groot-drax-the-destroyer-wallpaper-preview.jpg",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevsl = () => {
    const isfirstslide = currentIndex === 0;
    const newindex = isfirstslide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newindex);
  }
  
  const nextsl = () => {
    const islastslide = currentIndex === slider.length - 1;
    const newindex = islastslide ? 0 : currentIndex + 1;
    setCurrentIndex(newindex);
  }

  useEffect(() => {
    const interval = setInterval(nextsl, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <section className='w-full flex flex-col justify-center items-center my-16'> 
      <section className='w-[90%] h-[600px] mx-auto rounded-lg relative border-2 border-white'>
        <div 
          style={{ backgroundImage: `url(${slider[currentIndex].posterURL})`, backgroundRepeat: 'no-repeat' }} 
          className='w-full h-full rounded-lg bg-center bg-cover duration-400'
        ></div>
        <div 
          className='w-[50px] h-[50px] inline-flex justify-center items-center absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/100 text-white cursor-pointer'
          onClick={prevsl}
        > &lt; </div>

        <div 
          className='w-[50px] h-[50px] inline-flex justify-center items-center absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/100 text-white cursor-pointer'
          onClick={nextsl}
        > &gt; </div>
      </section>
    </section>
  );
}
