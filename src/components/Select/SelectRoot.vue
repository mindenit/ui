<script lang="ts" setup>
import {
	SelectRoot,
	type SelectRootProps,
	type SelectRootEmits,
	useForwardPropsEmits
} from 'radix-vue'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<SelectRoot v-bind="forwarded"><slot></slot></SelectRoot>
</template>
