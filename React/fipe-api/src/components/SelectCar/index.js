import React, {useState} from "react";
import axios from '../../services/axios';
import SelectModel from "../SelectModel";

export default function SelectCar(){
    let [optionVehicle, setOptionVehicle] = useState('carros');
    let [optionBrand, setOptionBrand] = useState('1');
    let url = `/${optionVehicle}/marcas`;
    async function getData() {
        const {data} = await axios.get(url);
        for (let key in data){
            let option = document.createElement('option');
            const selectBrand = document.querySelector('.brand');
            selectBrand.appendChild(option);
            let vehicleName = data[key].nome;
            let vehicleCode = data[key].codigo;
            option.setAttribute('value', `${vehicleCode}`);
            option.setAttribute('class', 'brand-options');
            option.innerHTML = vehicleName;
            setOptionBrand(selectBrand.value);
        }
    }
    getData();
    function handleVehicle(){
        let elements = document.getElementsByClassName('brand-options');
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        let selectVehicle = document.querySelector('.vehicle');
        setOptionVehicle(selectVehicle.value); 
    }
    function handleBrand(){
        let selectBrand= document.querySelector('.brand');
        setOptionBrand(selectBrand.value); 
    }
    return (
        <>
            Veículo:
            <select className='vehicle' onChange={handleVehicle}>
                <option value='carros'>Carros</option>
                <option value='motos'>Motos</option>
                <option value='caminhoes'>Caminhões</option>
            </select>
            Marca:
            <select className='brand' onChange={handleBrand}>
            </select>
            <SelectModel vehicle={optionVehicle} brand={optionBrand}/>
        </>
    );
};