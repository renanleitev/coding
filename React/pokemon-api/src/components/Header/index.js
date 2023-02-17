import React, {useCallback} from "react";
import { FaHome, FaDotCircle, FaSearch, FaLuggageCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavHeader } from "./styled";
import history from "../../services/history";

export default function Header(){
    const size = 20;
    const urlPok = '/pokemon/1';
    const urlItem = '/item/1';
    const handleChangePok = useCallback(() => {
        history.push(urlPok);
        window.location.reload();
    }, [urlPok]);
    const handleChangeItem = useCallback(() => {
        history.push(urlItem);
        window.location.reload();
    }, [urlItem]);
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