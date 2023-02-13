// ! Importando o redux
const redux = require('@reduxjs/toolkit');
const configureStore = redux.configureStore;
const combineReducers = redux.combineReducers;

// ! Importando redux-logger (middleware)
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

// ! Actions
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// ! Actions Creators
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Cake was sold!'
    }    
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Ice Cream was sold!'
    }
}

// ! Estado inicial
// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
// }

// ! Estado para cada objeto
const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 20,
}

// ! Reducer Genérico
// (previousState, action) => newState
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numOfIceCreams: state.numOfIceCreams - 1
//         }
//         default: return state;
//     }
// }

// ! Reducer para Cake
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

// ! Reducer para Ice Cream
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

// ! Combinando os reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// ! Store
const store = configureStore({
    reducer: rootReducer,
    middleware: [logger],
});
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {});

// ! Disparando as ações (dispatch)
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();