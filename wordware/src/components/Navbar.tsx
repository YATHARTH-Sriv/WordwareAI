import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <div className="navbar border-black bg-base-100 fixed top-0 left-0 w-full z-50">
    <div className="navbar-start">
      <Link href={"/"} className="text-xl font-bold">WORDWARE</Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
        <Link className=' hover:bg-black hover:text-white font-semibold' href={""}>
            Explore
            </Link>
        </li>
        <li>
            <summary className='  hover:bg-black hover:text-white font-semibold'>
            Docs
            </summary>
        </li>
        <li>
            <Link className='  hover:bg-black hover:text-white font-semibold' href={""}>
            Pricing
            </Link>
        </li>
        <li>
            <Link className='  hover:bg-black hover:text-white font-semibold' href={""}>
            Careers
            </Link>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <Link href={"/sign-in"} className="btn hover:bg-blue-800 bg-blue-600 text-white font-bold">Get Started</Link>
    </div>
  </div>
  )
}

export default Navbar