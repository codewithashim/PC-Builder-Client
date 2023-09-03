import { PC_Builder_Logo } from '@/src/Assets';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook,FaTwitter ,FaLinkedin} from 'react-icons/fa';    

const Footer = () => {
    return (
        <>
            <footer className="p-10 mt-4 footer bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="px-10 py-4 border-t footer bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <Image src={PC_Builder_Logo} alt="logo" className="w-full h-20" />
                    <p>The PC REPAIR TECH. <br />Providing reliable tech since 2020</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                       <Link href={'/'}>
                        <FaFacebook className='text-2xl'/>
                       </Link>
                       <Link href={'/'}> 
                         <FaTwitter className='text-2xl'/>   
                       </Link>
                       <Link href={'/'}>
                            <FaLinkedin className='text-2xl'/>
                       </Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;