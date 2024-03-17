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

	describe('icon button', () => {
		beforeEach(() => {
			buildWrapper({
				props: { variant: 'primary', appearance: 'icon' },
				slots: { default: '<Icon icon="ph:plus" />' },
				global: {
					components: { Icon }
				}
			})
		})

		it('should have classes of the icon button', () => {
			expect(wrapper.element.classList.contains('size-10')).toBe(true)
		})

		it('should have an icon in slot', () => {
			const icon = wrapper.findComponent(Icon)

			expect(icon.exists()).toBe(true)
		})
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
			expect(wrapper.element.classList.contains('bg-royal-blue-500')).toBe(true)
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

		it('should have an icon in slot', () => {
			const icon = wrapper.findComponent(Icon)

			expect(icon.exists()).toBe(true)
		})

		it('should have classes of the button', () => {
			expect(wrapper.element.classList.contains('h-10 w-auto min-w-32 px-4'))
		})
	})
})
