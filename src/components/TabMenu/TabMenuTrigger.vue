<script setup lang="ts">
import { TabsTriggerProps, useForwardProps } from 'radix-vue'
const props = defineProps<TabsTriggerProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<TabsTrigger
		v-bind="forwarded"
		class="flex h-[45px] flex-1 cursor-default select-none items-center justify-center bg-white px-5 text-sm text-fiord-400 outline-none hover:text-black focus-visible:relative focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-black data-[state=active]:text-black"
	>
		<slot />
	</TabsTrigger>
</template>
