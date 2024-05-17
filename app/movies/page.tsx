import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Movies from "@/components/Movies";
import { useRouter } from "next/navigation"

export default function ShowMovies() {
  return (
    <>
      <Navbar />
      <Movies />
      <Footer />
    </>
  )
}

