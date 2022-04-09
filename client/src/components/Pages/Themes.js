import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Themes = (props) => {
  const [themes, setThemes] = useState([]);
  const [usersThemes, setUsersThemes] = useState([])
  const [loading, setLoading] = useState(true)

  const normalizeThemes = (rawThemes) => {
    let users = rawThemes.map((rt) => rt.user_id);
    let uniqueIds = [...new Set(users)];
    let usersThemesData = uniqueIds.map((uid) => {
      let themes = rawThemes.filter((rt) => uid == rt.user_id);
      let { user_name, user_id, email } = themes[0];
      return {
        name: user_name,
        email: email,
        themes: themes,
        id: user_id
      }
    })
    return usersThemesData
  }

  useEffect(() => {
    getThemes();
  }, []);

  const card = (
  
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="div">
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Test
        </Typography>
        <Typography variant="body2">
        Test
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Next Theme</Button>
      </CardActions>
    </React.Fragment>
  );
  


  const getThemes = async () => {
    try {
      let res = await axios.get('/api/rooms');
      let normalizedUsersThemes = normalizeThemes(res.data);
      setThemes(res.data)
      setUsersThemes(normalizedUsersThemes);
      
      setLoading(false)
    } catch (error) {
      alert('Error at Themes');
      setLoading(false)
      
    }
  };

  if (loading) return <p>Loading</p>;

  return (  
   <div className='page'>
   <h1>Themes by User</h1>
     
   <p>{JSON.stringify(themes)}</p>

   <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
   
  </div>
  )
}


export default Themes