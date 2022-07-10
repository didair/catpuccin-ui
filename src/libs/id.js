import { unique } from "./shorthash";

/**
 * @param {string} prefix
 */
export const useId = (prefix = null) => {
	const hash = unique((Math.random().toString(36)+'00000000000000000').slice(2, 7));

	return prefix != null ?
		`${prefix}-${hash}`
	: hash;
};
