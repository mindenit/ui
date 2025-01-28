import type { Meta, StoryFn } from '@storybook/vue3'
import { BreadcrumbsItem, BreadcrumbsRoot, BreadcrumbsSeparator } from '.'

const meta = {
	title: 'Base/Breadcrumbs',
	component: BreadcrumbsRoot,
	tags: ['autodocs']
} satisfies Meta<typeof BreadcrumbsRoot>

export default meta

const Template: StoryFn<typeof BreadcrumbsRoot> = (args: unknown) => ({
	components: { BreadcrumbsRoot, BreadcrumbsItem, BreadcrumbsSeparator },
	setup() {
		return { args }
	},
	template: `<BreadcrumbsRoot>
    <BreadcrumbsItem href='/'>
      Step 1
    </BreadcrumbsItem>
    <BreadcrumbSeparator />
    <BreadcrumbsItem href='/'>
      Step 2
    </BreadcrumbsItem>
    <BreadcrumbsSeparator />
    <BreadcrumbsItem href='/' active='true'>
      Step 3
    </BreadcrumbsItem>
  </BreadcrumbsRoot>`
})

export const Default = Template.bind({})
