import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Galeria = (props) => {

    const size = props.size || 2
    const link = props.link || '/filmes'

  return (
    <>
    {
        props.titulo &&
      <h2 className='mt-3'>Título: {props.titulo}</h2>

      }
      <Row>
                {props.lista.map(item => (
                    <Col className='mb-4' md={size}>
                        <Link href={link + item.id}>
                        {
                        item[props.foto]
                        ?
<                       Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + item[props.foto]} />
                        :
<                       Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJBa944e6Syuv6VzOumLBJsQzHkH_4gyKVg&usqp=CAU"}/>
                        }
                       </Link>
                    </Col>
                ))}
            </Row>
    </>

  )
}

export default Galeria