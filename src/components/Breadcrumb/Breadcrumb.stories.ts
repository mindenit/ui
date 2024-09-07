import type { Meta, StoryFn, StoryObj } from '@storybook/vue3'
import { BreadcrumbItem, BreadcrumbRoot, BreadcrumbSeparator } from '.'

const meta = {
	title: 'Base/Breadcrumb',
	component: BreadcrumbRoot,
	tags: ['autodocs']
} satisfies Meta<typeof BreadcrumbRoot>

export default meta

const Template: StoryFn<typeof BreadcrumbRoot> = (args: unknown) => ({
	components: { BreadcrumbRoot, BreadcrumbItem, BreadcrumbSeparator },
	setup() {
		return { args }
	},
	template: `<BreadcrumbRoot>
    <BreadcrumbItem href='/'>
      Step 1
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem href='/'>
      Step 2
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem href='/' active='true'>
      Step 3
    </BreadcrumbItem>
  </BreadcrumbRoot>`
})

type Story = StoryObj<typeof meta>

export const Default = Template.bind({})
