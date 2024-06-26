import React from 'react';
import Header from './Header.js'
import Sobre from './PaginaInicial/Sobre.js';
import Footer from './Footer.js';
import Formulario from './Formulario.js';
import Banner from '../images/bannerSobre.jpg'

const PaginaSobre = () => {
    return (
        <div>
            {/* MENUS + BANNER ESPECIALIDADES */}
            <div className='relative bg-[#4b253c] px-6 py-36 sm:py-56 2xl:py-80 lg:px-8'>
                <img src={Banner} alt='duas pessoas rindo' className='opacity-25 absolute inset-0 h-full w-full object-cover'/>
                <h2 className='mt-10 mx-auto text-center font-montserrat text-4xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>SOBRE NÓS</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-lg sm:text-3xl font-bold text-[#e4d5e7]'>Conheça a Escoben</p>
                <Header></Header>
            </div>

            {/* LOGO + SOBRE */}
            <Sobre></Sobre>

            {/* FORMULARIO */}
            <div className='mt-20 sm:mt-32 mx-auto text-center'>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#e6d4e2]'>ENTRE EM CONTATO</h2>
                <p className='text-lg sm:text-xl font-semibold text-[#392c3b] mx-10 sm:mx-0'>Mande-nos uma mensagem. Responderemos diretamente no seu e-mail!</p>
            </div>
            <Formulario></Formulario>

            <Footer></Footer>
        </div>
    )
}

export default PaginaSobre;