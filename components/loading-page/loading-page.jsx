import * as React from 'react';
import { Image } from 'components/image';
import SVG from 'react-inlinesvg';
//@ts-ignore
import logo from '/images/brand/hermanospc-logo-small.svg';
//@ts-ignore
import styles from './loading-page.module.scss';

export const LoadingPage = () => {
  return (
    <div className={styles.loadingContainer}>
      <SVG src={logo} className={styles.image} />
    </div>
    // <h1>CARGANDO....</h1>
  )
}