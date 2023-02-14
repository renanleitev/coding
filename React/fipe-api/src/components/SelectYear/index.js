import React, {useState, useEffect} from "react";
import axios from '../../services/axios';
import {toast} from 'react-toastify';
import mapSelect from '../../services/mapSelect';
import removeOptions from '../../services/removeOptions';
import {ResultContainer} from '../../styles/GlobalStyles';

export default function SelectYear(props){
    let optionVehicle = props.vehicle;
    let optionBrand = props.brand;
    let optionModel = props.model;
    let [isSearching, setIsSearching] = useState(false);
    let [vehicle, setVehicle] = useState('');
    let [brand, setBrand] = useState('');
    let [model, setModel] = useState('');
    let [year, setYear] = useState('');
    const [dataSearch, setDataSearch] = useState({'Erro': 'Consulta inválida.'});
    
    useEffect(() => {
        let url = `/${optionVehicle}/marcas/${optionBrand}/modelos/${optionModel}/anos`;
        async function getData() {
            removeOptions('year-options');
            const {data} = await axios.get(url);
            mapSelect(data, '.year', 'year-options');
        }  
        getData();  
    }, [optionModel, optionBrand, optionVehicle]);
    useEffect(() => {
        if (isSearching) {
            let urlData = `/${vehicle}/marcas/${brand}/modelos/${model}/anos/${year}`;
            async function getData() {
                try{
                    toast.success('Pesquisando...');
                    const { data } = await axios.get(urlData);
                    setDataSearch(data);
                }
                catch(e){
                    toast.error('Erro: Consulta inválida.');
                }
            }
            getData();
        }
    }, [brand, isSearching, vehicle, model, year]);
    function handleSearching(){
        setIsSearching(true);
        setVehicle(document.querySelector('.vehicle').value);
        setBrand(document.querySelector('.brand').value);
        setModel(document.querySelector('.model-brand').value);
        setYear(document.querySelector('.year').value);
    }
    window.onload = function (){
        const selectYear = document.querySelector('.year');
        selectYear.disabled = true;
    }
    return (
        <>
            <label htmlFor='year'>Ano:</label>
            <select className='year' id='year'>
                <option>---</option>
            </select>
            <button onClick={handleSearching}>Pesquisar</button>
            {isSearching ? 
            <ResultContainer>
                {Object.keys(dataSearch).map((key) => {
                    return (
                        <p className="result">{key}: {dataSearch[key]}</p>
                    )
                })}
            </ResultContainer> : <div></div>}
        </>
    );
};