import { MiniContainer } from "../../pages/Home/styled";
import { startCase } from 'lodash';
import React, { useState, useEffect, useCallback } from "react";
import axios from '../../services/axios';
import history from '../../services/history';

export default function CreatePokemon(props){
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const id = props.idPok;
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(`/pokemon/${id}`);
                setName(startCase(data.name));
                setPhoto(data.sprites.front_default);
                }
            catch (e) {
                setPhoto('https://cdn-icons-png.flaticon.com/512/5266/5266579.png');
                setName('???');
            }
        }
        getData();
    }, [id]);
    const handleImg = useCallback(() => {
        history.push(`/pokemon/${id}`);
        window.location.reload();
    }, [id]);
    if (photo === null) {
        setPhoto('https://cdn-icons-png.flaticon.com/512/5266/5266579.png');
    }
    if (name === null) {
        setName('???');
    }
    return (
        <MiniContainer>
            <img src={photo} alt='' onClick={handleImg}/>
            <p>{name}</p>
        </MiniContainer>
    )
}
