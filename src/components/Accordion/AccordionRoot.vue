<script setup lang="ts">
import {
	AccordionRoot,
	AccordionRootEmits,
	AccordionRootProps,
	useForwardPropsEmits
} from 'radix-vue'

const props = defineProps<AccordionRootProps>()
const emits = defineEmits<AccordionRootEmits>()
const forwerded = useForwardPropsEmits(props, emits)
</script>

<template>
	<AccordionRoot v-bind="forwerded" class="flex w-full flex-col gap-y-3 rounded-md">
		<slot />
	</AccordionRoot>
</template>
