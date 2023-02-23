import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { ItemContainer, CartButton } from './styled';
import {ProductContainer} from '../Home/styled';

export default function Product(){
    const url = useParams();
    const id = Number.parseInt(url.id);
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product);
    if (product === undefined) dispatch(actions.findProduct({id}));
    const name = product.data.name;
    const images = product.data.images;
    const operationalSystem = product.data.os;
    const storage = product.data.storage.hdd;
    const memory = product.data.storage.ram;
    const cpu = product.data.hardware.cpu;
    const wifi = product.data.connectivity.wifi;
    const description = product.data.description;
    const screenResolution = product.data.display.screenResolution;
    const screenSize = product.data.display.screenSize;
    useEffect(() => {
        dispatch(actions.findProduct({id}));
    }, [dispatch, id]);
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
                    <p>Operational System: {operationalSystem}</p>
                    <p>Resolution: {screenResolution}</p>
                    <p>Screen Size: {screenSize}</p>
                    <p>Storage: {storage}</p>
                    <p>Memory: {memory}</p>
                    <p>CPU: {cpu}</p>
                    <p>Wifi: {wifi}</p>
                    <p>Description: {description}</p>
                    <ProductContainer>
                        <CartButton onClick={addProduct}>Add to cart</CartButton>
                        <CartButton onClick={incrementQuantity}>+</CartButton>
                        <CartButton onClick={decrementQuantity}>-</CartButton>
                        <CartButton onClick={removeProduct}>Remove item</CartButton>
                    </ProductContainer>
                </ItemContainer> 
                <ItemContainer> 
                    <p>{name}</p>
                    <img src={images} alt=''/>
                </ItemContainer> 
            </ProductContainer>       
        </> 
    )
}