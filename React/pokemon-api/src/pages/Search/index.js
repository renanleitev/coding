import React, { useState, useEffect } from "react";
import {toast} from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';
import { Form } from "./styled";
import ListPokemons from "../../components/ListPokemons";
import ListItems from "../../components/ListItems";

export default function Search(){
    let [query, setQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    useEffect(() => {
        if(isSearching){
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
                        setIsSearching(false);
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
        setIsSearching(true);
    }
    function handleQuery(e){
        setQuery(e.target.value.toLowerCase().replace(/ +/g, '-'));
    }
    return (
        <>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Search for Pokémons or Items"
                        onChange={e => handleQuery(e)}
                    />
                    <button type='submit'>Search</button>
                </Form>
            </Container>
            <ListPokemons id={1}/>
            <ListItems id={1}/>
        </>
    )
}