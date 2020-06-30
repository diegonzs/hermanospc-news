import * as React from 'react';
// @ts-ignore
import styles from './menu-toggle.module.scss';

export const MenuToggle = ({ isMenuOn, toggleIsMenuOn })=> {
 
    return (
      <div 
        onClick={toggleIsMenuOn} 
        className={`
          ${styles.menuBtn} 
          ${isMenuOn ? styles.menuBtnOff : styles.menuBtnOn} 
        `}>
      </div>
    );
}