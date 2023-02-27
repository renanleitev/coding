import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { 
    CartContainer, 
    ShoppingContainer, 
    ButtonContainer, 
    ItemContainer,
    CheckoutContainer } from './styled';
import { CartButton } from '../Product/styled';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Shopping(){
    const cart = useSelector(state => state.products.cart);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    const [render, setRender] = useState(0);
    const [total, setTotal] = useState(0);
    const [isCheckout, setIsCheckout] = useState(true);
    const dispatch = useDispatch();
    function forceRender(){
        setRender(render+1);
    }
    useEffect(() => {
        if (isCheckout){
            cart.forEach(element => {
                setTotal(total + element.totalPrice);
            });
        }
        setIsCheckout(false);
    }, [cart, isCheckout, total]);
    const handleCheckout = useCallback(() => {
        toast.success(`Thank you! Your total is $${total}`);
        setTotal(0);
        setIsCheckout(true);
    }, [total]);
    return (
        <CartContainer>
            <CheckoutContainer onClick={handleCheckout}>Checkout</CheckoutContainer>
            {isLoggedIn ? (
                cart.map(item => (
                    <ItemContainer key={Math.random()}>
                        <ShoppingContainer key={Math.random()}>
                            <Link to={`product/${item.id}`} key={item.name}>{item.name}</Link>
                            <img key={Math.random()} src={item.images} alt=''/>
                            <p key={Math.random()}>Price: ${item.price}</p>
                            <p key={Math.random()}>Quantity: {item.quantity}</p>
                            <p key={Math.random()}>Total: {item.totalPrice}</p>
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
                ))
            ) : (
                <ItemContainer>
                    <h1>You must be logged in to visualize your cart.</h1>
                </ItemContainer>
            )}
        </CartContainer> 
    )
}