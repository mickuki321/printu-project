import {
	useSelector as useReduxSelector,
	type TypedUseSelectorHook,
} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import projectSlice from './features/project-reducer';
import createSagaMiddleware from 'redux-saga';

import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		project: projectSlice,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
