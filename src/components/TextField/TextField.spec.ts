import { mount, type ComponentMountingOptions, type VueWrapper } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import TextFieldInput from './TextFieldInput.vue'
import TextFieldRoot from './TextFieldRoot.vue'
import TextFieldSlot from './TextFieldSlot.vue'
import FormLabel from '../Form/FormLabel.vue'
import { Icon } from '@iconify/vue'

describe('TextField component', () => {
	let wrapper: VueWrapper

	const buildWrapper = (options: ComponentMountingOptions<typeof TextFieldRoot>) => {
		wrapper = mount(TextFieldRoot, options)
	}

	it('should render a textfield', () => {
		buildWrapper({
			slots: { default: `<TextFieldInput placeholder="Write something..." />` },
			global: {
				components: { TextFieldInput }
			}
		})

		const input = wrapper.findComponent(TextFieldInput)

		expect(input.exists()).toBeTruthy()
		expect(wrapper.element.tagName).toBe('DIV')
	})

	describe('textfield with slot', () => {
		beforeEach(() => {
			buildWrapper({
				slots: {
					default: `
						<TextFieldSlot>
							<Icon icon="ph:magnifying-glass" />
						</TextFieldSlot>
						<TextFieldInput placeholder="Write something..." />
					`
				},
				global: {
					components: { TextFieldInput, TextFieldSlot, Icon }
				}
			})
		})

		it('should have a slot inside', () => {
			const slot = wrapper.findComponent(TextFieldSlot)
			const icon = slot.findComponent(Icon)

			expect(slot.exists()).toBeTruthy()
			expect(icon.exists()).toBeTruthy()
		})
	})

	describe('textfield with label', () => {
		beforeEach(() => {
			const Component = {
				template: `<div><slot></slot></div>`
			}

			wrapper = mount(Component, {
				slots: {
					default: `
						<FormLabel for="input">Name</FormLabel>
						<TextFieldRoot>
							<TextFieldInput id="input" placeholder="Write input..." />
						</TextFieldRoot>
					`
				},
				global: {
					components: { TextFieldRoot, TextFieldInput, FormLabel }
				}
			})
		})

		it('should have a label', () => {
			const label = wrapper.findComponent(FormLabel)

			expect(label.exists()).toBeTruthy()
			expect(label.element.textContent).toBe('Name')
		})
	})
})
