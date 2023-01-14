import React from 'react';
import "./Skill.css"

const Skill = ({skill}) => {
      const {name, icon} = skill;
      return (
            <div className='skill'>
                  <i class={icon}></i>
                  <h3>{name}</h3>
            </div>
      );
};

export default Skill;