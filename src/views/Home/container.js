import { connect } from 'react-redux'

import HomeComponent from './component'

const HomeContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {}
)(HomeComponent)

export default HomeContainer
