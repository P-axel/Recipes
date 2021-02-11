// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import SCSS
import './instructions.scss';

// == Composant
const Instructions = ({ steps }) => (
  <section className="steps">
    {steps.map((step) => (
      <div key={step} className="steps__item">
        {step}
      </div>
    ))}
  </section>
);

Instructions.propTypes = { 
  steps: PropTypes.arrayOf( 
    PropTypes.string.isRequired,
  ).isRequired, 
};

// == Export
export default Instructions;
