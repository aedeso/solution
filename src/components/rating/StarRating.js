import React, {useState} from "react";
import {FaStar} from "react-icons/fa"

const Star = ({selected = false, onClick}) => {
    return (
        <FaStar color={selected ? "yellow" : "black"} onClick={onClick} />
    )
}

export const StarRating = ({totalStars=10}) => {
    const [selection, setSelection] = useState(0);
    return (
        <>
            {
            [...Array(totalStars)].map((e,i) => 
            <Star 
            key={i} 
            selected={selection > i}
            onClick={()=> setSelection(i+1)}
            />)
        }
        </>
        
    )
}