import React from 'react';
import Responsive from 'components/common/Responsive';
import './PageTemplate.scss';
import PropTypes from 'prop-types';

const PageTemplate = ({ header, footer, children }) => {
  return (
    <div className="page-template">
      {header}
      <main>
        <Responsive>
          {children}
        </Responsive>
      </main>
      {footer}
    </div>
  );
};

PageTemplate.propTypes = {
  header: PropTypes.element,
  footer: PropTypes.element,
  children: PropTypes.element,
};

export default PageTemplate;
