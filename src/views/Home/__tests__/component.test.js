import React from 'react'
import { shallow } from 'enzyme'

import Home from '../component'

it('renders without crashing', () => {
  shallow(
    <Home/>
  )
})
