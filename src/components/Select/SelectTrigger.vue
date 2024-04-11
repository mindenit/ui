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
		class="inline-flex h-10 min-w-32 cursor-pointer select-none items-center justify-between rounded-lg border border-fiord-400 px-2 transition-all hover:bg-fiord-100 hover:shadow-md hover:shadow-fiord-950/10 focus:outline-none focus:ring focus:ring-royal-blue-500/40 disabled:shadow-none dark:border-fiord-700 dark:text-white dark:hover:border-fiord-500 dark:hover:bg-fiord-800 dark:hover:text-white dark:active:shadow-fiord-50/15 disabled:dark:border-none dark:disabled:bg-fiord-800 dark:disabled:text-fiord-400"
	>
		<SelectValue class="text-sm font-medium dark:text-white" :placeholder />
		<Icon icon="ph:caret-down" />
	</SelectTrigger>
</template>
