import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/modules/products/actions';
import { Container } from '../../styles/GlobalStyle';
import { ProductContainer, ArrowLeft, ArrowRight } from './styled';

export default function Home(){
    const dispatch = useDispatch();
    const [limit, setLimit] = useState(5);
    useEffect(() => {
        const params = {
            numReq: limit,
        }
        async function getData() {
            try {
                dispatch(actions.findStock(params));
            } 
            catch (e) {
                toast.error('Error:', e);
            }
        }
        getData();
    }, [dispatch, limit]);
    const stock = useSelector(state => state.products.stock);
    const handlePrevious = useCallback(() => {
        if (limit > 1) setLimit(limit-1);
    }, [limit]);
    const handleNext = useCallback(() => {
        setLimit(limit+1);
    }, [limit]);
    return (    
        <>
            <ProductContainer>
                {stock.data.map((product, index) => {
                    return (
                        <Container key={index}> 
                            <Link key={index+2} to={`product/${product.id}`}>{product.name}</Link>
                            <img key={index+1} src={product.images} alt=''/>
                        </Container> 
                    )
                })}
            </ProductContainer>     
            <ArrowLeft onClick={handlePrevious}/>
            <ArrowRight onClick={handleNext}/>
        </>  
    )
}