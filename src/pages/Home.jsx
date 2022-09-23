import React from 'react'
import "./styles/Home.css"
import {IoIosAddCircleOutline} from "react-icons/io"
import {BsHandbag} from "react-icons/bs"
import {FiTruck} from "react-icons/fi"
import {AiOutlineFileDone} from "react-icons/ai"
import {MdOutlineCancel} from "react-icons/md"
import Chart from './Chart'
import Inventory from './Inventory'

const Home = () => {
    let obj = [
        {
            id:1,
            title:"Open orders",
            logo:<BsHandbag/>,
            color:"orange",
            no: 239
        },
        {
            id:2,
            title:"Orders in transit",
            logo:<FiTruck/>,
            color:"#2c67ff",
            no:136
        },
        {
            id:3,
            title:"Fullfilled orders",
            logo:<AiOutlineFileDone/>,
            color:"#00CF3A",
            no:1254
        },
        {
            id:4,
            title:"Cancelled orders",
            logo:<MdOutlineCancel/>,
            color:"red",
            no:35
        }
    ]
  return (
    <>
    <div className='homemain'>
        {/* Overview section */}
       <div id='childmain'>
           <div>
              <p>Overview</p>
           </div>
           <div>
            <div id='button'><IoIosAddCircleOutline id='log'/> <p>ADD NEW WINE</p></div>
           </div>
       </div>
       <div id='childmain1'>
         {/* details section */}
          {obj.map((el)=>(
            <div id='over' style={{borderTop:`2px solid ${el.color}`}}>
                <div id='children'>
                    <div id='titl'>{el.title}</div>
                    <div id='logos' style={{color:`${el.color}`}}>{el.logo}</div>
                </div>
                <div id='no'>{el.no}</div>
            </div>
          ))}
       </div>
       <Chart/>
       <Inventory/>
    </div>
    </>
  )
}

export default Home