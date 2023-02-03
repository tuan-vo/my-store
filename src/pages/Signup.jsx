import React, { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { Container, Row, Col, Form, FormGroup } from "reactstrap"
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth, db, storage } from '../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'
import Loading from '../components/UI/Loading';


const Signup = () => {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      const user =  userCredential.user;

      const storageRef = ref(storage, `images/${Date.now()+userName}`)
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        (error) => {
          console.log(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            //update user profile
            await updateProfile(user, {
              displayName: userName,
              photoURL: downloadURL,
            });
            console.log(user);
            console.log(user.uid);
            console.log(downloadURL);
            //store user date in firebase database
            await setDoc(doc(db, 'users', (user.uid)),{
              uid: user.uid,
              displayName: userName,
              email,
              photoURL: downloadURL,
            });
          })
        })
     setLoading(false)
     toast.success('Đăng ký tài khoản thành công!')
     navigate('/login')
    } catch (error) {
      setLoading(false)
      toast.error('Lỗi: ' + error)
      console.log(error);
    }
  }

  return <Helmet title='Signup'>
    <section>
      <Container>
        <Row>
          {
            loading ? <Loading/>:
            <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fs-4 mb-3'>Tạo tài khoản mới</h3>
            <Form className='auth__form' onSubmit={signup}>
              <FormGroup className='form__group'>
                <input onChange={e => setUserName(e.target.value)} type="text" placeholder="Nhập tên của bạn" id="" value={userName} />
              </FormGroup>
              <FormGroup className='form__group'>
                <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Nhập địa chỉ gmail của bạn" id="" value={email} />
              </FormGroup>
              <FormGroup className='form__group'>
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder="Nhập mật khẩu" id="" value={password} />
              </FormGroup>
              <FormGroup className='form__group'>
                <input onChange={e => setFile(e.target.files[0])} type="file"/>
              </FormGroup>
              <button type='submit' className="buy__btn login__btn">Đăng ký</button>
              <p>Bạn đã có tài khoản ? <Link to='/login'>Đăng Nhập</Link></p>
            </Form>
          </Col>
          }
        </Row>
      </Container>
    </section>
  </Helmet>
}

export default Signup