import React, { PureComponent /*, PropTypes*/ } from 'react'
// import IPropTypes from 'react-immutable-proptypes'

import './styles.scss'

export default class ResumeComponent extends PureComponent {

  static propTypes = {
    // PropTypes go here
  }

  render() {
    return (
      <div className="resume-container">
        <div className="resume-separator"/>
        <h3 className="resume-title">Education</h3>
        <section className="resume-section-container">
          <h4>Moscow Institute of Physics and Technology State University (MIPT)</h4>
          <p> Bachelor of Engineering (B.Eng.)  2006-2010</p>
        </section>
        <div className="resume-separator"/>
        <h3 className="resume-title">Employment</h3>
        <section className="resume-section-container">
          <h4>VTV (local television)</h4>
          <p> Electronic/ Software Engineer / Video Editor  1998-2006</p>
        </section>
        <section className="resume-section-container">
          <h4>DK"Jubileyniy" (local municipal culture center</h4>
          <p>Electronic/ Software Engineer / Video Editor 2006 - now</p>
        </section>
      </div>
    )
  }
}
