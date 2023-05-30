import {configureStore} from '@reduxjs/toolkit';
import projectSlice from './features/project-reducer';

export default configureStore({
	reducer: {
		project: projectSlice,
	},
});
