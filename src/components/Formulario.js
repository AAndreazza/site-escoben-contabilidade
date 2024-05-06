import React from 'react';

const Formulario = () => {
    return (

        <div className='isolate px-6 -mt-10 mb-20 lg:px-8 font-montserrat'>

            <form action='https://formsubmit.co/alanaandreazza26@gmail.com' method='POST' className='mx-auto mt-16 max-w-xl sm:mt-20 rounded-3xl p-8 ring-2 ring-[#633259] bg-[#633259] shadow-2xl'>
                <input type='text' name='nome' id='nome' autocomplete='given-name' placeholder='Nome completo' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type='email' name='email' id='email' autocomplete='email' placeholder='E-mail' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type='tel' name='telefone' id='telefone' autocomplete='tel' placeholder='Celular com DDD' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <textarea name='mensagem' id='mensagem' rows='4' placeholder='Mensagem' className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                <input type='hidden' name='_next' value='http://localhost:8000/especialidades/' />
                <input type='hidden' name='_captcha' value='false' />

                <div className='mt-10 sm:mt-10 mb-5 text-center'>
                    <button
                        type='submit'
                        className='rounded-full bg-[#bea0b8] drop-shadow-2xl px-8 py-4 sm:px-20 sm:py-4 font-semibold text-xl text-[#31182c] shadow-sm hover:bg-[#d6c5d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                    >
                        Enviar mensagem
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Formulario