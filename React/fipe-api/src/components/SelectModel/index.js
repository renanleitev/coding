import React, {useState, useEffect} from "react";
import axios from '../../services/axios';
import SelectYear from "../SelectYear";
import mapSelect from '../../services/mapSelect';
import removeOptions from '../../services/removeOptions';

export default function SelectModel(props){
    let optionVehicle = props.vehicle;
    let optionBrand = props.brand;
    let [optionModel, setOptionModel] = useState('1');
    useEffect(() => {
        let url = `/${optionVehicle}/marcas/${optionBrand}/modelos`;
        async function getData() {
            removeOptions('model-brand-options');
            const {data} = await axios.get(url);
            mapSelect(data.modelos, '.model-brand', 'model-brand-options');
            const selectBrand = document.querySelector('.year');
            selectBrand.disabled = true;
        }
        getData();
    }, [optionBrand, optionVehicle]);
    function handleModelBrand(){
        setOptionModel(document.querySelector('.model-brand').value);
        const selectYear = document.querySelector('.year');
        selectYear.disabled = false;
    }
    return (
        <>
            <label htmlFor='model-brand'>Modelo:</label>    
            <select className='model-brand' onChange={handleModelBrand} id='model-brand'>
                <option>---</option>
            </select>
            <SelectYear vehicle={optionVehicle} brand={optionBrand} model={optionModel}/>
        </>
    );
};