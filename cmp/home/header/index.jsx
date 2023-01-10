import Image from "next/image";
import Data from "./header_data.json";
import { Menu, Transition } from '@headlessui/react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";
const Header = ()=>{
const [arrow,setArrow] = useState("hidden");
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Drop =() =>(
   <Menu>
       <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              { ({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Duplicate
                </a>
              )}
            </Menu.Item>

   </Menu>
)
return(  
    <>
    <div className="grid grid-cols-10 bg-white justify-items-center p-3 text-sm font-sans  ">
        {
             Data.map((item,index)=>(
            <div className="text-center" key={index}>
                <Image src={item.pic} width={64} height={64} alt="surf_tree" />
                <Menu>
                    <Menu.Button className="hover:text-[#2874F0]" onClick={()=>alert("hello")}>
                        {item.title}{item.dropdown && <KeyboardArrowDownIcon className="text-lg" />  }               
                    </Menu.Button>  
                    { 
                     item.dropdown &&  <div style={{boxShadow:"8px 4px 34px -8px rgba(0,0,0,0.32)"}} className="flex flex-col gap-y-5 bg-white p-4 border font-sans z-20 absolute left-[180px] w-56">{ item.dropdownMenu.map((subItem,subIndex)=>(
                        <a href="#" className="text-justify hover:text-[#2874F0]" onMouseOver={()=>setArrow("block") }  >{subItem.subtitle} <KeyboardArrowRightIcon className={` text-sm ${arrow}`}  /></a> 
                       
                    ))}</div>

                        
                     
                    
                    }
                 </Menu>             
            </div>             
             ))
        }      
    </div>   
    </>
)}
export default Header;