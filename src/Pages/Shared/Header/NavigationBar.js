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
import './Navigation.css'

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
  const admin = useSelector(state => state.products.admin);
  return (
    <AppBar position="static">
      <Container maxWidth="xl" className='bg-dark'>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Triangle E-Commerce
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
                display: { xs: 'block', md: 'none', width:'48%' },
              }}            
            >
            <Link className='btn btn-dark mx-3 my-2  d-block mr-0' to='/home'>Home</Link>
            <Link className='btn btn-dark mx-3 my-2 d-block' to='/addProduct'>Add Product</Link>
            <Link className='btn btn-dark mx-3 my-2 d-block' to='/tShirts'>T-Shirts</Link>
            <Link className='btn btn-dark mx-3 my-2 d-block' to='/shirts'>Shirts</Link>
            <Link className='btn btn-dark mx-3 my-2 d-block' to='/pants'>Pants</Link>
            <Link className='btn btn-dark mx-3 my-2 d-block' to='/jackets'>Jackets</Link>
              
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}
          >
            Triangle E-Commerce
          </Typography>
          <Box sx={{ flexGrow: 1, marginLeft:'50px', display: { xs: 'none', md: 'flex' } }}>
            <Link className='btn btn-light me-2' to='/home'>Home</Link>
            {/* <Link className='btn btn-dark me-2' to='/addProduct'>Add Product</Link> */}
            <Link className='btn btn-light me-2' to='/tShirts'>T-Shirts</Link>
            <Link className='btn btn-light me-2' to='/shirts'>Shirts</Link>
            <Link className='btn btn-light me-2' to='/pants'>Pants</Link>
            <Link className='btn btn-light me-2' to='/jackets'>Jackets</Link>
          </Box>

          <Box sx={{ flexGrow: 0, alignItems:'center' }}>
          <i onClick={() => setState(true)} className="me-4 text-light fs-4 fas fa-shopping-bag "> <span className=''>{cart?.length ? cart?.length : ''}</span> </i> 
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
              className='navigation'
            >
                
                {
                  user?.email ? <><MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{display : 'block'}} textAlign="center">{user?.displayName}</Typography>
                </MenuItem>

               <MenuItem as={Link} to= '/shoppingCart' onClick={handleCloseNavMenu}>
                <Typography >Cart</Typography>
              </MenuItem>

               <MenuItem as={Link} to= '/myOrders' onClick={handleCloseNavMenu}>
                <Typography >MyOrders</Typography>
              </MenuItem>
               
              </>: ''
                }
                {
                  admin.role ? <><MenuItem as={Link} to= '/allOrders' onClick={handleCloseNavMenu}>
                  <Typography >All Orders</Typography>
                </MenuItem>
                 <MenuItem as={Link} to= '/makeAdmin'  onClick={handleCloseNavMenu}>
                  <Typography >Make Admin</Typography>
                </MenuItem>
                <MenuItem as={Link} to= '/addProduct'  onClick={handleCloseNavMenu}>
                  <Typography >Add Product</Typography>
                </MenuItem>
                 <MenuItem as={Link} to= '/manageAllProducts' onClick={handleCloseNavMenu}>
                  <Typography >Manage All Products</Typography>
                </MenuItem></> : ''
                }
                <MenuItem as={Link} to='/login'  onClick={handleCloseNavMenu}>
                {user?.email ? <i onClick={logOut} className="fas fa-sign-out-alt"> </i> : <Typography >Log in</Typography>}
                </MenuItem>
                
            </Menu>
          </Box>
        </Toolbar>
        <ShoppingCartDrawer setState={setState} state={state}></ShoppingCartDrawer>
      </Container>
    </AppBar>
  );
};
export default NavigationBar;