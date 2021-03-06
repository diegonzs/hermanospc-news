/**
 * @typedef {Object} handleSubmitParams
 * @property {string} email - the current value of the email field
 * @property {string} password - the currenct value of the password field
 */

/**
 * @typedef {Object} FormProps
 * @property {string} buttonText - Text that would go inside the submit button
 * @property {string} changeFormText - Text to show in the chanche form link
 * @property {string} changeFormPath - Path to redirect the user
 * @property {boolean} hasTick = Determinies if the form has a tick
 * @property {(params: handleSubmitParams) => void} handleSubmit - handle for the submit event on the form
 * @property {boolean} isLoading - Determines if the For is in loading state
 */

/**
 * @typedef {Object} signInnerProps
 * @property {string} title - Title to be display at the top of the component
 * @property {(provider: "google" | "twitter" | "facebook") => void} handleSigninProvider - Function to signin with a provider
 * @property {string} [errorMsg] - Error Msg
 *
 * @typedef {FormProps & signInnerProps} SignProps
 */
