export default function Footer() {
  return(
    <footer className="flex justify-between items-center py-8 my-8">
      <div className="flex gap-[1px] text-2xl">
        <span className="text-white font-bold">Quick</span>
        <span className="text-green-500 font-bold">Book</span>
      </div>
      <div className="flex gap-4">
        <span className="font-bold">
          @Appniche Technologies
        </span>
        <span className="w-[2px] h-[30px] bg-green-500"></span>
        <span>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Contact Us</li>
          </ul>
        </span>
      </div>
    </footer>
  );
} 
