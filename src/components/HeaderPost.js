import React, { useState } from 'react';
import { Disclosure } from '@headlessui/react'

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  return (
    <header className='absolute inset-x-0 top-0 z-50 bg-gray-100 mt-5 mx-5 lg:mx-20 rounded-full font-montserrat'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Escoben Contabilidade</span>
            <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='Logo da Escoben' />
          </a>
        </div>

        {/* Barra lateral - abrir */}
        <div className='flex lg:hidden'>
          <button type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setIsSidebarOpen(true)}
          >
            <span className='sr-only'>Abrir menu</span>
            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
              <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
            </svg>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-12'>
          <a href='../../sobre' className='text-lg leading-6 text-gray-900'>Sobre</a>

          <div className='relative'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button type='button' className='flex items-center gap-x-1 text-lg leading-6 text-gray-900' aria-expanded='false'>
                    Especialidades
                    <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                      } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className='text-gray-500'>
                    <div className='absolute -left-8 top-full z-10 mt-3 w-80 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5'>
                      <a href='../../especialidades' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Contabilidade para comércio</a>
                      <a href='../../especialidades' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Contabilidade para serviço</a>
                      <a href='../../especialidades' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Contabilidade para indústria</a>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>


          <div className='relative'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button type='button' className='flex items-center gap-x-1 text-lg leading-6 text-gray-900' aria-expanded='false'>
                    Serviços
                    <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                      } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className='text-gray-500'>
                    <div className='absolute -left-8 top-full z-10 mt-3 w-80 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5'>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Contabilidade</a>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Gestão Fiscal</a>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Gestão Trabalhista e Previdenciária</a>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Gestão Societária e Outros Serviços</a>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Controle dos Investimentos na Bolsa de Valores</a>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Imposto de Renda da Pessoa Física</a>
                      <a href='../../servicos' className='block rounded-lg px-3 py-2 text-lg leading-6 text-gray-900 hover:bg-gray-50'>Consultoria e Treinamentos</a>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <a href='../../blog' className='text-lg leading-6 text-gray-900'>Blog</a>
          <a href='../../contato' className='text-lg leading-6 text-gray-900'>Contato</a>

        </div>
        {/* PARTE LOGIN COM FLECHA 
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a href='#' className='text-sm leading-6 text-gray-900'>Log in <span aria-hidden='true'>&rarr;</span></a>
        </div> */}
      </nav>

      {/* Barra lateral - opções e fechar */}
      <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className='fixed inset-0 z-10'></div>
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Escoben Contabilidade</span>
              <img className='h-8 w-auto' src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600' alt='' />
            </a>
            <button
              type='button' className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setIsSidebarOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </div>

          <div className='mt-6 flow-root'>
            <a href='../../sobre' className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50'>Sobre</a>


            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <div className='-mx-3'>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button type='button' className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50' aria-controls='disclosure-1' aria-expanded='false'>
                          Especialidades
                          <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                            } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                            <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                          </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className='text-gray-500'>
                          <div className='mt-2 space-y-2' id='disclosure-1'>
                            <a href='../../especialidades' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Contabilidade para comércio</a>
                            <a href='../../especialidades' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Contabilidade para serviço</a>
                            <a href='../../especialidades' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Contabilidade para indústria</a>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className='-mx-3'>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button type='button' className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-50' aria-controls='disclosure-2' aria-expanded='false'>
                          Serviços
                          <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                            } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                            <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                          </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className='text-gray-500'>
                          <div className='mt-2 space-y-2' id='disclosure-2'>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Contabilidade</a>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Gestão Fiscal</a>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Gestão Trabalhista e Previdenciária </a>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Gestão Societária e Outros Serviços</a>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Controle dos Investimentos na Bolsa de Valores </a>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Imposto de Renda da Pessoa Física</a>
                            <a href='../../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-50'>Consultoria e Treinamentos</a>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>

            <a href='../../blog' className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50'>Blog</a>
            <a href='../../contato' className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50'>Contato</a>
          </div>

        </div>
      </div>
    </header>
  )
}

export default NavBar;