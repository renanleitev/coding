import React, { useState, useEffect } from "react";
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import CreatePokemon from "../CreatePokemon";
import { ArrowLeft, ArrowRight } from "../../pages/Home/styled";

export default function Evolution(props){
    let [id, setId] = useState(Number.parseInt(props.id));
    const [initial, setInitial] = useState('');
    const [intermediate, setIntermediate] = useState('');
    const [final, setFinal] = useState('');
    useEffect(() => {setId(props.id)}, [props.id]);
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(`/evolution-chain/${id}`);
                setInitial(data.chain.species.name);
                setIntermediate(data.chain.evolves_to[0].species.name);
                setFinal(data.chain.evolves_to[0].evolves_to[0].species.name);
                }
            catch (e) {}
        }
        getData();
    }, [id]);
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
    return(
        <Container>
            <ArrowLeft onClick={handlePrevious}/>
            {initial && <CreatePokemon onClick={handleClick} idPok={id}/>}
            {intermediate && <CreatePokemon onClick={handleClick} idPok={id+1}/>} 
            {final && <CreatePokemon onClick={handleClick} idPok={id+2}/>}
            <ArrowRight onClick={handleNext}/>
        </Container>
    )
}