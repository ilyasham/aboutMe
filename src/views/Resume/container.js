import { connect } from 'react-redux'

import ResumeComponent from './component'

const ResumeContainer = connect(
  // Map state to props
  (/*state*/) => ({}),
  // Map actions to dispatch and props
  {}
)(ResumeComponent)

export default ResumeContainer
