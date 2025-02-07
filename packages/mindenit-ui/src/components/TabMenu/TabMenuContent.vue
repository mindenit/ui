<script setup lang="ts">
import type { TabsContentProps } from 'reka-ui'
import { TabsContent, useForwardProps } from 'reka-ui'

const props = defineProps<TabsContentProps>()
const forwarded = useForwardProps(props)
</script>

<template>
	<TabsContent v-bind="forwarded">
		<slot />
	</TabsContent>
</template>
