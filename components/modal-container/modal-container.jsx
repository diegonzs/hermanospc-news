import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
//@ts-ignore
import styles from './modal-container.module.scss';

/**
 * @typedef {Object} ModalContainerProps
 * @property {boolean} isOpen
 * @property {() => void} closeHandler
 * @property {any} [children]
 */

/**
 * Layout to display modals in the app.
 * @param {ModalContainerProps} props
 */
export const ModalContainer = ({ children, isOpen, closeHandler }) =>
	isOpen
		? ReactDOM.createPortal(
				<div className={styles.container}>
					<style
						dangerouslySetInnerHTML={{ __html: ` body { overflow: hidden }` }}
					/>
					<div className={styles.background} onClick={() => closeHandler()} />
					<div className={styles.content}>{children}</div>
				</div>,
				document.body
		  )
		: null;

ModalContainer.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	closeHandler: PropTypes.func.isRequired,
};
