import * as React from 'react';
// @ts-ignore
import styles from './menu-toggle.module.scss';

export class MenuToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div 
        onClick={this.handleClick} 
        className={`
          ${styles.menuBtn} 
          ${this.state.isToggleOn ? styles.menuBtnOn : styles.menuBtnOff} 
        `}>
      </div>
    );
  }
}