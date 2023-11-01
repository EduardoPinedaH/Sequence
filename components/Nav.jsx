import Image from "next/image";

const Nav = () => {
    return (
        <nav className=' bg-black flex gap-5 pt-24 pr-10 justify-end font-bold'>
            <a href='#homepage' className='text-white'>
                Bienvenido
            </a>
            <a href='#aboutus' className='text-white'>
                Quienes Somos
            </a>
            <a href='/' className='text-white'>
                Nuestro trabajo
            </a>
            <a href='/' className='text-white'>
                Contacto
            </a>
        </nav>
    );
};

export default Nav;
