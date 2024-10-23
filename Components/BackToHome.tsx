import Link from 'next/link'
import React from 'react'

const BackToHome = () => {
    return (
        <div className='flex justify-between items-center mt-2 px-5'>
            <Link href={'/'}><button className="px-6 py-2 border rounded-xl">Home</button></Link>
            <p className='text-4xl'>Practice.com</p>
        </div>
    )
}

export default BackToHome