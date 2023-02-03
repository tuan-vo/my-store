import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import './header.css'
import { motion } from 'framer-motion'
import { NavLink, useNavigate, Link } from "react-router-dom"
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/logo.png'
import userIcon from '../../assets/images/user_icon.png'
import useAuth from '../../custom-hooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
const nav__links = [
  {
    path: 'home',
    display: 'Trang Chủ'
  },
  {
    path: 'shop',
    display: 'Cửa Hàng'
  },
  {
    path: 'cart',
    display: 'Giỏ Hàng'
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const profileActionRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  const logout =() =>{
    signOut(auth).then(()=>{
      toast.success('Đăng xuất thành công')
    }).catch(err=>{
      toast.error(err.message)
    })
  }

  const navigateToCart = () =>{
    navigate('/cart')
  }
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  const ProfileActionsToggle = () => profileActionRef.current.classList.toggle('show__profileActions')
  useEffect(() => {
    stickyHeaderFunc()
    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })
  return <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
            <div>
              <h1>iStore</h1>
            </div>
          </div>

          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className="menu">
              {
                nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav__acitve' : ''}>{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>

          <div className="nav__icons">
            <span className='fav__icon'>
              <i className="ri-heart-line"></i>
              <span className="badge">1</span>
            </span>
            <span className="cart__icon" onClick={navigateToCart}>
              <i className="ri-shopping-cart-line"></i>
              <span className="badge">{totalQuantity}</span></span>
            <div className='profile'>
              <motion.img  onClick={ProfileActionsToggle} whileTap={{ scale: 1.2 }} src={currentUser?currentUser.photoURL: userIcon} alt="" />
              <div className="profile__actions" ref={profileActionRef} onClick={ProfileActionsToggle}>
                {currentUser ? <span onClick={logout}>Đăng xuất</span> :
                <div>
                  <Link to='/login'>Đăng nhập</Link>
                  <Link to='/signup'>Đăng ký</Link>
                </div>
                }
              </div>
            </div>
            <div className="mobile__menu" onClick={menuToggle}>
              <span><i className="ri-menu-line"></i></span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  </header>
}

export default Header