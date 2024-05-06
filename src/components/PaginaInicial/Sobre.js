import React from 'react';
import Logo from '../../images/logoVerticalRoxaCompleta.png'

const Sobre = () => {
    return (
        <div className='sm:mt-20 mb-20 font-montserrat'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto mt-16 max-w-2xl sm:mt-0 lg:mt-0 lg:max-w-4xl'>
                    <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>

                        <div className='relative pl-16'>
                            <dt className='text-xl font-semibold leading-7 text-[#633259]'>
                                <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]'>
                                    <img width='100' height='100' src='https://img.icons8.com/ios/100/circled-play--v1.png' alt='circled-play--v1' />                                    </div>
                                História
                            </dt>
                            <dd className='mt-2 text-lg leading-7 text-[#3f2444]'>A Escoben é uma empresa que atua nas áreas contábil, fiscal, trabalhista, financeira e consultorias desde XXXX.</dd>
                        </div>

                        <div className='relative pl-16 sm:pl-24'>
                            <dt className='text-xl font-semibold leading-7 text-[#633259]'>
                                <div className='absolute left-0 sm:left-8 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]'>
                                    <img width='100' height='100' src='https://img.icons8.com/ios/100/goal--v1.png' alt='goal--v1' />
                                </div>
                                Missão
                            </dt>
                            <dd className='mt-2 text-lg leading-7 text-[#633259]'>Oferecer serviços contábeis de excelência, simplificando o complexo e superando as expectativas.</dd>
                        </div>

                    </dl>
                </div>
            </div>

            <img src={Logo} alt='Logo Escoben Contabilidade' className='hidden lg:block mx-auto mt-4 mb-4 lg:w-98 lg:h-60' />

            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto mt-10 max-w-2xl sm:mt-0 lg:mt-0 lg:max-w-4xl'>
                    <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>

                        <div className='relative pl-16'>
                            <dt className='text-xl font-semibold leading-7 text-[#633259]'>
                                <div className='absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]'>
                                    <img width='100' height='100' src='https://img.icons8.com/ios/100/test-partial-passed.png' alt='test-partial-passed' />                                    </div>
                                Visão
                            </dt>
                            <dd className='mt-2 text-lg leading-7 text-[#3f2444]'>Aspiramos ser a empresa líder no setor contábil, reconhecida por nossa superioridade em qualidade e inovação nos serviços que prestamos.</dd>
                        </div>

                        <div className='relative pl-16 sm:pl-24'>
                            <dt className='text-xl font-semibold leading-7 text-[#4f2158]'>
                                <div className='absolute left-0 sm:left-8 top-0 flex h-12 w-12 items-center justify-center rounded-3xl border-8 border-[#e4d5e7] bg-[#e4d5e7]'>
                                    <img width='100' height='100' src='https://img.icons8.com/ios/100/batch-assign.png' alt='batch-assign' />                                    </div>
                                Profissionais Capacitados
                            </dt>
                            <dd className='mt-2 text-lg leading-7 text-[#3f2444]'>Nossa equipe é composta por mais de 65 pessoas, sendo que diversos profissionais possuem mais de uma década de experiência.</dd>
                        </div>
                    </dl>
                </div>
            </div>

            {/* VALORES DA ESCOBEN */}
            <div className='mx-auto text-center mt-20'>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#e6d4e2]'>VALORES</h2>
                <p className='mt-0 text-xl font-semibold text-gray-900 sm:text-2xl'>Conheça os nossos valores</p>
            </div>
            
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='mx-auto grid max-w-2xl grid-cols-1 gap-6 mt-10 lg:max-w-4xl lg:grid-cols-2 lg:gap-8'>
                    <div className='flex gap-x-4 rounded-xl bg-[#633259] p-6'>
                        <div className='text-base leading-7 text-center'>
                            <h3 className='text-xl font-semibold leading-7 text-[#e4d5e7]'>Foco no Cliente</h3>
                            <p className='mt-2 text-[#e1dce2]'>A satisfação do cliente é o núcleo de nossa existência. Nos comprometemos a entender e atender suas necessidades de maneira excepcional.</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 rounded-xl bg-[#633259] p-6'>
                        <div className='text-base leading-7 text-center'>
                            <h3 className='text-xl font-semibold leading-7 text-[#e4d5e7]'>Valorização das Pessoas</h3>
                            <p className='mt-2 text-[#e1dce2]'>Respeitamos e valorizamos cada indivíduo. Acreditamos que nosso sucesso é fruto do talento e do esforço conjunto de nossa equipe.</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 rounded-xl bg-[#633259] p-6'>
                        <div className='text-base leading-7 text-center'>
                            <h3 className='text-xl font-semibold leading-7 text-[#e4d5e7]'>Compromisso com a Parceria</h3>
                            <p className='mt-2 text-[#e1dce2]'>Atuamos como uma extensão de nossos clientes. Juntos, fortalecemos suas operações e nossa marca.</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 rounded-xl bg-[#633259] p-6'>
                        <div className='text-base leading-7 text-center'>
                            <h3 className='text-xl font-semibold leading-7 text-[#e4d5e7]'>Responsabilidade Social</h3>
                            <p className='mt-2 text-[#e1dce2]'>Comprometemo-nos a contribuir para uma sociedade mais justa através de práticas empresariais responsáveis e sustentáveis.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sobre;