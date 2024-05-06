import React from 'react';
import { Link } from 'gatsby'
import { getWhatsUrl } from '../../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import Servico from '../../images/contabilidade.png'

const Contabilidade = () => {
    return (
        <div className='mx-auto max-w-7xl px-8 sm:px-40'>
            <div className='grid lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8'>
                <h1 className='text-3xl font-bold text-[#55274c] sm:text-4xl lg:col-span-2 xl:col-auto'>CONTABILIDADE</h1>
                <div className='mt-6 max-w-xl lg:mt-2 xl:col-end-1 xl:row-start-1'>
                    <ul className='space-y-4 text-lg leading-6 text-gray-800'>
                        <li className='flex gap-x-1'>
                            <svg className='h-6 w-5 flex-none text-[#633259]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                            </svg>
                            Demonstrações Financeiras
                        </li>
                        <li className='flex gap-x-1'>
                            <svg className='h-6 w-5 flex-none text-[#633259]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                            </svg>
                            Análise das Demonstrações Financeiras
                        </li>
                        <li className='flex gap-x-1'>
                            <svg className='h-6 w-5 flex-none text-[#633259]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                            </svg>
                            Auditoria Contábil
                        </li>
                        <li className='flex gap-x-1'>
                            <svg className='h-6 w-5 flex-none text-[#633259]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                            </svg>
                            SPED Contábil
                        </li>
                        <li className='flex gap-x-1'>
                            <svg className='h-6 w-5 flex-none text-[#633259]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                            </svg>
                            Consultoria Contábil
                        </li>
                        <li className='flex gap-x-1'>
                            <svg className='h-6 w-5 flex-none text-[#633259]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                            </svg>
                            Controle Patrimonial
                        </li>

                    </ul>

                    <div className='mt-10 text-center'>
                        <Link
                            to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaContabilidade)}
                            target='_blank'
                            className='rounded-full bg-[#633259] px-4 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-white hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                        >
                            Fale com um especialista
                            <span aria-hidden='true'> &rarr;</span>
                        </Link>
                    </div>
                </div>
                <img src={Servico}
                    alt=''
                    className='hidden lg:block lg:w-80 lg-h-80 lg:ml-20 lg:mt-10 xl:row-span-2 xl:row-end-2'
                />
            </div>
        </div>
    )
}

export default Contabilidade;