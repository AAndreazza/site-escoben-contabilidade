import React from 'react'
import { Link } from 'gatsby'

const Especialidades = () => {
    return (
        <div class="bg-white mt-0 sm:mt-10 py-24 sm:py-24 font-montserrat">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto text-center">
                    <h2 class="text-4xl sm:text-6xl font-bold text-[#e4d5e7]">ESPECIALIDADES</h2>
                    <p class="mt-0 text-xl font-semibold text-gray-900 sm:text-4xl">Serviços de Contabilidade Especializados para:</p>
                    <div className='mt-6 border-t-2 border-gray-900/10 pt-6 sm:mt-8 lg:mt-8 mx-11'></div>
                    <p class="text-base text-gray-900 sm:text-2xl">Uma <b>contabilidade</b> que conhece o seu negócio</p>
                </div>
                <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 text-center">
                        <div class="flex flex-col items-center justify-center">
                            <img class="h-20 w-20 mb-5" src="https://img.icons8.com/ios-glyphs/90/refund-2.png" alt="refund-2" />
                            <h2 class="text-2xl font-semibold leading-7 text-gray-900">
                                CONTABILIDADE PARA COMÉRCIO
                            </h2>
                            <p class="mt-8">
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#c096f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>
                        
                        <div class="flex flex-col items-center justify-center">
                            <img class="h-20 w-20 mb-6" src="https://img.icons8.com/ios/100/service--v1.png" alt="service--v1" />
                            <h2 class="text-2xl font-semibold leading-7 text-gray-900">
                                CONTABILIDADE PARA SERVIÇOS
                            </h2>
                            <p class="mt-8">
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#c096f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>

                        <div class="flex flex-col items-center justify-center">
                            <img class="h-20 w-20 mb-6" src="https://img.icons8.com/ios/100/workers-male.png" alt="workers-male" />
                            <h2 class="text-2xl font-semibold leading-7 text-gray-900">
                                CONTABILIDADE PARA INDÚSTRIA
                            </h2>
                            <p class="mt-8">
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#c096f7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>
                    </dl>
                </div>
            </div>
        </div>

    )
}

export default Especialidades;