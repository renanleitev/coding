import React from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import {useParams} from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import Search from '../../components/Search';

export default function VehicleYearPage(){
    let params = useParams();
    const id = params.id;
    const type = params.type;
    const vehicle = params.vehicle;
    const url = `/${vehicle}/marcas/${id}/modelos/${type}/anos`;
    async function getData() {
        try {
            const { data } = await axios.get(url);
            for (let key in data){
                let vehicle = document.createElement('a');
                vehicle.setAttribute('class', 'vehicle');
                const divVehicle= document.querySelector('.vehicle');
                divVehicle.appendChild(vehicle);
                let vehicleName = data[key].nome;
                let vehicleCode = data[key].codigo;
                vehicle.innerHTML = vehicleName + '<br>';
                vehicle.setAttribute('href', `${url}/${vehicleCode}`);
                vehicle.setAttribute('key', `${vehicleCode}`);
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