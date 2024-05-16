'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {

  const router = useRouter();

  return(
    <div className="flex justify-center items-center gap-[5px] font-extrabold text-2xl cursor-pointer" onClick={()=>{ router.push("/") }}>
      <span className="">Quick</span>
      <span className="text-green-600">Book</span>
    </div>
  );
}
