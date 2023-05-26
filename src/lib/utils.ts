import { Othent, type useOthentReturnProps } from 'othent';

let othent: useOthentReturnProps | undefined;

export async function getOthent(apiid: string) {
	if (othent) return othent;
	othent = await Othent({ API_ID: apiid });
	return othent;
}
