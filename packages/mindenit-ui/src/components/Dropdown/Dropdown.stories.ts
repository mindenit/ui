import { Icon } from '@iconify/vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import { DropdownContent, DropdownItem, DropdownLabel, DropdownRoot, DropdownSeparator, DropdownShortcut, DropdownSub, DropdownSubContent, DropdownSubTrigger, DropdownTrigger } from '.'
import { Button } from '../Button'

const meta: Meta<typeof DropdownRoot> = {
	title: 'Forms/Dropdown',
	component: DropdownRoot,
}

export default meta

type Story = StoryObj<typeof DropdownRoot>

export const Default: Story = {
	render: args => ({
		components: { DropdownRoot, DropdownContent, DropdownItem, DropdownTrigger, DropdownLabel, DropdownSeparator, DropdownShortcut, DropdownSub, DropdownSubContent, DropdownSubTrigger, Button, Icon },
		setup: () => ({ args }),
		template: `
      <DropdownRoot>
        <DropdownTrigger><Button>Open dropdown</Button></DropdownTrigger>
        <DropdownContent>
          <DropdownLabel>My Account</DropdownLabel>
          <DropdownSeparator />
          <DropdownItem>
            <Icon icon="lucide:user-round" />
            Profile
            <DropdownShortcut>⇧⌘P</DropdownShortcut>  
          </DropdownItem>
          <DropdownItem>
            <Icon icon="lucide:credit-card" />
            Billing
            <DropdownShortcut>⌘B</DropdownShortcut>  
          </DropdownItem>
          <DropdownItem>
            <Icon icon="lucide:settings" />
            Settings
            <DropdownShortcut>⌘S</DropdownShortcut>  
          </DropdownItem>
          <DropdownSeparator />
          <DropdownItem>
            <Icon icon="lucide:users-round" />
            Team
          </DropdownItem>
          <DropdownSub>
            <DropdownSubTrigger>
              <Icon icon="lucide:user-round-plus" />
              Invite users
            </DropdownSubTrigger>
            <DropdownSubContent>
              <DropdownItem>
                <Icon icon="lucide:user-round-plus" />
                Invite by email
              </DropdownItem>
              <DropdownItem>
                <Icon icon="lucide:qr-code" />
                Invite by QR code
              </DropdownItem>
            </DropdownSubContent>
          </DropdownSub>
        </DropdownContent>
      </DropdownRoot>
    `,
	}),
}
