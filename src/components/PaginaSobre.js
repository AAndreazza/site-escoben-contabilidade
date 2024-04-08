import React from "react";
import Header from './Header.js'
import Sobre from "./PaginaInicial/Sobre.js";
import Footer from "./Footer.js";
import Formulario from "./Formulario.js";

const PaginaSobre = () => {
    return (
        <div>
            {/* MENUS + BANNER ESPECIALIDADES */}
            <div className="bg-[#4f2158] px-6 py-52 sm:py-44 lg:px-8">
                <h2 class="mt-10 mx-auto text-center font-montserrat text-4xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]">SOBRE NÓS</h2>
                <p class="mt-4 mx-auto text-center font-montserrat text-lg sm:text-3xl font-bold text-[#e4d5e7]">Conheça a Escoben</p>
                <Header></Header>
            </div>

            {/* LOGO + SOBRE */}
            <Sobre></Sobre>

            {/* FORMULARIO */}
            <div class="mt-20 sm:mt-32 mx-auto text-center">
                <h2 class="text-4xl sm:text-6xl font-bold text-[#e4d5e7] ">ENTRE EM CONTATO</h2>
                <p class="text-lg sm:text-xl font-semibold text-[#392c3b]">Mande-nos uma mensagem. Responderemos diretamente no seu e-mail!</p>
            </div>
            <Formulario></Formulario>

            <Footer></Footer>
        </div>
    )
}

export default PaginaSobre;