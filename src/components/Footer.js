import React from 'react'
import { Link } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import Logo from '../images/logoHorizBrancaCompleta.png'
import Icon from '../images/icon-clock.svg'

const Footer = () => {
    return (
        <footer className='bg-[#4b253c] font-montserrat'>
            <h2 id='footer-heading' className='sr-only'>Footer</h2>
            <div className='mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8 lg:py-12'>
                <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                    <ScrollLink to='inicial' spy={true} smooth={true} className='cursor-pointer'>
                        <img src={Logo} alt='Escoben Contabilidade' />
                    </ScrollLink>

                    <div className='grid grid-cols-2 xl:col-span-2'>
                        <ul className='space-y-6 mt-4 sm:ml-36'>
                            <li>
                                <a href='../sobre' className='text-xs sm:text-lg leading-6 text-gray-200'>Sobre</a>
                            </li>
                            <li>
                                <a href='../especialidades' className='text-xs sm:text-lg leading-6 text-gray-200'>Especialidades</a>
                            </li>
                            <li>
                                <a href='../servicos' className='text-xs sm:text-lg leading-6 text-gray-200'>Serviços</a>
                            </li>
                            <li>
                                <a href='../blog' className='text-xs sm:text-lg leading-6 text-gray-200'>Blog</a>
                            </li>
                            <li>
                                <a href='../contato' className='text-xs sm:text-lg leading-6 text-gray-200'>Contato</a>
                            </li>
                            <ul className='flex'>
                                <li className='mr-6'>
                                    <Link to={URLS.instagram} target='_blank'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-6 w-5 sm:h-7 sm:w-6 text-gray-200'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                        </svg>
                                    </Link>
                                </li>
                                <li className='mr-6'>
                                    <Link to={URLS.facebook} target='_blank'>
                                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' className='h-6 w-6 sm:h-7 sm:w-7 text-gray-200'
                                            fill='currentColor'>
                                            <path d='M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z'></path>
                                        </svg>
                                    </Link>
                                </li>
                                <li className='hidden sm:block'>
                                    <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='_blank'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-6 w-5 sm:h-7 sm:w-6 text-gray-200'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'>
                                            <path
                                                d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                        

                        <ul className='mt-6 space-y-6'>
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Telefone</span>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'
                                            className='h-6 w-5 sm:h-7 sm:w-6 text-gray-200'>
                                            <path
                                                stroke-linecap='round' stroke-linejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' />
                                        </svg>
                                    </dt>
                                    <dd className='text-gray-200 text-xs sm:text-lg' to='#' >+55 47 3385-0127</dd>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Whatsapp</span>
                                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='_blank'>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                className='h-6 w-5 sm:h-7 sm:w-6 text-gray-200'
                                                fill='currentColor'
                                                viewBox='0 0 24 24'>
                                                <path
                                                    d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                                            </svg>
                                        </Link>
                                    </dt>
                                    <Link
                                        to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='_blank'>
                                        <dd className='text-gray-200 text-xs sm:text-lg' to='#' >+55 47 99177-4139</dd>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Email</span>
                                        <Link to='mailto:adicionar' className=''>
                                            <svg className='h-6 w-5 sm:h-7 sm:w-6 text-gray-200' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                                <path stroke-linecap='round' stroke-linejoin='round' d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
                                            </svg>
                                        </Link>
                                    </dt>
                                    <dd><Link to='mailto:adicionar' className='text-gray-200 text-xs sm:text-lg'>contato@escoben.com.br</Link></dd>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Endereco</span>
                                        <Link to='https://maps.app.goo.gl/TyZXexCdy5FzSrjT8' target='_blank'>
                                            <svg className='h-6 w-5 sm:h-7 sm:w-6 text-gray-200' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                                <path stroke-linecap='round' stroke-linejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z' />
                                            </svg>
                                        </Link>
                                    </dt>
                                    <Link to='https://maps.app.goo.gl/TyZXexCdy5FzSrjT8' target='_blank'>
                                        <dd className='text-gray-200 text-xs sm:text-lg'>R. Celso Ramos, 4225 - 2º piso - Centro, Benedito Novo - SC, 89124-000</dd>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Horario</span>
                                        <img src={Icon} className='h-6 w-6 sm:h-8 sm:w-8 text-gray-200' />
                                    </dt>
                                    <dd className='text-gray-200 text-xs sm:text-lg'>Horário de funcionamento: Segunda a Sexta, das 8h00 às 17h15</dd>

                                </div>
                            </li>
                            

                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;