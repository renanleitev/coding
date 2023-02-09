import React, { useState } from "react";
import { Container } from '../../styles/GlobalStyles';
import { ArrowLeft, ArrowRight, Title } from "./styled";
import CreatePokemon from "../../components/CreatePokemon";
import CreateItem from "../../components/CreateItem";

export default function Home(){
    let [idPok, setIdPok] = useState(1);
    let [idItem, setIdItem] = useState(1);
    function incrementPok(){
        setIdPok(idPok + 5);
    }
    function decrementPok(){
        if(idPok > 5) setIdPok(idPok - 5);
    }
    function incrementItem(){
        setIdItem(idItem + 5);
    }
    function decrementItem(){
        if(idItem > 5) setIdItem(idItem - 5);
    }
    return (
        <>
            <Title>Pokémons</Title>
            <Container>
                <ArrowLeft onClick={decrementPok}/>
                <CreatePokemon idPok={idPok}/>
                <CreatePokemon idPok={idPok+1}/>
                <CreatePokemon idPok={idPok+2}/>
                <CreatePokemon idPok={idPok+3}/>
                <CreatePokemon idPok={idPok+4}/>
                <ArrowRight onClick={incrementPok}/>
            </Container>
            <Title>Items</Title>
            <Container>
                <ArrowLeft onClick={decrementItem}/>
                <CreateItem idItem={idItem}/>
                <CreateItem idItem={idItem+1}/>
                <CreateItem idItem={idItem+2}/>
                <CreateItem idItem={idItem+3}/>
                <CreateItem idItem={idItem+4}/>
                <ArrowRight onClick={incrementItem}/>
            </Container>
        </>

    )
};