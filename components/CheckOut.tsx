'use client';

import { useEffect, useState } from "react";

export default function MovieCheckout() {

  const [data, setdata]: any = useState([]);

  const fetchdata = async () => {
    let id = sessionStorage.getItem("movieId");
    const res = await fetch(`https://api.sampleapis.com/movies/comedy/${id}`)
    const data = await res.json();
    setdata(data)
  }

  useEffect(() => {
    fetchdata();
  }, [])

  console.log(data)

  return (
    <>
      <div className="w-full h-screen flex justify-center flex-col items-center">
        {
          <div key={data.id} className="w-[500px] h-[700px] rounded-lg" onClick={() => { sessionStorage.setItem("movieId", items.id) }}>
            <div style={{ backgroundImage: `url(${data.posterURL})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '500px', height: '700px' }} className="w-[300px] rounded-lg border border-white"></div>
            <div className="my-4 font-bold px-2">
              <span>{data.title}</span>
            </div>
          </div>
        }
        <button onClick={
          () => {alert("Your Movie is Booked")}
        } className="mt-20 bg-green-500 text-black p-3 text-xl">
          Check out
        </button>
      </div>
    </>
  );
}
