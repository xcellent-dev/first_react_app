import React from 'react';
import cx from 'classnames';
import './UserButton.scss';
import PropTypes from 'prop-types';

const UserButton = (props) => {
  const { type, text, onClick, disabled } = props;
  return (
    <div className={cx('user-button', type)} onClick={!disabled ? onClick : null} disabled={disabled}>
      <div className="text">
        <span>{text}</span>
      </div>
    </div>
  );
};

UserButton.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default UserButton;
