import React from "react";

const AboutUs = () => {
    return (
        <section
            id='aboutus'
            className='flex items-center justify-center flex-col'
        >
            <div className='px-10 lg:px-44 3xl:px-0 mx-auto max-w-[1440px] w-full pb-24 pt-56'>
                <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
                    <h2 className='text-lg font-semibold leading-[120%] lg:text-5xl lg:font-semibold lg:leading-[120%] xl:max-w-[390px]'>
                        Somos una agencia creativa especializada en productos
                        comunicativos que tengan un impacto positivo en el
                        posicionamiento de tu marca y tu movimiento...
                    </h2>
                    <div className='flex flex-col gap-10 lg:gap-10 xl:max-w-[520px]'>
                        <div className=' bg-gray-100 w-44 h-44 border-2 border-blue-500'></div>
                        <div className=' bg-gray-100 w-44 h-[30rem] border-2 border-blue-500'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
