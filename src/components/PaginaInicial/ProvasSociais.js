import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './customStyles.css';

const depoimentos = [
    {
        texto: "Sempre é muito bom falar da empresa Escoben, uma empresa na qual nos auxiliou desde de o principio da CK Rastreamento dando suporte contábil e jurídico e auxilio em  gestão com sistema web para gestão de cobranças facilitando e dando muita agilidade para nossa empresa. Escoben é exemplo de profissionalismo! Investe em  seus funcionários com novas tecnologias e sistemas dando possibilidade de crescerem junto ao cenário mundial e sempre os deixando atualizados e capacitados para o novo Mundo Digital, facilitando a vida de seus clientes.",
        nome: "Charles Klitzke",
        empresa: "CK Rastreamento LTDA",
    },
    {
        texto: 'Há 10 anos atrás quando iniciei a Ullemaq, procurei a Escoben para fazer a abertura da empresa. Em uma conversa com o Sr. Arthur, ele disse: "Márcio, se a Ullemaq sobrar R$5.000 em um mês, não financie uma camionete, guarde que mês que vem pode ser que falte". Uma frase que para muitos parece óbvia, mas pra mim, fez toda a diferença e continua fazendo até hoje. E assim completamos 10 anos com a Escoben sempre me assessorando para continuar crescendo. Por fim, agradeço a todos da Escoben.',
        nome: "Márcio Uller",
        empresa: "Ullemaq Confecções LTDA",
    },
    {
        texto: "A Escoben é uma contabilidade competente que realiza seus trabalhos com profissionalismo e ética. Sobre qualidade e agilidade, somente tenho a elogiar e agradecer a equipe. São prestativos e de fácil comunicação. Sempre buscam aperfeiçoar a qualidade de seus serviços, mantendo-se atualizados. Estou satisfeito com nossa parceria e por isso recomendo.",
        nome: "Gilmar Oss-Emer",
        empresa: "Manejalu Confecções LTDA",
    },
    {
        texto: "A Escoben não é uma simples contabilidade, é uma assessoria, é nossa bússola, com ela conseguimos visualizar e planejar o próximo passo a ser dado, passo seguro e sem incertezas, com a Escoben nos sentimos seguros. O sucesso de ambos andam lado a lado!",
        nome: "Adilson Balsanelli",
        empresa: "MBL Confecções LTDA",
    },
    {
        texto: "Meu nome é Andreia Schulz, tenho a empresa a 12 anos desde que iniciei a minha carreira como empresária, tenho a Escoben como minha contabilidade, sempre muito dedicados, prestativos, e me auxiliando para sempre fazer o melhor para meu funcionários só tenho a agradecer.",
        nome: "Andreia Schulz",
        empresa: "Déia Confecções LTDA",
    },
]

const ProvasSociais = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div className="slick-next custom-arrow">&#8250;</div>,
        prevArrow: <div className="slick-prev custom-arrow">&#8249;</div>,
    };
    return (
        <div className='slider-container'>
            <div className='mx-auto text-center'>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#e6d4e2]'>DEPOIMENTOS</h2>
                <p className='mt-0 text-xl font-semibold text-gray-900 sm:text-3xl'>Nossos Depoimentos</p>
            </div>

            <Slider {...settings} className='mt-10 max-w-xl sm:max-w-4xl mx-auto'>
                {depoimentos.map((item) => (
                    <div>
                        <blockquote className='text-sm text-center leading-8 text-black mx-12 max-w-sm sm:text-xl sm:leading-9 sm:max-w-2xl sm:mx-auto'>
                            <p>{item.texto}</p>
                        </blockquote>

                        <figcaption className='mt-8 text-base text-center'>
                            <div className='font-semibold text-black'>{item.nome}</div>
                            <div className='mt-1 text-gray-600'>{item.empresa}</div>
                        </figcaption>
                    </div>
                ))}
            </Slider>

            {/*
            <div className='bg-white'>
                    <div className='mx-auto flex max-w-6xl flex-col items-center gap-x-8 px-6 lg:px-8 xl:flex-row xl:items-stretch'>
                        <div className='w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-0'>
                            <figure className='relative isolate pt-6 sm:pt-12'>
                                <svg viewBox='0 0 162 128' fill='none' aria-hidden='true' className='absolute left-0 sm:left-20 top-0 -z-10 sm:h-32 h-20 stroke-black/10'>
                                    <path id='b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb' d='M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z' />
                                    <use href='#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb' x='86' />
                                </svg>
                                <div className='flex items-center justify-center w-full'>
                                    <img className='w-6 h-6 sm:w-12 sm:h-12 mr-20' src='https://img.icons8.com/material-sharp/96/long-arrow-left.png' alt='long-arrow-left' />
                                    <blockquote className='text-sm font-semibold text-center leading-8 text-black sm:text-2xl sm:leading-9'>
                                        <p>Gravida quam mi erat tortor neque molestie. Auctor aliquet at porttitor a enim nunc suscipit tincidunt nunc. Et non lorem tortor posuere. Nunc eu scelerisque interdum eget tellus non nibh scelerisque bibendum.</p>
                                    </blockquote>
                                    <img className='w-6 h-6 sm:w-12 sm:h-12 ml-20' src='https://img.icons8.com/material-two-tone/96/long-arrow-right.png' alt='long-arrow-right' />
                                </div>
                                <figcaption className='mt-8 text-base text-center'>
                                    <div className='font-semibold text-black'>Judith Black</div>
                                    <div className='mt-1 text-gray-600'>CEO of Workcation</div>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div> */}
        </div>

    )
}

export default ProvasSociais