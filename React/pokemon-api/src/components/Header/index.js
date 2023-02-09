import React from "react";
import { FaHome, FaDotCircle, FaSearch, FaLuggageCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavHeader } from "./styled";

export default function Header(){
    let size = 20;
    return (
        <NavHeader>
            <Link to='/'>
                <FaHome size={size}/>
            </Link>
            <Link to='/pokemon/1'>
                <FaDotCircle size={size}/>
            </Link>
            <Link to='/item/1'>
                <FaLuggageCart size={size}/>
            </Link>
            <Link to='/search'>
                <FaSearch size={size}/>
            </Link>
        </NavHeader>
    );
}