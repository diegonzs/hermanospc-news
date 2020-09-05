import {
	DocumentNode,
	OperationVariables,
	QueryHookOptions,
	QueryResult,
	useQuery,
} from '@apollo/client';

/**
 * Hook to enaable cache-and-network fetchPolice
 * @param {DocumentNode} query
 * @param {QueryHookOptions<any, OperationVariables>} [options]
 * @returns {QueryResult<any, OperationVariables>}
 */
export const useSwrQuery = (query, options) => {
	const result = useQuery(query, options);
	let inCache = true;

	if (result.loading) {
		try {
			const data = result.client.readQuery({
				query,
				variables: result.variables,
			});
			if (!data) {
				inCache = false;
			}
		} catch (error) {
			inCache = false;
		}
	}
	result.loading = !inCache;
	return result;
};
