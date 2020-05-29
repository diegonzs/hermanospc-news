import * as React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Row } from 'components/row';
import { Input } from '../input';
import { Button } from 'components/button';

// @ts-ignore
import styles from './form.module.scss';
import { Checkbox } from '../checkbox';


/**
 * This is the form to sign-in or sign-up in the app
 * @param {FormProps} props
 */
export const Form = ({ buttonText, handleSubmit, changeFormText, changeFormPath, hasTick }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsloading] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);
  const [isPasswordVisible, setPasswordVisibility] = React.useState(false);

  return (
    <form className={styles.form} action="post" onSubmit={e => {
      e.preventDefault();
      e.stopPropagation();
      setIsloading(true);
      handleSubmit({ email, password });
    }}>
      <Input
        id="email"
        label="Email Address"
        value={email}
        onChangeHandler={(value) => setEmail(value)}
      />
      <Input
        id="password"
        label="Password"
        value={password}
        type={isPasswordVisible ? 'text' : 'password'}
        onChangeHandler={(value) => setPassword(value)}
        toggleTypeHandler={() => setPasswordVisibility(!isPasswordVisible)}
      />
      {hasTick && (
        <Checkbox
          id="tick"
          onChangeHandler={() => setIsChecked(!isChecked)}
          label="I Agree with Hermanos PC terms of service and privacy police."
          isChecked={isChecked}
        />
      )}
      {!hasTick && (
        <span className={styles.forgotPassword}>I forgot the password</span>
      )}
      <Row customStyles={hasTick ? {
        marginTop: '78px',
      }: {}}>
        <Link href={changeFormPath}>
          <a href={changeFormPath}>{changeFormText}</a>
        </Link>
        <Button
          text={buttonText}
          onClickHandler={() => { return }}
          isDisabled={!email || !password || isLoading || (hasTick && !isChecked)}
        />
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
