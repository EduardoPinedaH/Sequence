const Nav = () => {
    return (
        <nav className=' bg-black flex gap-5 pb-14 pt-10 lg:pt-24 pr-10 justify-end font-light text-xs lg:text-lg z-[99999]'>
            <a href='#homepage' className='text-gray-100'>
                Bienvenido
            </a>
            <a href='#aboutus' className='text-gray-100'>
                Quienes Somos
            </a>
            <a href='#work' className='text-gray-100'>
                Nuestro trabajo
            </a>
            <a href='#services' className='text-gray-100'>
                Contacto
            </a>
        </nav>
    );
};

export default Nav;
