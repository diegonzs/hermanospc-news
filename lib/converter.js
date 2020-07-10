/** @returns {CategoryConverter[]} */
export const convertCategories = (dbCategories) => {
	return dbCategories.map((dbCategory) => {
		return {
			...dbCategory,
			links: dbCategory.links.map((link) => {
				return {
					...link,
					tags: link.tags.map((tag) => {
						return tag.tag;
					}),
				};
			}),
		};
	});
};
