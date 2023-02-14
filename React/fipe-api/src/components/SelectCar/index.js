import React, {useState, useEffect} from "react";
import axios from '../../services/axios';
import SelectModel from "../SelectModel";
import mapSelect from '../../services/mapSelect';
import removeOptions from '../../services/removeOptions';

export default function SelectCar(){
    let [optionVehicle, setOptionVehicle] = useState('carros');
    let [optionBrand, setOptionBrand] = useState('1');
    let url = `/${optionVehicle}/marcas`;
    useEffect(() => {
        async function getData() {
            const {data} = await axios.get(url);
            mapSelect(data, '.brand', 'brand-options');
            const selectBrand = document.querySelector('.brand');
            setOptionBrand(selectBrand.value);
        }
        getData();
    }, [url]);
    function handleVehicle(){
        removeOptions('brand-options');
        let selectVehicle = document.querySelector('.vehicle');
        setOptionVehicle(selectVehicle.value); 
    }
    function handleBrand(){
        let selectBrand = document.querySelector('.brand');
        setOptionBrand(selectBrand.value); 
    }
    return (
        <>
            <label htmlFor='vehicle'>Veículo:</label> 
            <select className='vehicle' id='vehicle' onChange={handleVehicle}>
                <option value='carros'>Carros</option>
                <option value='motos'>Motos</option>
                <option value='caminhoes'>Caminhões</option>
            </select>
            <label htmlFor='brand'>Marca:</label> 
            <select className='brand' id='brand' onChange={handleBrand}>
                <option>---</option>
            </select>
            <SelectModel vehicle={optionVehicle} brand={optionBrand}/>
        </>
    );
};