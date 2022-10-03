import React,{useState} from "react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";
import userimg from "../../../public/img/1.jpg";
import {useRouter}  from "next/router";
import Cookies from 'js-cookie'
import {
  Box,
  Menu,
  Typography,
  Link,
  ListItemButton,
  List,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
// import { UseRouter } from "next/router";
// import Cookies from 'js-cookie'

const ProfileDD = () => {
  const [anchorEl4, setAnchorEl4] = useState(null);
  const router = useRouter()


  const handleClick4 = (event) => {
    setAnchorEl4(event.currentTarget);
  };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const Acount =  ()=>{
    router.push('/admin')
  }
  const logout =  ()=>{
   
    Cookies.remove("token")
    Cookies.remove("user")
    router.push('/')
  }
  return (
    <>
      <Button
        aria-label="menu"
        color="inherit"
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick4}
      >
        <Box display="flex" alignItems="center">
          <Image
            src={userimg}
            alt={userimg}
            width="20"
            height="20"
            className="roundedCircle"
          />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
            }}
          >
            <FeatherIcon icon="chevron-down" width="20" height="20" />
          </Box>
        </Box>
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl4}
        keepMounted
        open={Boolean(anchorEl4)}
        onClose={handleClose4}
        sx={{
          "& .MuiMenu-paper": {
            width: "300px",
          },
        }}
      >
        <Box>
          <Box p={2} pt={0}>
         
            <List
              component="nav"
              aria-label="secondary mailbox folder"
              onClick={handleClose4}
            >
             
              
              <ListItemButton onClick={Acount}>
                <ListItemText   primary="Acounts" />
              </ListItemButton>
            </List>
          </Box>
          <Divider />
          <Box p={2}>
            
              <Button onClick={logout} fullWidth variant="contained" color="primary">
                Logout
              </Button>
          
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default ProfileDD;
