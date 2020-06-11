import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ content, onClick }) => {
  return (
    <button onClick={onClick} >
      {content}
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  content: 'Click Me!',
  onClick: () => {},
};

export default Button;
