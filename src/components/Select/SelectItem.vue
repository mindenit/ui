<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { SelectItem, SelectItemIndicator, SelectItemText, type SelectItemProps } from 'radix-vue'

const props = defineProps<SelectItemProps>()
</script>
<template>
	<SelectItem
		v-bind="props"
		class="inline-flex cursor-pointer select-none gap-[14px] rounded-lg p-2 outline-none hover:outline-none data-[disabled]:cursor-not-allowed data-[state=checked]:bg-royal-blue-500 data-[disabled]:text-fiord-400 data-[state=checked]:text-white dark:text-white dark:data-[state=checked]:bg-royal-blue-500 dark:data-[disabled]:text-fiord-500"
	>
		<SelectItemIndicator>
			<Icon icon="ph:check" />
		</SelectItemIndicator>
		<SelectItemText>
			<slot />
		</SelectItemText>
	</SelectItem>
</template>
