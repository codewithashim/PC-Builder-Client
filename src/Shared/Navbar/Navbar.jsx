import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from "next-auth/react"
import NavLogo from '@/src/Assets/logo.png';
import { Button } from 'antd';


const Navbar = () => {
    const { data: session } = useSession()

    const NavManuList = <>
        <li><Link href={'/'}>Home</Link></li>
        <li tabIndex={0}>
            <details>
                <summary>Category</summary>
                <ul className="w-40 p-2">
                    <li><Link href={'/'}>CPU / Processor</Link></li>
                    <li><Link href={'/'}>Motherboard</Link></li>
                    <li><Link href={'/'}>RAM</Link></li>
                    <li><Link href={'/'}>Power Supply Unit</Link></li>
                    <li><Link href={'/'}>Storage Device</Link></li>
                    <li><Link href={'/'}>Monitor</Link></li>
                    <li><Link href={'/'}>Others</Link></li>
                </ul>
            </details>
        </li>
        <li><Link href={'/'}>About</Link></li>
        <li><Link href={'/'}>Contact</Link></li>
        <li>
            {
                session?.user ? <li>
                    <Button type="primary" danger
                        onClick={() => signOut()}
                    >
                        Logout
                    </Button>
                </li>
                    : <Link href={'/auth/login'}>Login</Link>
            }
        </li>
    </>


    return (
        <nav>
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
                            <Image src={NavLogo} alt="logo" width={200} />
                        </Link>
                    </div>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 menu menu-horizontal">
                        {NavManuList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={'/pc-builder'} className='common-btn'>
                        PC Builder
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
