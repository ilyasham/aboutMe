import React from 'react'
import { shallow } from 'enzyme'

import Resume from '../component'

it('renders without crashing', () => {
  shallow(
    <Resume />
  )
})
