import React from 'react';
import {buyCake} from '../redux';
import {useSelector, useDispatch} from  'react-redux';

export default function CakeContainer(){
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(buyCake());
    }
    return (
        <div>
            <h1>Number of cakes - {numOfCakes}</h1>
            <button onClick={handleClick}>Buy Cake</button>
        </div>
    );
}
