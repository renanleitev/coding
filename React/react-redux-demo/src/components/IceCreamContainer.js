import React from 'react';
import {buyIceCream} from '../redux';
import {useSelector, useDispatch} from  'react-redux';

export default function IceCreamContainer(){
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(buyIceCream());
    }
    return (
        <div>
            <h1>Number of Ice Creams - {numOfIceCreams}</h1>
            <button onClick={handleClick}>Buy Ice Cream</button>
        </div>
    );
}
