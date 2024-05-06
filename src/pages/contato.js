import React from 'react'
import Seo from '../components/Seo'
import WhatsappIcon from '../components/WhatsappIcon'
import PaginaContato from '../components/PaginaContato'

const Contato = () => {
    return (
        <div className='bg-gray-100 font-montserrat'> 
            <Seo title='' description='' />
            <WhatsappIcon></WhatsappIcon>
            <PaginaContato></PaginaContato>
        </div>
    )
}

export default Contato