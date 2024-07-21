import type { Meta, StoryFn } from '@storybook/vue3'
import { Accordion, AccordionItem } from '.'

const meta = {
	component: Accordion,
	title: 'Base/Accordion',
	tags: ['autodocs']
} satisfies Meta<typeof Accordion>

export default meta

const Template: StoryFn<typeof Accordion> = (args: unknown) => ({
	components: { Accordion, AccordionItem },
	setup() {
		return { args }
	},
	template: `
    <Accordion v-bind="args">
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
    </Accordion>
  `
})

export const Default = Template.bind({})
Default.args = {
	type: 'single',
	defaultValue: 'item-1',
	collapsible: true
}
