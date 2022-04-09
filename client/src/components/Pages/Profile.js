import axios from "axios";
import { AuthContext } from "../../providers/AuthProvider";
import React, { useContext } from "react";
import {useState,useEffect} from "react";

const Profile = (props) => {
  let auth = useContext(AuthContext);
  const [points, setUserPoints] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUser();
  })
  
  
  if (!auth.user) {
    return (
      <p> You should not be able to come here PLEASE redircet to LOGIN page</p>
    );
  }
  const getUser = async (pointStuff) => {
    try {
      let res = await axios.get("/api/points");
// res.data find the id that matches the auth.user.id  
   
      setUserPoints(...points, res.data)
      setLoading(false)
    } catch(error) {
      setLoading(false)
    }
  };
  if(loading) return <p>spinner here</p>
  
  
  return (
    <div>
      <h1>Profile</h1>
      <img className="album" src={auth.user.image}></img>
      <h2> {auth.user.name}</h2>
      <p> {auth.user.email}</p>
      <p> {auth.user.id}</p>
     
      
      
      
      <hr></hr>
      <p> points: </p>
      <p>{JSON.stringify(points)}</p>
      <button> Edit thing</button>
    </div>
  );
};
export default Profile;
