import React from 'react';
import { Link } from 'gatsby'
import { getWhatsUrl } from '../../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import Servico from '../../images/controleInvestimentos.webp'

const ControleInvestimentos = () => {
    return (
        <div className='font-montserrat mt-20 sm:mt-20'>
            <div className='mx-auto max-w-7xl px-8 sm:px-40'>
                <div className='grid lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
                    <h1 className='text-3xl font-bold text-[#4b253c] sm:text-4xl lg:col-span-2 xl:col-auto' id='controleInvestimentos'>CONTROLE DOS <br />INVESTIMENTOS <br />NA BOLSA DE VALORES</h1>
                    <div className='mt-6 max-w-xl lg:mt-2 xl:col-end-1 xl:row-start-1'>
                        <h2 className='text-lg leading-7 text-gray-800'>
                            Para a realização desse serviço, <br />entre em contato conosco.
                        </h2>

                        <div className='mt-10 text-center'>
                            <Link
                                to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaControleInvestimento)}
                                target='_blank'
                                className='rounded-full bg-[#4b253c] px-4 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-white hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                            >
                                Fale com um especialista
                                <span aria-hidden='true'> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <img src={Servico}
                        alt=''
                        className='hidden lg:block lg:w-80 lg-h-80 lg:-mt-5 lg:ml-20 xl:row-span-2 xl:row-end-2'
                    />
                </div>
            </div>
        </div>
    )
}

export default ControleInvestimentos;