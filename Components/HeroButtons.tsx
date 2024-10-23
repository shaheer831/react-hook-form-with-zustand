import Link from 'next/link'
import React from 'react'

const HeroButtons = () => {
  return (
    <div className="flex justify-center gap-2">
        <Link href={'/zustand'}><button className="p-6 border rounded-xl">React Hook Form with zustand</button></Link>
        <Link href={'/react-hook-form'}><button className="p-6 border rounded-xl flex gap-2 items-end">React Hook form <p className='text-[13px]'>( not-found )</p></button></Link>
      </div>
  )
}

export default HeroButtons