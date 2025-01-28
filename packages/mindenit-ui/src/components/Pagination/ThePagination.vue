<script setup lang="ts">
import type {
	PaginationRootEmits,
	PaginationRootProps,
} from 'reka-ui'
import { Icon } from '@iconify/vue'
import {
	PaginationEllipsis,
	PaginationFirst,
	PaginationLast,
	PaginationList,
	PaginationListItem,
	PaginationNext,
	PaginationPrev,
	PaginationRoot,
	useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<PaginationRootProps>()
const emits = defineEmits<PaginationRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<PaginationRoot v-bind="forwarded">
		<PaginationList v-slot="{ items }" class="flex items-center gap-2">
			<PaginationFirst
				class="flex size-8 items-center justify-center rounded-lg hover:bg-fiord-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:text-fiord-400 dark:hover:bg-fiord-800 dark:disabled:bg-transparent"
			>
				<Icon icon="ph:caret-double-left" />
			</PaginationFirst>
			<PaginationPrev
				class="flex size-8 items-center justify-center rounded-lg hover:bg-fiord-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:text-fiord-400 dark:hover:bg-fiord-800 dark:disabled:bg-transparent"
			>
				<Icon icon="ph:caret-left" />
			</PaginationPrev>
			<template v-for="(page, index) in items">
				<PaginationListItem
					v-if="page.type === 'page'"
					:key="index"
					class="size-8 rounded-lg border border-fiord-300 text-sm font-medium transition hover:bg-fiord-100 focus:border-fiord-300 focus:ring focus:ring-royal-blue-500/40 active:shadow-inner active:shadow-fiord-950/5 data-[selected]:border-royal-blue-600 data-[selected]:bg-royal-blue-500 data-[selected]:text-white data-[selected]:hover:shadow-md data-[selected]:hover:shadow-royal-blue-500/40 dark:border-fiord-700 dark:text-fiord-400 dark:hover:border-fiord-500 dark:hover:bg-fiord-700 dark:hover:text-white dark:active:shadow-fiord-50/5 dark:data-[selected]:border-royal-blue-400 dark:data-[selected]:text-white dark:data-[selected]:hover:border-royal-blue-400 dark:data-[selected]:hover:bg-royal-blue-500"
					:value="page.value"
				>
					{{ page.value }}
				</PaginationListItem>
				<PaginationEllipsis
					v-else
					:key="page.type"
					:index="index"
					class="flex size-8 select-none items-center justify-center rounded-lg border border-fiord-300 text-sm font-medium dark:border-fiord-700 dark:text-fiord-400"
				>
					&#8230;
				</PaginationEllipsis>
			</template>
			<PaginationNext
				class="flex size-8 items-center justify-center rounded-lg hover:bg-fiord-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:text-fiord-400 dark:hover:bg-fiord-800 dark:disabled:bg-transparent"
			>
				<Icon icon="ph:caret-right" />
			</PaginationNext>
			<PaginationLast
				class="flex size-8 items-center justify-center rounded-lg hover:bg-fiord-300 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent dark:text-fiord-400 dark:hover:bg-fiord-800 dark:disabled:bg-transparent"
			>
				<Icon icon="ph:caret-double-right" />
			</PaginationLast>
		</PaginationList>
	</PaginationRoot>
</template>
