/**
 * @typedef {Object} Tag
 * @property {string} text - the text that would be in the tag
 */
/**
 * @typedef {Object} News
 * @property {string} id - ID
 * @property {string} image - Main image.
 * @property {string} title - Title.
 * @property {string} source - Source.
 * @property {string} created_at - How logn since posted.
 * @property {string} original_link  - Where it sends the user when clicked.
 * @property {Tag[]} [tags] - List of tags
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
 * @property {string} source
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
 */
/**
 * @typedef {Object} CategoryConverter
 * @property {string} id
 * @property {string} title
 * @property {string} emoji
 * @property {News[]} links
 */
