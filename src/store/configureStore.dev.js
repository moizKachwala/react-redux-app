import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from './reducers.js';

export default function configureStore(initialState = {}) {

    const middleware = compose(
        applyMiddleware(),
    );

    const store = createStore(rootReducer, initialState, middleware);

    return store;
}