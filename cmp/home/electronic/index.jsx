import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./elect.json";
import { ArrowForwardIos,ArrowBackIos } from "@mui/icons-material";
let slideToShow = 5;
const NextBtn = (props) =>{
const {className, onClick,slideCount, currentSlide} = props;
    console.log(props);
    return(
        <>
            {currentSlide !== slideCount - 5 && (
                <div className={className} onClick={onClick}>
                    <ArrowForwardIos style={{color:"black"}} className="m:0" />
                </div>
            )}
        </>
    );
};
const PreviousBtn = (props) =>{
    const {className, onClick ,currentSlide} = props; 
    return(
        <>{currentSlide !==0 && (
           <div className={className} onClick={onClick}>
              <ArrowBackIos style={{color:"black" }} />
            </div>
        )}
        </>     
    );
}
const Electronic = () =>(   
    <div className="border grid grid-cols-12 my-5">
        <div className="border col-span-2">
            <div className="col-span-2 gap-1 h-[361px]  flex flex-col items-center justify-end ">
                <h2 className="text-3xl font-sans mb-7 text-center">Best of Electronics</h2>
                <button className="bg-[#2874F0] text-white text-sm p-2 w-[90px] h-[40px] rounded">VIEW ALL</button>        
                <div className="relative h-[120px] w-[100%]">
                <Image src="/electric.jpeg" layout="fill" alt="big_offer" />
                </div>       
            </div>
        </div>
        <div className="col-span-10 bg-white">            
            <div className="grid grid-cols-10  "> 
                <div className="col-span-10">
                    <Slider  
                        infinite={false}
                        speed={500}
                        slidesToShow ={slideToShow}
                        slidesToScroll={4}
                        pauseOnHover = {true}
                        prevArrow={<PreviousBtn />}
                        nextArrow={<NextBtn />}
                        >
                        {
                            Data.map((item,index) =>(
                                <div key={index} className=" h-[347px] col-span-2 flex-col py-5">
                                    <div className="  h-[200px] w-[200px] relative m-auto">
                                        <Image src={item.pic} layout="fill" alt="sumsung" />
                                    </div>
                                    <div className="flex items-center flex-col mt-4 gap-3" title="Form 3999">
                                        <h6>{item.props}</h6>
                                        <p className="text-[#388E3C] text-lg">Form <i class="fa fa-inr" aria-hidden="true"></i>{item.price}</p>
                                        <h5 className="text-[#797979]">{item.com}</h5>
                                    </div>        
                            </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>        
        </div>
    </div>
)
export default Electronic;