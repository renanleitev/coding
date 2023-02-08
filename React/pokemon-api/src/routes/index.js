import React from "react";
import { Routes, Route} from 'react-router-dom';
// Páginas utilizadas
import Pokemon from "../pages/Pokemon";
import Page404 from '../pages/Page404';

export default function MainRoutes(){
    return (
        <Routes>
            <Route path={`/pokemon/:id`} element={<Pokemon/>}/>
            <Route path='*' element={<Page404/>}/>
        </Routes>
    );
}