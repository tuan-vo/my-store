import React,{ useState,useEffect } from 'react'
import { Container, Row, Col,Table } from 'reactstrap'
import useGetData from '../custom-hooks/useGetData'
import { db } from '../firebase'
import { doc, deleteDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import Loading from '../components/UI/Loading'
import { Link } from 'react-router-dom'

const AllProducts = () => {
  const { data: products, loading } = useGetData('products')
  const [productsData,setProductsData] = useState([])
  const [product,setProduct] = useState(null)
  const deleteProduct = async (id) => {
    await deleteDoc(doc(db, 'products', id))
    toast.success('Đã xoá sản phẩm')
  }

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
  const editProduct = (item) =>{
    setProduct(item)
    console.log(product);
  }
  useEffect(() => {
    setProductsData(products)
    
  }, [products])
  return <section>
    <Container>
      <Row>
        <Col lg='12 text-end mb-2'>
          <Link to='/dashboard/all-Products/add-product' className="btn btn-primary">Thêm sản phẩm mới</Link>
        </Col>
        <Col lg='6' md='12' className='mb-2'>
          <div className="search__box">
            <input onChange={(e)=>hadleSearch(e)} type="text" placeholder='Tìm sản phẩm' />
            <span><i className="ri-search-line"></i></span>
          </div>
        </Col>
        <Col lg='6' md='6' className='mb-2'>
          <div className="fillter__widget">
            <select onChange={(e)=>handleFilter(e)}>
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
        <Col lg='12'>
          {
            loading ? <Loading /> :
              <Table className=''>
                <thead>
                  <tr className=''>
                    <th>Hình ảnh</th>
                    <th>Tên sản phẩm</th>
                    <th>Loại</th>
                    <th>Giá</th>
                    <th>
                      Hoạt động
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    productsData?.map(item => (
                      <tr key={item.id}>
                        <td><img src={item.imgUrl} alt="" /></td>
                        <td>{item.name}</td>
                        <td>{item.category}</td>
                        <td>{new Intl.NumberFormat().format(item.price)} đ</td>
                        <td>
                          <Link to={`/dashboard/all-products/edit-product/${item.id}`} className='btn btn-warning mx-2' >Cập nhật</Link>
                          <button onClick={() => { deleteProduct(item.id) }} className='btn btn-danger mx-2'>Xoá</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </Table>
          }

        </Col>
      </Row>
    </Container>
  </section>
}

export default AllProducts