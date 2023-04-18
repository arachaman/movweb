import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Intro = () => {
  return (
      <div className='intro d-flex justify-content-end align-items-end'>
          <Container className='text-white text-center d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
                <div className='title'>NONTON GRATIS</div>
                <div className='title'>SAMPE MAMPUS</div>
                <div className='introButton mt-4 text-center'>
                    <Button className='px-3 py-2 fw-bold' href='#trending' variant='warning'>LET'S GO!</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
  )
}

export default Intro
