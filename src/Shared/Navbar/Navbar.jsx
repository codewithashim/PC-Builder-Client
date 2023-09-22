import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from "next-auth/react"
import { PC_Builder_Logo } from '@/src/Assets';

const Navbar = () => {
    const { data: session } = useSession()
    const categories = [
        {
          category: "CPU",
          link: "/pc/CPU",
        },
        {
          category: "Motherboard",
          link: "/pc/Motherboard",
        },
        {
          category: "RAM",
          link: "/pc/RAM",
        },
        {
          category: "Power Supply Unit",
          link: "/pc/PowerSupplyUnit",
        },
        {
          category: "Storage Device",
          link: "/pc/StorageDevice",
        },
        {
          category: "Monitor",
          link: "/pc/Monitor",
        },
      ];
    
    const NavManuList = <>
        <li><Link href={'/'}>Home</Link></li>
        <li tabIndex={0} className='z-50'>
            <details>
                <summary>Category</summary>
                <ul className="p-2 w-80">
                    {categories?.map((category, i) => (
                <li key={i}>
                  <Link href={`/pc/${category?.category}`}>
                    {category?.category}
                  </Link>
                </li>
              ))}

                </ul>
            </details>
        </li>
        <li><Link href={'/'}>About</Link></li>
        <li><Link href={'/'}>Contact</Link></li>
        <li>
            {
                session?.user ? <li>
                    <button
                        className="denger-btn"
                        onClick={() => signOut()}
                    >
                        Logout
                    </button>
                </li>
                    : <Link href={'/auth/login'} className='common-btn'>Login</Link>
            }
        </li>
    </>


    return (
        <nav className='z-50'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {NavManuList}
                        </ul>
                    </div>
                    <div className="logo-section">
                        <Link href="/">
                            <Image src={PC_Builder_Logo} alt="logo" width={200} />
                        </Link>
                    </div>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="flex items-center px-1 menu menu-horizontal text-[1.2rem]">
                        {NavManuList}
                    </ul>
                </div>
                <div className="navbar-end">
                {
                    session?.user &&  <Link href={'/pc'} className='common-btn'>
                        PC Builder
                    </Link>
                }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
