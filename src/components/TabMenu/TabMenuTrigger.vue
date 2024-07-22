<script setup lang="ts">
import { TabsTrigger, TabsTriggerProps, useForwardProps } from 'radix-vue'

const props = defineProps<TabsTriggerProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<TabsTrigger
		v-bind="forwarded"
		class="flex flex-1 cursor-pointer select-none items-center justify-center gap-[6px] text-sm text-fiord-400 outline-none transition-all hover:text-black data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start data-[orientation=vertical]:rounded-md data-[orientation=vertical]:p-2 data-[state=active]:text-black data-[orientation=vertical]:hover:bg-royal-blue-100 dark:text-fiord-400 hover:dark:text-white dark:data-[state=active]:text-white data-[orientation=vertical]:dark:hover:bg-royal-blue-950"
	>
		<slot />
	</TabsTrigger>
</template>
