import React from "react";
import Logo from "../../images/LogoTeste.png"

const Sobre = () => {
    return (
        <div class="bg-white sm:mt-20 mb-20 font-montserrat">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto mt-16 max-w-2xl sm:mt-0 lg:mt-0 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                        <div class="relative pl-16">
                            <dt class="text-xl font-semibold leading-7 text-[#4f2158]">
                                <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]">
                                    <img width="100" height="100" src="https://img.icons8.com/ios/100/circled-play--v1.png" alt="circled-play--v1" />                                    </div>
                                História
                            </dt>
                            <dd class="mt-2 text-lg leading-7 text-[#3f2444]">A Escoben é uma empresa que atua nas áreas contábil, fiscal, trabalhista, financeira e consultorias desde XXXX.</dd>
                        </div>

                        <div class="relative pl-16 sm:pl-24">
                            <dt class="text-xl font-semibold leading-7 text-[#4f2158]">
                                <div class="absolute left-0 sm:left-8 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]">
                                    <img width="100" height="100" src="https://img.icons8.com/ios/100/goal--v1.png" alt="goal--v1" />
                                </div>
                                Propósito e Missão
                            </dt>
                            <dd class="mt-2 text-lg leading-7 text-[#3f2444]">Transformar a sua empresa em um negócio de sucesso, oferecendo soluções empresariais de excelência.</dd>
                        </div>

                    </dl>
                </div>
            </div>

            <img src={Logo} alt="Logo Escoben Contabilidade" className="hidden lg:block mx-auto mt-4 mb-4 lg:w-90 lg:h-40" />

            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto mt-10 max-w-2xl sm:mt-0 lg:mt-0 lg:max-w-4xl">
                    <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">

                        <div class="relative pl-16">
                            <dt class="text-xl font-semibold leading-7 text-[#4f2158]">
                                <div class="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]">
                                    <img width="100" height="100" src="https://img.icons8.com/ios/100/test-partial-passed.png" alt="test-partial-passed" />                                    </div>
                                Valores
                            </dt>
                            <dd class="mt-2 text-lg leading-7 text-[#3f2444]">Prezamos pelos mais altos valores de confiança, honestidade, cordialidade, humildade, conhecimento e comprometimento.</dd>
                        </div>

                        <div class="relative pl-16 sm:pl-24">
                            <dt class="text-xl font-semibold leading-7 text-[#4f2158]">
                                <div class="absolute left-0 sm:left-8 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]">
                                    <img width="100" height="100" src="https://img.icons8.com/ios/100/batch-assign.png" alt="batch-assign" />                                    </div>
                                Profissionais Capacitados
                            </dt>
                            <dd class="mt-2 text-lg leading-7 text-[#3f2444]">Nossa equipe é composta por mais de 65 pessoas, sendo que diversos profissionais possuem mais de uma década de experiência.</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Sobre;