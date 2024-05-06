import React from 'react';
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import Header from './Header.js'
import Footer from './Footer.js';
import Formulario from './Formulario.js';
import Logo from '../images/logoHorizRoxa.png'
import Banner from '../images/bannerEspecialidades.jpg'

const PaginaEspecialidades = () => {
    return (
        <div>
            {/* MENUS + BANNER ESPECIALIDADES */}
            <div className='relative bg-[#633259] py-32 sm:py-56'>
                <img src={Banner} alt='mesa com papéis' className='opacity-25 absolute inset-0 h-full w-full object-cover' />
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>ESPECIALIDADES</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>Serviços de Contabilidade Especializados</p>
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
                        <p className='lg:ml-0 ml-14 mr-6 text-xl sm:text-2xl font-montserrat leading-6 text-black'>Atendemos de forma personalizada empresas do <b>Lucro Real, Presumido, e Simples Nacional de todos os setores</b>, realizando o melhor planejamento tributário.</p>
                    </div>
                </div>
            </div>

            {/* SERVICOS + TOPICOS */}
            <div className='mx-auto max-w-5xl -mt-10 font-montserrat'>
                <div className='mx-auto isolate mt-10 grid max-w-80 grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:max-w-none xl:grid-cols-3'>

                    <div className='rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-2' src='https://img.icons8.com/ios-glyphs/90/refund-2.png' alt='refund-2' />
                            <h2 className='text-xl font-semibold text-center leading-7 text-gray-900'>
                                CONTABILIDADE PARA COMÉRCIO
                            </h2>
                        </div>
                        <ul className='mt-4 space-y-4 text-lg leading-6 text-gray-600'>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Supermercado
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Restaurantes
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Roupas e Acessórios
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Bar e Lanchonetes
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Farmácia
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Veículos
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Materiais de Construção
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Brinquedos
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Eletrônicos
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Entre outros
                            </li>
                        </ul>
                    </div>

                    <div className='rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-2' src='https://img.icons8.com/ios/100/service--v1.png' alt='service--v1' />
                            <h2 className='text-xl font-semibold text-center leading-7 text-gray-900'>
                                CONTABILIDADE PARA SERVIÇOS
                            </h2>
                        </div>
                        <ul className='mt-4 space-y-4 text-lg leading-6 text-gray-600'>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Administradora de Bens
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Advocacia
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Arquitetura
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Clínica Médica
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Consultório Odontológico
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Agência de Publicidade
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Domésticas
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Condomínios
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Engenharia
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Entre outros
                            </li>
                        </ul>
                    </div>

                    <div className='rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-2' src='https://img.icons8.com/ios/100/workers-male.png' alt='workers-male' />
                            <h2 className='text-xl font-semibold text-center leading-7 text-gray-900'>
                                CONTABILIDADE PARA INDÚSTRIA
                            </h2>
                        </div>
                        <ul className='mt-4 space-y-4 text-lg leading-6 text-gray-600'>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Alimentos
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Construção
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Embalagens
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Energia
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Equipamentos em geral
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Têxtil
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Máquinas
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Móveis
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Auto Peças
                            </li>
                            <li className='flex gap-x-1'>
                                <svg className='h-6 w-5 flex-none text-[#793486]' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                                    <path fill-rule='evenodd' d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z' clip-rule='evenodd' />
                                </svg>
                                Entre outros
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className='mt-16 sm:mt-20 mb-20 text-center'>
                <Link
                    to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)}
                    target='_blank'
                    className='rounded-full bg-[#633259] drop-shadow-2xl px-6 sm:px-16 py-4 text-xl sm:text-2xl mb-8 font-semibold text-white shadow-sm hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                >
                    Fale com um especialista
                    <span aria-hidden='true'> &rarr;</span>
                </Link>
            </div>

            {/* FORMULARIO */}
            <div className='mt-20 sm:mt-32 mx-auto text-center'>
                <h2 className='text-3xl sm:text-6xl font-bold text-[#e6d4e2] '>ENTRE EM CONTATO</h2>
                <p className='text-lg sm:text-xl font-semibold text-[#392c3b] mx-10 sm:mx-0'>Mande-nos uma mensagem. Responderemos diretamente no seu e-mail!</p>
            </div>
            <Formulario></Formulario>

            <Footer></Footer>
        </div>
    )
}

export default PaginaEspecialidades;