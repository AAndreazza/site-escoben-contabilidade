import React from 'react'
import Seo from '../components/Seo'
import Header from '../components/Header'
import WhatsappIcon from '../components/WhatsappIcon'
import Especialidades from '../components/PaginaInicial/Especialidades'
import Servicos from '../components/PaginaInicial/Servicos'
import Sobre from '../components/PaginaInicial/Sobre'
import Footer from '../components/Footer'
import ProvasSociais from '../components/PaginaInicial/ProvasSociais'

const Index = () => {
    return (
        <div>
            <Seo title='' description='' />
            <Header></Header>
            <WhatsappIcon></WhatsappIcon>
            <ProvasSociais></ProvasSociais>
            <Especialidades></Especialidades>
            <Servicos></Servicos>
            <Sobre></Sobre>
            <Footer></Footer>
        </div>
    )
}

export default Index