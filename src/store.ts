import { configureStore, combineReducers, PreloadedState } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import dataReducer from '@service/data.slice';
import { offsetMiddleware } from './middlewares/incrementPageOffset';

//import logger from 'redux-logger';

const rootReducer = combineReducers({
  data: dataReducer,
});

export const setupStore: any  = function (preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    //@ts-ignore
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(offsetMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch: () => AppDispatch = useDispatch;
