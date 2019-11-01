import React from 'react';
import cx from 'classnames';
import './Responsive.scss';
import PropTypes from 'prop-types';

const Responsive = ({ children, className, ...rest }) => {
  return (
    <div className={cx('common', 'responsive', className)} {...rest}>
      { children }
    </div>
  );
};

Responsive.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string
};

export default Responsive;
