import { FaUnlockAlt, FaUniversalAccess, FaArrowLeft, FaArrowRight, FaGoogle, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/src/Assets/logo.png';
import RootLayout from '@/src/Layouts/RootLayout';
import { signIn } from "next-auth/react";


const LoginPage = () => {
    return (
        <section>
            <div className="flex flex-col justify-center min-h-screen sm:py-12">
                <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
                    <div className="flex justify-center mb-5 text-2xl font-bold text-center items-cener">
                        <Link href="/">
                            <Image src={Logo} alt="logo" width={200} />
                        </Link>
                    </div>
                    <div className="w-full bg-white divide-y divide-gray-200 rounded-lg shadow">
                        <div className="p-5">
                            <div className="flex flex-wrap items-center justify-center gap-2">
                                <button
                                    type="button"
                                    className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center flex items-center gap-2 justify-center"
                                    onClick={() => signIn("google", {
                                        callbackUrl: "http://localhost:3000/",
                                    })}
                                >
                                    <FaGoogle />
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center  flex justify-center items-center gap-2"
                                    onClick={() => signIn("github", {
                                        callbackUrl: "http://localhost:3000/",
                                    })}
                                >
                                    <FaGithub />
                                    Github
                                </button>
                            </div>
                        </div>
                        <div className="py-5">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="text-center sm:text-left whitespace-nowrap">
                                    <button className="flex gap-2 px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset itmes-center">
                                        <FaUnlockAlt className="text-2xl" />
                                        <span className="inline-block ml-1">Forgot Password</span>
                                    </button>
                                </div>
                                <div className="text-center sm:text-right whitespace-nowrap">
                                    <button className="flex gap-2 px-5 py-4 mx-5 text-sm font-normal text-gray-500 transition duration-200 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset itmes-center">
                                        <FaUniversalAccess className="text-2xl " />
                                        <span className="inline-block ml-1">Help</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <Link href='/' className="flex items-center gap-2">
                                    <FaArrowLeft className="text-2xl" />
                                    <span className="inline-block ml-1">Back to home page</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;


LoginPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
