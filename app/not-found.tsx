import Link from "next/link";

export default function notFound(){
    return <div className="w-screen h-screen flex-col font-extrabold flex justify-center items-center text-5xl">
    Oops! Page Not Found 
    <Link href={'/'}><button className="p-6 mt-4 border rounded-xl">Back To Home</button></Link>
</div>
}