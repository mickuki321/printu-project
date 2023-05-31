import {
	type ProjectDetailsInterface,
	type ProjectInterface,
	type ProjectItemInterface,
} from 'src/interfaces/project.interface';

export const isProjectInterface = (
	data: ProjectInterface,
): boolean => {
	if (!data.id) {
		return false;
	}

	if (isProjectDetailsInterface(data.project)) {
		return false;
	}

	return true;
};

export const isProjectDetailsInterface = (
	data: ProjectDetailsInterface,
): boolean => {
	if (!Number.isInteger(data.width) || data.height < 0) {
		return false;
	}

	if (!Number.isInteger(data.height) || data.height < 0) {
		return false;
	}

	if (!data.name) {
		return false;
	}

	if (!data.items?.find(item => !isProjectItemInterface(item))) {
		return false;
	}

	return true;
};

export const isProjectItemInterface = (
	data: ProjectItemInterface,
): boolean => {
	if (!data.id) {
		return false;
	}

	if (!data.color) {
		return false;
	}

	if (!Number.isInteger(data.x)) {
		return false;
	}

	if (!Number.isInteger(data.y)) {
		return false;
	}

	if (!Number.isInteger(data.width) || data.height < 0) {
		return false;
	}

	if (!Number.isInteger(data.height) || data.height < 0) {
		return false;
	}

	if (!Number.isInteger(data.rotation) || data.rotation < 0) {
		return false;
	}

	return true;
};

