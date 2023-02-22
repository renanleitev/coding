import { call, put, all, takeLatest } from '@redux-saga/core/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* findStock({payload}) {
    try {
        const stock = yield call(axios.get, '/products', {
            params: {
                _limit: payload.numReq,
            }
        });
        yield put(actions.showStock(stock));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

function* findProduct({payload}) {
    try {
        const product = yield call(axios.get, `/products/${payload.id}`);
        yield put(actions.showProduct(product));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

function* addProduct({payload}) {
    try {
        yield put(actions.addProduct(payload));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

function* removeProduct({payload}){
    try {
        yield put(actions.removeProduct(payload));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

function* incrementQuantity({payload}){
    try {
        yield put(actions.incrementQuantity(payload));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

function* decrementQuantity({payload}){
    try {
        yield put(actions.decrementQuantity(payload));  
    } 
    catch (e) {
        toast.error('Error:', e);
    }
}

// takeLatest = Obtém apenas o último clique do botão
export default all([
    takeLatest(types.FIND_STOCK, findStock),
    takeLatest(types.FIND_PRODUCT, findProduct),
    takeLatest(types.ADD_PRODUCT, addProduct),
    takeLatest(types.REMOVE_PRODUCT, removeProduct),
    takeLatest(types.INCREMENT_QUANTITY, incrementQuantity),
    takeLatest(types.DECREMENT_QUANTITY, decrementQuantity),
]);