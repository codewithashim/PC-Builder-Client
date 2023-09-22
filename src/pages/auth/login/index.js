import { FaUnlockAlt, FaUniversalAccess, FaArrowLeft, FaGoogle, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import RootLayout from '@/src/Layouts/RootLayout';
import { signIn } from "next-auth/react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { PC_Builder_Logo } from '@/src/Assets';


const LoginPage = () => {
    return (
        <section>
            <div className="flex flex-col justify-center sm:py-12">
                <div className="p-10 mx-auto xs:p-0 md:w-full md:max-w-md">
                    <div className="flex justify-center mb-5 text-2xl font-bold text-center items-cener">
                        <Link href="/">
                            <Image src={PC_Builder_Logo} alt="logo" width={200} />
                        </Link>
                    </div>
                    <div className="w-full bg-white divide-y divide-gray-200 rounded-lg shadow">
                        <div className="p-5">
                            <div className="flex flex-wrap items-center justify-center gap-6">
                            <GoogleOutlined
                                onClick={() => signIn("google", {
                                callbackUrl: `/`,
                                })}
                                style={{
                                    fontSize: "50px",    
                                }}    
                            />
                            <GithubOutlined onClick={() => signIn("github", {
                                callbackUrl: `/`,
                            })} 
                            style={{
                                fontSize: "50px",    
                            }}    
                            />
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
