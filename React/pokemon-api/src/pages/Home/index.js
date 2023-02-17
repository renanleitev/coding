import React, { useState, useCallback } from "react";
import { Container } from '../../styles/GlobalStyles';
import { ArrowLeft, ArrowRight, Title } from "./styled";
import CreatePokemon from "../../components/CreatePokemon";
import CreateItem from "../../components/CreateItem";

export default function Home(){
    const [idPok, setIdPok] = useState(1);
    const [idItem, setIdItem] = useState(1);
    const count = 5;

    const incrementPok = useCallback(() => {
        setIdPok(idPok + count);
    }, [idPok, count]); 
    const incrementItem = useCallback(() => {
        setIdItem(idItem + count);
    }, [idItem, count]); 
    const decrementPok = useCallback(() => {
        if(idPok > count) setIdPok(idPok - count);
    }, [idPok, count]);
    const decrementItem = useCallback(() => {
        if(idItem > count) setIdItem(idItem - count);
    }, [idItem, count]);
    return (
        <>
            <Title>Pokémons</Title>
            <Container>
                <ArrowLeft onClick={decrementPok}/>
                {[...Array(count).keys()].map((key) => (
                    <CreatePokemon key={key} idPok={idPok + key}/>
                ))}
                <ArrowRight onClick={incrementPok}/>
            </Container>
            <Title>Items</Title>
            <Container>
                <ArrowLeft onClick={decrementItem}/>
                {[...Array(count).keys()].map((key) => (
                    <CreateItem key={key} idItem={idItem + key}/>
                ))}
                <ArrowRight onClick={incrementItem}/>
            </Container>
        </>

    )
};