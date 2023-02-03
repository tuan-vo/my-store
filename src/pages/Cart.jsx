import React from 'react'
import '../styles/cart.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)
  return <Helmet title='Giỏ Hàng'>
    <CommonSection title='Giỏ Hàng' />
    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? <h2 className=' fs-4 text-center'>Không có mặt hàng nào được thêm vào giỏ hàng</h2> :
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Hình ảnh</th>
                      <th>tên sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Xoá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <Tr item={item} key={index}/>
                    ))}
                  </tbody>
                </table>

            }

          </Col>
          <Col lg='3'>
            <div>
              <h6 className='d-flex align-items-center justify-content-between'>Tổng tiền: 
              <span className='fs-4 fw-bold'>{new Intl.NumberFormat().format(totalAmount)} đ</span>
              </h6>
              
            </div>
            <p className='fs-6 mt-2'>Thuế và vận chuyển sẽ được tính khi thanh toán</p>
            <div>
              <button className="buy__btn w-100">
                <Link to='/checkout'>Thanh toán</Link>
              </button>
              <button className="buy__btn w-100 mt-3">
                <Link to='/shop'>Tiếp tục mua sắm</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
}

const Tr = ({item}) => {
  const dispatch = useDispatch()
  const deleteProduct =()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.name}</td>
    <td>{new Intl.NumberFormat().format(item.price)} đ</td>
    <td>{item.quantity}</td>
    <td><motion.i onClick={deleteProduct} whileTap={{ scale: 1.2 }} className="ri-delete-bin-line"></motion.i></td>
  </tr>
}
export default Cart