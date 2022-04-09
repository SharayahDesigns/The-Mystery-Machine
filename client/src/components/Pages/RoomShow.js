import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Riddle from '../Riddle'
import RiddleForm from '../RiddleForm'

const RoomShow = () => {
  const [riddles, setRiddles] = useState ([])
  const [loading, setLoading] = useState(true)
useEffect(()=>{
  getRiddles()
},[])
// const addRiddle = async (riddle)=>{
//   let res = await axios.post(`/api/rooms/${id}`)
//   setRiddles([...riddles, res.data])
// }
// const updateRiddle = async(riddle)=>{
//   let res = await axios.put('/api/rooms/:id')
//   const updateRiddles = riddles.map(i => i.id === res.data.id ? res.data : 1)
//   setRiddles(updateRiddles)
// }
// const deleteRiddle = async(id)=>{
//   let res = await axios.delete('/api/rooms/:id')
//   setRiddles(riddles.filter(i=> i.id !== id))
// }
const getRiddles = async () =>{
  try {
    let res = await axios.get(`api/rooms/${params.id}`);
    setRiddles(res.data)
    setLoading(false)
  } catch (error) {
    alert('Error in Show')
    setLoading(false)
  }
};
// const renderRiddles =()=>{
//   return riddles.map(i => <Riddle deleteRiddle={deleteRiddle} key={riddles.id} {...r} updateRiddle={updateRiddle}/>)
// }
const params = useParams()
const location = useLocation()
return (
  <div>
    <h1>Room Show</h1>
    {/* <h1>Room: {location.state.name}</h1> */}
    {/* <p>ID: {params.id}</p> */}
    {/* <RiddleForm addRiddle={addRiddle} /> */}
    <hr />
    {/* {renderRiddles()} */}
    <hr />
    <p>{JSON.stringify(riddles)}</p>
  </div>
)
}
export default RoomShow