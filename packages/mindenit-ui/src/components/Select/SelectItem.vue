<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { SelectItem, SelectItemIndicator, type SelectItemProps, SelectItemText } from 'reka-ui'

const props = defineProps<SelectItemProps>()
</script>

<template>
	<SelectItem
		v-bind="props"
		class="inline-flex h-9 min-w-32 cursor-pointer select-none items-center justify-between rounded-lg px-2 text-sm outline-none hover:bg-fiord-100 dark:text-white dark:hover:bg-fiord-800"
	>
		<SelectItemText><slot /></SelectItemText>
		<SelectItemIndicator>
			<Icon class="size-4" icon="lucide:check" />
		</SelectItemIndicator>
	</SelectItem>
</template>
