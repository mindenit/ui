<script setup lang="ts">
import { Icon } from '@iconify/vue'
import {
	PaginationEllipsis,
	PaginationFirst,
	PaginationLast,
	PaginationList,
	PaginationListItem,
	PaginationNext,
	PaginationPrev,
	PaginationRoot
} from 'radix-vue'
import { defineProps } from 'vue'
import type { PaginationProps } from '.'

const props = defineProps<PaginationProps>()
</script>

<template>
	<PaginationRoot
		:total="props.total"
		:sibling-count="props.siblingCount"
		:show-edges="props.showEdges"
		:default-page="props.defaultPage"
	>
		<PaginationList v-slot="{ items }" class="flex items-center gap-2">
			<PaginationFirst
				class="flex size-8 items-center justify-center rounded disabled:opacity-50 dark:text-fiord-400"
			>
				<Icon icon="ph:caret-double-left" />
			</PaginationFirst>
			<PaginationPrev
				class="flex size-8 items-center justify-center rounded disabled:opacity-50 dark:text-fiord-400"
			>
				<Icon icon="ph:caret-left" />
			</PaginationPrev>
			<template v-for="(page, index) in items">
				<PaginationListItem
					v-if="page.type === 'page'"
					:key="index"
					class="size-8 rounded border border-fiord-200 text-sm font-medium transition hover:bg-fiord-100 data-[selected]:bg-fiord-200 dark:border-fiord-800 dark:text-fiord-400 dark:hover:bg-fiord-700 dark:data-[selected]:bg-fiord-800"
					:value="page.value"
				>
					{{ page.value }}
				</PaginationListItem>
				<PaginationEllipsis
					v-else
					:key="page.type"
					:index="index"
					class="flex size-8 items-center justify-center rounded border text-sm font-medium dark:border-fiord-800 dark:text-fiord-400"
				>
					&#8230;
				</PaginationEllipsis>
			</template>
			<PaginationNext
				class="flex size-8 items-center justify-center rounded disabled:opacity-50 dark:text-fiord-400"
			>
				<Icon icon="ph:caret-right" />
			</PaginationNext>
			<PaginationLast
				class="flex size-8 items-center justify-center rounded disabled:opacity-50 dark:text-fiord-400"
			>
				<Icon icon="ph:caret-double-right" />
			</PaginationLast>
		</PaginationList>
	</PaginationRoot>
</template>
