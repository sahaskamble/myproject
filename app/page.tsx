'use client'

import Footer from "@/components/Footer";
import Heropage from "@/components/Heropage";
import Movies from "@/components/Movies";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Heropage />
        <Movies />
      </main>
      <Footer />
    </>
  );
}
