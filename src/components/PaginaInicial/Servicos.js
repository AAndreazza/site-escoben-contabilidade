import React from 'react'
import { Link } from 'gatsby'

const Servicos = () => {
    return (
        <div className='py-8 sm:py-10 font-montserrat'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto text-center px-0'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#e6d4e2]'>SERVIÇOS</h2>
                    <p className='mt-0 text-xl font-semibold text-gray-900 sm:text-3xl'>Nossos Serviços</p>
                    <div className='mt-6 border-t-2 border-gray-900/10 pt-6 sm:mt-8 lg:mt-8 mx-11'></div>
                    <p className='text-base text-gray-900 sm:text-xl'><b>Uma solução completa</b> para a gestão contábil, fiscal e financeira da sua empresa</p>
                </div>

                <div className='py-12'>
                    <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                        <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/cash-receipt.png' alt='cash-receipt' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Contabilidade</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Cumpriremos todas as suas obrigações contábeis e burocráticas.</dd>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/receipt-approved.png' alt='receipt-approved' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Gestão Fiscal</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Cumpriremos todas as suas obrigações fiscais, realizando todo o controle e orientação.</dd>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/lawyer.png' alt='lawyer' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Gestão Trabalhista e Previdenciária</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Cumpriremos todas as suas obrigações trabalhistas, realizando todo o controle e orientação.</dd>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/crowdfunding.png' alt='crowdfunding' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Gestão Societária e Outros Serviços</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Abertura de empresa, consultoria empresarial, regularização de empresas, etc.</dd>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/fund-accounting.png' alt='fund-accounting' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Controle dos Investimentos na Bolsa de Valores</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Calculamos as guias de impostos a pagar, além de controlar a rentabilidade da sua carteira.</dd>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/get-cash--v1.png' alt='get-cash--v1' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Imposto de Renda da Pessoa Física</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Fazemos a declaração do imposto de renda, carnê-leão, ganho de capital, regularização de CPF e cáculo de impostos.</dd>
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <img className='h-20 w-20 mr-6' src='https://img.icons8.com/ios/100/bullish--v1.png' alt='bullish--v1' />
                                <div>
                                    <dt className='text-xl sm:text-2xl font-bold leading-7 text-[#633259]'>Consultoria & Treinamentos</dt>
                                    <dd className='mt-2 text-lg leading-7 text-gray-800'>Ganhe velocidade e conhecimento para aumentar o faturamento da sua empresa. Consultorias nas áreas fiscal, tributária, contábil e trabalhista.</dd>
                                </div>
                            </div>

                            <div className='flex items-center ml-0 sm:ml-20 text-center'>
                                <Link
                                    to='../../servicos'
                                    className='rounded-full bg-[#633259] drop-shadow-2xl px-8 py-4 mb-8 text-xl font-semibold text-white shadow-sm hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    Veja todos os nossos serviços
                                    <span aria-hidden='true'> &rarr;</span>
                                </Link>
                            </div>


                        </dl>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Servicos;