import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../providers/AuthProvider'
import {AppBar, Toolbar, Typography, Box} from '@mui/material'
import image from '../Images/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import {styled,alpha} from '@mui/material/styles'
import {InputBase} from '@mui/material'
import Button from '@mui/material/Button'
import MenuIcon from '@mui/icons-material/Menu';
import {Container} from '@mui/material'
import {Menu} from '@mui/material'
import {MenuItem} from '@mui/material'
import {Tooltip} from '@mui/material'
import { Avatar } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import {Nav, Navbar,} from 'react-bootstrap'



const NavBar = () => {
  const auth = useContext(AuthContext);
  const [anchorElUser,setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
  
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  
  
  const renderRightNav = () => {
    if(auth.user) {
      return <Button className='btn1'variant="contained" onClick={auth.handleLogout}>Logout</Button>
    }
    return (
      <>
        
      <Button className='btn' variant='contained' type="button" href="/login">Login</Button>
        <Button className='btn' variant='contained' href='/register'>Register</Button>
       

        
    </>)
  };
  
  const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  
  return (
    
      <AppBar position="static" sx={{background: 'black'}} >
        
        <Toolbar>
          <img src={image} width='120px'></img>
          <IconButton />
          <MenuIcon/>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            
          </Box>          
          
          
          <Box>
          <Link className='nav' to='/'>Home</Link>
        <Link className='nav'to='/themes'>Theme</Link>
        <Link className='nav'to='/profile'>Profile</Link>
            <Link className='nav'to='/about'>About</Link>
            </Box>
          <Box>
            
           <Search sx={{marginLeft:'300px'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          
          <div>
           
            {renderRightNav()}
              
      </div>
        </Toolbar>
        </AppBar>
      
    
  );
};

export default NavBar
