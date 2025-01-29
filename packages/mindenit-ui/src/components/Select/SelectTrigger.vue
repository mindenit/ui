<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js';
import { SelectTrigger, type SelectTriggerProps, SelectValue } from 'reka-ui';

const props = defineProps<SelectTriggerProps & { placeholder: string }>()
</script>

<template>
	<SelectTrigger
		id="selectTrigger"
		v-bind="props"
		class="dark:hover:border-fiord-600 dark:hover:text-fiord-400 group inline-flex hover:border-fiord-400 focus:border-[#95A2B580] hover:text-fiord-600 transition h-10 min-w-52 text-fiord-500 cursor-pointer select-none items-center justify-between rounded-xl border border-fiord-300 px-3 text-sm focus:ring focus:ring-fiord-950/15 dark:border-fiord-700 dark:text-fiord-500  dark:focus:ring-fiord-50/15"
	>
		<SelectValue :placeholder="props.placeholder" />
		<Icon class="size-4 group-data-[state=open]:rotate-180 transition" icon="lucide:chevron-down" />
	</SelectTrigger>
</template>
