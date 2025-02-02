<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText } from 'reka-ui';

const props = defineProps<SelectItemProps>()
</script>

<template>
	<SelectItem
		v-bind="props"
		class="text-fiord-950 inline-flex h-7 min-w-32 cursor-pointer select-none items-center [data-highlighted]:bg-fiord-100 rounded-lg px-2 text-sm outline-none hover:bg-fiord-100 data-[state=checked]:bg-fiord-100 dark:text-fiord-50 dark:hover:bg-fiord-800 dark:data-[state=checked]:bg-fiord-800 transition"
	>
		<SelectItemIndicator>
			<Icon class="size-4" icon="lucide:check" />
		</SelectItemIndicator>
		<SelectItemText><slot /></SelectItemText>
	</SelectItem>
</template>
