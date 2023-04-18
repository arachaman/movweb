import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import avenger from '../assets/images/hero/avenger.jpg'
import blackp from '../assets/images/hero/blackp.jpg'
import captain from '../assets/images/hero/captainamer.jpg'
import daredevil from '../assets/images/hero/daredevil.jpg'
import joker from '../assets/images/hero/joker.jpg'
import spiderman from '../assets/images/hero/spiderman.jpg'

const Hero = () => {
  return (
    <div>
      <Container>
        <br/>
        <br/>
        <h1 id='hero' className='text-white text-center'>Hero Movies</h1>
        <Row>
          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={avenger} className='images'/>
              <div className='bg-light'>
                <div className='m-1'>
                  <Card.Title>Wood</Card.Title>
                  <Card.Text className='p-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={blackp} className='images'/>
              <div className='bg-light'>
                <div className='m-1'>
                  <Card.Title>Wood</Card.Title>
                  <Card.Text className='p-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={captain} className='images'/>
              <div className='bg-light'>
                <div className='m-1'>
                  <Card.Title>Wood</Card.Title>
                  <Card.Text className='p-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>

          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={daredevil} className='images'/>
              <div className='bg-light'>
                <div className='m-1'>
                  <Card.Title>Wood</Card.Title>
                  <Card.Text className='p-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={joker} className='images'/>
              <div className='bg-light'>
                <div className='m-1'>
                  <Card.Title>Wood</Card.Title>
                  <Card.Text className='p-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={spiderman} className='images'/>
              <div className='bg-light'>
                <div className='m-1'>
                  <Card.Title>Wood</Card.Title>
                  <Card.Text className='p-2'>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Hero
