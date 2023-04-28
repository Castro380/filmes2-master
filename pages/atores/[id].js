import Galeria from '@/components/Galeria'
import Pagina from '@/components/Pagina'
import apiFilmes from '@/services/apiFilmes'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Detalhes = ({ ator, imagens, filmes, series }) => {
    return (
        <Pagina titulo={ator.name}>

            <Row>
                <Col md={3}>
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + ator.profile_path} />
                </Col>

                <Col md={9}>
                    <p><strong>Data de Nascimento: </strong>{ator.birthday}</p>
                    <p><strong>Local de Nascimento: </strong>{ator.place_of_birth}</p>
                    <p><strong>Biografia: </strong>{ator.biography}</p>
                </Col>
            </Row>

             <Galeria titulo= "imagens"lista={imagens} foto="file_path" size={1} /> 
             <Galeria titulo="Filmes em que Atuou" lista={filmes} foto="poster_path"  /> 
             <Galeria titulo="Séries em que Atuou" lista={series} foto="poster_path" link="/series/" /> 


        </Pagina>
    )
}

export default Detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const resultado = await apiFilmes.get('/person/' + id + '?language=pt-BR')
    const ator = resultado.data

    const resImages = await apiFilmes.get('/person/' + id + '/images?language=pt-BR')
    const imagens = resImages.data.profiles

    const resFilmes = await apiFilmes.get('/person/' + id + '/movie_credits?language=pt-BR')
    const filmes = resFilmes.data.cast

    const resTv = await apiFilmes.get('/person/' + id + '/tv_credits?language=pt-BR')
    const series = resTv.data.cast

    return {
        props: { ator, imagens, filmes, series }
    }
}