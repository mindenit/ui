<script setup lang="ts">
import {
	RadioGroupRoot,
	useForwardPropsEmits,
	type RadioGroupRootEmits,
	type RadioGroupRootProps
} from 'radix-vue'

const props = defineProps<RadioGroupRootProps>()
const emits = defineEmits<RadioGroupRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<RadioGroupRoot v-bind="forwarded" class="flex flex-col gap-3">
		<slot></slot>
	</RadioGroupRoot>
</template>
