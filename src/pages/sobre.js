import React from 'react'
import Seo from '../components/Seo'
import WhatsappIcon from '../components/WhatsappIcon'
import PaginaSobre from '../components/PaginaSobre'

const Sobre = () => {
    return (
        <div className='bg-gray-100 font-montserrat'>
            <Seo title='' description='' />
            <WhatsappIcon></WhatsappIcon>
            <PaginaSobre></PaginaSobre>
        </div>
    )
}

export default Sobre