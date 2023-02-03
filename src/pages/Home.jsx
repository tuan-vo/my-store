import React, {useState,useEffect} from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import '../styles/home.css'
import heroImg from '../assets/images/ip-14-pro.jpg'
import Services from '../services/Services'
import ProductsList from '../components/UI/ProductsList'
import Clock from '../components/UI/Clock'
import Loading from '../components/UI/Loading'

import countImg from '../assets/images/iphone14.png'
import useGetData from '../custom-hooks/useGetData'

const Home = () => {
  const {data: products, loading} = useGetData('products')
  const [iPhoneProducts, setIPhoneProducts] = useState([])
  const [iPadProducts, setIPadProducts] = useState([])
  const [airPodsProducts, setAirPodsProducts] = useState([])
  const [watchProducts, setWatchProducts] = useState([])
  const year = new Date().getFullYear()
  useEffect(() => {
    const filterdIhoneProducts = products.filter(
      item => item.category === 'iPhone'
    );
    const filterdIPadProducts = products.filter(
      item => item.category === 'iPad'
    );
    const filterdAirPodsProducts = products.filter(
      item => item.category === 'airPods'
    );
    const filterdWatchProducts = products.filter(
      item => item.category === 'watch'
    );
    setIPhoneProducts(filterdIhoneProducts)
    setIPadProducts(filterdIPadProducts)
    setAirPodsProducts(filterdAirPodsProducts)
    setWatchProducts(filterdWatchProducts)
  }, [products])
  return (
    <Helmet title={"Home"}>
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero__content">
                <p className="hero_subtitle">Sản phẩm thịnh hành trong năm {year}</p>
                <h2>iPhone 14 Pro Max</h2>
                <p>iPhone 14 Pro Max đem đến những trải nghiệm không thể tìm thấy trên mọi thế hệ iPhone trước đó với màu Tím Deep Purple sang trọng, camera 48MP lần đầu xuất hiện, chip A16 Bionic và màn hình “viên thuốc” Dynamic Island linh hoạt, nịnh mắt.</p>
              <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to='/shop'>Mua ngay</Link></motion.button>
            </div>
          </Col>
          <Col lg='6' md='6' className='d-flex align-items-center'>
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className="">
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className="section__title ">
            Sản phẩm thịnh hành
            </h2>
          </Col>
          {
            loading ? 
            <Loading/>:
            <ProductsList data={iPhoneProducts}/>
          }
          
        </Row>
      </Container>
    </section>
    <section className="">
    <Container>
        <Row>
          <Col lg='12' className='text-center  mb-5'>
            <h2 className="section__title ">
              Sản phẩm có giá tốt
            </h2>
          </Col>
          <ProductsList data={iPadProducts}/>
        </Row>
      </Container>
    </section>
    <section className="timer__count">
      <Container>
        <Row>
          <Col lg='6' md='6' className='count__down-col'>
            <div className="clock__top-content">
              <h4 className='text-white fs-6 mb-2'>Ưu đãi có hạn</h4>
              <h3  className='text-white fs-5 mb-3'>iPhone 14 Pro</h3>
            </div>
            <Clock/>
            <motion.button whileTap={{scale:1.2}} className="buy__btn store__btn"><Link to='/shop'>Mua ngay</Link></motion.button>

          </Col>
          <Col lg='6' md='6' className='text-end counter__img'>
            <img src={countImg} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="">
    <Container>
        <Row>
          <Col lg='12' className='text-center  mb-5'>
            <h2 className="section__title ">
            Phụ kiện yêu thích
            </h2>
          </Col>
          <ProductsList data={airPodsProducts}/>
          <ProductsList data={watchProducts}/>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
  
}

export default Home