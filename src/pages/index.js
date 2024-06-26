import React from 'react'
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import Seo from '../components/Seo'
import Header from '../components/Header'
import WhatsappIcon from '../components/WhatsappIcon'
import Especialidades from '../components/PaginaInicial/Especialidades'
import Servicos from '../components/PaginaInicial/Servicos'
import Sobre from '../components/PaginaInicial/Sobre'
import Footer from '../components/Footer'
import ProvasSociais from '../components/PaginaInicial/ProvasSociais'
import Banner from '../images/bannerHome.jpg'

const Index = () => {
    return (
        <div className='bg-gray-100 font-montserrat'>
            <Seo title='' description='' />
            {/* MENUS + BANNER BLOG */}
            {/*<div className="sm:static relative font-montserrat bg-[#4b253c] py-28 sm:py-0 sm:-mb-44">
                <img src={Banner} alt='homem de óculos' className='absolute inset-0 sm:inset-y-28 h-full w-full object-cover opacity-10 sm:opacity-100'/>
                <div className='sm:absolute sm:inset-0 sm:mt-10 mx-8 sm:mx-20'>
                <p class="mt-8 sm:mt-48 lg:mt-60 mr-20 sm:mr-0 text-base text-[#c996bf] sm:text-[#4b253c] font-semibold sm:text-2xl mb-2 sm:mb-4">Contabilidade com sede em Benedito Novo</p>
                <h2 class="text-xl mr-4 sm:mr-0 max-w-lg sm:text-2xl font-bold text-[#e4d5e7] sm:text-[#884970] mb-2">NOSSO PROPÓSITO É TRANSFORMAR A SUA EMPRESA EM UM NEGÓCIO DE SUCESSO!</h2>
                <p class="mt-0 max-w-lg text-[#d4abcc] sm:text-[#4b253c] text-base sm:text-lg">Soluções completas para a gestão contábil, fiscal e financeira da sua empresa.</p>
                <div class="mt-10">
                    <Link
                        to='../../servicos'
                        className='rounded-full bg-[#351a2a] sm:bg-[#4b253c] drop-shadow-2xl px-6 sm:px-10 py-4 text-xl sm:text-xl  text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Nossos serviços
                        <span aria-hidden='true'> &rarr;</span>
                    </Link>
                    
                </div>
                <div class="mt-10 sm:-mt-7 sm:mx-60">
                    <Link
                        to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
                        target='_blank'
                        className='mx-0 sm:mx-10 rounded-full bg-[#351a2a] sm:bg-[#864b6e] drop-shadow-2xl px-6 sm:px-10 py-4 text-xl sm:text-xl text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Fale conosco!
                    </Link>
                </div>
                </div>
            </div>
            <Header></Header> */}

            <div className='mt-28 relative bg-[#4b253c] py-32 sm:py-56 2xl:py-80'>
                <img src={Banner} alt='Equipe Escoben' className='opacity-25 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>AJUSTAR</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>BANNER</p>
                {/*
                <p class="mt-10 mx-auto text-center font-montserrat sm:text-2xl font-bold text-[#e4d5e7] max-w-2xl text-base">Contabilidade com sede em Benedito Novo</p>
                <h2 class="mt-4 mx-auto text-center font-montserrat text-xl sm:text-2xl font-bold text-[#e4d5e7] max-w-2xl">NOSSO PROPÓSITO É TRANSFORMAR A SUA EMPRESA EM UM NEGÓCIO DE SUCESSO!</h2>
                <p class="mt-4 mx-auto text-center font-montserrat text-xl sm:text-2xl font-bold text-[#e4d5e7] max-w-2xl">Soluções completas para a gestão contábil, fiscal e financeira da sua empresa.</p>
                */}
             
            </div>
            <Header></Header>

            
            <WhatsappIcon></WhatsappIcon>
            <Especialidades></Especialidades>
            <Servicos></Servicos>
            <ProvasSociais></ProvasSociais>
            <div class="mx-auto text-center mt-24 -mb-6">
                <h2 class="text-4xl sm:text-7xl font-bold text-[#e6d4e2]">SOBRE NÓS</h2>
                <p class="mt-0 text-xl font-semibold text-gray-900 sm:text-3xl">Conheça a Escoben</p>
            </div>
            <Sobre></Sobre>
            <Footer></Footer>
        </div>
    )
}

export default Index