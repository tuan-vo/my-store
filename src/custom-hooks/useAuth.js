

import {useState, useEffect} from 'react'
import { onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase'
const useAuth = () => {
    const [currentUser,setCurrenUser] = useState({})
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            console.log(user);
            if(user){
                setCurrenUser(user)
            }else{
                setCurrenUser(null)
            }
        })
    })
  return {
    currentUser
  }
}

export default useAuth