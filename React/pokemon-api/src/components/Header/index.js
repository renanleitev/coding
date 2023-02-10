import React from "react";
import { FaHome, FaDotCircle, FaSearch, FaLuggageCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavHeader } from "./styled";
import history from "../../services/history";

export default function Header(){
    let size = 20;
    let urlPok = '/pokemon/1';
    let urlItem = '/item/1';
    function handleChangePok(){
        history.push(urlPok);
        window.location.reload();
    }
    function handleChangeItem(){
        history.push(urlItem);
        window.location.reload();
    }
    return (
        <NavHeader>
            <Link to='/'>
                <FaHome size={size}/>
            </Link>
            <Link to={urlPok} onClick={handleChangePok}>
                <FaDotCircle size={size}/>
            </Link>
            <Link to={urlItem} onClick={handleChangeItem}>
                <FaLuggageCart size={size}/>
            </Link>
            <Link to='/search'>
                <FaSearch size={size}/>
            </Link>
        </NavHeader>
    );
}