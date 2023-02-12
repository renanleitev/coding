import React from "react";
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavHeader } from "./styled";

export default function Header(){
    let size = 20;
    return (
        <NavHeader>
            <Link to='/'>
                <FaHome size={size}/>
            </Link>
        </NavHeader>
    );
}