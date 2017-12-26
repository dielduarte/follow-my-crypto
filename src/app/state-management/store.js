import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promisse from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { RootReducer } from './reducers';

const middleware = applyMiddleware(thunk, promisse, logger);

export const Store = createStore(
                        RootReducer,
                        compose(
                            middleware,
                            devTools({
                                name: Platform.OS,
                                hostname: 'localhost',
                                port: 5678
                            })
                        ));