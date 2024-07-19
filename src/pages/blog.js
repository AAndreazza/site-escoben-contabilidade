import React from 'react'
import Seo from '../components/Seo'
import WhatsappIcon from '../components/WhatsappIcon'
import PagesBlog from '../components/PagesBlog'

const Blog = () => {
    return (
        <div className='bg-gray-100 font-montserrat'> 
            <Seo title='Escoben Contabilidade - Blog' description='' />
            <WhatsappIcon></WhatsappIcon>
            <PagesBlog></PagesBlog>
        </div>
    )
}

export default Blog