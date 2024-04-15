import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import HeaderPost from '../components/HeaderPost'
import WhatsappIcon from '../components/WhatsappIcon'
import Logo from "../images/LogoTeste.png"
import Footer from '../components/Footer'

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <strong className='text-gray-900 font-bold'>{text}</strong>
    },
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1 className='mt-16 mb-12 text-6xl font-bold'>{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className='mt-14 mb-8 text-4xl font-bold'>{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h2 className='mt-10 mb-6 text-2xl font-bold'>{children}</h2>,
        [BLOCKS.HEADING_4]: (node, children) => <h2 className='mt-8 mb-4 text-xl font-bold'>{children}</h2>,
        [BLOCKS.HEADING_5]: (node, children) => <h2 className='mt-6 mb-2 text-lg font-bold'>{children}</h2>,
        [BLOCKS.HEADING_6]: (node, children) => <h2 className='mt-4 text-sm font-bold'>{children}</h2>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p className='mt-8 text-xl text-gray-800 leading-8'>{children}</p>,

        /* 
        Para imagens no meio do texto:
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
            <GatsbyImage
              className='mt-8'
              image={node.data.target?.fields?.gatsbyImageData}
              alt='imagem'
            />
          ),
        
        [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
          <pre>
            {JSON.stringify(node, null, 2)}
          </pre>
        ) */

    }
}

const Post = ({ data }) => {
    const conteudoRichJson = JSON.parse(data.contentfulPost.conteudo.raw)

    return (
        <div>

            {/* <h1>{data.contentfulPost.titulo}</h1>
            <h3>{data.contentfulPost.categoria}</h3>

            <img src={data.contentfulPost.imagemApresentacao.resize.src} />

            <div>
                {documentToReactComponents(conteudoRichJson, options)}
            </div> */}

            {/* MENUS + BANNER BLOG */}
            <div className="bg-[#4f2158] py-32 sm:py-44">
                <h2 class="mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]">{data.contentfulPost.categoria}</h2>
                <p class="mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]">{data.contentfulPost.titulo}</p>
                <HeaderPost></HeaderPost>
            </div>

            <WhatsappIcon></WhatsappIcon>

            {/* CONTEUDO POST */}
            <div class="bg-white px-6 py-20 lg:px-8">
                <div class="mx-auto max-w-4xl text-base leading-7 text-gray-900">
                    <p class="text-xl font-semibold text-center leading-7 text-[#8e459c]">{data.contentfulPost.categoria}</p>
                    <h1 class="mt-2 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">{data.contentfulPost.titulo}</h1>
                    <div>{documentToReactComponents(conteudoRichJson, options)}</div>
                </div>
            </div>

            {/* LOGO + TEXTO */}
            <div class="bg-white mb-20">
                <div class="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-12">
                    <div class="col-span-12 lg:col-span-5 mx-auto mb-5 sm:mb-0 sm:ml-32">
                        <img src={Logo} alt="Logo Escoben Contabilidade" />
                    </div>
                    <div className="ml-5 h-22 w-2 bg-[#dbbee0]"></div>
                    <div class="col-span-11 lg:col-span-6">
                        <p class="sm:ml-0 ml-12 text-xl sm:text-xl font-montserrat leading-6 text-black">A Escoben Contabilidade está no mercado desde 19XX. Nosso propósito é transformar a sua empresa em um negócio de sucesso. Soluções completas para a sua gestão contábil, fiscal e trabalhista. Entre em contato!</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div class="text-center mb-20">
                <Link
                    to='#'
                    className='rounded-full bg-[#793486] drop-shadow-2xl px-8 py-4 mb-8 text-xl font-semibold text-white shadow-sm hover:bg-[#ac76f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b1ffe9]'
                >
                    Conheça todos os nossos serviços
                    <span aria-hidden='true'> &rarr;</span>
                </Link>
            </div>

            <Footer></Footer>
        </div>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulPost(slug: {eq: $slug}, visivel: {eq: true}) {
            titulo
            categoria
            conteudo {
                raw
            }
            imagemApresentacao {
                resize(height: 200, width: 300) {
                    src
                } 
            }
        }
    }
`
export default Post