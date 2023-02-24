import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { CartContainer, ShoppingContainer, ButtonContainer, ItemContainer } from './styled';
import { CartButton } from '../Product/styled';
import { Link } from 'react-router-dom';

export default function Shopping(){
    const cart = useSelector(state => state.products.cart);
    const [render, setRender] = useState(0);
    const dispatch = useDispatch();
    function forceRender(){
        setRender(render+1);
    }
    return (
        <CartContainer>
                {(cart.map(item => (
                    <ItemContainer key={item.id}>
                        <ShoppingContainer key={item.id+1}>
                            <Link to={`product/${item.id}`} key={item.name}>{item.name}</Link>
                            <img key={item.images} src={item.images} alt=''/>
                            <p key={item.quantity}>Quantity: {item.quantity}</p>
                        </ShoppingContainer>
                        <ButtonContainer key={item.id+2}>
                                <CartButton onClick={() => {
                                    dispatch(actions.incrementQuantity(item.id));
                                    forceRender();
                                    }}>+</CartButton>
                                <CartButton onClick={() => {
                                    dispatch(actions.decrementQuantity(item.id));
                                    forceRender();
                                    }}>-</CartButton>
                                <CartButton onClick={() => {
                                    dispatch(actions.removeProduct(item.id));
                                    forceRender();
                                    }}>Remove item</CartButton>
                        </ButtonContainer>
                    </ItemContainer>
                )))}
        </CartContainer> 
    )
}