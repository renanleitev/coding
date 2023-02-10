import { MiniContainer } from "../../pages/Home/styled";
import {toast} from 'react-toastify';
import { startCase } from 'lodash';
import React, { useState, useEffect } from "react";
import axios from '../../services/axios';
import history from '../../services/history';

export default function CreateItem(props){
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    let id = props.idItem;
    useEffect(() => {
        async function getData() {
            try {
                const { data } = await axios.get(`/item/${id}`);
                setName(startCase(data.name));
                setPhoto(data.sprites.default);
                }
            catch (e) {
                toast.error('No more Items on the list!');
                setPhoto('https://cdn-icons-png.flaticon.com/512/5266/5266579.png');
                setName('???');
            }
        }
        getData();
    }, [id]);
    function handleImg(){
        history.push(`/item/${id}`);
        window.location.reload();
    }
    if (photo === null) {
        setPhoto('https://cdn-icons-png.flaticon.com/512/5266/5266579.png');
    }
    if (name === null) {
        setName('???');
    }
    return (
        <MiniContainer>
            <img src={photo} alt='' onClick={handleImg}/>
            <p>{name}</p>
        </MiniContainer>
    )
}