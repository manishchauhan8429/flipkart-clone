import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import  TextField  from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import { Container } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Input, Space } from 'antd';
import {
  SearchOutlined
  
} from '@ant-design/icons';

export default function PrimarySearchAppBar() {
  return (
    <Box>
      <AppBar position="static" sx={{bgcolor:"#2874F0",p:2}}>   
          <Container>
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            <Stack direction="row" spacing={4} alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"           
            sx={{ mr: 2,display:{md:"none",xs:"block"}}}
            >
            <MenuIcon />
          </IconButton>
           <Image src="/flipkart_logo.png" width={81} height={39}  alt="flipkart_logo" className="searchInput" /> 
            <Stack direction="row" className="w-96 bg-white" alignItems="center" justifyContent="space-between" >
              <input type="text" name="search"  className="w-80 text-black p-2 text-sm" placeholder="Search for products, brand and more" />
              <SearchOutlined style={{color:"#2874F0",fontWeight:"bold"}} className="text-lg mr-2"/>
              
            </Stack>
            <Box>
              <button className="bg-white font-bold font-sans px-10 py-1" style={{color:"#2874F0"}}>Login</button>

            </Box>
          
            </Stack>
            
            <Box>
            <Stack direction="row" spacing={6}   alignItems="flex-end">
            
            <Typography>Become a Seller</Typography>
            <Typography>More</Typography>
            <Typography><ShoppingCartIcon /> Cart</Typography>
          </Stack>  
          </Box>   
           </Stack>         
                 
           </Container>     
         </AppBar>   
    </Box>
  );
}