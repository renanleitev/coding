import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { startCase } from 'lodash';
import {toast} from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { PokeContainer, DataContainer } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Pokemon(){
    let url = useParams();
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
    const [moves, setMoves] = useState('');
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
                setMoves(startCase(data.moves[0].move.name));
                history.push(`/pokemon/${id}`);
            } 
            catch (e) {
                toast.error('Pokemón não existe!');
                setId(1);
                history.push(`/pokemon/${id}`);
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
    function handlePhotoFront(){
        setPhoto(photoFront);
    }
    function handlePhotoBack(){
        if (photoBack) setPhoto(photoBack);
    }
    function handlePhotoShiny(){
        if (photoShiny) setPhoto(photoShiny);
    }
    return (
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
                <h1>Info</h1>
                <p>Type: {type}</p>
                <p>Base Exp: {exp} xp</p>
                <p>Height: {height} m</p>
                <p>Weight: {weight} kg</p>
                <p>Ability: {ability}</p>
                <p>Strongest Move: {moves}</p>
                <button onClick={handlePrevious}>Previous</button>
                <button onClick={handleNext}>Next</button>
            </DataContainer>
        </Container>
    ) 
}