import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import McdButton from 'components/McdButton'
import './index.scss'

const Page404 = () => (
  <div className="mcd-404">
    <div className="stars">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="center-body">
              <h1>404</h1>
              <h3>page not found</h3>
              <p>The Page You Are Attempting To Reach Is Currently Not Available. This May Be Because The Page Does Not Exist Or Has Been Moved.</p>
              <McdButton round>Back To Home</McdButton>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  </div>
)

export default Page404
