<script lang="ts" setup>
import { DropdownMenuItem, type DropdownMenuItemEmits, type DropdownMenuItemProps, useForwardPropsEmits } from 'reka-ui';

const props = defineProps<DropdownMenuItemProps>()
const emits = defineEmits<DropdownMenuItemEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<DropdownMenuItem
		v-bind="forwarded" class="relative text-fiord-950 inline-flex h-7 w-full cursor-pointer select-none items-center rounded-lg p-2 text-sm outline-none hover:bg-fiord-100  dark:text-fiord-50 dark:hover:bg-fiord-800 transition data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg:first-of-type]:mr-3 [&>svg]:size-3.5 [&>svg]:shrink-0"
	>
		<slot />
	</DropdownMenuItem>
</template>
