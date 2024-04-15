import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Header from './Header.js'
import Footer from "./Footer.js";

const POSTS_QUERY = graphql`
query {
    posts: allContentfulPost(filter: {visivel: {eq: true}}) {
      edges {
        node {
          titulo
          categoria
          descricao
          slug
          imagemApresentacao {
            resize(height: 500, width: 700) {
                src
            } 
          }
        }
      }
    }
  }
`

const PagesBlog = () => {
    const data = useStaticQuery(POSTS_QUERY)
    return (
        <div>
            {/* MENUS + BANNER BLOG */}
            <div className="bg-[#4f2158] py-32 sm:py-44">
                <h2 class="mt-10 mx-auto text-center font-montserrat text-3xl sm:text-7xl tracking-widest font-bold text-[#e4d5e7]">BLOG</h2>
                <p class="mt-4 mx-auto text-center font-montserrat text-base sm:text-3xl font-bold text-[#e4d5e7]">Acompanhe nossas publicações</p>
                <Header></Header>
            </div>

            <div className="bg-white font-montserrat">
                <div className="mx-auto max-w-7xl mt-0 sm:mt-20 mb-20 grid grid-cols-1 gap-x-8 gap-y-0 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                    {data.posts.edges.map(post => (
                        <div className='bg-slate-100 rounded-2xl drop-shadow-xl mt-12 sm:mt-0 mx-8 sm:mx-0' key={post.node.slug}>

                            <a href={post.node.slug} target='blank'>
                                <img className="aspect-[3/2] w-full rounded-t-2xl object-cover" src={post.node.imagemApresentacao.resize.src} alt="imagem" />
                                <h3 className="absolute top-3 right-3 rounded-full bg-gray-50 px-3 py-1.5 text-black font-semibold z-10">{post.node.categoria}</h3>
                                <h3 className="mx-4 mt-6 text-lg font-semibold leading-6 text-black">{post.node.titulo}</h3>
                                <p className="mt-4 mx-4 text-sm leading-6 text-black">{post.node.descricao}</p>
                            </a>
                            <div className="text-center mt-4 mb-4">
                                <a
                                    href={post.node.slug}
                                    className='text-lg mb-8 font-semibold text-gray-800'
                                >
                                    Leia o post
                                    <span aria-hidden='true'> &rarr;</span>
                                </a>
                            </div>
                        </div>

                    ))}
                </div>
            </div>


            <Footer></Footer>
        </div>
    )
}

export default PagesBlog