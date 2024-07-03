import React from 'react'
import { Link } from 'gatsby'

const Especialidades = () => {
    return (
        <div className='mt-10 sm:mt-20 font-montserrat'>
            <div className='mx-auto max-w-7xl'>
                <div className='mx-auto text-center'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-[#e6d4e2]'>ESPECIALIDADES</h2>
                    <p className='mt-0 text-xl font-semibold text-gray-900 sm:text-4xl'>Serviços de Contabilidade Especializados para:</p>
                    <div className='mt-6 border-t-2 border-gray-900/10 pt-6 sm:mt-8 lg:mt-8 mx-11'></div>
                </div>
                <div className='mx-auto mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-none'>
                    <dl className='grid max-w-xl grid-cols-1 gap-y-12 lg:max-w-none lg:grid-cols-3 text-center mx-auto'>
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-5' src='https://img.icons8.com/ios-glyphs/90/refund-2.png' alt='refund-2' />
                            <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                                COMÉRCIO
                            </h2>
                            <p className='mt-8'>
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#4b253c] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>
                        
                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-6' src='https://img.icons8.com/ios/100/service--v1.png' alt='service--v1' />
                            <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                                SERVIÇOS
                            </h2>
                            <p className='mt-8'>
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#4b253c] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>

                        <div className='flex flex-col items-center justify-center'>
                            <img className='h-20 w-20 mb-6' src='https://img.icons8.com/ios/100/workers-male.png' alt='workers-male' />
                            <h2 className='text-2xl font-semibold leading-7 text-gray-900'>
                                INDÚSTRIA
                            </h2>
                            <p className='mt-8'>
                                <Link
                                    to='../../especialidades'
                                    className='rounded-full bg-[#4b253c] drop-shadow-2xl px-8 py-4 mb-8 text-base font-semibold text-white shadow-sm hover:bg-[#5f374f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    SAIBA MAIS
                                </Link>
                            </p>
                        </div>
                    </dl>
                </div>
                <p className='mt-20 text-center text-xl text-gray-900 sm:text-2xl sm:mx-0 mx-6'>Uma <b>contabilidade</b> que conhece o seu negócio!</p>
            </div>
        </div>

    )
}

export default Especialidades;