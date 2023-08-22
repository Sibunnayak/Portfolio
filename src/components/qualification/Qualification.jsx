import React, { useState } from 'react';
import "./qualification.css";

export const Qualification = () => {
    const[toggleState,settoggleState] = useState(1);

    const toggleTab = (index) =>{
        settoggleState(index);
    };

  return (
    <section className="section qualification" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex" } onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                </div>
            </div>

            <div className="qualification__sections">
                {/* education background */}
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content" }>
                    <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__title">U.G (B.Tech)</h3>
                            <span className="qualification__subtitle">NIST, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2020 - Present
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                        <div>
                            <h3 className="qualification__title">Intermediate</h3>
                            <span className="qualification__subtitle">Khallikote Junior College, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018 - 2020
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__title">Matriculation</h3>
                            <span className="qualification__subtitle">S.S.V.M Neelkantha Nagar, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2018
                            </div>
                        </div>
                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder">           
                        </span>
                        <span className="qualification__line"></span>
                    </div>

                        <div>
                            <h3 className="qualification__title">Lower primary</h3>
                            <span className="qualification__subtitle">S.S.V.M Neelkantha Nagar, Berhampur </span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>2006 - 2017
                            </div>
                        </div>
                    </div>
                </div>
{/* working in future */}
                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content" }>
                    <div className="qualification__data">
                        <div className='qualpad'>
                            <h3 className="qualification__tabs">Currently i'm a fresher So i don't have any Experience</h3>
                    </div>
                </div>
            </div>

            </div>
        </div>
    </section>
  )
}
