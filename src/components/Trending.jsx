import React from 'react'
import { Card, Container, Row, Col, Image } from 'react-bootstrap'
import wood from '../assets/images/trending/wood.jpg'
import bliss from '../assets/images/trending/bliss.jpg'
import forest from '../assets/images/trending/forest.jpg'
import harry1 from '../assets/images/trending/harry1.jpg'
import harry2 from '../assets/images/trending/harry2.png'
import assasins from '../assets/images/trending/theAssassin.jpg'

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <br/>
        <h1 id='trending' className='text-white text-center'>Trending Movies</h1>
        <Row>
          <Col md={4} className='movWrapper'>
            <Card className='text-center movImg'>
              <Image alt='wood' src={wood} className='images'/>
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
              <Image alt='wood' src={bliss} className='images'/>
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
              <Image alt='wood' src={forest} className='images'/>
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
              <Image alt='wood' src={harry1} className='images'/>
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
              <Image alt='wood' src={harry2} className='images'/>
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
              <Image alt='wood' src={assasins} className='images'/>
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

export default Trending
