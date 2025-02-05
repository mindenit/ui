import type { Meta, StoryObj } from '@storybook/vue3/'
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '.'

const meta: Meta<typeof Table> = {
	title: 'Base/Table',
	component: Table,
}

export default meta

type Story = StoryObj<typeof Table>

const generateTestData = () => {
	const users = [
		{
			id: 1,
			name: 'John Peterson',
			email: 'john.p@example.com',
			role: 'Administrator',
			status: 'Active',
			lastLogin: '2024-02-05T10:30:00',
			department: 'IT Department',
		},
		{
			id: 2,
			name: 'Maria Collins',
			email: 'maria.c@example.com',
			role: 'Manager',
			status: 'Active',
			lastLogin: '2024-02-04T15:45:00',
			department: 'Sales',
		},
		{
			id: 3,
			name: 'Oliver Smith',
			email: 'oliver.s@example.com',
			role: 'Developer',
			status: 'Away',
			lastLogin: '2024-01-30T09:15:00',
			department: 'IT Department',
		},
		{
			id: 4,
			name: 'Natalie Shaw',
			email: 'natalie.s@example.com',
			role: 'Designer',
			status: 'Active',
			lastLogin: '2024-02-05T08:20:00',
			department: 'Design',
		},
		{
			id: 5,
			name: 'Andrew Miller',
			email: 'andrew.m@example.com',
			role: 'Developer',
			status: 'Active',
			lastLogin: '2024-02-05T11:10:00',
			department: 'IT Department',
		},
	]

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString)
		return new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
		}).format(date)
	}

	return users.map(user => ({
		...user,
		lastLogin: formatDate(user.lastLogin),
	}))
}

const columns = [
	{ key: 'id', label: 'ID' },
	{ key: 'name', label: 'Name' },
	{ key: 'email', label: 'Email' },
	{ key: 'role', label: 'Role' },
	{ key: 'status', label: 'Status' },
	{ key: 'lastLogin', label: 'Last Login' },
	{ key: 'department', label: 'Department' },
]

export const Default: Story = {
	render: args => ({
		components: { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow },
		setup: () => {
			const tableData = generateTestData()
			return { args, tableData, columns }
		},
		template: `
      <Table>
        <TableCaption>List of users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead v-for="column in columns" :key="column.key">
              {{ column.label }}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="user in tableData" :key="user.id">
            <TableCell class="font-medium">{{ user.id }}</TableCell>
            <TableCell>{{ user.name }}</TableCell>
            <TableCell>{{ user.email }}</TableCell>
            <TableCell>{{ user.role }}</TableCell>
            <TableCell>{{ user.status }}</TableCell>
            <TableCell>{{ user.lastLogin }}</TableCell>
            <TableCell>{{ user.department }}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    `,
	}),
}
