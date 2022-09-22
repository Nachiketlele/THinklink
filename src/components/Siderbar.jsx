import React from "react";
import "./css/Sidebar.css";
import { CgScreen } from "react-icons/cg";
import { MdOutlineInventory } from "react-icons/md";
import { BsBagCheck } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
const Siderbar = () => {
     let data = [
          {
              id : 1,
              name : "Dashboard",
              icon : <CgScreen/>
          },
          {
              id : 2,
              name : "Inventory",
              icon : <MdOutlineInventory/>
          },
          {
              id : 3,
              name : "Orders",
              icon : <BsBagCheck/>
          },
          {
              id : 4,
              name : "Customers",
              icon : <BsPeople/>
          },
          {
              id : 6,
              name : "Reports",
              icon : <TbReportSearch/>
          },
          {
              id : 7,
              name : "Settings",
              icon : <FiSettings/>
          },
          
         ] 
  return (
    <div className="mainbox">
      {data.map((el) => (
        <button className="sidebar">
          <div className="ic">
            {el.icon}
          </div>
          <div className="titles">{el.name}</div>
        </button>
      ))}
    </div>
  );
};

export default Siderbar;
