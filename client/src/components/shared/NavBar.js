import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {AuthContext} from '../../providers/AuthProvider'
import {AppBar, IconButton, Toolbar, Typography, Box, Button} from '@mui/material'
import image from '../Images/logo.png'
import SearchIcon from '@mui/icons-material/Search'
import Search from '@mui/icons-material/Search'
import {styled,alpha} from '@mui/material/styles'
import {InputBase} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  const auth = useContext(AuthContext);
  const [anchorElUser,setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const renderRightNav = () => {
    if(auth.user) {
      return <button onClick={auth.handleLogout}>Logout</button>
    }
    return (
      <>
      <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='.client/src/components/shared/About.js'>About</Link>

        
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
    <React.Fragment>
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
         <Button ClassName='Button'sx={{marginLeft: 'auto'}} variant="contained">{renderRightNav()}</Button>
      </div>
        </Toolbar>
        </AppBar>
      </React.Fragment>
    
    
    
    // <div style={{display:'flex', justifyContent:'space-between'}}>
    //     <div>
    //     <Link to='/'>Home</Link>
    //     <Link to='/themes'>Theme</Link>
    //     <Link to='/profile'>Profile</Link>
    //     <Link to='/about'>About</Link>
        
        
    //   </div>
    //   <div>
    //     <div>{renderRightNav()}</div>
    //     </div>
    // </div>
  );
};

export default NavBar

