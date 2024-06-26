import React from 'react';
import { Link } from 'gatsby'
import { getWhatsUrl } from '../../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../../utils/constants'
import Servico from '../../images/gestaoSocietaria.png'

const GestaoSocietaria = () => {
    return (
        <div className='font-montserrat mt-20 sm:mt-20'>
            <div className='max-w-7xl mx-auto px-8 sm:px-40'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-6 lg:gap-8 items-center justify-center'>
                    <img src={Servico}
                        alt='Gestao Societaria'
                        className='mx-auto lg:mx-0 lg:mt-20 lg:w-80 lg:h-80 hidden lg:block'
                    />
                    <div className='mx-auto lg:mx-0 lg:max-w-xl'>
                        <h1 className='text-3xl font-bold text-[#4b253c] sm:text-4xl' id='gestaoSocietaria'>GESTÃO SOCIETÁRIA E OUTROS SERVIÇOS</h1>
                        <ul className='mt-6 space-y-4 text-lg leading-6 text-gray-600'>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#4b253c]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Constituição, Alteração Contratual e Baixa de Empresas
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#4b253c]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Cadastros e atualizações federal, estadual e municipal
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#4b253c]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Cadastros em demais órgãos de classe, conforme necessidade de cada atividade
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#4b253c]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Solicitação e Renovação de Alvarás (Localização, Sanitário, Bombeiros e Policial)
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#4b253c]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Processo de assessoria em Licitações
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#4b253c]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Emissão e renovação de Certidões Negativas de Débitos 
                            </li>

                        </ul>
                        <div className='mt-10 text-center lg:text-left'>
                            <Link
                                to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaGestaoSocietaria)}
                                target='_blank'
                                className='rounded-full bg-[#4b253c] px-4 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-white hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
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

export default GestaoSocietaria;