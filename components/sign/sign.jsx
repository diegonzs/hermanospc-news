import * as React from 'react';
import PropTypes from 'prop-types';

//@ts-ignore
import styles from './sign.module.scss';
import { Form } from './form';

/**
 * Sign Form it can be used as Sign-In and Sign-Up forms.
 * @param {SignProps} props - Props
 */
export const Sign = ({ title, buttonText, handleSubmit, changeFormText, changeFormPath }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <ul className={styles.socialList}>
        <li>Google</li>
        <li>Facebook</li>
        <li>Twitter</li>
      </ul>
      <div className={styles.separator}><span>or continue with email</span></div>
      <Form
        buttonText={buttonText}
        handleSubmit={handleSubmit}
        changeFormPath={changeFormPath}
        changeFormText={changeFormText}
      />
    </div>
  )
}

Sign.propTypes = {
  /** Title to be display at the top of the component */
  title: PropTypes.string.isRequired,
  /** Text that would go inside the submit button */
  buttonText: PropTypes.string.isRequired,
  /** handle for the submit event on the form */
  handleSubmit: PropTypes.func.isRequired,
  /** Text to show in the chanche form link */
  changeFormText: PropTypes.string.isRequired,
  /** Path to redirect the user */
  changeFormPath: PropTypes.string.isRequired,
}