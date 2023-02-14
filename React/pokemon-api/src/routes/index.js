import React from "react";
import { Routes, Route} from 'react-router-dom';
// Páginas utilizadas
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import Items from "../pages/Items";
import Search from "../pages/Search";
import Evolution from "../pages/Evolution";
import Page404 from '../pages/Page404';

export default function MainRoutes(){
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={`/item/:id`} element={<Items/>}/>
            <Route path={`/pokemon/:id`} element={<Pokemon/>}/>
            <Route path={`/search`} element={<Search/>}/>
            <Route path={`/evolution`} element={<Evolution/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    );
}