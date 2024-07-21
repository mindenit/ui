import type { Meta, StoryFn } from '@storybook/vue3'
import { Button } from '../Button'
import ButtonGroup from './ButtonGroup.vue'

const meta = {
	component: ButtonGroup,
	title: 'Forms/ButtonGroup',
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text',
			table: {
				type: { summary: 'string' }
			}
		}
	}
} satisfies Meta<typeof ButtonGroup>

export default meta

const Template: StoryFn<typeof ButtonGroup> = (args: unknown) => ({
	components: { ButtonGroup, Button },
	setup() {
		return { args }
	},
	template: `<ButtonGroup v-bind="args">
    <Button variant="primary">Button 1</Button>
    <Button variant="primary">Button 2</Button>
    <Button variant="primary">Button 3</Button>
	</ButtonGroup>`
})

export const Default = Template.bind({})

const OutlineTemplate: StoryFn<typeof ButtonGroup> = (args) => ({
	components: { ButtonGroup, Button },
	setup() {
		return { args }
	},
	template: `<ButtonGroup v-bind="args">
    <Button variant="outline">Button 1</Button>
    <Button variant="outline">Button 2</Button>
    <Button variant="outline">Button 3</Button>
    <Button variant="outline">Button 4</Button>
  </ButtonGroup>`
})

export const Outline = OutlineTemplate.bind({})

const MixedTemplate: StoryFn<typeof ButtonGroup> = (args) => ({
	components: { ButtonGroup, Button },
	setup() {
		return { args }
	},
	template: `<ButtonGroup v-bind="args">
    <Button variant="primary">Primary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="ghost">Ghost</Button>
  </ButtonGroup>`
})

export const Mixed = MixedTemplate.bind({})
