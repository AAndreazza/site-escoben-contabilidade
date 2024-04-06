import React from 'react'
import Header from '../components/Header'
import WhatsappIcon from '../components/WhatsappIcon'
import Especialidades from '../components/PaginaInicial/Especialidades'
import Servicos from '../components/PaginaInicial/Servicos'
import Footer from '../components/Footer'

const Index = () => {
    return (
        <div>
            <Header></Header>
            <WhatsappIcon></WhatsappIcon>
            <Especialidades></Especialidades>
            <Servicos></Servicos>
            <Footer></Footer>
        </div>
    )
}

export default Index