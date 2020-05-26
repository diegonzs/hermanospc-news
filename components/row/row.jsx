import * as React from 'react';
import PropTypes from 'prop-types';


/**
 * @typedef {Object} rowProps
 * @property {('center' | 'space-between' | 'space-around')} [justify] - value for justify-content property
 * @property {('center' | 'space-between' | 'space-around')} [align] - value for align-items property
 * @property {any} children
 */

/**
 * Useful component to align elements in one single row
 * @param {rowProps} props 
 */
export const Row = ({ children, justify="space-between", align="center" }) => {
  return <div style={{
    display: 'flex',
    justifyContent: justify,
    alignItems: align,
    width: '100%'
  }}>{children}</div>
}

Row.propTypes = {
  /** value for justify-content property */
  justify: PropTypes.oneOf(['center', 'space-between', 'space-around']),
  /** value for align-items property */
  align: PropTypes.oneOf(['center', 'space-between', 'space-around']),
}