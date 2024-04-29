import React from 'react';
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import Header from './Header.js'
import Footer from './Footer.js';
import Logo from '../images/LogoTeste.png'

const PaginaContato = () => {
    return (
        <div>
            {/* MENUS + BANNER CONTATO */}
            <div className='bg-[#4f2158] py-32 sm:py-44'>
                <h2 className='mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]'>CONTATO</h2>
                <p className='mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]'>Fale conosco</p>
                <Header></Header>
            </div>

            {/* LOGO + TEXTO */}
            <div className='bg-white py-20'>
                <div className='mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12'>
                    <div className='col-span-12 lg:col-span-5 mx-auto mb-5 sm:mb-0 sm:ml-32'>
                        <img src={Logo} alt='Logo Escoben Contabilidade' />
                    </div>
                    <div className='ml-5 h-22 w-2 bg-[#dbbee0]'></div>
                    <div className='col-span-11 lg:col-span-6'>
                        <p className='mx-4 sm:ml-0 ml-12 text-xl sm:text-2xl font-montserrat leading-6 text-black'><b>Quer saber como a Escoben pode ajudar no crescimento da sua empresa?</b> Entre em contato através de um dos meios abaixo e fale com os nossos especialistas.</p>
                    </div>
                </div>
            </div>

            {/* FORMULARIO + CONTATOS */}
            <div className='flex flex-col md:flex-row'>

                {/* FORMULARIO */}
                <div className='isolate px-6 mb-20 lg:px-20 font-montserrat'>

                    <form action='https://formsubmit.co/alanaandreazza26@gmail.com' method='POST' className='mx-auto max-w-xl rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl'>
                        <input type='text' name='nome' id='nome' autocomplete='given-name' placeholder='Nome completo' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-3 sm:mt-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        <input type='email' name='email' id='email' autocomplete='email' placeholder='E-mail' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-3 sm:mt-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        <input type='tel' name='telefone' id='telefone' autocomplete='tel' placeholder='Celular com DDD' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-3 sm:mt-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        <textarea name='mensagem' id='mensagem' rows='4' placeholder='Mensagem' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 sm:py-3 sm:mt-4  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                        <input type='hidden' name='_next' value='http://localhost:8000/especialidades/' />
                        <input type='hidden' name='_captcha' value='false' />

                        <div className='mt-10 sm:mt-10 mb-10 text-center'>
                            <button
                                type='submit'
                                className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 sm:px-36 sm:py-5 font-semibold text-lg text-white shadow-sm hover:bg-[#b05fc0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                            >
                                Enviar mensagem
                            </button>
                        </div>
                    </form>
                </div>

                {/* CONTATOS */}

                <ul className='space-y-6 font-montserrat mb-5'>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Telefone</span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'
                                    className='h-7 w-6 text-[#4f2158]'>
                                    <path
                                        stroke-linecap='round' stroke-linejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' />
                                </svg>
                            </dt>
                            <dd className='text-xl text-[#4f2158]' to='#' >+55 47 3385-0127</dd>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Whatsapp</span>
                                <Link to=''>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-7 w-6 text-[#4f2158]'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                                    </svg>
                                </Link>
                            </dt>
                            <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='_blank'>
                                <dd className='text-xl text-[#4f2158]' >+55 47 99177-4139</dd>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Email</span>
                                <Link to='mailto:adicionar'>
                                    <svg className='h-7 w-6 text-[#4f2158]' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                                    </svg>
                                </Link>
                            </dt>
                            <dd><Link to='mailto:adicionar' className='text-xl text-[#4f2158]'>contato@escoben.com.br</Link></dd>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Instagram</span>
                                <Link to={URLS.instagram}>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-7 w-6 text-[#4f2158]'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                    </svg>
                                </Link>
                            </dt>
                            <Link to={URLS.instagram} target='_blank'>
                                <dd className='text-xl text-[#4f2158]' >@escoben_contabilidade</dd>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Endereco</span>
                                <Link to='https://maps.app.goo.gl/TyZXexCdy5FzSrjT8'>
                                    <svg className='h-7 w-6 text-[#4f2158]' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path stroke-linecap='round' stroke-linejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z' />
                                    </svg>
                                </Link>
                            </dt>
                            <Link to='https://maps.app.goo.gl/TyZXexCdy5FzSrjT8'>
                                <dd className='text-xl text-[#4f2158]'>R. Celso Ramos, 4225 - 2º piso - Centro, Benedito Novo - SC, 89124-000</dd>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4'>
                            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6078280953966!2d-49.3633904!3d-26.7887682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94def80097e2cb35%3A0x1bb231a9ad2ef13d!2sEscoben%20Contabilidade%20S%2FS!5e0!3m2!1spt-BR!2sbr!4v1712601479926!5m2!1spt-BR!2sbr'
                                width='600'
                                height='300'
                                className='w-full mx-auto max-w-[22rem] lg:max-w-[53.25rem] mb-10'
                                allowfullscreen=''
                                loading='lazy'
                                referrerpolicy='no-referrer-when-downgrade'
                                title='Mapa da localização da Escoben Contabilidade'>
                            </iframe>
                        </div>
                    </li>

                </ul>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default PaginaContato;