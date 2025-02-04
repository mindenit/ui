<script setup lang="ts">
import { Icon } from '@iconify/vue';
import {
	DropdownMenuSubTrigger,
	type DropdownMenuSubTriggerProps,
	useForwardProps,
} from 'reka-ui';

const props = defineProps<DropdownMenuSubTriggerProps>()
const forwardedProps = useForwardProps(props)
</script>

<template>
	<DropdownMenuSubTrigger
		v-bind="forwardedProps"
		class="text-fiord-950 hover:bg-fiord-100 dark:text-fiord-50 dark:hover:bg-fiord-800 w-full inline-flex cursor-pointer select-none items-center rounded-lg p-2 h-7 text-sm outline-none dark:focus:bg-fiord-800 focus:bg-fiord-100 data-[state=open]:bg-fiord-100 dark:data-[state=open]:bg-fiord-800 transition data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg:first-of-type]:mr-3 [&>svg]:size-3.5 [&>svg]:shrink-0"
	>
		<slot />
		<Icon icon="lucide:chevron-right" class="ml-auto" />
	</DropdownMenuSubTrigger>
</template>
