import React from "react";
import Header from './Header.js'
import Footer from "./Footer.js";
import Formulario from "./Formulario.js"
import Logo from "../images/LogoTeste.png"
import Contabilidade from "./Servicos/Contabilidade.js";
import GestaoFiscal from "./Servicos/GestaoFiscal.js";
import GestaoTrabalhista from "./Servicos/GestaoTrabalhista.js";
import GestaoSocietaria from "./Servicos/GestaoSocietaria.js";
import ControleInvestimentos from "./Servicos/ControleInvestimentos.js";
import ImpostoRenda from "./Servicos/ImpostoRenda.js";
import Consultoria from "./Servicos/Consultoria.js";

const PaginaServicos = () => {
    return (
        <div>
            {/* MENUS + BANNER SERVICOS */}
            <div className="bg-[#4f2158] py-32 sm:py-44">
                <h2 class="mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]">SERVIÇOS</h2>
                <p class="mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]">Nossos serviços</p>
                <Header></Header>
            </div>

            {/* LOGO + TEXTO */}
            <div class="bg-white py-20">
                <div class="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12">
                    <div class="col-span-12 lg:col-span-5 mx-auto mb-5 sm:mb-0 sm:ml-32">
                        <img src={Logo} alt="Logo Escoben Contabilidade" />
                    </div>
                    <div className="ml-5 h-22 w-2 bg-[#dbbee0]"></div>
                    <div class="col-span-11 lg:col-span-6">
                        <p class="sm:ml-0 ml-12 mr-4 text-xl sm:text-2xl font-montserrat leading-6 text-black">Nosso propósito é transformar a sua empresa em um negócio de sucesso. Soluções completas para a sua gestão contábil, fiscal e trabalhista.</p>
                    </div>
                </div>
            </div>

            {/* SERVICOS */}
            <Contabilidade></Contabilidade>
            <GestaoFiscal></GestaoFiscal>
            <GestaoTrabalhista></GestaoTrabalhista>
            <GestaoSocietaria></GestaoSocietaria>
            <ControleInvestimentos></ControleInvestimentos>
            <ImpostoRenda></ImpostoRenda>
            <Consultoria></Consultoria>

            {/* FORMULARIO */}
            <div class="mt-20 sm:mt-24 mx-auto text-center">
                <h2 class="text-4xl sm:text-6xl font-bold text-[#e4d5e7] ">ENTRE EM CONTATO</h2>
                <p class="text-lg sm:text-xl font-semibold text-[#392c3b]">Mande-nos uma mensagem. Responderemos diretamente no seu e-mail!</p>
            </div>
            <Formulario></Formulario>

            <Footer></Footer>
        </div>
    )
}

export default PaginaServicos;