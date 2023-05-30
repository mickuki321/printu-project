import {createSlice} from '@reduxjs/toolkit';
import {getProject} from 'src/api/project';

export const projectSlice = createSlice({
	name: 'counter',
	initialState: {},
	reducers: {
		async fetchProject(state, action) {
			const response = await getProject({id: action.payload});
			if (response) {
				state = response;
			}
		},
	},
});

export const {fetchProject} = projectSlice.actions;

export default projectSlice.reducer;
