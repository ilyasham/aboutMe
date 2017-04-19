import React from 'react'
import { shallow } from 'enzyme'

import Portfolios from '../component'

it('renders without crashing', () => {
  shallow(
    <Portfolios />
  )
})
