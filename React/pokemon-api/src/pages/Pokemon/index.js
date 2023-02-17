import React, { useState, useEffect, useCallback } from "react";
import { useParams } from 'react-router-dom';
import { startCase } from 'lodash';
import {toast} from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { PokeContainer, DataContainer } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';
import ListPokemons from "../../components/ListPokemons";

export default function Pokemon(){
    const url = useParams();
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [photoFront, setPhotoFront] = useState('');
    const [photoBack, setPhotoBack] = useState('');
    const [photoShiny, setPhotoShiny] = useState('');
    const [id, setId] = useState(Number.parseInt(url.id));
    const [type, setType] = useState('');
    const [exp, setExp] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [ability, setAbility] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(`/pokemon/${id}`);
                setName(startCase(data.name));
                setPhoto(data.sprites.front_default);
                setPhotoFront(data.sprites.front_default);
                setPhotoBack(data.sprites.back_default);
                setPhotoShiny(data.sprites.front_shiny);
                setType(startCase(data.types[0].type.name));
                setExp(data.base_experience);
                setHeight(data.height/10);
                setWeight(data.weight/10);
                setAbility(startCase(data.abilities[0].ability.name))
                history.push(`/pokemon/${id}`);
            } 
            catch (e) {
                toast.error('Pokémon does not exist!');
                setId(1);
                history.push(`/pokemon/${id}`);
            }
        }
        getData();
    }, [id]);
    const handlePrevious = useCallback(() => {
        if (id > 1) setId(id - 1);
    }, [id]);
    const handleNext = useCallback(() => {
        setId(id + 1);
    }, [id]);
    const handlePhotoFront = useCallback(() => {
        if (photoFront) setPhoto(photoFront);
    }, [photoFront]);
    const handlePhotoBack = useCallback(() => {
        if (photoBack) setPhoto(photoBack);
    }, [photoBack]);
    const handlePhotoShiny = useCallback(() => {
        if (photoShiny) setPhoto(photoShiny);
    }, [photoShiny]);
    
    return (
        <>
            <Container>
                <PokeContainer>
                    <h1>{name}</h1>
                    <img src={photo} alt=''/>
                    <div className="button-image">
                        <button onClick={handlePhotoFront}>Front</button>
                        <button onClick={handlePhotoBack}>Back</button>
                        <button onClick={handlePhotoShiny}>Shiny</button>
                    </div>
                </PokeContainer>
                <DataContainer>
                    <h1>Data</h1>
                    <p>ID: {id}</p>
                    <p>Type: {type}</p>
                    <p>Base Exp: {exp} xp</p>
                    <p>Height: {height} m</p>
                    <p>Weight: {weight} kg</p>
                    <p>Ability: {ability}</p>
                    <button onClick={handlePrevious}>Previous</button>
                    <button onClick={handleNext}>Next</button>
                </DataContainer>
            </Container>
            <ListPokemons id={id}/>
        </>
    ) 
};