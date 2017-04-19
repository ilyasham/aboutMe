import { connect } from 'react-redux'

import PortfoliosComponent from './component'

const PortfoliosContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {}
)(PortfoliosComponent)

export default PortfoliosContainer
