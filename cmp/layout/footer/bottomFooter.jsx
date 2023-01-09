import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import HelpIcon from '@mui/icons-material/Help';
import Image from 'next/image';
const  BottomFooter  = () =>(
    <>
        <div className="grid grid-cols-12 bg-[#172337] py-6 px-[60px] border-t">
            <div className="col-span-8">
                <div className="grid grid-cols-12">
                        <div className="col-span-3 text-white text-sm font-sans">
                        <WorkIcon  className="text-[#C6900E] mr-2" />
                        <span>Become a Seller</span>
                        </div>
                        <div className="col-span-2 text-white text-sm font-sans">
                        <StarsIcon className="text-[#C6900E] mr-2" />
                        <span>Advertise</span>
                        </div>
                        <div className="col-span-2 text-white text-sm font-sans">
                        <CardGiftcardIcon className="text-[#C6900E] mr-2" />
                        <span>Gift Cards</span>
                        </div>
                        <div className="col-span-2 text-white text-sm font-sans">
                        <HelpIcon className="text-[#C6900E] mr-2"  />
                        <span>Help Center</span>
                        </div>
                        <div className="col-span-3 text-white text-sm font-sans">
                        
                        <p>&#169; 2007-2023 Flipkart.com</p>
                        </div>
                            
                </div>           
            </div>
             <div className="col-span-4 ">
                <Image src="/payment.svg" width={377} height={18} alt="payment" />
            </div>
        
        
        </div>  
    </>
   
)      
export default BottomFooter;