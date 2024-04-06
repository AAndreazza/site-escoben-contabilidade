import React from "react";
import { Link } from 'gatsby'
import Header from '../Header.js'
import Footer from "../Footer.js";
import Formulario from "../Formulario.js";

const PaginaEspecialidades = () => {
    return (
        <div>
            <Header></Header>

            {/* LOGO + TEXTO */}

            {/* SERVICOS + TOPICOS */}
            <div class="mx-auto mt-16 max-w-5xl sm:mt-30 font-montserrat">
                <div class="mx-auto isolate mt-10 grid max-w-80 grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:max-w-none xl:grid-cols-3">

                    <div class="rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl">
                        <div class="flex flex-col items-center justify-center">
                            <img class="h-20 w-20 mb-2" src="https://img.icons8.com/ios-glyphs/90/refund-2.png" alt="refund-2" />
                            <h2 class="text-xl font-semibold text-center leading-7 text-gray-900">
                                CONTABILIDADE PARA COMÉRCIO
                            </h2>
                        </div>
                        <ul role="list" class="mt-4 space-y-4 text-lg leading-6 text-gray-600">
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Supermercado
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Restaurantes
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Roupas e Acessórios
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Bar e Lanchonetes
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Farmácia
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Veículos
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Materiais de Construção
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Brinquedos
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Eletrônicos
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Entre outros
                            </li>
                        </ul>
                    </div>

                    <div class="rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl">
                        <div class="flex flex-col items-center justify-center">
                            <img class="h-20 w-20 mb-2" src="https://img.icons8.com/ios/100/service--v1.png" alt="service--v1" />
                            <h2 class="text-xl font-semibold text-center leading-7 text-gray-900">
                                CONTABILIDADE PARA SERVIÇOS
                            </h2>
                        </div>
                        <ul role="list" class="mt-4 space-y-4 text-lg leading-6 text-gray-600">
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Administradora de Bens
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Advocacia
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Arquitetura
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Clínica Médica
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Consultório Odontológico
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Agência de Publicidade
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Domésticas
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Condomínios
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Engenharia
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Entre outros
                            </li>
                        </ul>
                    </div>

                    <div class="rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl">
                        <div class="flex flex-col items-center justify-center">
                            <img class="h-20 w-20 mb-2" src="https://img.icons8.com/ios/100/workers-male.png" alt="workers-male" />
                            <h2 class="text-xl font-semibold text-center leading-7 text-gray-900">
                                CONTABILIDADE PARA INDÚSTRIA
                            </h2>
                        </div>
                        <ul role="list" class="mt-4 space-y-4 text-lg leading-6 text-gray-600">
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Alimentos
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Construção
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Embalagens
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Energia
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Equipamentos em geral
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Têxtil
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Máquinas
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Móveis
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Auto Peças
                            </li>
                            <li class="flex gap-x-1">
                                <svg class="h-6 w-5 flex-none text-[#793486]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                                Entre outros
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div class="mt-16 sm:mt-20 mb-20 text-center">
                <Link
                    to='#'
                    className='rounded-full bg-[#793486] drop-shadow-2xl px-10 sm:px-16 py-4 text-2xl mb-8 font-semibold text-white shadow-sm hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                >
                    Fale com um especialista
                    <span aria-hidden='true'> &rarr;</span>
                </Link>
            </div>

            {/* FORMULARIO */}
            <div class="mt-32 mx-auto text-center">
                <h2 class="text-4xl sm:text-6xl font-bold text-[#e4d5e7]">ENTRE EM CONTATO</h2>
                <p class="mt-0 text-xl font-semibold text-[#392c3b]">Mande-nos uma mensagem. Responderemos diretamente no seu e-mail!</p>
            </div>
            <Formulario></Formulario>

            <Footer></Footer>
        </div>
    )
}

export default PaginaEspecialidades;