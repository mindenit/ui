import { expect, it } from 'vitest'
import { components } from './constants/components'
import * as MindenitUi from './index'

it('should expose the correct components', () => {
  expect(Object.keys(MindenitUi)).toEqual(Object.values(components))
})
