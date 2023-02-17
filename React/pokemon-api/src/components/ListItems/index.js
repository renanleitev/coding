import React, { useState, useEffect, useCallback } from "react";
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';
import CreateItem from "../CreateItem";
import { ArrowLeft, ArrowRight } from "../../pages/Home/styled";

export default function ListItems(props){
    const [id, setId] = useState(Number.parseInt(props.id));

    useEffect(() => {setId(props.id)}, [props.id]);
    const handleClick = useCallback(() => {
        history.push(`/item/${id}`);
        window.location.reload();
    }, [id])
    const handleNext = useCallback(() => {
        setId(id+1);
    }, [id]);
    const handlePrevious = useCallback(() => {
        if(id > 1) setId(id - 1);
    }, [id]);
    
    return (
        <Container>
            <ArrowLeft onClick={handlePrevious}/>
            <CreateItem onClick={handleClick} idItem={id}/>
            <CreateItem onClick={handleClick} idItem={id+1}/>
            <CreateItem onClick={handleClick} idItem={id+2}/>
            <ArrowRight onClick={handleNext}/>
        </Container>
        )
}