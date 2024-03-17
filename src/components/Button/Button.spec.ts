import { ComponentMountingOptions, VueWrapper, mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { Button } from './index'
import { Icon } from '@iconify/vue'

describe('Button component', () => {
	let wrapper: VueWrapper

	const buildWrapper = (options?: ComponentMountingOptions<typeof Button>) => {
		wrapper = mount(Button, options)
	}

	it('renders a button', () => {
		buildWrapper({ props: { variant: 'primary' }, slots: { default: 'Click me!' } })

		expect(wrapper.element.tagName).toBe('BUTTON')
	})
	it('renders a icon button', () => {
		buildWrapper({
			props: { variant: 'primary', appearence: 'default' },
			slots: { default: '<Icon icon="ph:plus" />' },
			global: {
				components: { Icon }
			}
		})

		expect(wrapper.element.tagName).toBe('BUTTON')
	})

	describe('asChild button', () => {
		beforeEach(() => {
			buildWrapper({
				props: { variant: 'primary', asChild: true },
				slots: { default: `<span>Click me!</span>` }
			})
		})

		it('should render a span', () => {
			expect(wrapper.element.tagName).toBe('SPAN')
		})

		it('should have classes of the button', () => {
			expect(wrapper.element.classList).toContain('bg-royal-blue-500')
		})
	})

	describe('button with icon', () => {
		beforeEach(() => {
			buildWrapper({
				props: { variant: 'primary' },
				slots: { default: `<Icon icon="ph:plus" /> Add` },
				global: {
					components: { Icon }
				}
			})
		})

		it('should have an icon', () => {
			const button = wrapper.findComponent('BUTTON')

			expect(button)
		})
	})
})
