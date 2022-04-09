import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const RoomShow = (props) => {
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

const renderData = () => {
  const riddles = riddles.map((rid) => {
    <p>{rid.question}</p>
  })
  return riddles
}

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

// const renderRiddles = () => {
//   const riddles = riddles.map((rid) => {  
//     return (
//       <p>{riddles.question}</p>
//     )
//   })
//   return riddles
//   console.log(riddles)
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
    {renderData()}
    <hr />
    <p>{JSON.stringify(riddles)}</p>
  </div>
)
}
export default RoomShow