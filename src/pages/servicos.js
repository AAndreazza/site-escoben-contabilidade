import React from 'react'
import Seo from '../components/Seo'
import WhatsappIcon from '../components/WhatsappIcon'
import PaginaServicos from '../components/PaginaServicos'

const Servicos = () => {
    return (
        <div className='bg-gray-100 font-montserrat'>
            <Seo title='' description='' />
            <WhatsappIcon></WhatsappIcon>
            <PaginaServicos></PaginaServicos>
        </div>
    )
}

export default Servicos