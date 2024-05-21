import React from "react";
import PropTypes from "prop-types";

const Skills = ({ icon: Icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-1 lg:gap-2">
      <div>
        <Icon className="lg:w-8 lg:h-8 w-6 h-6" />
      </div>
      <div>
        <p className="select-none text-xs lg:text-sm">{name}</p>
      </div>
    </div>
  );
};

Skills.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default Skills;
