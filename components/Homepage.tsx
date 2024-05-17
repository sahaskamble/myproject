'use client'

import { useEffect, useState } from "react"
import { movies } from '@/lib/movies'

export default function Homepage() {
  
  const [data, setdata] = useState(movies);

  console.log(data);

  return (
    <section className="w-full mx-auto">
      <h1 className="text-4xl text-center p-4 my-8 font-semibold">Movie Section</h1>
      <div className="px-8 flex flex-wrap gap-8">
        {
          data.map((items:any)=>(
            <div
              key={items.imdbID}
              className="w-[300px] h-auto border border-black rounded-[1.5rem]"  
            >
              <div className="p-3">
                <img src={items.Images[0]} alt="movie image" className="w-[300px] h-[250px] rounded-2xl border border-black" />
                <div className="flex justify-between items-center px-4 py-2">
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-xl font-semibold">{items.Title}</span>
                    <span>{items.Genre}</span>
                  </div>
                  <div className="bg-yellow-500 w-[50px] h-[25px] text-lg inline-flex justify-center items-center rounded-lg">{items.imdbRating}</div>
                </div>
              </div>
            </div>
          )) 
        }
      </div>
    </section>
  );
}
