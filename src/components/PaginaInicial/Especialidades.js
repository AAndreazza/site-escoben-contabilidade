import React from 'react'
import { Link } from 'gatsby'

const Especialidades = () => {
    return (
        <div className='mt-0 md:mt-40 xl:mt-80 py-14 sm:py-24 lg:py-80 font-montserrat'>
            <div className='mx-auto max-w-7xl xl:mt-80'>
                <div className='mx-auto text-center'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#e6d4e2]'>ESPECIALIDADES</h2>
                    <p className='mt-0 text-xl font-semibold text-gray-900 sm:text-4xl'>Serviços de Contabilidade Especializados para:</p>
                    <div className='mt-6 border-t-2 border-gray-900/10 pt-6 sm:mt-8 lg:mt-8 mx-11'></div>
                    <p className='text-base text-gray-900 sm:text-2xl sm:mx-0 mx-12'>Uma <b>contabilidade</b> que conhece o seu negócio</p>
                </div>
                <div className='mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-20 lg:max-w-none'>
                    <dl className='grid max-w-xl grid-cols-1 gap-x-6 gap-y-12 lg:max-w-none lg:grid-cols-3 text-center'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-5' src='https://img.icons8.com/ios-glyphs/90/refund-2.png' alt='refund-2' />
                            <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                                CONTABILIDADE PARA COMÉRCIO
                            </h2>
                            <p className='mt-8'>
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#633259] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>
                        
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-6' src='https://img.icons8.com/ios/100/service--v1.png' alt='service--v1' />
                            <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                                CONTABILIDADE PARA SERVIÇOS
                            </h2>
                            <p className='mt-8'>
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#633259] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-6' src='https://img.icons8.com/ios/100/workers-male.png' alt='workers-male' />
                            <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                                CONTABILIDADE PARA INDÚSTRIA
                            </h2>
                            <p className='mt-8'>
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#633259] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
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