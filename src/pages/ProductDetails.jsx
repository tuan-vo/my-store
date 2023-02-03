import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { useParams } from 'react-router-dom'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/product-details.css'
import { motion } from 'framer-motion'
import ProductsList from '../components/UI/ProductsList'
import { useDispatch } from 'react-redux'
import { cartActions } from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import Rating from '@mui/material/Rating';
import {db} from '../firebase'
import { doc,getDoc } from 'firebase/firestore'
import useGetData from '../custom-hooks/useGetData'
const ProductDetails = () => {
 
  const { id } = useParams()
  const {data:products} = useGetData('products')
  const [product, setProduct] = useState({})
  const docRef = doc(db,'products',id)
  const reviewUser = useRef('')
  const reviewMsg = useRef('')
  const dispatch = useDispatch()

  const [tab, setTab] = useState('desc')
  const [rating, setRating] = useState(null)
  const { imgUrl, name, category, price,
    //  avgRating, reviews,
      shortDesc, description } = product
  const relatedProducts = products.filter(item => item.category === category)

  const submitHandler = (e) => {
    e.preventDefault()
    const reviewUserName = reviewUser.current.value
    const reviewUserMsg = reviewMsg.current.value
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating: rating
    }
    console.log(reviewObj);
    toast.success('Đánh giá sản phẩm thành công')
  }

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
      id,
      imgUrl,
      name,
      price
      })
    )
      toast.success('Thêm vào giỏ hàng thành công')
  }
  useEffect(()=>{
    const getProduct = async ()=>{
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        setProduct(docSnap.data())
      }else{
        console.log('Không có sản phẩm!');
      }
    }
    getProduct()
  },[])
  useEffect(()=>{
    const getProduct = async ()=>{
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        setProduct(docSnap.data())
      }else{
        console.log('Không có sản phẩm!');
      }
    }
    getProduct()
    window.scrollTo(0,0);

    
  },[id])
  return <Helmet title={name}>
    <CommonSection title={name} />
    <section>
      <Container className='pt-0'>
        <Row>
          <Col lg='6'>
            <img className='product__img' src={imgUrl} alt="" />
          </Col>
          <Col lg='6'>
            <div className="product__details">
              <h2>{name}</h2>
              <span>Phân loại: {category}</span>
              <div className="product__rating my-2">
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
              </div>
              <span className='product__price'>{new Intl.NumberFormat().format(price)} đ</span>
              <p className='mt-3'>{shortDesc}</p>
              <motion.button onClick={addToCart} whileTap={{ scale: 1.2 }} className="buy__btn">
                Thêm vào giỏ hàng
              </motion.button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <div className="tab__wrapper d-flex align-items-center gap-5">
              <h6 onClick={() => { setTab('desc') }} className={`${tab === "desc" ? "active__tab" : ""}`}>Mô tả</h6>
              <h6 onClick={() => { setTab('rev') }} className={`${tab === "rev" ? "active__tab" : ""}`}>
                Đánh giá
                {/* ({reviews.length}) */}
              </h6>
            </div>
            {
              tab === 'desc' ?
                <div className="tab__content mt-3">
                  <p>{description}</p>
                </div>
                : <div className="product__review mt-3">
                  <div className="review__wrapper">
                    {/* <ul>
                      {
                        reviews?.map((item, index) => (
                          <li key={index} className='mb-4'>
                            <h6>Tuan Vo</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))
                      }
                    </ul> */}
                    <div className="review__form">
                      <h4>Đánh giá của bạn về sản phẩm</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input ref={reviewUser} type="text" required placeholder='Nhập tên của bạn' />
                        </div>
                        <div className="form__group rating__group">
                        <Rating name="half-rating" defaultValue={5} precision={1} />
                        </div>
                        <div className="form__group mb-0">
                          <textarea ref={reviewMsg} row={4} type="text" required placeholder='Nội dung' />
                        </div>
                        <motion.button whileTap={{scale:1.2}}  type='submit' className="buy__btn mt-1">Gửi</motion.button>
                      </form>
                    </div>
                  </div>
                </div>
            }
          </Col>
          <Col lg='12' className='mt-5'>
            <h2 className="related__title mb-3">
              Các sản phẩm tương tự bạn cũng có thể thích
            </h2>
          </Col>
          <ProductsList data={relatedProducts} />
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default ProductDetails