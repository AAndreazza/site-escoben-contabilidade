import React, { useState } from 'react';

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [errors, setErrors] = useState({});

    const validateFields = () => {
        const newErrors = {};
        if (!nome) newErrors.nome = 'Preencha este campo.';
        if (!email) newErrors.email = 'Preencha este campo.';
        if (!telefone) newErrors.telefone = 'Preencha este campo.';
        if (!mensagem) newErrors.mensagem = 'Preencha este campo.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        if (!validateFields()) {
            event.preventDefault();
        }
    };

    return (
        <div className='isolate px-6 -mt-10 mb-20 lg:px-8 font-montserrat'>
            <form
                action='/sucesso/'
                name='FORMULARIO-ESCOBEN'
                method='post'
                netlify-honeypot='bot-field'
                data-netlify='true'
                className='mx-auto mt-16 max-w-xl sm:mt-20 rounded-3xl p-8 ring-2 ring-[#4b253c] bg-[#4b253c] shadow-2xl'
                onSubmit={handleSubmit}
            >
                <input type='hidden' name='form-name' value='FORMULARIO-ESCOBEN' />
                <div>
                    <input
                        type='text'
                        name='nome'
                        id='nome'
                        autoComplete='given-name'
                        placeholder='Nome completo'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setNome(event.target.value)}
                    />
                    {errors.nome && <span className='text-red-100 text-sm'>{errors.nome}</span>}
                </div>
                <div>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        autoComplete='email'
                        placeholder='E-mail'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.email && <span className='text-red-100 text-sm'>{errors.email}</span>}
                </div>
                <div>
                    <input
                        type='tel'
                        name='telefone'
                        id='telefone'
                        autoComplete='tel'
                        placeholder='Celular com DDD'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setTelefone(event.target.value)}
                    />
                    {errors.telefone && <span className='text-red-100 text-sm'>{errors.telefone}</span>}
                </div>
                <div>
                    <textarea
                        name='mensagem'
                        id='mensagem'
                        rows='4'
                        placeholder='Mensagem'
                        className='mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 bg-gray-100 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        onChange={(event) => setMensagem(event.target.value)}
                    />
                    {errors.mensagem && <span className='text-red-100 text-sm'>{errors.mensagem}</span>}
                </div>

                <div className='mt-10 sm:mt-10 mb-5 text-center'>
                    <button
                        type='submit'
                        className={`rounded-full drop-shadow-2xl px-8 py-4 sm:px-20 sm:py-4 font-semibold text-xl text-[#31182c] shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]
                        ${nome && email && telefone && mensagem
                                ? 'bg-[#be9fb9] hover:bg-[#ebe1e8] cursor-pointer'
                                : 'bg-[#d6c5d3] hover:bg-[#ebe1e8] cursor-not-allowed'
                            }`}
                    >
                        Enviar mensagem
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;
