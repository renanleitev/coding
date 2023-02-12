import React, {useState, useEffect} from "react";
import axios from '../../services/axios';
import SelectYear from "../SelectYear";

export default function SelectModel(props){
    let optionVehicle = props.vehicle;
    let optionBrand = props.brand;
    let [vehicleCode, setVehicleCode] = useState('1');
    useEffect(() => {
        let url = `/${optionVehicle}/marcas/${optionBrand}/modelos`;
        async function getData() {
            let elements = document.getElementsByClassName('year-model-options');
            while(elements.length > 0){
                elements[0].parentNode.removeChild(elements[0]);
            }
            const {data} = await axios.get(url);
            for (let key in data.modelos){
                let option = document.createElement('option');
                const selectBrand= document.querySelector('.year-model-brand');
                selectBrand.appendChild(option);
                let vehicleName = data.modelos[key].nome;
                let vehicleCode = data.modelos[key].codigo;
                option.setAttribute('value', `${vehicleCode}`);
                option.setAttribute('class', 'year-model-options');
                setVehicleCode(vehicleCode);
                option.innerHTML = vehicleName;
            }
        }
        getData();
    }, [optionBrand, optionVehicle]);
    function handleYearModel(){
        setVehicleCode(document.querySelector('.year-model-brand').value);
    }
    return (
        <>
            Ano Modelo:
            <select className='year-model-brand' onChange={handleYearModel}>
            </select>
            <SelectYear vehicle={optionVehicle} brand={optionBrand} code={vehicleCode}/>
        </>
    );
};