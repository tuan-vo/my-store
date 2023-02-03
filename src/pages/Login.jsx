import React, {useState} from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container,Row, Col,Form, FormGroup} from "reactstrap"
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import {toast} from "react-toastify"
import '../styles/login.css'
import Loading from '../components/UI/Loading'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const signIn = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email,password)
      const user = userCredential.user
      console.log(user);
      setLoading(false)
      toast.success('Đăng nhập thành công!')
      navigate('/checkout')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }
  return <Helmet title='Login'>
    <section>
      <Container>
        <Row>
          {
            loading ?<Loading/>:
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold fs-4 mb-3'>Đăng nhập</h3>
              <Form className='auth__form' onSubmit={signIn}>
                <FormGroup className='form__group'>
                  <input onChange={e=> setEmail(e.target.value)} type="email" placeholder="Nhập gmail của bạn" id="" value={email} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input onChange={e=> setPassword(e.target.value)} type="password" placeholder="Nhập mật khẩu" id="" value={password}/>
                </FormGroup>
                <button type='submit' className="buy__btn login__btn">Đăng nhập</button>
                <p>Bạn chưa có tài khoản iStore chưa? <Link to='/signup'>Tạo tài khoản ngay</Link></p>
              </Form>
          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Login