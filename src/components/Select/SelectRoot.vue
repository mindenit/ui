<script lang="ts" setup>
import {
	SelectRoot,
	useForwardPropsEmits,
	type SelectRootEmits,
	type SelectRootProps
} from 'radix-vue'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<SelectRoot v-bind="forwarded">
		<slot></slot>
	</SelectRoot>
</template>
