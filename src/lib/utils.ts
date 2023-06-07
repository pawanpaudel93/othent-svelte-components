import {
	Othent,
	type LogInReturnProps,
	type useOthentReturnProps,
	type LogOutReturnProps
} from 'othent';
import { get } from 'svelte/store';
import { userData } from './stores';

let othent: useOthentReturnProps | undefined;

export function getUserData() {
	return get(userData) ? { ...get(userData) } : null;
}

export async function getOthent(apiid: string) {
	if (othent) return othent;
	othent = await Othent({ API_ID: apiid });
	return othent;
}

export async function othentLogin(apiid: string): Promise<LogInReturnProps> {
	const othent = await getOthent(apiid);
	const loginResponse = await othent.logIn();
	userData.set(loginResponse);
	return loginResponse;
}

export async function othentLogout(apiid: string): Promise<LogOutReturnProps> {
	const othent = await getOthent(apiid);
	const logoutResponse = await othent.logOut();
	logoutResponse.response && userData.set(null);
	return logoutResponse;
}
