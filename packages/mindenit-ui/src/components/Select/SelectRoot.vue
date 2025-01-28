<script lang="ts" setup>
import {
	SelectRoot,
	type SelectRootEmits,
	type SelectRootProps,
	useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<SelectRootProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
	<SelectRoot v-bind="forwarded">
		<slot />
	</SelectRoot>
</template>
