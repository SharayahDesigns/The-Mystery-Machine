import React, {useContext} from 'react'
import {AuthContext} from '../../providers/AuthProvider'
import image from '../Images/van.png'

const Home = () => {
  let auth = useContext(AuthContext)
  if(!auth.user) {
  return <p>Todo: should not be able to Come her redircet to LOGIN page</p>
  }
  return (
    <div>
      <h1>WELCOME! </h1>
      <h2> {auth.user.name}</h2>
      <img className='logo' src={image} height={500} />
      
    
    </div>
  )
}
export default Home

