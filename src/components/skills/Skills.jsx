import React from "react";
import PropTypes from "prop-types";

const Skills = ({ icon: Icon, name }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <p className="select-none text-sm">{name}</p>
      </div>
    </div>
  );
};

Skills.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default Skills;
