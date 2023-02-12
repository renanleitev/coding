import React from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';

export default function TruckModel(){
    const url = '/caminhoes/marcas';
    async function getData() {
        try {
            const { data } = await axios.get(url);
            for (let key in data){
                let truck = document.createElement('a');
                let truckName = data[key].nome;
                let truckCode = data[key].codigo;
                truck.setAttribute('href', `${url}/${truckCode}/modelos`);
                const divTruck = document.querySelector('.truck');
                truck.innerHTML = truckName + '<br>';
                divTruck.appendChild(truck);
            }
        }
        catch (e) {
            toast.error('Error: ' + e);
        }
    }
    getData();
    return (
        <Container>
            <div className="truck"></div>
        </Container>
    );
};