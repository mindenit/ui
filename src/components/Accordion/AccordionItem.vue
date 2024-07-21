<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { AccordionItemProps } from 'radix-vue'
import {
	AccordionContent,
	AccordionHeader,
	AccordionTrigger,
	AccordionItem as RadixAccordionItem,
	useForwardProps
} from 'radix-vue'

const props = defineProps<AccordionItemProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<RadixAccordionItem
		v-bind="forwarded"
		class="overflow-hidden rounded-lg border border-fiord-200 text-sm dark:border-fiord-800"
	>
		<AccordionHeader class="flex">
			<AccordionTrigger
				class="group flex h-[48px] flex-1 cursor-pointer items-center justify-between bg-white px-[14px] font-medium outline-none transition-all hover:bg-fiord-200 data-[state=open]:bg-fiord-200 dark:bg-fiord-900 dark:text-white dark:hover:bg-fiord-800 dark:data-[state=open]:bg-fiord-800"
			>
				<slot name="title"></slot>
				<Icon
					icon="ph:plus"
					class="size-5 transition-transform group-data-[state=open]:rotate-45"
				/>
			</AccordionTrigger>
		</AccordionHeader>
		<AccordionContent
			class="overflow-hidden bg-fiord-200 text-fiord-800 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown dark:bg-fiord-800 dark:text-fiord-200"
		>
			<div class="px-[14px] py-[6px]">
				<slot name="content"></slot>
			</div>
		</AccordionContent>
	</RadixAccordionItem>
</template>
