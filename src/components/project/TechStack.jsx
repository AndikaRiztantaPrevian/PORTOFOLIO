import React from 'react';
import PropTypes from 'prop-types';

const TechStack = ({ icon: Icon, name, color }) => {
  return (
    <>
        <Icon className={`rounded-full h-8 w-8 bg-blue-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 -mr-3 transition-all hover:-mr-0 ${color} p-1`} title={name}/>
    </>
  )
}

TechStack.propTypes = {
    icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default TechStack