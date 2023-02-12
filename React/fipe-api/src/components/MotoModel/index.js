import React from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';
import {startCase} from 'lodash';

export default function MotoModel(){
    const url = '/motos/marcas';
    async function getData() {
        try {
            const { data } = await axios.get('/motos/marcas');
            for (let key in data){
                let moto = document.createElement('a');
                let motoName = data[key].nome;
                motoName = startCase(motoName.toLowerCase());
                let motoCode = data[key].codigo;
                moto.setAttribute('href', `${url}/${motoCode}/modelos`);
                moto.setAttribute('class', 'vehicle');
                const divMoto = document.querySelector('.moto');
                moto.innerHTML = motoName + '<br>';
                divMoto.appendChild(moto);
            }
        }
        catch (e) {
            toast.error('Error:' + e);
        }
    }
    getData();
    return (
        <Container>
            <div className="moto"></div>
        </Container>
    );
};