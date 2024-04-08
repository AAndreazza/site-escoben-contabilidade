import React from "react";
import Header from './Header.js'
import Footer from "./Footer.js";

const PaginaBlog = () => {
    return (
        <div>
            {/* MENUS + BANNER BLOG */}
            <div className="bg-[#4f2158] py-32 sm:py-44">
                <h2 class="mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]">BLOG</h2>
                <p class="mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]">Acompanhe nossos posts</p>
                <Header></Header>
            </div>



            <Footer></Footer>
        </div>
    )
}

export default PaginaBlog;