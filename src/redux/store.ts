// store.ts
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const createSagaMiddleware = require('redux-saga').default;

import rootSaga from './rootSaga';
import {reactotron} from '../../ReactotronConfig';

const sagaMonitor = reactotron.createSagaMonitor?.(); // Optional
// If you are not using Reactotron, you can remove the sagaMonitor line
// and just use `const sagaMiddleware = createSagaMiddleware();`
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }).concat(sagaMiddleware),
    // @ts-ignore
  enhancers: getDefaultEnhancers =>
    [
      ...getDefaultEnhancers(),
      ...(reactotron?.createEnhancer ? [reactotron.createEnhancer()] : []),
    ] as const,
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
