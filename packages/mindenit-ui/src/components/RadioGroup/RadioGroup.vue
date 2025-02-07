<script setup lang="ts">
import {
	RadioGroupRoot,
	type RadioGroupRootEmits,
	type RadioGroupRootProps,
	useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<RadioGroupRootProps>()
const emits = defineEmits<RadioGroupRootEmits>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<RadioGroupRoot v-bind="forwarded" class="flex flex-col gap-3">
		<slot />
	</RadioGroupRoot>
</template>
