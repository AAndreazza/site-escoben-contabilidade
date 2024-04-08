import React from 'react'
import Header from '../components/Header'
import WhatsappIcon from '../components/WhatsappIcon'
import Especialidades from '../components/PaginaInicial/Especialidades'
import Servicos from '../components/PaginaInicial/Servicos'
import Sobre from '../components/Sobre'
import Footer from '../components/Footer'
import PaginaEspecialidades from '../components/Especialidades/PaginaEspecialidades'
import PaginaSobre from '../components/Sobre/PaginaSobre'

const Index = () => {
    return (
        <div>
            {/**/}
            <Header></Header>
            <WhatsappIcon></WhatsappIcon>
            <Especialidades></Especialidades>
            <Servicos></Servicos>
            <Sobre></Sobre>
            <Footer></Footer>

            {/*
            <PaginaEspecialidades></PaginaEspecialidades>
            <PaginaSobre></PaginaSobre> */}


        </div>
    )
}

export default Index