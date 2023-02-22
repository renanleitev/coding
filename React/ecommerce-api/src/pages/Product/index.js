import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { ItemContainer, CartButton } from './styled';
import {ProductContainer} from '../Home/styled';

export default function Product(){
    const url = useParams();
    const id = Number.parseInt(url.id);
    const dispatch = useDispatch();
    useEffect(() => {
        async function getData() {
            try {
                dispatch(actions.findProduct({id}));
            } 
            catch (e) {
                toast.error('Error:', e);
            }
        }
        getData();
    }, [dispatch, id]);
    const product = useSelector(state => state.products.product);
    const name = product.data.name;
    const images = product.data.images;
    const addProduct = useCallback(() => {
        dispatch(actions.addProduct({id, name, images}));
    }, [dispatch, id, images, name]);
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
        <>
            <ProductContainer>
                <ItemContainer> 
                    <p>{name}</p>
                    <img src={images} alt=''/>
                </ItemContainer> 
                <ItemContainer> 
                    <p>Info about the product Info about the product Info about the product Info about the product</p>
                    <p>Info about the product Info about the product Info about the product Info about the product</p>
                    <p>Info about the product Info about the product Info about the product Info about the product</p>
                    <p>Info about the product Info about the product Info about the product Info about the product</p>
                    <p>Info about the product Info about the product Info about the product Info about the product</p>
                    <p>Info about the product Info about the product Info about the product Info about the product</p>
                    <CartButton onClick={addProduct}>Add to cart</CartButton>
                    <button onClick={incrementQuantity}>+</button>
                    <button onClick={decrementQuantity}>-</button>
                    <button onClick={removeProduct}>Remove item</button>
                </ItemContainer> 
            </ProductContainer>       
        </> 
    )
}