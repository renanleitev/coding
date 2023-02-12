import React from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import {useParams} from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import Search from '../../components/Search';

export default function VehicleModelPage(){
    let params = useParams();
    const id = params.id;
    const vehicle = params.vehicle;
    const url = `/${vehicle}/marcas/${id}/modelos`;
    async function getData() {
        try {
            const { data } = await axios.get(url);
            for (let key in data.modelos){
                let vehicle = document.createElement('a');
                vehicle.setAttribute('class', 'vehicle');
                const divVehicle= document.querySelector('.vehicle');
                divVehicle.appendChild(vehicle);
                let vehicleName = data.modelos[key].nome;
                let vehicleCode = data.modelos[key].codigo;
                vehicle.innerHTML = vehicleName + '<br>';
                vehicle.setAttribute('href', `${url}/${vehicleCode}/anos`);
            }
        }
        catch (e) {
            toast.error('Error:' + e);
        }
    }
    getData();
    return (
        <>
            <Search/>
            <Container>
                <div className="vehicle"></div>
            </Container>
        </>
    );
};