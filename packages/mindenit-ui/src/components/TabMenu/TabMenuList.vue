<script setup lang="ts">
import type { TabsListProps } from 'reka-ui'
import { TabsIndicator, TabsList, useForwardProps } from 'reka-ui'

const props = defineProps<TabsListProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<TabsList
		v-bind="forwarded"
		class="relative flex border-y border-fiord-200 py-[14px] data-[orientation=horizontal]:h-12 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-y-2 data-[orientation=vertical]:rounded-xl data-[orientation=vertical]:border-0 dark:border-fiord-600"
	>
		<TabsIndicator
			class="absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full px-8 transition-[width,transform] duration-300"
		>
			<div class="size-full bg-royal-blue-500" />
		</TabsIndicator>
		<slot />
	</TabsList>
</template>
