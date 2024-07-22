<script setup lang="ts">
import { TabsRoot, TabsRootProps, useForwardPropsEmits } from 'radix-vue'
const props = defineProps<TabsRootProps>()
const emits = defineEmits(['update:value'])
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<TabsRoot v-bind="forwarded" class="flex w-full flex-col">
		<slot />
	</TabsRoot>
</template>
