import React, { useState, useEffect, useCallback } from "react";
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';
import CreatePokemon from "../CreatePokemon";
import { ArrowLeft, ArrowRight } from "../../pages/Home/styled";

export default function ListPokemons(props){
    const [id, setId] = useState(props.id);

    useEffect(() => {setId(props.id)}, [props.id]);
    const handleClick = useCallback(() => {
        history.push(`/pokemon/${id}`);
        window.location.reload();
    }, [id]);
    const handleNext = useCallback(() => {
        setId(id+1);
    }, [id]);
    const handlePrevious = useCallback(() => {
        if(id > 1) setId(id - 1);
    }, [id]);
    
    return (
        <Container>
            <ArrowLeft onClick={handlePrevious}/>
            <CreatePokemon onClick={handleClick} idPok={id}/>
            <CreatePokemon onClick={handleClick} idPok={id+1}/>
            <CreatePokemon onClick={handleClick} idPok={id+2}/>
            <ArrowRight onClick={handleNext}/>
        </Container>
    )
}