import data from "./data"; 
const Footer = ()=>(
<div className="border pt-10 p-5 pb-0">
    <p style={{color:"#787878"}} className="font-bold text-sm mb-3">Top Stories:
        <span style={{color:"#515151"}} className="font-bold text-sm"> Brand Directory</span>
    </p>
    {
        data.map((item,index)=>(
            <p 
                key={index}
                className="text-sm font-medium"
                style={{color:"#787878"}}>{item.title}: 
                {
                    item.subtitle.map((subItem,subIndex)=>(
                        <span 
                            key={subIndex}
                            style={{color:"#878787",fontSize:"14px"}}
                            className="text-current font-normal text-sm"> {subItem.desc}
                            <span className="text-neutral-900"> | </span>
                        </span>                                                                   
                    ))
                }                       
            </p>
        ))
    }      
</div>
)
export default Footer;