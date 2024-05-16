import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {

  const [data, setdata] = useState([]);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const router = useRouter();

  async function handleform(e: any) {
  
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/login',{
      method: 'POST',
      headers: {
        "Context-Type": "application/json",
      },
      body: JSON.stringify({ username, password })
    })

    const data = await res.json();
    setdata(data);

    if (data.returncode == 0) {
      alert(`Your are ${data.message}`);
    }else{
      alert(`Your are Not ${data.message}`);
    }

  }

  console.log(data);
  console.log('\n', username, '\n', password);

  return(
    <section className="w-full h-[80dvh] flex justify-center items-center">

      <form 
        onSubmit={handleform}
        className="w-[400px] h-[400px] px-10 flex flex-col justify-center items-center gap-5 shadow-green-500 shadow-lg border border-green-500 rounded-2xl">
        
        <div className="w-full flex flex-col">
          <label htmlFor="name" className="font-bold">Username</label>
          <input 
            value={username}
            type="text"
            className="w-full p-2 border-green-500 border rounded-lg" 
            onChange={
              (e) => {
                setusername(e.target.value)
              }
            } />
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="password" className="font-bold">Password</label>
          <input 
            value={password}
            type="text"
            className="w-full p-2 border-green-500 border rounded-lg"
            onChange={
              (e) => {
                setpassword(e.target.value)
              }
            }
          />
        </div>

        <div className="w-full flex justify-between items-center my-4">
          <button className="bg-green-500 hover:bg-green-600 p-2 px-4 text-base text-black font-bold rounded">submit</button>
          <button 
            className="text-green-600 hover:text-green-400 p-[7.5px] px-4 text-base underline rounded"
            onClick={
              ()=>{
                router.push('/register')
              }
            }
          >
            Register ?
          </button>
        </div>

      </form>

    </section>
  );
}
