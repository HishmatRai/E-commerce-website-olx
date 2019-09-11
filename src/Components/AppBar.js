import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Popup from "reactjs-popup";
import { MdHome } from "react-icons/md";
import { MdContactMail } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { MdAddToQueue } from "react-icons/md";
import Button from '@material-ui/core/Button';
import { MdViewStream } from 'react-icons/md';
import './Allcss.css';
import {Link} from 'react-router-dom'

import ReactTooltip from 'react-tooltip'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }
const Card = ({ title }) => (
  <div className="card">
    <div style={{color:"black"}} className="header">{title}  <Button  size="large" style={{ color: "#fff", backgroundColor: "#3f50b5", marginTop: "30px" }}>
                        <MdViewStream />View
                    </Button></div>
    <div className="content" style={{color:"black"}}>
    
    {/* <div className="content" style={{color:"black"}}>
      45
      </div>
      <div className="content" style={{color:"black"}}>
      45
    </div> */}
  
    </div>
  </div>
);
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu 
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography className={classes.title} variant="h6" noWrap>
              <img  src="https://www.saylaniwelfare.com/public_html/images/saylani/Saylani-logo.png"  width="200px"/>
         Saylani Online Shop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <p data-tip="Home"> 
          <Link to="/">
            <div style={{marginRight:"10px"}}><MdHome /></div>
            <ReactTooltip /></Link></p>
          {/* <p data-tip="Shop"> 
            <div style={{marginRight:"10px"}}><MdShop /></div>
            <ReactTooltip /></p> */}
          <p data-tip="Contact"> 
          <Link to="/contactus">
            <div style={{marginRight:"10px"}}><MdContactMail /></div>
            <ReactTooltip /></Link></p>
            <p data-tip="Admin Panel"> 
            <Link to="/adminlogin">
            <div style={{marginRight:"10px"}}><MdAddToQueue />
            </div>
            <ReactTooltip /></Link></p>

       
            
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Popup className="popup-content"
      trigger={
        <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={props.myCart.length} color="secondary">
                <MdAddShoppingCart />
              </Badge>
            </IconButton>}
      position="bottom right"
      on="hover"
    >
          {
            props.myCart.length ? 
            <div>
            {props.myCart.map((val,i)=>{
              return(
                <div>

<table className="table">
  {/* <tr>
    <th className="th">Image</th>
    <th className="th">Title</th>
    <th className="th">Price</th>
    <th className="th">Quantity</th>
  </tr> */}
  <tr>
    <td>
 <img width="40px" src={val.image} />

    </td>
    <td>
    <span  style={{color:"black"}}>{val.title}</span>

    </td>
    <td>
    <span style={{color:"#3f51b5"}}>{val.price}</span> 

    </td>

    <td>
    <span style={{color:"#3f51b5"}}>{val.count}</span> 

    </td>
    <td>
    ❌
    </td>
  </tr>
</table>
                </div>
              )
              })}
              <hr />
                <Button onClick={()=>props.props.history.push('./CardView',{data:props.mycard})}size="large" style={{ color: "#fff", backgroundColor: "#3f50b5",float: 'right' }}>
                    View Card
                    </Button>
              </div>
            :
            <div>
              <span style={{color:"black",fontWeight:"bold"}}>Your card is empty .</span>
            </div>
          }  
            
            </Popup>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <MdFavoriteBorder />
              </Badge>
            </IconButton>
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}