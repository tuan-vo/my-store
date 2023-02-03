import React from 'react'
import { Container,Row, Col, Form, FormGroup } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'
import { useSelector } from 'react-redux'
const Checkout = () => {

const totalQty =  useSelector(state => state.cart.totalQuantity)
const totalAmount =  useSelector(state => state.cart.totalAmount)

  return <Helmet title='Thanh Toán'>
    <CommonSection title='Thanh Toán'/>
    <section>
      <Container>
        <Row>
          <Col lg='8'>
            <h6 className='mb-4  fw-bold'>Thông tin thanh toán</h6>
            <Form className='billing__form'>
              <FormGroup className="form__group">
                <input type="text" placeholder='Nhập tên của bạn'/>
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='nhập gmail của bạn'/>
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='Nhập số điện thoại của bạn'/>
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='Địa chỉ nhận hàng'/>
              </FormGroup>
              <FormGroup className="form__group">
                <input type="text" placeholder='Yêu cầu'/>
              </FormGroup>
            </Form>
          </Col>
          <Col lg='4'>
            <div className="checkout__cart">
              <h6>Tổng sản phẩm: <span>{totalQty} </span></h6>
              <h6>Tổng tiền: <span>{new Intl.NumberFormat().format(totalAmount)} đ</span></h6>
              <h6><span>Vận chuyển:<br />Miễn phí</span> <span>0 đ</span></h6>
              <h4>Tổng chi phí: <span>{new Intl.NumberFormat().format(totalAmount)} đ</span></h4>
              <button className="buy__btn bg-white fw-bold w-100 ">
              Đặt hàng
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Checkout