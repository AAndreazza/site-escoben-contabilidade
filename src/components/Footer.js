import React from 'react'
import { Link } from "gatsby"
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'

const Footer = () => {
    return (
        <footer class="bg-[#402347] font-montserrat">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="mx-auto max-w-7xl px-6 py-12 sm:py-12 lg:px-8 lg:py-12">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <img class="h-7" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Escoben Contabilidade" />

                    <div class="grid grid-cols-2 xl:col-span-2">
                        <ul class="space-y-6 mt-4">
                            <li>
                                <a href="../sobre" class="text-xs sm:text-lg leading-6 text-gray-200">Sobre</a>
                            </li>
                            <li>
                                <a href="../especialidades" class="text-xs sm:text-lg leading-6 text-gray-200">Especialidades</a>
                            </li>
                            <li>
                                <a href="../servicos" class="text-xs sm:text-lg leading-6 text-gray-200">Serviços</a>
                            </li>
                            <li>
                                <a href="../blog" class="text-xs sm:text-lg leading-6 text-gray-200">Blog</a>
                            </li>
                            <li>
                                <a href="../contato" class="text-xs sm:text-lg leading-6 text-gray-200">Contato</a>
                            </li>
                        </ul>

                        <ul class="mt-6 space-y-6">
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Whatsapp</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            class="h-6 w-5 sm:h-7 sm:w-6 text-gray-200">
                                            <path
                                                stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                        </svg>
                                    </dt>
                                    <dd className='text-gray-200 text-xs sm:text-lg' to='#' >+55 47 3385-0127</dd>
                                </div>
                            </li>
                            <li>
                                <div className='flex gap-x-2'>
                                    <dt className='flex-none'>
                                        <span className='sr-only'>Whatsapp</span>
                                        <Link to=''>
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
                                        <dd className='text-gray-200 text-xs sm:text-lg' to='#' >+55 47 99999-9999</dd>
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
                                    <dd><Link to='mailto:adicionar' className='text-gray-200 text-xs sm:text-lg'>@gmail.com</Link></dd>
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
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;