import React from "react";
import { Link } from 'gatsby'
import Servico from '../../images/ServicoTeste.webp'

const ControleInvestimentos = () => {
    return (
        <div class="font-montserrat mt-20 sm:mt-20">
            <div class="mx-auto max-w-7xl px-8 sm:px-40">
                <div class="grid lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 class="text-3xl font-bold text-gray-900 mx-auto sm:text-4xl lg:col-span-2 xl:col-auto">CONTROLE DOS <br />INVESTIMENTOS <br />NA BOLSA DE VALORES</h1>
                    <div class="mt-6 max-w-xl lg:mt-2 xl:col-end-1 xl:row-start-1">
                        <h2 class="text-lg leading-6 text-center text-gray-600">
                            Para a realização desse serviço, <br />entre em contato conosco.
                        </h2>

                        <div class="mt-10 text-center">
                            <Link
                                to='#'
                                className='rounded-full bg-[#793486] px-4 sm:px-8 py-3 text-lg sm:text-xl font-semibold text-white hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                            >
                                Fale com um especialista
                                <span aria-hidden='true'> &rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <img src={Servico}
                        alt=""
                        class="hidden lg:block aspect-[6/5] w-full max-w-sm rounded-2xl object-cover lg:max-w-lg xl:row-span-2 xl:row-end-2 sm:ml-0" />

                </div>
            </div>
        </div>
    )
}

export default ControleInvestimentos;