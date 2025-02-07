import type { Meta, StoryFn } from '@storybook/vue3'
import type { TextAreaProps } from '.'
import { TextAreaInput, TextAreaRoot } from '.'
import { FormLabel } from '../Form'

const meta = {
	title: 'Forms/TextArea',
	component: TextAreaInput,
	tags: ['autodocs'],
} satisfies Meta<typeof TextAreaInput>

export default meta

const Template: StoryFn<TextAreaProps> = (args: unknown) => ({
	components: { TextAreaRoot, TextAreaInput },
	setup() {
		return { args }
	},
	template: `
		<TextAreaRoot :error="args.error">
			<TextAreaInput v-bind="args" />
		</TextAreaRoot>
	`,
})

export const Default: StoryFn<typeof TextAreaInput> = Template.bind({})
Default.args = {
	placeholder: 'Write something...',
	disabled: false,
}

export const Error = Template.bind({})
Error.args = {
	placeholder: 'Write something...',
	disabled: false,
	error: true,
}

const WithLabelTemplate: StoryFn<typeof TextAreaInput> = (args: unknown) => ({
	components: { TextAreaInput, TextAreaRoot, FormLabel },
	setup() {
		return { args }
	},
	template: `
    <div class="flex flex-col gap-1">
      <FormLabel for="input">Name</FormLabel>
      <TextAreaRoot>
        <TextAreaInput v-bind="args" id="input" type="text" /> 
      </TextAreaRoot>
    </div>
  `,
})

export const WithLabel = WithLabelTemplate.bind({})
WithLabel.args = {
	placeholder: 'Write name...',
	disabled: false,
}
