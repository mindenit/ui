<script setup lang="ts">
import { TabsContent, TabsContentProps, useForwardProps } from 'radix-vue'
const props = defineProps<TabsContentProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<TabsContent v-bind="forwarded">
		<slot />
	</TabsContent>
</template>
