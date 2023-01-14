import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';
import "./Skills.css"

const Skills = () => {
      const [skills, setSkills] = useState([]);
      useEffect(() => {
            fetch("Skills.json")
                  .then(res => res.json())
                  .then(data => setSkills(data))
      }, [])
      return (
            <div className='container'>
                  <div className="row">
                        <h1 className='skills_head'>SKILLS</h1>
                        <div className="skills">
                              {
                                    skills.map(skill => <Skill key={skill.id}
                                          skill={skill}
                                    ></Skill>)
                              }
                        </div>
                  </div>
            </div>
      );
};

export default Skills;