import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Stack from "@mui/material/Stack";
import Container  from '@mui/material/Container';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {PlusSquareFilled, SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
 const Navbar = ()=> {
  return (
    <Box>   
      <AppBar position="static" sx={{bgcolor:"#2874F0",p:2,display:{xs:"none",md:"block"}}}>   
          <Container>
          <Stack direction="row" justifyContent="space-around" alignItems="center">
            <Stack direction="row" spacing={4} alignItems="center">    
           <Image src="/flipkart_logo.png" width={81} height={39}  alt="flipkart_logo" className="searchInput" /> 
            <Stack direction="row" className="w-96 bg-white" alignItems="center" justifyContent="space-between">
              <input type="text" name="search" className="w-80 text-black p-2 text-sm" placeholder="Search for products, brand and more" />
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
      <AppBar position="static" sx={{bgcolor:"#2874F0",p:0.5,display:{xs:"block",md:"none"}}}> 
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" aliginItems="center">
         <IconButton
              size="small"           
              color="inherit"
              aria-label="open drawer"           
              sx={{mr:1, my:0, display:{md:"none",xs:"block",sm:"block"}}}
              >
         <MenuIcon />
        </IconButton>
        <Image src="/flipkart_logo.png" width={71} height={29}  alt="flipkart_logo" className="searchInput" /> 
        </Stack>             
        <Stack direction="row" alignItems="center" spacing={2}> 
          <PlusSquareFilled className="text-sm"/>
          <ShoppingCartIcon className="text-lg" /> 
           <Button type="link" block className="text-inherit">
            Login
          </Button>
        </Stack>   
      </Stack> 
      <Stack direction="row" className="bg-white px-3 mt-2 rounded-sm" alignItems="center" justifyContent="flex-start">
             <SearchOutlined style={{color:"#2874F0",fontWeight:"bold"}} className="text-lg mr-2"/>
              <input type="text" name="search" className="w-80 text-black p-2 text-sm" placeholder="Search for products, brand and more" />          
            </Stack>
       </AppBar> 
    </Box>
  );
}
export default Navbar;