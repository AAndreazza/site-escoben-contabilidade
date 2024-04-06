import React from "react";
import { Link } from 'gatsby'

const Formulario = () => {
    return (

        <div class="isolate px-6 -mt-10 lg:px-8 font-montserrat">
            
            <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20 rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl">
                <div class="sm:grid-cols-2">
                    <div>
                        <label for="nome" class="block text-sm font-semibold leading-6 text-gray-900">Nome completo</label>
                        <div class="mt-2.5">
                            <input type="text" name="nome" id="nome" autocomplete="given-name" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2 mt-4">
                        <label for="email" class="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                        <div class="mt-2.5">
                            <input type="email" name="email" id="email" autocomplete="email" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2 mt-4">
                        <label for="telefone" class="block text-sm font-semibold leading-6 text-gray-900">Celular</label>
                        <div class="mt-2.5">
                            <input type="tel" name="telefone" id="telefone" autocomplete="tel" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div class="sm:col-span-2 mt-4">
                        <label for="mensagem" class="block text-sm font-semibold leading-6 text-gray-900">Mensagem</label>
                        <div class="mt-2.5">
                            <textarea name="mensagem" id="mensagem" rows="4" class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                        </div>
                    </div>
                </div>

                <div class="mt-10 sm:mt-10 mb-6 text-center">
                <Link
                    to='#'
                    className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-3 text-lg mb-8 font-semibold text-white shadow-sm hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                >
                    Enviar mensagem
                </Link>
            </div>
            </form>
        </div>

    )
}

export default Formulario