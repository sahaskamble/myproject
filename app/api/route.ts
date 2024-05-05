import { getXataClient } from "@/xata"
import { NextResponse } from "next/server"

const xata = getXataClient()

export async function GET( res:NextResponse ) {
  
  const post:any = await xata.db.movies.getAll()
  
  return NextResponse.json({ status: "200", message: "its ok", output: post})
}
