import React from 'react'
import { Link } from 'gatsby'

const Servicos = () => {
    return (
        <div class="bg-white py-24 sm:py-24 font-montserrat">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto text-center">
                    <h2 class="text-5xl sm:text-7xl font-bold text-gray-200">SERVIÇOS</h2>
                    <p class="mt-0 text-xl font-semibold text-gray-900 sm:text-3xl">Nossos Serviços</p>
                    <div className='mt-6 border-t-2 border-gray-900/10 pt-6 sm:mt-8 lg:mt-8 mx-11'></div>
                    <p class="text-base text-gray-900 sm:text-xl"><b>Uma solução completa</b> para a gestão contábil, fiscal e financeira da sua empresa</p>
                </div>

                <div class="bg-white py-12">
                    <div class="mx-auto max-w-2xl lg:max-w-5xl">
                        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {/* CORRETO */}
                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/cash-receipt.png" alt="cash-receipt" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Contabilidade</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Cumpriremos todas as suas obrigações contábeis e burocráticas.</dd>
                                </div>
                            </div>
                            {/* CORRETO */}
                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/receipt-approved.png" alt="receipt-approved" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Gestão Fiscal</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Cumpriremos todas as suas obrigações fiscais, realizando todo o controle e orientação.</dd>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/lawyer.png" alt="lawyer" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Gestão Trabalhista e Previdenciária</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Cumpriremos todas as suas obrigações trabalhistas, realizando todo o controle e orientação.</dd>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/crowdfunding.png" alt="crowdfunding" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Gestão Societária e Outros Serviços</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Abertura de empresa, consultoria empresarial, regularização de empresas, etc.</dd>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/fund-accounting.png" alt="fund-accounting" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Controle dos Investimentos na Bolsa de Valores</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Calculamos as guias de impostos a pagar, além de controlar a rentabilidade da sua carteira.</dd>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/get-cash--v1.png" alt="get-cash--v1" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Imposto de Renda da Pessoa Física</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Fazemos a declaração do imposto de renda, carnê-leão, ganho de capital, regularização de CPF e cáculo de impostos.</dd>
                                </div>
                            </div>

                            <div class="flex items-center">
                                <img class="h-20 w-20 mr-6" src="https://img.icons8.com/ios/100/bullish--v1.png" alt="bullish--v1" />
                                <div>
                                    <dt class="text-xl sm:text-2xl font-bold leading-7 text-[#793486]">Consultoria & Treinamentos</dt>
                                    <dd class="mt-2 text-lg leading-7 text-gray-800">Ganhe velocidade e conhecimento para aumentar o faturamento da sua empresa. Consultorias nas áreas fiscal, tributária, contábil e trabalhista.</dd>
                                </div>
                            </div>

                            <div class="flex items-center ml-20">
                                <Link
                                    to='#'
                                    className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 mb-8 text-xl font-semibold text-white shadow-sm hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                                >
                                    Veja todos os nossos serviços
                                    <span aria-hidden='true'> &rarr;</span>
                                </Link>
                            </div>


                        </dl>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Servicos;