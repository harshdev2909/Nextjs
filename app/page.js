// "use client"
import Link from "next/link";

export default function Home() {
  
  const handle = ( ) => {

  }
  return (
   <div className="">
    <p className="text-center font-bold">Hello</p>
    <Link className="bg-white text-black rounded-lg w-full h-full border text-sm m-20 ml-20 justify-center items-center" href="/login">Dashboard</Link>
    {/* <button className="bg-white text-black m-10xl items-center rounded-md w-15px h-10px">Hello</button> */}
   </div>
  );
}
