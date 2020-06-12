/**
 * @typedef {Object} UserSettingsProps
 * @property {string} username - This is the current username
 * @property {string} email - This is the current email
 * @property {string} [avatar] - This is the current user avatar 
 */

 /**
 * @typedef {Object} settings
 * @property {boolean} isActive - determines is active
 * @property {string} id - ID
 * @property {string} title - Title
 * @property {string} description - Description 
 * 
 * @typedef {Object} NotificationSettingsProps
 * @property {settings[]} settings - List of settings.
 * @property {(value: string) => void} updateSettings - Function to update setting's state.
 */