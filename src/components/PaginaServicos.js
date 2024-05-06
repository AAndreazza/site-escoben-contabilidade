import React from 'react';
import Header from './Header.js'
import Footer from './Footer.js';
import Formulario from './Formulario.js'
import Logo from '../images/logoHorizRoxa.png'
import Contabilidade from './Servicos/Contabilidade.js';
import GestaoFiscal from './Servicos/GestaoFiscal.js';
import GestaoTrabalhista from './Servicos/GestaoTrabalhista.js';
import GestaoSocietaria from './Servicos/GestaoSocietaria.js';
import ControleInvestimentos from './Servicos/ControleInvestimentos.js';
import ImpostoRenda from './Servicos/ImpostoRenda.js';
import Consultoria from './Servicos/Consultoria.js';
import Banner from '../images/bannerServicos.jpg'

const PaginaServicos = () => {
    return (
        <div>
            {/* MENUS + BANNER SERVICOS */}
            <div className='relative bg-[#633259] py-32 sm:py-56'>
                <img src={Banner} alt='uma pessoa usando o notebook' className='opacity-25 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>SERVIÇOS</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>Nossos serviços</p>
                <Header></Header>
            </div>

            {/* LOGO + TEXTO */}
            <div className='py-20'>
                <div className='mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-12 lg:col-span-5 mx-auto mb-5 sm:mb-0 sm:ml-32'>
                        <img src={Logo} alt='Logo Escoben Contabilidade' className='w-80 h-20 mb-4 lg:w-90 lg:h-24 lg:mt-4' />
                    </div>
                    <div className='ml-5 h-22 w-2 bg-[#ddbed7]'></div>
                    <div className='col-span-11 lg:col-span-6'>
                        <p className='lg:max-w-lg lg:ml-0 ml-12 mr-6 text-xl sm:text-2xl font-montserrat leading-6 text-black'>Nosso propósito é <b>transformar a sua empresa em um negócio de sucesso</b>. Soluções completas para a sua gestão contábil, fiscal e trabalhista.</p>
                    </div>
                </div>
            </div>

            {/* SERVICOS */}
            <Contabilidade></Contabilidade>
            <GestaoFiscal></GestaoFiscal>
            <GestaoTrabalhista></GestaoTrabalhista>
            <GestaoSocietaria></GestaoSocietaria>
            <ControleInvestimentos></ControleInvestimentos>
            <ImpostoRenda></ImpostoRenda>
            <Consultoria></Consultoria>

            {/* FORMULARIO */}
            <div className='mt-20 sm:mt-24 mx-auto text-center'>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#e6d4e2] '>ENTRE EM CONTATO</h2>
                <p className='text-lg sm:text-xl font-semibold text-[#392c3b] mx-10 sm:mx-0'>Mande-nos uma mensagem. Responderemos diretamente no seu e-mail!</p>
            </div>
            <Formulario></Formulario>

            <Footer></Footer>
        </div>
    )
}

export default PaginaServicos;