import React from "react";

const AboutUs = () => {
    return (
        <section
            id='aboutus'
            className='max-container padding-container flex flex-col xl:flex-row border-2 border-blue-400'
        >
            <div className='relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-pattern bg-cover bg-center bg-no-repeat px-6 py-12 text-black'>
                <div className='flex flex-row justify-around'>
                    <h2 className='flex text-5xl w-full px-96 font-bold'>
                        Somos una agencia creativa expecializada en productos
                        comunicativos que tengan un impacto positivo en el
                        posicionamiento de tu marca y tu movimiento...
                    </h2>
                    <div className='flex flex-col gap-5'>
                        <div className=' border-2 border-black w-56 h-60'></div>
                        <div className=' border-2 border-black w-56 h-96'></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
