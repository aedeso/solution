import React from "react";
// import { MdStar } from "react-icons/md";
import { FaStar } from "react-icons/fa";

const star = ({selected = false}) => <FaStar color = {selected ? "yellow" : "gray"} />

export const StarRating = ({numberStars}) => [...Array(numberStars)].map((e,i) => 
    <star key= {i} />)