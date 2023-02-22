import { Container } from '../../styles/GlobalStyle';
import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';

export default function Shopping(){
    const cart = useSelector(state => state.products.cart);
    console.log(cart);
    return (
        <Container>
            <p>Shopping</p>
        </Container>
    );
}