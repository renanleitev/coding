import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { startCase } from 'lodash';
import {toast} from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { PokeContainer, DataContainer } from '../Pokemon/styled';
import ListItems from "../../components/ListItems";
import axios from '../../services/axios';
import history from '../../services/history';

export default function Items(){
    let url = useParams();
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [id, setId] = useState(Number.parseInt(url.id));
    const [effect, setEffect] = useState('');
    const [text, setText] = useState('');
    const [cost, setCost] = useState('');
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(`/item/${id}`);
                setName(startCase(data.name));
                setPhoto(data.sprites.default);
                setEffect(data.effect_entries[0].short_effect);
                setText(data.flavor_text_entries[0].text);
                setCost(data.cost);
                history.push(`/item/${id}`);
            } 
            catch (e) {
                toast.error('Item does not exist!');
                setId(1);
                history.push(`/item/${id}`);
            }
        }
        getData();
    }, [id]);
    function handlePrevious(){
        if (id > 1) setId(id - 1);
    }
    function handleNext(){
        setId(id + 1);
    }
    return (
        <>
            <Container>
                <PokeContainer>
                    <h1>{name}</h1>
                    <img src={photo} alt=''/>
                </PokeContainer>
                <DataContainer>
                    <h1>Data</h1>
                    <p>Effect: {effect}</p>
                    <p>Description: {text}</p>
                    <p>Cost: ${cost}</p>
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </DataContainer>
            </Container>
            <ListItems id={id}/>
        </>

    )
}