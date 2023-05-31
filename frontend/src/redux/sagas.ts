import {type AnyAction} from 'redux';
import {call, put, takeEvery, type StrictEffect} from 'redux-saga/effects';
import {getProject} from 'src/api/project';
import {saveProject} from './features/project-reducer';
import {type ProjectInterface} from 'src/interfaces/project.interface';
import {type ToastType} from 'src/common/errors';

function * fetchProject(action: AnyAction): Generator<StrictEffect, void, ProjectInterface | false> {
	try {
		const project = yield call(getProject, action.payload as {id: string; toast: ToastType});
		yield put(saveProject(project));
	} catch (e) {
		yield put({type: 'PROJECT_FETCH_FAILED'});
	}
}

function * mySaga() {
	yield takeEvery('PROJECT_FETCH_REQUESTED', fetchProject);
}

export default mySaga;
