import React, { PureComponent /*, PropTypes*/ } from 'react'
// import IPropTypes from 'react-immutable-proptypes'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import './styles.scss'

export default class PortfoliosComponent extends PureComponent {

  static propTypes = {
    // PropTypes go here
  }

  render() {
    return (
      <div className="portfilios-container">
        <Card>
          <CardHeader
              title="React.js + Redux + RxJS Skeleton"
              subtitle="19/4 2017"
              avatar="profile.jpg"
          />
          <CardMedia
              overlay={
                <CardTitle
                    title="React.js + Redux + RxJS Skeleton"
                    subtitle="GitHub Open Source"
                />
              }
          >
            <img src="images/skeleton.jpg" />
          </CardMedia>
          <CardTitle
              title="The best React.js skeleton ever"
              subtitle="Ilya Shamsudinov"
          />
          <CardText>
            <div>
              This is project is a fork of <a href="https://github.com/ilyasham/create-react-app">Create React App</a>.
            </div>
            <div>
              It has everything needed for a modern React.js single page web app development.
              <ul>
                <li>Webpack React.js Build Scripts</li>
                <li>State Management with Redux</li>
                <li>Redux Action Management with RxJS</li>
              </ul>
            </div>
          </CardText>
          <CardActions>
            <FlatButton
                href="https://github.com/ilyasham/react-skeleton"
                target="_blank"
                secondary
            >
              <img src="images/GitHub-Mark-32px.png"/>
            </FlatButton>

          </CardActions>
        </Card>
      </div>
    )
  }
}
