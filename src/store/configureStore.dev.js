import {createStore,applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = composeEnhancers(
        applyMiddleware(),
    );

    const store = createStore(rootReducer, initialState, middleware);

    return store;
}