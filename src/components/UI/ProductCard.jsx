

import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/product-card.css'
import { ToastContainer, toast } from 'react-toastify';
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'
const ProductCard = ({item}) => {
    const dispatch = useDispatch()
    const addToCart = () =>{
        dispatch(
            cartActions.addItem({
            id:  item.id,
            name: item.name,
            price: item.price,
            imgUrl: item.imgUrl
            })
        )
        toast.success('Thêm sản phẩm vào giỏ hàng thành công!')

    }
    return (
        <Col lg='3' md='4'sm='6' className='mb-4'>
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
                </div>
                <div className='p-2 text-center product__info'>
                <h3 className="product__name"><Link to={`/shop/${item.id}`}>{item.name}</Link></h3>
                <span className='d-block'>{item.category}</span>
                </div>
                <div className="product__card-bottom px-5 d-flex align-items-center justify-content-between">
                    <span className="price">{new Intl.NumberFormat().format(item.price)} đ</span>
                    <motion.span whileTap={{scale:1.2}} onClick={addToCart}><i className="ri-add-line"></i></motion.span>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard