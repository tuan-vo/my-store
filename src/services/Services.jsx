

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import './services.css'
import servicerData from '../assets/data/serviceData'

const Services = () => {
  return <section className="servicer">
    <Container>
      <Row>
        {
          servicerData.map((item, index) => (
            <Col lg='3' md='4' key={index}>
              <motion.div whileHover={{scale:1.1}} className="service__item" style={{background: `var(${item.bg})` }}>
                <span><i className={item.icon}></i></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))
        }

      </Row>
    </Container>
  </section>

}

export default Services