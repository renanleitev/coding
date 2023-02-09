import React, { useState, useEffect } from "react";
import {toast} from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import { Form } from "./styled";

export default function Search(){
    let [query, setQuery] = useState('');
    const [valid, setValid] = useState(false);
    useEffect(() => {
        if(valid){
            async function getData() {
                try {
                    toast.success('Searching...');
                    const { data } = await axios.get(`/pokemon/${query}`);
                    history.push(`/pokemon/${data.id}`);
                    window.location.reload();
                } 
                catch (e) {
                    try{
                        const { data } = await axios.get(`/item/${query}`);
                        history.push(`/item/${data.id}`);
                        window.location.reload();
                    }
                    catch(e){
                        setValid(false);
                        toast.error('Pokémon or Item does not exist!');
                        history.push(`/search`);
                    }
                }
            }
            getData();
        }
    });
    function handleSubmit(e){
        e.preventDefault();
        setValid(true);
    }
    function handleQuery(e){
        setQuery(e.target.value.toLowerCase().replace(/ +/g, '-'));
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <input 
                    placeholder="Search for Pokémons or Items"
                    onChange={e => handleQuery(e)}
                />
                <button type='submit'>Search</button>
            </Form>
        </Container>
    )
}