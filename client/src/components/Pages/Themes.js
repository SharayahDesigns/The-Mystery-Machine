import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

const Themes = (props) => {
  const [themes, setThemes] = useState([]);
  // const [usersThemes, setUsersThemes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getThemes();
  }, []);

 

  const renderData = () => {
    const rooms = themes.map((r) => {
      return (
        <Card key={r.id} sx={{ maxWidth: 500 }}>
          <CardMedia component="img" height="200" width="100%" image={r.image}/>
          <CardContent>
            <Typography variant="h4" component="div">
              {r.theme}
            </Typography>
            <Typography variant="h6" component="div">
              Created By: {r.user_id}
            </Typography>
            <Button variant="outlined">Enter Room</Button>
          </CardContent>
        </Card>
      )
    }
    
    )
    return rooms
  }

  const getThemes = async () => {
    try {
      let res = await axios.get('/api/rooms');
      // let normalizedUsersThemes = normalizeThemes(res.data);
      setThemes(res.data)
      // setUsersThemes(normalizedUsersThemes);
      
      setLoading(false)
    } catch (error) {
      alert('Error at Themes');
      setLoading(false)
      
    }
  };

  if (loading) return <p>Loading</p>;

  return (  
   <div className='page'>
   <h1>Themes by User!</h1>
     
   <p>{JSON.stringify(themes)}</p>
   {renderData()}

   
  </div>
  )
}


export default Themes