import { Meta, StoryFn } from '@storybook/vue3'
import {
	DialogBody,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogRoot,
	DialogTrigger
} from '.'
import { Button } from '../Button'
import { TextFieldInput, TextFieldRoot, TextFieldSlot } from '../TextField'
import { Icon } from '@iconify/vue'
import { FormLabel } from '../Form'

const meta = {
	title: 'Base/Dialog',
	component: DialogRoot,
	tags: ['autodocs']
} satisfies Meta<typeof DialogRoot>

export default meta

const Template: StoryFn<typeof DialogRoot> = (args: unknown) => ({
	components: {
		DialogRoot,
		DialogBody,
		DialogClose,
		DialogHeader,
		DialogFooter,
		DialogContent,
		DialogTrigger,
		Button,
		TextFieldRoot,
		TextFieldSlot,
		TextFieldInput,
		Icon,
		FormLabel
	},
	setup() {
		return { args }
	},
	template: `
    <DialogRoot v-bind="args">
      <DialogTrigger>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader title="Email verification" description="Enter your email to get verification code" icon="ph:gear" />
        <DialogBody>
          <FormLabel for="email">Email address</FormLabel>
          <TextFieldRoot>
            <TextFieldSlot>
              <Icon icon="ph:envelope" />
            </TextFieldSlot>
            <TextFieldInput id="email" placeholder="hello@mindenit.tech" type="email"  />
          </TextFieldRoot>
        </DialogBody>
        <DialogFooter>
          <DialogClose>
            <Button class="w-1/2" variant="outlined">Cancel</Button>
          </DialogClose>
          <DialogClose>
            <Button class="w-1/2">Send code</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  `
})

export const Default = Template.bind({})
