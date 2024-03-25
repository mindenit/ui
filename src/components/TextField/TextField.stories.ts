import { Icon } from '@iconify/vue'
import type { Meta, StoryFn } from '@storybook/vue3'
import { FormLabel } from '../Form'
import TextFieldInput from './TextFieldInput.vue'
import TextFieldRoot from './TextFieldRoot.vue'
import TextFieldSlot from './TextFieldSlot.vue'

const meta = {
	title: 'Forms/TextField',
	component: TextFieldInput,
	tags: ['autodocs']
} satisfies Meta<typeof TextFieldInput>

export default meta

const Template: StoryFn<typeof TextFieldInput> = (args: unknown) => ({
	components: { TextFieldRoot, TextFieldInput },
	setup() {
		return { args }
	},
	template: `
		<TextFieldRoot :error="args.error">
      <TextFieldInput v-bind="args" type="text" /> 
    </TextFieldRoot>
	`
})

export const Default = Template.bind({})
Default.args = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	placeholder: 'Write something...',
	disabled: false
}

export const Error = Template.bind({})
Error.args = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	placeholder: 'Write something...',
	disabled: false,
	error: true
}

const WithSlotTemplate: StoryFn<typeof TextFieldInput> = (args: unknown) => ({
	components: { TextFieldRoot, TextFieldInput, TextFieldSlot, Icon },
	setup() {
		return { args }
	},
	template: `
    <TextFieldRoot>
      <TextFieldSlot>
        <Icon icon="ph:magnifying-glass" />
      </TextFieldSlot>
      <TextFieldInput v-bind="args" type="text" /> 
    </TextFieldRoot>
  `
})

export const WithSlot = WithSlotTemplate.bind({})
WithSlot.args = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	placeholder: 'Search...',
	disabled: false
}

const WithLabelTemplate: StoryFn<typeof TextFieldInput> = (args: unknown) => ({
	components: { TextFieldRoot, TextFieldInput, TextFieldSlot, Icon, FormLabel },
	setup() {
		return { args }
	},
	template: `
    <div class="flex flex-col gap-2">
      <FormLabel for="input">Name</FormLabel>
      <TextFieldRoot>
        <TextFieldSlot>
          <Icon icon="ph:user" />
        </TextFieldSlot>
        <TextFieldInput v-bind="args" id="input" type="text" /> 
      </TextFieldRoot>
    </div>
  `
})

export const WithLabel = WithLabelTemplate.bind({})
WithLabel.args = {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	placeholder: 'Write name...',
	disabled: false
}
