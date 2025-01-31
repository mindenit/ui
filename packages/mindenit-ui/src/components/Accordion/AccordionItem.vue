<script setup lang="ts">
import type { AccordionItemProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import {
	AccordionContent,
	AccordionHeader,
	AccordionTrigger,
	AccordionItem as RadixAccordionItem,
	useForwardProps
} from 'reka-ui'

const props = defineProps<AccordionItemProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<RadixAccordionItem
		v-bind="forwarded"
		class="overflow-hidden rounded-lg border border-fiord-300 text-sm dark:border-fiord-800"
	>
		<AccordionHeader class="flex">
			<AccordionTrigger
				class="group flex h-12 flex-1 cursor-pointer items-center justify-between bg-white px-3 font-medium outline-none transition-all hover:bg-fiord-200 data-[state=open]:bg-fiord-200 dark:bg-fiord-900 dark:text-white dark:hover:bg-fiord-800 dark:data-[state=open]:bg-fiord-800"
			>
				<slot name="title" />
				<Icon
					icon="ph:plus"
					class="size-5 transition-transform group-data-[state=open]:rotate-45"
				/>
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent
			class="box-border overflow-hidden bg-fiord-200 text-fiord-800 data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down dark:bg-fiord-800 dark:text-fiord-200"
		>
			<div class="px-3 pb-3 pt-2">
				<slot name="content" />
			</div>
		</AccordionContent>
	</RadixAccordionItem>
</template>