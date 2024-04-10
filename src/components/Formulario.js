import React from "react";
import { Link } from 'gatsby'

const Formulario = () => {
    return (

        <div class="isolate px-6 -mt-10 mb-20 lg:px-8 font-montserrat">

            <form action="https://formsubmit.co/alanaandreazza26@gmail.com" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20 rounded-3xl p-8 ring-2 ring-[#793486] shadow-2xl">
                <input type="text" name="nome" id="nome" autocomplete="given-name" placeholder="Nome completo" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <input type="email" name="email" id="email" autocomplete="email" placeholder="E-mail" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <input type="tel" name="telefone" id="telefone" autocomplete="tel" placeholder="Celular com DDD" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <textarea name="mensagem" id="mensagem" rows="4" placeholder="Mensagem" class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                <input type="hidden" name="_next" value="http://localhost:8000/especialidades/" />
                <input type="hidden" name="_captcha" value="false" />

                <div class="mt-10 sm:mt-10 mb-10 text-center">
                    <button
                        type="submit"
                        className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 sm:px-40 sm:py-5 font-semibold text-lg text-white shadow-sm hover:bg-[#b05fc0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Enviar mensagem
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Formulario