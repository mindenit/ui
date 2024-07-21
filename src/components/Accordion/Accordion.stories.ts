import type { Meta, StoryFn } from '@storybook/vue3'
import { AccordionItem, AccordionRoot } from '.'

const meta = {
	component: AccordionRoot,
	title: 'Base/Accordion',
	tags: ['autodocs']
} satisfies Meta<typeof AccordionRoot>

export default meta

const Template: StoryFn<typeof AccordionRoot> = (args: unknown) => ({
	components: { AccordionRoot, AccordionItem },
	setup() {
		return { args }
	},
	template: `
    <AccordionRoot v-bind="args">
      <AccordionItem value="item-1">
        <template #title>Title 1</template>
        <template #content>
          Content 1.
        </template>
      </AccordionItem>
      <AccordionItem value="item-2">
        <template #title>Title 2</template>
        <template #content>
          Content 2.
        </template>
      </AccordionItem>
      <AccordionItem value="item-3">
        <template #title>Title 3</template>
        <template #content>
          Content 3.
        </template>
      </AccordionItem>
    </AccordionRoot>
  `
})

export const Default = Template.bind({})
Default.args = {
	type: 'single',
	defaultValue: 'item-1',
	collapsible: true
}
