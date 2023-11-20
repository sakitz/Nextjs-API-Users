import React from 'react'
import Link from 'next/link'


const Navegacion = () => {
  return (
    <nav className='bg-slate-400 mb-4 flex justify-between items-center px-20 p-2'>
        <Link href='/' className='font-bold text-3xl ' > Home </Link>

        <ul  className='flex gap-4'>
            <li>
                <Link href='/about'>
                    about
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navegacion