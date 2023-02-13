import React from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import {startCase} from 'lodash';
import { Container } from '../../styles/GlobalStyles';

export default function CarModel(){
    const url = '/carros/marcas';
    async function getData() {
        try {
            const { data } = await axios.get(url);
            for (let key in data){
                let car = document.createElement('a');
                let carName = data[key].nome;
                carName = startCase(carName.toLowerCase());
                let carCode = data[key].codigo;
                car.setAttribute('href', `${url}/${carCode}/modelos`);
                car.setAttribute('class', 'vehicle');
                const divCar = document.querySelector('.car');
                car.innerHTML = carName + '<br>';
                divCar.appendChild(car);
            }
        }
        catch (e) {
            toast.error('Error:' + e);
        }
    }
    getData();
    return (
        <Container>
            <div className="car"></div>
        </Container>
    );
};