import type { Meta, StoryFn } from '@storybook/vue3'
import { TooltipContent, TooltipProvider, TooltipRoot, TooltipTrigger } from '.'

const meta = {
	title: 'Base/Tooltip',
	component: TooltipProvider,
	tags: ['autodocs']
} satisfies Meta<typeof TooltipProvider>

export default meta

const Template: StoryFn<typeof TooltipProvider> = (args: unknown) => ({
	components: { TooltipProvider, TooltipRoot, TooltipContent, TooltipTrigger },
	setup() {
		return { args }
	},
	template: `
    <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger>
        Text sample
      </TooltipTrigger>
      <TooltipContent
        :side-offset="5"
      >
        This is tooltip!
      </TooltipContent>
    </TooltipRoot>
  </TooltipProvider>
	`
})

export const Default = Template.bind({})
Default.args = {}
