import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowForwardIos,ArrowBackIos } from "@mui/icons-material";
const NextBtn = (props) =>{
    const {className, onClick} = props;
    return(
        <div className={className} onClick={onClick}>
            <ArrowForwardIos style={{color:"black"}} className="m:0" />
        </div>
    );
};
const PreviousBtn = (props) =>{
    const {className, onClick} = props; 
    return(
        <div className={className} onClick={onClick}>
            <ArrowBackIos style={{color:"black" }} />
        </div>
    );
};
const Offer = () =>(
    <>
     <div className="mb-2">
        <Image src="/icic.jpg" width={1333} height={115} alt="icic" className="m-auto" />
     </div>
     <div className="grid grid-cols-12 bg-white">
        <div className="col-span-2 gap-1 h-[361px]  flex flex-col items-center justify-end ">
          <h2 className="text-3xl font-sans mb-7">Top Offers</h2>
          <button className="bg-[#2874F0] text-white text-sm p-2 w-[90px] h-[40px] rounded">VIEW ALL</button>        
          <div className="relative h-[120px] w-[100%]">
          <Image src="/big_offer.jpg" layout="fill" alt="big_offer" />
          </div>       
        </div>
        <div className="col-span-8 py-10">       
        <Slider  
            infinite={false}
            speed={500}
            slidesToShow={4}
            slidesToScroll={4}
            pauseOnHover = {true}
            prevArrow={<PreviousBtn />}
            nextArrow={<NextBtn />}
        >
            <a href="#" className="text-center justify-center">
                <div className="relative w-[180px] h-[167px] m-auto relative  ">
                    <Image src="/funcam-1080p.jpeg"  layout="fill" alt="swipe" className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " />
                </div>            
                 <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>              
            </a>
            <a href="#" className="text-center justify-center"> 
                <div className="relative  w-[180px] h-[167px] m-auto">
                <Image src="/original-imagky.jpeg" layout="fill" alt="swipe" />
            </div>
            <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
             </a>
            <a href="#" className="text-center justify-center"> 
            <div  className="relative   w-[180px] h-[167px] m-auto">
            <Image src="/chandiwlid-bertol.jpeg" layout="fill" alt="swipe" />
            </div>
            <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
          </a>
          <a href="#" className="text-center justify-center"> 
        <div className="relative w-[180px] h-[167px] m-auto">
        <Image src="/canon-original.jpeg" layout="fill" alt="swipe" />
        </div>
        <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
        </a>
        <a href="#" className="text-center justify-center"> 
        <div className="relative w-[180px] h-[167px] m-auto">
            <Image src="/dancing-cactus.jpeg" layout="fill" alt="swipe" />
        </div>
        <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
        </a>
        <a href="#" className="text-center justify-center"> 
        <div className="relative w-[180px] h-[167px] m-auto">
            <Image src="/bosch-original.jpeg" layout="fill" alt="swipe" />
        </div>
        <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
        </a>
        <a href="#" className="text-center justify-center"> 
        <div className="relative w-[180px] h-[167px] m-auto">
            <Image src="/original-imag.jpeg" layout="fill" alt="swipe" />
        </div>
        <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
        </a>
        <a href="#" className="text-center justify-center"> 

        <div className="relative  w-[180px] h-[167px] m-auto">
            <Image src="/original-imagk.jpeg" layout="fill" alt="swipe" />
        </div> 
        <h6 className="text-sm font-sans text-black font-medium mt-5">The World Of Music</h6>
                 <p className="text-[#388E3C] text-[16px] font-sans mt-4">Up to 80% off</p>
                 <p className="text-sm text-[#212121] mt-3">Handpicked for you..!!</p>     
        </a>
        
        </Slider>
      
        </div>
        <div className="col-span-2 relative">
            <Image src="/sumsung.jpeg" layout="fill" alt="sumsung" />

        </div>    
    </div> 
    
    </>
)
export default Offer; 