import React from "react";
import { Link } from 'gatsby'
import Servico from '../../images/ServicoTeste.webp'

const Consultoria = () => {
    return (
        <div class="font-montserrat mt-20 sm:mt-20">
            <div class="mx-auto max-w-7xl px-8 sm:px-40">
                <div class="grid lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl lg:col-span-2 xl:col-auto">CONSULTORIA & <br/>TREINAMENTOS</h1>
                    <div class="mt-6 max-w-xl lg:mt-2 xl:col-end-1 xl:row-start-1">
                        <ul class="space-y-4 text-lg leading-6 text-gray-600">
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>                                
                                Consultoria e treinamentos na área contábil
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Consultoria e treinamentos nas áreas fiscal e tributária
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Consultoria e treinamentos nas áreas financeira e custos
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Consultoria e treinamentos nas áreas trabalhista e previdenciária
                            </li>
                        </ul>

                        <div class="mt-10 text-center">
                            <Link
                                to='#'
                                className='rounded-full bg-[#793486] px-6 sm:px-8 py-3 text-xl font-semibold text-white hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
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

export default Consultoria;