'use client'

import { useEffect, useState } from "react"
import { Card, CardContent, CardTitle, CardFooter, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { Stars } from "lucide-react"

export default function Homepage() {

  const [data, setdata]: any = useState([])

  async function fetchdata() {
    const res = await fetch('https://dummyapi.online/api/movies')
    const data = await res.json()
    setdata(data)
  }

  useEffect(() => {

    fetchdata()

  }, [])
    
  console.log(data)

  return (
    <section>
      <h1 className="text-4xl">Movie Section</h1>
      <div className="px-8">
        {
          data.map((items: any) => (
            <Card key={items.id}>
              <CardHeader>
                <CardTitle>{items.movie}</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge className="w-[80px] p-2 flex justify-center items-center gap-4 text-lg">
                  <Stars />
                  {items.rating}
                </Badge>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </section>
  );
}
