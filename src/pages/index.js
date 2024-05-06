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
import Banner from '../images/banner.png'

const Index = () => {
    return (
        <div className='bg-gray-100 font-montserrat'>
            <Seo title='' description='' />
            {/* MENUS + BANNER BLOG */}
            <div className="sm:static relative font-montserrat bg-[#633259] py-28 sm:py-0 sm:-mb-44">
                <img src={Banner} alt='homem de óculos' className='absolute inset-0 sm:inset-y-28 h-full w-full object-cover opacity-10 sm:opacity-100'/>
                <div className='sm:absolute sm:inset-0 sm:mt-10 mx-8 sm:mx-20'>
                <p class="mt-8 sm:mt-48 lg:mt-60 text-base text-[#c996bf] sm:text-[#633259] font-semibold sm:text-2xl mb-2 sm:mb-4">Contabilidade em Benedito Novo</p>
                <h2 class="text-xl mr-4 sm:mr-0 max-w-lg sm:text-2xl font-bold text-[#e4d5e7] sm:text-[#a7668d] mb-2">NOSSO PROPÓSITO É TRANSFORMAR A SUA EMPRESA EM UM NEGÓCIO DE SUCESSO!</h2>
                <p class="mt-0 max-w-lg text-[#d4abcc] sm:text-[#633259] text-base sm:text-lg">Soluções completas para a gestão contábil, fiscal e financeira da sua empresa.</p>
                <div class="mt-10">
                    <Link
                        to='../../servicos'
                        className='rounded-full bg-[#ac699f] sm:bg-[#633259] drop-shadow-2xl px-6 sm:px-10 py-4 text-xl sm:text-xl  text-white shadow-sm hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Nossos serviços
                        <span aria-hidden='true'> &rarr;</span>
                    </Link>
                    
                </div>
                <div class="mt-10 sm:-mt-7 sm:mx-60">
                    <Link
                        to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
                        target='_blank'
                        className='mx-0 sm:mx-10 rounded-full bg-[#c288b5] sm:bg-[#ac699f] drop-shadow-2xl px-6 sm:px-10 py-4 text-xl sm:text-xl text-white shadow-sm hover:bg-[#b680ad] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Fale conosco!
                    </Link>
                </div>
                </div>
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