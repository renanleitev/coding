import React, { useState, useEffect } from "react";
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';
import CreatePokemon from "../CreatePokemon";
import { ArrowLeft, ArrowRight } from "../../pages/Home/styled";

export default function ListPokemons(props){
    let [id, setId] = useState(props.id);

    useEffect(() => {setId(props.id)}, [props.id]);
    function handleClick(){
        history.push(`/pokemon/${id}`);
        window.location.reload();
    }
    function handleNext(){
        setId(id+1);
    }
    function handlePrevious(){
        if(id > 1) setId(id - 1);
    }
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