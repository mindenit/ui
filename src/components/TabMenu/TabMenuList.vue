<script setup lang="ts">
import { TabsIndicator, TabsList, TabsListProps, useForwardProps } from 'radix-vue'
const props = defineProps<TabsListProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<TabsList
		v-bind="forwarded"
		class="relative flex border-y border-fiord-200 py-[14px] data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:gap-y-2 data-[orientation=vertical]:rounded-xl data-[orientation=vertical]:border data-[orientation=vertical]:p-[10px] dark:border-fiord-600"
	>
		<TabsIndicator
			class="absolute bottom-0 left-0 h-[2px] w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] rounded-full px-8 transition-[width,transform] duration-300"
		>
			<div class="size-full bg-royal-blue-500" />
		</TabsIndicator>
		<slot />
	</TabsList>
</template>
