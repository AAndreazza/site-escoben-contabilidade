import React, { useState } from 'react';
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import Logo from '../images/logoHorizRoxa.png'
import { URLS } from '../utils/constants'

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className='absolute inset-x-0 top-0 z-50 bg-gray-50 mt-5 mx-5 lg:mx-10 rounded-full font-montserrat' id='inicial'>
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8' aria-label='Global'>
        <div className='flex lg:flex-1'>
          <a href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Escoben Contabilidade</span>
            <img className='h-8 w-auto' src={Logo} alt='Logo da Escoben' />
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
        <div className='hidden lg:flex lg:gap-x-8'>
          <a href='../sobre' className='mt-2 text-base leading-6 text-gray-900'>Sobre</a>

          <div className='relative'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button type='button' className='mt-2 flex items-center gap-x-1 text-base leading-6 text-gray-900' aria-expanded='false'>
                    Especialidades
                    <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                      } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className='text-gray-500 bg-gray-50'>
                    <div className='absolute -left-8 top-full z-10 mt-3 w-80 rounded-xl p-2 shadow-lg ring-1 ring-gray-900/5 bg-gray-50'>
                      <a href='../especialidades' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Contabilidade para comércio</a>
                      <a href='../especialidades' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Contabilidade para serviço</a>
                      <a href='../especialidades' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Contabilidade para indústria</a>
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
                  <Disclosure.Button type='button' className='mt-2 flex items-center gap-x-1 text-base leading-6 text-gray-900 ' aria-expanded='false'>
                    Serviços
                    <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                      } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className='text-gray-500'>
                    <div className='absolute -left-8 top-full z-10 mt-3 w-80 rounded-xl p-2 shadow-lg ring-1 ring-gray-900/5 bg-gray-50'>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Contabilidade</a>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Gestão Fiscal</a>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Gestão Trabalhista e Previdenciária</a>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Gestão Societária e Outros Serviços</a>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Controle dos Investimentos na Bolsa de Valores</a>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Imposto de Renda da Pessoa Física</a>
                      <a href='../servicos' className='block rounded-lg px-3 py-2 text-base leading-6 text-gray-900 hover:bg-gray-200'>Consultoria e Treinamentos</a>
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>

          <a href='../blog' className='mt-2 text-base leading-6 text-gray-900'>Blog</a>
          <a href='../contato' className='mt-2 text-base leading-6 text-gray-900'>Contato</a>

          <div className='hidden lg:flex lg:gap-x-2'>
            <Link to={URLS.portalCliente} target='_blank' rel='noopener' className='ml-4 text-base rounded-full bg-[#633259] drop-shadow-2xl px-4 py-2 text-white hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9aace]'>Portal do Cliente</Link>
            <Link to={URLS.portalEmpregado} target='_blank' rel='noopener' className='text-base rounded-full bg-[#633259] drop-shadow-2xl px-4 py-2 text-white hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9aace]'>Portal do Empregado</Link>
          </div>
        </div>
      </nav>

      {/* Barra lateral - opções e fechar */}
      <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
        {/* Background backdrop, show/hide based on slide-over state. */}
        <div className='fixed inset-0 z-10'></div>
        <div className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Escoben Contabilidade</span>
              <img className='h-8 w-auto' src={Logo} alt='Logo Escoben' />
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
            <a href='../sobre' className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-100'>Sobre</a>


            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <div className='-mx-3'>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button type='button' className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-100' aria-controls='disclosure-1' aria-expanded='false'>
                          Especialidades
                          <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                            } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                            <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                          </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className='text-gray-500'>
                          <div className='mt-2 space-y-2 bg-gray-100' id='disclosure-1'>
                            <a href='../especialidades' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Contabilidade para comércio</a>
                            <a href='../especialidades' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Contabilidade para serviço</a>
                            <a href='../especialidades' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Contabilidade para indústria</a>
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
                        <Disclosure.Button type='button' className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base leading-7 text-gray-900 hover:bg-gray-100' aria-controls='disclosure-2' aria-expanded='false'>
                          Serviços
                          <svg className={`${open ? 'bi bi-chevron-up rotate-180 transform' : ''
                            } h-5 w-5 `} viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                            <path fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' />
                          </svg>
                        </Disclosure.Button>

                        <Disclosure.Panel className='text-gray-500'>
                          <div className='mt-2 space-y-2 bg-gray-100' id='disclosure-2'>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Contabilidade</a>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Gestão Fiscal</a>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Gestão Trabalhista e Previdenciária </a>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Gestão Societária e Outros Serviços</a>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Controle dos Investimentos na Bolsa de Valores </a>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Imposto de Renda da Pessoa Física</a>
                            <a href='../servicos' className='block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-gray-900 hover:bg-gray-100'>Consultoria e Treinamentos</a>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>

            <a href='../blog' className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-100'>Blog</a>
            <a href='../contato' className='-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-100'>Contato</a>
            <Link to={URLS.portalCliente} target='_blank' rel='noopener' className='sm:ml-4 mx-10 sm:mx-0 mt-4 sm:mt-0 block text-center text-lg rounded-full bg-[#633259] drop-shadow-xl px-4 py-3 text-white hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9aace]'>Portal do Cliente <span aria-hidden='true'> &rarr;</span></Link>
            <Link to={URLS.portalEmpregado} target='_blank' rel='noopener' className='mx-6 sm:mx-0 mt-4 sm:mt-0 block text-center text-lg rounded-full bg-[#633259] drop-shadow-xl px-4 py-3 text-white hover:bg-[#8b4c7f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b9aace]'>Portal do Empregado <span aria-hidden='true'> &rarr;</span></Link>

          </div>

        </div>
      </div>
    </header>
  )
}

export default NavBar;