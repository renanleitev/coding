import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { startCase } from 'lodash';
import {toast} from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Evolution(){
    let url = useParams();
    const [id, setId] = useState(1);
    const [initial, setInitial] = useState('');
    const [intermediate, setIntermediate] = useState('');
    const [final, setFinal] = useState('');
    let [count, setCount] = useState('');
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(`/evolution-chain/${id}`);
                setInitial(data.chain.species.name);
                setIntermediate(data.chain.evolves_to[0].species.name);
                setFinal(data.chain.evolves_to[0].evolves_to[0].species.name);
                }
            catch (e) {
            }
        }
        getData();
    }, [id]);
    return(
        <>
        <p>inicial: {initial}</p>
        {intermediate && <p>interm: {intermediate}</p>}
        {final && <p>final: {final}</p>}
        </>
    )
}