import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { ItemContainer } from '../Product/styled';
import { ShoppingContainer } from './styled';
import {ProductContainer} from '../Home/styled';
import { CartButton } from '../Product/styled';

export default function Shopping(){
    const cart = useSelector(state => state.products.cart);
    const dispatch = useDispatch();
    return (
        <ItemContainer>
            <ProductContainer>
                {(cart.map(item => (
                    <ShoppingContainer key={item.id}>
                        <p key={item.name}>{item.name}</p>
                        <img key={item.images} src={item.images} alt=''/>
                        <p key={item.quantity}>{item.quantity}</p>
                        <CartButton onClick={() => dispatch(actions.incrementQuantity(item.id))}>+</CartButton>
                        <CartButton onClick={() => dispatch(actions.decrementQuantity(item.id))}>-</CartButton>
                        <CartButton onClick={() => dispatch(actions.removeProduct(item.id))}>Remove item</CartButton>
                    </ShoppingContainer>
                )))}
            </ProductContainer> 
        </ItemContainer> 
    )
}