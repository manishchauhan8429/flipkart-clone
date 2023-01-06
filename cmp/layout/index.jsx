import Box  from "@mui/material/Box";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = ({children})=>(
    <>
        <Navbar />
            <Box sx={{bgcolor:"#F1F3F6"}}>
             {children}
            </Box>
        <Footer />
    </>
)
export default Layout;
