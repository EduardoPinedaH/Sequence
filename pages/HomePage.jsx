import Image from "next/image";
import React from "react";
import HeroOverlay from "../public/Hero.png";

const HomePage = () => {
    return (
        <section
            id='homepage'
            className='max-container padding-container flex flex-col xl:flex-row min-h-screen'
        >
            <div className='relative flex flex-1 flex-col xl:w-1/2'>
                <iframe
                    src='https://player.cloudinary.com/embed/?public_id=sequence%2FDemo&cloud_name=dysfrid9h&player[controls]=false&player[muted]=muted&player[floatingWhenNotVisible]=right&player[hideContextMenu]=true&player[autoplayMode]=on-scroll&player[autoplay]=true&player[loop]=true'
                    className='w-[100vw] md:h-[865px] lg:h-[865px] min-[2560px]:h-[1440px] hidden md:block object-contain '
                ></iframe>
                <Image
                    src={HeroOverlay}
                    alt='heroimg'
                    width={2560}
                    height={1080}
                    className='absolute z-[99999] xl:scale-110'
                />
            </div>
        </section>
    );
};

export default HomePage;
