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
    return (
        <Container>
            <div>
                <p>Modelo: {model}</p>
                <p>Valor: {value}</p>
                <p>Marca: {brand}</p>
                <p>Ano Modelo: {yearModel}</p>
                <p>Combustível: {gas}</p>
                <p>Código Fipe: {fipeCode}</p>
                <p>Mês de Referência: {monthReference}</p>
                <p>Tipo de Veículo: {typeVehicle}</p>
                <p>Sigla de Combustível: {typeGas}</p>
            </div>
        </Container>
    );
};