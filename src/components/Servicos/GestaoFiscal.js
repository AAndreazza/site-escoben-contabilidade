import React from 'react';
import { Link } from 'gatsby'
import { getWhatsUrl } from '../../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import Servico from '../../images/gestaoFiscal.png'

const GestaoFiscal = () => {
    return (
        <div className='font-montserrat mt-20 sm:mt-10'>
            <div className='max-w-7xl ml-0 sm:-ml-10 px-8 sm:px-40'>
                <div className='grid lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
                    <img src={Servico}
                        alt=''
                        className='hidden lg:block lg:w-80 lg-h-80 lg:mt-20 sm:ml-20 xl:row-span-2 xl:row-end-2'
                    />
                    <div className='max-w-xl lg:mt-0 xl:col-start-2 xl:col-end-3 xl:row-start-1'>
                        <h1 className='text-3xl font-bold text-[#55274c] sm:text-4xl lg:col-span-2 xl:col-auto'>GESTAO FISCAL</h1>
                        <ul className='mt-6 space-y-4 text-lg leading-6 text-gray-600'>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                SPED Fiscal e Contribuições
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Defesas Fiscais Administrativas
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Auditoria Fiscal (Obrigações, SPED, Produtos, etc)
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Benefícios Fiscais e Regimes Especiais
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Consultoria Tributária
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Apuração dos Tributos
                            </li>

                        </ul>
                        <div className='mt-10 text-center'>
                            <Link
                                to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGestaoFiscal)}
                                target='_blank'
                                className='rounded-full bg-[#633259] px-4 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-white hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                            >
                                Fale com um especialista
                                <span aria-hidden='true'> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GestaoFiscal;