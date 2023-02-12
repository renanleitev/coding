import React from "react";
import { Routes, Route} from 'react-router-dom';
// Páginas utilizadas
import Home from "../pages/Home";
import Page404 from '../pages/Page404';
import VehicleModelPage from '../pages/VehicleModelPage';
import VehicleYearPage from '../pages/VehicleYearPage';
import VehicleValuePage from '../pages/VehicleValuePage';

export default function MainRoutes(){
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/:vehicle/marcas/:id/modelos'} element={<VehicleModelPage/>}/>
            <Route path={'/:vehicle/marcas/:id/modelos/:type/anos'} element={<VehicleYearPage/>}/>
            <Route path={'/:vehicle/marcas/:id/modelos/:type/anos/:year'} element={<VehicleValuePage/>}/>
            <Route path={'*'} element={<Page404/>}/>
        </Routes>
    );
}