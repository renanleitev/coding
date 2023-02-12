import React, {useState} from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import {useParams} from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';

export default function VehicleValuePage(){
    let params = useParams();
    const vehicle = params.vehicle;
    const id = params.id;
    const type = params.type;
    const year = params.year;
    const url = `/${vehicle}/marcas/${id}/modelos/${type}/anos/${year}`;
    let [value, setValue] = useState('');
    let [brand, setBrand] = useState('');
    let [model, setModel] = useState('');
    let [yearModel, setYearModel] = useState('');
    let [gas, setGas] = useState('');
    let [fipeCode, setFipeCode] = useState('');
    let [monthReference, setMonthReference] = useState('');
    let [typeVehicle, setTypeVehicle] = useState('');
    let [typeGas, setTypeGas] = useState('');
    async function getData() {
        try {
            const { data } = await axios.get(url);
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
        catch (e) {
            toast.error('Error:' + e);
        }
    }
    getData();
    function handleCopy(){
        let text = '';
        let targets = document.getElementsByClassName('result');
        for ( let i = 0; i < targets.length; i++ ) {
            text += targets[i].innerText + '\n';
        }
        navigator.clipboard.writeText(text);
        toast.success('Texto copiado com sucesso!');
    }
    return (
        <Container>
            <div>
                <p className="result">Modelo: {model}</p>
                <p className="result">Valor: {value}</p>
                <p className="result">Marca: {brand}</p>
                <p className="result">Ano Modelo: {yearModel}</p>
                <p className="result">Combustível: {gas}</p>
                <p className="result">Código Fipe: {fipeCode}</p>
                <p className="result">Mês de Referência: {monthReference}</p>
                <p className="result">Tipo de Veículo: {typeVehicle}</p>
                <p className="result">Sigla de Combustível: {typeGas}</p>
            </div>
            <button onClick={handleCopy}>Copiar</button>
        </Container>
    );
};