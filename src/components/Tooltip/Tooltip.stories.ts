import type { Meta, StoryFn } from '@storybook/vue3'
import { TooltipContent, TooltipPortal, TooltipProvider, TooltipRoot, TooltipTrigger } from '.'

const meta = {
	title: 'Base/Tooltip',
	component: TooltipProvider,
	tags: ['autodocs']
} satisfies Meta<typeof TooltipProvider>

export default meta

const Template: StoryFn<typeof TooltipProvider> = (args: unknown) => ({
	components: { TooltipProvider, TooltipRoot, TooltipPortal, TooltipContent, TooltipTrigger },
	setup() {
		return { args }
	},
	template: `
    <TooltipProvider>
    <TooltipRoot>
      <TooltipTrigger>
        Text sample
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent
          :side-offset="5"
        >
          This is tooltip!
          <TooltipArrow
            :width="8"
          />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
	`
})

export const Default = Template.bind({})
Default.args = {}
