<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import { SelectTrigger, SelectValue, type SelectTriggerProps } from 'radix-vue'
interface Props extends SelectTriggerProps {
	placeholder: string
}
const props = defineProps<Props>()
</script>
<template>
	<SelectTrigger
		v-bind="props"
		class="inline-flex min-w-32 cursor-pointer items-center justify-between rounded-lg border border-fiord-400 py-[14px] pl-4 pr-5 focus:outline-none dark:border-fiord-700 dark:text-white"
	>
		<SelectValue class="text-sm font-medium dark:text-white" :placeholder />
		<Icon icon="ph:caret-down" />
	</SelectTrigger>
</template>
