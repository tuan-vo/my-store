import React, {useState, useEffect} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col } from 'reactstrap'
import '../styles/shop.css'
import ProductsList from '../components/UI/ProductsList'
import useGetData from '../custom-hooks/useGetData'
import Loading from '../components/UI/Loading'
const Shop = () => {
  const {data: products, loading} = useGetData('products')
  const [productsData,setProductsData] = useState([])
  const handleFilter = e => {
    const filterValue = e.target.value
    console.log(filterValue);
      const fillteredProducts = products.filter(item=> item.category === filterValue)
      filterValue ===''?setProductsData(products):setProductsData(fillteredProducts)
  };
  const hadleSearch = e =>{
    const searchTerm = e.target.value
    const searchedProducts = products.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchedProducts)
  }
  useEffect(() => {
    setProductsData(products)
  }, [products])
  return <Helmet title='Cửa Hàng'>
    <CommonSection title='Cửa Hàng' />
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className='mb-2'>
            <div className="fillter__widget">
              <select onChange={handleFilter}>
              <option value=''>Tất cả sản phẩm</option>
              <option value="iPhone">iPhone</option>
              <option value="iPad">iPad</option>
              <option value="watch">Watch</option>
              <option value="airPods">Airpods</option>
              </select>
            </div>
          </Col>
          {/* <Col lg='3' md='6' className='mb-2'>
            <div className="fillter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col> */}
          <Col lg='6' md='12' className='mb-2'>
            <div className="search__box">
              <input type="text" onChange={hadleSearch} placeholder='Tìm sản phẩm' />
              <span><i className="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>

      <section>
        <Container>
          <Row>
            {
              loading?<Loading/>:
              productsData.length === 0 ? <h1 className='text-center'>Không có sản phẩm nào được tìm thấy!</h1>:<ProductsList data={productsData}/>
            }
          </Row>
        </Container>
      </section>
    </section>
  </Helmet>
}

export default Shop
