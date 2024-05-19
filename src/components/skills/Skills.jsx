import React from "react";
import PropTypes from "prop-types";

const Skills = ({ icon: Icon, name }) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg overflow-hidden m-4">
      <div className="flex items-center p-4">
        <div className="w-16 h-16 flex-shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
          <Icon className="w-8 h-8 text-blue-500" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
    icon: PropTypes.elementType.isRequired,
    name: PropTypes.string.isRequired,
};

export default Skills;
