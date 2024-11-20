// "use client"
import Link from "next/link";

export default function Home() {
  console.log('hello')
  const handle = ( ) => {

  }
  return (
   <div>
    <p className="text-center font-bold">Hello</p>
    <Link href="/login">Dashboard</Link>
    {/* <button className="bg-white text-black m-10xl items-center rounded-md w-15px h-10px">Hello</button> */}
   </div>
  );
}
