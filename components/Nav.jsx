const Nav = () => {
    return (
        <nav className=' bg-black flex gap-5 md:pb-14 lg:pt-24 pr-10 justify-end font-light text-xs lg:text-lg z-[99999]'>
            <a href='#homepage' className='text-gray-100 hidden md:block'>
                Bienvenido
            </a>
            <a href='#aboutus' className='text-gray-100 hidden md:block'>
                Quienes Somos
            </a>
            <a href='#work' className='text-gray-100 hidden md:block'>
                Nuestro trabajo
            </a>
            <a href='#services' className='text-gray-100 hidden md:block'>
                Contacto
            </a>
        </nav>
    );
};

export default Nav;
