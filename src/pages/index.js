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

const Index = () => {
    return (
        <div>
            <Seo title='' description='' />
            {/* MENUS + BANNER BLOG */}
            <div className="bg-[#4f2158] py-32 sm:py-44 font-montserrat">
                <p class="mt-4 sm:mt-0 mx-8 sm:mx-20 text-base text-[#daace4] font-semibold sm:text-2xl mb-2 sm:mb-4">Contabilidade em Benedito Novo</p>
                <h2 class="mx-8 sm:mx-20 text-xl max-w-3xl sm:text-3xl font-bold text-[#e4d5e7] mb-2">NOSSO PROPÓSITO É TRANSFORMAR A SUA EMPRESA EM UM NEGÓCIO DE SUCESSO!</h2>
                <p class="mx-8 sm:mx-20 mt-0 max-w-3xl text-[#e4d5e7] text-base sm:text-lg">Soluções completas para a gestão contábil, fiscal e financeira da sua empresa.</p>
                <div class="mt-10 mx-8 sm:mx-20">
                    <Link
                        to='../../servicos'
                        className='rounded-full bg-[#793486] drop-shadow-2xl px-6 sm:px-10 py-4 text-xl sm:text-xl  text-white shadow-sm hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Nossos serviços
                        <span aria-hidden='true'> &rarr;</span>
                    </Link>
                    
                </div>
                <div class="mt-10 sm:-mt-7 mx-8 sm:mx-80">
                    <Link
                        to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
                        target='_blank'
                        className='mx-0 sm:mx-10 rounded-full bg-[#a866b4] drop-shadow-2xl px-6 sm:px-10 py-4 text-xl sm:text-xl  text-white shadow-sm hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Fale conosco!
                    </Link>
                </div>
            </div>

            <Header></Header>
            <WhatsappIcon></WhatsappIcon>
            <Especialidades></Especialidades>
            <Servicos></Servicos>
            <ProvasSociais></ProvasSociais>
            <div class="mx-auto text-center mt-24 -mb-6">
                <h2 class="text-5xl sm:text-7xl font-bold text-[#e4d5e7]">SOBRE NÓS</h2>
                <p class="mt-0 text-xl font-semibold text-gray-900 sm:text-3xl">Conheça a Escoben</p>
            </div>
            <Sobre></Sobre>
            <Footer></Footer>
        </div>
    )
}

export default Index