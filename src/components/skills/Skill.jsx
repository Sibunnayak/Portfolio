import React from 'react';
import "./skill.css"
import Frotend from './Frotend';
import Backend from './Backend';


export const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
        <Frotend />

        <Backend />
        </div>
    </section>
  )
}
