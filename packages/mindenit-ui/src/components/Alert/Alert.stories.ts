import type { Meta, StoryFn } from '@storybook/vue3'
import { Alert, AlertTitle, AlertDescription } from '.'

const meta = {
	title: 'Base/Alert',
	component: Alert,
	tags: ['autodocs']
} satisfies Meta<typeof Alert>

export default meta

const Template: StoryFn<typeof Alert> = (args: unknown) => ({
	components: { Alert, AlertTitle },
	setup() {
		return { args }
	},
	template: `<Alert v-bind="args"><AlertTitle>{{ args.title }}</AlertTitle></Alert>`
})

const TemplateWithDescription: StoryFn<typeof Alert> = (args: unknown) => ({
	components: { Alert, AlertTitle, AlertDescription },
	setup() {
		return { args }
	},
	template: `
    <Alert v-bind="args">
      <AlertTitle>{{ args.title }}</AlertTitle>
      <AlertDescription>{{ args.description }}</AlertDescription>
    </Alert>
  `
})

export const Error = Template.bind({})

Error.args = {
	status: 'error',
	// @ts-expect-error blah
	title: 'Insert your alert title here'
}

export const Info = Template.bind({})

Info.args = {
	status: 'info',
	// @ts-expect-error blah
	title: 'Insert your alert title here'
}

export const Feature = Template.bind({})

Feature.args = {
	status: 'feature',
	// @ts-expect-error blah
	title: 'Insert your alert title here'
}

export const Warning = Template.bind({})

Warning.args = {
	status: 'warning',
	// @ts-expect-error blah
	title: 'Insert your alert title here'
}

export const WithDescription = TemplateWithDescription.bind({})

WithDescription.args = {
	status: 'error',
	// @ts-expect-error blah
	title: 'Error',
	description: 'Your session has expired. Please log in again'
}
