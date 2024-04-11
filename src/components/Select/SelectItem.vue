<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { SelectItem, SelectItemIndicator, SelectItemText, type SelectItemProps } from 'radix-vue'

const props = defineProps<SelectItemProps>()
</script>
<template>
	<SelectItem
		v-bind="props"
		class="inline-flex h-9 cursor-pointer select-none items-center justify-start gap-1 rounded-lg pl-7 pr-2 outline-none transition-all hover:bg-fiord-200 hover:outline-none data-[disabled]:cursor-not-allowed data-[state=checked]:bg-royal-blue-500 data-[disabled]:text-fiord-400 data-[state=checked]:text-white data-[disabled]:hover:bg-transparent dark:text-white dark:hover:bg-fiord-800 dark:data-[state=checked]:bg-royal-blue-500 dark:data-[disabled]:text-fiord-500 dark:data-[disabled]:hover:bg-transparent"
	>
		<SelectItemIndicator class="absolute left-3 inline-flex w-6 items-center justify-center">
			<Icon icon="ph:check" class="size-4" />
		</SelectItemIndicator>
		<SelectItemText>
			<slot></slot>
		</SelectItemText>
	</SelectItem>
</template>
