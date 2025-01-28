<script setup lang="ts">
import type {
	AccordionRootEmits,
	AccordionRootProps,
} from 'reka-ui'
import {
	AccordionRoot,
	useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()
const forwerded = useForwardPropsEmits(props, emits)
</script>

<template>
	<AccordionRoot v-bind="forwerded" class="flex w-full flex-col gap-y-3 rounded-md">
		<slot />
	</AccordionRoot>
</template>
