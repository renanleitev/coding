import React, { useState, useEffect } from "react";
import { Container } from '../../styles/GlobalStyles';
import history from '../../services/history';
import CreateItem from "../CreateItem";
import { ArrowLeft, ArrowRight } from "../../pages/Home/styled";

export default function ListItems(props){
    let [id, setId] = useState(Number.parseInt(props.id));

    useEffect(() => {setId(props.id)}, [props.id]);
    function handleClick(){
        history.push(`/item/${id}`);
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
            <CreateItem onClick={handleClick} idItem={id}/>
            <CreateItem onClick={handleClick} idItem={id+1}/>
            <CreateItem onClick={handleClick} idItem={id+2}/>
            <ArrowRight onClick={handleNext}/>
        </Container>
        )
}