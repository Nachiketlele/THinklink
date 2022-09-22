import { Badge, Input, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import data from "../details/data.js";
import "./styles/ShowData.css";
import { MdKeyboardArrowDown } from 'react-icons/md'
const ShowData = () => {
  return (
    <>
      <div>
        <h2 style={{fontSize:"16px",marginLeft: "33px"}}>Inventory</h2>
      </div>
      <div style={{marginLeft: "33px"}}>
      <Table width={"95%"} >
        <Thead>
          <Tr textAlign={"left"}>
            <Th className="tr"><Input type={"checkbox"}/></Th>
            <Th className="tr">PRODUCT</Th>
            <Th className="tr">RATING</Th>
            <Th className="tr">VINTAGE</Th>
            <Th className="tr">QTY</Th>
            <Th className="tr">VOLUME</Th>
            <Th className="tr">COST</Th>
            <Th className="tr">PRICE</Th>
          </Tr>
        </Thead>
        <Tbody>

          {data.map((el) => (
            <Tr>
              <Td><Input type={"checkbox"}/></Td>
              <Td className="td">
                <div id="parent">
                   <div id="imagediv">
                    <img id="images" src={el.image} alt="" />
                   </div>
                   <div id="textdiv">
                   <p id="mainti">{el.title}</p>
                   <p id="childti">{el.title1}</p>
                   </div>
                </div>
              </Td>
              <Td>
                 <Badge fontSize={"14px"} fontWeight={"600"} backgroundColor={"#F4F7FF"} marginLeft={"7px"}>{el.rating}</Badge>
              </Td>
              <Td color={"#8C8CA1"} fontWeight={"600"} fontSize={"14px"}>{el.vintage}</Td>
              <Td color={"#8C8CA1"} fontWeight={"600"} fontSize={"14px"}>{el.quantity}</Td>
              <Td color={"#8C8CA1"} fontWeight={"600"} fontSize={"14px"}>{el.volume}</Td>
              <Td color={"#8C8CA1"} fontWeight={"600"} fontSize={"14px"}>${el.cost}</Td>
              <Td color={"#262730"} fontWeight={"600"} fontSize={"14px"}>${el.price}</Td>
              <Td><MdKeyboardArrowDown/></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      </div>
    </>
  );
};

export default ShowData;
