import Image from "next/image";
import React from "react";

const HomePage = () => {
    return (
        <section
            id='homepage'
            className='max-container padding-container flex flex-col xl:flex-row'
        >
            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image
                    src='/Hero.png'
                    alt='heroimg'
                    width={1920}
                    height={1080}
                />
            </div>
        </section>
    );
};

export default HomePage;
