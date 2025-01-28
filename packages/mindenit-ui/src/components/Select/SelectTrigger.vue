<script lang="ts" setup>
import { Icon } from '@iconify/vue/dist/iconify.js'
import { SelectTrigger, type SelectTriggerProps, SelectValue } from 'reka-ui'

const props = defineProps<SelectTriggerProps & { placeholder: string }>()
</script>

<template>
	<SelectTrigger
		id="selectTrigger"
		v-bind="props"
		class="group inline-flex h-10 min-w-72 cursor-pointer select-none items-center justify-between rounded-lg border border-fiord-300 px-3 text-sm focus:ring focus:ring-fiord-950/15 dark:border-fiord-700 dark:text-white dark:hover:bg-fiord-900 dark:focus:ring-fiord-50/15 dark:data-[placeholder]:text-fiord-400"
	>
		<SelectValue :placeholder="props.placeholder" />
		<Icon class="size-4 group-data-[state=open]:rotate-180" icon="ph:caret-down" />
	</SelectTrigger>
</template>
