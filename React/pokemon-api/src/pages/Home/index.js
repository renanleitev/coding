import React, { useState } from "react";
import { Container } from '../../styles/GlobalStyles';
import { ArrowLeft, ArrowRight, Title } from "./styled";
import CreatePokemon from "../../components/CreatePokemon";
import CreateItem from "../../components/CreateItem";

export default function Home(){
    let [idPok, setIdPok] = useState(1);
    let [idItem, setIdItem] = useState(1);
    let count = 5;
    function incrementPok(){
        setIdPok(idPok + count);
    }
    function decrementPok(){
        if(idPok > count) setIdPok(idPok - count);
    }
    function incrementItem(){
        setIdItem(idItem + count);
    }
    function decrementItem(){
        if(idItem > count) setIdItem(idItem - count);
    }
    return (
        <>
            <Title>Pokémons</Title>
            <Container>
                <ArrowLeft onClick={decrementPok}/>
                {[...Array(count).keys()].map((key) => (
                    <CreatePokemon key={key} idPok={idPok + key}/>
                ))}
                <ArrowRight onClick={incrementPok} className='arrow-right'/>
            </Container>
            <Title>Items</Title>
            <Container>
                <ArrowLeft onClick={decrementItem}/>
                {[...Array(count).keys()].map((key) => (
                    <CreateItem key={key} idItem={idItem + key}/>
                ))}
                <ArrowRight onClick={incrementItem} className='arrow-right'/>
            </Container>
        </>

    )
};