import React, {useState} from 'react';
import {buyCake} from '../redux';
import {useSelector, useDispatch} from  'react-redux';

export default function NewCakeContainer(props){
    const [number, setNumber] = useState(1);
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    function handleInput(e){
        setNumber(e.target.value);
    }
    function handleClick(){
        dispatch(buyCake(number));
    }
    return (
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <input type='text' value={number} onChange={e => handleInput(e)}/>
            <button onClick={handleClick}>Buy {number} Cake</button>
        </div>
    );
}
