<script lang="ts" setup>
import { Icon } from '@iconify/vue';
import { SelectTrigger, type SelectTriggerProps, SelectValue } from 'reka-ui';

const props = defineProps<SelectTriggerProps & { placeholder: string }>()
</script>

<template>
	<SelectTrigger
		id="selectTrigger"
		v-bind="props"
		class="dark:hover:border-fiord-600 dark:text-fiord-50 dark:hover:data-[placeholder]:text-fiord-400 group inline-flex hover:border-fiord-400  hover:data-[placeholder]:text-fiord-600 transition h-10 min-w-52 data-[placeholder]:text-fiord-500 text-fiord-950 cursor-pointer select-none items-center justify-between rounded-lg border border-fiord-300 px-3 text-sm focus:ring-3 focus:ring-fiord-400/50 focus:data-[placeholder]:text-fiord-600 focus:outline-none dark:border-fiord-700 dark:data-[placeholder]:text-fiord-500 dark:focus:ring-fiord-600/50 dark:focus:border-fiord-600 dark:focus:data-[placeholder]:text-fiord-400 bg-fiord-50 dark:bg-fiord-950"
	>
		<SelectValue :placeholder="props.placeholder" />
		<Icon class="size-4 group-data-[state=open]:rotate-180 transition" icon="lucide:chevron-down" />
	</SelectTrigger>
</template>
