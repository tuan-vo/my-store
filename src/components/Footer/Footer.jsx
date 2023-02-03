import React from 'react'
import './footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo-white.png'
const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='12' className='mb-4'>
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1 className='text-white'>iStore</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
                iStore là một cửa hàng uy tín hàng đầu Việt Nam, được apply uỷ quyền bán và bảo hành theo đạt chuẩn yêu cầu của apply. Và cũng là nơi bán sản phẩm của apply với giá siêu ưu đãi.
              </p>
          </Col>
          <Col lg='3' md='4' className='mb-4'>
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Danh mục hàng đầu</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>iPhone</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>iPad</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Watch</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>AirPods</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' md='4' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Liên kết</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Cửa hàng</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Giỏ hàng</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Đăng nhập</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Chính sách bảo mật</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' className='mb-4'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Liên Hệ</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                  <span><i className="ri-map-pin-line"></i></span>
                  <p>Tinh Chau, Quang Ngai City, Quang Ngai</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i className="ri-phone-line"></i></span>
                  <p>+033 492 0000</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-2'>
                <span><i className="ri-mail-line"></i></span>
                  <p>tuanvo2908t@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright">Copyright {year} developber by tuanvo. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer