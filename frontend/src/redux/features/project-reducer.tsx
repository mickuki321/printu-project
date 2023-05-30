import {createSlice} from '@reduxjs/toolkit';
import {type ProjectInterface} from 'src/interfaces/project.interface';

export type StateInterface = {
	value?: ProjectInterface;
};

const INITIAL_STATE: StateInterface = {
	value: undefined,
};
export const projectSlice = createSlice({
	name: 'counter',
	initialState: {...INITIAL_STATE},
	reducers: {
		saveProject(state: StateInterface, action) {
			if (action.payload) {
				state.value = action.payload as ProjectInterface;
			}
		},
	},
});

export const {saveProject} = projectSlice.actions;

export default projectSlice.reducer;
