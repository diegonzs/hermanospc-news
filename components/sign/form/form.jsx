import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row } from 'components/row';

// @ts-ignore
import styles from './form.module.scss';


/**
 * This is the form to sign-in or sign-up in the app
 * @param {FormProps} props
 */
export const Form = ({ buttonText, handleSubmit, changeFormText, changeFormPath }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  return (
    <form action="post" onSubmit={e => {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit({ email, password });
    }}>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <input type={isPasswordVisible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} />
      <Row>
        <Link href={changeFormPath}>
          <a href={changeFormPath}>{changeFormText}</a>
        </Link>
        <button>{buttonText}</button>
      </Row>
    </form>
  )
}

Form.propTypes = {
  /** Text that would go inside the submit button */
  buttonText: PropTypes.string.isRequired,
  /** handle for the submit event on the form */
  handleSubmit: PropTypes.func.isRequired,
  /** Text to show in the chanche form link */
  changeFormText: PropTypes.string.isRequired,
  /** Path to redirect the user */
  changeFormPath: PropTypes.string.isRequired,
}
