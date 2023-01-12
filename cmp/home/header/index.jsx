import Image from "next/image";
import Data from "./header_data.json";
import {Transition } from '@headlessui/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Fragment } from 'react';
import { Menu } from '@headlessui/react';
import { useState, useEffect} from "react";
const Header = ()=>{
const [arrow,setArrow] = useState(false);
const [show,setShow] = useState("hidden");
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Mouse_Over =(index)=>(
  index == 2   ?  setArrow(true)  : null 
)
const Mouse_Out =(index)=>(
  index == 2    ?  setArrow(false)  : null 
)
return(  
    <>
    <div className="grid grid-cols-10 bg-white justify-items-center p-3 text-sm font-sans  ">
        {
          Data.map((item,index)=>{        
          return(
            <div className="text-center justify-items-center" key={index}>
                <Image src={item.pic} width={64} height={64} alt="surf_tree" className="m-auto" />
                <Menu>                  
                    <Menu.Button className={`hover:text-[#2874F0]`} onMouseOver={()=>Mouse_Over(index)} onMouseOut={()=>Mouse_Out(index)}>
                       {item.title}{item.dropdown && <KeyboardArrowDownIcon className="text-lg" />}              
                    </Menu.Button>   
                     { item.dropdown && arrow && <div onMouseOver={()=>setArrow(true)} onMouseOut={()=>setArrow(false)} className="border grid grid-col gap-y-4 absolute bg-white text-justify m-auto p-4 left-[180px] z-50">
                      {
                        item.dropdownMenu.map((subItem,subIndex) =>(                     
                         <Menu.Item key={subIndex}>                      
                           {({ active }) => (
                             <a
                               href="#" className={`${active ? 'bg-white text-[#2874F0]' : 'bg-white text-black'}`}> 
                               {subItem.subtitle}{subItem.dropdown && <KeyboardArrowRightIcon className="text-lg text-right"/> }
                                { subItem.dropdown && arrow && <div style={{boxShadow:" inset 20px 0px 23px -30px rgba(0,0,0,0.75)"}} onMouseOver={()=>setArrow(true)} onMouseOut={()=>setArrow(false)} className=" w-72 border grid grid-col gap-y-4 absolute bg-white text-justify m-auto px-10 p-4 left-[190px] top-[0px] z-0">
                                  <h6>MORE IN MEN'S TOP WEAR</h6>
                                  {
                                    subItem.dropdownMenu.map((deepItem,deepIndex) =>(                     
                                    <Menu.Item key={deepIndex} as={Fragment}>                      
                                      {({ active }) => (
                                        <a
                                          href="#" className={`${active ? 'bg-white text-[#2874F0]' : 'bg-white text-black'}`}> 
                                          {deepItem.deeptitle}                                          
                                        </a>
                                      )}
                                    </Menu.Item>
                                  ))                   
                                  }</div> 
                                }
                             </a>
                           )}
                         </Menu.Item>
                       ))                   
                      }</div> 
                     }
       
                 </Menu>             
            </div>             
             )}
             )
        }      
    </div>   
    </>
)}
export default Header;