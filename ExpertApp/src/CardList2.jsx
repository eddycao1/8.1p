import React from "react";
import Card from './Card';
import staffList2 from "./staffList2";
import './Card.css'



const CardList2 = () =>{
    return(
    <div class = 'row'>
    {staffList2.map((staff)=>
    <Card
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
    />
    )}
    </div>
    );
}

export default CardList2;