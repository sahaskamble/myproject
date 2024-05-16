'use client'

import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter()

  return (
    <nav className="flex justify-between items-center p-4 bg-transparent backdrop-blur-md">

      <Logo />

      <div className="flex justify-center items-center gap-4">
        <Link href="/movies">Movies</Link>
        <span className="w-[2px] h-[20px] bg-green-500"></span>
        <Link href="/drama">Drama</Link>
        <span className="w-[2px] h-[20px] bg-green-500"></span>
        <Link href="/more">Explore more</Link>
        <span className="w-[2px] h-[20px] bg-green-500"></span>
        <Link href="/contact">Contact Us</Link>
      </div>

      <button
        className="bg-green-500 text-xl border border-green-500 text-black p-1 px-4 rounded-lg hover:bg-green-600"
        onClick={
          ()=>{
            router.push('/login')
          }
        }
      >
        Login
      </button>

    </nav>
  );
}
