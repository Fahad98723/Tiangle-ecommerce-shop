import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFirebase from '../../../Hooks/useFirebase';
import ShoppingCartDrawer from '../../ShoppingCartDrawer/ShoppingCartDrawer';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavigationBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [state, setState] = React.useState(false);

  const user = useSelector(state => state.products.user)
  const cart = useSelector(state => state.products.cart)

  const {logOut} = useFirebase()
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}  
              sx={{
                display: { xs: 'block', md: 'none', width:'50%' },
              }}            
            >
              <Link className='btn btn-dark m-3 w-75 mr-0' to='/home'>Home</Link>
            <Link className='btn btn-dark m-3 w-75' to='/addProduct'>Add Product</Link>
            <Link className='btn btn-dark m-3 w-75' to='/tShirts'>T-Shirts</Link>
            <Link className='btn btn-dark m-3 w-75' to='/shirts'>Shirts</Link>
            <Link className='btn btn-dark m-3 w-75' to='/pants'>Pants</Link>
            <Link className='btn btn-dark m-3 w-75' to='/jackets'>Jackets</Link>
            <Link className='btn btn-dark m-3 w-75' to='/shoppingCart'>Cart</Link>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link className='btn btn-dark me-2' to='/home'>Home</Link>
            {/* <Link className='btn btn-dark me-2' to='/addProduct'>Add Product</Link> */}
            <Link className='btn btn-dark me-2' to='/tShirts'>T-Shirts</Link>
            <Link className='btn btn-dark me-2' to='/shirts'>Shirts</Link>
            <Link className='btn btn-dark me-2' to='/pants'>Pants</Link>
            <Link className='btn btn-dark me-2' to='/jackets'>Jackets</Link>
          </Box>

          <Box sx={{ flexGrow: 0, alignItems:'center' }}>
          <i onClick={() => setState(true)} className="me-4 text-black fs-4 fas fa-shopping-bag "> <span className=''>{cart.length ? cart.length : ''}</span> </i> 
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.photoURL ? user.photoURL : "/static/images/avatar/2.jpg"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
                
                <MenuItem  onClick={handleCloseNavMenu}>
                  {
                    !user?.email ?<Link to='/login'>Log in</Link> : ''  
                  }
                </MenuItem>
                {
                  user?.email ? <><MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{display : 'block'}} textAlign="center">{user?.displayName}</Typography>
                </MenuItem> <MenuItem  onClick={handleCloseNavMenu}>
                <Link to= ''>Dashboard</Link>
                </MenuItem>

               <MenuItem  onClick={handleCloseNavMenu}>
                <Link to= '/shoppingCart'>Cart</Link>
              </MenuItem>
              
              <MenuItem  onClick={handleCloseNavMenu}>
              <i onClick={logOut} className="fas fa-sign-out-alt"></i>
              </MenuItem></>: ''
                
                }
                
           
            </Menu>
          </Box>
        </Toolbar>
        <ShoppingCartDrawer setState={setState} state={state}></ShoppingCartDrawer>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;