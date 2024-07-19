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
import Banner from '../images/bannerHome.webp'

const Index = () => {
    return (
        <div className='bg-gray-100 font-montserrat'>
            <Seo title='Escoben Contabilidade' description='' />
            {/* MENUS + BANNER BLOG */}

            <div className='flex flex-col items-center justify-center min-h-screen -mt-10 sm:mt-0 sm:pt-20 2xl:-mt-28 mx-4 sm:mx-auto'>
                <p class="text-base text-[#4b253c] font-semibold sm:text-3xl 2xl:text-4xl mb-2 sm:mb-4 text-center">Contabilidade com sede em Benedito Novo</p>
                <h2 class="text-xl max-w-3xl 2xl:max-w-4xl sm:text-3xl 2xl:text-4xl font-bold text-[#884970] mb-2 text-center">NOSSO PROPÓSITO É TRANSFORMAR A SUA EMPRESA EM UM NEGÓCIO DE SUCESSO!</h2>
                <p class="mt-0 max-w-lg 2xl:max-w-2xl text-[#4b253c] text-base sm:text-xl 2xl:text-2xl text-center">Soluções completas para a gestão contábil, fiscal e financeira da sua empresa.</p>
                <div class="flex space-x-4 mt-4 sm:mt-10">
                    <Link
                        to='../../servicos'
                        className='rounded-full bg-[#351a2a] sm:bg-[#4b253c] drop-shadow-2xl px-6 sm:px-10 py-4 text-sm text-center sm:text-xl 2xl:text-2xl text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Nossos serviços
                        <span aria-hidden='true'> &rarr;</span>
                    </Link>
                    <Link
                        to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
                        target='_blank'
                        className='rounded-full bg-[#351a2a] sm:bg-[#864b6e] drop-shadow-2xl px-6 sm:px-10 py-4 text-sm text-center sm:text-xl 2xl:text-2xl text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Fale conosco!
                    </Link>
                </div>
            </div>

            <div className='-mt-36 sm:mt-0 2xl:-mt-28 relative bg-[#4b253c] py-32 sm:py-64 2xl:py-80'>
                <img src={Banner} alt='Equipe Escoben' className='absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>.</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>.</p>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7] hidden 2xl:block'>.</p>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7] hidden 2xl:block'>.</p>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7] hidden 2xl:block'>.</p>
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