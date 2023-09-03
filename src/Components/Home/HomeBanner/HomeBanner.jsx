import { HomeBannerPc } from '@/src/Assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HomeBanner = () => {
    return (
        <section className='banner-container'>
            <div className="flex items-center justify-between gap-4 md:flex-row banner-content">
                <div className="banner-image">
                    <Image src={HomeBannerPc} alt="Pc Builder Image" />
                </div>
                <div className="flex flex-col gap-6 banner-text">
                    <h3 className="text-[2rem] md:text-[3.5rem] font-bold">
                        Custom Build Your Desktop With Us!
                    </h3>

                    <div>
                        <Link href={'/pc-builder'} className='p-4 text-2xl common-btn'>
                            PC Builder
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;