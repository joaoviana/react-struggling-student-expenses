import {createStore} from 'redux';

//action generators

const incrementCount = ({incrementBy = 1} ={}) => (
    { 
        type: 'INCREMENT',
        incrementBy
    });

const decrementCount = ({decrementBy = 1} ={}) => (
    {
        type: 'DECREMENT',
        decrementBy
    });

const setCount = ({count}) => ({
    type:'SET',
    count
});

const resetCount = () => (
    {
        type:'RESET'
    }
);

//reducers

const countReducer = (state = {count: 0}, action) => {
    
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
            break;
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
            break;
        case 'SET': 
            return {
                count: action.count
            }
        case 'RESET' :
            return {
                count: 0
            }
        default:
            return state;
            break;
    }
    
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count:101}));
