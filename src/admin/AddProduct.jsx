import React, {useState, useRef} from 'react'
import { Container, Row, Col, Form, FormGroup } from 'reactstrap'
import {toast} from 'react-toastify'
import {db, storage} from '../firebase'
import { ref,uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import Loading from '../components/UI/Loading'
const AddProduct = () => {
  const [title, setTitle] = useState('')
  const [shortDesc, setShorDesc] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [productImg, setProductImg] = useState(null)
  const [loading,setLoading] = useState(false)
  const inputPrice = useRef()
  const navigate = useNavigate()

  
  const addProduct = async e =>{
    e.preventDefault()
    setLoading(true)
    // add product to the firebase
    try {
      const docRef = await collection(db,'products')
      const storageRef = ref(storage,`productImages/${Date.now()+productImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef,productImg)
      uploadTask.on(()=>{
        toast.error('Hình ảnh không được tải lên!')
      },()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
          await addDoc(docRef,{
            name : title,
            shortDesc: shortDesc,
            description: description,
            category: category,
            price: price,
            imgUrl: downloadURL
          })
        })
      })
      setLoading(false)
      toast.success('Thêm sản phẩm thành công!')
      navigate('/dashboard/all-Products')
    } catch (error) {
      setLoading(false)
      toast.error('Thêm sản phẩm thất bại!')
    }
  }


  return <section>
    <Container>
      <Row>
        <Col lg='12'>
          {
            loading ? <Loading/>:
            <>
            <h4 className='mb-4'>Thêm sản phẩm mới</h4>
          <Form onSubmit={addProduct}>
            <FormGroup className='form__group'>
              <span>Tên sản phẩm</span>
              <input value={title} onChange={e => setTitle(e.target.value)} required type="text" placeholder='Nhập tên sản phẩm' />
            </FormGroup>
            <FormGroup className='form__group'>
              <span>Mô tả ngắn</span>
              <input value={shortDesc} onChange={e => setShorDesc(e.target.value)} required type="text" placeholder='Nhập mô tả ngắn cho sản phẩm' />
            </FormGroup>
            <FormGroup className='form__group'>
              <span>Mô tả</span>
              <textarea value={description} onChange={e => setDescription(e.target.value)} required type="text" placeholder='Nhập mô tả chi tiết cho sản phẩm' />
            </FormGroup>
            <div className='d-flex align-items-center justify-content-between gap-5'>
              <FormGroup className='form__group w-50'>
                <span>Giá</span>
                <input ref={inputPrice} value={price} onChange={e => setPrice(e.target.value)} required type="text" placeholder='Nhập giá' />
              </FormGroup>
              <FormGroup className='form__group w-50'>
              <span>Phân loại</span>
              <select value={category} onChange={e => setCategory(e.target.value)} required className='w-100 p-2'>
                <option>Chọn phân loại</option>
                <option value="iPhone">iPhone</option>
                <option value="iPad">iPad</option>
                <option value="watch">Watch</option>
                <option value="airPods">AirPods</option>
              </select>
            </FormGroup>
            </div>
            <FormGroup className='form__group'>
                <span>Hình ảnh sản phẩm</span>
                <input onChange={e=>setProductImg(e.target.files[0])} required type="file" />
              </FormGroup>
            <button type='submit' className="buy__btn"> Hoàn thành</button>
          </Form>
          </>
          }
        </Col>
      </Row>
    </Container>
  </section>
}

export default AddProduct