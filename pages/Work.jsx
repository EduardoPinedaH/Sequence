"use client";

import { CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";
import React from "react";

const Work = () => {
    return (
        <section
            id='work'
            className='flex items-center justify-center flex-col'
        >
            <div className='px-10 lg:px-44 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24 pt-10'>
                <div className='flex flex-wrap justify-between gap-5 lg:gap-10 pb-10'>
                    <div className='flex flex-col gap-10 lg:gap-20 xl:max-w-[520px]'>
                        <h2 className='text-lg font-semibold leading-[120%] lg:text-7xl lg:font-semibold lg:leading-[120%] xl:max-w-[390px] tracking-widest'>
                            NUESTRO TRABAJO
                        </h2>
                        <div className='flex flex-col gap-5 lg:gap-10 xl:max-w-[520px]'>
                            <div className=' bg-gray-100 w-[30rem] h-auto '>
                                <iframe
                                    src='https://player.cloudinary.com/embed/?public_id=sequence%2Fvid1&cloud_name=dysfrid9h&player[muted]=false&player[width]=640&player[height]=360&player[floatingWhenNotVisible]=right&player[hideContextMenu]=true&player[loop]=true'
                                    width='1920'
                                    height='1080 '
                                    style={{
                                        height: "auto",
                                        width: "100%",
                                        aspectRatio: "1920/1080",
                                        cursor: "pointer",
                                    }}
                                    allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
                                    allowfullscreen
                                    frameborder='0'
                                    className='border-2 border-blue-500'
                                ></iframe>
                            </div>
                            <div className=' bg-gray-100 w-full h-[12rem] border-2 border-blue-500'></div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-10 lg:gap-20 xl:max-w-[520px]'>
                        <div className=' bg-gray-100 w-[30rem] h-[40rem] border-2 border-blue-500'></div>
                    </div>
                </div>
                <div className=' bg-gray-100 w-full h-48 border-2 border-blue-500'></div>
            </div>
        </section>
    );
};

export default Work;
