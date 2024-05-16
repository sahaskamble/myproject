import { useEffect, useState } from "react";

export default function Movies() {

  const [data, setdata] = useState([])
  const [data1, setdata1] = useState([])

  const fetchdata = async () => {
    const res = await fetch('https://api.sampleapis.com/movies/family')
    const data = await res.json();
    setdata(data)
    
    const res1 = await fetch('https://api.sampleapis.com/movies/comedy')
    const data1 = await res1.json();
    setdata1(data1)
  }

  useEffect(()=>{
    fetchdata()
  },[])

  console.log(data);

  return(
    <section className="">
      <h1 className="text-2xl font-bold my-4 ">Recommended Movies</h1>
      <div className="w-full h-auto flex overflow-scroll gap-8"> 
        {
          data.map((items: any)=>(
            <div key={items.id} className="w-[350px] h-500px rounded-lg">
              <div style={{ backgroundImage: `url(${items.posterURL})`, backgroundRepeat: 'no-repeat', height: '400px' }} className="w-[300px] rounded-lg border border-white"></div>
              <div className="my-4 font-bold px-2">
                <span>{items.title}</span>
              </div>
            </div>
          ))
        }
      </div>
        
        <div className="my-16"></div>  

      <h1 className="text-2xl font-bold my-8">All movies</h1>
      <div className="w-full h-auto flex flex-wrap justify-center gap-4">
        {
          data1.map((items)=>(
            <div key={items.id} className="w-[350px] h-500px rounded-lg">
              <div style={{ backgroundImage: `url(${items.posterURL})`, backgroundRepeat: 'no-repeat', height: '400px' }} className="w-[300px] rounded-lg border border-white"></div>
              <div className="my-4 font-bold px-2">
                <span>{items.title}</span>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}
