/**
 * @typedef {Object} AggregateProps
 * @property {number} count
 * @typedef {Object} Aggregate
 * @property {AggregateProps} aggregate
 */

/**
 * @typedef {Object} TagProps
 * @property {string} text - the text that would be in the tag
 * @typedef {Object} Tag
 * @property {TagProps} tag
 */

/**
 * @typedef {Object} Source
 * @property {string} name
 * @property {string} favicon
 */

/**
 * @typedef {Object} Category
 *	@property {string} slug
 */

/**
 * @typedef {Object} LinkSaved
 * @property {string} id
 */

/**
 * @typedef {Object} Reaction
 * @property {string} id
 * @property {string} emoji
 */

/**
 * @typedef {Object} News
 * @property {string} id - ID
 * @property {string} image - Main image.
 * @property {string} cloudinary_id
 * @property {string} title - Title.
 * @property {Source} source - Source.
 * @property {string} created_at - How logn since posted.
 * @property {string} original_link  - Where it sends the user when clicked.
 * @property {Category} category - News category
 * @property {string} [tags] - List of tags stringify
 * @property {string} [content] - News's content in HTML format
 * @property {LinkSaved[]} [links_saved] - Tells if the link has already saved this link.
 * @property {Reaction[]} [reactions] - Tells if the user has react to this link.
 * @property {Aggregate} likes - Indicates how many likes this link has
 * @property {Aggregate} dislikes - Indicates how many dislikes this link has
 */

/**
 * @typedef {Object} NewsCardProps
 * @property {News} news - News object
 * @property {boolean} [isBig]  - Tells if the card should be bigger.
 */

/**
 * @typedef {Object} TagFromDB
 * @property {string} text
 *
 * @typedef {Object} TagsFromDB
 * @property {TagFromDB} tag
 *
 * @typedef {Object} NewsFromDB
 * @property {string} id
 * @property {string} image
 * @property {string} title
 * @property {Source} source
 * @property {string} created_at
 * @property {string} original_link
 * @property {TagsFromDB[]} tags
 */

/**
 * @typedef {Object} CategoryListFromDB
 * @property {string} id
 * @property {string} title
 * @property {string} emoji
 * @property {NewsFromDB[]} links
 * @property {string} slug
 */
/**
 * @typedef {Object} CategoryConverter
 * @property {string} id
 * @property {string} title
 * @property {string} emoji
 * @property {News[]} links
 */
