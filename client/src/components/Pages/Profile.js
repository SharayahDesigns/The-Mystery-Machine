import {AuthContext} from '../../providers/AuthProvider'
import React, {useContext} from 'react'

const Profile = () => {
   let auth = useContext(AuthContext)
  if(!auth.user) {
  return <p> You should not be able to come here PLEASE redircet to LOGIN page</p>
  }
  
 
  
  
  return (
    <div>
      <h1>Profile</h1>
     <img className='album' src={auth.user.image}></img>
      <p> {auth.user.name}</p>
      <p> {auth.user.email}</p>
      <p> points: </p>
      <button> Edit</button>
      
     
      
       {/* <p> {JSON.stringify(auth)}</p> */}
      
      
    </div>
  )
}

export default Profile
