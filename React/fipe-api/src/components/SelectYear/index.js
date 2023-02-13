import React, {useState, useEffect} from "react";
import axios from '../../services/axios';
import mapData from '../../services/mapData';
import removeOptions from '../../services/removeOptions';
import {ResultContainer} from '../../styles/GlobalStyles';

export default function SelectYear(props){
    let optionVehicle = props.vehicle;
    let optionBrand = props.brand;
    let code = props.code;
    let [valid, setValid] = useState(false);
    let [value, setValue] = useState('');
    let [brand, setBrand] = useState('');
    let [model, setModel] = useState('');
    let [yearModel, setYearModel] = useState('');
    let [gas, setGas] = useState('');
    let [fipeCode, setFipeCode] = useState('');
    let [monthReference, setMonthReference] = useState('');
    let [typeVehicle, setTypeVehicle] = useState('');
    let [typeGas, setTypeGas] = useState('');
    let [vehicleName, setVehicleName] = useState('');
    let [brandName, setBrandName] = useState('');
    let [yearModelCode, setYearModelCode] = useState('');
    let [yearVehicle, setYearVehicle] = useState('');
    
    useEffect(() => {
        let url = `/${optionVehicle}/marcas/${optionBrand}/modelos/${code}/anos`;
        async function getData() {
            removeOptions('year-options');
            const {data} = await axios.get(url);
            mapData(data, '.year', 'year-options');
        }  
        getData();  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [code, optionBrand, optionVehicle]);
    useEffect(() => {
        if (valid) {
            let urlData = `/${vehicleName}/marcas/${brandName}/modelos/${yearModelCode}/anos/${yearVehicle}`;
            async function getData() {
                const { data } = await axios.get(urlData);
                setValue(data.Valor);
                setBrand(data.Marca);
                setModel(data.Modelo);
                setYearModel(data.AnoModelo);
                setGas(data.Combustivel);
                setFipeCode(data.CodigoFipe);
                setMonthReference(data.MesReferencia);
                setTypeVehicle(data.TipoVeiculo);
                setTypeGas(data.SiglaCombustivel);
            }
            getData();
        }
    }, [brandName, valid, value, vehicleName, yearModelCode, yearVehicle]);
    function handleSearch(){
        setValid(true);
        setVehicleName(document.querySelector('.vehicle').value);
        setBrandName(document.querySelector('.brand').value);
        setYearModelCode(document.querySelector('.model-brand').value);
        setYearVehicle(document.querySelector('.year').value);
    }
    window.onload = function (){
        const selectYear = document.querySelector('.year');
        selectYear.disabled = true;
    }
    return (
        <>
            <label for='year'>Ano:</label>
            <select className='year' id='year'>
                <option>---</option>
            </select>
            <button onClick={handleSearch}>Pesquisar</button>
            {valid ? 
            <ResultContainer>
                <p className="result">Modelo: {model || '???'}</p>
                <p className="result">Valor: {value || '???'}</p>
                <p className="result">Marca: {brand || '???'}</p>
                <p className="result">Ano Modelo: {yearModel || '???'}</p>
                <p className="result">Combustível: {gas || '???'}</p>
                <p className="result">Código Fipe: {fipeCode || '???'}</p>
                <p className="result">Mês de Referência: {monthReference || '???'}</p>
                <p className="result">Tipo de Veículo: {typeVehicle || '???'}</p>
                <p className="result">Sigla de Combustível: {typeGas || '???'}</p>
            </ResultContainer> : <div></div>}
        </>
    );
};