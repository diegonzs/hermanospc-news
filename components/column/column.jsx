import * as React from 'react';
import PropTypes from 'prop-types';

//@ts-ignore
import styles from './column.module.scss';

const hasNumber = /\d/;

/**
 * @typedef {Object} ColumnProps
 * @property {string} gap - value for the separation between elements
 * @property {string} [width] - Percentage value of the width or thing like fit-content
 * @property {('flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around')} [justify] - value for justify-content property.
 * @property {('flex-end' | 'flex-start' | 'center' | 'space-between' | 'space-around')} [align] - value for align-items property.
 * @property {string} [customClass] - custom class
 * @property {any} children
 */

/**
 * Useful component to align elements in one single column
 * @param {ColumnProps} props
 */
export const Column = ({
	children,
	gap,
	justify = 'flex-start',
	align = 'flex-start',
	width = '100',
	customClass,
}) => {
	/**
	 * @type {React.CSSProperties}
	 */
	const inLineStyles = {
		gap: `${gap}px`,
		justifyItems: justify,
		alignItems: align,
		width: `${width}${hasNumber.test(width) ? '%' : ''}`,
	};
	return (
		<div className={`${styles.column} ${customClass}`} style={inLineStyles}>
			{children}
		</div>
	);
};

Column.propTypes = {
	/** value for the separation between elements. */
	gap: PropTypes.string.isRequired,
	/** With value in percentage. */
	width: PropTypes.string,
	/** value for justify-content property */
	justify: PropTypes.oneOf([
		'center',
		'space-between',
		'space-around',
		'flex-start',
		'flex-end',
	]),
	/** value for align-items property */
	align: PropTypes.oneOf([
		'center',
		'space-between',
		'space-around',
		'flex-start',
		'flex-end',
	]),
	/** Custom styles */
	customStyles: PropTypes.object,
};

Column.defaultProps = {
	justify: 'flex-start',
	align: 'flex-start',
	width: '100',
};
