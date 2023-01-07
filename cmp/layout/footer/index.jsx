import Alldetailes from "./allDetails";
import data from "./data"; 
import FlipkartDetails from "./flipkartDetails";
const Footer = ()=>(
<>
<div className="border-t pt-10 p-5 pb-0">
    <p  className="font-bold text-sm mb-3 text-[#787878]">Top Stories:
        <span className="font-bold text-sm text-[#515151]"> Brand Directory</span>
    </p>
    {
        data.map((item,index)=>(
            <p 
                key={index}
                className="text-sm font-medium text-[#787878]"
                >{item.title}: 
                {
                    item.subtitle.map((subItem,subIndex)=>(
                        <span 
                            key={subIndex}
                            className="text-current font-normal font-sans text-[#878787] text-xs"> {subItem.desc}
                            <span className="text-neutral-900"> | </span>
                        </span>                                                                   
                    ))
                }                       
            </p>
        ))
    }  
    <FlipkartDetails />
</div>
 <Alldetailes />
 </>
)
export default Footer;