import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Match, Link } from 'react-router'

import Resume from '../Resume/container'
import About from '../About/container'
import Portfolios from '../Portfolios/container'

import './styles.scss'

export default class App extends Component {

  static propTypes = {
    windowResized: PropTypes.func.isRequired,
    windowWidth: PropTypes.number.isRequired,
    windowHeight: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props)
    this.handleResize = this.onResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  onResize(/* event */) {
    this.props.windowResized(window.innerWidth, window.innerHeight)
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src="profile.jpg" className="App-logo" alt="logo" />
          <div className="App-profile-name">Ilya Shamsudinov</div>
          <div className="App-profile-title">Freelance Mobile / Web Developer</div>

        </div>
        <nav className="App-mainNav">
          <ul>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/">Portfolios</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <div className="App-pageContainer">
          <Match exactly pattern="/resume" component={Resume} />
          <Match pattern="/about" component={About} />
          <Match pattern="/" component={Portfolios} />
        </div>
      </div>
    )
  }
}
