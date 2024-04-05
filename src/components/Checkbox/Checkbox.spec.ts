import { ComponentMountingOptions, DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { Checkbox } from '.'

describe('Checkbox component', () => {
	const id = 'checkbox'
	let wrapper: VueWrapper

	const buildWrapper = (options?: ComponentMountingOptions<typeof Checkbox>) => {
		wrapper = mount(Checkbox, options)
	}

	it('should render a checkbox', () => {
		buildWrapper({ props: { id } })

		const checkbox = wrapper.find('button')

		expect(checkbox.exists()).toBeTruthy()
	})

	describe('when clicking the checkbox', () => {
		let checkbox: DOMWrapper<HTMLButtonElement>

		beforeEach(async () => {
			buildWrapper()

			checkbox = wrapper.find('button')
			checkbox.trigger('click')
		})

		it('should render a visible indicator', async () => {
			expect(wrapper.find('span').exists()).toBeTruthy()
		})

		describe('when clicking the chackbox again', () => {
			beforeEach(async () => {
				await checkbox.trigger('click')
			})

			it('should remove the indicator', () => {
				expect(wrapper.find('span').exists()).toBeFalsy()
			})
		})
	})
})
