import type { Meta, StoryFn } from '@storybook/vue3'
import { TagsField } from '.'
import { ref } from 'vue'

const meta = {
	title: 'Forms/TagsField',
	component: TagsField,
	tags: ['autodocs']
} satisfies Meta<typeof TagsField>

export default meta

const Template: StoryFn<typeof TagsField> = (args: unknown) => ({
	components: { TagsField },
	setup() {
		const elements = ref([])
		return { elements, args }
	},
	template: `
    <TagsField v-bind="args" v-model="elements" placeholder="Add tags..." />
  `,
	methods: {}
})

export const Default = Template.bind({})
