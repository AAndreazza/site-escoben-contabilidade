import React from 'react'
import { Link } from 'gatsby'
import Seo from '../components/Seo'
import Logo from '../images/logoHorizRoxa.webp'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'

const Sucesso = () => (
  <div className="min-h-screen sm:pt-16 pb-12 flex flex-col bg-gray-100 font-montserrat">
    <Seo title='Escoben Contabilidade' description='' />
    <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0 flex justify-center">
        <Link to="/" className="inline-flex">
          <img className="h-12 w-auto" src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="py-16">
        <div className="text-center">
          <h1 className="mt-2 text-3xl font-extrabold text-[#4b253c] tracking-tight sm:text-5xl">
            Mensagem enviada com sucesso!
          </h1>
          <p className="mt-2 text-base text-[#4b253c]">
            Obrigado por entrar em contato conosco
          </p>
          <div className="mt-6">
            <Link to="/" className="text-base font-bold text-[#4b253c] hover:text-[#5f374f]">
              Volte para a página principal
              <span aria-hidden="true"> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
    <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <nav className="flex justify-center space-x-4">
        <Link
          to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='_blank'
          className="text-sm font-medium text-[#4b253c] hover:text-[#5f374f]"
        >
          Whatsapp
        </Link>
        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
        <Link to={URLS.instagram} target='_blank' className="text-sm font-medium text-[#4b253c] hover:text-[#5f374f]">
          Instagram
        </Link>
        <span className="inline-block border-l border-gray-300" aria-hidden="true" />
        <Link to='https://maps.app.goo.gl/TyZXexCdy5FzSrjT8' target='_blank' className="text-sm font-medium text-[#4b253c] hover:text-[#5f374f]">
          Endereço
        </Link>
      </nav>
    </footer>
  </div>
)

export default Sucesso