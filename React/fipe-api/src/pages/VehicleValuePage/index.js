import React, {useState} from "react";
import {toast} from 'react-toastify';
import axios from '../../services/axios';
import {useParams} from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import copyText from "../../services/copyText";

export default function VehicleValuePage(){
    let params = useParams();
    const vehicle = params.vehicle;
    const id = params.id;
    const type = params.type;
    const year = params.year;
    const url = `/${vehicle}/marcas/${id}/modelos/${type}/anos/${year}`;
    const [dataSearch, setDataSearch] = useState('');
    async function getData() {
        try {
            const { data } = await axios.get(url);
            setDataSearch(data);
        }
        catch (e) {
            toast.error('Error:' + e);
        }
    }
    getData();
    return (
        <Container>
            <div>
                {Object.keys(dataSearch).map((key) => {
                    return (
                        <p className="result">{key}: {dataSearch[key]}</p>
                    )
                })}
            <button className='copiar' onClick={copyText}>Copiar</button>
            </div>
        </Container>
    );
};