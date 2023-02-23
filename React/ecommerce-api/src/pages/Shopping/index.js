import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { ItemContainer } from '../Product/styled';
import { ShoppingContainer } from './styled';
import {ProductContainer} from '../Home/styled';
import { CartButton } from '../Product/styled';

export default function Shopping(){
    const cart = useSelector(state => state.products.cart);
    const [id, setId] = useState('');
    const dispatch = useDispatch();
    const removeProduct = useCallback(() => {
        dispatch(actions.removeProduct(id));
    }, [dispatch, id]);
    const incrementQuantity = useCallback(() => {
        dispatch(actions.incrementQuantity(id));
    }, [dispatch, id]);
    const decrementQuantity = useCallback(() => {
        dispatch(actions.decrementQuantity(id));
    }, [dispatch, id]);
    return (
        <ItemContainer>
            <ProductContainer>
                {(cart.map(item => (
                    <ShoppingContainer key={item.id}>
                        <p key={item.name}>{item.name}</p>
                        <img key={item.images} src={item.images} alt=''/>
                        <p key={item.quantity}>{item.quantity}</p>
                        <CartButton onClick={incrementQuantity}>+</CartButton>
                        <CartButton onClick={decrementQuantity}>-</CartButton>
                        <CartButton onClick={removeProduct}>Remove item</CartButton>
                    </ShoppingContainer>
                )))}
            </ProductContainer> 
        </ItemContainer> 
    )
}